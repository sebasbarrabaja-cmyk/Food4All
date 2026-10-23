# Recorridos por la competencia de Food4All

23/10/2026 · Los hace Christina (el Claude de mikoshi) por encargo de Melchizedek (`PARA-CHRISTINA-competencia.md`).

**Cómo se hizo:** navegador automatizado PinchTab con Chrome for Testing 155.0.8059.39, ventana de 1440×900, Linux (WSL2), conexión desde España. Cookies: solo las necesarias («Denegar») cuando se podía elegir. Sin cuenta, sin datos personales y sin llegar a pagar. La fecha, hora y URL de cada captura están también en `registro.tsv`.

**Dirección usada:** el código postal 29010 solo no basta en las webs que piden una dirección completa. En ese caso se eligió la sugerencia de la propia web **«Facultad de Ciencias, Bulevar Louis Pasteur, 29010 Málaga»** (Glovo la guarda como «Bulevar Louis Pasteur, 31»). Es un edificio público de la UMA, encaja con el caso del estudiante y no es una dirección personal.

---

## Glovo
- Fecha y hora: 23/10/2026 15:14–15:23 · CP: 29010 (Facultad de Ciencias, UMA); para el #7, también 29018 («El Palo, Málaga-Este») · Navegador: Chrome for Testing 155 a 1440 px
- Recorrido completado hasta: **bloqueado en «Ir al pago»**, que lleva al inicio de sesión (teléfono por SMS o WhatsApp, Google, Facebook o correo). Se ve el catálogo, la búsqueda, la ficha y el carrito sin cuenta.
- Entrada: el campo de dirección de la portada no aceptó texto desde el navegador automatizado. Se entró por la página de ciudad `/es/es/malaga` → Supermercados → Carrefour. La dirección se pidió al **abrir la primera ficha de producto** (ventana «¿Dónde hay que hacer la entrega?»), y con el 29010 se eligió la sugerencia de la Facultad de Ciencias.

| Comprobación | Observado (tal cual aparece) | Captura | Verificado |
|---|---|---|---|
| Carrito con varios vendedores | **Un carrito por tienda.** El panel vacío dice: «Cuando añadas productos **de un establecimiento**, aparecerán aquí». Con un tomate de Carrefour en su carrito, al entrar en Eroski su panel «Tu pedido» sale vacío. Al añadir un tomate de Eroski, ese carrito solo tiene el de Eroski (1,89 €). Al volver a Carrefour sigue su carrito (2,80 €). **No sale ningún mensaje ni aviso**: cada tienda guarda su carrito por separado y cada una tiene su propio «Ir al pago» | glovo-03, glovo-08, glovo-10, glovo-11, glovo-12 | Sí |
| Pedido mínimo | En las preguntas frecuentes de la tienda: «Sí, Carrefour tiene un valor mínimo de pedido. Pero no te preocupes: si no llegas al mínimo, podrás pagar un recargo para que tu glovo se entregue igualmente». **No pone la cifra.** «Información sobre los recargos» lleva al inicio de sesión | glovo-08 (texto de la página), glovo-09 | Existe: Sí · Cifra: No verificado |
| Coste de envío | Carrefour con la dirección de la UMA (29010): «~~2,99 €~~ Gratis», «15-25′». La misma tienda desde El Palo (29018): «~~6,99 €~~ Gratis», «25-40′». Eroski desde la UMA: «~~2,99 €~~ Gratis», «15-25′». Sin dirección, Carrefour mostraba «~~2,99 €~~ Gratis» y «-» en el tiempo. Lo de «Gratis» es una promoción; no se ve por qué se aplica | glovo-06, glovo-14, glovo-10, glovo-03 | Sí |
| Franja u hora de cierre | No se ve elección de franja: solo un tiempo estimado («15-25′») | glovo-06 | No (no hay franja hasta el pago; lo que haya después del inicio de sesión: No verificado) |
| Si falta un producto | No aparece en la tienda ni en el carrito | — | No verificado |
| Cancelación | No aparece en la tienda ni en el carrito | — | No verificado |
| Recomendaciones / IA | En la ficha del producto: carrusel «**Otros también compraron**» (plátano, agua, zanahoria, barra de pan, huevos, cebolla…). No explica nada más que ese título | glovo-07 | Sí |
| Información del vendedor | La ficha solo tiene el nombre, el precio y la foto; **nada del vendedor ni del origen**. La tienda tiene logo, % de recomendación («99%»), tiempo, envío y botón (i) | glovo-07, glovo-06 | Sí |
| Barreras | Dirección: al abrir la primera ficha. Cuenta: en «Ir al pago» y en «Información sobre los recargos». La app se anuncia, pero la web deja llegar al carrito | glovo-05, glovo-09, glovo-13 | Sí |

