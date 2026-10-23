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
| RF-08 Hub y entrega | 29 | 17 | 12 |
| RF-12 Asistente de IA | 30 | 22 (simulado, ninguno Must) | 8 |
| RF-11 Valoraciones · RF-14 Suscripción · RF-17 Liquidación · RF-18 Comunicación · RF-19 Soporte | 40 | 0 | 40 |
| RF-13 Administración | 22 | 10 | 12 (2 excluidos) |
| RNF-04 Usabilidad · RNF-05 Accesibilidad | 19 | 19 | 0 |
| RNF-11 Sostenibilidad | 3 | 0 | 3 |
| **Total** | **564** | **403** (36 simulados) | **157** + 4 excluidos |

Lo que dicen las entrevistas E1–E6 (`FOOD4ALL_necesidades.md`, apartado 5.1). E1–E4 son apuntes de Sebastián, sin citas literales; E5–E6 son de Juan Antonio, literales. Las de Miguel se descartaron (C-22).
- **Precio y producto:** E4 compraría directamente al productor si percibe mayor calidad, un precio favorable y una cantidad adecuada. A E2 le atraen los productos locales, menos procesados y más baratos. E5 busca «de lo más barato del mercado» y a E6 le frenan los gastos de envío de Glovo. E6 no mira el origen: «solo miro que me vaya a gustar».
- **IA:** E3 y E4, poca o ninguna confianza; E2 la pondría a prueba; E1 la revisaría. N-IA-01, «No confirmada».
- **Rechazo:** E3 dice que no usaría FOOD4ALL.
- **Confianza:** E2 echa de menos opiniones en una empresa nueva; E5 y E6 miran reseñas o investigan si una app es fiable antes de usarla.
- **Candidatas fuera del catálogo:** descuentos u ofertas (E1, E3, E4; RF-06.6-04 sigue en V2, C-24); interfaz sencilla y rápida (E3, E4).

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
3. **Si una entrevista lo contradice.** Una sola contradicción no cambia el requisito: se registra como riesgo y se busca más evidencia (así se trató el rechazo de E3). Si 3 o más entrevistas independientes lo contradicen, que es la misma regla que usamos para confirmar, se reabre con un registro de cambio: origen, impacto, alternativa, decisión y versión. Decide el Product Owner con el equipo (Clase 11). Ejemplo: C-13, que cambió el lugar de la IA.

## B · El núcleo de compra dentro del MVP (RF-05, RF-06 y RF-07) · Sebastián

**Decisión propuesta:** carrito con varios vendedores, un solo pago de prueba y división en subpedidos, todo Must y en el MVP (78 de 92 requisitos).

**Qué pidió el profesor:** el recorrido de defensa «del núcleo multimercado»: «un cliente compra a dos vendedores; uno informa una falta después de pagar la simulación. ¿Qué identificadores se crean, qué ve cliente/vendedor/operador, qué total queda y cuándo no puede ya cancelarse?» (valoración, apartado 5).

**Preguntas:**
1. ¿Qué problema del estudiante resuelve el núcleo, y qué evidencia hay hoy? (N-CAR-01 es Indicio: E4 a favor y E3 en contra.)
2. E3 dice que no usaría FOOD4ALL. ¿Por qué el núcleo sigue siendo Must? ¿Qué tendría que pasar para revisarlo?
3. ¿Qué alternativa había (por ejemplo, un pedido y un pago por vendedor) y por qué no se eligió?
4. Con la postura del PO (C-13: carrito simplificado y producto primero), ¿qué parte del núcleo hace visible ese valor?

**Decisión de Sebastián (redactada con ayuda del asistente):**

