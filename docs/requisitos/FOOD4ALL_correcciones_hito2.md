# FOOD4ALL · Correcciones del Hito 2 tras la valoración provisional

22/10/2026 · Sebastián Manuel Mateo Sánchez · Revisión: pendiente (Juan Antonio y Miguel)

La valoración provisional del Hito 2 (Gerardo Casas, 21/10/2026) es favorable sobre la estructura, pero señala vacíos de completitud, de evidencia y de coherencia. Este documento recoge, punto por punto, qué se ha corregido, dónde está y qué queda pendiente, y por qué. También incluye la propuesta de criba que el equipo tiene que aprobar.

## 1. Resumen

| | Antes (21/10) | Ahora (22/10) |
| --- | --- | --- |
| Catálogos de necesidades | 3 incompatibles: N-01…N-08 en B4, N-01…N-20 en B2 y N-<MÓDULO> en B1 | 1 catálogo único de 22 necesidades, con equivalencias |
| Fichas del MVP con apartados «Por completar» | Todas salvo el login | 0 de 105 |
| Matriz de trazabilidad (B6) | Vacía | Generada: 127 subrequisitos, cobertura por necesidad y controles |
| Historias con criterios Gherkin propios | 1 (US-04) | 19 (6 nuevas: US-14 a US-19) |
| Procesos sin historia | 6 (RF-14 a RF-19) | 0 |
| Requisitos con prioridad incoherente con su entrega («Could · MVP», «Must · V2») o con su historia | 58 (47 + 11) | 0 |
| Estados del pedido y del reembolso simulado | Repartidos entre fichas | Un contrato común (`FOOD4ALL_estados_pedido.md`) |
| RNF con origen del umbral y plan de verificación | 0 | 16 |
| Requisitos | 556 | 559 (3 nuevos de faltas) |

## 2. Punto por punto

