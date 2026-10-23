# FOOD4ALL

Landing informativa (proyecto universitario conceptual). Datos de ejemplo. Primera versión pensada para ordenador.

- `frontend/` — React + Vite. Vista pública y panel de administración.
- `backend/` — Node + Express. API propia, sesión de administrador, proxy de Asana y, si está compilada, la propia web.

## Ejecutar

Primera vez:

```bash
cp backend/.env.example backend/.env   # rellena ADMIN_USER, ADMIN_PASSWORD, SESSION_SECRET y Asana
npm run install:all
```

**Para enseñarla (un solo comando):**

```bash
npm start      # compila la web y la sirve desde el backend → http://localhost:3001
```

**Para desarrollar (recarga en caliente, dos terminales):**

```bash
npm run dev --prefix backend    # API en http://localhost:3001
npm run dev --prefix frontend   # web en http://localhost:5173 (redirige /api al backend)
```

Requiere Node 22 o superior.

## Diseño

Colores, tipografía, componentes, imágenes y arquitectura: [`docs/DISENO.md`](docs/DISENO.md).

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Portada: hero, quiénes somos, cómo funciona (con diagrama), qué somos y qué no, estado del proyecto, accesos a cada zona |
| `/comprar` | Recorrido del cliente (6 pasos + 10 en detalle), asistente de IA en dos líneas (vídeo opcional), productos con filtros, comparación y suscripción |
| `/comprar/cliente` | Pedido de ejemplo: carrito multi-vendedor, pago único, seguimiento, recordatorios e incidencias |
| `/vender` | Recorrido del vendedor, qué gana, reparto de papeles, requisitos y formulario de alta (funciona) |
| `/comunidad` | Por qué nos importa la comunidad, qué publicaremos, nuestras redes (enlaces en `frontend/src/data/social.js`) y cómo participar |
| `/vender/panel` | Panel de ejemplo: catálogo, pedidos, liquidación y visibilidad patrocinada |
| `/admin` | Privado, con barra lateral: resumen, mercado, marco legal, equipo, hitos de Asana en directo, altas, marketplace de ejemplo y registro de prompts con agente revisor. Arriba, un buscador que salta a cada sección y responde preguntas simples con IA |

## Requisitos (Hito 2)

Requisitos del marketplace (RF-01 a RF-19, RNF-01 a RNF-11, 556 requisitos atómicos comparados con la competencia) y backlog: [`docs/requisitos/`](docs/requisitos/README.md). Están también en Asana, en el Hito 2 de Food4All.

## IA del panel: buscador y agente revisor

Usa **Gemini, en su nivel gratuito** (Google AI Studio). Necesita en `backend/.env`:

```
GEMINI_API_KEY=tu_clave
```

La clave se crea gratis en [aistudio.google.com](https://aistudio.google.com) → Get API key. Solo vive en el backend. Uso previsto: unas 5-10 consultas al día, muy por debajo del límite gratuito (el límite exacto de cada modelo se ve en AI Studio). Sin clave, el panel funciona igual: el buscador solo salta entre secciones y el botón de pulir sale desactivado.

- **Buscador** (barra lateral, `backend/search.js`): al escribir, muestra las secciones que coinciden; con Intro, responde preguntas simples ("¿de qué va el proyecto?") con los datos del panel y ofrece ir al apartado correcto. No es un agente: una sola consulta, sin herramientas. Modelo: `gemini-3.5-flash-lite` (~2-3 s).
- **Agente revisor** (`backend/agent.js`): el botón **Pulir con IA** propone una versión más clara del prompt sin cambiar lo que pide. Nada se guarda sin confirmar, y el original no se toca. Modelo: `gemini-3.5-flash` (~3-5 s; el documento maestro entero, bastante más).

**Condiciones del nivel gratuito** ([términos de la API de Gemini](https://ai.google.dev/gemini-api/terms)):
- Solo en el **panel privado**, para el equipo. En la UE no se puede ofrecer a usuarios una app con el nivel gratuito: un buscador en la web pública necesitaría el nivel de pago.
- Desde la UE, Google aplica las reglas de privacidad del nivel de pago: no usa lo que se envía para entrenar. Aun así, piden no enviar datos personales.
- Hay que ser mayor de 18 años.

## Prompts

Todos los prompts usados para desarrollar el proyecto se guardan en [`prompts/`](prompts/README.md), un `.md` por prompt. Se ven, se añaden y se copian desde `/admin#prompts`.

## Asana

En `backend/.env`:

```
ASANA_TOKEN=tu_personal_access_token
ASANA_PROJECT_GID=gid_del_proyecto
```

- Token: Asana → foto de perfil → Configuración → Apps → Tokens de acceso personal.
- GID del proyecto: el número largo de la URL del proyecto (`app.asana.com/0/<GID>/...`).

El token solo vive en el backend; `.env` está en `.gitignore`. Si falta o falla, el panel muestra el plan de hitos sin estado.

### Cómo se leen los hitos

El proyecto es el de la asignatura ("A- Universidad Europe ISW – Plantilla Base Scrum", GID `1218693735718662`) y lo comparten varios grupos.
El panel (`/api/admin/milestones`) solo lee las tareas que empiezan por `[Food4All]` (también acepta la errata `[Foof4All]`):

- Cada tarea `[Food4All] Hito N – …` es un hito del curso.
- Sus subtareas y las subtareas de estas se muestran en dos niveles, con estado, responsable y fecha.

Asana es la fuente de verdad. El plan de `backend/project.js` (los 6 bloques del Hito 1 con su responsable previsto) solo se usa:
- para mostrar "plan: <persona>" cuando el responsable de Asana falta o no coincide;
- para mostrar "Solo en el plan" los pasos que aún no existen en Asana;
- como respaldo si no hay conexión.

## Estado

Es una landing informativa, no el marketplace real: el asistente, el carrito y el seguimiento son ejemplos estáticos.
Los precios se muestran como "Precio todavía no disponible".

Datos de ejemplo (inventados): `frontend/src/data/examples.js`.
Contenido interno (hitos, mercado, legal, equipo): `backend/project.js`, servido solo con sesión en `/api/admin/project`.
Fotos ilustrativas: Wikimedia Commons (licencias libres) en `frontend/public/img/`, créditos en `frontend/src/data/photoCredits.js` y en la página `/creditos`.
Ilustración del hero: `frontend/public/hero.svg`. Logo: `frontend/src/components/Logo.jsx` y `frontend/public/favicon.svg`.
Altas de vendedores: se guardan de forma provisional en `backend/data/db.json` y solo se ven desde administración.