1. **Problema y evidencia.** Comprar a varios productores locales supone hoy varios pedidos, envíos y pagos. El núcleo lo convierte en un carrito, un pago y una entrega: carrito con varios vendedores (RF-05.1-01), un único coste de envío (RF-05.4-01) y un subpedido por vendedor (RF-07.1-01). La evidencia es un **Indicio**, no está confirmada. E4 compraría al productor si percibe calidad, precio y cantidad. A E3 le molesta salir a comprar lo que le falta, pero no usaría FOOD4ALL. A E6 le frenan los gastos de envío de Glovo, y eso apoya el envío único.
2. **Por qué sigue siendo Must aunque E3 diga que no.** Es el recorrido central (regla A.2 a): sin él no hay marketplace de varios vendedores y la demo no responde al problema. Una contradicción se registra como riesgo y no cambia el requisito (regla A.3). Además, E3 rechaza FOOD4ALL en general, no el carrito. Lo que pide (sencillo, rápido, con descuentos) habla de cómo tiene que ser, y eso refuerza el «carrito simplificado» de C-13. Se revisa si 3 o más entrevistas del perfil objetivo prefieren comprar a cada vendedor por separado.
3. **Alternativa descartada.** Un pedido y un pago por vendedor. Es más fácil de construir (sin subpedidos ni hub), pero el cliente pagaría varios envíos y recibiría varias entregas. *Inferencia:* con presupuestos de 30–60 € a la semana (E3 y E4), alcanzar la compra mínima de 10–15 € (RF-05.4-02) en cada vendedor sería difícil. Se elige un pago con subpedidos: el cliente ve un solo pedido y cada vendedor, el suyo (RF-07.1-02).
4. **Cómo se ve el valor de C-13.** El carrito agrupado por vendedor muestra el origen (RF-05.2). El botón «Pagar 28,90 €» muestra el total claro (RF-05.8-04). Se explica por qué hay un solo envío (RF-05.9-03) y hasta cuándo se puede cancelar (RF-06.6-05).

**Qué queda fuera (14):** pagos reales (PayPal, Bizum, tickets restaurante), la factura de empresa y en PDF, modificar el pedido, las sustituciones, los códigos promocionales, la barra fija en móvil y reservar la franja durante 15 minutos. Son comodidades o casos minoritarios: el recorrido central funciona sin ellos.

**Recorrido de defensa** (lo pidió la valoración, apartado 5): el pedido 1042 crea los subpedidos 1042-A y 1042-B (RF-07.1-01). El vendedor B marca una falta (RF-07.3-02). Esa línea se reembolsa de forma simulada y el total se recalcula (RF-07.6). Después de la hora de cierre ya no se puede cancelar (RF-06.6-03).

## C · Lo simulado: pago, reembolso e IA · Sebastián (asume la parte de Miguel)

**Decisión propuesta:** el pago y el reembolso son de prueba (nunca dinero real). El asistente de IA (RF-12) queda como «Should · MVP simulado»: entra en la demo, ninguno de sus requisitos es Must, y la compra funciona sin él.

**Qué pidieron el profesor y el temario:**
- Que la IA esté en Should y en la versión 2 es «preferible a prometer que la IA es el núcleo demostrable sin haber validado todavía sus datos de entrada o su utilidad» (valoración, apartado 1).
- «La IA solo se considera cuando aporta valor demostrable y se pueden explicar sus datos, criterios, riesgos, límites y alternativa sin IA» (Clase 2).
- «"El sistema tendrá IA" no es una necesidad ni un requisito verificable» (Clase 6).

**Preguntas:**
1. Con E1–E4 (N-IA-01 «No confirmada»; a E5 y E6 no se les preguntó por la IA), ¿por qué la IA debería seguir en la demo, aunque sea simulada, o por qué debería salir del MVP?
2. ¿Cuál es la alternativa sin IA para que el estudiante haga su compra semanal?
3. Si lo atractivo es el precio y el producto natural (postura del PO, C-13: carrito y producto primero, IA en tercer lugar), ¿qué requisitos de RF-12 bajarías de prioridad y cuáles conservarías?
4. ¿Por qué el pago y el reembolso son simulados, y qué no podemos afirmar en la demo por eso?

**Decisión de Sebastián (redactada con ayuda del asistente):**