| # | Lo que dice la valoración | Qué se ha hecho | Dónde | Estado |
| --- | --- | --- | --- | --- |
| 1 | Muchas fichas dicen «Por completar por el responsable» | Fichas completas de los 105 subrequisitos del MVP (90 RF y 15 RNF): descripción, supuestos, ubicación, elementos, diseño, flujo, campos, errores, reglas, accesibilidad y fuera de alcance. Las de V2 y V3 dicen explícitamente que se completan cuando entren en un sprint | `benchmark/fichas_*.js` → Asana [B4] y vista previa | Hecho; falta la revisión de otro miembro |
| 2 | Responsables y revisores «por asignar» | Hay un reparto propuesto, con el revisor en el proceso siguiente de la cascada (`FOOD4ALL_propuesta_asana.md`, apartado 4) | — | **Pendiente: decisión del equipo** |
| 3 | La criba sigue abierta desde el 19/10 | Propuesta de criba con reglas (apartado 4 de este documento) | Este documento | **Pendiente: aprobación del equipo (Product Owner)** |
| 4 | No hay entrevistas: la solución está más definida que la evidencia | Regla de evidencia nueva, plan de contraste necesidad por necesidad («qué cambia si resulta falsa») y plantilla de registro | `FOOD4ALL_necesidades.md`, apartados 1, 5 y 6 | Preparado; **las entrevistas se suben el 23/10** |
| 5 | La regla «confirmada con 2 fuentes» no basta | Confirmada = 3 o más entrevistas independientes, con pregunta abierta, cita literal y sin evidencia contraria igual o mayor. Con menos, «Indicio» | `FOOD4ALL_necesidades.md`, apartado 1 | Hecho |
| 6 | Las personas son documentales; no son usuarios observados | Aviso explícito en la v2 de B2 y en la especificación. F-11 figura como «síntesis documental, no evidencia independiente» | `FOOD4ALL_personas_empatia_v2.md`; especificación, bloque 4 | Hecho |
| 7 | El benchmark no prueba que Food4All reduzca costes o fricción | Revisión del comparativo: fuente, observación, inferencia, explicación alternativa y requisito afectado de cada hallazgo | `FOOD4ALL_comparativo_revisado.md` | Hecho; falta la revisión de Juan Antonio |
| 8 | La matriz de B6 está vacía; las relaciones no son auditables | Matriz generada con necesidad (ID y nombre), fuente, requisito, historia, prioridad, alcance, dependencias, criterios y RNF; columnas H3, H4 y H5 vacías | `FOOD4ALL_matriz_trazabilidad.md` | Hecho |
| 9 | Prioridades locales discutibles («Could · MVP»); MVP sin etiquetar de forma inequívoca | Regla: Must solo en el MVP; el MVP solo lleva Must o Should; V2 lleva Should o Could; V3 solo Could. 47 requisitos ajustados por la regla y 11 para alinearse con su historia. Columnas nuevas «Alcance» (MVP, MVP simulado, V2, V3 o Excluido) y «Depende de» (D-, H- o servicio externo) | Excel; `benchmark/cambios_v04.json` | Hecho |
| 10 | Historias y requisitos con prioridades distintas | RF-09 y RF-10 pasan a Must (sus requisitos ya lo eran); RF-12 queda como «Should · MVP simulado»; RF-11 y RF-14 salen del MVP | Especificación, bloques 6, 7.1 y 12 | Hecho |
| 11 | «Pago simulado» y «reembolso automático» deben definirse juntos | El reembolso es un **registro de prueba** que resta del pago de prueba: nunca hay transferencia. 8 requisitos reescritos (RF-06.6-02, RF-07.3-04, RF-07.3-05, RF-07.5-03, RF-07.6-02, RF-08.2-03, RF-09.2-02 y RF-10.2-02) | `FOOD4ALL_estados_pedido.md`, apartado 6 | Hecho |
| 12 | Falta una máquina de estados común; la falta parcial choca con RNF-07 | Estados del pedido global, del subpedido y de la línea, con momentos de referencia, regla de etapa y regla de no duplicar. 3 requisitos nuevos: RF-07.3-06 (rango), RF-07.3-07 (idempotencia) y RF-07.3-08 (sin faltas tras la recogida) | `FOOD4ALL_estados_pedido.md` | Hecho |
| 13 | El ejemplo RF-07.3-05 corregido | Incorporado tal cual como requisito y criterio, y desarrollado en el ejemplo completo del apartado 7 de los estados | `benchmark/rf05_08.js` | Hecho |
| 14 | Los umbrales de RNF no dicen de dónde salen ni cómo se medirán | Cada RNF indica el origen del umbral (ley, referencia técnica, decisión o hipótesis), el entorno, la muestra, el método, la evidencia esperada y qué resultado haría revisarlo. Se ejecuta en el Sprint 5 | Especificación, bloque 8; `benchmark/fichas_rnf.js` | Hecho |
| 15 | 20 peticiones no bastan para afirmar un p95 | Dicho expresamente en RNF-03.2 (para un p95 hacen falta al menos 100) y en el bloque 8 | `fichas_rnf.js` | Hecho |
| 16 | Discrepancia de IDs entre los RF de B2 y los de B4 | v2 del documento de personas con el ID vigente de B4 y el de la v1 al lado, y mapa necesidad → proceso → ficha → historia → criterio | `FOOD4ALL_personas_empatia_v2.md`, apartados 6.2 y 10 | Hecho; falta la revisión de Juan Antonio |
| 17 | N-ID duplicados o incompatibles entre B1, B2 y B4 | Catálogo único N-<MÓDULO>-NN con tablas de equivalencias. Los 556 requisitos se reasignaron uno a uno (detalle en `cambios_v04.json`) | `FOOD4ALL_necesidades.md`, apartado 4 | Hecho |
| 18 | Hub, comisión y rol jurídico sin decidir, pero las fichas fijan comportamiento | Cada requisito afectado lleva «Depende de: D-01, D-02 o D-03» y la regla se marca como Pendiente con un valor provisional. Nuevas H-04 (plazos de incidencias), D-04 (plazo de confirmación) y R-03 (presentar hipótesis como validación) | Especificación, bloque 10; Excel | Hecho |
| 19 | «Hecho cuando» no es un criterio de aceptación | Aclarado en la plantilla de ficha y en cada ficha | Especificación, bloque 7.2 | Hecho |
| 20 | La aprobación debe constar con autor, revisor, fecha, cambio, decisión y razón | Formato fijo para el comentario de revisión: elemento revisado, discrepancias, decisión, cambio y fecha. Registro de versiones en la especificación y registro de cambios en `cambios_v04.json` | Especificación, bloques 0 y 7.2 | Formato hecho; **las revisiones las hacen personas** |
| 21 | El borrador de 211 requisitos es histórico, no la especificación vigente | F-09 figura como «histórico: lista de ideas, no evidencia» | `FOOD4ALL_necesidades.md`, apartado 3 | Hecho |
| 22 | Fuente de verdad única y registro de versión | Tabla de fuente de verdad (B1 necesidades, B2 personas, B3 legal, B4 fichas y estados, B5 historias, B6 relaciones) y registro de versiones | Especificación, bloques 0 y 11 | Hecho |
| 23 | Preparar la defensa con tres recorridos | Respuestas preparadas con IDs concretos | `FOOD4ALL_defensa_hito2.md` | Hecho |
| 24 | Glosario v2 (B6) | Hub, pedido global y consolidado, subpedido, línea, falta, sustituto, franja, capacidad, horas de cierre y de corte, vendedor aprobado, lote, cesta IA, pago y reembolso de prueba, alcance, estados de evidencia, INVEST… | Especificación, bloque 11 | Hecho |

