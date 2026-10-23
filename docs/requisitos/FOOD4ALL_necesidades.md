# FOOD4ALL · Catálogo único de necesidades

v0.4 · 22/10/2026 · Sebastián Manuel Mateo Sánchez · Revisión: pendiente (Juan Antonio o Miguel)

Este es el **único catálogo de necesidades** del proyecto. Lo gobierna el bloque [B1] de Asana y su fuente es `benchmark/necesidades.js`; la tabla del apartado 2 se regenera desde ahí con `npm run asana`.

**Por qué hay un catálogo nuevo.** La valoración provisional del Hito 2 (21/10/2026) detectó tres nomenclaturas incompatibles:

- La especificación v0.3 usaba N-01 a N-08, y con esos códigos estaban todas las fichas de B4.
- El documento de personas de B2 usaba N-01 a N-20, con significados distintos para los mismos números.
- B1 proponía la convención N-<MÓDULO>-NN, pero no tenía ninguna necesidad escrita.

Enlazar «N-02» con «N-02» parecía trazabilidad, pero unía cosas distintas. Ahora cada necesidad tiene un ID estable con su módulo y su nombre, y los códigos antiguos solo aparecen en la tabla de equivalencias del apartado 4. Los IDs no se reutilizan nunca.

## 1. Cómo se lee el estado (regla de evidencia)

La valoración señaló que la regla de B1, «confirmada si aparece en 2 o más fuentes», no basta: importan la independencia, la calidad y el contexto de las fuentes. Desde la v0.4, el estado se asigna así:

| Estado | Cuándo | Qué permite |
| --- | --- | --- |
| **Hipótesis** | Solo hay apoyo documental (mercado, competidores, personas documentales, estudios) | Diseñar requisitos marcados como hipótesis. No se presenta como validada |
| **Obligación legal** | La impone una norma (F-03) | El requisito es obligatorio aunque ningún usuario lo pida. Necesita revisión profesional (D-01), no entrevistas |
| **Indicio** | La mencionan 1 o 2 entrevistas, o todas si la muestra es menor de 3 | Mantener la prioridad y buscar más evidencia |
| **Confirmada** | Se cumplen las cuatro condiciones de abajo | Presentarla como necesidad contrastada en este contexto |
| **No confirmada** | Al menos tantas entrevistas la contradicen como la apoyan | Revisar los requisitos que dependen de ella (apartado 5) |

**Condiciones para «Confirmada»** (todas):

1. La mencionan **3 o más entrevistas** del perfil afectado (estudiantes, vendedores u operadores).
2. **La mencionan sin que se les sugiera:** en respuesta a una pregunta abierta, no al proponerles la solución.
3. **Son personas independientes:** no son del equipo ni de la asignatura, hay al menos 2 pisos o negocios distintos y no se entrevistaron en grupo.
4. **Hay cita literal** registrada con el código de la entrevista (E3, V2…) y **no hay** un número igual o mayor de entrevistas que la contradigan.

Con 5 estudiantes y 2–3 vendedores esto da para pasar de hipótesis a indicio o confirmación **en este grupo**, no para generalizar a todos los estudiantes de Málaga, Sevilla y Granada. Las personas de B2 (F-11) y el benchmark (F-04, F-10) ayudan a formular hipótesis, pero **no confirman** ninguna necesidad.

## 2. Catálogo

