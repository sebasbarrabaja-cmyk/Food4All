# FOOD4ALL: Personas y mapas de empatía

**Entregable del Hito 2 · Requisitos y criterios de aceptación** · Asignatura ISW, Universidad Europea

Equipo: Sebastián, Juan Antonio y Miguel · Responsable de este entregable: Juan Antonio · Fecha: 21 de octubre de 2026 · Se adjunta al documento de requisitos

**Versión 2 (22/10/2026).** Corrección de identificadores tras la valoración provisional del Hito 2. Las necesidades usan el catálogo único N-<MÓDULO>-NN (`FOOD4ALL_necesidades.md`) y los requisitos, los IDs vigentes de B4. Los textos de las personas y de los mapas no cambian. Cambios hechos por Sebastián.

**Revisión de Juan Antonio (23/10/2026).** Se actualizan los estados de la tabla 3 con las entrevistas E1–E6, se corrigen cuatro criterios del apartado 6.2 que prometían más de lo que hay en el MVP o no coincidían con B4, y dos erratas. Cambios aplicados con ayuda del asistente.

---

## 1. Objetivo y alcance

En la asignatura desarrollamos **FOOD4ALL, un sitio web de marketplace de alimentación local**: el usuario planifica su compra con ayuda de un asistente, añade al carrito productos de varios vendedores locales, paga una sola vez y recibe una entrega consolidada desde un hub. El sitio tiene una zona para comprar, una zona para vender (alta de vendedores y panel de pedidos) y un panel de administración \[1\]\[10\].

Este documento define **quiénes son los usuarios del sitio** mediante tres personas y sus mapas de empatía, y los traduce en necesidades identificadas (N-ID) y en requisitos con criterios de aceptación para el Hito 2.

**Contenido**

1. Objetivo y alcance.
2. Base de elaboración.
3. Tabla de necesidades (N-ID).
4. Personas: Lucía (estudiante), Antonio (vendedor) y Rafa (operador del hub).
5. Mapas de empatía de cada persona.
6. De los mapas al sitio web: requisitos y criterios de aceptación.
7. La recogida de productos de los vendedores.
8. Síntesis y próximos pasos.
9. Referencias.
10. Mapa de trazabilidad de las personas.

## 2. Base de elaboración

Las personas se han construido a partir de investigación documental, no de casos individuales:

- La documentación del proyecto: problemas del usuario, alternativas actuales, propuesta de valor, modelo logístico y páginas del sitio \[1\]\[10\].
- Datos de consumo y de estudiantes: Informe de Consumo Alimentario 2025 del MAPA \[2\] y EUROSTUDENT 8 \[3\].
- Casos reales de plataformas y food hubs comparables: Market Wagon \[5\], Open Food Network, La Colmena que dice Sí \[8\], Red Tomato \[7\], un estudio de campo en la Wisconsin Food Hub Cooperative \[4\] y un estudio de la Universidad de Manchester \[6\].

Los nombres, edades y ciudades de las personas son ficticios. Cada afirmación lleva entre corchetes la referencia de la sección 9 que la respalda.

> **Límite de este documento.** Son **arquetipos documentales**, no usuarios observados. Las «frases representativas» resumen la documentación; no son citas de entrevistas. Antes de presentarlas como validación hay que contrastarlas con entrevistas. A 23/10/2026 hay seis a estudiantes (E1–E4 de Sebastián y E5–E6 de Juan Antonio) y ninguna a vendedores ni a operadores. Por eso las necesidades de Lucía están en **Indicio** o **No confirmada**, y las de Antonio y Rafa siguen en **Hipótesis** (tabla 3; el detalle está en `FOOD4ALL_necesidades.md`).

---

## 3. Tabla de necesidades (N-ID)