1. **Por qué la IA sigue en la demo.** Entra como Should · MVP simulado: opcional y revisable. Nunca añade nada al carrito sin confirmación (RF-12.3-04) y lleva la etiqueta «Propuesta generada por IA» (RF-12.4-01). No puede ser Must, porque N-IA-01 quedó «No confirmada»: E3 y E4 tienen poca o ninguna confianza. Se diseña para esa desconfianza: E1 la revisaría y E2 la pondría a prueba. Si 3 o más entrevistas del perfil objetivo la rechazan, sale del MVP (regla A.3).
2. **Alternativa sin IA.** El catálogo de la zona con filtros y el carrito normal (RF-04 y RF-05). La compra funciona entera sin el asistente.
3. **Qué baja y qué se conserva.** Se aplica el plan de contraste de N-IA-01 (`FOOD4ALL_necesidades.md`, apartado 5): RF-12.1-03 (escribir en lenguaje natural) pasa a Could · V2, y con él el filtro de peticiones que no son de comida (RF-12.6-05). El asistente se queda en opciones guiadas: presupuesto, días, personas y tiempo para cocinar. El acceso (RF-12.1-01) pasa a ser una pestaña «Asistente IA» arriba a la derecha de la cabecera: visible, pero sin destacar más que «Comprar». Es el tercer lugar de C-13: la IA no se presenta como la única forma de comprar. Se conservan la cesta dentro del presupuesto, la exclusión de alérgenos, el ajuste producto a producto y la transparencia (RF-12.2 a RF-12.4).
4. **Por qué pago y reembolso son simulados.** Nunca hay dinero real: sin pasarela, sin comisiones reales y sin el riesgo legal de cobrar. Por eso en la demo no se puede afirmar que el cobro, el reparto del dinero entre vendedores o los reembolsos funcionen de verdad: solo que el recorrido y los importes son correctos.

## D · Hub y entrega con la mitad aplazada (RF-08) · Sebastián

**Decisión propuesta:** RF-08 es Must, pero solo 16 de sus 29 requisitos entraban en el MVP (13 de 26 antes de los 3 de retrasos de C-15); 17 desde C-23. El modelo de hub (D-03) no está decidido, y los requisitos afectados llevan un valor provisional.

**Qué pidió el profesor:** «no es incoherente modelar el comportamiento antes de cerrarlo, pero debe marcarse como supuesto del piloto» (valoración, apartado 3). En la Clase 5, el ejemplo de marketplace excluye «integración de rutas, gestión de frío, stock en tiempo real».

**Preguntas:**
1. ¿Qué criterio separó los requisitos del hub que entran de los 13 que se aplazan?
2. Si el hub no está decidido, ¿por qué se modela ya? ¿Qué cambia si al final no hay hub (por ejemplo, con puntos de recogida)?
3. H-02 supone que el estudiante acepta esperar a una entrega en una franja. ¿Qué requisitos caen si resulta falsa?

**Decisión de Sebastián (redactada con ayuda del asistente):**

1. **Criterio.** Entra lo necesario para que un pedido recorra la cadena completa una vez: recoger, verificar, consolidar y entregar (RF-08.1 a RF-08.4), con el operador en una vista de escritorio. También entra la seguridad alimentaria: embalaje isotérmico, hoja de información obligatoria, retirada de lo caducado y entrega en mano de los refrigerados (RF-08.2-03, RF-08.3-02, RF-08.3-04 y RF-08.7-03). Y los fallos del camino principal: entrega fallida y retrasos (RF-08.4-03 y C-15). Y la retirada de un lote con aviso a sus compradores (RF-08.5-01), que sube al MVP con C-23. Se aplazan 12: el orden de las paradas, la app móvil del operador (RF-08.6), las comodidades del cliente (aviso 30 minutos antes, dejarlo a un vecino, foto de la entrega), lo que depende de D-01 (temperatura de la cámara y excedentes), la devolución tras dos entregas fallidas y el punto de recogida.
2. **Por qué se modela sin estar decidido.** La valoración lo admite si se marca como supuesto del piloto, y todo RF-08 lleva «Depende de D-03». El hub es lo que hace posible «una sola entrega» (RF-08.3-01), la prioridad 1 de C-13. Si no hubiera hub (por ejemplo, con puntos de recogida), cambiaría cómo se entrega, pero no lo que ve el cliente: un carrito, un pago y subpedidos. Por eso el bloque B no depende de D-03.
3. **Si H-02 es falsa.** Caen directamente las franjas de 2 horas (RF-06.2-02) y la hora estimada (RF-09.2-03). Indirectamente cae la entrega a domicilio (RF-08.4 y RF-08.7-03). El plan B es el punto de recogida (C-19). *Inferencia:* las compras grandes cada 1–2 semanas de E4 encajan mejor con una franja programada.