<!-- catalogo:inicio -->
| ID | Necesidad | Quién | Tipo | Estado | Fuentes | Requisitos (MVP) |
| --- | --- | --- | --- | --- | --- | --- |
| N-PLA-01 | Saber qué comprar y qué comer los próximos días, planificando en vez de improvisar | Estudiante (P1) | Usuario | Indicio | F-01, F-02, F-07 (E3, E4) | 21 (12) |
| N-PLA-02 | Controlar cuánto gasta en comida y ajustarse a un presupuesto | Estudiante (P1) | Usuario | Indicio | F-01, F-07 (E4; E1 comparativo) | 20 (5) |
| N-CAR-01 | Comprar producto local de varios vendedores en un solo pedido y un solo pago, sin ir de tienda en tienda | Estudiante (P1) | Usuario | Indicio | F-04, F-10, F-07 (E4; E3 en contra del producto, no de la necesidad) | 162 (137) |
| N-ENT-01 | Recibir todo en una sola entrega, en una franja conocida | Estudiante (P1) | Usuario | Hipótesis | F-04, F-05 | 36 (30) |
| N-CAD-01 | Gestionar cantidades, conservación y caducidades para no tirar comida | Estudiante (P1) | Usuario | Indicio | F-01, F-03, F-07 (E3, E4) | 8 (3) |
| N-IA-01 | Que el asistente simplifique la decisión sin obligarle a explicar demasiado | Estudiante (P1) | Usuario | No confirmada | F-02, F-07 (en contra: E3, E4) | 10 (10) |
| N-IA-02 | Saber cuándo habla con una IA y distinguir una recomendación de la publicidad | Estudiante (P1) | Obligación legal | Obligación legal | F-03 (Reglamento de IA 2024/1689; DSA 2022/2065) | 11 (9) |
| N-CAT-01 | Confiar en el origen, la calidad y la trazabilidad de lo que compra | Estudiante (P1) | Usuario | Indicio | F-03 (Reglamento 178/2002), F-04, F-07 (E4; E1 y E2 comparativos) | 37 (16) |
| N-CAT-02 | Conocer ingredientes y alérgenos antes de pagar | Estudiante (P1) | Obligación legal | Obligación legal | F-03 (Reglamento 1169/2011, art. 14) | 14 (14) |
| N-CAT-03 | Recibir información veraz: precio final, costes, condiciones y avisos, sin sorpresas | Estudiante (P1) | Obligación legal | Obligación legal | F-03 (RDL 1/2007; LSSI; P2B 2019/1150) | 36 (19) |
| N-CUE-01 | Que sus datos personales y de salud estén protegidos y solo se usen para lo que aceptó | Estudiante, vendedor (P1, P2) | Obligación legal | Obligación legal | F-03 (RGPD; LOPDGDD) | 61 (53) |
| N-INC-01 | Tener una solución rápida, atendida por personas, si algo llega mal | Estudiante (P1) | Usuario | Hipótesis | F-04 (fiabilidad baja: no cita fuentes) | 34 (17) |
| N-VEN-01 | Llegar a clientes nuevos y ganar visibilidad | Vendedor (P2) | Usuario | Hipótesis | F-01 (comercio tradicional 10,6 %) | 14 (9) |
| N-VEN-02 | Vender online sin montar una web propia ni gestionar envíos | Vendedor (P2) | Usuario | Hipótesis | F-01, F-04 | 16 (9) |
| N-VEN-03 | Reducir la merma del género que no vende a tiempo | Vendedor (P2) | Usuario | Hipótesis | F-03 (Ley 1/2025) | 1 (0) |
| N-VEN-04 | Saber qué preparar y para cuándo: pedido claro y franja de recogida | Vendedor (P2) | Usuario | Hipótesis | F-06, F-12 | 13 (12) |
| N-VEN-05 | Cobrar con transparencia: comisión y liquidación claras | Vendedor (P2) | Usuario | Hipótesis | F-12 (críticas a la tarifa de Market Wagon) | 11 (1) |
| N-VEN-06 | Conocer con claridad los requisitos y los pasos del alta | Vendedor (P2) | Usuario | Hipótesis | F-03 | 24 (22) |
| N-VEN-07 | Admitir solo vendedores con registro sanitario o con una exención justificada | Administrador (P3) | Obligación legal | Obligación legal | F-03 (RD 191/2011; RD 1086/2020) | 9 (9) |
| N-HUB-01 | Tener rutas y franjas de recogida fiables, con aviso de «pedido listo» | Operador (P3) | Usuario | Hipótesis | F-06, F-12 | 6 (3) |
| N-HUB-02 | Mantener la cadena de frío y separar frío y seco | Operador (P3) | Obligación legal | Obligación legal | F-03 (Reglamento 852/2004), F-12 | 4 (2) |
| N-HUB-03 | Verificar cada pedido y resolver las faltas antes de entregar | Operador (P3) | Usuario | Hipótesis | F-06, F-12 | 16 (13) |
<!-- catalogo:fin -->