- Hallazgos del comparativo: **#1 confirmado**: no se pueden juntar dos tiendas en el mismo carrito; cada tienda tiene el suyo y no sale ningún mensaje. **#7 confirmado**: el envío cambia con la dirección (2,99 € → 6,99 € en la misma tienda de Carrefour, y el tiempo de 15-25′ a 25-40′). **#8 confirmado en parte**: hay recomendaciones («Otros también compraron»); en qué se basan, solo por el título (**No verificado** más allá de eso).
- Notas:
  - El precio del tomate cambió al poner la dirección: 2,76 € sin dirección y 2,80 € con la de la UMA (glovo-04 y glovo-07). El % de recomendación de Carrefour también: 75 % sin dirección y 99 % con ella. **Inferencia:** el catálogo y los datos dependen del local que sirve esa dirección.
  - La tienda de Eroski tiene un botón «Mismos precios ›» (glovo-10). No se abrió.
  - En El Palo desaparece la etiqueta «Prime» de Carrefour (glovo-14 frente a glovo-06).

## Mercadona online
- Fecha y hora: 23/10/2026 15:24–15:30 · CP: **29010 sin servicio** en la web nueva; para ver el carrito se usó **46001 (Valencia)**, un desvío de la regla 3 (la web no propone ningún código de ejemplo) · Navegador: Chrome for Testing 155 a 1440 px
- Recorrido completado hasta: **bloqueado en «Tramitar pedido»**, que abre «Identifícate» (Google, Apple o correo). Con el 46001 se ven sin cuenta el catálogo, la búsqueda, la ficha y el carro.
- Con el 29010, `tienda.mercadona.es` dice: «El nuevo servicio de Mercadona online aún no está disponible en el código postal "29010"», con los botones «Ir a la web clásica», «Usar otro código postal» y «Avísame cuando esté operativa en mi zona». La **web clásica** (`telecompra.mercadona.es`) pide usuario y contraseña desde el primer paso y avisa: «Usted podrá conocer si ofrecemos servicio en su domicilio registrándose como cliente». Además muestra «Su navegador web está desactualizado» con Chrome 155 (el más reciente).
- Hay **dos textos oficiales** con condiciones, y en las cifras coinciden: las «Condiciones Generales del Supermercado online» de la web clásica (última actualización 11/02/2026) y los «Términos y condiciones» de la web nueva (última actualización 05/06/2026). Están copiados en `textos/`.

| Comprobación | Observado (tal cual aparece) | Captura | Verificado |
|---|---|---|---|
| Carrito con varios vendedores | Un solo vendedor (Mercadona). El carro dice «Carro · Entregar en 46001» | mercadona-12 | No aplica |
| Pedido mínimo | Web clásica: «siendo necesario un **mínimo de compra de 60€** (tarifa de servicio no incluida)». Web nueva: «igual o superior a sesenta (60 €) euros. La tarifa del Servicio de Preparación no está incluida en este importe mínimo». El carro de 0,26 € **no muestra ningún aviso del mínimo** antes de pedir la cuenta | mercadona-07, mercadona-14, mercadona-12 | Sí (en las condiciones oficiales) |
| Coste de envío | Web clásica: «La **tarifa de servicio es de 8,20€**, impuestos vigentes incluidos». Web nueva: «El precio final del servicio de manipulación y preparación de los productos (en adelante, el "Servicio de Preparación") será de 8,20€». El carro solo muestra «Total aproximado 0,26 €», sin la tarifa | mercadona-07, mercadona-14, mercadona-12 | Sí (en las condiciones oficiales) |
| Franja u hora de cierre | Web nueva: después de la dirección, «podrás seleccionar el día y la hora de entrega. El horario de entrega es de 7:00 horas a 22:00 horas de lunes a sábado […] no se realizarán entregas en días festivos». Web clásica: «Mercadona le ofrecerá siempre, el primer tramo de entrega disponible y siguientes» · «Su compra se entregará de Lunes a Sábado». Se elige **después de identificarse**; no se vio la pantalla | mercadona-07, mercadona-14 | Sí (en las condiciones) · la pantalla de tramos: No verificado |
| Si falta un producto | Web clásica: «En caso de no disponibilidad de algún producto, seguiremos las preferencias que usted nos haya indicado en la ficha de cliente (sustituir por similar o no servir). No se sustituirá un producto similar cuando el importe sea mayor al del producto solicitado». Web nueva: «MERCADONA no será responsable cuando el producto no se encuentre disponible […] se pondrá inmediatamente en contacto contigo a fin de encontrar la mejor solución»; si cambian el peso o las unidades, «te las reembolsará y efectuará un cobro de las nuevas» | mercadona-07, mercadona-14 | Sí (en las condiciones) |
| Cancelación | Web nueva: «derecho de anular o modificar el pedido hasta la fecha y hora indicada en el correo de confirmación», y no en festivos. Una vez empezada la preparación, si el pedido no se puede cobrar o entregar por causa del usuario, se paga la tarifa del servicio («no tendrá carácter reembolsable»). Desistimiento: 14 días naturales, salvo frescos, refrigerados y congelados (web clásica) | mercadona-14 | Sí (en las condiciones) |
| Recomendaciones / IA | En la ficha: «Productos relacionados» (otros tomates). En la portada: «Productos del momento» y «Novedades». No explica en qué se basan | mercadona-10, mercadona-01 | Sí |
| Información del vendedor | La ficha tiene la categoría («Fruta y verdura > Verdura»), el formato, el precio y el precio por kg. **No pone el origen ni el productor** | mercadona-10 | Sí |
| Barreras | Código postal obligatorio al entrar (ventana). 29010 sin servicio en la web nueva. La web clásica exige cuenta desde el principio. En la web nueva, al añadir el primer producto sale «¿Ya tienes cuenta?» (se puede saltar con «Ahora no») y «Tramitar pedido» exige cuenta | mercadona-02, mercadona-03, mercadona-04, mercadona-11, mercadona-13 | Sí |

