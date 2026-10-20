// Fuentes consultadas y matriz de funciones de los competidores (benchmark).
// Valores: S = lo tiene · N = no lo tiene · P = parcial o con condiciones · ? = no verificado.
// Solo se marca S, N o P con una fuente abierta; lo que no se pudo comprobar queda como ?.

const COMPETIDORES = [
  ['MER', 'Mercadona online', 'Supermercado con compra online (marca única)'],
  ['GLO', 'Glovo', 'Delivery inmediato multicategoría'],
  ['TGTG', 'Too Good To Go', 'Packs de excedentes con recogida en local'],
  ['WET', 'Wetaca', 'Suscripción semanal de platos preparados'],
  ['MW', 'Market Wagon', 'Marketplace local multi-vendedor con entrega consolidada (EE. UU.)'],
  ['OFN', 'Open Food Network', 'Plataforma de tiendas y hubs de productores locales'],
];

const FUENTES = [
  ['S01', 'Glovo · Preguntas frecuentes (oficial)', 'https://glovoapp.com/docs/es/faq', 'Oficial', 'Alta'],
  ['S02', 'Glovo · Ficha de la app en App Store (descripción del desarrollador)', 'https://apps.apple.com/us/app/-/id951812684', 'Oficial', 'Media'],
  ['S04', 'Xataka · Haciendo la compra en la nueva tienda online de Mercadona (16/06/2018)', 'https://www.xataka.com/servicios/haciendo-la-compra-en-la-nueva-tienda-online-de-mercadona-esta-ha-sido-nuestra-experiencia', 'Prensa', 'Media (antigua)'],
  ['S05', 'Genbeta · Mercadona sube el precio del envío online (05/02/2025)', 'https://www.genbeta.com/actualidad/comprar-mercadona-internet-te-saldra-ahora-caro-compania-sube-precio-sus-envios-online', 'Prensa', 'Alta'],
  ['S06', 'Wetaca · Preguntas frecuentes (oficial)', 'https://wetaca.com/preguntas-frecuentes', 'Oficial', 'Alta'],
  ['S07', 'Market Wagon · Conditions of Use (oficial)', 'https://marketwagon.com/pages/conditions-of-use', 'Oficial', 'Alta'],
  ['S08', 'Market Wagon · Vendor Orientation (oficial, vendedores)', 'https://admin.marketwagon.com/dev/introduction.php', 'Oficial', 'Media (página de desarrollo)'],
  ['S09', 'Open Food Network · Guía: comprar y hacer un pedido (oficial)', 'https://guide.openfoodnetwork.org/shopping-with-open-food-network/shopping-and-placing-an-order', 'Oficial', 'Alta'],
  ['S10', 'Open Food Network · Guía: métodos de pago (oficial)', 'https://guide.openfoodnetwork.org/basic-features/shopfront/payment-methods', 'Oficial', 'Alta'],
  ['F-04', 'Comparativo interno de 10 empresas (Juan Antonio, adjunto en Asana)', 'esquema_comparativo_de_empresas_de_alimentaci_n.md', 'Interna', 'Baja (sin fuentes citadas)'],
];

// Páginas que no se pudieron abrir (bloqueo o error) y por eso no cuentan como fuente.
const NO_ABIERTAS = [
  ['Too Good To Go · FAQ y blog', 'https://toogoodtogo.com/en-ca/blog/faqs', 'Bloqueada (HTTP 429 y verificación de navegador)'],
  ['Mercadona · Atención al cliente', 'https://info.mercadona.es/es/atencion-al-cliente/preguntas-frecuentes', 'Bloqueada (HTTP 403)'],
  ['Market Wagon · FAQ', 'https://shop.marketwagon.com/faq', 'Se carga con JavaScript; sin contenido legible'],
];

const BF = {};
function bf(id, proceso, nombre, vals) {
  BF[id] = { id, proceso, nombre, vals };
}