Personas: **P1** Lucía, estudiante; **P2** Antonio, vendedor; **P3** Rafa, operador del hub y repartidor (B2, documento de personas v2).

## 3. Fuentes

| ID | Fuente | Tipo y fiabilidad |
| --- | --- | --- |
| F-01 | Mercado (Hito 1): MAPA 2025, EUROSTUDENT 8, cifras de US, UGR y UMA | Referencia externa |
| F-02 | Alcance (Hito 1) | Decisión del equipo |
| F-03 | Marco legal (Hito 1) | Norma (análisis orientativo, sin revisión profesional) |
| F-04 | Comparativo de 10 empresas (adjunto de Juan Antonio, 09/10/2026) | Benchmark exploratorio; fiabilidad baja porque no cita fuentes |
| F-05 | Investigación de entrega a clientes (Miguel) | En curso |
| F-06 | Investigación de recogida a vendedores (Juan Antonio) | En curso |
| F-07 | Entrevistas a estudiantes (mínimo 5), códigos E1, E2… | Pendiente: se suben el 23/10/2026 |
| F-08 | Entrevistas a vendedores (mínimo 2–3), códigos V1, V2… | Pendiente: se suben el 23/10/2026 |
| F-09 | Borrador de 211 requisitos (09/10/2026) | Histórico: lista de ideas, no evidencia |
| F-10 | Benchmark de 6 competidores (19/10/2026) | Referencia externa (páginas públicas) |
| F-11 | Personas y mapas de empatía (B2, 20/10/2026) | Síntesis documental del equipo; no es evidencia independiente |
| F-12 | Estudios de food hubs citados en B2: Santa González et al. 2025 (Wisconsin), Universidad de Manchester 2025, Red Tomato, Local Line y prensa sobre Market Wagon | Referencia externa |

## 4. Equivalencias con los códigos anteriores

**Documento de personas de B2 (v1, 20/10/2026) → catálogo único**

| B2 v1 | Necesidad | Ahora |
| --- | --- | --- |
| N-01 | Controlar cuánto gasta en comida | N-PLA-02 |
| N-02 | Ahorrar tiempo en comprar, comparar y desplazarse | N-CAR-01 |
| N-03 | Saber qué necesita comprar | N-PLA-01 |
| N-04 | Saber qué comer durante varios días | N-PLA-01 |
| N-05 | Planificar en vez de improvisar | N-PLA-01 |
| N-06 | Gestionar cantidades, conservación y caducidades | N-CAD-01 |
| N-07 | Evitar el desperdicio de comida | N-CAD-01 |
| N-08 | Acceder a producto local sin ir de tienda en tienda | N-CAR-01 |
| N-09 | Confiar en el origen, la calidad y la trazabilidad | N-CAT-01 |
| N-10 | Recibir todo en una sola entrega consolidada | N-ENT-01 |
| N-11 | Que el asistente simplifique y no exija explicar demasiado | N-IA-01 |
| N-12 | Llegar a clientes nuevos y ganar visibilidad | N-VEN-01 |
| N-13 | Vender sin montar una web propia ni gestionar envíos | N-VEN-02 |
| N-14 | Reducir la merma del género | N-VEN-03 |
| N-15 | Saber qué preparar y cuándo | N-VEN-04 |
| N-16 | Cobrar con transparencia | N-VEN-05 |
| N-17 | Conocer con claridad los requisitos de alta | N-VEN-06 |
| N-18 | Rutas y franjas de recogida fiables | N-HUB-01 |
| N-19 | Mantener la cadena de frío y separar productos | N-HUB-02 |
| N-20 | Verificar el pedido y resolver faltas | N-HUB-03 |

**Especificación v0.3 (fichas de B4 hasta el 22/10/2026) → catálogo único.** Cada código antiguo agrupaba cosas distintas, así que se repartió requisito a requisito. El detalle de los 556 requisitos está en `benchmark/cambios_v04.json`.

