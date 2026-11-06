---
titulo: Feedback del profesor de los hitos 1 y 2, revisión del código y limpieza de las peticiones a la API
fecha: 2026-11-06
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
resultado: Código
etiquetas: landing, organización
landing: mantenimiento, interno
origen: Sesión nueva en WSL; Sebastián pega el feedback del profesor del Hito 1 y la evaluación del Hito 2
---

Horas no registradas: la sesión no guardó la hora de cada mensaje; el registro se escribió a las 15:25. Los dos textos del primer mensaje son del profesor (Sebastián los pegó tal cual).

### Hora no registrada (antes de las 15:25)

Feedback del hito 1 de Food4All  : 

Buen arranque. Habéis contextualizado el problema con datos, distinguís lo que tiene indicios de lo que está sin demostrar y proponéis validar con un MVP manual antes de construir tecnología. Es justo la forma de pensar que buscamos.

Al ser el primer hito, la evaluación ha sido orientativa y flexible. En los siguientes hitos aplicaremos la rúbrica con más exigencia, así que os pido que trabajéis estos puntos:


    Formulad la propuesta de valor en una frase y aclarad la relación entre el "marketplace" del título y el MVP de recetas.

    Definid el alcance: qué incluye, qué queda fuera y por qué.

    Identificad a los establecimientos y demás partes interesadas, con sus intereses.

    Eliminad todos los [pendiente]: nombre de equipo, fuentes, enlaces y fechas.

    Repartid las tareas del tablero, con responsables y fechas. Ahora todas recaen en una persona.

    Completad cada ticket individual, incluida la frase sobre la IA, con una contribución concreta. Los tickets incompletos no se darán por válidos en el siguiente hito.

    Citad la fuente de cada dato y revisad la exportación del PDF, porque hay texto cortado.

 

 Evaluación Hito 2

Hola, equipos.

Para cerrar la evaluación del Hito 2 necesito lo antes posible:

- Landing documental accesible. Añadid aquí una URL pública con el Hito 2 completo y todos los prompts. Ahora mismo solo se puede ver instalando el proyecto en local y entrando con sesión de administrador.
- Trazabilidad de prompts. Cada requisito o artefacto debe enlazar a los prompts que lo generaron, indicando autor, fecha y resultado de la revisión. Hoy los prompts están registrados, pero no se pueden seguir desde el artefacto.
- Registro completo. Faltan por registrar los prompts usados en las personas y mapas de empatía, en el comparativo original y en las entrevistas descartadas. Si alguno no puede recuperarse, indicadlo y explicad el motivo. Completad también el resultado de las sesiones anteriores al 22/10.
- Contribución individual. Indicad qué ha aportado cada miembro y qué elementos ha revisado, con enlace a la evidencia.
- Acceso al panel. Cambiad la contraseña compartida en el comentario de Asana y no publiquéis credenciales en las tareas.

Gracias. 

**Resultado:** El asistente lee el repositorio (sin cambiar nada) y propone una especificación para aplicar todo, con cuatro preguntas (URL pública, dónde anotar la trazabilidad, quién recupera los prompts que faltan, ramas). Avisa de que la ruta y la visibilidad del repositorio en sus reglas están desfasadas (el repositorio es público).

### Hora no registrada (antes de las 15:25)

Yo te he pasado el feedback del profesor

**Resultado:** El asistente aclara que no ha cambiado nada y pregunta qué hacer con el feedback: aplicarlo todo, solo lo urgente, solo registrarlo o solo analizarlo.

### Hora no registrada (antes de las 15:25)

1d

**Resultado:** Análisis sin cambios. Hito 2: los cinco puntos están abiertos (ningún prompt dice qué artefacto produjo; las 13 sesiones del 08/10 al 20/10 no tienen `**Resultado:**` por mensaje; no hay página de contribución; la contraseña la cambia Sebastián). Hito 1: propuesta de valor y alcance a medias (falta el porqué del paso del MVP de recetas al marketplace y de cada exclusión), sin sección de partes interesadas, sin `[pendiente]` en el repositorio (el PDF y Asana sin comprobar).

### Hora no registrada (antes de las 15:25)

2 cuales son las opciones gratis

**Resultado:** Comparativa de opciones gratis para la URL pública: web estática (GitHub Pages, Cloudflare Pages, Netlify, Vercel) frente a la app entera en un servidor (Render, Koyeb/Fly.io, Railway). Límites citados de memoria, sin comprobar.

### Hora no registrada (antes de las 15:25)

Quiero que sea que le de una url al profe y pueda usarla, no tiene que ser toda la app. De eso cuales son las opcione pros y contras, haz una tabla con x

**Resultado:** Dos tablas con X: qué publicar (A, web de documentos; B, landing en estático; C, servidor de solo lectura) y dónde (GitHub Pages, Cloudflare Pages, Netlify, Vercel). Recomendada: B en GitHub Pages.

### Hora no registrada (antes de las 15:25)

1a

**Resultado:** Decidido: landing en estático en GitHub Pages. El asistente escribe la especificación (abajo) y espera el visto bueno.

#### Especificación propuesta (no aplicada todavía)

