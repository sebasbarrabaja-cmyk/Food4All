# FOOD4ALL · Qué falta para entregar el Hito 2 y quién lo hace

23/10/2026 · Entrega: **hoy a las 23:59** · Hoja de trabajo del equipo (Sebastián, Juan Antonio, Miguel)

Sale de lo que queda abierto en `FOOD4ALL_correcciones_hito2.md` (apartado 3), de la lista de `FOOD4ALL_defensa_hito2.md` (apartado 5), del comentario del profesor del 23/10 en «Criba de requisitos» y de lo que la Clase 11 pide a Food4All para cerrar el Hito 2.

> Comentario del profesor (23/10, 09:23): «Esto lo ha hecho la IA. Necesito los prompts en la landing documental y que me expliquéis porque habéis cribado esos en concreto. Argumentos.»
>
> Por eso, **los comentarios en Asana, los argumentos de la criba y las revisiones los escribe cada uno con sus palabras.** El asistente prepara datos, plantillas y preguntas; no redacta lo que firmáis vosotros.

## Calendario

| Hora | Qué | Quién |
| --- | --- | --- |
| hasta las 16:00 | Mensaje al grupo, lectura de Asana y guion de la competencia a Christina | Sebastián |
| hasta las 17:30 | Preguntas de la criba y restricciones (RST) candidatas listas para el equipo | Asistente |
| **hasta las 19:00** | **Entrevistas subidas** (estudiantes y vendedores) | Juan Antonio, Miguel |
| 19:00–20:30 | Entrevistas registradas y necesidades regeneradas | Asistente, Sebastián revisa |
| **hasta las 21:00** | Respuestas a las preguntas de la criba, RST validadas, revisión cruzada en Asana | Los tres |
| 21:00–22:00 | Reparto de responsables y criba aprobada en Asana | Sebastián (con el visto bueno del equipo) |
| 22:00–23:00 | Documento adjunto al Hito 2 y «Estado entrega» cambiado | Miguel (B6) |
| 22:00–23:00 | Push, PR y explicación al profesor para ver los prompts | Sebastián |
| 23:00–23:59 | Margen | — |

## Sebastián

- [ ] Ejecutar la lectura de Asana (solo lectura) para comparar con INDICONNECT y LearnCode.
- [ ] Avisar a Christina de que tiene el guion `PARA-CHRISTINA-competencia.md` (recorridos por la competencia, con capturas y sin pagar).
- [ ] Pegar en el grupo el mensaje del final de esta hoja.
- [ ] Revisar el registro de las entrevistas cuando esté hecho (que no se haya añadido nada que no dijeran).
- [ ] Responder tus preguntas de la criba (`FOOD4ALL_criba_argumentos.md`).
- [ ] Validar las RST candidatas.
- [ ] Revisión cruzada: un bloque que no sea tuyo, con un comentario en Asana en el formato de abajo.
- [ ] Acordar el reparto (propuesta en `FOOD4ALL_propuesta_asana.md`, apartado 4) y ponerlo en Asana.
- [ ] Aprobar la criba en Asana como Product Owner, con la fecha y quién la aprobó.
- [ ] Enviar al profesor la explicación para ver los prompts (`/admin#prompts`) y darle la contraseña en persona o por un canal privado. No se escribe en ningún documento.
- [ ] Push de la rama `docs/hito2-entrega` y PR.
- [ ] Pendientes tuyos en Asana: errata «Analisas» del Hito 3, tu nombre en el perfil y responsables de las subtareas de Mercado y Marco legal del Hito 1.

## Juan Antonio