**D-03 se decide en el Hito 3** (antes del 13/11/2026), con la ayuda del profesor, las entrevistas a vendedores y la pregunta del punto de recogida. Es una decisión de operación y diseño, no un requisito: el requisito es que el pedido llegue en una sola entrega. Responsable: Sebastián. Hasta entonces vale el supuesto del piloto: una zona por ciudad y cierre la víspera a las 20:00.

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

La Clase 7 distingue tres tipos: **RF** (capacidad observable), **RNF** (cualidad medible) y **RST** (límite de alcance, política, integración o contexto). La Clase 11 pide a Food4All «restricciones de operación declaradas» y separa la restricción (un límite externo) de la hipótesis (un supuesto sin fuente). Todas estas salen de algo ya decidido o de una obligación legal del catálogo. **Cada uno dice sí, no o cambiar**, y al validarlas se añaden a la línea base. La columna de Miguel no vota por separado: sus tareas las asume Sebastián desde el 23/10 a las 20:31, así que validan dos personas.

| ID | Restricción | De dónde sale | Sebastián | Juan Antonio | Miguel |
| --- | --- | --- | --- | --- | --- |
| RST-01 | El prototipo no cobra dinero real: el pago es de prueba | Alcance «MVP simulado»; RF-06.4 | Sí | | Asume Sebastián |
| RST-02 | El reembolso es un registro de prueba que resta del pago de prueba, nunca una transferencia | `FOOD4ALL_estados_pedido.md`, apartado 6 | Sí | | Asume Sebastián |
| RST-03 | La web muestra el precio final y la cantidad de cada producto; no afirma que sea más barato que otra tienda sin una comparación con fecha, ciudad y código postal | H-03; Clase 5; C-13 | Sí | | Asume Sebastián |
| RST-04 | El ámbito inicial es Málaga, Sevilla y Granada: no se aceptan pedidos de otras zonas | Decisión cerrada 15 del contexto | Sí (las zonas dentro de cada ciudad son D-03, Hito 3) | | Asume Sebastián |
| RST-05 | Solo venden negocios con registro sanitario (o una exención justificada) aprobado por el administrador | N-VEN-07; US-02 y US-09 | Sí | | Asume Sebastián |
| RST-06 | Ni el prototipo ni el registro de entrevistas permiten identificar a nadie: las entrevistas son a personas reales, pero sin nombre, contacto ni combinaciones de datos (carrera, curso, edad, localidad) que digan quién es | N-CUE-01 (RGPD); Clase 11 | Cambiar (texto nuevo; perfiles de E5 y E6 generalizados el 23/10) | | Asume Sebastián |
| RST-07 | Sin integraciones reales: ni banco, ni proveedor logístico, ni inventario del comercio, ni motor de IA (la cesta del asistente la genera un simulador; RNF-10.1-02 permite cambiarlo por uno real) | «Fuera de alcance» de las fichas; valoración del 21/10; Clase 5; RNF-10.1-02; C-26 | Cambiar (añade el motor de IA) | | Asume Sebastián |
| RST-10 | Los productos refrigerados se guardan y transportan en frío y separados de los secos | N-HUB-02 (obligación legal) | Sí | | Asume Sebastián |
| RST-11 | Los ingredientes y alérgenos se muestran antes de pagar | N-CAT-02 (obligación legal) | Sí | | Asume Sebastián |

Se descartaron RST-08 (valores provisionales de D-01 a D-04), porque es un supuesto del piloto y ya figura como C-09 en la línea base, y RST-09 (análisis legal orientativo), porque es un aviso sobre el documento y no un límite del sistema. Los números no se reutilizan. La regla de cancelación (solo antes de la hora de cierre) se decide en el comité de cambio, no aquí.

---

## Cuando estén las respuestas

1. Sebastián, como Product Owner, aprueba la criba o la cambia según las respuestas.
2. Se actualiza el estado en `benchmark/` y se regenera todo (`npm run todo`).
3. Cada uno deja su comentario en «Criba de requisitos» de Asana, escrito por él: el asistente no publica comentarios.
4. Se anota la decisión en el registro de cambios de la línea base.
