# FOOD4ALL · Guía de diseño y arquitectura

Referencia para seguir trabajando en la landing sin perder la coherencia. Si algo de aquí cambia, actualízalo en el mismo cambio.

Estado: primera versión para el profesor (octubre de 2026), pensada para **ordenador** y en **modo claro**. La versión móvil está pendiente.

---

## 1. Principios

1. **Rápido y sencillo: "tres botones y ya".** El visitante debe entender qué es FOOD4ALL y elegir en menos de 30 segundos. Las tres acciones son **Quiero comprar**, **Quiero vender** y **Cómo funciona**. Si una pantalla obliga a pensar más, sobra contenido.
2. **Contraste alto.** El texto siempre va sobre fondo liso. Nunca va texto encima de texturas o dibujos.
3. **Producto local visible desde el primer segundo:** ilustración de campo en el hero y fotos de mercado.
4. **Honestidad:**
   - Es un proyecto conceptual: los datos son de ejemplo y se marcan como tal.
   - Los precios aparecen como "Precio todavía no disponible".
   - Se distingue siempre lo **decidido**, las **hipótesis** y lo que está **por definir**.
   - No hay prueba social: ni opiniones, ni contadores, ni "ya somos X".
5. **Profesional, no funcional.** El asistente de IA, el carrito y el seguimiento son ejemplos estáticos. Solo funcionan de verdad el formulario de alta de vendedores y el panel de administración.

## 2. Color

Todos los colores están en `frontend/src/styles/tokens.css`. **No uses valores sueltos en los componentes:** usa siempre los tokens.

### Base

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#F6F1E6` | Fondo crema de la página |
| `--surface` | `#FFFFFF` | Tarjetas, paneles, formularios |
| `--green` | `#2F5233` | Verde bosque: títulos, cabecera, banda de cierre, botón primario |
| `--green-mid` | `#5C8A4A` | Verde de apoyo |
| `--earth` | `#8A5A3B` | Tierra: detalles y categoría "Despensa" |
| `--accent` | `#D9822B` | Naranja: **solo llamadas a la acción** (con texto `--on-accent` `#23301F`) |
| `--text` | `#23301F` | Texto principal |
| `--text-soft` | `#4A5340` | Texto secundario (no aclararlo más: se pierde el contraste) |
| `--border` | `#DDD0B0` | Bordes y divisores de 1 px |

### Paleta de mercado (colores de producto)

Sirve para iconos, manchas de color, números de pasos, categorías y detalles. Nunca para bloques grandes de texto.

| Token | Valor | Uso típico |
|---|---|---|
| `--tomato` | `#C8553D` | Paso 1, fruta, "No somos", pestaña activa del vendedor |
| `--saffron` | `#E3A82B` | Paso 2, pan, filo inferior de la cabecera, frase destacada del hero |
| `--olive` | `#7D8A2E` | Paso 3, verdura, "Decidido" |
| `--peach` | `#E8915F` | Paso 4, huevos y dulces |

### Tintes (fondos de sección y tarjetas)

| Token | Valor | Uso |
|---|---|---|
| `--tint-sage` | `#E4ECD9` | Banda salvia (`.band-sage`), tarjeta "Quiero vender" |
| `--tint-peach` | `#FBE4D3` | Banda melocotón, tarjeta "Quiero comprar" |
| `--tint-mustard` | `#F8ECC8` | Banda mostaza |
| `--tint-tomato` | `#F6DCD3` | Fondos de avisos y del bloque "No somos" |

### Estados

Éxito `#2F7D4B`, peligro `#C0392B`, advertencia `#B7791F`. Los badges de estado (`Status.jsx`) usan esos colores con un fondo al 12 %.

### Reglas

- Ni azules, ni morados, ni degradados decorativos. El único degradado es el oscurecido del hero, que está para que se lea el texto.
- El naranja `--accent` se reserva para lo que se pulsa.
- **Modo claro siempre.** El tema oscuro sigue definido, pero solo se activa con `data-theme="dark"` en `<html>`.

