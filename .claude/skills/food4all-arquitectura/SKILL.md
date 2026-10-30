---
name: food4all-arquitectura
description: Arquitectura técnica de la landing de FOOD4ALL — qué hace cada archivo de backend/ (Express) y frontend/ (React + Vite), rutas de la API, dónde se guarda cada dato, IA local (Ollama) y Asana, cómo arrancar y comprobar. Úsala antes de tocar código, añadir una ruta, una sección del panel o un dato nuevo, o para depurar.
---

# FOOD4ALL · Arquitectura

Árbol completo de carpetas: `docs/DISENO.md`, apartado 7. Variables de entorno: `README.md` (nunca abras `backend/.env`).

## Arrancar y comprobar

- `npm run install:all` la primera vez (en WSL o Linux, siempre: los `node_modules` de Windows no sirven).
- `npm start`: compila `frontend/` y lo sirve desde el backend en `localhost:3001`.
- Desarrollo: `npm run dev --prefix backend` (API en 3001) y `npm run dev --prefix frontend` (5173, redirige `/api`).
- No hay tests: se comprueba compilando (`npm run build`), llamando a la API con `curl` y con la skill `browser-qa`.

## Backend (`backend/`, Node 22 y Express, sin base de datos)

| Archivo | Qué hace |
| --- | --- |
| `server.js` | Rutas, sesión de admin (`express-session`) y sirve `frontend/dist` |
| `project.js` | Contenido interno (equipo, mercado, legal, hitos, decisiones). Solo con sesión |
| `hito2.js` | Lee `docs/requisitos` (Markdown y JSON) en cada petición para `/admin#hito2` |
| `asana.js` | Lee Asana: solo tareas `[Food4All]`, dos niveles de subtareas. Sin conexión, usa el plan de `project.js` |
| `prompts.js` | Lee y escribe `prompts/*.md`. Campos: `titulo, fecha, autor, herramienta, tipo, tema, origen`; listas `TYPES` y `TEMAS` |
| `ia.js` | Llamada a la IA local (Ollama, modelo `IA_MODELO`, por defecto `qwen3.5:4b`). Sin clave ni pago; solo funciona donde corre Ollama. Traduce su consumo de tokens a la forma común de `modulos/tokens.js` |
| `search.js` | Buscador del panel: una llamada con los datos del panel y la lista `DESTINOS`. Sin herramientas |
| `store.js` | Altas de vendedores en `backend/data/db.json` (ignorado por git) |
| `limiter.js` | Límite de intentos (login y formularios) |

**API:** `POST /api/sellers/apply` (pública). Con sesión: `POST /api/admin/login|logout`, `GET /api/admin/me|project|sellers|milestones|hito2|prompts`, `GET /api/admin/asana/tasks/:gid/subtasks`, `POST /api/admin/prompts`, `POST /api/admin/ask`. El resto de `/api` da 404.

## Frontend (`frontend/src/`, React 18, Vite y React Router)

- Rutas en `App.jsx`: `/`, `/comprar`, `/comprar/cliente`, `/vender`, `/vender/panel`, `/comunidad`, `/creditos`, `/admin/login`, `/admin`.
- Panel: `pages/Admin.jsx` (lista `SECTIONS` y `KEYWORDS` del buscador), `AdminHito2.jsx`, `AdminPrompts.jsx`, `AdminLogin.jsx`.
- Datos de ejemplo: `data/examples.js`; redes: `data/social.js`; créditos de fotos: `data/photoCredits.js`.
- Estilos: `styles/tokens.css` → `base.css` → `layout.css` → `palette.css` → `motion.css` → `admin.css` (skill `food4all-diseno`).

## Reglas al cambiar

- Lo interno (equipo, hitos, mercado, legal) **nunca** va en el JavaScript público: se sirve desde el backend con sesión.
- Una sección nueva del panel va en `SECTIONS` y `KEYWORDS` (`Admin.jsx`) **y** en `DESTINOS` (`search.js`).
- Nada de dependencias nuevas sin preguntar a Sebastián.
- Si hay entradas de usuario, autenticación o datos: `/security-review` además de `/code-review`.