Publicar en GitHub Pages una versión estática y de solo lectura de la landing con el Hito 2 y todos los prompts: un script que exporta `hito2()` y `prompts.list()` a JSON, un modo estático del frontend (`VITE_ESTATICO=1`) con rutas públicas `/documentacion/hito2` y `/documentacion/prompts`, sin formulario ni login, con base `/Food4All/`, y un workflow de GitHub Actions. Antes de publicar: revisar los 10 prompts que mencionan «contraseña» o «password» y comprobar en la documentación de GitHub los límites de Pages. Fuera de esa tarea: trazabilidad, prompts que faltan, contribución individual y Hito 1.

### Hora no registrada (antes de las 15:25)

Antes de seguir, quiero que revises el código y lo pendiente. Hemos hecho muchos cambios a lo largo del desarrollo y puede haber convertido todo en un espagueti. Otro problema es que el .desing se hizo al principio del todo, pero con el paso del tiempo se ha quedado atras, siento que con las nuevas skill añadisdas se pueden hacer muchas más cosas, pero se limitan por el .desing, falta de animaciones, texturas planas y con color plano. patrones sencillos, etc. Además el apartado admin debería estár enfocado más en algo útil para trabajar, más organizado y con margenes más ajustados

**Resultado:** Revisión sin cambios. Código: unas 5.500 líneas, no es espagueti, pero tiene deuda (`Admin.jsx` de 551 líneas con 7 componentes; 13 `fetch` repartidos con errores tratados de forma distinta; tres sitios para datos; cuatro secciones del panel solo con datos de prueba; validaciones copiadas entre frontend y backend; sin lint ni pruebas; `AI_EXAMPLE` sin usar). `docs/DISENO.md`: reglas que frenan (texto nunca sobre texturas, una sola textura, casi sin sombras, ilustración plana, admin de superficies planas). Panel: una sola página con 15 secciones y márgenes de la web pública.

### Hora no registrada (antes de las 15:25)

1(tenemos hasta el viernes 13, no es tan urgente) 2(dejalo pendiente para mañana, principalmente mi idea es rehacer el diseño desde 0, sin .desing que limite, y volver a hacer las pruebas con las skills, y de ahí decidir, o dar feedback9 3c 4(esperar)

**Resultado:** Plan hasta el 13/11: hoy, limpieza opcional; 07/11, rediseño desde cero de la web y del panel (con `design-taste-frontend`); después, URL pública, trazabilidad, prompts que faltan y contribución. Con lo de Miguel, esperar. El asistente no pudo guardar el plan en su memoria (carpeta sin permiso) y lo apunta en `docs/estado.md`.

### Hora no registrada (antes de las 15:25)

1a 2a 3a 4b

**Resultado:** Se borran las 6 copias de pruebas de diseño (`git worktree remove --force`; no tenían cambios sin guardar en un commit, solo capturas de las skills). Sus 6 ramas siguen en git. Se liberan unos 480 MB. Rediseño: sin reglas de estilo, pero con contraste AA, teclado y movimiento reducido; `design-taste-frontend` se usará aunque su prueba terminaba el 02/11 (Sebastián amplía la fecha en sus reglas).

#### Especificación de la limpieza (aprobada)

Rama `refactor/limpieza-codigo`, sin cambiar lo que se ve: `frontend/src/api.js` común para las peticiones del panel (`Admin.jsx`, `AdminPrompts.jsx`, `AdminHito2.jsx`, `AdminTokens.jsx` y `EnConstruccion.jsx`); reglas del alta de vendedores en `shared/alta-vendedor.js` (la usa el backend; `Vender.jsx` es de Juan Antonio y va como encargo); quitar `AI_EXAMPLE`; `docs/estado.md` al día; este registro. Fuera: archivos de Miguel y de Juan Antonio, el reparto de `Admin.jsx`, ESLint (dependencia nueva). Hecho cuando: compila, la API responde igual (probado con curl), no queda `fetch(` en los archivos tocados y `/code-review` sin hallazgos graves.

### Hora no registrada (antes de las 15:25)

ok

**Resultado:** Limpieza hecha en `refactor/limpieza-codigo`:
- `frontend/src/api.js` sustituye las 13 llamadas a `fetch` de los cinco archivos. Lanza el error con el mensaje del servidor y su código HTTP (0 sin conexión), y cada pantalla decide qué hacer con un 401, como antes.
- `shared/alta-vendedor.js` (tipos, zonas y longitudes máximas) lo importa `backend/server.js`; encargo #7 para Juan Antonio en `Vender.jsx`.
- Quitado `AI_EXAMPLE`; `docs/estado.md` al 06/11.
- Comprobado: `npm run build` compila (14,5 s); con el backend en el puerto 3099, el alta vacía, la de tipo y zona no válidos y la de nombre de 121 caracteres dan 400 con los mismos errores; una válida salvo la casilla de privacidad solo da el error de privacidad; las siete rutas del panel sin sesión dan 401.
- No probado en el navegador ni el alta válida (201), para no escribir una solicitud de prueba en los datos locales.
- `/code-review` (nivel bajo): un hallazgo, arreglado. Con `api()`, un 200 de `/api/admin/project` que no fuera JSON mandaba al login con la sesión válida; ahora solo va al login con un código ≥ 400, como antes.

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
