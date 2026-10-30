# FOOD4ALL · Estado y pendientes

Lo que está pasando ahora. Sale de los traspasos del 23 y el 26/10 que había en `AGENTS.md` (la versión completa está en el historial de git, commit `4138056`). Cuando se cree el tablero de issues, cada punto pasa a un issue y se borra de aquí. Última actualización: 27/10/2026.

## Ahora

- **Sprint 3** (análisis y diseño estructurado), desde el 26/10.
- **Feedback del profesor (27/10):** repartido en los issues #11 a #22 (Miguel: #11 a #15; Sebastián: #16 a #19; Juan Antonio: #20 a #22). Reparto y contratos: `docs/contratos.md`. Hoy, Miguel: #11 (base de datos) y #12 (usuarios y avisos).

## Pendiente

Lo que una persona tiene que hacer por un cambio de otra va en `docs/encargos/<persona>.md` (regla 11 de `AGENTS.md`); el hook se lo enseña al abrir la sesión.

**Sebastián**
- Escribir la «Revisión crítica del equipo» de los prompts del 25 y el 26/10.
- Comparar con los otros grupos leyendo Asana (`docs/requisitos/benchmark/leer_otros_grupos.js`, solo lectura; el resultado se guarda fuera del repositorio) y terminar los recorridos por la competencia con capturas.
- Asana, cuando todo esté verificado: subir E1–E6 como subtareas de «Historias de usuario», asignar responsables y dejar solo las subtareas imprescindibles. Solo en tareas `[Food4All]`, nunca con comentarios del asistente.

**Juan Antonio**
- E5 y E6: las conclusiones (commit `2b820e7`) y la aclaración de P7 (`4eb96c1`) ya son suyas (23/10). Falta volver a preguntarles lo que no se preguntó: «si no pudieras estar en casa cuando llega el pedido» y el punto de recogida. Decidir si se suavizan las inferencias de E6 en «Lo que contradice» (etiquetas → origen; un día → improvisa).
- Revisión cruzada de `FOOD4ALL_comparativo_revisado.md` y `FOOD4ALL_personas_empatia_v2.md` (apartados 6.2 y 10), con comentario suyo en Asana. Del comparativo, el hallazgo 1 ya está revisado (23/10); falta su apartado 4. Corregidos el 27/10: N-IA-01 «No confirmada» en el comparativo y el registro de paradas de 6.2. Abierto: N-VEN-03 no tiene historia en el apartado 10 (¿intencionado, por ser V2?).

**Equipo**
- La revisión cruzada del núcleo de compra (RF-05 a RF-07) está sin reasignar: la tiene que hacer alguien distinto del autor.
- Anotar en la línea base la retirada de la pestaña «Asistente IA» (C-30; la C-26 y RF-12.1-01 aún la describen).
- Pregunta legal D-01: ¿puede un productor en venta directa (Decreto 163/2016, «sin intermediarios») vender a través de FOOD4ALL? (CL-06).
- Añadir las plataformas municipales al comparativo.
- Entrevistas a vendedores (preguntas nuevas en `docs/competencia/comercio-local.md`). Hasta entonces esperan M-06 (punto de recogida) y pagar como invitado.
- Abiertos del Hito 2: regla de cancelación (comité de cambio de la Clase 11) y compensación por retraso. Lista completa: `docs/requisitos/FOOD4ALL_linea_base_h2.md`, apartado 5.
- Código y texto: `AI_EXAMPLE` en `frontend/src/data/examples.js` no se usa; el titular «no siete» de `/vender` es críptico.

**Para otro día (interno)**
- Datos de E5 y E6 en el historial de git: el commit `58437c7` (23/10) conserva carrera, edad aproximada y que son compañeras de piso del entrevistador. Quitarlo exige reescribir el historial y forzar el push en `main`.
- Registrar los prompts que usó Miguel para las 12 historias descartadas (C-22).
- En el ordenador de Sebastián: `~/proyectos/Food4All-recibido-2026-10-23/food4all` (184 MB) se puede borrar cuando se pasen a `food4all` sus dos archivos ignorados (`docs/requisitos/benchmark/asana_tareas.json`, `html_previo_v04/`) y Sebastián compare su `.env`.