- Hallazgos del comparativo: **#6 confirmado en la web oficial**: el mínimo de compra es de 60 € y la tarifa, de 8,20 €, en las dos versiones de las condiciones. Antes solo se tenía por la prensa. El nombre oficial es «tarifa de servicio» o «Servicio de Preparación», no «gastos de envío».
- Notas:
  - En la fecha del recorrido, Málaga 29010 **no tiene la web nueva**. **Inferencia:** el servicio nuevo se está desplegando por zonas, y en Málaga solo queda la web clásica, que exige registrarse para saber si llega a un domicilio.
  - Hubo un desvío de la regla 3: el carrito se vio con el 46001 porque con el 29010 no había forma de verlo sin cuenta. Está marcado en las capturas como `desvio`.

## Too Good To Go (web)
- Fecha y hora: 23/10/2026 15:31–15:33 · CP: no se pide (la web no tiene buscador ni ubicación) · Navegador: Chrome for Testing 155 a 1440 px · Cookies: «Solo las cookies necesarias»
- Recorrido completado hasta: **portada**. La web no tiene catálogo, búsqueda, packs, ficha ni carrito: todo remite a «Descarga la aplicación» o a «Registra tu negocio». No se pudo buscar «tomate».
- Páginas vistas: la portada, «Packs Sorpresa» (`/es/surplus-food-marketplace`, para negocios), «Cajas Despensa» (`/es/surplus-food-parcels`), las condiciones de uso de la app (`/es/legal/terms-and-conditions-using-the-app`, «En vigor a partir del 31 de julio de 2024»; texto en `textos/`) y la ayuda (`/es/support`, que solo deja elegir «Un usuario» o «Negocio»).

| Comprobación | Observado (tal cual aparece) | Captura | Verificado |
|---|---|---|---|
| Carrito con varios vendedores | No hay carrito en la web. En la app, según las condiciones, cada reserva es de un Pack Sorpresa de **una tienda** («Usted realiza una reserva de un Pack Sorpresa disponible en una Tienda que seleccione en la App») | tgtg-04 | No aplica (web) · app: No verificado |
| Pedido mínimo | No aparece | — | No verificado |
| Coste de envío / precio | Recogida en tienda, sin envío. Precio: «Los Packs Sorpresa se venden entre el **25% y el 50%** del valor original de su contenido» (página para negocios); en la portada: «Disfruta de lo bueno a mitad de precio o menos». Posibles tasas: «En algunos lugares […] una tasa de embalaje u otras tasas […] se mostrará(n) en la App». **Cajas Despensa**: «entregándose directamente al cliente», vendidas por la app (sin precio de envío en la web) | tgtg-02, tgtg-06, tgtg-03, tgtg-04 | Descuento: Sí · packs concretos: No verificado |
| Franja u hora de cierre | Hora de recogida fijada por la tienda: «Pásate por el local a la hora de recogida indicada» (portada) y «durante el periodo de tiempo indicado en la App» (condiciones, 3.5). La lista de tiendas se puede filtrar por «hora de recogida». En la web **no se ve ninguna hora concreta** | tgtg-06, tgtg-04 | Mecanismo: Sí · horas: No verificado |
| Si falta un producto | El contenido es sorpresa. Si la tienda no tiene excedente, «la Tienda puede cancelar la reserva», en general «hasta una (1) hora antes del comienzo de la hora acordada para la Recogida», o más tarde si hace falta. Reembolsos «a nuestra discreción» (5.6) | tgtg-04 | Sí (en las condiciones) |
| Cancelación | Por el usuario, en la app, «en cualquier momento antes de […] (i) la conclusión de la Recogida o (ii) el final de la hora de Recogida»; en la tienda, antes de recoger, comunicándolo por la app (3.6.1) | tgtg-04 | Sí (en las condiciones) |
| Recomendaciones / IA | No hay ninguna en la web. En la app, la lista de tiendas «se basa en varios criterios que puede filtrar, por ejemplo, por ubicación geográfica, hora de recogida» | tgtg-04 | Web: Sí (no hay) · app: No verificado |
| Información del vendedor | No hay fichas en la web. La tienda informa de ingredientes y alérgenos **en el momento de la recogida** (4.2) | tgtg-04 | Sí (en las condiciones) |
| Barreras | **Hace falta la app para todo**: «Elige tu favorito, reserva y paga directamente en la app». La app pide cuenta (3.2) y ubicación para listar por cercanía | tgtg-06, tgtg-04 | Sí |

