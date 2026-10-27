---
titulo: Tareas del 27/10: idiomas (punto 3), FAQ (punto 4) y expectativa vs. realidad (punto 11)
fecha: 2026-10-27
autor: Juan Antonio
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
origen: Revisión de lo que repartió Sebastián (issues #20 a #22), el issue #20 (web pública en español e inglés) el #21 (preguntas frecuentes) y el #22 (expectativa vs. realidad)
---

Horas sacadas del historial de la sesión (hora de España).

### 14:58

Hola quiero que revises en asana y github el projecto ya que mi compañero sebastián realizo cambios y asigno nuevas tareas entonces quiero que me digas que tengo que hacer como Juan Antonio

**Resultado:** En Asana, la cuenta conectada solo ve un proyecto personal; no aparece el de Food4All ni tareas `[Food4All]`. En GitHub, Sebastián repartió el feedback del profesor del 27/10 en los issues #11 a #22; a Juan Antonio (`Jamc46`) le tocan #20 (idiomas), #21 (FAQ) y #22 (expectativa vs. realidad), con el reparto y los contratos en `docs/contratos.md`. Los PR #23 a #27 van encadenados y aún no están en `main`. Pendientes anteriores en `docs/estado.md`: revisar con sus palabras las conclusiones de E5 y E6 y la revisión cruzada del comparativo y de las personas. Orden propuesto: #20 → #21 → #22.

### 15:00

Pues vamos a ello

**Resultado:** Issue #20 en la rama `feat/idiomas`, creada desde `feat/esqueleto-feedback` porque el esqueleto aún no está en `main` (habrá que hacer `git rebase origin/main` cuando se una). Se instalan `react-i18next` e `i18next` (aprobados en el issue); sin detector de idioma para no añadir otra dependencia. Todos los textos de la web pública pasan a `frontend/src/i18n/es.json` y `en.json`, una clave por página; los datos de ejemplo siguen en `data/examples.js` y solo `en.json` los traduce. Selector «ES · EN» en la cabecera (`aria-pressed`, `lang`), idioma guardado en el navegador, `<html lang>` y títulos de pestaña según el idioma. El panel (`/admin`) sigue en español, también las etiquetas de estado. Comprobado con `npm run build` y capturas en español e inglés de la portada, `/comprar` y `/comprar/cliente`. Pendiente: los errores del formulario de alta vienen del servidor y siguen solo en español.

### 15:11

Sí, sube la rama y abre el PR

**Resultado:** `git push` de `feat/idiomas`. El PR va contra `feat/esqueleto-feedback`, como los demás PR encadenados del 27/10, para que solo se vea el cambio de idiomas; cuando se una el esqueleto, GitHub lo pasa a `main`. Sin `gh` en este ordenador, el PR se abre desde el enlace de GitHub con el título y la descripción ya puestos.

### 15:12

Ya está creado, sigue con la FAQ

**Resultado:** Rama `feat/faq` sobre `feat/idiomas`, para que la FAQ salga ya traducida. Se buscan las fuentes de lo decidido: `FOOD4ALL_linea_base_h2.md` (registro de cambios y apartado 5), las RST de `FOOD4ALL_criba_argumentos.md`, `FOOD4ALL_estados_pedido.md` y las decisiones de `backend/project.js`. Propuesta de 17 preguntas (12 para estudiantes y 5 para vendedores), cada una con su fuente, para que Juan Antonio las apruebe antes de escribirlas. Dos consultas: si incluir la de cancelar (regla abierta) y la de valoraciones (C-29).

### 15:14

Me parece bien, incluye las dos y escríbela

**Resultado:** Página `/faq` con las 17 preguntas en español e inglés (`faq.*` de `es.json` y `en.json`), en dos bloques con preguntas desplegables (`<details>`). Lo abierto lleva su etiqueta: «Por definir» (zonas dentro de cada ciudad, coste de entrega, cancelación, puntos de recogida, pagar sin cuenta, incidencias, comisión) e «Hipótesis» (compra mínima, precios más competitivos). Ninguna respuesta añade nada que no esté en las fuentes. Durante el trabajo, un script reescrito con PowerShell estropeó las tildes del bloque `faq`; se detectó en la captura y se reparó antes del commit. Comprobado con `npm run build`, el texto renderizado en los dos idiomas y capturas de `/faq`. `docs/DISENO.md` recoge el patrón y la ruta.

### 15:18

No dime el que falta

**Resultado:** No se sube la FAQ. Explicación del #22: sección del panel que compara lo previsto en `docs/FOOD4ALL_alcance_coste_tiempo.md` con lo real (git, `prompts/` y tokens), con su fuente; ruta `GET /api/admin/expectativa` y vista `AdminExpectativa.jsx`. Las horas reales no las mide nadie. Dos preguntas: qué hacer con las horas y de qué rama partir.

### 15:19

Pues hazlo y subelo al git . Antes de subirlo dime que cambiaste y muestramelo y doy mi visto bueno

**Resultado:** Sin respuesta a las dos preguntas, se toman las opciones por defecto: horas «Sin medir» y rama `feat/expectativa` sobre `feat/faq`. `backend/modulos/expectativa.js` calcula en cada petición 12 filas: cada hito con sus fechas y horas previstas frente a su estado y los commits de esas fechas; horas y coste de personal «Sin medir»; tokens de la ruta del #17 (datos de prueba mientras no esté); estado de los hitos; commits por persona (los cuatro nombres de autor de Sebastián son la misma cuenta) y sesiones y mensajes de `prompts/` por autor. Cada fila lleva `medido` (medido, sin medir, datos de prueba o por llegar), campo añadido al contrato. Vista en el panel con una tabla y la fuente de cada dato. Comprobado: la ruta da 401 sin sesión y 12 filas con sesión (servidor local con credenciales de prueba, sin leer `backend/.env`), `npm run build` y captura del panel. No se sube hasta el visto bueno de Juan Antonio.

### 15:24

Sí, súbelo y prepara los PR

**Resultado:** Con el visto bueno de Juan Antonio, `git push` de `feat/faq` y `feat/expectativa`. Dos PR encadenados, como el de idiomas: FAQ contra `feat/idiomas` («Closes #21») y expectativa contra `feat/faq` («Closes #22»). Sin `gh`, se abren desde los enlaces de GitHub con el título y la descripción puestos.

## Revisión crítica del equipo

*Pendiente: la escribe Juan Antonio.*