| v0.3 | Decía | Se repartió en (nº de requisitos) |
| --- | --- | --- |
| N-01 | No sabe planificar ni ajustarse al presupuesto | N-PLA-02 (19), N-PLA-01 (18), N-CAR-01 (14), N-IA-01 (10) |
| N-02 | Varios vendedores = varios pedidos, pagos y envíos | N-CAR-01 (148), N-ENT-01 (32), N-HUB-03 (10), N-HUB-01 (4) |
| N-03 | El comercio local necesita un canal online sin logística | N-VEN-06 (21), N-VEN-02 (16), N-VEN-01 (15), N-VEN-04 (13), N-VEN-05 (11), N-CAT-03 (2), N-HUB-01 (1) |
| N-04 | Conocer alérgenos antes de pagar | N-CAT-02 (14), N-CAT-01 (12), N-CAT-03 (1), N-VEN-06 (1) |
| N-05 | Solo vendedores con registro sanitario | N-CAT-01 (9), N-VEN-07 (9), N-CUE-01 (3), N-HUB-02 (2), N-VEN-06 (2), N-HUB-01 (1), N-CAT-03 (1) |
| N-06 | Solución rápida y humana ante producto en mal estado | N-INC-01 (34), N-CAT-01 (15), N-HUB-03 (3), N-ENT-01 (1) |
| N-07 | Saber que es IA y distinguir la publicidad (se usaba también para seguridad y privacidad) | N-CUE-01 (58), N-CAT-03 (31), N-IA-02 (11) |
| N-08 | Planificar cuándo consumir perecederos | N-CAD-01 (8), N-PLA-01 (3), N-HUB-02 (2), N-VEN-03 (1) |

**B1:** el ejemplo de la tarea «Resumen de hallazgos» (N-IA-01: ajustar la compra semanal a un presupuesto) es ahora **N-PLA-02**. N-IA-01 pasa a ser «que el asistente simplifique la decisión».

**Cambio de estado respecto a la v0.3.** N-02 y N-03 figuraban como «Decidido» porque se apoyaban en el benchmark y en datos de mercado. Una decisión de producto, como ofrecer un carrito multi-vendedor, sí está decidida. Pero que los usuarios **necesiten** ese carrito es una hipótesis hasta contrastarlo, así que N-CAR-01 y N-VEN-02 pasan a «Hipótesis».

## 5. Plan de contraste con las entrevistas (23/10/2026)

Para cada necesidad de usuario: con qué pregunta del guion de B1 se contrasta y **qué requisitos cambian si resulta falsa**. Es lo que la valoración propone preguntar en la defensa.

