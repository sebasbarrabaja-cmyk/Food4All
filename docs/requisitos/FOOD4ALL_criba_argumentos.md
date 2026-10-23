# FOOD4ALL · Argumentos de la criba (Hito 2)

23/10/2026 · Para responder antes de las 21:00 · Aprueba: Sebastián (Product Owner), con el visto bueno de Juan Antonio y Miguel

> Comentario del profesor en «Criba de requisitos» (23/10, 09:23): «Esto lo ha hecho la IA. Necesito los prompts en la landing documental y que me expliquéis porque habéis cribado esos en concreto. Argumentos.»

**Cómo se usa este documento.** Cada bloque trae la decisión propuesta, los datos y lo que piden la valoración y el temario. Las preguntas las prepara el asistente; **las respuestas las escribe cada responsable, con sus palabras**, porque son las que va a defender. Nadie rellena el bloque de otro. Si una respuesta cambia la decisión, se anota en el registro de cambios de `FOOD4ALL_linea_base_h2.md`.

Qué es la criba (Clase 8): *MoSCoW es una decisión provisional que debe poder explicarse.* Justificación obligatoria: **actor afectado · valor · evidencia disponible · riesgo o dependencia · esfuerzo aproximado · elemento excluido.** Priorizar no demuestra que algo sea importante: obliga a justificar por qué entra ahora y qué no entra.

## Datos de partida

Propuesta completa en `FOOD4ALL_correcciones_hito2.md`, apartado 4. Cifras de `benchmark/stats.json`.

| Proceso | Requisitos | En el MVP | Aplazados (V2/V3) |
| --- | --- | --- | --- |
| RF-05 Carrito · RF-06 Checkout · RF-07 Subpedidos | 92 | 78 | 14 |
| RF-08 Hub y entrega | 26 | 13 | 13 |
| RF-12 Asistente de IA | 30 | 24 (simulado, ninguno Must) | 6 |
| RF-11 Valoraciones · RF-14 Suscripción · RF-17 Liquidación · RF-18 Comunicación · RF-19 Soporte | 40 | 0 | 40 |
| RF-13 Administración | 22 | 10 | 12 (2 excluidos) |
| RNF-04 Usabilidad · RNF-05 Accesibilidad | 19 | 19 | 0 |
| RNF-11 Sostenibilidad | 3 | 0 | 3 |
| **Total** | **560** | **400** (38 simulados) | **156** + 4 excluidos |

Lo que dicen las entrevistas E1–E4 (`FOOD4ALL_necesidades.md`, apartado 5.1). Son solo las de Sebastián: faltan las del resto del equipo.
- **Precio y producto:** E4 compraría directamente al productor si percibe «mayor calidad, un precio favorable y una cantidad adecuada». A E2 le atraen los productos «locales, menos procesados y más baratos».
- **IA:** E3 y E4, «poca o ninguna» confianza; E2 la pondría a prueba; E1 la revisaría. N-IA-01, «No confirmada».
- **Rechazo:** E3 dice que no usaría FOOD4ALL.
- **Candidatas fuera del catálogo:** descuentos u ofertas (E1, E3, E4); interfaz sencilla y rápida (E3, E4); E2 echa de menos opiniones en una empresa nueva.

**Postura del Product Owner** (Sebastián, 23/10/2026; registro de cambios C-13). Lo que el marketplace tiene que tener sí o sí, en orden: **1) el carrito simplificado** (varios vendedores, un pedido, un pago) y **2) los productos** (precio claro, local y poco procesado). Van ligados: sin carrito sencillo no se compra, y sin buen producto el carrito no sirve. **3) El asistente de IA** es una parte importante del proyecto, pero va detrás de los dos primeros. Pendiente del visto bueno del equipo.

---

## A · La regla de prioridad y entrega · Sebastián

**Decisión propuesta:** Must solo en el MVP; el MVP solo lleva Must o Should; V2 lleva Should o Could; V3 solo Could. Con ella se ajustaron 47 requisitos, y otros 11 se alinearon con su historia.

**Qué pidió el profesor:** «etiquetar cada requisito de manera inequívoca como MVP simulado, V2, V3, excluido o dependencia externa, y no llamar MVP a una función solo porque viva en una ficha cuyo encabezado lo dice» (valoración, apartado 1).

**Preguntas:**
1. ¿Qué problema había antes de la regla, y por qué un «Could · MVP» era un problema?
2. ¿Qué tiene que cumplir un requisito para ser Must? Piensa en la definición de la Clase 8: «sin este resultado no se responde al problema principal».
3. Si una entrevista contradice un Must, ¿qué hacéis con él?

**Decisión de Sebastián (redactada con ayuda del asistente):**

