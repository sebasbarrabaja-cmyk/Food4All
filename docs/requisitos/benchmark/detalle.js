// Segunda tanda: más detalle en los procesos del pedido y en los más finos.
module.exports = (R) => {
  R.proc('RF-02', 'Alta y verificación de vendedor');
  R.sub('RF-02.7', 'Diseño y comportamiento del formulario de alta');
  R('Mostrar el formulario en una tarjeta blanca de 720 px con dos columnas en ordenador y una en móvil.', 'Dada una pantalla de 1280 px, cuando se ve, entonces hay dos columnas.', 'M', 'MVP', ['BF70'], 'N-VEN-06');
  R('Agrupar los campos en tres bloques con título: Tu negocio, Contacto y Requisitos.', 'Dado el formulario, cuando se ve, entonces hay tres bloques.', 'S', 'MVP', [], 'N-VEN-06');
  R('Marcar los campos obligatorios con «(obligatorio)» en la etiqueta, no solo con asterisco.', 'Dado un campo obligatorio, cuando se lee la etiqueta, entonces dice «(obligatorio)».', 'M', 'MVP', [], 'N-VEN-06');
  R('Guardar el borrador del formulario en el navegador para no perderlo si se cierra la página.', 'Dado un formulario a medias, cuando vuelve, entonces sigue relleno.', 'S', 'MVP', [], 'N-VEN-06');
  R('Al fallar el envío, llevar el foco al primer campo con error y listar arriba los errores.', 'Dados 2 errores, cuando envía, entonces ve la lista y el foco en el primero.', 'M', 'MVP', [], 'N-VEN-06');
  R('Mostrar el botón «Enviar solicitud» en naranja, 48 px, con «Enviando…» mientras se procesa.', 'Dado un envío, cuando está en curso, entonces el botón está desactivado.', 'M', 'MVP', [], 'N-VEN-06');

  R.proc('RF-04', 'Búsqueda y consulta del catálogo');
  R.sub('RF-04.8', 'Catálogo en móvil y estados');
  R('En móvil, abrir los filtros en un panel desde abajo con el botón «Filtrar (n)».', 'Dados 2 filtros activos, cuando se ve el botón, entonces dice «Filtrar (2)».', 'S', 'V2', ['BF13'], 'N-CAR-01');
  R('Mantener los filtros y la posición al volver de una ficha al catálogo.', 'Dado un filtro y un scroll, cuando vuelve atrás, entonces conserva ambos.', 'S', 'MVP', ['BF13'], 'N-CAR-01');
  R('Mostrar marcadores grises de carga con la forma de la tarjeta mientras llegan los productos.', 'Dada una carga lenta, cuando espera, entonces ve las tarjetas grises.', 'C', 'V2', [], 'N-CAR-01');
  R('Si falla la carga, mostrar «No hemos podido cargar los productos» con el botón «Reintentar».', 'Dado un error de red, cuando ocurre, entonces ve el mensaje y el botón.', 'M', 'MVP', [], 'N-CAR-01');
  R('Reflejar búsqueda y filtros en la URL para poder compartirlos.', 'Dada la URL con ?cat=fruta, cuando se abre, entonces sale filtrado por fruta.', 'S', 'V2', [], 'N-CAR-01');
  R.sub('RF-04.9', 'Etiquetas y avisos en la tarjeta');
  R('Mostrar la etiqueta «Temporada» en oliva --olive y «Ecológico» con su sello cuando correspondan.', 'Dado un producto de temporada, cuando se ve, entonces lleva la etiqueta en #7D8A2E.', 'S', 'MVP', [], 'N-VEN-01');
  R('Mostrar «Aprovechamiento» en los productos con defecto estético y precio reducido.', 'Dado un producto de aprovechamiento, cuando se ve, entonces lleva la etiqueta.', 'C', 'V2', ['BF69'], 'N-VEN-03');
  R('Mostrar el aviso «Contiene tus alérgenos» en rojo si el cliente desactivó el filtro y el producto tiene uno de sus alérgenos.', 'Dado un alérgico al huevo sin filtro, cuando ve un producto con huevo, entonces aparece el aviso.', 'M', 'MVP', ['BF15'], 'N-CAT-02', { pos: 'Diferencial', just: 'Ninguno verificado avisa de los alérgenos del propio cliente en el catálogo.' });
  R('Mostrar «Quedan 3» cuando queden 3 unidades o menos.', 'Dadas 2 unidades, cuando se ve, entonces muestra «Quedan 2».', 'C', 'V2', ['BF73'], 'N-CAR-01');

  R.proc('RF-05', 'Carrito multi-vendedor');
  R.sub('RF-05.8', 'Diseño del carrito');
  R('Mostrar el carrito en dos columnas en ordenador: líneas a la izquierda (2/3) y resumen fijo a la derecha (1/3).', 'Dada una pantalla de 1280 px, cuando se ve, entonces el resumen sigue visible al hacer scroll.', 'M', 'MVP', ['BF24'], 'N-CAR-01');
  R('En móvil, mostrar el total y el botón «Pagar» en una barra fija abajo.', 'Dado un móvil, cuando hace scroll, entonces la barra sigue abajo.', 'S', 'V2', [], 'N-CAR-01');
  R('Separar los grupos de vendedor con tarjetas blancas con borde 1 px #DDD0B0, sin tarjetas anidadas.', 'Dados 2 vendedores, cuando se ve, entonces hay 2 tarjetas al mismo nivel.', 'M', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('Mostrar el botón «Pagar» naranja con el total: «Pagar 28,90 €», desactivado si no se llega al mínimo.', 'Dado un carrito bajo el mínimo, cuando se ve, entonces el botón está desactivado con el motivo.', 'M', 'MVP', ['BF25'], 'N-CAR-01');
  R('Mostrar el enlace «Seguir comprando» que vuelve al catálogo con la zona y filtros anteriores.', 'Dado el carrito, cuando pulsa el enlace, entonces vuelve al catálogo filtrado.', 'S', 'MVP', [], 'N-CAR-01');
  R('Ofrecer «Vaciar carrito» con confirmación.', 'Dado «Vaciar», cuando confirma, entonces el carrito queda vacío.', 'S', 'MVP', ['BF29'], 'N-CAR-01');
  R.sub('RF-05.9', 'Información de la entrega en el carrito');
  R('Mostrar la próxima franja disponible en el carrito: «Próxima entrega: jueves 18–20 h».', 'Dado el carrito, cuando se ve, entonces muestra la próxima franja.', 'S', 'MVP', ['BF47'], 'N-ENT-01');
  R('Mostrar la hora de cierre para esa franja con cuenta atrás si faltan menos de 2 horas.', 'Dado un cierre en 90 min, cuando se ve, entonces muestra «Cierra en 1 h 30 min».', 'C', 'V2', ['BF43'], 'N-PLA-01');
  R('Explicar con un icono de información por qué hay un solo envío aunque haya varios vendedores.', 'Dado el icono, cuando pasa el ratón, entonces explica la entrega consolidada.', 'S', 'MVP', ['BF49'], 'N-ENT-01');

  R.proc('RF-06', 'Checkout y pago único simulado');
  R.sub('RF-06.7', 'Diseño y navegación del checkout');
  R('Mostrar los tres pasos como acordeón: el actual abierto y los completados resumidos con «Cambiar».', 'Dado el paso Pago, cuando se ve, entonces Entrega aparece resumida con «Cambiar».', 'M', 'MVP', [], 'N-CAR-01');
  R('No avanzar de paso si hay errores; mostrar el error junto al campo.', 'Dada una franja sin elegir, cuando pulsa «Continuar», entonces ve «Elige una franja».', 'M', 'MVP', [], 'N-CAR-01');
  R('Conservar lo rellenado si el cliente vuelve al carrito y regresa al checkout.', 'Dada una franja elegida, cuando vuelve al carrito y regresa, entonces sigue elegida.', 'S', 'MVP', [], 'N-CAR-01');
  R('Reservar la franja elegida durante 15 minutos mientras se paga.', 'Dada una franja con 1 hueco, cuando otro cliente intenta elegirla en esos 15 min, entonces aparece completa.', 'S', 'V2', ['BF47'], 'N-CAR-01');
  R('Si cambia el precio o el stock durante el checkout, volver a Revisión con el aviso del cambio.', 'Dado un producto agotado durante el pago, cuando paga, entonces vuelve a Revisión con el aviso.', 'M', 'MVP', [], 'N-CAT-03');
  R('Mostrar en el checkout solo el logo y un enlace «Volver al carrito», sin el menú completo.', 'Dado /checkout, cuando se ve la cabecera, entonces solo están el logo y el enlace.', 'C', 'V2', [], 'N-CAR-01');
  R.sub('RF-06.8', 'Datos de facturación');
  R('Pedir NIF y razón social solo si el cliente marca «Necesito factura a nombre de empresa».', 'Dada la casilla marcada, cuando se ve, entonces aparecen esos campos.', 'C', 'V2', [], 'N-CAT-03');
  R('Validar el formato del NIF o NIE.', 'Dado un NIF con letra errónea, cuando envía, entonces ve «El NIF no es válido».', 'C', 'V2', [], 'N-CAT-03');

  R.proc('RF-07', 'División en subpedidos y confirmación del vendedor');
  R.sub('RF-07.5', 'Plazos y avisos al vendedor');
  R('Avisar al vendedor 2 horas antes de que venza el plazo de confirmación.', 'Dado un subpedido sin confirmar, cuando faltan 2 h, entonces llega el recordatorio.', 'S', 'MVP', ['BF50'], 'N-VEN-04');
  R('Si el vendedor no confirma en plazo, avisar al cliente de un posible retraso en ese grupo.', 'Dado un plazo vencido, cuando ocurre, entonces el cliente recibe el aviso.', 'M', 'MVP', [], 'N-HUB-03');
  R('Si el vendedor no tiene nada del subpedido, permitir «No puedo servir este pedido», que excluye todo su grupo y registra su reembolso de prueba.', 'Dado «No puedo servir», cuando confirma, entonces el grupo entero queda excluido y se registra el reembolso de prueba de su importe.', 'M', 'MVP', [], 'N-HUB-03');
  R('Contar las faltas por vendedor para su tasa de cumplimiento.', 'Dadas 3 faltas en 50 subpedidos, cuando se ve, entonces la tasa es 94 %.', 'S', 'V2', [], 'N-CAT-01');
  R.sub('RF-07.6', 'Pedido sin el grupo de un vendedor');
  R('Si un grupo se cancela entero, mantener el resto del pedido y recalcular la compra mínima sin cobrar recargo.', 'Dado un grupo cancelado que deja el pedido bajo el mínimo, cuando ocurre, entonces el pedido sigue sin recargo.', 'M', 'MVP', ['BF25'], 'N-HUB-03');
  R('Si se cancelan todos los grupos, cancelar el pedido y registrar el reembolso de prueba del total, envío incluido.', 'Dados todos los grupos cancelados, cuando ocurre, entonces el pedido pasa a Cancelado y el reembolso de prueba es igual al total pagado.', 'M', 'MVP', [], 'N-HUB-03');

  R.proc('RF-08', 'Recogida, consolidación en el hub y entrega');
  R.sub('RF-08.6', 'Aplicación del operador');
  R('Ofrecer al operador una vista móvil con la ruta del día y una casilla por parada.', 'Dada la ruta, cuando marca una parada, entonces queda con la hora.', 'S', 'V2', ['BF49'], 'N-HUB-01');
  R('Permitir escanear o escribir el número de subpedido para registrarlo.', 'Dado un número escrito, cuando se registra, entonces el subpedido pasa a Recogida.', 'S', 'V2', [], 'N-HUB-01');
  R('Mostrar al operador la conservación de cada bulto con texto e icono: «Refrigerado» en verde y «Ambiente» en gris (sin azules, DISENO.md).', 'Dado un bulto refrigerado, cuando se ve, entonces muestra «Refrigerado» con su icono.', 'S', 'V2', ['BF48'], 'N-HUB-02');
  R('Permitir fotografiar un bulto dañado al recogerlo y adjuntarlo a la incidencia.', 'Dado un bulto dañado, cuando lo fotografía, entonces la foto queda en la incidencia.', 'S', 'V2', [], 'N-HUB-03');
  R.sub('RF-08.7', 'Entrega al cliente');
  R('Avisar al cliente 30 minutos antes de la llegada.', 'Dado un reparto, cuando faltan 30 min, entonces llega el aviso.', 'S', 'V2', ['BF55'], 'N-ENT-01');
  R('Permitir al cliente indicar «Dejar a un vecino» o «Dejar en conserjería» con nombre.', 'Dada la indicación, cuando se entrega, entonces el repartidor la ve.', 'C', 'V2', [], 'N-ENT-01');
  R('No dejar productos refrigerados sin entregar en mano.', 'Dado un pedido con frío y nadie en casa, cuando ocurre, entonces no se deja en la puerta.', 'M', 'MVP', ['BF48'], 'N-HUB-02', { estado: 'Decidido' });
  R('Registrar la foto de la entrega cuando se deja en conserjería.', 'Dada una entrega en conserjería, cuando termina, entonces hay foto.', 'C', 'V3', [], 'N-ENT-01');

  R.proc('RF-09', 'Seguimiento del pedido y notificaciones');
  R.sub('RF-09.5', 'Plantillas de correo');
  R('Usar una plantilla de correo con el logo, colores de marca y texto alternativo en todas las imágenes.', 'Dado un correo, cuando se abre sin imágenes, entonces se entiende igual.', 'S', 'MVP', ['BF38'], 'N-ENT-01');
  R('Incluir en cada correo de pedido el número, el estado y un botón «Ver mi pedido».', 'Dado el correo de reparto, cuando se lee, entonces tiene esos tres elementos.', 'M', 'MVP', ['BF38'], 'N-ENT-01');
  R('Enviar los correos desde un dominio verificado (SPF y DKIM) para evitar el spam.', 'Dado un correo enviado, cuando se revisan las cabeceras, entonces pasa SPF y DKIM.', 'S', 'V2', [], 'N-CUE-01');
  R('No incluir datos de salud (alergias) en los correos.', 'Dado un correo de pedido, cuando se revisa, entonces no menciona alergias del cliente.', 'M', 'MVP', [], 'N-CUE-01');

  R.proc('RF-10', 'Incidencias, reembolsos y sustituciones');
  R.sub('RF-10.4', 'Diseño del formulario de incidencia');
  R('Mostrar la incidencia en 3 pasos: qué producto, qué pasó y qué solución prefieres.', 'Dado el formulario, cuando se abre, entonces muestra el paso 1 de 3.', 'M', 'MVP', ['BF58'], 'N-INC-01');
  R('Mostrar las fotos subidas en miniatura con opción de quitarlas.', 'Dada una foto, cuando pulsa «×», entonces se quita.', 'S', 'MVP', [], 'N-INC-01');
  R('Al enviar, mostrar «Hemos recibido tu incidencia. Te responderemos antes de <fecha y hora>».', 'Dada una incidencia el lunes a las 10:00, cuando la envía, entonces ve «antes del martes a las 10:00».', 'M', 'MVP', [], 'N-INC-01');
  R('Limitar a una incidencia abierta por producto y pedido.', 'Dada una incidencia abierta del mismo producto, cuando intenta otra, entonces ve la existente.', 'S', 'MVP', [], 'N-INC-01');
  R.sub('RF-10.5', 'Criterios de resolución');
  R('Aprobar automáticamente las faltas confirmadas por el hub, sin esperar a revisión.', 'Dada una falta registrada en el hub, cuando el cliente reclama, entonces se aprueba al momento.', 'S', 'V2', [], 'N-INC-01');
  R('Avisar al admin si un cliente supera 3 incidencias en 30 días.', 'Dada la cuarta incidencia, cuando se abre, entonces el admin recibe el aviso.', 'S', 'V2', [], 'N-INC-01');
  R('Reembolsar el envío si la incidencia afecta a más de la mitad del importe del pedido.', 'Dado un pedido de 30 € con 16 € afectados, cuando se resuelve, entonces se reembolsa también el envío.', 'C', 'V2', [], 'N-INC-01');

  R.proc('RF-11', 'Valoraciones de productos y vendedores');
  R.sub('RF-11.3', 'Diseño y reglas de la valoración');
  R('Mostrar las estrellas como botones accesibles con «1 de 5»… «5 de 5».', 'Dado el teclado, cuando elige 4, entonces el lector anuncia «4 de 5».', 'S', 'V2', ['BF63'], 'N-CAT-01');
  R('Permitir editar la valoración durante 7 días.', 'Dada una valoración de hace 3 días, cuando la edita, entonces se guarda.', 'C', 'V2', [], 'N-CAT-01');
  R('Ordenar los comentarios del perfil del vendedor del más reciente al más antiguo.', 'Dados 3 comentarios, cuando se ven, entonces el primero es el último publicado.', 'S', 'V2', ['BF63'], 'N-CAT-01');
  R('No permitir que el vendedor borre ni oculte valoraciones.', 'Dado un vendedor, cuando busca una opción de borrar, entonces no existe.', 'S', 'V2', [], 'N-CAT-03');
  R('Permitir al vendedor denunciar una valoración falsa para que la revise el admin.', 'Dada una denuncia, cuando se envía, entonces aparece en la cola del admin.', 'S', 'V2', [], 'N-CAT-01');

  R.proc('RF-12', 'Asistente de IA para generar la cesta');
  R.sub('RF-12.6', 'Diseño del asistente');
  R('Mostrar el asistente con opciones guiadas: botones de presupuesto (15, 25, 40 €) y días (2, 4, 7), y los campos de personas y tiempo para cocinar.', 'Dado el asistente, cuando se abre, entonces se ven los botones y los campos, sin texto libre.', 'S', 'MVP', ['BF67'], 'N-IA-01');
  R('Mostrar la conversación como mensajes: los del cliente a la derecha y los de la IA a la izquierda con la etiqueta «IA».', 'Dada una respuesta, cuando aparece, entonces está a la izquierda con la etiqueta.', 'S', 'MVP', [], 'N-IA-02');
  R('Mostrar el total de la cesta propuesta y lo que queda del presupuesto.', 'Dada una cesta de 23,40 € con 25 €, cuando se ve, entonces muestra «Te sobran 1,60 €».', 'S', 'MVP', [], 'N-PLA-02');
  R('Permitir empezar de nuevo con «Nueva cesta».', 'Dado «Nueva cesta», cuando lo pulsa, entonces se vacía la conversación.', 'S', 'MVP', [], 'N-IA-01');
  R('Si la petición no es de comida, responder «Solo puedo ayudarte con tu compra de comida».', 'Dado «hazme los deberes», cuando lo envía, entonces recibe esa respuesta.', 'C', 'V2', [], 'N-IA-02', { just: 'Solo aplica con texto libre (RF-12.1-03), que pasa a V2 (C-26).' });
  R.sub('RF-12.7', 'Reglas de la propuesta');
  R('Repartir la cesta entre al menos 2 vendedores cuando sea posible, sin encarecerla.', 'Dadas dos opciones de igual precio, cuando se genera, entonces se combinan vendedores.', 'C', 'V2', ['BF24'], 'N-VEN-01');
  R('Priorizar los productos de temporada y los de vida útil adecuada a los días pedidos.', 'Dados 7 días, cuando se genera, entonces no propone pescado fresco para el día 7.', 'S', 'MVP', [], 'N-CAD-01');
  R('Respetar la dieta guardada (vegetariana o vegana).', 'Dado un cliente vegano, cuando se genera, entonces no hay productos animales.', 'S', 'MVP', ['BF11'], 'N-PLA-01');
  R('Guardar las últimas 5 cestas generadas en «Mis cestas».', 'Dadas 6 cestas, cuando abre la lista, entonces ve las 5 últimas.', 'C', 'V2', [], 'N-PLA-01');

  R.proc('RF-14', 'Suscripción');
  R.sub('RF-14.2', 'Gestión de la suscripción');
  R('Mostrar en «Mi suscripción» el estado, la próxima cesta, la fecha de cobro y los botones Pausar y Cancelar.', 'Dado un suscriptor, cuando abre la página, entonces ve esos datos y botones.', 'C', 'V3', ['BF64'], 'N-PLA-02');
  R('Avisar 48 horas antes del cierre semanal para revisar la cesta propuesta.', 'Dado el cierre del miércoles, cuando es lunes, entonces llega el aviso.', 'C', 'V3', ['BF43'], 'N-PLA-02');
  R('Si no se revisa, enviar la cesta propuesta tal cual y cobrarla.', 'Dada una cesta sin cambios, cuando pasa el cierre, entonces se confirma.', 'C', 'V3', ['BF64'], 'N-PLA-02');
  R('Confirmar la cancelación por correo y mantener la ventaja hasta el fin del periodo pagado.', 'Dada una cancelación a mitad de mes, cuando ocurre, entonces el envío gratis sigue hasta fin de mes.', 'C', 'V3', ['BF66'], 'N-CAT-03');

  R.proc('RF-16', 'Panel del vendedor');
  R.sub('RF-16.4', 'Productos en el panel');
  R('Listar los productos con foto, nombre, estado (Publicado, Borrador, Retirado, Agotado) y stock.', 'Dado un borrador, cuando se ve la lista, entonces muestra el estado Borrador.', 'M', 'MVP', ['BF78'], 'N-VEN-02');
  R('Permitir cambiar el stock desde la lista sin abrir la ficha.', 'Dado el stock de 10, cuando lo cambia a 8 en la lista, entonces se guarda.', 'S', 'MVP', ['BF73'], 'N-VEN-02');
  R('Mostrar qué le falta a cada borrador para publicarse.', 'Dado un borrador sin alérgenos, cuando se ve, entonces dice «Faltan alérgenos».', 'M', 'MVP', ['BF72'], 'N-VEN-06');
  R('Permitir duplicar un producto para crear otro parecido.', 'Dado «Duplicar», cuando lo pulsa, entonces se crea un borrador con los mismos datos.', 'C', 'V2', [], 'N-VEN-02');
  R.sub('RF-16.5', 'Días de recogida');
  R('Permitir al vendedor marcar días sin recogida (vacaciones) con fecha de inicio y fin.', 'Dadas vacaciones del 1 al 7, cuando se guardan, entonces sus productos no se venden esos días.', 'M', 'MVP', [], 'N-VEN-04');
  R('Avisar de que hay pedidos en esas fechas antes de guardar las vacaciones.', 'Dado un pedido el día 3, cuando marca vacaciones, entonces ve el aviso.', 'M', 'MVP', [], 'N-VEN-04');

  R.proc('RF-19', 'Soporte y contacto');
  R.sub('RF-19.2', 'Bandeja de soporte del equipo');
  R('Reunir en el panel los mensajes de contacto, de vendedores y de incidencias en una bandeja.', 'Dado un mensaje de contacto, cuando llega, entonces aparece en la bandeja.', 'S', 'V2', ['BF89'], 'N-INC-01');
  R('Asignar cada mensaje a una persona del equipo y marcarlo como resuelto.', 'Dado un mensaje asignado, cuando se resuelve, entonces sale de pendientes.', 'S', 'V2', [], 'N-INC-01');
  R('Medir el tiempo de primera respuesta y mostrar la media semanal.', 'Dadas respuestas de 2 y 4 h, cuando se ve, entonces la media es 3 h.', 'C', 'V2', [], 'N-INC-01');

  R.proc('RNF-04', 'Usabilidad', 'RNF');
  R.sub('RNF-04.2', 'Consistencia visual');
  R('Usar Fraunces 600 en títulos y Figtree a 17 px con interlineado 1,6 en el texto.', 'Dada una revisión, cuando se inspeccionan los estilos, entonces se cumplen esas fuentes.', 'M', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('Reservar el naranja --accent #D9822B solo para lo que se pulsa.', 'Dada una revisión, cuando se buscan usos del naranja, entonces todos son botones o enlaces de acción.', 'M', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('No usar azules, morados ni degradados decorativos.', 'Dada una revisión, cuando se buscan esos colores, entonces no aparecen.', 'M', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('Usar radio de 10 px en tarjetas y forma píldora en botones y chips.', 'Dada una revisión, cuando se miden, entonces se cumplen los radios.', 'S', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('No usar emojis como iconos; solo iconos SVG de trazo de 1,6 px.', 'Dada una revisión, cuando se buscan emojis en la interfaz, entonces no hay.', 'M', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('Animar las respuestas al ratón entre 180 y 240 ms y las apariciones al hacer scroll en 600 ms.', 'Dada una revisión, cuando se miden, entonces las duraciones están en ese rango.', 'S', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });

  R.proc('RNF-03', 'Rendimiento', 'RNF');
  R.sub('RNF-03.3', 'Peso de la página');
  R('Mantener el JavaScript inicial de la portada por debajo de 200 KB comprimido.', 'Dada la compilación, cuando se mide, entonces el JS inicial es < 200 KB.', 'S', 'V2', [], 'N-CAR-01');
  R('Cargar las fuentes con font-display: swap para que el texto se vea desde el principio.', 'Dada una carga lenta, cuando empieza, entonces el texto se ve con la fuente de sistema.', 'S', 'MVP', [], 'N-CAR-01');
};