| Necesidad | Pregunta abierta (sin sugerir la solución) | Si no se confirma… |
| --- | --- | --- |
| N-PLA-01 Saber qué comprar y comer, planificar | «¿Cómo decides qué comprar? Cuéntame tu última compra» | RF-12 (asistente) baja de Should a Could, US-08 sale de V2 y el lema «Planifica tu comida» se revisa |
| N-PLA-02 Controlar el gasto | «¿Cuánto gastas a la semana en comida? ¿Cómo lo sabes?» | RF-05.5 (presupuesto en el carrito) y RF-12.6-03 pasan a Could; el asistente deja de pedir el presupuesto primero |
| N-CAR-01 Varios vendedores en una compra | «¿Dónde compras y cada cuánto? ¿Qué te cuesta de comprar en varios sitios?» | Afecta al núcleo (RF-05, RF-06, RF-07; US-04, US-05). No se borra: se reabre la decisión de producto con el profesor y se refuerza la validación de valor (apartado 11.6 del contexto) |
| N-ENT-01 Una sola entrega en una franja | «¿Cuándo podrías recibir un pedido? ¿Te importaría esperar 1 o 2 días?» | Falla H-02. Se revisan RF-06.2 (franjas) y RF-08, y se estudian ventanas más cortas o puntos de recogida (RF-08.4-05) |
| N-CAD-01 Caducidades y desperdicio | «¿Cuánta comida tiras? ¿Por qué?» | El aviso «Consume primero» (RF-12.5-03) y la vida útil obligatoria (RF-03.2-03) bajan de prioridad; el tipo de fecha sigue siendo obligatorio por ley |
| N-IA-01 Asistente sencillo | «Si una app te propusiera la compra, ¿qué le contarías y qué no?» | RF-12.1-03 (lenguaje natural) se descarta y el asistente se queda en opciones guiadas (RF-12.6) |
| N-CAT-01 Confiar en origen y calidad | «¿Qué necesitas saber de un producto o de quién lo vende para fiarte?» | El perfil del vendedor (RF-02.6) y el origen con distancia (RF-04.5-03) pasan a Could; la trazabilidad (RNF-09) sigue por ley |
| N-INC-01 Solución rápida y humana | «La última vez que algo te llegó mal, ¿qué pasó? ¿Qué esperabas?» | Se revisa el plazo de 24 h con una persona (RF-10.2-01, H-04) |
| N-VEN-01 Clientes nuevos y visibilidad | «¿Cómo te llegan clientes nuevos? ¿Has probado alguna plataforma?» | El perfil público (RF-02.6) y la comunidad (RF-15.6) bajan de prioridad |
| N-VEN-02 Vender online sin web ni envíos | «¿Vendes por internet? ¿Qué te frena?» | Afecta al lado vendedor (RF-02, RF-03, RF-16). Se reabre la propuesta de valor al vendedor |
| N-VEN-03 Reducir la merma | «¿Cuánto género se te estropea? ¿Qué haces con él?» | Hoy solo la cubre RF-04.9-02 «Aprovechamiento» (V2); si no se confirma, se descarta |
| N-VEN-04 Qué preparar y cuándo | «¿Cuánto tardas en preparar un pedido de un cliente? ¿Con cuánta antelación necesitas saberlo?» | Se revisa el plazo de confirmación de 12 h (RF-07.3-01) y la hoja de preparación (RF-07.2-03) |
| N-VEN-05 Cobrar con transparencia | «¿Cómo cobras de las plataformas o distribuidores con los que trabajas? ¿Qué te molesta?» | Se revisa RF-17 (liquidación, V2) y la decisión de comisión D-02 |
| N-VEN-06 Requisitos de alta claros | «¿Tienes registro sanitario? ¿Qué trámite te echaría para atrás?» | Se simplifica el alta (RF-02.2) y la guía de requisitos (RF-02.1) |
| N-HUB-01, N-HUB-02, N-HUB-03 (operador) | No hay entrevistas a operadores previstas; se apoyan en F-12 (estudio de Wisconsin). Si es posible, una entrevista opcional a un repartidor o a un food hub | Siguen como hipótesis documentales. La verificación en el hub (RF-08.2) se mantiene por N-CAT-01 y por obligación legal (N-HUB-02) |

Las necesidades de tipo **Obligación legal** (N-IA-02, N-CAT-02, N-CAT-03, N-CUE-01, N-VEN-07 y N-HUB-02) no dependen de las entrevistas. Si un entrevistado no las menciona, no cambian.

### 5.1 Resultado de las entrevistas a estudiantes (F-07, 23/10/2026)

Fuente: `FOOD4ALL_entrevistas_estudiantes.md`, con los apuntes de las 4 entrevistas de Sebastián (E1–E4). Faltan las del resto del equipo, así que **estos estados son provisionales** y se recalculan cuando estén. Son apuntes, no transcripciones.

- **Perfil objetivo:** solo E3 y E4, que comparten piso.
- **Perfiles comparativos:** E1 y E2 viven con su familia. Se anotan, pero no cuentan como apoyo ni como contradicción del perfil objetivo.

**Ninguna necesidad pasa a «Confirmada».** No se cumplen tres de las cuatro condiciones:
- hay 2 entrevistas del perfil objetivo, y hacen falta 3;
- no hay citas literales;
- no consta si las respuestas fueron a preguntas abiertas.

