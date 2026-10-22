# Requisitos de FOOD4ALL (Hito 2)

Requisitos del **marketplace** FOOD4ALL, no de la landing. Versión **0.4** (22/10/2026), con las correcciones de la valoración provisional del Hito 2. Todo sale de `benchmark/` y se regenera; el Excel, la vista previa, la matriz y Asana tienen el mismo contenido.

| Fichero | Qué es |
| --- | --- |
| [`FOOD4ALL_especificacion_requisitos.md`](FOOD4ALL_especificacion_requisitos.md) | La especificación: fuentes, necesidades, personas, procesos en cascada, 19 historias con Gherkin, RF-01 a RF-19, RNF-01 a RNF-11, trazabilidad, decisiones abiertas, fuentes de verdad, glosario v2, backlog y el ejemplo del login (Anexo A) |
| [`FOOD4ALL_necesidades.md`](FOOD4ALL_necesidades.md) | **Catálogo único de necesidades** (N-<MÓDULO>-NN), regla de evidencia, equivalencias con los códigos antiguos, plan de contraste y plantilla de entrevista |
| [`FOOD4ALL_estados_pedido.md`](FOOD4ALL_estados_pedido.md) | Estados del pedido global, el subpedido y la línea, y el pago y el reembolso de prueba: el contrato común de RF-06 a RF-10 |
| [`FOOD4ALL_matriz_trazabilidad.md`](FOOD4ALL_matriz_trazabilidad.md) | Matriz de trazabilidad (generada): cobertura por necesidad, una fila por subrequisito y controles |
| [`FOOD4ALL_personas_empatia_v2.md`](FOOD4ALL_personas_empatia_v2.md) | Personas y mapas de empatía de B2 (Juan Antonio), v2 con los IDs corregidos |
| [`FOOD4ALL_comparativo_revisado.md`](FOOD4ALL_comparativo_revisado.md) | Revisión del comparativo de empresas: fuente, observación, inferencia y alternativa de cada hallazgo |
| [`FOOD4ALL_correcciones_hito2.md`](FOOD4ALL_correcciones_hito2.md) | Qué se corrigió tras la valoración, qué falta y la propuesta de criba |
| [`FOOD4ALL_defensa_hito2.md`](FOOD4ALL_defensa_hito2.md) | Preparación de la Sprint Review: los tres recorridos y las preguntas complementarias |
| `FOOD4ALL_documento_requisitos_hito2.md` | Documento final (generado): la especificación con todos los anexos y las fichas, para adjuntar en el Hito 2 |
| `FOOD4ALL_requisitos_benchmark.xlsx` | Los 559 requisitos atómicos con criterio, necesidad, alcance, dependencias y comparación con 6 competidores; hoja «Necesidades» |
| [`FOOD4ALL_asana_vista_previa.md`](FOOD4ALL_asana_vista_previa.md) | Todas las tareas de [B4] y [B5] con su descripción, para leerlas sin abrir Asana |
| [`FOOD4ALL_propuesta_asana.md`](FOOD4ALL_propuesta_asana.md) | Cómo se decidió organizarlo en Asana y el reparto propuesto |
| `benchmark/` | Fuentes y generadores |

## Dónde está en Asana

Proyecto de la asignatura → **[Food4All] Hito 2 – Requisitos y Criterios de Aceptación**:

- **[B1]** necesidades y entrevistas; **[B2]** personas; **[B3]** normas.
- **[B4] Catálogo de requisitos → Requisitos funcionales**: un proceso por subtarea (RF-01 a RF-19), en orden de construcción. Dentro de cada proceso hay un subrequisito por pantalla o método (RF-01.1, RF-01.2…), y cada uno lleva su ficha.
- **[B4] → Requisitos no funcionales**: RNF-01 a RNF-11, con su plan de verificación.
- **[B5] User stories → Product Backlog**: US-01 a US-19, con prioridad, puntos, entrega y criterios Gherkin.
- **[B6]** matriz, glosario y documento final.

Todavía no tienen responsable ni fecha: se reparten en equipo. El reparto propuesto está en el apartado 4 de la propuesta.

## Cómo revisar un requisito (lo que falta del Hito 2)