// ---------- Cuentas y acceso (RF-01) ----------
bf('BF01', 'RF-01', 'Registro con correo y contraseña', {
  MER: ['S', 'S04', 'Pide nombre, correo y contraseña'], GLO: ['S', 'S01', 'Contraseña de la cuenta editable en el perfil'],
  WET: ['S', 'S06', 'Hay que iniciar sesión para gestionar entregas'], MW: ['S', 'S07', '«Sign in or register»'], OFN: ['S', 'S09', 'Cuenta OFN para ver pedidos'] });
bf('BF02', 'RF-01', 'Acceso con Google', {});
bf('BF03', 'RF-01', 'Acceso con Apple', {});
bf('BF04', 'RF-01', 'Acceso o verificación con código por SMS', { GLO: ['S', 'S01', 'Código de verificación por SMS'] });
bf('BF05', 'RF-01', 'Confirmación del correo al registrarse', { MER: ['S', 'S04', 'Correo de confirmación'] });
bf('BF06', 'RF-01', 'Comprar sin crear cuenta (invitado)', {
  MER: ['N', 'S04', 'Registro necesario para comprar (2018)'], WET: ['N', 'S06', 'Hay que suscribirse con datos'], MW: ['N', 'S07', 'Hay que registrarse para continuar'] });
bf('BF07', 'RF-01', 'Cambiar o recuperar la contraseña', { GLO: ['S', 'S01', 'Cambio de contraseña con aviso'] });
bf('BF08', 'RF-01', 'Ejercer derechos de datos y borrar la cuenta', { GLO: ['S', 'S01', 'Formulario gratuito en web o app'] });
bf('BF09', 'RF-01', 'Direcciones guardadas', { MER: ['S', 'S04', 'Guarda dirección y tarjeta'], OFN: ['S', 'S09', 'Autocompleta la dirección'] });
bf('BF10', 'RF-01', 'Comprobar cobertura por código postal o zona', { MER: ['S', 'S04', 'Código postal en la portada'], WET: ['P', 'S06', 'Península y Palma'] });
bf('BF11', 'RF-01', 'Preferencias y gustos del cliente', { WET: ['S', 'S06', 'Datos y gustos al suscribirse'] });

// ---------- Catálogo y búsqueda (RF-03, RF-04) ----------
bf('BF12', 'RF-04', 'Categorías y subcategorías', {
  MER: ['S', 'S04', 'Secciones y subcategorías'], GLO: ['S', 'S02', 'Categorías de tiendas'], OFN: ['S', 'S09', 'Por categoría o alfabético'], TGTG: ['N', 'F-04', 'Packs sorpresa'] });
bf('BF13', 'RF-04', 'Buscador de productos', { MER: ['S', 'S04', 'Por nombre o palabras'], OFN: ['S', 'S09', 'Por producto o productor'] });
bf('BF14', 'RF-04', 'Ingredientes en la ficha', {
  MER: ['P', 'S04', 'Solo ampliando la foto de la etiqueta'], OFN: ['S', 'S09', 'Ingredientes en el detalle'], MW: ['P', 'S08', 'Descripción obligatoria, sin campo de ingredientes'], TGTG: ['N', 'F-04', 'Contenido sorpresa'] });
bf('BF15', 'RF-04', 'Alérgenos visibles en la ficha', { OFN: ['S', 'S09', 'Alérgenos en el detalle'] });
bf('BF16', 'RF-04', 'Origen del producto', { MW: ['S', 'S08', 'Condado de origen obligatorio'], OFN: ['S', 'S09', 'Cómo se ha hecho'] });
bf('BF17', 'RF-04', 'Perfil e historia del productor', {
  OFN: ['S', 'S09', 'Historia del productor y contacto'], MW: ['S', 'S08', 'Página del vendedor'], MER: ['N', 'F-04', 'Marca única'], WET: ['N', 'F-04', 'Cocina propia'] });