1. **Problema que corrige.** Antes, la prioridad y la entrega se decidían por separado y se contradecían en 58 requisitos. Un «Must · V2» decía a la vez «imprescindible» y «puede esperar» (35 casos, por ejemplo RF-02.6-03, el IBAN del vendedor). Un «Could · MVP» metía trabajo opcional en lo primero que se construye y le quitaba tiempo al núcleo (por ejemplo RF-04.8-03, tarjetas grises de carga). Con la regla, cada etiqueta significa lo mismo en todas las fichas, que es lo que pidió la valoración. Además, **RF-15.2-04** (la cinta animada de la portada) baja a Could · V2: es diseño visual y no responde al problema. Se aplica al aprobar la criba.
2. **Cuándo es Must.** Un requisito es Must si, al quitarlo, la demo deja de responder al problema o se incumple algo obligatorio. Es decir, si cumple al menos una de estas condiciones: (a) es necesario para el recorrido central, que son varios vendedores, un pedido, un pago de prueba y una entrega; (b) es necesario para que se vea el valor del producto, con precio final claro y origen; (c) lo exige la ley o la seguridad, como los alérgenos, el registro sanitario o los datos personales. Lo demás es Should o menos. Es la definición de la Clase 8 aplicada a nuestro problema.
3. **Si una entrevista lo contradice.** Una sola contradicción no cambia el requisito: se registra como riesgo y se busca más evidencia (así se trató el «no la usaría» de E3). Si 3 o más entrevistas independientes lo contradicen, que es la misma regla que usamos para confirmar, se reabre con un registro de cambio: origen, impacto, alternativa, decisión y versión. Decide el Product Owner con el equipo (Clase 11). Ejemplo: C-13, que cambió el lugar de la IA.

## B · El núcleo de compra dentro del MVP (RF-05, RF-06 y RF-07) · Sebastián

**Decisión propuesta:** carrito con varios vendedores, un solo pago de prueba y división en subpedidos, todo Must y en el MVP (78 de 92 requisitos).

**Qué pidió el profesor:** el recorrido de defensa «del núcleo multimercado»: «un cliente compra a dos vendedores; uno informa una falta después de pagar la simulación. ¿Qué identificadores se crean, qué ve cliente/vendedor/operador, qué total queda y cuándo no puede ya cancelarse?» (valoración, apartado 5).

**Preguntas:**
1. ¿Qué problema del estudiante resuelve el núcleo, y qué evidencia hay hoy? (N-CAR-01 es Indicio: E4 a favor y E3 en contra.)
2. E3 dice que no usaría FOOD4ALL. ¿Por qué el núcleo sigue siendo Must? ¿Qué tendría que pasar para revisarlo?
3. ¿Qué alternativa había (por ejemplo, un pedido y un pago por vendedor) y por qué no se eligió?
4. Con la postura del PO (C-13: carrito simplificado y producto primero), ¿qué parte del núcleo hace visible ese valor?

**Respuesta (Sebastián):** _pendiente_

## C · Lo simulado: pago, reembolso e IA · Miguel

**Decisión propuesta:** el pago y el reembolso son de prueba (nunca dinero real). El asistente de IA (RF-12) queda como «Should · MVP simulado»: entra en la demo, ninguno de sus requisitos es Must, y la compra funciona sin él.

**Qué pidieron el profesor y el temario:**
- Que la IA esté en Should y en la versión 2 es «preferible a prometer que la IA es el núcleo demostrable sin haber validado todavía sus datos de entrada o su utilidad» (valoración, apartado 1).
- «La IA solo se considera cuando aporta valor demostrable y se pueden explicar sus datos, criterios, riesgos, límites y alternativa sin IA» (Clase 2).
- «"El sistema tendrá IA" no es una necesidad ni un requisito verificable» (Clase 6).

**Preguntas:**
1. Con E1–E4 (N-IA-01 «No confirmada»), ¿por qué la IA debería seguir en la demo, aunque sea simulada, o por qué debería salir del MVP?
2. ¿Cuál es la alternativa sin IA para que el estudiante haga su compra semanal?
3. Si lo atractivo es el precio y el producto natural (postura del PO, C-13: carrito y producto primero, IA en tercer lugar), ¿qué requisitos de RF-12 bajarías de prioridad y cuáles conservarías?
4. ¿Por qué el pago y el reembolso son simulados, y qué no podemos afirmar en la demo por eso?

**Respuesta (Miguel):** _pendiente_

## D · Hub y entrega con la mitad aplazada (RF-08) · Sebastián

**Decisión propuesta:** RF-08 es Must, pero solo 13 de sus 26 requisitos entran en el MVP. El modelo de hub (D-03) no está decidido, y los requisitos afectados llevan un valor provisional.

**Qué pidió el profesor:** «no es incoherente modelar el comportamiento antes de cerrarlo, pero debe marcarse como supuesto del piloto» (valoración, apartado 3). En la Clase 5, el ejemplo de marketplace excluye «integración de rutas, gestión de frío, stock en tiempo real».

**Preguntas:**
1. ¿Qué criterio separó los 13 requisitos del hub que entran de los 13 que se aplazan?
2. Si el hub no está decidido, ¿por qué se modela ya? ¿Qué cambia si al final no hay hub (por ejemplo, con puntos de recogida)?
3. H-02 supone que el estudiante acepta esperar a una entrega en una franja. ¿Qué requisitos caen si resulta falsa?

**Respuesta (Sebastián):** _pendiente_

