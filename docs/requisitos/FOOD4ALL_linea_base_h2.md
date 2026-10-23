# FOOD4ALL · Línea Base Hito 2 (H2-v0.4)

23/10/2026 · Estado: **borrador**, pendiente de la revisión del equipo y del profesor · Preparada por Sebastián con Claude Code (prompts en `/admin#prompts`)

La Clase 11 la define así: *«Versión fechada de necesidades, requisitos y decisiones revisadas. Puede cambiar: el cambio debe indicar qué versión afecta y por qué.»* Es una foto del Hito 2 a fecha de entrega, no un candado. A partir del 26/10 (Sprint 3), cualquier cambio se anota en el apartado 4 diciendo a qué versión afecta.

## 1. Qué incluye

| Elemento | Qué hay en H2-v0.4 | Estado | Dónde |
| --- | --- | --- | --- |
| Necesidades | 22 en un catálogo único (16 de usuario y 6 obligaciones legales) | 0 confirmadas. Con E1–E4: 5 en «Indicio» (N-PLA-01, N-PLA-02, N-CAR-01, N-CAD-01, N-CAT-01) y N-IA-01 «No confirmada». El resto, Hipótesis u Obligación legal | `FOOD4ALL_necesidades.md` · [B1] |
| Entrevistas | E1–E4 (estudiantes, Sebastián) | Faltan las de Juan Antonio y Miguel: estudiantes hasta 5 y 2–3 vendedores | `FOOD4ALL_entrevistas_estudiantes.md` · [B1] |
| Personas y mapa de empatía | 3 arquetipos documentales (v2, con los ID vigentes) | Documentales: no son usuarios observados | `FOOD4ALL_personas_empatia_v2.md` · [B2] |
| Requisitos funcionales | 19 procesos (RF-01 a RF-19) y 490 requisitos atómicos | Prioridad MoSCoW **propuesta**: pendiente de la criba | Especificación, bloque 7 · Excel · [B4] |
| Requisitos no funcionales | 11 procesos (RNF-01 a RNF-11) y 74 requisitos, cada uno con el origen del umbral y su plan de verificación | Umbrales marcados como ley, referencia, decisión o hipótesis. Se verifican en el Sprint 5 | Especificación, bloque 8 · [B4] |
| Restricciones (RST) | Candidatas sacadas de decisiones ya tomadas | **Pendiente: las valida el equipo** | Se añaden aquí al validarse |
| Prioridad y entrega | 564 requisitos: Must 305, Should 198, Could 57, Won't 4. MVP 404 (38 simulados), V2 130, V3 26, Excluido 4 (con C-14 a C-20) | Propuesta: pendiente de la criba | `FOOD4ALL_correcciones_hito2.md`, apartado 4 |
| Historias de usuario | 19 (US-01 a US-19), con criterios Gherkin. Las 14 primeras, en el MVP | Falta la revisión INVEST de otro miembro | Especificación, bloques 6 y 12 · [B5] |
| Estados del pedido | Pedido global, subpedido y línea; reembolso de prueba | Seis estados centrales decididos. «Pago rechazado», «Entrega fallida» y «Cancelado» son propuestas | `FOOD4ALL_estados_pedido.md` |
| Matriz de trazabilidad | Necesidad → fuente → requisito → historia → prioridad → criterio (127 subrequisitos) | Generada. Las columnas H3, H4 y H5 se rellenan en los hitos siguientes | `FOOD4ALL_matriz_trazabilidad.md` · [B6] |
| Decisiones abiertas | D-01 rol jurídico, D-02 comisión, D-03 hub, D-04 plazo de confirmación; H-01 a H-04 | Cada requisito afectado lleva «Depende de» y un valor provisional | Especificación, bloque 10 |

**Versión del repositorio:** al aprobar la línea base se anota aquí el commit de `docs/hito2-entrega`: `________`.

## 2. Qué no significa

Lo dice la Clase 11. Que haya línea base **no** quiere decir:

- que el producto esté construido ni la arquitectura elegida;
- que ninguna necesidad pueda cambiar;
- que una hipótesis sea ya un hecho (hoy no hay ninguna necesidad confirmada);
- que el uso de IA o una integración externa estén aprobados sin justificar su valor, sus datos y sus límites.

## 3. Puerta de entrada

Un elemento entra en la línea base como **decidido** solo si se puede explicar su fuente, su alcance y cómo se comprueba (Clase 11, diapositiva 6). Lo que no pasa esa puerta entra con su estado real: Hipótesis o Pendiente.

## 4. Registro de cambios