- Hallazgos del comparativo: **#9 confirmado**: sin la app no se ve **nada** de los packs (ni cuáles hay, ni el descuento de cada uno, ni la hora de recogida). La web solo da el descuento general (25-50 %, «a mitad de precio o menos») y explica cómo funciona.
- Notas:
  - Las condiciones dicen que una reserva «no es una compra»: la compra se cierra en la recogida, entre el usuario y la tienda (3.3), y TGTG cobra en nombre de la tienda (5.2).
  - Las «Cajas Despensa» (excedentes de fabricantes con envío a domicilio) son otro modelo, cercano a Food4All; en la web no hay catálogo ni precios.

## Wetaca
- Fecha y hora: 23/10/2026 15:33–15:38 · CP: 29010 · Navegador: Chrome for Testing 155 a 1440 px · Cookies: «Rechazar»
- Recorrido completado hasta: **paso «Entrega»** del alta (barra «Platos → Entrega → Confirmar»), que pide «¿A quién le cocinamos?» con nombre y apellidos (o «Iniciar sesión»). Ahí se paró. Sin cuenta se puede elegir platos, añadir productos de proveedores, comprobar el código postal y ver el envío.
- Sin buscador: la carta es una lista con filtros («Preferencias», «Objetivo nutricional», «Calorías», «Composición del plato»). Para «tomate» se eligieron la «Dorada con salsa marinera, **tomatitos** y patatas» y, de «De nuestros proveedores», los «**Tomates Mar Azul - 750 g**».

| Comprobación | Observado (tal cual aparece) | Captura | Verificado |
|---|---|---|---|
| Carrito con varios vendedores | Un solo carrito («Mi nevera») mezcla los platos de Wetaca y los productos de la sección «**De nuestros proveedores**» («Productos premium para complementar tu comida de la semana»: huevos camperos, pulpo, tomates, pavo). Una entrega y un solo pago. **No se dice quién es el proveedor** | wetaca-06, wetaca-08 | Sí |
| Pedido mínimo | Barra inferior: «Pedido mínimo: 22,00€ · Añade más platos». Condiciones: «El precio del pedido mínimo para tramitar un envío a domicilio es de 22€». Con 14,38 € se pudo pasar a «complementos»; el paso de código postal solo apareció pasados los 22 € (26,52 €) | wetaca-04, wetaca-05, wetaca-17 | Sí |
| Coste de envío | Con el 29010: «¡Bravo! **Envío gratis** para ti esta semana» y «Continuar con envío gratis». Condiciones: «a lo que se añadirán los gastos de envío. Estos gastos de envío pueden variar en función de la ciudad, zona o dirección». La cifra normal **no aparece** | wetaca-10, wetaca-17 | Gratis esta semana: Sí · tarifa normal: No verificado |
| Franja u hora de cierre | **Cierre: miércoles a las 23:59** para cambiar, pausar o cancelar el pedido de esa semana («antes del miércoles a las 23:59»). Primera entrega para el 29010: «A partir del viernes 30 de Octubre». Franja: «todos los jueves recibirás un email confirmando tu pedido y, unos días antes de tu entrega, tendrás otro acotando la franja horaria». La dirección y la hora se cambian en «Próximas entregas» con la sesión iniciada. **No se ven ventanas concretas sin cuenta** | wetaca-13, wetaca-15, wetaca-19, wetaca-18 | Cierre: Sí · día: Sí · ventanas horarias: No verificado |
| Si falta un producto | No aparece. Para incidencias: «compensaciones adecuadas, que podrán incluir devoluciones parciales» (condiciones) y «Escríbenos» (preguntas frecuentes) | wetaca-17, wetaca-18 | Sustituciones: No verificado |
| Cancelación | «podrás cancelar tu suscripción con sólo un par de clicks sin ningún tipo de coste», en «Mi suscripción». Condiciones: si se cancela antes del miércoles a las 23:59, el efecto es el jueves de esa semana; si es después, en el ciclo siguiente | wetaca-16, wetaca-17 | Sí |
| Pausas | «podrás pausar la suscripción para no recibir comida durante unas semanas e incluso programar cuando quieres volver a recibirla», «sin explicaciones ni coste», en «Próximas entregas» | wetaca-13, wetaca-16 | Sí |
| Recomendaciones / IA | Etiquetas en los platos: «Especialidad», «Top valorado», «Nuevo». Al poner dos unidades de un plato: «Todas las semanas recibirás dos unidades de un plato similar a este» (proponen platos parecidos cada semana). Precio: «su precio si no haces cambios nunca superará el de tu primer pedido». **No explica cómo elige los platos parecidos** | wetaca-02, wetaca-04, wetaca-14 | Sí |
| Información del vendedor | Platos: descripción de cómo se cocinan, ingredientes con porcentajes, alérgenos («todos los platos se elaboran artesanalmente en el mismo obrador»), información nutricional y conservación. Producto de proveedor: solo la descripción y el precio, **sin nombre del proveedor ni origen** | wetaca-03, wetaca-07 | Sí |
| Barreras | No pide cuenta hasta «Entrega». El código postal se pide pasado el mínimo. Hace falta suscribirse para probarlo («¿Necesito suscribirme para probar Wetaca? Sí») | wetaca-09, wetaca-11, wetaca-14 | Sí |