| N-ID (catálogo único) | Necesidad | Persona | Estado | ID en la v1 |
| --- | --- | --- | --- | --- |
| N-PLA-02 | Controlar cuánto gasta en comida | Lucía | Indicio | N-01 |
| N-CAR-01 | Comprar a varios vendedores en un solo pedido y pago, sin ir de tienda en tienda (ahorrar tiempo, acceder a producto local) | Lucía | Indicio (E3 en contra) | N-02, N-08 |
| N-PLA-01 | Saber qué comprar y qué comer los próximos días, planificando en vez de improvisar | Lucía | Indicio | N-03, N-04, N-05 |
| N-CAD-01 | Gestionar cantidades, conservación y caducidades para no tirar comida | Lucía | Indicio (débil) | N-06, N-07 |
| N-CAT-01 | Confiar en el origen, la calidad y la trazabilidad | Lucía | Indicio | N-09 |
| N-ENT-01 | Recibir todo en una sola entrega consolidada | Lucía | Hipótesis | N-10 |
| N-IA-01 | Que el asistente simplifique y no exija explicar demasiado | Lucía | No confirmada | N-11 |
| N-VEN-01 | Llegar a clientes nuevos y ganar visibilidad | Antonio | Hipótesis | N-12 |
| N-VEN-02 | Vender sin montar una web propia ni gestionar envíos | Antonio | Hipótesis | N-13 |
| N-VEN-03 | Reducir la merma del género | Antonio | Hipótesis | N-14 |
| N-VEN-04 | Saber qué preparar y cuándo (pedido claro y franja de recogida) | Antonio | Hipótesis | N-15 |
| N-VEN-05 | Cobrar con transparencia (comisión y liquidación) | Antonio | Hipótesis | N-16 |
| N-VEN-06 | Conocer con claridad los requisitos de alta (registro sanitario, fichas, alérgenos) | Antonio | Hipótesis | N-17 |
| N-HUB-01 | Rutas y franjas de recogida fiables | Rafa | Hipótesis | N-18 |
| N-HUB-02 | Mantener la cadena de frío y separar productos | Rafa | Obligación legal (Reglamento 852/2004) | N-19 |
| N-HUB-03 | Verificar el pedido y resolver faltas | Rafa | Hipótesis | N-20 |

Tres necesidades de la v1 (N-03, N-04 y N-05) eran la misma: saber qué comprar, qué comer y planificar. Se unen en N-PLA-01. Lo mismo ocurre con N-06 y N-07 (N-CAD-01) y con N-02 y N-08 (N-CAR-01). El catálogo único añade obligaciones legales que no salen de las personas (alérgenos antes de pagar, protección de datos, transparencia de la IA y registro sanitario); están en `FOOD4ALL_necesidades.md`. Los estados son los del catálogo a 23/10/2026, con E1–E6.

---

## 4. Personas

### Persona 1. Lucía, la estudiante que vive fuera de casa

| Campo | Descripción |
| --- | --- |
| Nombre, edad, ciudad y situación | Lucía, 20 años, de un pueblo de Jaén. Estudia en Granada y comparte piso con dos compañeras. Compra su propia comida con unos 40 € a la semana y tiene poco tiempo entre clases y prácticas \[1\]\[3\] |
| Objetivos | Ahorrar dinero y comer bien; saber qué comprar y qué comer los próximos días; no tirar comida; ahorrar tiempo \[1\] |
| Frustraciones | No sabe cuánto necesita ni cuánto le dura; improvisa; pierde tiempo yendo de tienda en tienda; tira producto que no consume a tiempo \[1\] |
| Cómo compra hoy | Supermercado cercano, comer fuera cuando no tiene tiempo, delivery de forma ocasional, recetas en redes y consejos de la familia. Controla el gasto con notas o a ojo \[1\]\[2\] |
| Qué espera de FOOD4ALL | Que el asistente le proponga una cesta según su presupuesto y sus días, con producto local de varios vendedores, un solo pago, una sola entrega y avisos de qué consumir primero \[1\] |
| Frase representativa | «Quiero comer bien con lo que tengo, pero no sé qué comprar ni cuánto me va a durar» |
| Necesidades (N-ID) | N-PLA-01, N-PLA-02, N-CAR-01, N-ENT-01, N-CAD-01, N-IA-01, N-CAT-01 |

### Persona 2. Antonio, el frutero de barrio