bf('BF18', 'RF-04', 'Precio por unidad de medida', { MER: ['S', 'S04', 'Precio por kilo'], OFN: ['S', 'S09', 'Coste unitario por peso o volumen'] });
bf('BF19', 'RF-04', 'Desglose de a quién va cada euro', { OFN: ['S', 'S09', 'Gráfico de tarta junto al precio'] });
bf('BF20', 'RF-04', 'Productos a peso con importe ajustado', { MER: ['S', 'S04', 'Precio aproximado y ajuste tras pesar'], MW: ['N', 'S08', 'No admite peso variable; usa rangos'] });
bf('BF21', 'RF-04', 'Temperatura o conservación indicada', { MW: ['S', 'S08', 'Categoría de temperatura obligatoria'], WET: ['P', 'S06', 'Transporte en frío'] });
bf('BF22', 'RF-04', 'Favoritos o productos habituales', { MER: ['S', 'S04', '«Mis habituales»'] });
bf('BF23', 'RF-04', 'Varias tiendas o listas abiertas a elegir', { OFN: ['S', 'S09', 'Varias listas de pedido'] });

// ---------- Carrito y pago (RF-05, RF-06) ----------
bf('BF24', 'RF-05', 'Un carrito con productos de varios vendedores', {
  MW: ['S', 'S07', 'Un pedido consolida varios vendedores'], OFN: ['S', 'S09', 'Hubs multiproductor'],
  MER: ['N', 'F-04', 'Marca única'], GLO: ['N', 'F-04', 'Un pedido = un local'], TGTG: ['N', 'F-04', 'Un pack = un local'], WET: ['N', 'F-04', 'Cocina propia'] });
bf('BF25', 'RF-05', 'Pedido mínimo', { MER: ['S', 'S05', '50 €'] });
bf('BF26', 'RF-05', 'Coste de envío fijo independiente del importe', {
  MW: ['S', 'S07', 'Tarifa fija sea cual sea el pedido'], MER: ['S', 'S05', '8,20 € por envío'], GLO: ['N', 'S01', 'Varía con la distancia'] });
bf('BF27', 'RF-05', 'Envío gratis con suscripción', { GLO: ['S', 'S01', 'Glovo Prime'] });
bf('BF28', 'RF-05', 'El carrito se conserva al volver', { MER: ['S', 'S04', 'El carro seguía lleno tras la caída'] });
bf('BF29', 'RF-05', 'Editar el carrito antes de pagar', { MER: ['S', 'S04', 'Añadir, quitar, cambiar unidades'], OFN: ['S', 'S09', '«Edit Basket»'] });
bf('BF30', 'RF-06', 'Pago con tarjeta', {
  MER: ['S', 'S04', 'Solo tarjeta'], GLO: ['S', 'S01', 'Visa, Mastercard, Amex'], WET: ['S', 'S06', 'Visa, Mastercard, Amex'], MW: ['S', 'S07', 'Tarjeta'], OFN: ['S', 'S10', 'Stripe'] });