Las fichas del MVP ya están escritas. Lo que falta es que **otra persona** las revise:

1. Abre en Asana la subtarea de un subrequisito que no sea tuyo (por ejemplo, `RF-05.2 · Vista del carrito agrupada`).
2. Comprueba que un programador podría construirlo sin preguntar, que cada regla tiene su criterio y que la necesidad y la fuente tienen sentido.
3. Deja un comentario con: **elemento revisado, discrepancias encontradas, decisión, cambio hecho y fecha**. Si hay que cambiar algo, cámbialo en `benchmark/` y regenera.
4. «Hecho cuando» es la definición de terminado de la ficha; los criterios de aceptación son los del apartado 13.

Identificadores: `RF-05` es un proceso, `RF-05.2` un subrequisito y `RF-05.2-03` un requisito atómico. Las necesidades son `N-CAR-01`, `N-VEN-04`…: siempre con su nombre al lado.

## Cómo registrar las entrevistas

Plantilla y regla en [`FOOD4ALL_necesidades.md`](FOOD4ALL_necesidades.md), apartados 1, 5 y 6. Cada entrevista va como subtarea de «Historias de usuario» (E1, E2… para estudiantes y V1, V2… para vendedores), sin datos que identifiquen a nadie. Después se cambia el estado de cada necesidad en `benchmark/necesidades.js` y se regenera.

## Regenerar

Requiere Node 22 o superior.

```bash
cd docs/requisitos/benchmark
npm install
npm run todo     # Excel, vista previa, asana_tareas.json, matriz, catálogo de necesidades y documento final
```

| Fichero de `benchmark/` | Qué contiene |
| --- | --- |
| `rf01.js`, `rf02_04.js`, `rf05_08.js`, `rf09_14.js`, `rf15_19.js`, `detalle.js`, `rnf.js` | Requisitos atómicos: `R(texto, criterio, prioridad, entrega, funciones, necesidad, { estado })` |
| `necesidades.js` | Catálogo único de necesidades y fuentes |
| `fichas_base.js`, `fichas_oferta.js`, `fichas_compra.js`, `fichas_entrega.js`, `fichas_rnf.js`, `fichas_comun.js` | Fichas «mini manual» de los subrequisitos del MVP y plan de verificación de los RNF |
| `alcance.js` | Alcance (MVP, MVP simulado, V2, V3, Excluido) y dependencias (D-, H-, servicios externos) |
| `bench.js` | Datos de la competencia; si comprobáis a mano una función en una app, se corrige aquí |
| `cambios_v04.json` | Registro de los cambios de la v0.4, requisito a requisito |

**Regla de prioridad:** Must solo en el MVP; el MVP solo lleva Must o Should; V2 lleva Should o Could; V3 solo Could. `build.js` y `asana.js` paran si un subrequisito del MVP no tiene ficha, si una historia no tiene criterios o si un requisito tiene una necesidad que no está en el catálogo.

## Asana (solo quien la coordine)

Estos scripts escriben en el proyecto de clase, que comparten los tres grupos. No los ejecutéis sin acordarlo antes. Usan el token de `backend/.env`.

| Script o fichero | Para qué |
| --- | --- |
| `actualizar_asana.js` | Lleva la v0.4 a Asana. Sin opciones va **en seco**: solo lee y enseña el plan. Con `--si` actualiza las descripciones de [B4] y [B5], crea US-14 a US-19 y añade un bloque «Actualización v0.4» en [B1], [B2], [B4], [B5] y [B6]. `--adjuntos` sube los documentos y `--comentar-criba` deja la propuesta de criba. Antes de escribir, guarda una copia en `asana_copia_hito2_v04_antes.json` |
| `subir_asana.js` | Creación inicial del 20/10/2026 |
| `asana_creadas.json` | Las 173 tareas creadas el 20/10/2026, con su ID de Asana. `node subir_asana.js --deshacer --si` las borra; no borra nada más |
| `asana_borradas.json` | Las 22 tareas antiguas que se quitaron: 14 fichas de B4 (RF-CUE-01…) y las subtareas vacías de B3 y B5 |
| `asana_copia_hito2_antes.json` | Copia completa del Hito 2 antes del cambio del 20/10/2026 |
