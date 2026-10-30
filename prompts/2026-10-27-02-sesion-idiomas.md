---
titulo: Tareas del 27/10: idiomas (punto 3), FAQ (punto 4) y expectativa vs. realidad (punto 11)
fecha: 2026-10-27
autor: Juan Antonio
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
resultado: Código
etiquetas: landing
landing: mejora, comercial, documental
requisitos: RST-06, N-IA-01, N-PLA-01, N-PLA-02, N-VEN-03, C-08, C-29
origen: Revisión de lo que repartió Sebastián; issues #20 (web pública en español e inglés), #21 (preguntas frecuentes) y #22 (expectativa vs. realidad); revisión de E5, E6, el comparativo y las personas
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

### 15:26

Ya están creados los dos PR?

**Resultado:** Comprobado en GitHub: el #28 (idiomas) existe; para `feat/faq` y `feat/expectativa` aún no hay PR. Se vuelven a abrir las dos páginas para crearlos.

### 15:27

Ya los he creado, compruébalo.Y dime que es lo que falta y si tu lo puedes hacer

**Resultado:** Los tres PR están bien: #28 (idiomas → `feat/esqueleto-feedback`, Closes #20), #30 (FAQ → `feat/idiomas`, Closes #21) y #29 (expectativa → `feat/faq`, Closes #22). Los issues se cerrarán cuando lleguen a `main`. Lo que falta: unir los PR (Sebastián) y rebasar tras el esqueleto (asistente); la «Revisión crítica del equipo», E5 y E6 y la revisión cruzada con comentario en Asana (Juan Antonio).

### 15:33

Prepárame el material para revisar E5 y E6

**Resultado:** El historial de git muestra que las conclusiones de E5 y E6 (`2b820e7`) y la aclaración de P7 (`4eb96c1`) ya las hizo Juan Antonio el 23/10: `docs/estado.md` estaba desfasado. Faltan las preguntas P10 (no estar en casa) y P11 (punto de recogida), con una redacción propuesta. Puntos a revisar: «Recordatorios» revela la relación con las entrevistadas (RST-06), «Indicio fuerte» no es un estado válido, el riesgo de las valoraciones no recoge C-29, inferencias de E6 y la fila N-PLA-01.

### 15:45

*Texto pegado: la revisión de otro asistente, tal cual.*

1. «Revisión crítica del equipo»
Esta parte sigue marcada como pendiente en el registro que has adjuntado. No voy a redactar una opinión personal fingiendo que es tuya, pero te dejo los hechos que puedes valorar para escribirla.
Qué salió bien

Se implementaron los idiomas español e inglés y la página de preguntas frecuentes. En el registro se documentan las comprobaciones de compilación y las capturas de las páginas. 【turn1file4】

Qué salió mal y cómo se resolvió

Un script auxiliar de PowerShell estropeó las tildes de la FAQ. El problema se detectó al revisar una captura y se corrigió antes del commit. 【turn1file4】

Qué quedó sin comprobar

El formulario de alta de vendedores solo se comprobó visualmente en las capturas; no se llegó a enviar. También conviene valorar si se coordinaron bien las tareas y si las pruebas fueron suficientes.

Para escribir tu propia revisión, decide qué te pareció el desarrollo de la sesión, qué problema te hizo perder más tiempo y qué cambiarías en la próxima sesión. Estos hechos son el punto de partida; tu valoración debe ser tuya.
2. Conclusiones de E5 y E6
He podido consultar el documento de entrevistas publicado en GitHub. La versión visible ya indica que las conclusiones se redactaron por Juan Antonio el 23 de octubre y que la aclaración de E5, P7, está hecha: «mi compañero» es alguien de fuera del piso, no un compañero de piso. 【turn329731view0】

Por tanto, no parece necesario volver a redactar esas conclusiones desde cero. Sí conviene revisar los siguientes puntos:
Pendiente    Situación
Conclusiones de E5 y E6    La versión consultada ya las identifica como redactadas por Juan Antonio.
Aclaración de E5, P7    Está incluida.
Pregunta sobre no estar en casa cuando llega el pedido    Sigue pendiente.
Pregunta sobre un punto de recogida    Sigue pendiente.
Inferencias de E6    Hay afirmaciones que van más allá de lo que respondió.