| Campo | Descripción |
| --- | --- |
| Nombre, edad, ciudad y situación | Antonio, 54 años, frutero con tienda propia en un barrio de Málaga. Atiende el negocio con ayuda de un empleado, no tiene web y parte de su género se estropea antes de venderlo. El comercio tradicional ha bajado al 10,6 % de las compras de alimentación \[2\] |
| Objetivos | Llegar a clientes nuevos, ganar visibilidad, tener un canal de venta adicional y vender el género antes de que se estropee \[1\] |
| Frustraciones | Merma; falta de presencia online; poco tiempo para gestionar pedidos y envíos; incertidumbre sobre comisiones y pagos; trámites del alta (registro sanitario, fichas, alérgenos) \[1\]\[4\] |
| Cómo vende hoy | En el mostrador, a clientes habituales y de paso. Compra a mayoristas y productores locales |
| Qué espera de FOOD4ALL | Clientes nuevos; que FOOD4ALL recoja su parte del pedido y entregue; ver solo sus pedidos; una liquidación y una comisión claras \[1\]\[10\] |
| Frase representativa | «Si me traéis clientes y no tengo que preocuparme del reparto, me interesa; lo que quiero saber es cuánto me quedáis» |
| Necesidades (N-ID) | N-VEN-01, N-VEN-02, N-VEN-03, N-VEN-04, N-VEN-05, N-VEN-06 |

### Persona 3 (opcional). Rafa, el operador del hub y repartidor

| Campo | Descripción |
| --- | --- |
| Nombre, edad, ciudad y situación | Rafa, 31 años, vive en Sevilla. Trabaja para FOOD4ALL o para un proveedor logístico: recoge el producto en cada vendedor, lo traslada al hub, lo verifica, lo empaqueta y lo entrega. Es el actor que diferencia al proyecto de la competencia \[1\] |
| Objetivos | Completar la ruta en las franjas acordadas; recoger pedidos completos; mantener la cadena de frío; entregar una sola vez por cliente \[1\] |
| Frustraciones | Esperas porque el vendedor no tiene el pedido listo; accesos difíciles y GPS que no coincide con la entrada real; cola para descargar en el hub; faltas de producto \[4\] |
| Cómo trabaja hoy | Siguiendo el modelo de los food hubs reales: ruta de recogida por zona, carga, control de temperatura, descarga y verificación en el hub \[4\]\[5\] |
| Qué espera de FOOD4ALL | Lista de paradas con franja, aviso de «pedido listo», protocolo de verificación y rutas agrupadas por zona y día |
| Frase representativa | «Lo que más tiempo me quita es llegar y que el pedido aún no esté preparado» |
| Necesidades (N-ID) | N-HUB-01, N-HUB-02, N-HUB-03 |

---

## 5. Mapas de empatía

### 5.1 Mapa de Lucía (estudiante)

**Piensa y siente**

- Duda de qué comprar y de cuánto le va a durar. La inexperiencia con la gestión de la comida es el problema central del proyecto \[1\].
- Le preocupa que el dinero no le llegue y siente poco control sobre lo que gasta en comida \[1\].
- Se cansa de decidir cada pocos días qué va a comer \[1\].
- Le da rabia tirar comida que no ha consumido a tiempo \[1\].
- Siente curiosidad por una solución que le simplifique la vida, pero desconfía de que lo local sea más caro y de que una IA decida su compra \[1\].

**Ve**

- Ofertas y folletos de supermercados y promociones de aplicaciones de reparto \[1\].
- Recetas, vídeos y blogs de cocina en redes sociales \[1\].
- Lo que compran y cocinan sus compañeras de piso.
- Su nevera y su despensa: qué se acaba y qué está a punto de estropearse.
- Un entorno en el que el supermercado concentra el 68,2 % de las compras de alimentación y la compra en línea solo el 2 % \[2\].

**Oye**

- Consejos de su familia y amigos sobre qué comer y dónde comprar \[1\].
- Recomendaciones de compañeros sobre el supermercado más barato o la aplicación que usan.
- Publicidad de reparto que insiste en la inmediatez \[1\].
- El mensaje de FOOD4ALL: planifica tu comida, ahorra y come local \[1\].

**Dice y hace**

- Compra de forma improvisada y sin planificar la semana \[1\].
- Combina supermercado, comer fuera y, cuando le falta tiempo, delivery \[1\].
- Lleva el presupuesto con notas, hoja de cálculo o a ojo \[1\].
- Para conseguir producto local tendría que ir a varios sitios, así que normalmente renuncia a él \[1\].
- Comenta con sus amigas que quiere comer mejor gastando menos.

