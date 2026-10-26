# FOOD4ALL · Guía de diseño y arquitectura

Referencia para seguir trabajando en la landing sin perder la coherencia. Si algo de aquí cambia, actualízalo en el mismo cambio.

Estado: segunda versión, tras el feedback del profesor (10 de octubre de 2026): comunidad y redes, más movimiento, panel con barra lateral y registro de prompts. Pensada para **ordenador** y en **modo claro**. La versión móvil está pendiente, **sin prioridad**.

---

## 1. Principios

1. **Rápido y sencillo: "tres botones y ya".** El visitante debe entender qué es FOOD4ALL y elegir en menos de 30 segundos. Las tres acciones son **Quiero comprar**, **Quiero vender** y **Cómo funciona**. Si una pantalla obliga a pensar más, sobra contenido.
2. **Contraste alto.** El texto siempre va sobre fondo liso. Nunca va texto encima de texturas o dibujos.
3. **Producto local visible desde el primer segundo:** ilustración de campo en el hero y fotos de mercado.
4. **Honestidad:**
   - Es un proyecto conceptual: los datos son de ejemplo y se marcan como tal.
   - Los precios son de ejemplo, basados en precios de supermercado de octubre de 2026, y siempre llevan en letra pequeña el aviso «Precios de ejemplo, meramente representativos» (decisión de Sebastián, 25/10/2026). De dónde sale cada uno: `docs/precios-de-ejemplo.md`.
   - Se distingue siempre lo **decidido**, las **hipótesis** y lo que está **por definir**.
   - No hay prueba social: ni opiniones, ni contadores, ni "ya somos X".
5. **Profesional, no funcional.** El asistente de IA, el carrito y el seguimiento son ejemplos estáticos. Solo funcionan de verdad el formulario de alta de vendedores y el panel de administración.

## 2. Color

Todos los colores están en `frontend/src/styles/tokens.css`. **No uses valores sueltos en los componentes:** usa siempre los tokens.

### Base

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#F6F1E6` | Fondo crema de la página |
| `--white` | `#FFFFFF` | Blanco puro (base de `--surface` y `--on-dark-hover`, punto de la cinta) |
| `--black` | `#000000` | Sombra de las tarjetas de zona, oscurecido del botón naranja y fondo del vídeo |
| `--surface` | `#FFFFFF` | Tarjetas, paneles, formularios |
| `--green` | `#2F5233` | Verde bosque para **texto, foco y bordes**: títulos. También rellena el botón primario, cuyo texto en `--bg` se lee en los dos temas |
| `--forest` | `#2F5233` | Verde bosque para **fondos oscuros**: cabecera, hero, banda verde, barra y menú del admin. Mismo valor que `--green`, pero no cambia con el tema |
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

### Variantes para texto pequeño y detalles

Los colores de mercado no llegan al contraste AA (4,5) con texto pequeño. Para números, rótulos y texto se usan estas variantes:

| Token | Valor | Uso |
|---|---|---|
| `--tomato-strong` | `#B04A34` | Fondo de los números de paso en tomate (4,81 con crema) |
| `--olive-strong` | `#687326` | Fondo de los números de paso en oliva (4,58 con crema) |
| `--eyebrow` | `#A9452F` | Rótulos sobre fondos claros |
| `--saffron-light` | `#F3C66B` | Rótulos sobre el hero y la banda verde |
| `--on-peach` | `#3A2414` | Texto e iconos sobre melocotón |
| `--green-deep` | `#24402A` | Pestañas de zona |
| `--accent-hover` | `#E8913A` | "Quiero comprar" con el ratón encima |
| `--hero-lead` | `#F1EBDC` | Entradilla del hero |
| `--on-dark-hover` | `#FFFFFF` | Texto con el ratón encima sobre verde |
| `--on-saffron` | `#23301F` | Texto sobre azafrán: cinta y números de paso (6,54) |
| `--hero-shade` | `#171D15` | Degradado sobre la foto del hero y sombra de la cabecera |
| `--ink` | `#23301F` | Base de las sombras y del filete de la cinta, siempre con `color-mix` (en oscuro, negro) |
| `--edge-on-forest` | transparente | Filete de las tarjetas «Quiero comprar / vender» sobre la banda verde: solo se ve en oscuro (≥ 3) |
| `--tag-tomato-text`, `--tag-mustard-text` | `#8A3B26`, `#6B4A12` | Etiquetas de tipo en el admin |

Sobre azafrán, el texto va en `--on-saffron` (6,54), no en `--green` (4,17).

### Estados

Éxito `#2F7D4B`, peligro `#C0392B`, advertencia `#B7791F`. Los badges de estado (`Status.jsx`) usan esos colores con un fondo al 12 %.

### Reglas