| Necesidad | Apoyan (perfil objetivo) | En contra | Comparativos | Estado |
| --- | --- | --- | --- | --- |
| N-PLA-01 Planificar en vez de improvisar | E3 y E4: improvisan con lo que hay en la nevera; al principio les costaba decidir qué comer | — | E1 sabe qué preparar; a E2 le planifican sus padres | **Indicio** |
| N-PLA-02 Controlar el gasto | E4: 40–60 €/semana y a veces se queda ajustado | — (E3 da su cifra, 30–50 €, pero no dice que sea un problema) | E1 va justo; E2 no tiene problema | **Indicio** |
| N-CAR-01 Varios vendedores en una compra | E4: le interesa comprar directamente al productor si ve calidad, precio y cantidad. E3: le molesta salir a comprar lo que le falta | E3 **no usaría FOOD4ALL**. Rechaza el producto, no la necesidad, y es un riesgo para el núcleo | E2: le atraen los productos locales | **Indicio** |
| N-ENT-01 Una entrega en una franja | — | — | E1: puntualidad y frescura | Hipótesis |
| N-CAD-01 No tirar comida | E3 (se le estropean las verduras) y E4 (a veces desperdicia) | — | E1 y E2 dicen que no desperdician | **Indicio** |
| N-IA-01 Asistente que simplifica | — | E3 y E4: poca o ninguna confianza en la IA | E1 la revisaría; E2 la pondría a prueba | **No confirmada** |
| N-CAT-01 Confiar en origen y calidad | E4: la calidad es condición para comprar | — | E2: le preocupan la fiabilidad de una empresa nueva y la falta de opiniones; E1: frescura | **Indicio** |
| N-INC-01 Solución si algo llega mal | — | — | — | Hipótesis |

**Qué cambia en los requisitos.** Hay una sola entrevista de cada lado y dos que no la piden. Con tan poca evidencia, de momento no se cambia ningún requisito. Se proponen para la criba:
- **RF-12 (asistente):** sigue como Should y «MVP simulado», fuera del núcleo. La cesta se puede revisar producto a producto (RF-12.3, quitar, cambiar u «Otra opción»), y la compra no necesita la IA.
  - Propuesta: que la portada no la presente como la única forma de comprar.
  - Si F-07 completa lo mantiene, se aplica lo previsto arriba: RF-12.1-03 se descarta y el asistente se queda en opciones guiadas.
- **N-CAR-01:** el rechazo de E3 entra en la defensa como riesgo de valor (apartado 11.6 del contexto), no como dato que se esconde.
- **Necesidades candidatas,** todavía fuera del catálogo hasta que el equipo las apruebe:
  - descuentos u ofertas para animarse a probar (E3, E4; E1 comparativo);
  - interfaz sencilla y rápida (E3, E4);
  - métodos de pago sencillos (E1);
  - descubrir productos distintos de los del supermercado (E2);
  - tamaño y frecuencia del pedido distintos: compras pequeñas (E3) frente a grandes cada 1–2 semanas (E4). Afecta a la compra mínima.
- **Conservación con gases:** queda como línea técnica pendiente (apartado 10 de las entrevistas). Nadie la pidió.

Faltan las entrevistas del resto del equipo, de estudiantes (F-07) y de vendedores (F-08). Cuando lleguen, la tabla se rehace con todas. Conviene que incluyan citas literales y estudiantes que vivan fuera de casa.

## 6. Cómo registrar una entrevista

Cada entrevista va como subtarea de «Historias de usuario» (instrucciones de Sebastián del 22/10/2026), con esta plantilla. No se guardan nombres, teléfonos ni nada que identifique a la persona (RGPD).

```text
E3 · Estudiante · 2026-10-23 · Granada
Perfil: 2.º curso, 20 años aprox., comparte piso con 2 personas, cocina 3 días por semana
Cómo se hizo: presencial / videollamada · duración · entrevistador

Pregunta 1: ¿Cómo decides qué comprar? Cuéntame tu última compra.
Respuesta 1 (literal): «…»
…

Necesidades que menciona sin que se le sugiera: N-PLA-02 («no sé cuánto me gasto hasta fin de mes»), N-CAD-01
Necesidades que contradice: N-ENT-01 («yo compro el día que lo necesito»)
Ideas nuevas (posible necesidad nueva): …
Conclusiones del entrevistador (separadas de lo que dijo): …
```

Después, en «Resumen de hallazgos y lista de necesidades» de B1 se rellena la tabla «Qué dijeron | Qué significa | N-ID | Fuente», se cuentan las menciones de cada necesidad y se cambia su estado con la regla del apartado 1. Hay que cambiarlo en `benchmark/necesidades.js` y regenerar con `npm run asana`. Una necesidad nueva recibe el siguiente número libre de su módulo (por ejemplo, N-CAR-02).