**Dolores**

- Precio: no controla cuánto gasta \[1\].
- Falta de tiempo para comprar, desplazarse y comparar \[1\].
- No saber qué comprar ni qué comer \[1\].
- Desperdicio por caducidad o mala conservación \[1\].
- Fragmentación: el producto local está repartido en varios comercios \[1\].
- Miedo al cambio de hábito: tendría que aceptar una entrega consolidada en lugar de resolver al momento \[1\].
- Desconfianza sobre origen, calidad y conservación cuando intervienen varios vendedores \[1\].

**Ganancias**

- Una compra pensada para varios días que respeta su presupuesto y sus preferencias \[1\].
- Producto local de calidad de varios vendedores con un solo carrito y un solo pago \[1\].
- Una entrega consolidada que le ahorra desplazamientos \[1\].
- Avisos de qué consumir primero y cómo aprovecharlo \[1\].
- Menos decisiones y sensación de control sobre lo que gasta y come \[1\].

### 5.2 Mapa de Antonio (vendedor local)

**Piensa y siente**

- Le inquieta que el género se estropee antes de venderlo.
- Ve con interés llegar a clientes nuevos, pero no sabe si una plataforma le compensa \[1\].
- Siente inseguridad ante la comisión: el porcentaje, quién la asume y cuándo cobra \[1\].
- Está orgulloso de su producto y quiere que se vea su origen y su trabajo \[1\].
- Se siente lejos de lo digital: no tiene web y no sabe por dónde empezar.

**Ve**

- Su tienda, sus clientes habituales y el género que se acerca al límite.
- Un comercio tradicional que baja al 10,6 % de las compras mientras el supermercado domina \[2\].
- Conocidos o competidores que usan plataformas o ya venden en línea \[5\]\[8\].
- Un nuevo canal que se le propone sumar a lo que ya hace \[1\].

**Oye**

- A sus clientes pidiendo producto fresco, cercano y a buen precio \[1\].
- A otros comerciantes hablando de plataformas, comisiones y repartos. En plataformas comparables se critica la falta de transparencia de la tarifa y el viaje extra al hub \[5\].
- A mayoristas y proveedores sobre precios y disponibilidad.

**Dice y hace**

- Vende en tienda física y no gestiona una web.
- Decide cuánto género tener y qué hacer con lo que sobra: rebajarlo, regalarlo o tirarlo.
- Si entra en FOOD4ALL, completa el alta, aporta su registro sanitario, sube fichas con origen, alérgenos y tipo de fecha, prepara su parte del pedido con número y lote y la deja lista para la recogida \[1\]\[10\].
- Pregunta, ante cualquier plataforma, cuánto se queda y cuándo cobra.

**Dolores**

- Merma de producto.
- Sin presencia online ni forma de llegar a más clientes.
- Margen reducido en canales con varios intermediarios \[1\].
- Incertidumbre sobre comisión, pagos y quién soporta la logística \[1\].
- Carga administrativa del alta: registro sanitario, fichas completas, alérgenos y trazabilidad \[1\].
- Preparar pedidos para la recogida lleva horas y exige coordinarse con el transporte \[4\].

**Ganancias**

- Nuevos clientes, más alcance y más visibilidad \[1\].
- Un canal adicional: sigue vendiendo como siempre y FOOD4ALL suma pedidos \[10\].
- No gestiona envíos ni cobra al consumidor; ve solo su parte del pedido y cobra con una liquidación clara \[10\].
- Vender producto que de otro modo se habría estropeado.

### 5.3 Mapa de Rafa (operador del hub)

**Piensa y siente**

- Siente presión por cumplir las franjas de recogida con varios vendedores y entregar todo junto \[1\].
- Le preocupa no dañar el producto ni romper la cadena de frío \[1\].
- Se frustra cuando el pedido no está listo o falta algo \[4\].

**Ve**

- Un GPS que no coincide con el acceso real, caminos estrechos y vendedores que aún están preparando el pedido \[4\].
- Cola para acceder al muelle de descarga del hub \[4\].
- Una lista de paradas con productos de varios pedidos, unos frescos y otros secos \[1\].

**Oye**