- Ni azules, ni morados, ni degradados decorativos. El único degradado es el oscurecido del hero, que está para que se lea el texto.
- El naranja `--accent` se reserva para lo que se pulsa.
- **Foco del teclado:** contorno de 2 px en `--green` sobre fondos claros y en `--forest-text` dentro de la cabecera, las pestañas de zona, el hero, la banda verde y la barra del admin (`base.css`). El naranja no vale para el foco: sobre crema solo da 2,60.
- Fuera de `tokens.css` no hay colores escritos a mano. Las transparencias se hacen con `color-mix(in srgb, var(--token) N%, transparent)`.
- **Fondo oscuro = `--forest`, no `--green`.** En el tema oscuro `--green` pasa a verde claro para que el texto se lea sobre la página oscura; si una banda usara `--green` de fondo, su texto crema quedaría a 1,96.
- **Modo claro siempre.** El tema oscuro sigue definido, pero solo se activa con `data-theme="dark"` en `<html>`. Cambian los tokens que van sobre el fondo de la página (base, tintes, `--eyebrow`, etiquetas del admin y `--ink`, que pasa a negro), el naranja con su hover y `--edge-on-forest`; los que van sobre fondos fijos (`--forest`, hero, azafrán, melocotón) son iguales en los dos temas. Sobre azafrán y en los iconos de colores, el texto va en `--forest` u `--on-saffron`, nunca en `--green`. Contraste medido: texto ≥ 4,5 y filetes ≥ 3 (20/10/2026).

## 3. Tipografía

- **Títulos:** Fraunces, una serifa con carácter artesanal, en peso 600 y color `--green`.
  - `h1`: `clamp(2.2rem, 6vw, 3.6rem)`
  - `h2`: `clamp(1.6rem, 3.5vw, 2.2rem)`
  - `h3`: 1.2rem
- **Texto:** Figtree a **17 px** (1.0625rem) con interlineado 1.6. El texto de interfaz va en peso 600.
- **Rótulos** (`.eyebrow`): Figtree 0.85rem en mayúsculas con espaciado 0.06em, color `--eyebrow`. Sobre el hero y la banda verde van en `--saffron-light`.
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
- **Animación** (`styles/motion.css`). El profesor vio la primera versión "muy plana", así que ahora hay movimiento, siempre suave y sin tapar el texto:
  - Respuesta al ratón: de 180 a 240 ms con `--ease` (botones, tarjetas que suben, fotos que se acercan, flechas que avanzan).
  - Aparición al hacer scroll: 600 ms, subiendo 22 px. Las rejillas aparecen en escalera, 90 ms entre elementos. Lo hace `useReveal.js` solo, sin marcar nada en las páginas.
  - Entrada del hero: el texto sube en escalera y la ilustración se asienta con un zoom de 1,8 s.
  - Detalles continuos y lentos: la cinta de productos (38 s por vuelta, se para al pasar el ratón), las manchas de icono que flotan (5 s) y las publicaciones de ejemplo de `/comunidad` (7 s).
  - Subrayado azafrán dibujado a mano (`.underline-doodle`) en los títulos clave. Se traza al aparecer.
  - Onda entre la sección anterior y la banda verde de cierre. Toma el color de la sección de arriba con `--wave-from`.
  - Con `prefers-reduced-motion` no hay nada de esto: todo se ve quieto desde el principio.
- **Prohibido:** efecto cristal en formularios, listados, cabecera o admin; tarjetas anidadas; emojis como iconos; bordes de color a la izquierda de las tarjetas.

## 5. Componentes y patrones