【turn329731view0】
Las dos preguntas que faltan
Puedes utilizar estas preguntas abiertas para volver a entrevistar a E5 y E6. No debes completar las respuestas hasta hablar con ellas.

P10. Entrega cuando no estás en casa

«Imagina que has pedido la compra y llega cuando no estás en casa. ¿Qué harías? ¿Te ha pasado alguna vez algo parecido con un paquete?»

Puedes preguntar después qué ocurrió realmente y qué horarios suele tener entre semana.

P11. Punto de recogida

«Si pudieras recoger la compra en un punto cercano a tu casa o a tu facultad, en lugar de recibirla en casa, ¿qué te parecería?»

Puedes preguntar qué ubicación le resultaría cómoda y qué inconvenientes tendría recoger productos que necesitan frío.

Registra las respuestas reales, la fecha del nuevo contacto y que se trata de una segunda conversación. No rellenes estos apartados por deducción. El propio documento identifica ambas preguntas como pendientes. 【turn110932view1】
Otras correcciones que conviene revisar
En el documento aparecen tres cuestiones relevantes:
- Evidencia de E6: no mirar las etiquetas no demuestra por sí solo que el origen o el productor local no le importen. Del mismo modo, contar qué ha cocinado un día con lo que había en la despensa no demuestra que siempre improvise y no planifique.
- Estado de las necesidades: en la tabla de necesidades del documento de entrevistas, N-PLA-02 aparece como «Indicio fuerte», mientras que en la tabla 3 de personas figura como «Indicio». Conviene mantener una clasificación coherente y explicar en una nota por qué consideras que hay más evidencia.
- Privacidad: el apartado «Recordatorios» utiliza la expresión «tus compañeras de piso». Conviene retirarlo o neutralizarlo para no revelar la relación personal con las entrevistadas.
También hay que revisar el riesgo relativo a las valoraciones, que sigue diciendo que están completamente fuera del MVP, y contrastarlo con la decisión C-29 antes de dar por correcta esa afirmación. 【turn329731view0】 
3. Revisión cruzada del comparativo y de personas
He podido abrir los dos documentos de GitHub:
- FOOD4ALL_comparativo_revisado.md
- FOOD4ALL_personas_empatia_v2.md
El comparativo sigue indicando «Revisión: pendiente (Juan Antonio)» y, en el apartado 4, solicita confirmar o corregir las inferencias. Por tanto, en la versión consultada no consta que la revisión personal esté cerrada. 【turn132461view0】

Estos son los resultados de la revisión documental.
Apartado 6.2: criterios de aceptación
Punto    Resultado
Orden de la ruta    Correcto: ordenar las paradas por cercanía aparece como V2, no como MVP.
Registro en cada parada    Hay una discrepancia: la descripción promete registrar cantidad, estado y temperatura, pero el criterio del MVP registra la hora de recogida y los bultos. La temperatura de la cámara de frío aparece como V2.
Gestión de faltas    El identificador RF-07.3-09 ya aparece en la versión consultada, junto con la aplicación de la preferencia elegida por el cliente.
Aviso «Consume primero»    El criterio indica que se envía cuando se entrega el pedido, coherente con el momento previsto para el aviso.

【turn531501view0】

La corrección más clara es ajustar la descripción del registro en las paradas para que no prometa funciones que no forman parte del MVP, salvo que el equipo haya decidido ampliar ese alcance.
Apartado 10: mapa de trazabilidad
El apartado relaciona las necesidades de las personas con los procesos de B4, las fichas de requisitos, las historias y los criterios de aceptación. Sin embargo, he encontrado dos cuestiones que conviene resolver. 【turn132461view2】

Primero, en la fila de N-VEN-03 («Reducir la merma») aparece un guion en la columna de historia, aunque sí se indica una ficha y un criterio. Hay que confirmar si la ausencia de historia es intencionada por tratarse de V2 o si falta completar la trazabilidad.

