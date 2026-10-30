---
titulo: Buscador del panel: modo IA, animación, memoria de la conversación y prompts afinados (#16)
fecha: 2026-10-30
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
resultado: Código
etiquetas: landing
landing: mejora, vista
origen: Continuación de 2026-10-30-04 (misma sesión): Sebastián probó el buscador con la IA local en Firefox
---

Horas aproximadas: la sesión no guardó la hora de cada mensaje; el registro se escribió a las 14:17.

### ~14:03

Dos cosas, funciona pero visualmete deja que desear, me gustaria una animación en buscando y que sea más intuitivo el usar la ia, pone darle intro pero por ejemplo puedes decir que cuando se de a intro se cambie el color de la barra y luego al darle otra vez si hay texto que busque, luego un limpiador de contexto automatico para que no explote. Y por último le acabo de preguntar una cosa y no me ha llevado a lugar donde pido, miralo tú mismo. Para aydarte, prueba a ponerle promst hasta que esté refinado

**Resultado:** Revisado: tras responder, el buscador no llevaba a ningún sitio (solo un botón, y nada si elegía «ninguno"); el contexto (~4.800 tokens) no tenía el Hito 2, las altas ni los tokens. Especificación con dos modos (Buscar / Preguntar a la IA), animación, contexto con tope y batería de 25 preguntas; tres preguntas.

#### Especificación (paso 1)

- **Base:** rama `feat/buscador-ia` encima de `feat/encargos`. Issue #16.
- **Hecho cuando:** primer Intro → modo IA visible; segundo Intro → pregunta; Esc vuelve; animación mientras piensa (quieta con movimiento reducido); la respuesta lleva al apartado; el contexto nunca pasa del tope; ≥ 22/25 en la batería; build, navegador, /code-review y registro.
- **Parar:** si hiciera falta otro modelo, si el tope obligara a quitar datos que deban verse siempre, o tras 5 rondas sin llegar a 22/25.

### ~14:06

Y puedes mandarme al promt que los creo? Resultado:Los prompts se crearon en la sesión del 8 de octubre (2026-10-08) y se registran en el apartado **prompts**.

**Resultado:** Dos fallos más: no recordaba la pregunta anterior («los») y no podía llevar a un prompt concreto. Añadido a la especificación: memoria de la conversación con limpieza automática (tope y 10 min sin preguntar, y «Nueva conversación») y destino a un prompt concreto, que se abre ya desplegado.

### ~14:08

2b 3a

**Resultado:** La respuesta lleva un botón (no te mueve sola) y el modo IA va en verde con su tinte. Hecho en `feat/buscador-ia`:
- `backend/search.js`: los datos (resumen, decisiones, mercado, legal, equipo, hitos, Hito 2, altas solo en recuento, tokens y una línea por apartado) se trocean y van primero los que comparten palabras (por raíz e IDs) con la pregunta y con la última respuesta, hasta 4.500 tokens; el índice de prompts (con resultado, etiquetas y requisitos) hasta la mitad; la conversación, hasta 1.500. El modelo elige apartado y, si se pide, un prompt concreto. Si contesta solo «#prompts», se cambia por una frase con el prompt.
- `server.js` acepta la conversación (6 últimas, textos cortos).
- `Admin.jsx` y `admin.css`: modos Buscar / Preguntar a la IA (borde verde de 2 px, fondo `--tint-sage`, etiqueta «IA», Esc para volver), barrido suave y «Pensando…» con puntos, botón verde a lo ancho («Ir a…», «Abrir el prompt»), «Nueva conversación». `AdminPrompts.jsx` abre el prompt pedido: quita filtros, lo despliega, baja hasta él y lo marca.
- `tools/probar-buscador.mjs`: 25 preguntas con su apartado (y prompt) esperado, sin sumar tokens. Rondas: 21/25 → 23/25 (líneas por apartado, pista de la columna requisitos, tope 4.500) → 25/25; unos 4 s por pregunta (antes 1–2 s con la mitad de contexto). El modelo varía: lo esperable es 23–25.
- Probado en el navegador (servidor de prueba): modo IA, pensando, respuesta, «Abrir el prompt» con el prompt desplegado y marcado, Esc. Arreglado el recuadro de foco doble.

#### Revisión de código (/code-review)

Diez posibles fallos. Arreglados: (1) faltaban las cifras del Hito 2 (564 requisitos, 307 Must…) y el modelo tendría que contarlas → una línea con las cifras; (2) se perdía «Pruebas y documentación: compartidas por los tres» y cualquier clave nueva de `project.js` → se añaden; (3) el marco legal iba en un solo trozo enorme → una línea por área, tarea y pendiente; (4) al crecer el registro se cortaban los prompts más nuevos → a igualdad, primero los recientes, y se siguen probando los que caben; (5) «Abrir el prompt» no hacía nada si el prompt era posterior a la carga → baja a la sección y recarga; (6) tras 10 min el aviso «Recuerda N preguntas» seguía aunque ya no se enviaban → se vacía; (7) la frase de reserva volvía a leer los prompts y podía fallar → usa los ya leídos; (8) un CSV de tokens roto tumbaba todas las preguntas → protegido; (9) cada prompt se puntuaba muchas veces al ordenar → una sola; (10) el aviso del modo Buscar decía «Intro para preguntar» → explica los dos Intro y vuelve a avisar si la IA está apagada. Sin cambiar: guardar en memoria los datos entre preguntas (9, menor). Batería después: 24/25, mediana 4,0 s.

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