- Hallazgos del comparativo: **#4 confirmado**: el cierre es el miércoles a las 23:59; se puede pausar varias semanas y programar la vuelta, y cancelar en «Mi suscripción» sin coste. Las **ventanas horarias** concretas no se ven sin cuenta (solo que la franja llega por correo unos días antes): **No verificado**.
- Notas:
  - Al pulsar una vez el «+» de las lentejas salió el aviso «Has añadido dos platos de Lentejas estofadas con chorizo» y la nevera acabó con 2 unidades. No se sabe si fue un doble clic del navegador automatizado: **No verificado**.
  - Precios del recorrido: nevera de 26,52 € → 18,56 € con el 30 % de bienvenida («DESCUENTOBIENVENIDA», −7,96 €), ya aplicado sin escribir el código.
  - **Inferencia:** la sección «De nuestros proveedores» es lo más parecido a Food4All entre los cuatro: varios productores en una sola entrega. Pero el productor no se ve.

---

## Resumen (4 imprescindibles, 23/10/2026)

| Competidor | Varios vendedores en un carrito | Pedido mínimo | Envío | Franja / cierre | Si falta algo | Cancelación | Recomendaciones / IA |
|---|---|---|---|---|---|---|---|
| Glovo | **No** (un carrito por tienda, sin aviso) | Sí, existe (cifra: No verificado) | Sí: 2,99 € / 6,99 € según la dirección (promo «Gratis») | No (solo tiempo estimado) | No verificado | No verificado | Sí («Otros también compraron») |
| Mercadona online | No aplica (un solo vendedor) | Sí: 60 € | Sí: 8,20 € («tarifa de servicio») | Sí (tramos de lunes a sábado, de 7 a 22 h, tras identificarse) | Sí (sustituir por similar o no servir; nunca más caro) | Sí (hasta la hora del correo de confirmación) | Sí («Productos relacionados») |
| Too Good To Go (web) | No aplica (sin carrito en la web) | No verificado | No aplica (recogida) | Sí (hora de recogida fijada por la tienda; horas concretas: No verificado) | Sí (la tienda cancela; reembolso a discreción) | Sí (hasta el fin de la recogida) | No (en la web) |
| Wetaca | **Sí** (platos + «De nuestros proveedores», una entrega) | Sí: 22 € | Sí: gratis esta semana para el 29010 (tarifa normal: No verificado) | Sí: cierre el miércoles a las 23:59 (ventanas: No verificado) | No verificado | Sí (sin coste; efecto según el miércoles a las 23:59) | Sí (platos «similares» cada semana, sin explicar) |

**Opcionales:** hechos después (abajo), con su resumen al final del documento.

**Fuera del encargo:** el `CLAUDE.md` de la carpeta pide guardar los prompts en `food4all/prompts/`, pero la regla 6 del encargo dice que no se toque `food4all/`, así que **no se ha guardado nada allí**. Melchizedek decide si lo apunta.

---