- [ ] **Entrevistas antes de las 19:00.** Faltan estudiantes hasta llegar a 5 (hay 4) y vendedores (mínimo 2–3, códigos V1, V2…). Cómo registrarlas: `FOOD4ALL_necesidades.md`, apartado 6. Apuntes tal cual, sin datos personales (ni nombres ni teléfonos).
- [ ] Responder tus preguntas de la criba (`FOOD4ALL_criba_argumentos.md`) con tus palabras.
- [ ] Validar las RST candidatas (sí, no o cambiar).
- [ ] Revisión cruzada: `FOOD4ALL_comparativo_revisado.md` y la v2 de personas (`FOOD4ALL_personas_empatia_v2.md`, apartados 6.2 y 10). Las correcciones 7 y 16 están pendientes de tu revisión. Comentario en Asana en el formato de abajo.

## Miguel

- [ ] **Entrevistas antes de las 19:00**, igual que Juan Antonio (repartíos estudiantes y vendedores).
- [ ] Responder tus preguntas de la criba (`FOOD4ALL_criba_argumentos.md`) con tus palabras.
- [ ] Validar las RST candidatas.
- [ ] Revisión cruzada: un bloque que no sea tuyo (propuesta: el núcleo de compra, RF-05, RF-06 y RF-07, y `FOOD4ALL_estados_pedido.md`). Comentario en Asana en el formato de abajo.
- [ ] Entre las 22:00 y las 23:00: adjuntar el documento de requisitos al Hito 2 y cambiar «Estado entrega» (B6).

## Asistente (Claude)

- [x] Rama `docs/hito2-entrega` con el trabajo pendiente de Windows (entrevistas E1–E4 y regla de no comentar en Asana).
- [x] Guion de recorridos por la competencia para Christina.
- [ ] Comparación con los otros grupos (cuando esté la lectura de Asana).
- [ ] `FOOD4ALL_criba_argumentos.md`: datos de cada grupo de la criba y preguntas para cada uno.
- [ ] RST candidatas, sacadas solo de lo ya decidido.
- [ ] Registrar las entrevistas nuevas y regenerar las necesidades (`npm run todo`).
- [ ] Integrar los recorridos de Christina en `docs/competencia/` y en el comparativo.
- [ ] Explicación para el profesor sobre los prompts.
- [ ] Registrar los prompts de la sesión y actualizar el contexto y el resumen.

## Formato del comentario de revisión (Asana)

Lo escribe quien revisa, con sus palabras:

- **Elemento revisado:** (ID o documento)
- **Discrepancias encontradas:** (qué falla o no se entiende)
- **Decisión:** reformular / investigar / descartar / correcto
- **Cambio:** (qué se cambia, o «ninguno»)
- **Fecha y revisor:**

## Mensaje para el grupo

> Hoy a las 23:59 se entrega el Hito 2. Lo que falta, por persona, está en `docs/requisitos/FOOD4ALL_tareas_entrega.md` (rama `docs/hito2-entrega`). Resumen:
>
> **Juan Antonio y Miguel:** subid vuestras entrevistas **antes de las 19:00** (faltan estudiantes hasta llegar a 5 y 2–3 vendedores). Apuntes tal cual, sin nombres ni teléfonos. Cómo: `FOOD4ALL_necesidades.md`, apartado 6.
>
> **Los tres, antes de las 21:00:**
> 1. Responder las preguntas de la criba que os toquen (`FOOD4ALL_criba_argumentos.md`). El profe dijo «Esto lo ha hecho la IA» y quiere argumentos: tienen que ser vuestros y con vuestras palabras, porque os los puede preguntar.
> 2. Decir sí o no a las restricciones (RST) propuestas.
> 3. Revisar un bloque que no sea vuestro y dejar un comentario en Asana: elemento, discrepancias, decisión, cambio y fecha. Juan Antonio: comparativo y personas v2. Miguel: carrito, checkout y subpedidos (RF-05 a RF-07).
>
> **Miguel, entre las 22:00 y las 23:00:** adjuntar el documento al Hito 2 y cambiar «Estado entrega».
>
> Yo me encargo del reparto en Asana, de aprobar la criba con lo que respondáis y de enseñarle los prompts al profe.