| Patrón | Dónde | Notas |
|---|---|---|
| **Cabecera** | `PublicLayout.jsx` | Verde bosque, filo azafrán de 3 px, fija al hacer scroll. Logo claro y 3 botones. La pestaña «Asistente IA» (C-26) se quitó el 25/10/2026: el asistente es del marketplace, no de la landing; se llega a él desde Comprar y el pie. El activo va en crema y "Quiero comprar" siempre en naranja |
| **Pestañas de zona** | `ZoneTabs.jsx` | Segunda fila de la cabecera, en `--green-deep`. La activa se subraya en azafrán |
| **Hero** | `Home.jsx` | Ilustración `hero.svg`, oscurecido a la izquierda, "Come como en casa." en azafrán y tres botones grandes |
| **Bandas de sección** | `palette.css` | `.band-sage`, `.band-peach`, `.band-mustard`, `.band-forest` y `.band-plain`. En páginas interiores se alternan solas salvia y melocotón |
| **Banda de cierre** | `.band-forest` | Verde bosque con la textura de dibujos. **Es el único sitio con textura** |
| **Manchas de icono** | `Blob.jsx` | Icono de trazo sobre mancha de color, con tono (`tomato`, `saffron`, `olive`, `peach`, `green`) y un giro leve |
| **Pasos numerados** | `.steps`, `.steps-visual` | Número en círculo de color en ciclo: tomate → azafrán → oliva → melocotón (tomate y oliva en su variante `-strong` para que el número se lea) |
| **Tarjeta de producto** | `Comprar.jsx` | Foto, categoría con punto de color, nombre, vendedor y ciudad, origen, alérgenos, conservación y precio de ejemplo (con el aviso al pie del catálogo) |
| **Cesta por vendedor** | `BasketByVendor.jsx` | Agrupada por vendedor, con miniatura, y "Por qué" en la cesta de la IA |
| **Badges de estado** | `Status.jsx` | Decidido, Hipótesis, Por definir y Datos de ejemplo |
| **Iconos** | `Icon.jsx` | SVG de trazo de 1.6 px en un único fichero. Para añadir uno, se añade su `path` |
| **Cinta de producto** | `Home.jsx`, `.ribbon` | Banda azafrán bajo el hero con nombres de producto y puntos de color en movimiento |
| **Comunidad** | `Comunidad.jsx`, bloque en `Home.jsx` | Explica por qué importa la comunidad, qué se publicará y en qué redes, y cómo participar. Las publicaciones son de ejemplo |
| **Redes sociales** | `SocialLinks.jsx`, `data/social.js` | Instagram, TikTok, YouTube y Pinterest. Mientras `url` sea `null`, salen como "Próximamente" y no enlazan. Al poner la URL, se enlazan solas |
| **Barra lateral del admin** | `Admin.jsx`, `styles/admin.css` | Fija a la izquierda. Marca la sección visible y tiene arriba el **buscador**: al escribir lista las secciones que coinciden (palabras en `KEYWORDS`); con Intro, la IA responde en 1-3 frases y ofrece un botón "Ir a…" (`btn-ghost`, no naranja: no es una llamada a la acción). Sin clave de IA, solo lista secciones |
| **Decisiones** | `Admin.jsx`, sección Resumen | Cuatro columnas: Decidido, Hipótesis, Pendiente y **Descartado** (badge en `--danger` al 12 %), cada descartado con su porqué. Datos en `backend/project.js` |
| **Hito 2** | `AdminHito2.jsx`, `backend/hito2.js` | Sección `#hito2` del panel: cifras, necesidades, criba, hipótesis y decisiones, RST y exclusiones, fuentes, trazabilidad por necesidad (con enlaces a Asana) y registro de cambios. Todo se lee de `docs/requisitos` en cada petición: no se copia a mano |
| **Prompts** | `AdminPrompts.jsx` | Registro de prompts agrupado por persona y, dentro, por tema (campo `tema`: para qué sirvió), con filtro por tipo, copiar, "Pulir con IA" (original y propuesta lado a lado) y alta de prompts nuevos |
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
│     ├─ styles/         tokens.css → base.css → layout.css → palette.css → motion.css → admin.css
│     ├─ components/     PublicLayout, Logo, Icon, Blob, Photo, Status, ZoneTabs, SocialLinks, useReveal…
│     ├─ pages/          Home, Comprar, ClienteVista, Vender, VendedorPanel, Comunidad, Creditos, Admin, AdminPrompts, AdminLogin, NotFound
│     └─ data/           examples.js (datos inventados), social.js (redes), photoCredits.js
├─ backend/              Node 22+ y Express (sin base de datos externa)
│  ├─ server.js          API, sesión de admin y sirve frontend/dist
│  ├─ project.js         contenido interno (equipo, mercado, legal, hitos): solo con sesión
│  ├─ hito2.js           lee docs/requisitos (Markdown y JSON) para la sección del Hito 2: solo con sesión
│  ├─ asana.js           intermediario con Asana (el token solo vive en .env)
│  ├─ store.js           guarda las altas de vendedores en data/db.json
│  ├─ prompts.js         lee y guarda el registro de prompts (/prompts)
│  ├─ gemini.js          llamada a Gemini (nivel gratuito); clave en .env
│  ├─ search.js          buscador del panel: pregunta → respuesta corta y apartado
│  └─ agent.js           segundo agente (Gemini) que pule prompts
├─ prompts/              un .md por prompt usado en el desarrollo (va en el repo)
├─ docs/                 esta guía y la comparativa con la competencia
└─ tools/fotos/          scripts para buscar y descargar fotos de Commons
```

- **Rutas públicas:** `/`, `/comprar`, `/comprar/cliente`, `/vender`, `/vender/panel`, `/comunidad` y `/creditos`.
- **Cabecera:** tres botones (la pestaña «Asistente IA» de la C-26 se quitó el 25/10/2026: es del marketplace, no de la landing). La comunidad se enlaza desde la portada y el pie, no desde la cabecera.
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
| Página sin movimiento | "Muy plana" (profesor) | Aparición al hacer scroll, cinta de producto, hover y detalles dibujados (`motion.css`) |
| Captura del chat de la IA en Comprar | Aburre al visitante normal (profesor) | Dos líneas de texto. Si se graba un vídeo, se pone en `AI_VIDEO` de `Comprar.jsx` |
| Sin presencia en redes | La comunidad y la visibilidad son clave (profesor) | Página `/comunidad`, bloque en la portada y redes en el pie |
| Pestañas horizontales en el admin | Costaba moverse entre tantas secciones | Barra lateral fija con la sección activa marcada |

Comparativa visual con la competencia: `docs/comparativa-competencia.png`.