bf('BF31', 'RF-06', 'Pago con PayPal', { GLO: ['S', 'S02', 'PayPal'], MW: ['S', 'S07', 'PayPal'], OFN: ['S', 'S10', 'PayPal Express'], MER: ['N', 'S04', 'Solo tarjeta (2018)'] });
bf('BF32', 'RF-06', 'Pago con tickets restaurante', { GLO: ['S', 'S02', 'Vales de restaurante'], WET: ['S', 'S06', 'Pluxee, Ticket Restaurant, Cheque Gourmet'] });
bf('BF33', 'RF-06', 'Pago en efectivo', { GLO: ['P', 'S01', 'Según país'], OFN: ['S', 'S10', 'Efectivo o transferencia'], MER: ['N', 'S04', 'Solo tarjeta (2018)'] });
bf('BF34', 'RF-06', 'Cobro al preparar con importe final', { MER: ['S', 'S04', 'Se cobra al entrar en preparación'] });
bf('BF35', 'RF-06', 'Códigos promocionales', { GLO: ['S', 'S01', 'Sección «Código promocional»'] });
bf('BF36', 'RF-06', 'Propina', { GLO: ['S', 'S01', 'Opcional'] });
bf('BF37', 'RF-06', 'Saldo o crédito del cliente', { OFN: ['S', 'S10', 'Crédito aplicado al pagar'] });
bf('BF38', 'RF-06', 'Correo de confirmación del pedido', { OFN: ['S', 'S09', 'Página y correo de confirmación'] });
bf('BF39', 'RF-06', 'Comisiones de pago visibles', { OFN: ['S', 'S10', 'Calculadoras de comisión'] });
bf('BF40', 'RF-06', 'Modificar el pedido hasta una hora de cierre', {
  MER: ['S', 'S04', 'Hasta las 23:00'], WET: ['S', 'S06', 'Hasta el miércoles 23:59'], OFN: ['S', 'S10', 'Mientras el ciclo está abierto'], GLO: ['P', 'S01', 'Solo programados'] });
bf('BF41', 'RF-06', 'Cancelar sin coste antes de un punto', { GLO: ['S', 'S01', 'Hasta que un repartidor acepta (no comida)'], MER: ['S', 'S04', 'Anular hasta las 23:00'] });
bf('BF42', 'RF-06', 'Elegir día de entrega', {
  GLO: ['S', 'S01', 'Pedidos programados'], WET: ['S', 'S06', 'Día y franja'], MER: ['S', 'S04', 'Día siguiente'], MW: ['S', 'S07', '2–8 días o fecha de pre-pedido'], OFN: ['S', 'S09', 'Hora fija del ciclo'] });
bf('BF43', 'RF-06', 'Ventanas de pedido con cierre', { OFN: ['S', 'S09', 'Ciclos de pedido'], WET: ['S', 'S06', 'Cierre semanal'], MER: ['P', 'S04', 'Cierre diario a las 23:00'] });

// ---------- Logística (RF-07, RF-08) ----------
bf('BF45', 'RF-08', 'Entrega a domicilio', {
  MER: ['S', 'S04', 'A domicilio'], GLO: ['S', 'S02', 'A domicilio'], WET: ['S', 'S06', 'A domicilio'], MW: ['S', 'S07', 'Tarifa fija'], OFN: ['P', 'S09', 'Según método de la tienda'], TGTG: ['N', 'F-04', 'Recogida en el local'] });
bf('BF46', 'RF-08', 'Recogida en punto o hub', { MW: ['S', 'S07', 'Market Hosts'], OFN: ['S', 'S09', 'Recogida'], GLO: ['S', 'S02', 'Para llevar'], TGTG: ['S', 'F-04', 'Recogida a hora fija'] });
bf('BF47', 'RF-08', 'Franjas horarias de entrega', { MER: ['S', 'S04', 'Franjas de 1 h, 7–22 h'], WET: ['S', 'S06', 'Franja elegida'], GLO: ['P', 'S01', 'Pedido programado'] });
bf('BF48', 'RF-08', 'Cadena de frío en la entrega', { MW: ['S', 'S07', 'Embalaje aislante y frío ≤ 5 °C'], WET: ['S', 'S06', 'Transporte en frío'] });
bf('BF49', 'RF-08', 'Consolidación de varios vendedores en un hub', { MW: ['S', 'S08', 'Vendedores llenan las cajas en el centro'], OFN: ['S', 'S09', 'Hub multiproductor'] });
bf('BF50', 'RF-07', 'Ticket de preparación por vendedor', { MW: ['S', 'S08', 'Pick and Fill Tickets el día antes'] });
bf('BF51', 'RF-08', 'Revisión del contenido en el hub', { MW: ['N', 'S08', '«No inspecciona el contenido de cada caja»'] });
bf('BF52', 'RF-07', 'Sustituir solo con aprobación', { MW: ['S', 'S08', 'Sin sustituciones sin aprobación'] });
bf('BF53', 'RF-08', 'Responsabilidad del cliente tras la entrega', { MW: ['S', 'S07', 'Responsabilidad del cliente al entregar'] });