Campos de la Clase 11: origen, elemento afectado, impacto, alternativa, decisión, responsable, fecha, versión y evidencia o pregunta pendiente. Tipo: cambio, restricción, hipótesis o alcance.

| N.º | Origen | Elemento afectado | Tipo | Impacto | Alternativa | Decisión | Responsable | Fecha | Versión | Evidencia o pregunta pendiente |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-01 | Valoración 21/10, puntos 16–17: tres catálogos de necesidades incompatibles | Todas las necesidades | Cambio | 556 requisitos reasignados uno a uno | Tabla de equivalencias entre los tres catálogos (la sugiere la valoración) | Catálogo único N-<MÓDULO>-NN, con equivalencias | Sebastián | 22/10/2026 | 0.3 → 0.4 | `benchmark/cambios_v04.json`; `FOOD4ALL_necesidades.md`, apartado 4 |
| C-02 | Valoración, punto 9: prioridades incoherentes con su entrega («Could · MVP») | 47 requisitos | Cambio | Prioridad ajustada a la regla «Must solo en el MVP…» | No registrada | Regla de prioridad y entrega | Sebastián | 22/10/2026 | 0.3 → 0.4 | **Pendiente: aprobación en la criba** |
| C-03 | Valoración, punto 10: requisitos con prioridad distinta a la de su historia | 11 requisitos (RF-11.2-04, RF-12.x, RF-14.1-01) | Cambio | RF-12 pasa a «Should · MVP simulado»; RF-11 y RF-14 salen del MVP | No registrada | Alinear con el proceso y la historia | Sebastián | 22/10/2026 | 0.3 → 0.4 | **Pendiente: criba**. N-IA-01 sale «No confirmada» en E3 y E4: ¿cambia algo en RF-12? |
| C-04 | Valoración, punto 10 | RF-09 y RF-10 | Cambio | Pasan de Should a Must: sus requisitos ya eran Must del MVP | Dejarlos en Should | Must | Sebastián | 22/10/2026 | 0.3 → 0.4 | Especificación, bloque 7.1 |
| C-05 | Valoración, punto 11: pago simulado y reembolso automático sin definir juntos | 8 requisitos de reembolso | Restricción | El reembolso es un registro de prueba, nunca una transferencia | Transferencia real (fuera de alcance) | Reembolso de prueba | Sebastián | 22/10/2026 | 0.3 → 0.4 | `FOOD4ALL_estados_pedido.md`, apartado 6 |
| C-06 | Valoración, punto 12: no hay máquina de estados común; la falta parcial choca con RNF-07 | RF-07.3; RNF-07 | Cambio | 3 requisitos nuevos (RF-07.3-06, -07 y -08) y RF-07.3-05 reescrito | No registrada | Estados comunes con regla de etapa y de no duplicar | Sebastián | 22/10/2026 | 0.3 → 0.4 | `FOOD4ALL_estados_pedido.md` |
| C-07 | Valoración, punto 5: dos menciones no validan una necesidad | Regla de evidencia | Hipótesis | Ninguna necesidad pasa a confirmada sin 3 entrevistas independientes | «Confirmada con 2 fuentes» (regla anterior) | 3 o más entrevistas con cita literal; con menos, «Indicio» | Sebastián | 22/10/2026 | 0.3 → 0.4 | `FOOD4ALL_necesidades.md`, apartado 1 |
| C-08 | Entrevistas E1–E4 | 6 necesidades | Hipótesis | 5 pasan a «Indicio» y N-IA-01 queda «No confirmada». No cambia ningún requisito | — | Estados provisionales hasta tener las del resto | Sebastián | 23/10/2026 | 0.4 | Faltan entrevistas de estudiantes y de vendedores |
| C-09 | Valoración, punto 18: hub, comisión y rol jurídico sin decidir, pero las fichas ya fijan comportamiento | Requisitos que dependen de D-01 a D-04 | Alcance | Marcados con «Depende de» y valor provisional; nuevas H-04, D-04 y R-03 | Esperar a decidir antes de escribirlos | Supuesto del piloto, marcado | Sebastián | 22/10/2026 | 0.3 → 0.4 | Especificación, bloque 10 |
| C-10 | Valoración, puntos 14–15: umbrales sin origen ni plan | 16 fichas RNF | Cambio | Cada RNF dice el origen del umbral y cómo se medirá | No registrada | Plan de verificación por RNF (Sprint 5) | Sebastián | 22/10/2026 | 0.3 → 0.4 | `benchmark/fichas_rnf.js` |
| C-11 | Alcance del marketplace frente al de la landing | RF-13.7 y RF-13.4-04 | Alcance | Conservan su ID, con «Won't» | Dejarlos en el MVP | Excluidos: son del panel interno de la landing | Sebastián | 22/10/2026 | 0.4 | **Pendiente: criba** |
| C-13 | Entrevistas E1–E4 y decisión de Sebastián como Product Owner (23/10) | Propuesta de valor; decisiones cerradas 9 y 10 del contexto («IA visible», «La IA planifica la compra»); RF-12 | Cambio | Orden de lo imprescindible del marketplace: 1) carrito simplificado (varios vendedores, un pedido, un pago) y 2) los productos (precio claro, local y poco procesado), que van ligados: sin uno el otro no funciona; 3) el asistente de IA, que sigue siendo parte importante del proyecto pero va detrás. Afecta a la prioridad de RF-12 (bloque C de la criba) | La IA como reclamo principal | Propuesta del PO | Sebastián | 23/10/2026 | 0.4 | Indicio: E4 (calidad, precio favorable y cantidad), E2 (locales, menos procesados y más baratos); N-IA-01 «No confirmada» (E2, E3 y E4). **Pendiente:** visto bueno del equipo; cómo hablar del precio sin prometer ahorro (H-03) |
| C-14 | Recorridos por la competencia (23/10, mejora M-01): Mercadona deja elegir de antemano «sustituir por similar» o «no servir» | RF-07.3-09 (nuevo) y RF-07.3-04; `FOOD4ALL_estados_pedido.md` | Cambio | El cliente elige su preferencia al pagar; RF-07.3-04 solo pregunta si no eligió. Total: 560 requisitos | b) subir los sustitutos al MVP; c) no adoptarla | a) Requisito nuevo Should · V2, junto a los sustitutos | Sebastián | 23/10/2026 | 0.4 | `docs/competencia/FOOD4ALL_recorridos_competencia.md`, M-01; captura mercadona-07 |
| C-15 | Recorridos por la competencia (23/10, mejora M-02) y logística pendiente: nadie garantiza la hora, y no estaba cubierto el retraso | RF-08.2-05, RF-08.2-06 y RF-08.4-06 (nuevos, Must · MVP); fichas de RF-08.2 y RF-08.4; `FOOD4ALL_estados_pedido.md` | Cambio | Aviso de retraso del reparto con nueva hora u otra franja; si un vendedor llega tarde al hub, el cliente elige esperar o recibir lo demás, y sin respuesta se entrega lo demás. RF-08 pasa a 16 de 29 en el MVP | Aviso en V2; esperar siempre; entregar siempre lo demás | Aviso Must; elige el cliente (por defecto, se entrega lo demás); sin compensación en el MVP | Sebastián | 23/10/2026 | 0.4 | `docs/competencia/FOOD4ALL_recorridos_competencia.md`, M-02. **Pendiente:** compensación por retraso (D-02) |
| C-16 | Recorridos por la competencia (23/10, mejora M-03): Wetaca, Mercadona y Open Food Network trabajan con un cierre | RF-06.6-05 (nuevo, Must · MVP); justificación de RF-06.6-02 | Cambio | La confirmación y su correo dicen hasta cuándo se puede cancelar sin coste. La hora de cierre por franja ya equivalía al «ciclo» | Subir la cuenta atrás (RF-05.9-02) al MVP; solo anotar la evidencia | Requisito nuevo y evidencia en RF-06.6-02 | Sebastián | 23/10/2026 | 0.4 | `docs/competencia/FOOD4ALL_recorridos_competencia.md`, M-03 |
| C-17 | Recorridos por la competencia (23/10, mejora M-04) | Justificación de RF-05.4-02 y RF-05.4-04 | Cambio | Sin requisito nuevo: ya estaba cubierto. Se corrige un dato desfasado («Mercadona exige 50 €» → 60 € más 8,20 € de tarifa, verificado) y se añade la evidencia de que la competencia esconde el mínimo o el envío | Añadir el precio por kg en el carrito | Solo corregir el dato y añadir la evidencia | Sebastián | 23/10/2026 | 0.4 | Captura mercadona-07; `docs/competencia/FOOD4ALL_recorridos_competencia.md`, M-04 |
| C-18 | Recorridos por la competencia (23/10, mejora M-05) | RF-02.6-02 (Should → Must; texto ampliado) | Cambio | El perfil público del vendedor es Must y añade «Cómo producimos». Resuelve que una ficha Must (RF-04.5-01) enlazaba a un perfil Should. Su necesidad pasa de N-VEN-01 a N-CAT-01 (confiar en el origen y la calidad), que es la que refleja el valor para el comprador. Las valoraciones siguen en V2 | Subir las valoraciones al MVP; etiqueta «Poco procesado» (riesgo legal) | Perfil Must con «Cómo producimos» | Sebastián | 23/10/2026 | 0.4 | `docs/competencia/FOOD4ALL_recorridos_competencia.md`, M-05 |
| C-19 | Recorridos por la competencia (23/10, mejora M-06): Market Wagon y Open Food Network ofrecen puntos de recogida | H-02 y D-03 (especificación, bloque 10); RF-08.4-05 sin cambios (Could · V3) | Alcance | Ningún requisito cambia. El punto de recogida queda como plan B de H-02 y como alternativa de D-03, y las entrevistas preguntan por él | Subirlo a V2 ya | **Pendiente de debate del equipo** (es un cambio considerable del modelo de entrega) | Sebastián | 23/10/2026 | 0.4 | `docs/competencia/FOOD4ALL_recorridos_competencia.md`, M-06 |
| C-20 | Recorridos por la competencia (23/10, mejora M-07) | RF-05.7-02 y RF-05.7-03 (Should → Must) | Cambio | Guardar el carrito del visitante y unirlo al de la cuenta al entrar pasan a imprescindibles: sin ellos no se puede probar la compra sin registrarse (prioridad 1 del PO) | Pagar como invitado, sin cuenta (Market Wagon, Open Food Network) | Subir los dos a Must; **pagar como invitado queda pendiente de nuevas entrevistas** | Sebastián | 23/10/2026 | 0.4 | `docs/competencia/FOOD4ALL_recorridos_competencia.md`, M-07 |
| C-12 | Clase 11: falta la categoría de restricciones (RST) | Catálogo de requisitos | Restricción | Se añade la categoría RST | — | Candidatas sacadas de decisiones ya tomadas | Sebastián (propone), equipo (valida) | 23/10/2026 | 0.4 | **Pendiente: validación del equipo** |

