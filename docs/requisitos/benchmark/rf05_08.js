// RF-05 Carrito · RF-06 Checkout · RF-07 Subpedidos · RF-08 Logística.
module.exports = (R) => {
  R.proc('RF-05', 'Carrito multi-vendedor');

  R.sub('RF-05.1', 'Añadir al carrito');
  R('Permitir añadir productos de cualquier vendedor de la zona al mismo carrito.', 'Dado un producto del vendedor A en el carrito, cuando añade uno del vendedor B, entonces el carrito tiene ambos.', 'M', 'MVP', ['BF24'], 'N-CAR-01', { estado: 'Decidido' });
  R('Mostrar el icono del carrito en la cabecera con un contador de unidades en un círculo naranja --accent.', 'Dados 3 productos, cuando se ve la cabecera, entonces el contador muestra 3.', 'M', 'MVP', [], 'N-CAR-01');
  R('Al añadir, mostrar durante 3 s el aviso «Añadido: <producto> de <vendedor>» con enlace «Ver carrito».', 'Dado un añadido, cuando ocurre, entonces aparece el aviso.', 'S', 'MVP', [], 'N-CAR-01');
  R('No permitir añadir productos de otra zona; si cambia de zona con productos, avisar «Tu carrito tiene productos de <zona>. ¿Vaciarlo?»', 'Dado un carrito de Málaga, cuando cambia a Sevilla, entonces ve la pregunta.', 'M', 'MVP', ['BF10'], 'N-CAR-01');
  R('Limitar la cantidad de cada producto al stock disponible del día de recogida.', 'Dado stock 4, cuando intenta poner 5, entonces el + se desactiva en 4.', 'M', 'MVP', ['BF73'], 'N-CAR-01');

  R.sub('RF-05.2', 'Vista del carrito agrupada');
  R('Mostrar el carrito en /carrito agrupado por vendedor, con el nombre del vendedor y su ciudad como cabecera de cada grupo.', 'Dados productos de 3 vendedores, cuando abre /carrito, entonces ve 3 grupos.', 'M', 'MVP', ['BF24'], 'N-CAR-01', { estado: 'Decidido', just: 'Solo Market Wagon y Open Food Network unen vendedores; los competidores españoles verificados no.' });
  R('Mostrar en cada línea: miniatura, nombre, formato, precio unitario, selector de cantidad, subtotal y botón «Quitar».', 'Dada una línea, cuando se ve, entonces contiene esos siete elementos.', 'M', 'MVP', ['BF29'], 'N-CAR-01');
  R('Mostrar el subtotal de cada vendedor al pie de su grupo.', 'Dados 2 productos de 3 € del vendedor A, cuando se ve, entonces su subtotal es 6,00 €.', 'M', 'MVP', [], 'N-CAR-01');
  R('Mostrar un único total del carrito con el desglose: productos, envío y total.', 'Dados 25 € de productos y envío de 3,90 €, cuando se ve, entonces el total es 28,90 €.', 'M', 'MVP', ['BF26'], 'N-CAR-01', { estado: 'Decidido' });
  R('Mostrar la nota «Recibirás todo en una sola entrega» bajo el total.', 'Dado un carrito con varios vendedores, cuando se ve, entonces aparece la nota.', 'M', 'MVP', ['BF49'], 'N-ENT-01');
  R('Con el carrito vacío, mostrar «Tu carrito está vacío» y los botones «Ver productos» y «Pedir una cesta a la IA».', 'Dado un carrito vacío, cuando abre /carrito, entonces ve el mensaje y los dos botones.', 'S', 'MVP', [], 'N-PLA-01');

  R.sub('RF-05.3', 'Cantidades');
  R('Cambiar la cantidad con los botones − y + o escribiendo el número.', 'Dado 2, cuando pulsa +, entonces pasa a 3 y se recalculan subtotal y total.', 'M', 'MVP', ['BF29'], 'N-CAR-01');
  R('Al poner la cantidad a 0 o pulsar «Quitar», eliminar la línea y mostrar «Producto quitado. Deshacer» durante 5 s.', 'Dado «Quitar», cuando pulsa «Deshacer», entonces la línea vuelve.', 'S', 'MVP', [], 'N-CAR-01');
  R('Recalcular los totales en menos de 300 ms tras cada cambio.', 'Dado un cambio de cantidad, cuando ocurre, entonces el total se actualiza en ≤ 300 ms.', 'S', 'MVP', [], 'N-CAR-01');

  R.sub('RF-05.4', 'Envío y compra mínima');
  R('Cobrar un único coste de envío por pedido, sea cual sea el número de vendedores.', 'Dados 4 vendedores, cuando se ve el total, entonces hay un solo concepto de envío.', 'M', 'MVP', ['BF26'], 'N-ENT-01', { estado: 'Decidido' });
  R('Exigir una compra mínima configurable por el admin (hipótesis inicial: entre 10 y 15 €).', 'Dado un mínimo de 12 € y 10 € en el carrito, cuando pulsa «Pagar», entonces no avanza.', 'M', 'MVP', ['BF25'], 'N-CAR-01', { estado: 'Hipótesis', pos: 'Mejora', just: 'Mercadona exige 50 €; un mínimo de 10–15 € encaja con el ticket medio de 19,4 € (F-01).' });
  R('Mostrar una barra de progreso hacia la compra mínima: «Te faltan 2,00 € para el mínimo».', 'Dados 10 € y un mínimo de 12 €, cuando se ve el carrito, entonces aparece ese texto.', 'M', 'MVP', ['BF25'], 'N-CAR-01');
  R('Mostrar el coste de envío antes del checkout, nunca por primera vez al pagar.', 'Dado el carrito, cuando se ve, entonces el envío ya figura en el desglose.', 'M', 'MVP', ['BF26'], 'N-CAT-03');

  R.sub('RF-05.5', 'Presupuesto');
  R('Si el cliente fijó un presupuesto, mostrar en el carrito «Llevas 24,10 € de tu presupuesto de 30 €».', 'Dado un presupuesto de 30 €, cuando el carrito suma 24,10 €, entonces ve ese texto.', 'S', 'MVP', [], 'N-PLA-02', { pos: 'Diferencial', just: 'Ningún competidor verificado compara el carrito con un presupuesto del cliente.' });
  R('Avisar en color --warning #B7791F cuando el carrito supere el presupuesto, sin impedir la compra.', 'Dados 32 € con presupuesto de 30 €, cuando se ve, entonces aparece «Te has pasado 2,00 € de tu presupuesto».', 'S', 'MVP', [], 'N-PLA-02', { pos: 'Diferencial' });

  R.sub('RF-05.6', 'Cambios de stock y precio');
  R('Comprobar stock y precio de cada línea al abrir el carrito y al pulsar «Pagar».', 'Dado un producto agotado después de añadirlo, cuando abre el carrito, entonces la línea aparece marcada.', 'M', 'MVP', ['BF73'], 'N-CAR-01');
  R('Marcar las líneas agotadas con «Ya no está disponible» y excluirlas del total.', 'Dada una línea agotada, cuando se ve el total, entonces no la suma.', 'M', 'MVP', [], 'N-CAR-01');
  R('Si cambió un precio, mostrar «El precio ha cambiado de 2,00 € a 2,20 €» en la línea.', 'Dado un cambio de precio, cuando abre el carrito, entonces ve el aviso.', 'M', 'MVP', [], 'N-CAT-03');

  R.sub('RF-05.7', 'Persistencia');
  R('Guardar el carrito de un cliente con sesión en su cuenta y mostrarlo en cualquier dispositivo.', 'Dado un carrito en el ordenador, cuando entra desde el móvil, entonces ve el mismo carrito.', 'M', 'MVP', ['BF28'], 'N-CAR-01');
  R('Guardar el carrito de un visitante sin sesión en el navegador durante 7 días.', 'Dado un visitante, cuando vuelve a los 5 días, entonces su carrito sigue.', 'S', 'MVP', ['BF28'], 'N-CAR-01');
  R('Al entrar, unir el carrito del navegador con el de la cuenta; si un producto está en ambos, quedarse con la cantidad mayor y avisar.', 'Dados 2 tomates en el navegador y 3 en la cuenta, cuando entra, entonces quedan 3 y ve el aviso.', 'S', 'MVP', ['BF28'], 'N-CAR-01');

  R.proc('RF-06', 'Checkout y pago único simulado');

  R.sub('RF-06.1', 'Acceso y resumen');
  R('Exigir sesión con correo verificado para pasar al checkout.', 'Dado un visitante, cuando pulsa «Pagar», entonces va a /entrar?volver=/checkout.', 'M', 'MVP', ['BF06'], 'N-CUE-01', { pos: 'Paridad', just: 'Mercadona, Wetaca y Market Wagon también exigen cuenta para comprar; ninguno verificado permite comprar como invitado.' });
  R('Mostrar el checkout en una sola página con tres pasos numerados: Entrega, Revisión y Pago.', 'Dado /checkout, cuando se carga, entonces se ven los tres pasos.', 'M', 'MVP', [], 'N-CAR-01');
  R('Mostrar a la derecha un resumen fijo con los grupos por vendedor, el envío y el total.', 'Dada una pantalla de 1280 px, cuando hace scroll, entonces el resumen sigue visible.', 'M', 'MVP', ['BF24'], 'N-CAR-01');

  R.sub('RF-06.2', 'Dirección y franja');
  R('Mostrar la dirección predeterminada y permitir elegir otra o añadir una nueva sin salir del checkout.', 'Dado «Añadir dirección», cuando la guarda, entonces queda seleccionada.', 'M', 'MVP', ['BF09'], 'N-ENT-01');
  R('Ofrecer días de entrega de los próximos 7 días y franjas de 2 horas entre 9:00 y 21:00 según la capacidad de la zona.', 'Dada una franja llena, cuando se ve, entonces aparece desactivada con «Completa».', 'M', 'MVP', ['BF42', 'BF47'], 'N-ENT-01', { estado: 'Hipótesis' });
  R('Mostrar la hora de cierre de cada franja: «Pide antes del martes a las 20:00».', 'Dada una franja, cuando se ve, entonces muestra su hora de cierre.', 'M', 'MVP', ['BF43'], 'N-PLA-01');
  R('Permitir indicaciones para el repartidor de hasta 200 caracteres.', 'Dados 201 caracteres, cuando escribe, entonces no se aceptan más.', 'S', 'MVP', [], 'N-ENT-01');

  R.sub('RF-06.3', 'Revisión de alérgenos y condiciones');
  R('Mostrar antes de pagar la lista de alérgenos de todo el pedido agrupada por producto.', 'Dado un pedido con pan y queso, cuando llega a Revisión, entonces ve «Gluten (pan)» y «Leche (queso)».', 'M', 'MVP', ['BF15'], 'N-CAT-02', { estado: 'Decidido', pos: 'Diferencial', just: 'Obligación del Reglamento 1169/2011 art. 14; ningún competidor verificado lo muestra en el pago.' });
  R('Si algún producto contiene un alérgeno guardado por el cliente, pedir confirmación expresa.', 'Dado un cliente alérgico al huevo y un producto con huevo, cuando avanza, entonces debe marcar «Sé que este producto contiene huevo».', 'M', 'MVP', [], 'N-CAT-02', { pos: 'Diferencial' });
  R('Avisar de que los productos perecederos no admiten desistimiento y los de despensa sí, durante 14 días.', 'Dado un pedido mixto, cuando llega a Revisión, entonces ve el aviso con los productos de cada tipo.', 'M', 'MVP', ['BF61'], 'N-CAT-03', { estado: 'Decidido' });
  R('Exigir la casilla «He leído y acepto las condiciones de compra» con enlace.', 'Dada la casilla sin marcar, cuando pulsa «Pagar», entonces no avanza.', 'M', 'MVP', [], 'N-CAT-03');

  R.sub('RF-06.4', 'Pago simulado');
  R('Ofrecer pago simulado con tarjeta, claramente marcado «Pago de prueba: no se cobra nada».', 'Dado el paso Pago, cuando se carga, entonces ve el aviso.', 'M', 'MVP', ['BF30'], 'N-CAT-03', { estado: 'Decidido' });
  R('Validar el número de tarjeta con el algoritmo de Luhn, la caducidad futura y el CVC de 3 dígitos.', 'Dada una caducidad pasada, cuando paga, entonces ve «La tarjeta ha caducado».', 'M', 'MVP', ['BF30'], 'N-CAR-01');
  R('Simular un rechazo con la tarjeta de prueba 4000 0000 0000 0002 y mostrar «El banco ha rechazado el pago».', 'Dada esa tarjeta, cuando paga, entonces ve el rechazo y el pedido no se crea.', 'M', 'MVP', [], 'N-CAR-01');
  R('Mostrar el botón «Pagar 28,90 €» con el importe exacto, en naranja --accent.', 'Dado un total de 28,90 €, cuando se ve el botón, entonces dice «Pagar 28,90 €».', 'M', 'MVP', [], 'N-CAR-01');
  R('Hacer un único cobro por el total, aunque el pedido tenga varios vendedores.', 'Dados 3 vendedores, cuando paga, entonces hay un solo cargo.', 'M', 'MVP', ['BF24'], 'N-CAR-01', { estado: 'Decidido' });
  R('Evitar cobros dobles: un segundo clic en «Pagar» durante el proceso no genera otro pedido.', 'Dado un doble clic, cuando termina, entonces hay un solo pedido.', 'M', 'MVP', [], 'N-CAR-01');
  R('Preparar la integración para PayPal y Bizum en una versión con pagos reales.', 'Dado el diseño, cuando se revisa, entonces los métodos de pago son intercambiables.', 'C', 'V3', ['BF31'], 'N-CAR-01');
  R('Estudiar aceptar tickets restaurante, que Glovo y Wetaca ya admiten.', 'Dada la versión con pagos reales, cuando se decide, entonces queda documentado si se admiten.', 'C', 'V3', ['BF32'], 'N-PLA-02');

  R.sub('RF-06.5', 'Confirmación');
  R('Tras pagar, mostrar /pedido/<número> con «¡Pedido confirmado!», número, franja, dirección y grupos por vendedor.', 'Dado un pago correcto, cuando termina, entonces ve esa página.', 'M', 'MVP', ['BF38'], 'N-CAR-01');
  R('Enviar un correo de confirmación con el mismo contenido y el enlace al seguimiento.', 'Dado un pedido, cuando se confirma, entonces llega el correo en menos de 2 minutos.', 'M', 'MVP', ['BF38'], 'N-CAR-01');
  R('Numerar los pedidos como F4A-AAAA-NNNNN (año y número correlativo).', 'Dado el primer pedido de 2026, cuando se crea, entonces su número es F4A-2026-00001.', 'M', 'MVP', [], 'N-CAR-01');
  R('Generar una factura en PDF por pedido con el desglose por vendedor, descargable desde «Mis pedidos».', 'Dado un pedido entregado, cuando pulsa «Factura», entonces descarga el PDF.', 'S', 'V2', [], 'N-CAT-03');

  R.sub('RF-06.6', 'Modificar o cancelar');
  R('Permitir modificar cantidades o franja hasta la hora de cierre de la franja.', 'Dado un pedido antes del cierre, cuando cambia la franja, entonces se guarda.', 'S', 'V2', ['BF40'], 'N-PLA-01');
  R('Permitir cancelar sin coste hasta la hora de cierre con el botón «Cancelar pedido» y confirmación.', 'Dada una cancelación antes del cierre, cuando confirma, entonces el pedido pasa a Cancelado y se registra un reembolso de prueba por el total.', 'M', 'MVP', ['BF41'], 'N-CAR-01', { pos: 'Paridad', just: 'Wetaca (hasta el miércoles a las 23:59), Mercadona (hasta la hora del correo de confirmación) y Open Food Network (ciclos con cierre) dejan cancelar o cambiar hasta un cierre (recorrido del 23/10/2026).' });
  R('Después del cierre, ocultar «Cancelar pedido» y mostrar «El pedido ya se está preparando».', 'Dado un pedido tras el cierre, cuando lo abre, entonces no ve el botón.', 'M', 'MVP', ['BF41'], 'N-CAR-01');
  R('Aplicar códigos promocionales en el checkout con el campo «¿Tienes un código?».', 'Dado un código válido del 10 %, cuando lo aplica, entonces el total baja un 10 %.', 'C', 'V2', ['BF35'], 'N-PLA-02');
  R('En la confirmación del pedido y en su correo, mostrar «Puedes cancelar sin coste hasta el <día> a las <hora>» con la hora de cierre de su franja.', 'Dado un pedido de la franja del jueves con cierre el martes a las 20:00, cuando se confirma, entonces la pantalla y el correo dicen «Puedes cancelar sin coste hasta el martes a las 20:00».', 'M', 'MVP', ['BF41'], 'N-CAT-03', { pos: 'Mejora', just: 'Mercadona lo dice en el correo de confirmación; Wetaca y Open Food Network solo en las condiciones o en las instrucciones de la tienda (recorrido del 23/10/2026).' });

  R.proc('RF-07', 'División en subpedidos y confirmación del vendedor');

  R.sub('RF-07.1', 'División');
  R('Al confirmar un pedido, crear un subpedido por vendedor con sus líneas, su subtotal y el mismo número de pedido más un sufijo (-A, -B…).', 'Dado un pedido de 3 vendedores, cuando se confirma, entonces hay 3 subpedidos F4A-…-A, -B y -C.', 'M', 'MVP', ['BF24'], 'N-CAR-01', { estado: 'Decidido' });
  R('Mantener el pedido global como unidad para el cliente y los subpedidos como unidad para cada vendedor.', 'Dado un pedido, cuando el cliente lo abre, entonces ve uno; y cada vendedor ve solo el suyo.', 'M', 'MVP', ['BF24'], 'N-VEN-04');

  R.sub('RF-07.2', 'Aviso y vista del vendedor');
  R('Avisar al vendedor por correo y en su panel de cada subpedido nuevo.', 'Dado un subpedido nuevo, cuando se crea, entonces el vendedor lo ve en «Pedidos recibidos» con la marca «Nuevo».', 'M', 'MVP', ['BF50'], 'N-VEN-04');
  R('Mostrar al vendedor solo su parte: productos, cantidades, día y franja de recogida; nunca datos del cliente.', 'Dado un subpedido, cuando lo abre el vendedor, entonces no ve nombre ni dirección del cliente.', 'M', 'MVP', [], 'N-CUE-01', { estado: 'Decidido' });
  R('Generar la hoja de preparación del día con todas las líneas por producto, imprimible.', 'Dado el día de recogida, cuando pulsa «Hoja de preparación», entonces ve el total por producto.', 'S', 'MVP', ['BF50'], 'N-VEN-04');

  R.sub('RF-07.3', 'Confirmar o avisar de faltas');
  R('Pedir al vendedor que confirme cada subpedido antes de 12 horas desde la hora de cierre.', 'Dado un subpedido sin confirmar a las 12 h, cuando vence, entonces el admin recibe una alerta.', 'M', 'MVP', [], 'N-VEN-04');
  R('Permitir al vendedor marcar una línea como «Falta» indicando cuántas unidades puede servir.', 'Dadas 4 pedidas y 2 disponibles, cuando marca la falta, entonces la línea queda en 2.', 'M', 'MVP', [], 'N-HUB-03');
  R('Permitir al vendedor proponer un sustituto solo de su catálogo y de precio igual o menor.', 'Dado un sustituto más caro, cuando lo propone, entonces no se permite.', 'S', 'V2', ['BF52'], 'N-HUB-03');
  R('Si el cliente no eligió preferencia (RF-07.3-09), pedirle que acepte o rechace el sustituto antes de la hora de corte (inicio de la franja de recogida del vendedor); sin respuesta, excluir la línea con el motivo «sin aceptación» y registrar su reembolso de prueba.', 'Dado un sustituto sin respuesta, cuando vence la hora de corte, entonces la línea se excluye, el registro muestra «sin aceptación» y el total baja una sola vez.', 'S', 'V2', ['BF52'], 'N-HUB-03', { pos: 'Mejora', just: 'Market Wagon prohíbe sustituir sin aprobación de la plataforma; FOOD4ALL pide la aprobación al propio cliente.' });
  R('Al confirmarse una falta, conservar el pedido global, recalcular el total simulado por la diferencia y registrar un reembolso de prueba (cambio de estado y de saldo, sin transferencia real) con fecha y autor.', 'Dado un subpedido de Ana con 4 tomates a 1 € y 2 disponibles, cuando confirma la falta, entonces solo su subpedido muestra 2 servidas, el total simulado baja 2,00 € una vez y el pedido global se conserva.', 'M', 'MVP', ['BF60'], 'N-HUB-03');
  R('Aceptar en una falta solo cantidades enteras entre 0 y la cantidad pedida, y solo en líneas del subpedido del propio vendedor.', 'Dada una línea de 4 unidades, cuando el vendedor indica 5 o −1, entonces ve «Indica un número entre 0 y 4» y no se guarda.', 'M', 'MVP', [], 'N-HUB-03');
  R('Tratar como la misma acción un segundo envío de la falta sobre la misma línea: no se vuelve a descontar ni a reembolsar.', 'Dada una línea ya marcada como falta, cuando el vendedor reenvía la misma acción, entonces ve «La falta ya está registrada» y el total no cambia.', 'M', 'MVP', [], 'N-HUB-03');
  R('No permitir declarar faltas después de que el operador registre la recogida; desde ese momento la diferencia la registra el hub al verificar (RF-08.2).', 'Dada la recogida ya registrada, cuando el vendedor intenta declarar una falta, entonces la acción está bloqueada con el aviso «El pedido ya se ha recogido. Avisa al equipo».', 'M', 'MVP', [], 'N-HUB-03');
  R('Dejar elegir al cliente al pagar, para todo el pedido o por producto, qué hacer si falta algo: «Sustituir por uno parecido» o «No servir». Con «No servir» no se le proponen sustitutos; con «Sustituir», el sustituto se acepta solo si es igual o más barato.', 'Dada la preferencia «Sustituir» y un sustituto de 0,90 € para una línea de 1,00 €, cuando el vendedor lo propone, entonces se acepta sin preguntar y se registra un reembolso de prueba de 0,10 €; dada «No servir», cuando falta, entonces la línea se excluye sin proponer sustituto.', 'S', 'V2', ['BF52'], 'N-PLA-02', { pos: 'Paridad', just: 'Mercadona deja elegir de antemano «sustituir por similar» o «no servir» y nunca sustituye por algo más caro (recorrido del 23/10/2026, mercadona-07).' });

  R.sub('RF-07.4', 'Preparación y etiqueta');
  R('Generar para cada subpedido una etiqueta imprimible con número de subpedido, vendedor, número de bultos y conservación (ambiente, refrigerado o congelado).', 'Dado un subpedido, cuando pulsa «Imprimir etiqueta», entonces obtiene un PDF de 100 × 60 mm.', 'M', 'MVP', ['BF50'], 'N-CAT-01');
  R('Incluir en la etiqueta el lote o la fecha de caducidad de cada producto.', 'Dado un producto con lote, cuando se imprime, entonces el lote aparece.', 'M', 'MVP', [], 'N-CAT-01', { estado: 'Decidido' });
  R('Permitir al vendedor marcar el subpedido como «Listo para recoger».', 'Dado «Listo», cuando lo marca, entonces el operador lo ve en su ruta.', 'M', 'MVP', [], 'N-HUB-01');

  R.proc('RF-08', 'Recogida, consolidación en el hub y entrega');

  R.sub('RF-08.1', 'Ruta de recogida');
  R('Generar cada día la lista de vendedores a visitar con dirección, franja de recogida y subpedidos.', 'Dados 6 subpedidos de 4 vendedores, cuando se genera la ruta, entonces tiene 4 paradas.', 'M', 'MVP', ['BF49'], 'N-HUB-01');
  R('Ordenar las paradas por cercanía empezando por el hub.', 'Dadas 4 paradas, cuando se ordena, entonces la primera es la más cercana al hub.', 'S', 'V2', [], 'N-HUB-01');
  R('Registrar en cada parada la hora de recogida y los bultos recogidos.', 'Dado un bulto menos de lo esperado, cuando lo registra, entonces se crea una incidencia.', 'M', 'MVP', [], 'N-HUB-01');

  R.sub('RF-08.2', 'Recepción y verificación en el hub');
  R('Registrar la llegada de cada subpedido al hub con hora y responsable.', 'Dado un subpedido recibido, cuando se registra, entonces su estado pasa a «En el hub».', 'M', 'MVP', ['BF49'], 'N-HUB-03');
  R('Comprobar línea a línea cada subpedido contra el pedido antes de empaquetar.', 'Dada una línea que no coincide, cuando se revisa, entonces se marca y se avisa al admin.', 'M', 'MVP', ['BF51'], 'N-HUB-03', { pos: 'Mejora', just: 'Market Wagon declara que no revisa el contenido de cada caja; FOOD4ALL verifica en el hub.' });
  R('Comprobar el estado y la caducidad de los frescos y retirar los que no cumplan.', 'Dado un producto en mal estado, cuando se revisa, entonces se retira y se registra el reembolso de prueba de esa línea.', 'M', 'MVP', [], 'N-HUB-03');
  R('Registrar la temperatura de la cámara de frío al recibir refrigerados.', 'Dada una temperatura de 6 °C, cuando se registra, entonces salta una alerta.', 'S', 'V2', ['BF48'], 'N-HUB-02');
  R('Si un subpedido no ha llegado al hub a la hora de empaquetar su franja, avisar al cliente y dejarle elegir: «Esperar y recibirlo todo en la siguiente franja» o «Recibir ahora lo demás» (ese grupo se excluye con su reembolso de prueba).', 'Dado un pedido de dos vendedores con uno sin llegar al hub a la hora de empaquetar, cuando el operador lo marca «No ha llegado», entonces el cliente recibe el aviso con las dos opciones.', 'M', 'MVP', [], 'N-ENT-01', { pos: 'Mejora', just: 'Ningún competidor recorrido dice qué pasa si un vendedor llega tarde; Market Wagon y KnowEats no garantizan hora (recorrido del 23/10/2026).' });
  R('Si el cliente no responde al aviso antes del inicio de la franja, entregar lo demás a tiempo y excluir el grupo que falta con su reembolso de prueba y el motivo «llegó tarde al hub»; con «Esperar», el pedido entero pasa a la siguiente franja libre.', 'Dado el aviso sin respuesta al empezar la franja, cuando se empaqueta, entonces sale el pedido sin ese grupo, el total simulado baja una sola vez y el registro muestra «llegó tarde al hub».', 'M', 'MVP', [], 'N-ENT-01', { pos: 'Mejora', just: 'Ningún competidor recorrido dice qué pasa si un vendedor llega tarde; Market Wagon y KnowEats no garantizan hora (recorrido del 23/10/2026).' });

  R.sub('RF-08.3', 'Empaquetado consolidado');
  R('Agrupar todos los subpedidos de un pedido en una sola entrega, separando frío y seco.', 'Dado un pedido con yogur y pan, cuando se empaqueta, entonces hay una bolsa de frío y otra de seco, con el mismo número.', 'M', 'MVP', ['BF49', 'BF48'], 'N-ENT-01', { estado: 'Decidido' });
  R('Usar embalaje isotérmico y acumuladores de frío para los refrigerados.', 'Dado un refrigerado, cuando se empaqueta, entonces va en bolsa isotérmica.', 'M', 'MVP', ['BF48'], 'N-HUB-02');
  R('Imprimir la etiqueta de entrega con número de pedido, nombre, dirección, franja y número de bultos (1/2, 2/2).', 'Dados 2 bultos, cuando se etiquetan, entonces llevan «1/2» y «2/2».', 'M', 'MVP', [], 'N-ENT-01');
  R('Incluir en el paquete la hoja con la información obligatoria de los productos sin etiqueta.', 'Dada fruta a granel, cuando se entrega, entonces la hoja indica origen y vendedor.', 'M', 'MVP', [], 'N-CAT-02');

  R.sub('RF-08.4', 'Reparto y entrega');
  R('Asignar los pedidos empaquetados a rutas de reparto por franja.', 'Dada la franja 18–20 h, cuando se asigna, entonces todos sus pedidos están en una ruta.', 'M', 'MVP', ['BF45'], 'N-ENT-01');
  R('Registrar la entrega con hora y nombre de quien recibe.', 'Dada una entrega, cuando se registra, entonces el estado pasa a «Entregado».', 'M', 'MVP', ['BF53'], 'N-ENT-01');
  R('Si no hay nadie, dejar aviso, marcar «Entrega fallida» y ofrecer reprogramar en la siguiente franja libre.', 'Dada una entrega fallida, cuando el cliente abre el pedido, entonces ve «Elige otra franja».', 'M', 'MVP', [], 'N-ENT-01');
  R('Tras dos entregas fallidas, devolver el pedido al hub y reembolsar solo los productos de despensa.', 'Dadas dos fallidas, cuando ocurre, entonces se reembolsa la despensa y no los perecederos.', 'S', 'V2', [], 'N-CAT-03');
  R('Ofrecer recogida en un punto de la zona sin coste de envío.', 'Dada la opción «Recoger en punto», cuando la elige, entonces el envío es 0 €.', 'C', 'V3', ['BF46'], 'N-PLA-02', { estado: 'Pendiente' });
  R('Si el reparto no va a llegar dentro de la franja, avisar al cliente antes de que termine, con la nueva hora estimada, y dejarle mantenerla o elegir otra franja sin coste.', 'Dada una franja de 18 a 20 h y una llegada estimada a las 20:30, cuando el operador marca «Retraso», entonces el cliente recibe el aviso antes de las 20:00 y puede elegir otra franja.', 'M', 'MVP', [], 'N-ENT-01', { pos: 'Mejora', just: 'Market Wagon y KnowEats no garantizan hora y Wetaca acota la franja por correo; ninguno avisa de un retraso en el recorrido (23/10/2026).' });

  R.sub('RF-08.5', 'Retirada y excedentes');
  R('Permitir al admin retirar un lote de producto y avisar a todos los clientes que lo compraron.', 'Dado un lote retirado, cuando se confirma, entonces cada comprador recibe el aviso.', 'S', 'V2', [], 'N-CAT-01', { estado: 'Decidido' });
  R('Registrar los excedentes del hub y su destino: devolución, donación o desecho.', 'Dado un excedente, cuando se registra, entonces queda su destino y fecha.', 'S', 'V2', ['BF69'], 'N-CAD-01');
};
