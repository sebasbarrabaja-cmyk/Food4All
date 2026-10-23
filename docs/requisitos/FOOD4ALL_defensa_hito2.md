# FOOD4ALL · Preparación de la defensa del Hito 2 (Sprint Review)

22/10/2026 · Para los tres miembros del equipo

La valoración provisional no pregunta por el volumen de requisitos, sino por tres recorridos que distinguen **definición, revisión y validación**. Aquí están preparados con IDs concretos. Hay que saber navegarlos en Asana o en el repositorio, no recitarlos. Si algo no está validado, la respuesta correcta es decirlo y enseñar el plan de contraste.

## 1. Recorrido de evidencia

**«Elegid N-10 o N-15. Mostrad la observación concreta, su fuente, la alternativa que considerasteis, el estado y qué RF/US/CA cambian si la necesidad resulta falsa.»**

Primero, aclarar los IDs. N-10 y N-15 eran del documento de personas (v1). En el catálogo único son **N-ENT-01** y **N-VEN-04** (`FOOD4ALL_necesidades.md`, apartado 4). Se unificó porque el mismo número significaba cosas distintas en B2 y en B4.

| | N-ENT-01 · Recibir todo en una sola entrega, en una franja conocida (antes N-10) | N-VEN-04 · Saber qué preparar y para cuándo (antes N-15) |
| --- | --- | --- |
| Observación | Documental: Market Wagon consolida varios vendedores en un pedido (S07, verificado el 19/10). Ningún estudiante lo ha dicho todavía | Documental: en el food hub de Wisconsin, las esperas porque el pedido no está listo son el principal problema de la recogida (F-12, Santa González et al. 2025) |
| Fuente | F-04, F-05 y F-10. Persona: P1 Lucía (F-11, documental) | F-06 y F-12. Persona: P2 Antonio (F-11, documental) |
| Alternativa considerada | Los datos de mercado indican compras pequeñas y frecuentes (233 actos al año, ticket de 19,4 €; MAPA 2025). El estudiante podría preferir comprar el día que lo necesita a esperar una franja. Esa tensión ya estaba en el Hito 1 | El vendedor podría preferir llevar su parte al hub, como en Market Wagon, en lugar de recibir una recogida con plazo |
| Estado | **Hipótesis** (0 entrevistas). Se contrasta con la pregunta abierta «¿Cuándo podrías recibir un pedido? ¿Te importaría esperar 1 o 2 días?» | **Hipótesis**. Pregunta: «¿Cuánto tardas en preparar un pedido? ¿Con cuánta antelación necesitas saberlo?» |
| Si resulta falsa | Falla H-02. Se revisan RF-06.2 (franjas y hora de cierre) y RF-08, y se estudian ventanas más cortas o puntos de recogida (RF-08.4-05). Cambian US-06 y US-12 y criterios como RF-06.2-02 | Se revisan el plazo de confirmación de 12 h (RF-07.3-01, D-04), la hoja de preparación (RF-07.2-03) y el panel (RF-16.1-02). Cambian US-11 y US-15 |

Si preguntan «¿por qué no está confirmada?»: la regla exige 3 o más entrevistas independientes con pregunta abierta y cita literal. Las entrevistas se registran el 23/10. Con 5 estudiantes, como mucho podremos hablar de este grupo, no de todos los estudiantes de Andalucía.

## 2. Recorrido del núcleo multimercado

**«Un cliente compra a dos vendedores; uno informa una falta después de pagar. ¿Qué identificadores se crean, qué ve cada uno, qué total queda y cuándo no puede ya cancelarse?»**

Abrir `FOOD4ALL_estados_pedido.md`, apartado 7 (el ejemplo completo), y navegar por RF-06.4 → RF-07.1 → RF-07.3 → RF-09.2 → RNF-07.1.

1. **Pago (RF-06.4, US-05).** Lucía paga 9 € (4 € de tomates de Antonio, 2 € de pan y 3 € de envío) con la tarjeta de prueba. Se crean un **pago de prueba** de 9 € y el **pedido global F4A-2026-00001** en «Recibido». Un doble clic no crea otro pedido (RF-06.4-06).
2. **División (RF-07.1).** Se crean los **subpedidos F4A-2026-00001-A** (Antonio) y **-B** (panadería) en «Nuevo». Antonio ve solo sus 4 tomates, la franja de recogida y su plazo, sin el nombre ni la dirección de Lucía (RF-07.2-02).
3. **Falta (RF-07.3, US-11).** Antonio indica que solo puede servir 2. La línea pasa a «Falta parcial» y el subpedido a «Con faltas». Se registra un **reembolso de prueba** de 2 € (motivo: falta, autor: Antonio, con fecha), sin transferencia. El total queda en 7 € y el pedido global se conserva (RF-07.3-05, RNF-07.1-02). Si Antonio repite la acción, ve «La falta ya está registrada» (RF-07.3-07).
4. **Qué ve cada uno.** Lucía ve «Falta 2 unidades · reembolso de prueba registrado» y el total de 7 € (RF-09.2-02), y le llega un correo en menos de 5 minutos (RF-09.3-02). La panadería no ve nada de esto. El operador verá la parada de Antonio con su subpedido cuando esté «Listo» (RF-07.4-03, RF-08.1).
5. **Cuándo ya no puede cancelar.** A partir de la **hora de cierre** de su franja: el martes a las 20:00 para una entrega el jueves (RF-06.6-02 y -03). Después ve «El pedido ya se está preparando».
6. **Si Antonio no tuviera nada.** «No puedo servir este pedido» excluye su grupo y registra el reembolso de prueba de su importe. El resto sigue sin recargo, aunque quede bajo la compra mínima (RF-07.5-03, RF-07.6-01). Si no quedara ningún grupo, el pedido pasaría a «Cancelado» con el reembolso de prueba del total (RF-07.6-02).
7. **Si la falta se descubre en el hub o tras la entrega.** Tras la recogida, Antonio ya no puede declarar faltas (RF-07.3-08). La diferencia la registra el hub al verificar (RF-08.2). Después de la entrega, Lucía abre una incidencia (RF-10.1). Una línea nunca se reembolsa dos veces.