- A los vendedores avisando de retrasos o faltas.
- Al equipo del hub con cambios de ruta o de prioridad.
- A los clientes, en la entrega, preguntando por algún producto o por la hora.

**Dice y hace**

- Recoge, controla la temperatura, traslada, descarga en el hub, verifica contra el pedido, empaqueta y entrega \[1\].
- Espera en el vendedor hasta que el pedido está listo y ajusta la refrigeración durante la ruta \[4\].
- Decide qué hacer ante una falta: avisar, proponer un sustituto o retirar el producto \[10\].

**Dolores**

- Esperas en origen y en el hub, accesos difíciles y direcciones mal geolocalizadas \[4\].
- Poca comunicación con el vendedor sobre la hora a la que estará listo el pedido \[4\].
- Productos con necesidades distintas, frío y seco, en un mismo viaje \[1\].
- Condiciones laborales y reparto de costes por definir \[1\].

**Ganancias**

- Franjas de recogida fiables y aviso de «pedido preparado» \[4\].
- Rutas agrupadas por zona y día, con suficientes paradas por viaje \[6\].
- Una lista de verificación clara y un procedimiento sencillo para las faltas.

---

## 6. De los mapas al sitio web: requisitos y criterios de aceptación

### 6.1 Qué hace cada persona en el sitio

| Persona | Zona del sitio | Recorrido principal |
| --- | --- | --- |
| Lucía | /comprar y /comprar/cliente | Entra, ve el mensaje de planificar y comer local, indica presupuesto y días al asistente, revisa la cesta con productos de varios vendedores, paga una vez, sigue el pedido y recibe recordatorios |
| Antonio | /vender y /vender/panel | Conoce el recorrido del vendedor, solicita el alta, sube su catálogo con fichas completas, ve su parte del pedido, confirma o avisa de una falta, la deja lista para la recogida y consulta su liquidación |
| Rafa | Vista de operación (panel interno) | Consulta su ruta de recogida con franjas y accesos, registra cantidad, estado y temperatura en cada parada y verifica el pedido en el hub |

### 6.2 Requisitos funcionales con criterios de aceptación

Los identificadores de esta tabla eran propios del documento (RF-01 a RF-14) y **no coincidían con los de B4**: aquí RF-01 era el asistente, mientras que en B4 RF-01 es el registro y RF-12 el asistente. En la v2, la primera columna da el ID vigente de B4 y la segunda, el que tenía en la v1, solo como referencia.