// ---------- Seguimiento (RF-09) ----------
bf('BF54', 'RF-09', 'Estados del pedido visibles', { MER: ['S', 'S04', 'Confirmado, preparación, en camino, entregado'], GLO: ['S', 'S01', 'Seguimiento del pedido'] });
bf('BF55', 'RF-09', 'Seguimiento en tiempo real', { GLO: ['S', 'S02', 'Tiempo real'] });
bf('BF56', 'RF-09', 'Contacto con el repartidor', { GLO: ['S', 'S01', 'Comunicarse con el repartidor'] });

// ---------- Incidencias (RF-10) ----------
bf('BF58', 'RF-10', 'Reclamar desde la web o la app', { GLO: ['S', 'S01', '«Ayuda» desde el perfil'], WET: ['S', 'S06', '«Informar de un problema»'], MW: ['S', 'S07', 'Solicitud de reembolso'] });
bf('BF59', 'RF-10', 'Plazo publicado para reclamar', { MW: ['S', 'S07', '14 días desde la recepción'] });
bf('BF60', 'RF-10', 'Reembolso al medio original con plazo', { MW: ['S', 'S07', '2 días hábiles'], GLO: ['P', 'S01', 'Depende del banco'] });
bf('BF61', 'RF-10', 'Sin devolución física de perecederos', { MW: ['S', 'S07', 'No acepta devoluciones'], GLO: ['S', 'S01', 'Comida no se devuelve'] });
bf('BF62', 'RF-10', 'Chat con soporte', { GLO: ['S', 'S02', 'Chat con soporte'] });

// ---------- Valoraciones (RF-11) ----------
bf('BF63', 'RF-11', 'Valoración de productos o vendedores', { GLO: ['P', 'F-04', 'Pide valoración tras la entrega'], WET: ['P', 'F-04', 'Encuestas de platos'] });

// ---------- Suscripción (RF-14) ----------
bf('BF64', 'RF-14', 'Suscripción o membresía', { GLO: ['S', 'S01', 'Prime mensual'], WET: ['S', 'S06', 'Suscripción semanal'], OFN: ['S', 'S10', 'Suscripciones con Stripe'] });
bf('BF65', 'RF-14', 'Pausar la suscripción', { WET: ['S', 'S06', 'Pausas ilimitadas antes del cierre'] });
bf('BF66', 'RF-14', 'Cancelar en cualquier momento', { WET: ['S', 'S06', 'Sin coste'], GLO: ['S', 'S01', 'Baja en cualquier momento'] });

// ---------- IA y planificación (RF-12) ----------
bf('BF67', 'RF-12', 'Menú o plan sugerido', { WET: ['S', 'S06', 'Menú sugerido cada jueves'] });
bf('BF68', 'RF-12', 'Recomendaciones personalizadas', { GLO: ['P', 'F-04', 'Por historial y zona'], MER: ['N', 'F-04', 'Sin recomendaciones avanzadas'] });
bf('BF69', 'RF-12', 'Ayuda después de comprar (impacto, aprovechamiento)', { TGTG: ['P', 'F-04', 'Contador de impacto'] });