## 3. Tipografía

- **Títulos:** Fraunces, una serifa con carácter artesanal, en peso 600 y color `--green`.
  - `h1`: `clamp(2.2rem, 6vw, 3.6rem)`
  - `h2`: `clamp(1.6rem, 3.5vw, 2.2rem)`
  - `h3`: 1.2rem
- **Texto:** Figtree a **17 px** (1.0625rem) con interlineado 1.6. El texto de interfaz va en peso 600.
- **Rótulos** (`.eyebrow`): Figtree 0.85rem en mayúsculas con espaciado 0.06em, color `#A9452F`. Sobre el hero van en `#F3C66B`.
- **Letra pequeña** de avisos (`.photo-note`): 0.78rem en `--text-soft`.
- Ambas fuentes se cargan desde Google Fonts en `frontend/index.html`. No usar Inter, Roboto ni Arial.

## 4. Forma, espacio y movimiento

- **Radios:**
  - Tarjetas: `--radius` (10 px).
  - Botones, chips y pestañas de la cabecera: `--radius-pill`.
  - Manchas de icono: forma orgánica irregular.
- **Sombras:** casi ninguna. Las tarjetas llevan borde de 1 px. Solo la cabecera tiene una sombra algo más marcada.
- **Espacio:**
  - Secciones de 56 px arriba y abajo.
  - Contenedor de 1120 px de ancho máximo.
  - Huecos entre tarjetas de 14 a 28 px.
- **Zonas táctiles** de al menos 44 px. Los botones grandes del hero miden 54 px.
- **Animación:** de 180 a 240 ms con `ease-out` (`--ease`), solo como respuesta a una interacción. Se respeta `prefers-reduced-motion`.
- **Prohibido:** efecto cristal en formularios, listados, cabecera o admin; tarjetas anidadas; emojis como iconos; bordes de color a la izquierda de las tarjetas.

## 5. Componentes y patrones

| Patrón | Dónde | Notas |
|---|---|---|
| **Cabecera** | `PublicLayout.jsx` | Verde bosque, filo azafrán de 3 px, fija al hacer scroll. Logo claro y solo 3 botones. El activo va en crema y "Quiero comprar" siempre en naranja |
| **Pestañas de zona** | `ZoneTabs.jsx` | Segunda fila de la cabecera, en verde `#24402A`. La activa se subraya en azafrán |
| **Hero** | `Home.jsx` | Ilustración `hero.svg`, oscurecido a la izquierda, "Come como en casa." en azafrán y tres botones grandes |
| **Bandas de sección** | `palette.css` | `.band-sage`, `.band-peach`, `.band-mustard`, `.band-forest` y `.band-plain`. En páginas interiores se alternan solas salvia y melocotón |
| **Banda de cierre** | `.band-forest` | Verde bosque con la textura de dibujos. **Es el único sitio con textura** |
| **Manchas de icono** | `Blob.jsx` | Icono de trazo sobre mancha de color, con tono (`tomato`, `saffron`, `olive`, `peach`, `green`) y un giro leve |
| **Pasos numerados** | `.steps`, `.steps-visual` | Número en círculo de color en ciclo: tomate → azafrán → oliva → melocotón |
| **Tarjeta de producto** | `Comprar.jsx` | Foto, categoría con punto de color, nombre, vendedor y ciudad, origen, alérgenos, conservación y "Precio todavía no disponible" |
| **Cesta por vendedor** | `BasketByVendor.jsx` | Agrupada por vendedor, con miniatura, y "Por qué" en la cesta de la IA |
| **Badges de estado** | `Status.jsx` | Decidido, Hipótesis, Por definir y Datos de ejemplo |
| **Iconos** | `Icon.jsx` | SVG de trazo de 1.6 px en un único fichero. Para añadir uno, se añade su `path` |
| **Logo** | `Logo.jsx`, `public/favicon.svg` | Caja de mercado con tres frutas y una hoja, y "FOOD**4**ALL" en Fraunces con el 4 en naranja o azafrán. Se adapta al fondo con `--logo-crate` y `--logo-stripe` |