## 3. Lo que no se ha hecho, y por qué

| Pendiente | Por qué no se ha hecho | Quién y cuándo |
| --- | --- | --- |
| Entrevistas F-07 (5 estudiantes) y F-08 (2–3 vendedores) | No se pueden inventar: la valoración lo dice expresamente y las reglas del proyecto lo prohíben | Miguel y Juan Antonio, 23/10/2026, con la plantilla de `FOOD4ALL_necesidades.md` |
| Cambiar el estado de las necesidades según las entrevistas | Depende de las entrevistas | Sebastián (B1), 23/10/2026, en `necesidades.js` + `npm run asana` |
| Revisión de cada bloque por alguien distinto de su autor | Es una revisión humana; simularla sería falsear la trazabilidad | Juan Antonio y Miguel, con un comentario en Asana en el formato del apartado 2, punto 20 |
| Asignar responsables y revisores en Asana | Es una decisión del equipo | Equipo; hay propuesta en `FOOD4ALL_propuesta_asana.md` |
| Aprobar la criba | Es una decisión del Product Owner y del equipo | Apartado 4 de este documento |
| Cambiar «Estado entrega» del Hito 2 y preparar la Sprint Review | Lo hace quien entrega (B6) | Miguel, 23/10/2026 |
| Comprobaciones manuales del benchmark (con cuenta o app) | Requieren cuentas reales | Lista en el Anexo B de la especificación |
| Revisión jurídica profesional | El análisis legal es orientativo | Antes de operar (fuera del proyecto) |

## 4. Propuesta de criba (para aprobar)

La criba («Requisitos temporales → Criba de requisitos») decide qué es imprescindible y qué es secundario. Propuesta:

1. **Aprobar la regla de prioridad y entrega** del punto 9 y el alcance «MVP simulado» para el pago, los reembolsos y la IA.
2. **Requisitos mínimos (MVP): los 400 requisitos con entrega MVP.** Al aprobar la criba:
   - los **241** que están «Pendiente» y no dependen de ninguna decisión abierta pasan a **Decidido**;
   - los **56** que dependen de D-01, D-02, D-03, D-04, H-01, H-02, H-04 o de un servicio externo siguen «Pendiente» o «Hipótesis» hasta que se cierre lo que los bloquea;
   - los **95** ya Decidido y los **8** en Hipótesis no cambian.
3. **Requisitos secundarios (V2 y V3): los 155 restantes.** Siguen «Pendiente»: no se deciden en el Sprint 2. La lista de secundarios que pide la tarea es el filtro «Entrega = V2 o V3» del Excel.
4. **Excluidos:** RF-13.7 (panel de prompts) y RF-13.4-04 (hitos de Asana en el admin) son del panel interno de la landing, no del marketplace. Conservan su ID con «Won't».
5. **Historias:** el backlog de 19 historias del bloque 12, con las 14 primeras en el MVP.

Si el equipo lo aprueba, se cambia el estado en `benchmark/` (una línea por regla), se regenera todo y se deja constancia en un comentario de «Criba de requisitos» con la fecha y quién lo aprobó.

## 5. Cómo se ha hecho y cómo se rehace

Todo sale de `docs/requisitos/benchmark/`:

- `necesidades.js`: catálogo de necesidades.
- `rf*.js` y `rnf.js`: requisitos atómicos.
- `fichas_*.js`: fichas.
- `alcance.js`: alcance y dependencias.
- `cambios_v04.json`: registro de los cambios de esta versión.

`npm run build` regenera el Excel. `npm run asana` regenera la vista previa, el árbol de tareas, la matriz y las tablas del catálogo. Para cambiar un requisito, se edita su fichero y se regenera; no se edita la vista previa ni la matriz a mano.