Segundo, existe una discrepancia entre documentos sobre N-IA-01: el comparativo la describe como «Hipótesis», mientras que la tabla 3 de personas la clasifica como «No confirmada». Conviene armonizar ambas referencias para que la evidencia tenga el mismo significado en los dos documentos. 【turn132461view0】【turn132461view1】

La tabla 3 sí contiene varios estados diferenciados —«Indicio», «Hipótesis» y «No confirmada»—, por lo que no sería correcto afirmar que todas las necesidades siguen marcadas como hipótesis. 【turn132461view1】
4. Qué falta hacer realmente
Ya consta en los documentos

Las conclusiones de E5 y E6 están identificadas como redactadas por Juan Antonio y la referencia de E5, P7, está aclarada.



Necesita tu intervención

La revisión crítica de la sesión, las dos preguntas pendientes a E5 y E6 y la decisión final sobre las inferencias de las entrevistas.



Resultados de la revisión cruzada

Ajustar la descripción del registro de paradas, resolver la discrepancia de N-IA-01 y comprobar la trazabilidad de N-VEN-03. Además, contrastar el riesgo de las valoraciones con C-29.



Asana

No he publicado el comentario. Además de que la conexión disponible no me da acceso al proyecto del grupo, AGENTS.md establece que Asana es de solo lectura para el asistente y reserva las revisiones a la persona.



Conclusión: no hace falta repetir lo que ya consta corregido en E5/E6. Los dos pendientes de entrevista requieren respuestas reales; la revisión del comparativo y de los apartados 6.2 y 10 tiene hallazgos concretos que puedes comprobar y valorar. No he aplicado cambios en GitHub: para trabajar sobre una rama del repositorio, primero es necesario conectar GitHub.

**Resultado:** Es la revisión de otro asistente (texto pegado). Se comprueba cada hallazgo contra el repositorio y todos se confirman, con dos matices: el comparativo ya tiene revisado el hallazgo 1 (23/10) y la fila de 6.2 ya marcaba la temperatura como V2. Hallazgos nuevos: N-IA-01 figura como «hipótesis» en el comparativo y como «No confirmada» en personas y en la línea base; la descripción del registro de paradas de 6.2 promete más que el MVP; N-VEN-03 no tiene historia en el apartado 10. Se proponen seis correcciones mecánicas; las inferencias de E6, N-VEN-03, P10 y P11 y los comentarios quedan para Juan Antonio.

### 15:46

Sí, aplica las correcciones de la 1 a la 6

**Resultado:** Rama `docs/revision-e5-e6` sobre `feat/expectativa`. Aplicadas: 1) quitado «Recordatorios» de las entrevistas (RST-06); 2) N-PLA-02 pasa de «Indicio fuerte» a «Indicio», explicando por qué tiene más apoyo; 3) riesgo de las valoraciones al día con C-29; 4) N-IA-01 «No confirmada» (C-08) en el comparativo; 5) descripción del registro de paradas de 6.2 ajustada al MVP (hora y bultos; la temperatura, en V2); 6) `docs/estado.md` al día. No se tocan las respuestas de las entrevistadas ni las interpretaciones de Juan Antonio. La línea 259 (6.1) también menciona la temperatura sin separar MVP y V2: no se cambia porque no estaba en lo aprobado. Sin subir hasta el visto bueno.

### 15:49

Sí, súbelo y prepara el PR y  no te dejes nada

**Resultado:** Como pide no dejarse nada, se aplica también a la línea 259 de `FOOD4ALL_personas_empatia_v2.md` (apartado 6.1) el ajuste ya aprobado para 6.2: Rafa registra la recogida en cada parada (hora y bultos; la temperatura, en V2). Ya no queda en el documento ninguna «cantidad, estado y temperatura». `git push` de `docs/revision-e5-e6` y PR contra `feat/expectativa`, que no cierra ningún issue y recoge todos los cambios, lo que queda para Juan Antonio y lo que debe revisar Sebastián.

## Revisión crítica del equipo

*Pendiente: la escribe Juan Antonio.*