## 6. Imágenes

- **Ilustración del hero** (`public/hero.svg`): es propia, de estilo plano con la paleta de la marca (campo andaluz, olivos, cortijo y caja de fruta).
- **Fotos** (`public/img/*.jpg`): son reales, de **Wikimedia Commons**, con licencia libre (CC0, dominio público, CC BY o CC BY-SA).
  - Siempre van acompañadas del aviso en letra pequeña `PhotoNote`: *"Imágenes ilustrativas… no corresponden a productos ni vendedores reales. Créditos"*.
  - Autor y licencia de cada una están en `src/data/photoCredits.js`, y se muestran en la página `/creditos`.
  - Para añadir fotos se usan `tools/fotos/commons-search.mjs` (genera una hoja de contactos para elegir) y `tools/fotos/commons-download.mjs` (descarga la elegida y regenera los créditos).
  - Elegid fotos de producto o de mercado, luminosas, sin marcas comerciales visibles y sin personas reconocibles en primer plano siempre que se pueda.
- **Textura** (`public/pattern-*.svg`): dibujos de comida en línea fina. Solo va en la banda verde de cierre.

## 7. Arquitectura

```
food4all/
├─ frontend/             React 18 + Vite + React Router
│  ├─ public/            hero.svg, favicon.svg, pattern-*.svg, img/
│  └─ src/
│     ├─ styles/         tokens.css → base.css → layout.css → palette.css (en este orden)
│     ├─ components/     PublicLayout, Logo, Icon, Blob, Photo, Status, ZoneTabs, BasketByVendor…
│     ├─ pages/          Home, Comprar, ClienteVista, Vender, VendedorPanel, Creditos, Admin, AdminLogin, NotFound
│     └─ data/           examples.js (vendedores, productos y pedidos inventados), photoCredits.js
├─ backend/              Node 22+ y Express (sin base de datos externa)
│  ├─ server.js          API, sesión de admin y sirve frontend/dist
│  ├─ project.js         contenido interno (equipo, mercado, legal, hitos): solo con sesión
│  ├─ asana.js           intermediario con Asana (el token solo vive en .env)
│  └─ store.js           guarda las altas de vendedores en data/db.json
├─ docs/                 esta guía y la comparativa con la competencia
└─ tools/fotos/          scripts para buscar y descargar fotos de Commons
```

- **Rutas públicas:** `/`, `/comprar`, `/comprar/cliente`, `/vender`, `/vender/panel` y `/creditos`.
- **Rutas privadas:** `/admin` (las protege el backend, no solo la interfaz).
- **Vista pública y privada están separadas:** el equipo, los hitos, el mercado y el marco legal **no** van en el JavaScript público. Viven en `backend/project.js` y se sirven con sesión.
- **Asana:**
  - Se lee el proyecto de la asignatura y solo las tareas `[Food4All]`, en dos niveles de subtareas.
  - Si falla la conexión, el panel muestra el plan de `project.js`.
- **Estilos:** `palette.css` contiene la paleta ampliada y las últimas decisiones. Se carga la última, así que es la que manda si hay conflicto.

## 8. Lo que aprendimos (no repetir)

| Probado | Problema | Solución |
|---|---|---|
| Solo crema y verde | Monótono frente a la competencia | Paleta de mercado y bandas de color |
| Textura de dibujos detrás del texto | Costaba leer | Textura solo en la banda verde |
| Cabecera blanca sobre página crema | Se fundía con la página | Cabecera verde bosque con filo azafrán |
| Muchas secciones en la portada | Demasiado que leer | Cuatro bloques y tres botones |
| Seguir el modo del sistema | El oscuro se veía plano | Modo claro siempre |
| Iconos finos y pequeños | Poca presencia | Manchas de color con el icono |

Comparativa visual con la competencia: `docs/comparativa-competencia.png`.