## 3. Recorrido de calidad

**«Justificad un umbral: ¿es ley, fuente, decisión o hipótesis? ¿Cómo se comprobará y qué resultado haría que lo revisaseis?»**

| Umbral | Origen | Cómo se comprobará (Sprint 5) | Qué haría revisarlo |
| --- | --- | --- | --- |
| RNF-03.1: LCP ≤ 2,5 s en móvil 4G | Referencia técnica (Core Web Vitals) adoptada por el equipo; que se cumpla en 4G es hipótesis | Lighthouse en modo móvil con 4G simulada y CPU ×4, mediana de 5 ejecuciones en portada, catálogo y carrito | Si la mediana supera 2,5 s con imágenes ya optimizadas, se revisa el umbral o el diseño, y se documenta |
| RNF-04.1: 4 de 5 estudiantes completan la primera compra en ≤ 5 min | **Hipótesis pedagógica**: no sale de una norma ni de datos | Prueba moderada con 5 estudiantes ajenos al equipo, con tareas, tiempo, éxito sin ayuda y SUS | Si menos de 4 lo consiguen, se corrigen los problemas y se repite. Con 5 personas se detectan problemas; no se estima un porcentaje de la población |
| RNF-05.1: contraste 4,5:1 y uso con teclado | Referencia técnica (WCAG 2.2 AA) y decisión del equipo; la Directiva 2019/882 está por confirmar | axe en cada página, recorrido completo con teclado, zoom al 200 % y lector de pantalla | Un fallo de nivel A o AA es bloqueante: no se revisa el umbral, se arregla |
| RNF-03.2: cesta de la IA ≤ 10 s en el 95 % | Hipótesis del equipo | 20 peticiones como comprobación inicial; para un p95 hacen falta al menos 100 | Si con un motor real se pasa de 10 s, se mide qué espera aceptan los usuarios |

## 4. Preguntas complementarias

**«¿Por qué los RF del mapa de personas no tienen el mismo número que B4?»**
Porque el documento de personas (v1) numeró sus requisitos por su cuenta: su RF-01 era el asistente, que en B4 es RF-12. La v2 pone al lado el ID vigente de B4 y el de la v1, y añade el mapa necesidad → proceso → ficha → historia → criterio (`FOOD4ALL_personas_empatia_v2.md`, apartados 6.2 y 10). La fuente de verdad de los requisitos es B4.

**«¿Qué decisión jurídica sigue pendiente y qué requisito operativo cambia según se elija?»**
D-01, el rol jurídico: intermediario, operador alimentario o mixto (provisional: mixto). Si FOOD4ALL es operador alimentario, porque recoge, almacena y empaqueta en el hub, necesita registro sanitario propio y autocontrol APPCC. Entonces el registro de temperatura en el hub (RF-08.2-04), el de frío en el reparto (RNF-09.1-04) y la retirada de lotes (RF-08.5-01) pasan de V2 a imprescindibles. Si fuera intermediario puro, la responsabilidad del producto recaería en el vendedor y el hub tendría que limitarse a consolidar paquetes cerrados. En el Excel, la columna «Depende de» marca los requisitos afectados. El análisis no es asesoramiento jurídico.

**«¿Qué significa que una tarea esté completada y qué no demuestra?»**
Que alguien marcó la casilla: es un estado administrativo. No demuestra que otra persona haya revisado la fuente, la regla o el criterio. Por eso el «Hecho cuando» de cada ficha exige un comentario del revisor con el elemento revisado, las discrepancias, la decisión, el cambio y la fecha. Las casillas de B2 se marcaron sin ese comentario.

**«¿Qué miembro revisó el requisito y qué cambió tras la revisión?»**
Responder con lo que haya en Asana el día de la defensa. A 22/10 no hay revisiones registradas: la v0.4 está pendiente de revisión por Juan Antonio y Miguel. Si se hacen el 23/10, enseñar el comentario. Si no, decirlo.

**Si preguntan por el volumen (564 requisitos)**
Son requisitos atómicos con su criterio, generados a partir del borrador y del benchmark. 442 son **propuestas pendientes de criba**, no decisiones. El volumen no es calidad. Lo que defendemos es el núcleo (RF-05, RF-06, RF-07 y sus estados), la regla de evidencia y la trazabilidad.

## 5. Antes de la Sprint Review

- [ ] Registrar las entrevistas y actualizar el estado de las necesidades (B1).
- [ ] Que cada uno revise un bloque que no sea suyo y lo deje en un comentario.
- [ ] Aprobar o ajustar la criba (`FOOD4ALL_correcciones_hito2.md`, apartado 4).
- [ ] Adjuntar el documento de requisitos al Hito 2 y cambiar «Estado entrega» (B6).