| ID en B4 (vigente) | En la v1 | Requisito | N-ID | Criterio de aceptación |
| --- | --- | --- | --- | --- |
| RF-12.2, RF-12.3 | RF-01 | El asistente propone una cesta a partir del presupuesto, los días y las preferencias del usuario | N-PLA-01, N-PLA-02, N-IA-01 | Dado un presupuesto y un número de días, cuando el usuario los introduce, entonces el sitio muestra una cesta con productos de varios vendedores cuyo total no supera el presupuesto y que el usuario puede modificar (RF-12.2-02, RF-12.3-02) |
| RF-05.2 | RF-02 | El carrito admite productos de varios vendedores y agrupa las líneas por vendedor | N-CAR-01, N-ENT-01 | Dado un carrito con productos de dos o más vendedores, cuando el usuario lo abre, entonces ve las líneas agrupadas por vendedor y un único total (RF-05.2-01, RF-05.2-04) |
| RF-06.4, RF-06.5 | RF-03 | El checkout realiza una única compra para todos los vendedores | N-CAR-01, N-ENT-01 | Dado un carrito multivendedor, cuando el usuario confirma, entonces se registra un solo pedido con un solo pago y se informa de que la entrega será consolidada (RF-06.4-05, RF-05.2-05) |
| RF-04.5 | RF-04 | Cada ficha de producto muestra vendedor, origen, alérgenos, tipo de fecha y conservación | N-CAD-01, N-CAT-01, N-CAT-02 | Dado un producto del catálogo, cuando el usuario abre su ficha, entonces ve todos esos campos antes de pagar (RF-04.5-02) |
| RF-09.1, RF-09.2 | RF-05 | El usuario ve el estado de su pedido en cada fase | N-ENT-01, N-CAT-01 | Dado un pedido en curso, cuando el usuario abre el seguimiento, entonces ve el estado actual entre recibido, recogida en origen, en el hub, empaquetado, en reparto y entregado (RF-09.1-01, RF-09.2-01) |
| RF-12.5 (V2) | RF-06 | El sitio envía recordatorios de qué consumir primero | N-CAD-01 | Dado un pedido entregado con productos perecederos, cuando se entrega, entonces el usuario recibe un aviso «Consume primero» con los productos de vida útil más corta (RF-12.5-03) |
| RF-02.2, RF-02.4 | RF-07 | El vendedor solicita el alta y consulta su estado | N-VEN-01, N-VEN-06 | Dado el formulario de alta, cuando el vendedor lo envía con los campos obligatorios, entonces ve el estado de su solicitud: recibida, en revisión, verificada o rechazada (RF-02.4-01) |
| RF-03.1, RF-03.2, RF-03.3 | RF-08 | El vendedor mantiene su catálogo con ficha completa | N-VEN-02, N-VEN-06 | Dado un vendedor verificado, cuando añade un producto, entonces el sitio exige origen, precio, unidad, ingredientes, alérgenos, tipo de fecha y conservación (RF-03.9-01) |
| RF-07.2, RF-07.3, RF-07.4, RF-16.2 | RF-09 | El vendedor ve solo su parte del pedido y puede confirmar, avisar de una falta o marcarla como lista | N-VEN-02, N-VEN-04 | Dado un pedido consolidado, cuando el vendedor abre su panel, entonces ve solo sus productos, cantidades, número de pedido y franja de recogida, y puede cambiar el estado (RF-07.2-02, RF-07.3-02, RF-07.4-03) |
| RF-07.3-09, RF-07.3-03, RF-07.3-04 (V2) | RF-10 | Ante una falta se propone un sustituto y se notifica al cliente | N-VEN-03, N-HUB-03 | Dado un producto marcado como falta, cuando se registra, entonces el vendedor puede proponer un sustituto de su catálogo y el cliente puede aceptarlo o rechazarlo (en B4 lo propone el vendedor, no el sistema). Si al pagar el cliente eligió qué hacer si falta algo («Sustituir por uno parecido» o «No servir», RF-07.3-09), se aplica su preferencia sin preguntarle |
| RF-17.2 (V2) | RF-11 | El vendedor consulta su liquidación y la comisión aplicada | N-VEN-05 | Dado un periodo de ventas, cuando el vendedor abre su liquidación, entonces ve ventas, comisión y total a cobrar (RF-17.2-02; la comisión depende de D-02) |
| RF-08.1 (MVP), RF-08.6 (V2) | RF-12 | El operador ve su ruta de recogida con franjas y datos de acceso | N-HUB-01 | Dada una ruta del día, cuando el operador la abre, entonces ve la lista de vendedores a visitar con dirección, franja de recogida y subpedidos (RF-08.1-01). Ordenar las paradas por cercanía es V2 (RF-08.1-02) |
| RF-08.1-03, RF-08.2-04 (V2), RF-07.4-02 | RF-13 | El operador registra cantidad, estado y temperatura en cada parada | N-HUB-02, N-HUB-03 | Dada una parada, cuando el operador registra la recogida, entonces se guardan la hora de recogida y los bultos recogidos (RF-08.1-03). El registro de la temperatura de la cámara de frío es V2 (RF-08.2-04) |
| RF-08.2 | RF-14 | El hub verifica el pedido consolidado antes de empaquetarlo | N-HUB-03 | Dado un pedido en el hub, cuando se verifica, entonces el sistema compara lo recogido con lo pedido y marca las diferencias (RF-08.2-02) |
---

## 7. La recogida de productos de los vendedores

La recogida es el punto donde se encuentran Antonio y Rafa y condiciona lo que Lucía recibe. Se ha investigado por separado en el documento **«FOOD4ALL · Investigación · Recogida de productos de los vendedores»**. Las conclusiones que afectan al sitio son:

- Los food hubs trabajan con **ciclos de pedido cerrados**: se cierra el pedido, el vendedor prepara, se recoge y se entrega en días fijos \[5\]\[9\].
- En el caso real de Wisconsin, los vendedores necesitan horas para preparar y las esperas son el principal problema de la recogida, por lo que conviene un aviso de «pedido listo» y franjas con margen \[4\].
- Market Wagon hace que el vendedor lleve su parte al hub; FOOD4ALL se diferencia al recoger en origen, lo que concentra el coste en la plataforma. Red Tomato dejó de hacerlo todo por su cuenta porque frenaba su crecimiento \[5\]\[7\].
- Compartir transporte reduce coste y emisiones, según el estudio de Manchester \[6\].
- En España, el transporte de alimentos exige cumplir higiene del transporte (Reglamento 852/2004), vehículos ATP para perecederos y reglas específicas para huevos y lácteos.

Estas conclusiones justifican, con los IDs de B4, los requisitos RF-07.2, RF-07.3, RF-07.4-03 («Listo para recoger»), RF-08.1 y RF-08.2. El hallazgo de las esperas en origen [4] es la base del plazo de confirmación del vendedor (D-04) y del aviso «pedido listo» (N-HUB-01).

---

## 8. Síntesis y próximos pasos

|  | Lucía (estudiante) | Antonio (vendedor) | Rafa (operador) |
| --- | --- | --- | --- |
| Rol | Compra | Vende | Recoge, consolida y entrega |
| Qué busca | Ahorrar y comer bien con poco esfuerzo | Más clientes y menos merma sin gestionar envíos | Rutas fiables y pedidos completos |
| Mayor miedo | Pagar más o recibir producto en mal estado | Perder margen por la comisión | Esperas y producto no listo |
| Mayor ganancia | Una compra planificada y una sola entrega | Un canal nuevo sin logística propia | Franjas fiables y aviso de «listo» |

Tres ideas se repiten en los mapas:

- **Falta de tiempo y de control.** Lucía no tiene tiempo para planificar, Antonio para ventas online y envíos, y Rafa necesita ventanas de tiempo fiables.
- **La confianza.** Lucía necesita fiarse del origen y de la cesta del asistente, Antonio de la comisión y del trato a su producto, y Rafa de que el pedido esté listo cuando llega.
- **La recogida en origen** une a vendedor y operador y condiciona la experiencia del cliente.

**Próximos pasos**

1. Hecho en la v2: los requisitos de la tabla 6.2 están incorporados en B4 con los IDs vigentes.
2. Convertir los criterios de aceptación en pruebas para el Hito 5 (columna «Prueba» de la matriz de trazabilidad).
3. Contrastar las personas con entrevistas a estudiantes y vendedores y ajustarlas si es necesario.
4. Diseñar las pantallas de cada recorrido en la zona de comprar, la de vender y el panel de operación.

---

## 9. Referencias

&#91;1\] Equipo FOOD4ALL. *FOOD4ALL, documento maestro del proyecto* (`food4all/prompts/2026-10-08-02-documento-maestro.md`) (secciones 4 a 7, 14 a 15, 20, 25, 34, 39 y 49). Documento interno, 2026.

&#91;2\] Ministerio de Agricultura, Pesca y Alimentación. *Informe de Consumo Alimentario 2025*. Nota de prensa de 30/07/2026. https://www.mapa.gob.es/es/alimentacion/temas/consumo-tendencias/panel-de-consumo-alimentario/ultimos-datos

&#91;3\] EUROSTUDENT 8 y Fundación CYD. *Resumen de resultados para España*. https://novaciencia.es/los-estudiantes-espanoles-dependen-mas-de-sus-familias-y-reciben-menos-apoyo-publico-que-los-europeos

&#91;4\] Santa González, R., White III, C. C., Miller, M., Lloyd, S. y Roberts-Turner, T. (2025). *From Farm to Food Hub: Analyzing Logistics in Cooperative Agricultural Systems*. IISE Annual Conference & Expo 2025. https://par.nsf.gov/servlets/purl/10640815

&#91;5\] Market Wagon. Cobertura de prensa: Edible Indy, *The Farmers Market Goes Online* (https://edibleindy.ediblecommunities.com/food-thought/farmers-market-goes-online); WSBT 22, *Get fresh produce delivered from local farmers right to your door* (https://wsbt.com/news/business/get-fresh-produce-delivered-from-local-farmers-right-to-your-door); y reseña de un competidor, Homegrown, *MarketWagon alternative* (https://findhomegrown.com/blog/marketwagon-alternative).

