# FOOD4ALL · Contratos del feedback del 27/10

Reparto y acuerdos para que cada uno haga su parte sin esperar a los demás y todo encaje al unirlo. Si hay que cambiar un contrato, se habla antes con quien lo usa y se cambia aquí, en el mismo commit que el código. Versión 1 (27/10/2026, Sebastián como Product Owner).

## 1. Reparto y archivos de cada uno

Cada persona cambia **solo sus archivos**. Lo compartido (`server.js`, `Admin.jsx`, `App.jsx`, `search.js`) ya está preparado en el esqueleto (`feat/esqueleto-feedback`) y no hace falta tocarlo.

| Persona | Puntos | Sus archivos |
| --- | --- | --- |
| **Sebastián** (prompts e IA) | 1 buscador IA · 5 tokens · 9 prompts en base de datos · 10 orden y etiquetas de prompts | `backend/prompts.js`, `search.js`, `gemini.js`, `modulos/tokens.js`, `tools/tokens-sesion.mjs`, `frontend/src/pages/AdminPrompts.jsx`, `AdminTokens.jsx`; migraciones `010–019` |
| **Miguel** (datos; empieza hoy) | Base de datos común · 7 usuarios y avisos · 2 tareas en la landing · 8 cronograma · 6 trazabilidad | `backend/db.js`, `modulos/tareas.js`, `avisos.js`, `cronograma.js`, `traza.js`, `docker-compose.yml`, el bloque de login de `server.js` (`/api/admin/login`, `logout`, `me` y `requireAdmin`), `AdminLogin.jsx`, `AdminAvisos.jsx`, `AdminTareas.jsx`, `AdminCronograma.jsx`, `AdminTraza.jsx`; migraciones `001–009` |
| **Juan Antonio** (frontend) | 3 idiomas · 4 FAQ · 11 expectativa vs. realidad | `frontend/src/i18n/`, las páginas públicas (`Home`, `Comprar`, `ClienteVista`, `Vender`, `VendedorPanel`, `Comunidad`, `Creditos`, `Faq`, `NotFound`), `PublicLayout.jsx`, `modulos/expectativa.js`, `AdminExpectativa.jsx`; migraciones `020–029` |

**Hoy, Miguel:** 1) `db.js` y la migración `001` (`usuarios`); 2) login por persona; 3) avisos con los datos de prueba de tareas.

## 2. Rutas de la API

Todas van bajo `/api/admin/` y exigen sesión (`requireAdmin`, ya puesto en `backend/modulos/index.js`). **La forma exacta de cada respuesta es la de su archivo en `backend/datos-prueba/`**: la versión real devuelve los mismos campos con los mismos nombres y tipos. Se pueden **añadir** campos; quitar o renombrar uno es cambiar el contrato.

| Ruta | Datos de prueba | Dueño | Lo usa |
| --- | --- | --- | --- |
| `GET tareas` | `tareas.json` | Miguel | avisos, cronograma, traza, expectativa |
| `GET avisos` | `avisos.json` | Miguel | — |
| `GET cronograma` | `cronograma.json` | Miguel | — |
| `GET traza` | `traza.json` | Miguel | — |
| `GET tokens` | `tokens.json` (la real añade `fuentes`: archivos leídos) | Sebastián | expectativa (puede usar `resumen()` de `modulos/tokens.js`) |
| `GET expectativa` | `expectativa.json` | Juan Antonio | — |

Las rutas nuevas (`POST`, `PATCH`…) las añade cada dueño en su módulo y las apunta aquí.

## 3. Base de datos

- **El motor lo decide Miguel** (PostgreSQL, que es lo que pidió el profesor, u otro). Mientras no esté, nadie se bloquea: si no hay `DATABASE_URL`, `dbReady()` es `false` y cada módulo responde con sus datos de prueba. Los prompts siguen en sus `.md`.
- **Interfaz de `backend/db.js`** (la implementa Miguel; los demás solo la usan): `dbReady()` → `boolean` y `query(sql, params)` → lista de filas. Nada de importar el driver directamente en otros archivos.
- **Migraciones** en `backend/db/migraciones/NNN-nombre.sql`, numeradas por bloques para que nunca choquen: Miguel `001–009`, Sebastián `010–019`, Juan Antonio `020–029`.
- **Tablas previstas** (columnas mínimas; el dueño puede añadir más):

| Tabla | Dueño | Columnas |
| --- | --- | --- |
| `usuarios` | Miguel | `id` (texto: `sebastian`, `juan-antonio`, `miguel`), `nombre`, `rol`, `clave_hash`, `clave_sal` |
| `tareas` | Miguel | `id` (`T-001`…), `titulo`, `responsable` → `usuarios.id`, `estado` (`pendiente`, `en curso`, `hecha`), `inicio`, `fecha_limite`, `hito`, `asana_gid` |
| `tarea_requisitos` | Miguel | `tarea` → `tareas.id`, `requisito` (`RF-…`, `RNF-…`, `RST-…`) |
| `traza` | Miguel | `necesidad`, `requisito`, `tarea` → `tareas.id`, `prompt` → `prompts.id` |
| `prompts` | Sebastián | `id` (nombre del `.md` sin extensión), `titulo`, `fecha`, `autor` → `usuarios.id`, `herramienta`, `tipo`, `tema`, `resultado` |
| `prompt_etiquetas` | Sebastián | `prompt` → `prompts.id`, `etiqueta` (landing, requisito, búsqueda de información…) |
| `tokens` | Sebastián | las columnas de `docs/tokens/<persona>/*.csv`, más `accion` y `prompt` → `prompts.id` |

## 4. Claves que comparten todos

- **Personas:** `sebastian`, `juan-antonio` y `miguel` (`backend/datos-prueba/usuarios.json`). Siempre este ID, nunca el nombre con tildes.
- **Tareas:** `T-001`, `T-002`… · **Requisitos:** los de `docs/requisitos/` (`RF-05`, `RNF-…`) · **Prompts:** el nombre del `.md` sin extensión (`2026-10-27-01-sesion-feedback-y-agentes`).
- **Fechas:** `AAAA-MM-DD`, y con hora `AAAA-MM-DD HH:MM` (hora de España).

## 5. Sesión por persona (punto 7)

- Contraseñas con `scrypt` de `node:crypto`: sin dependencias nuevas, con sal por usuario y comparación con `timingSafeEqual`.
- Tras entrar: `req.session.usuario = { id, nombre }`. **También** `req.session.admin = true`, para que todo lo que ya existe siga funcionando sin cambios.
- `GET /api/admin/me` devuelve `{ admin, usuario }`.
- Se mantiene el límite de 5 intentos (`limiter.js`). Antes del PR: `/security-review`.

## 6. Idiomas (punto 3)

- `react-i18next` (aprobado por Sebastián el 27/10). Solo la **web pública**: el panel sigue en español.
- Español e inglés. Textos en `frontend/src/i18n/es.json` y `en.json`, con una clave por página (`home.*`, `comprar.*`, `faq.*`…).
- El selector va en la cabecera (`PublicLayout.jsx`).

## 7. Ramas y unión

- Un issue por punto. Rama `feat/<punto>` desde `main` **después** de unir el esqueleto, con el número del issue en el PR («Closes #N»).
- Antes de abrir el PR: `git fetch` y `git rebase origin/main`, compilar (`npm run build`) y abrir el panel.
- **Orden de unión:** esqueleto → base de datos (Miguel) → el resto en cualquier orden.
- Cada sesión, su registro en `prompts/` (skill `food4all-prompts`).
