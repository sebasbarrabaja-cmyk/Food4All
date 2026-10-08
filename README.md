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
| `/comprar` | Recorrido del cliente (6 pasos + 10 en detalle), ejemplo del asistente de IA, productos con filtros, comparación y suscripción |
| `/comprar/cliente` | Pedido de ejemplo: carrito multi-vendedor, pago único, seguimiento, recordatorios e incidencias |
| `/vender` | Recorrido del vendedor, qué gana, reparto de papeles, requisitos y formulario de alta (funciona) |
| `/vender/panel` | Panel de ejemplo: catálogo, pedidos, liquidación y visibilidad patrocinada |
| `/admin` | Privado: resumen, mercado, marco legal, equipo, hitos de Asana en directo, altas y marketplace de ejemplo |

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