## Market Wagon (opcional)
- Fecha y hora: 23/10/2026 15:51–15:57 · CP: **29010 sin servicio** («Not In Your Area Yet. We don't have any delivery networks in your area... YET»); la web no propone ningún código de ejemplo (el campo solo pone «00000»), así que se usó **46204 (centro de Indianápolis, Indiana)**, elegido por Christina porque ahí está la sede de la empresa · Navegador: Chrome for Testing 155 a 1440 px
- Recorrido completado hasta: **checkout**, que abre «Guest Checkout» (nombre, apellidos, correo y contraseña) o «Sign-in here». Sin cuenta se puede buscar, ver la ficha, llenar el carrito con dos productores y elegir el día de entrega. La ventana de bienvenida pide el correo, pero es opcional («Email address (optional)»).
- Mercado asignado: «Central Indiana (Tuesday)».

| Comprobación | Observado (tal cual aparece) | Captura | Verificado |
|---|---|---|---|
| Carrito con varios vendedores | **Sí.** «Tomatoes-Slicing- ~1lb» de **Priest Family Farm** (5,99 $) y «Tomatoes - Red- 1 lb., slicing» de **Shrock Family Farm** (4,99 $) en el mismo carrito: «$10.98 · Checkout», con una sola fecha de entrega. Sin ningún aviso. Términos, «1. Multiple Vendors»: «may be a single order which consolidates transactions between you and any number of multiple vendors» | marketwagon-07, marketwagon-16 | Sí |
| Pedido mínimo | Preguntas frecuentes: «There is no contract, no subscription, and **no minimum order** to receive delivery» | marketwagon-12 | Sí |
| Coste de envío | La cifra de envío normal **no aparece** sin cuenta. Suscripción opcional **Wagon Pass**: «a fixed monthly rate of **$13.95** or a yearly pass of **$139.95**» para el envío gratis. Añadir productos a un pedido abierto: «without incurring additional delivery fees» | marketwagon-15, marketwagon-11 | Envío por pedido: No verificado · Wagon Pass: Sí |
| Franja u hora de corte | Día de entrega a elegir: «Your market supports multiple delivery days! […] Select which day you'd like your items delivered: Tue Oct 27 / Thu Oct 29», con el aviso «some may be available on only one or the other day». Hora: «Typically, your order will arrive in mid-to-late afternoon. We are not able to provide precise arrival times». **No se ve hora de corte** | marketwagon-08, (respuesta «When will my order arrive?» vista en pantalla) | Día: Sí · hora de corte: No verificado |
| Si falta un producto | «If you do not receive a product or are not 100% satisfied with the quality of the product you've received, please let us know at support» | marketwagon-13 | Sí (solo dice que se contacte con soporte) |
| Cancelación | No aparece en las preguntas frecuentes ni en los términos | marketwagon-16 | No verificado |
| Recomendaciones / IA | Pestañas «Trending», «On Sale», «Popular», «New»; reseñas con estrellas en la ficha. En la ficha: «You've never ordered from this vendor before.» No hay recomendaciones explicadas | marketwagon-03, marketwagon-06 | Sí (no hay IA visible) |
| Información del productor | **En cada tarjeta y ficha**: nombre de la granja y condado («Priest Family Farm · Henry County, Indiana»), «From Priest Family Farm», origen «USA / INDIANA / HENRY COUNTY», etiquetas («Indiana Grown», «No Herbicide», «Non-GMO»), descripción escrita por el productor y reseñas con fecha. Las preguntas frecuentes dicen que dejan «the vendor to describe the process they use to raise or prepare their products» y que hay «a chat feature in the store that allows you to ask anything of the farmer» | marketwagon-05, marketwagon-06, marketwagon-14 | Sí |
| Barreras | Fuera de EE. UU. no hay servicio. Con un código postal válido no pide cuenta hasta el checkout | marketwagon-02, marketwagon-09 | Sí |

- Hallazgos del comparativo: **#2 confirmado**: un carrito y un pedido con varios productores y una sola entrega, también en los términos («Multiple Vendors»). **#3 confirmado en parte**: el productor se ve muy bien (nombre, condado, origen, prácticas, reseñas y chat). La **hora de corte**: **No verificado**; solo se ve que se elige el día de entrega (martes o jueves).
- Notas:
  - El texto de los términos (`terms-conditions.html`) no se pudo extraer: el escáner de seguridad de PinchTab lo bloqueó como posible manipulación («transaction-coercion pattern»; **Inferencia:** falso positivo por ser un contrato). Por eso la prueba es la captura `marketwagon-16`. No se desactivó el escáner.
  - En los términos aparecen los «Market Host» (puntos de recogida comunitarios): «If the address you specified for delivery is a community pickup location, sometimes referred to as a "Market Host"».
  - Las respuestas de las preguntas frecuentes solo se ven en pantalla, no en el texto de la página. Cada una tiene su captura (`marketwagon-11` a `-15`).

## Open Food Network (opcional) · instancia de España: Katuma
- Fecha y hora: 23/10/2026 15:57–16:02 · CP: **29010 y «Málaga» sin resultados** («Lo sentimos, no hay resultados para 29010» / «… para Málaga»); se eligió una tienda con «Pedidos abiertos» de la lista que muestra la web: **ALEKO (Vitoria-Gasteiz)** · Navegador: Chrome for Testing 155 a 1440 px
- Instancia: `openfoodnetwork.org` → «Spain and Portugal» → `app.katuma.org` («367 PRODUCTORAS · 153 TIENDAS»).
- Recorrido completado hasta: **checkout** (`/checkout/details`: «1 - Sus detalles · 2 - Método de pago · 3 - Resumen del pedido»), que pide correo, teléfono y dirección. **No exige cuenta**: se llega al pago como invitado. No se escribió nada.
- No había tomate (no se encontró en ALEKO). Se usaron dos productos básicos equivalentes de dos productoras: «Basotik (ogi txuria) / (pan blanco) 1 kg», **desde Basotik Valpuesta**, 5,00 €, y «Acelga multicolor, 1 Manojo 500 g», **desde Soilik.eus**, 1,80 €.

| Comprobación | Observado (tal cual aparece) | Captura | Verificado |
|---|---|---|---|
| Carrito con varios vendedores | **Sí.** Pan de Basotik Valpuesta y acelga de Soilik.eus en el mismo carrito de la tienda (hub) ALEKO: «Subtotal de productos 6'80 €», un solo pedido y una sola entrega. ALEKO lista 8 «productoras de ALEKO» | openfood-09, openfood-10, openfood-14 | Sí |
| Pedido mínimo | No aparece ningún mínimo: el carrito de 6,80 € pasa a «Validar» y al checkout | openfood-10, openfood-12 | Sí (sin mínimo en esta tienda) |
| Coste de envío | Checkout, «Información de envío»: «Entrega a domicilio JUEVES 17h-20h · 3'50 € · Entrega con bicicleta de carga en zona urbana de Vitoria-Gasteiz»; «Entrega a domicilio VIERNES 11h-13h · 3'50 €»; «Según acordado con productor/a · Gratis» | openfood-12 | Sí |
| Ciclo de pedido / cierre | **Ciclos con apertura y cierre:** «Los pedidos se cerrarán en 3 días» · «Listo para Jue 29 [17-19h] / Vie 30 [11h-13h]». Instrucciones de la tienda: «Los pedidos realizados antes del lunes a las 20:00 se entregarán los jueves a la tarde o viernes a la mañana de esa semana. Pasadas las 20.00 del lunes, los pedidos se procesarán la siguiente semana». La portada de Katuma lo explica así: «nosotros pedimos la comida en ciclos. Si encuentras un ciclo de pedido cerrado, vuelve a visitarlo pronto». Y la tienda: «Por favor debes elegir cuando quieres tu pedido, para poder ver qué productos hay disponibles» | openfood-06, openfood-04 | Sí |
| Cómo se elige el hub o punto de recogida | Lista de tiendas con buscador «por nombre o municipio», mapa y filtros «Entrega / Recoger» y «Tipo». Cada tienda muestra «Pedidos abiertos» y las «Opciones de entrega» (Recoger, Entrega). En el checkout, la recogida o entrega se elige entre las opciones de envío | openfood-03, openfood-05, openfood-12 | Sí |
| Si falta un producto | No aparece | — | No verificado |
| Cancelación | No aparece | — | No verificado |
| Recomendaciones / IA | No hay. Sí hay una «ETIQUETA AMBIENTAL» de la A a la E en cada producto de ALEKO, que explica en qué se basa: «el efecto sobre la biodiversidad, la huella de carbono y el uso de pesticidas» (con enlace a `transparency.aleko.eus`) | openfood-06, openfood-09 | Sí (sin IA; etiqueta explicada) |
| Información del productor | Cada producto dice «desde» y el nombre de la productora con enlace, más la descripción. La pestaña «Productoras» las lista todas | openfood-09, openfood-14 | Sí |
| Barreras | Ninguna tienda en Málaga o el 29010. Sin cuenta se llega hasta el checkout | openfood-04, openfood-12 | Sí |

- Notas:
  - La etiqueta ambiental es de esta tienda, no de OFN en general (**Inferencia**, por el enlace a `aleko.eus`).
  - En Katuma, cada tienda pone sus propios ciclos y envíos: lo observado es de ALEKO y **no se puede generalizar** a todas.

## Local Food Marketplace (opcional)
- Fecha y hora: 23/10/2026 16:03 · CP: no se pide · Navegador: Chrome for Testing 155 a 1440 px
- Recorrido completado hasta: **portada**. `localfoodmarketplace.com` redirige a `home.localfoodmarketplace.com`, que es la web comercial de un **software para granjas, food hubs y CSA** («Software for Farms, Food Hubs, and CSAs»), no una tienda.
- **No hay tienda de demostración pública**: la demo se pide con formulario («Get My Demo!», «Schedule a Demo Today!»). La página «Our Customers» lista clientes (Puget Sound Food Hub, Kansas City Food Hub, Western Montana Growers Cooperative, etc.) sin enlaces a sus tiendas desde esa página. Sus tiendas estarían en dominios propios, fuera del encargo y de la excepción firmada, así que no se abrieron.

| Comprobación | Observado | Captura | Verificado |
|---|---|---|---|
| Catálogo, carrito y punto de recogida | Sin tienda pública: no se pudo comprobar | localfood-01, localfood-02 | No verificado |
| Resto (mínimo, envío, franja, faltas, cancelación, IA, productor) | Depende de cada cliente que usa el software | — | No verificado |

- Notas: hay una página «Introducing Local Food Network» que solo lleva a un registro de webinar en Zoom (`localfood-03`). Ayuda para clientes en `localfoodmarketplace.zendesk.com` (no se abrió: es otro dominio).

## KnowEats (opcional)
- URL: **knoweats.com**. La lámina no la traía. La confirma la caja de la propia captura `docs/competencia/knoweats.png` («www.knoweats.com»), y Sebas la identifica como «la del xokas». Según la prensa, elxokas compró la empresa ([Directo al Paladar](https://www.directoalpaladar.com/actualidad-1/elxokas-compra-empresa-tapers-para-competir-wetaca-me-alegro-ellos-forma-alimentacion-mediocre), [Alicante Plaza](https://alicanteplaza.es/el-streamer-el-xokas-entra-en-la-empresa-nuciera-knoweats)); en la web no se comprobó.
- Fecha y hora: 23/10/2026 16:04–16:10 · CP: no se pide hasta el pago (no se escribió) · Navegador: Chrome for Testing 155 a 1440 px · Cookies: «Rechazar»
- Recorrido completado hasta: **pantalla de pago** (checkout de Shopify, `knoweats.com/checkouts/…`), con correo, dirección, «Métodos de envío» y «Pagar con tarjeta o Bizum». No exige cuenta («Iniciar sesión» es opcional). **No se escribió nada**: el envío y la fecha solo salen al poner la dirección («Ingresa tu dirección de envío para ver los métodos disponibles»).
- Recorrido: «Pedir una vez» (compra única) → «menú de esta semana» → plato con tomate: «**Albóndigas en salsa de tomate y curry**», 7,45 € → paso 2 «¿Quieres algo más?» (extras: pan y aceite) → paso 3 «Tu pedido» → pago.

| Comprobación | Observado (tal cual aparece) | Captura | Verificado |
|---|---|---|---|
| Carrito con varios vendedores | Un solo vendedor (cocina de KnowEats); los extras (pan, aceite, café) entran en el mismo pedido **sin nombre de productor** | knoweats-06, knoweats-07 | No aplica |
| Pedido mínimo | En el menú: «Te faltan 28,00€ para alcanzar el pedido mínimo» y «completa tu pedido mínimo de 28€ en este paso». Preguntas frecuentes: «El importe mínimo para poder validar el pedido es de **28€ (IVA incluido)** sin incluir los gastos de envío ni promociones». Hasta llegar al mínimo no aparece «Continuar» | knoweats-02, knoweats-04, knoweats-05, knoweats-11 | Sí |
| Coste de envío | «*Descuentos y envío calculados en la pantalla de pago». La cifra solo sale con la dirección. Política de envíos: cambiar la dirección con el pedido ya preparado cuesta «entre 4,90 € y 9,90 €» | knoweats-08, knoweats-09, `textos/knoweats-shipping-policy.txt` | Envío: No verificado |
| Franja u hora de cierre | Dos días de entrega, **viernes o lunes**. Preguntas frecuentes: «Si realizas tu pedido de jueves a domingo, podrás recibir tu pedido el viernes de la semana siguiente, si lo haces de lunes a miércoles, lo recibirás el lunes siguiente». Página «Sistema de envíos»: «de jueves a lunes […] el viernes de la semana siguiente o el lunes de la posterior, si lo haces de martes o miércoles, lo recibirás el lunes siguiente». Franjas: Madrid y Barcelona, «de mañana (de 9h a 15:30h) o de tarde (de 15h a 20h)»; resto de la península, solo de mañana. «No podemos asegurar una hora específica de entrega» | knoweats-11, knoweats-10 | Sí · **las dos páginas no coinciden** en los días de corte |
| Si falta un producto | No habla de sustituciones. Devoluciones: «Salvo falta de conformidad del producto, no se admiten devoluciones» | knoweats-12 | Sustituciones: No verificado |
| Cancelación | «El Cliente podrá solicitar la cancelación del pedido únicamente dentro de las **24 horas posteriores a la realización del pago**, directamente desde su cuenta en account.knoweats.com. Una vez transcurrido dicho plazo, no se admitirán cancelaciones» (política de reembolso). Portada: «Pausa, cancela o modifica fácilmente» (suscripción) | knoweats-12, knoweats-01 | Sí |
| Recomendaciones / IA | Etiquetas «equilibrado», «PREMIUM», «novedad»; macros por plato (peso, kcal, G, CH, P). Ningún sistema de recomendación visible | knoweats-02, knoweats-06 | Sí (sin IA) |
| Información del vendedor | Ficha del plato: descripción, peso, kcal, macros y pestañas «Ingredientes», «Información nutricional» y «Modo de empleo». Los extras (pan ecológico) **no dicen quién los hace** | knoweats-03, knoweats-07 | Sí |
| Barreras | Mínimo de 28 € para pasar del paso 1. Ninguna cuenta hasta el pago | knoweats-04, knoweats-09 | Sí |

- Notas:
  - El modelo es casi igual que el de Wetaca (táperes semanales, suscripción o compra única, envío en frío). Mínimo: KnowEats 28 € y Wetaca 22 €.
  - El pedido de prueba acabó con 4 platos (30,50 €), porque hicieron falta 2 más para llegar al mínimo (lasaña y una carrillera que entró al pulsar el primer «Añadir» de la lista).
  - Las respuestas de las preguntas frecuentes solo se ven en pantalla, no en el texto de la página.

---

## Resumen de los opcionales (23/10/2026)

| Competidor | Varios vendedores en un carrito | Pedido mínimo | Envío | Franja / cierre | Si falta algo | Cancelación | Recomendaciones / IA |
|---|---|---|---|---|---|---|---|
| Market Wagon (46204, EE. UU.) | **Sí** (dos granjas, una entrega; «Multiple Vendors» en los términos) | Sí: **no hay mínimo** | Envío por pedido: No verificado · Wagon Pass 13,95 $/mes | Día elegible (mar/jue); hora de corte: No verificado | Sí (avisar a soporte) | No verificado | No (solo Trending/Popular y reseñas) |
| Open Food Network · Katuma (ALEKO, Vitoria) | **Sí** (dos productoras en el carrito de un hub) | Sí: sin mínimo en ALEKO | Sí: 3,50 € (bici de carga) o gratis acordado con la productora | **Sí: ciclos** (cierre el lunes a las 20:00; listo jue 17-19 h / vie 11-13 h) | No verificado | No verificado | No (etiqueta ambiental A-E explicada) |
| Local Food Marketplace | No verificado (sin tienda pública) | No verificado | No verificado | No verificado | No verificado | No verificado | No verificado |
| KnowEats | No aplica (un solo vendedor) | Sí: 28 € | No verificado (solo con la dirección) | Sí: viernes o lunes; franjas 9-15:30 h (y 15-20 h en Madrid y Barcelona); el corte no coincide entre dos páginas | No verificado | Sí: 24 h tras el pago | No (etiquetas y macros) |