## E · Los cinco procesos fuera del MVP · Juan Antonio

**Decisión propuesta:** RF-11 Valoraciones, RF-14 Suscripción, RF-17 Liquidación, RF-18 Comunicación y RF-19 Soporte se quedan en V2 o V3 (40 requisitos, ninguno en el MVP). RF-13.7 (panel de prompts) y RF-13.4-04 (hitos de Asana) quedan como Won't, porque son de la landing, no del marketplace.

**Qué pidió el temario:** «WON'T · fuera de este alcance: decisión explícita de no abordar ahora; no equivale a que la idea sea mala o imposible» (Clase 8).

**Preguntas:**
1. E2 echa de menos opiniones en una empresa nueva. ¿Por qué las valoraciones pueden esperar, y qué haría falta para que entraran?
2. ¿Por qué se puede demostrar el valor de la compra consolidada sin suscripción, liquidación, comunicación ni soporte?
3. ¿Qué riesgo se acepta al dejarlos fuera, y a quién afecta: al comprador o al vendedor?
4. ¿Por qué el panel de prompts y los hitos de Asana no son requisitos del marketplace?

**Respuesta (Juan Antonio):** _pendiente_

## F · Calidad: usabilidad y accesibilidad dentro, sostenibilidad fuera · Juan Antonio

**Decisión propuesta:** RNF-04 Usabilidad y RNF-05 Accesibilidad entran enteros en el MVP (19 de 19). RNF-11 Sostenibilidad se aplaza (0 de 3).

**Qué pidió el profesor:** «Justificad el umbral de rendimiento, usabilidad o accesibilidad: ¿es ley, fuente, decisión o hipótesis?, ¿cómo se comprobará y qué resultado haría que lo revisaseis?» (valoración, apartado 5).

**Preguntas:**
1. ¿Por qué la usabilidad y la accesibilidad no se pueden aplazar? (E3 y E4 piden una interfaz sencilla y rápida.)
2. N-CAD-01 (no tirar comida) es Indicio. ¿Por qué entonces la sostenibilidad puede esperar?
3. Elige un umbral de RNF-04 o RNF-05: ¿de dónde sale y cómo lo comprobaríais?

**Respuesta (Juan Antonio):** _pendiente_

## Restricciones (RST) candidatas · los tres

La Clase 7 distingue tres tipos: **RF** (capacidad observable), **RNF** (cualidad medible) y **RST** (límite de alcance, política, integración o contexto). La Clase 11 pide a Food4All «restricciones de operación declaradas» y separa la restricción (un límite externo) de la hipótesis (un supuesto sin fuente). Todas estas salen de algo ya decidido o de una obligación legal del catálogo. **Cada uno dice sí, no o cambiar**, y al validarlas se añaden a la línea base.

| ID | Restricción | De dónde sale | Sebastián | Juan Antonio | Miguel |
| --- | --- | --- | --- | --- | --- |
| RST-01 | El prototipo no cobra dinero real: el pago es de prueba | Alcance «MVP simulado»; RF-06.4 | | | |
| RST-02 | El reembolso es un registro de prueba que resta del pago de prueba, nunca una transferencia | `FOOD4ALL_estados_pedido.md`, apartado 6 | | | |
| RST-03 | La web muestra el precio final y la cantidad de cada producto; no afirma que sea más barato que otra tienda sin una comparación con fecha, ciudad y código postal | H-03; Clase 5; C-13 | | | |
| RST-04 | El ámbito inicial es Málaga, Sevilla y Granada: no se aceptan pedidos de otras zonas | Decisión cerrada 15 del contexto | | | |
| RST-05 | Solo venden negocios con registro sanitario (o una exención justificada) aprobado por el administrador | N-VEN-07; US-02 y US-09 | | | |
| RST-06 | Ni el prototipo ni el registro de entrevistas usan datos personales reales | N-CUE-01 (RGPD); Clase 11 | | | |
| RST-07 | Sin integraciones reales: ni banco, ni proveedor logístico, ni inventario del comercio | «Fuera de alcance» de las fichas; valoración del 21/10; Clase 5 | | | |
| RST-10 | Los productos refrigerados se guardan y transportan en frío y separados de los secos | N-HUB-02 (obligación legal) | | | |
| RST-11 | Los ingredientes y alérgenos se muestran antes de pagar | N-CAT-02 (obligación legal) | | | |

Se descartaron RST-08 (valores provisionales de D-01 a D-04), porque es un supuesto del piloto y ya figura como C-09 en la línea base, y RST-09 (análisis legal orientativo), porque es un aviso sobre el documento y no un límite del sistema. Los números no se reutilizan. La regla de cancelación (solo antes de la hora de cierre) se decide en el comité de cambio, no aquí.

---

## Cuando estén las respuestas

1. Sebastián, como Product Owner, aprueba la criba o la cambia según las respuestas.
2. Se actualiza el estado en `benchmark/` y se regenera todo (`npm run todo`).
3. Cada uno deja su comentario en «Criba de requisitos» de Asana, escrito por él: el asistente no publica comentarios.
4. Se anota la decisión en el registro de cambios de la línea base.