// ---------- Vendedores (RF-02, RF-03, RF-07) ----------
bf('BF70', 'RF-02', 'Alta de vendedores', { MW: ['P', 'S08', 'Formación en la primera entrega'] });
bf('BF71', 'RF-02', 'Formación inicial del vendedor', { MW: ['S', 'S08', 'Formación con el responsable de turno'] });
bf('BF72', 'RF-03', 'Ficha de producto con campos obligatorios', { MW: ['S', 'S08', 'Título, descripción, foto, tamaño, temperatura, origen'] });
bf('BF73', 'RF-03', 'El vendedor fija su stock', { MW: ['S', 'S08', 'Límites de venta'] });
bf('BF74', 'RF-03', 'El vendedor fija su precio', { MW: ['S', 'S08', 'Precio de venta propio'] });
bf('BF75', 'RF-03', 'Promociones del vendedor con reglas', { MW: ['S', 'S08', 'Mínimo 10 %, máximo 2 semanas'], GLO: ['P', 'F-04', 'Ofertas cofinanciadas'] });
bf('BF76', 'RF-02', 'Liquidación periódica al vendedor', { MW: ['S', 'S08', 'Cada viernes, cheque o transferencia'] });
bf('BF77', 'RF-03', 'Informe de ventas al vendedor', { MW: ['P', 'S08', 'Correo semanal'] });
bf('BF78', 'RF-03', 'Portal del vendedor', { MW: ['S', 'S08', 'Vendor Portal'] });
bf('BF79', 'RF-03', 'Publicaciones del vendedor', { MW: ['S', 'S08', 'Fresh Feed, 1 al día'] });
bf('BF81', 'RF-04', 'Productos patrocinados', { GLO: ['S', 'F-04', 'Retail media'], MER: ['N', 'F-04', 'Sin anuncios de terceros'], MW: ['N', 'F-04', 'Sin anuncios de terceros'] });

// ---------- Plataforma y legal (RF-13, RNF) ----------
bf('BF82', 'RF-03', 'Producto no local solo si falta oferta local', { MW: ['S', 'S07', '«Beyond Local»'] });
bf('BF83', 'RF-06', 'Verificación de edad para alcohol', { MW: ['S', 'S07', '21 años y DNI en la entrega'] });
bf('BF84', 'RF-13', 'Rol jurídico declarado de la plataforma', { MW: ['S', 'S07', 'No es establecimiento alimentario; facilita pagos'] });
bf('BF85', 'RF-01', 'Política de privacidad y derechos', { GLO: ['S', 'S01', 'Derechos gratuitos'], MW: ['S', 'S07', 'Política propia'] });
bf('BF86', 'RF-12', 'Impacto medioambiental del usuario', { TGTG: ['S', 'F-04', 'CO2 ahorrado'] });
bf('BF87', 'RF-06', 'Aportación a la comunidad en el precio', { OFN: ['S', 'S09', 'Cuota para la comunidad'] });

// ---------- Web pública, soporte y crecimiento (RF-15, RF-19) ----------
bf('BF88', 'RF-15', 'Preguntas frecuentes públicas', { GLO: ['S', 'S01', 'FAQ pública'], WET: ['S', 'S06', 'FAQ pública'], OFN: ['S', 'S09', 'Guía de usuario pública'] });
bf('BF89', 'RF-19', 'Formulario de contacto', { GLO: ['S', 'S01', 'Formulario en web y app'] });
bf('BF90', 'RF-15', 'Cobertura de zonas publicada', { WET: ['S', 'S06', 'Península y Palma'], MER: ['S', 'S04', 'Comprobación por código postal'] });
bf('BF91', 'RF-15', 'Programa de invitar a amigos', { GLO: ['S', 'S02', 'Ganas dinero si tus amigos piden'], WET: ['P', 'F-04', 'Programa de referidos'] });
bf('BF92', 'RF-15', 'Explicación pública de cómo funciona', { WET: ['S', 'S06', 'Menú semanal, cierre y entrega'], OFN: ['S', 'S09', 'Guía paso a paso'], MW: ['S', 'S07', 'Condiciones con el funcionamiento'] });
bf('BF93', 'RF-17', 'Condiciones públicas para vendedores', { MW: ['S', 'S08', 'Orientación del vendedor publicada'] });

module.exports = { COMPETIDORES, FUENTES, NO_ABIERTAS, BF };