&#91;6\] University of Manchester (2025). *Cheaper, fresher, greener: new research promises lower prices for local food*. https://www.manchester.ac.uk/about/news/cheaper-fresher-greener/

&#91;7\] Red Tomato. *Food Hub Logistics*. https://redtomato.org/regional-supply-chain/logistics

&#91;8\] Genbeta. *La Colmena que dice Sí llega a España para conectar a agricultores con consumidores*. https://www.genbeta.com/web/la-comena-que-dice-si-llega-a-espana-para-conectar-a-agricultores-con-consumidores

&#91;9\] Local Line. *Vendor Pickup vs. Central Fulfillment*. https://www.localline.co/blog/food-hub-packing-workflows

&#91;10\] Equipo FOOD4ALL. *Sitio web de FOOD4ALL: zona de compra, zona de vendedores, panel de vendedor y administración* (código del proyecto, octubre de 2026).

---

## 10. Mapa de trazabilidad de las personas

De cada necesidad de las personas al proceso de B4, a la ficha (subrequisito) que más la cubre, a la historia y a un criterio de aceptación. La matriz completa, con todos los subrequisitos, está en `FOOD4ALL_matriz_trazabilidad.md`.

| Persona | Necesidad | Proceso (B4) | Ficha principal | Historia | Criterio de ejemplo |
| --- | --- | --- | --- | --- | --- |
| Lucía | N-PLA-01 Saber qué comprar y comer | RF-12, RF-15 | RF-12.2 Generación de la cesta | US-08 | RF-12.2-01 |
| Lucía | N-PLA-02 Controlar el gasto | RF-05, RF-12 | RF-05.5 Presupuesto | US-08 | RF-05.5-01 |
| Lucía | N-CAR-01 Varios vendedores, un pedido | RF-05, RF-06 | RF-05.2 Vista del carrito agrupada | US-04, US-05 | RF-05.2-01 |
| Lucía | N-ENT-01 Una sola entrega | RF-06, RF-08, RF-09 | RF-09.2 Pantalla de seguimiento | US-06, US-12 | RF-09.2-01 |
| Lucía | N-CAD-01 Caducidades y desperdicio | RF-03, RF-12 | RF-03.2 Información obligatoria | US-08 | RF-03.2-03 |
| Lucía | N-IA-01 Asistente sencillo | RF-12 | RF-12.6 Diseño del asistente | US-08 | RF-12.6-01 |
| Lucía | N-CAT-01 Confiar en origen y calidad | RF-03, RF-04 | RF-04.5 Ficha de producto | US-03, US-10 | RF-04.5-02 |
| Antonio | N-VEN-01 Clientes nuevos | RF-02, RF-15 | RF-02.6 Datos del negocio y perfil público | US-10 | RF-02.6-02 |
| Antonio | N-VEN-02 Vender sin web ni envíos | RF-03, RF-16 | RF-03.6 Stock y disponibilidad | US-02 | RF-03.6-01 |
| Antonio | N-VEN-03 Reducir la merma | RF-04 | RF-04.9 Etiquetas (V2) | — | RF-04.9-02 |
| Antonio | N-VEN-04 Qué preparar y cuándo | RF-07, RF-16 | RF-16.1 Inicio del panel | US-11, US-15 | RF-16.1-02 |
| Antonio | N-VEN-05 Cobrar con transparencia | RF-17 | RF-17.2 Liquidación (V2) | US-16 | RF-17.2-02 |
| Antonio | N-VEN-06 Requisitos de alta claros | RF-02 | RF-02.1 Página «Quiero vender» | US-02 | RF-02.1-03 |
| Rafa | N-HUB-01 Rutas y franjas fiables | RF-07, RF-08 | RF-08.1 Ruta de recogida | US-12 | RF-08.1-01 |
| Rafa | N-HUB-02 Cadena de frío | RF-08 | RF-08.3 Empaquetado consolidado | US-12 | RF-08.3-02 |
| Rafa | N-HUB-03 Verificar y resolver faltas | RF-07, RF-08 | RF-08.2 Recepción y verificación | US-11, US-12 | RF-08.2-02 |