## 5. Abierto al cerrar esta versión

| Qué | Por qué sigue abierto | Quién lo cierra |
| --- | --- | --- |
| Criba (prioridad, MVP y exclusiones) | Es una decisión del Product Owner y del equipo, con argumentos propios | Los tres; aprueba Sebastián como PO |
| RST | Las valida el equipo | Los tres |
| Entrevistas del resto del equipo | Sin ellas, las necesidades siguen en Hipótesis o Indicio | Juan Antonio y Miguel |
| Revisión cruzada de cada bloque | Tiene que hacerla alguien distinto del autor | Cada uno, en un comentario de Asana |
| Regla de cancelación (comité de cambio de la Clase 11: el productor quiere limitar cancelaciones y el comprador quiere flexibilidad) | Hoy el cliente puede cancelar antes de la hora de cierre, y «Cancelado» es una propuesta. **Evidencia de mercado (recorridos del 23/10):** Wetaca, Mercadona y Open Food Network usan esta misma regla (cancelar o cambiar hasta un cierre; después se prepara). Falta que el equipo decida, con las entrevistas a vendedores | Equipo; las entrevistas a vendedores aportan evidencia |
| Logística: qué pasa si un paquete llega tarde, si un vendedor falla y cómo se unen los carritos de varios vendedores | Ya está cubierto: el vendedor que no confirma a tiempo (alerta y aviso de posible retraso, RF-07.3-01 y RF-07.5-02), el vendedor que no puede servir (RF-07.6; el pedido global se conserva) y la consolidación en una sola entrega (RF-08.3-01). Con C-15 se cubre también el retraso del reparto (RF-08.4-06) y el del vendedor que llega tarde al hub (RF-08.2-05 y -06). **Sigue abierto:** la compensación por retraso (depende de D-02) | Sebastián, con el visto bueno del equipo |
| Punto de recogida comunitario frente a entrega en casa (C-19) | Cambia el modelo de entrega: puntos, horarios y custodia de los refrigerados | Debate del equipo, con las entrevistas |
| Pagar como invitado, sin cuenta (C-20) | Choca con «Mis pedidos», con el consentimiento de alergias (RNF-02) y con el reembolso de prueba por cuenta | Nuevas entrevistas; después, el equipo |
| Responsables y revisores en Asana | Es una decisión del equipo | Equipo, con la propuesta de `FOOD4ALL_propuesta_asana.md` |

Asana y este documento tienen que apuntar a la misma decisión (Clase 11, lista de revisión, punto 6). Al aprobar la criba, se actualiza el estado en los dos.
