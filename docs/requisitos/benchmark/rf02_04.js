// RF-02 Alta y verificación de vendedor · RF-03 Catálogo del vendedor · RF-04 Búsqueda y consulta.
module.exports = (R) => {
  R.proc('RF-02', 'Alta y verificación de vendedor');

  R.sub('RF-02.1', 'Página «Quiero vender»');
  R('Explicar en /vender, en este orden: qué gana el vendedor, cómo funciona (recogida, hub, entrega), requisitos y el formulario de alta.', 'Dado /vender, cuando se recorre, entonces las secciones aparecen en ese orden.', 'M', 'MVP', ['BF70'], 'N-VEN-06', { estado: 'Decidido' });
  R('Mostrar la frase «Solo somos un intermediario, no siete» en la sección de ventajas.', 'Dado /vender, cuando se carga, entonces aparece la frase.', 'S', 'MVP', [], 'N-VEN-01', { estado: 'Decidido' });
  R('Listar los requisitos mínimos: registro sanitario, ficha completa de cada producto, producto en buen estado y sin información oculta.', 'Dado /vender, cuando se lee «Requisitos», entonces aparecen los cuatro.', 'M', 'MVP', ['BF72'], 'N-VEN-06', { estado: 'Decidido' });
  R('Explicar la comisión como «Pendiente de definir» mientras no esté decidida, sin mostrar porcentajes.', 'Dado /vender, cuando se lee la comisión, entonces no aparece ningún porcentaje.', 'M', 'MVP', [], 'N-VEN-05', { estado: 'Decidido', pos: 'Mejora', just: 'Market Wagon no publica su comisión; FOOD4ALL la publicará en cuanto se decida.' });
  R('Mostrar el botón «Solicitar el alta» en naranja --accent que baja al formulario (#alta).', 'Dado /vender, cuando pulsa el botón, entonces la página se desplaza al formulario.', 'M', 'MVP', ['BF70'], 'N-VEN-06');

  R.sub('RF-02.2', 'Formulario de solicitud');
  R('Pedir nombre del negocio (2 a 80 caracteres).', 'Dado un nombre vacío, cuando envía, entonces ve «Escribe el nombre del negocio».', 'M', 'MVP', ['BF70'], 'N-VEN-06');
  R('Pedir el tipo de negocio con un desplegable: agricultor, ganadero, frutería, panadería u obrador, despensa, cocina local, otro.', 'Dado «otro», cuando lo elige, entonces aparece un campo de texto para describirlo.', 'M', 'MVP', ['BF70'], 'N-VEN-06');
  R('Pedir la zona (Málaga, Sevilla, Granada) y la dirección de recogida con código postal.', 'Dado un código postal fuera de zona, cuando envía, entonces ve «Por ahora solo recogemos en Málaga, Sevilla y Granada».', 'M', 'MVP', ['BF10'], 'N-VEN-06');
  R('Pedir persona de contacto, teléfono (9 dígitos) y correo.', 'Dado un teléfono de 8 dígitos, cuando envía, entonces ve «El teléfono debe tener 9 dígitos».', 'M', 'MVP', ['BF70'], 'N-VEN-06');
  R('Pedir el número de Registro General Sanitario (RGSEAA) o declarar que está exento como pequeño productor (RD 1086/2020).', 'Dado el campo vacío sin declarar exención, cuando envía, entonces no se acepta la solicitud.', 'M', 'MVP', [], 'N-VEN-07', { estado: 'Decidido', pos: 'Mejora', just: 'Ningún competidor verificado comprueba el registro sanitario en el alta; Market Wagon delega la licencia en el productor.' });
  R('Pedir los días y horas en que se puede recoger el producto (casillas por día y franja).', 'Dados ningún día marcado, cuando envía, entonces ve «Indica al menos un día de recogida».', 'M', 'MVP', [], 'N-VEN-06');
  R('Pedir una descripción breve de lo que vende (hasta 500 caracteres).', 'Dados 501 caracteres, cuando escribe, entonces el contador se pone en rojo y no deja enviar.', 'S', 'MVP', [], 'N-VEN-06');
  R('Exigir la aceptación de las condiciones para vendedores (P2B) con enlace al texto.', 'Dada la casilla sin marcar, cuando envía, entonces no se envía.', 'M', 'MVP', ['BF84'], 'N-VEN-07', { estado: 'Decidido' });
  R('Al enviar, mostrar «Solicitud recibida. Te escribiremos en un máximo de 5 días hábiles.» y enviar el mismo mensaje por correo.', 'Dada una solicitud correcta, cuando se envía, entonces ve el mensaje y le llega el correo.', 'M', 'MVP', [], 'N-VEN-06');
  R('Guardar las solicitudes solo para el administrador; nunca se muestran en la web pública.', 'Dada una solicitud, cuando un visitante busca su nombre, entonces no aparece.', 'M', 'MVP', [], 'N-CUE-01', { estado: 'Decidido' });

  R.sub('RF-02.3', 'Documentación');
  R('Permitir adjuntar el justificante del registro sanitario en PDF, JPG o PNG de hasta 5 MB.', 'Dado un archivo de 6 MB, cuando lo sube, entonces ve «El archivo no puede superar 5 MB».', 'M', 'MVP', [], 'N-VEN-07');
  R('Permitir adjuntar hasta 5 fotos del negocio o del producto.', 'Dadas 5 fotos, cuando intenta subir la sexta, entonces no se añade.', 'C', 'V2', [], 'N-VEN-06');
  R('Guardar los documentos en almacenamiento privado, accesibles solo para el administrador.', 'Dado el enlace de un documento, cuando lo abre un usuario sin rol admin, entonces recibe acceso denegado.', 'M', 'MVP', [], 'N-CUE-01');

  R.sub('RF-02.4', 'Estados de la solicitud');
  R('Gestionar cuatro estados: Recibida, En revisión, Verificada y Rechazada.', 'Dada una solicitud nueva, cuando se crea, entonces su estado es Recibida.', 'M', 'MVP', ['BF70'], 'N-VEN-07', { estado: 'Decidido' });
  R('Notificar por correo al vendedor cada cambio de estado.', 'Dado el paso a Verificada, cuando ocurre, entonces el vendedor recibe un correo.', 'M', 'MVP', [], 'N-VEN-06');
  R('Exigir un motivo escrito al rechazar y enviarlo al vendedor.', 'Dado un rechazo sin motivo, cuando el admin guarda, entonces no se permite.', 'M', 'MVP', [], 'N-VEN-07');
  R('Permitir al vendedor rechazado volver a solicitar el alta pasados 30 días.', 'Dado un rechazo hace 10 días, cuando vuelve a solicitar, entonces ve la fecha desde la que podrá hacerlo.', 'S', 'V2', [], 'N-VEN-06');

  R.sub('RF-02.5', 'Activación y formación');
  R('Al verificar, enviar al vendedor un enlace para crear su contraseña, válido 72 horas.', 'Dado el enlace, cuando pasan 73 h, entonces caduca y el admin puede reenviarlo.', 'M', 'MVP', [], 'N-VEN-06');
  R('Mostrar al vendedor en su primer acceso una guía de 4 pasos: datos del negocio, primer producto, días de recogida y cómo preparar pedidos.', 'Dado un primer acceso, cuando entra, entonces ve la guía y puede saltarla.', 'S', 'MVP', ['BF71'], 'N-VEN-06');
  R('No publicar productos de un vendedor hasta que complete los datos del negocio.', 'Dado un vendedor sin datos, cuando intenta publicar, entonces ve «Completa los datos del negocio antes de publicar».', 'M', 'MVP', [], 'N-VEN-06');

  R.sub('RF-02.6', 'Datos del negocio y perfil público');
  R('Permitir editar nombre comercial, descripción, foto de portada, historia (hasta 1.500 caracteres) y ciudad.', 'Dado un cambio de historia, cuando guarda, entonces se ve en su perfil público.', 'S', 'MVP', ['BF17'], 'N-VEN-01');
  R('Mostrar un perfil público en /vendedores/<nombre> con historia, fotos, zona, productos activos y un apartado «Cómo producimos» escrito por el vendedor (hasta 500 caracteres).', 'Dado un vendedor verificado, cuando un cliente abre su perfil, entonces ve sus productos y el apartado «Cómo producimos».', 'M', 'MVP', ['BF17'], 'N-CAT-01', { pos: 'Paridad', just: 'Market Wagon muestra en cada producto la granja, el condado, cómo produce y una descripción del productor; Glovo, Mercadona y Wetaca no dicen el origen (recorrido del 23/10/2026). La ficha (RF-04.5-01, Must) enlaza a este perfil.' });
  R('Guardar el IBAN para las liquidaciones, visible solo enmascarado (ES** **** 1234).', 'Dado un IBAN guardado, cuando el vendedor lo consulta, entonces ve solo los 4 últimos dígitos.', 'S', 'V2', ['BF76'], 'N-VEN-05');
  R('Validar el formato del IBAN español (ES + 22 dígitos) antes de guardarlo.', 'Dado un IBAN de 20 dígitos, cuando guarda, entonces ve «El IBAN no es válido».', 'S', 'V2', [], 'N-VEN-05');

  R.proc('RF-03', 'Gestión del catálogo y ficha de producto');

  R.sub('RF-03.1', 'Alta de producto');
  R('Ofrecer en «Mis productos» el botón «Añadir producto» que abre la ficha vacía.', 'Dado un vendedor verificado, cuando pulsa el botón, entonces ve la ficha vacía.', 'M', 'MVP', ['BF78'], 'N-VEN-02');
  R('Pedir el nombre del producto (3 a 80 caracteres) con las calificaciones detrás («Tomate rosa, ecológico»).', 'Dado un nombre de 2 caracteres, cuando guarda, entonces ve el error.', 'M', 'MVP', ['BF72'], 'N-CAT-01');
  R('Pedir una descripción que no repita el nombre (20 a 600 caracteres).', 'Dada una descripción igual al nombre, cuando guarda, entonces ve «Describe el producto, no repitas el nombre».', 'M', 'MVP', ['BF72'], 'N-CAT-01');
  R('Pedir la categoría: fruta, verdura, carne, pescado, lácteos y huevos, pan y bollería, despensa, comida preparada.', 'Dada la categoría vacía, cuando guarda, entonces ve «Elige una categoría».', 'M', 'MVP', ['BF12'], 'N-CAT-01');
  R('Pedir el formato de venta: por unidad, por peso (kg) o por pack, con su cantidad.', 'Dado «por peso» sin cantidad, cuando guarda, entonces ve el error.', 'M', 'MVP', ['BF72'], 'N-CAT-01');
  R('Guardar el producto como borrador hasta que la ficha esté completa.', 'Dada una ficha incompleta, cuando guarda, entonces queda en estado Borrador y no se publica.', 'M', 'MVP', ['BF72'], 'N-CAT-01');

  R.sub('RF-03.2', 'Información obligatoria');
  R('Exigir el origen: municipio y provincia de producción.', 'Dado el origen vacío, cuando publica, entonces no se publica.', 'M', 'MVP', ['BF16'], 'N-CAT-01', { estado: 'Decidido' });
  R('Exigir la lista de ingredientes en productos elaborados.', 'Dado un producto de despensa sin ingredientes, cuando publica, entonces no se publica.', 'M', 'MVP', ['BF14'], 'N-CAT-02', { estado: 'Decidido' });
  R('Exigir el tipo de fecha: caducidad o consumo preferente, y los días de vida útil desde la recogida.', 'Dado un fresco sin vida útil, cuando publica, entonces no se publica.', 'M', 'MVP', [], 'N-CAD-01', { pos: 'Diferencial', just: 'Ningún competidor verificado indica la vida útil; es la base de «qué consumir primero» (RF-12.8).' });
  R('Exigir la conservación: ambiente, refrigerado (0–4 °C) o congelado (−18 °C).', 'Dado un yogur sin conservación, cuando publica, entonces no se publica.', 'M', 'MVP', ['BF21'], 'N-CAD-01');
  R('Exigir el peso o volumen neto en productos envasados.', 'Dado un envasado sin peso, cuando publica, entonces no se publica.', 'M', 'MVP', ['BF72'], 'N-CAT-03');
  R('Permitir indicar etiquetas opcionales: temporada, ecológico certificado, aprovechamiento.', 'Dado «ecológico» marcado, cuando se publica, entonces la tarjeta muestra la etiqueta.', 'S', 'MVP', [], 'N-VEN-01');
  R('Exigir el número de certificado si se marca «ecológico certificado».', 'Dado «ecológico» sin certificado, cuando publica, entonces ve el error.', 'M', 'MVP', [], 'N-CAT-03');

  R.sub('RF-03.3', 'Alérgenos');
  R('Exigir que el vendedor marque, para los 14 alérgenos, «contiene», «puede contener trazas» o «no contiene».', 'Dado un alérgeno sin marcar, cuando publica, entonces no se publica.', 'M', 'MVP', ['BF15'], 'N-CAT-02', { estado: 'Decidido' });
  R('Mostrar los alérgenos con icono y texto; nunca solo con icono.', 'Dado un producto con gluten, cuando se ve la ficha, entonces aparece el icono con la palabra «Gluten».', 'M', 'MVP', ['BF15'], 'N-CAT-02');
  R('Pedir al vendedor que confirme los alérgenos cada vez que cambie los ingredientes.', 'Dado un cambio de ingredientes, cuando guarda, entonces debe confirmar de nuevo los alérgenos.', 'M', 'MVP', [], 'N-CAT-02');

  R.sub('RF-03.4', 'Fotos');
  R('Exigir al menos 1 foto y permitir hasta 5, en JPG, PNG o WebP de hasta 5 MB.', 'Dado un producto sin foto, cuando publica, entonces no se publica.', 'M', 'MVP', ['BF72'], 'N-CAT-01');
  R('Recomendar foto horizontal con el producto en primer plano y avisar si la foto es vertical.', 'Dada una foto vertical, cuando la sube, entonces ve el consejo.', 'C', 'V2', ['BF72'], 'N-CAT-01');
  R('Generar versiones de 400 y 1200 px de ancho para la tarjeta y la ficha.', 'Dada una foto de 4000 px, cuando se publica, entonces la tarjeta carga la de 400 px.', 'S', 'MVP', [], 'N-CAR-01');
  R('Exigir texto alternativo para cada foto, propuesto a partir del nombre.', 'Dada una foto, cuando se publica, entonces su alt no está vacío.', 'S', 'MVP', [], 'N-CAR-01');

  R.sub('RF-03.5', 'Precio');
  R('Pedir el precio con IVA incluido y con dos decimales.', 'Dado «2,5», cuando guarda, entonces se muestra «2,50 €».', 'S', 'V2', ['BF74'], 'N-VEN-02');
  R('Calcular y mostrar el precio por kilo o litro a partir del precio y el peso.', 'Dados 500 g a 2,00 €, cuando se muestra, entonces aparece «4,00 €/kg».', 'S', 'V2', ['BF18'], 'N-PLA-02');
  R('En productos por peso, mostrar el precio aproximado y cobrar el peso real con un margen máximo de ±10 %.', 'Dado 1 kg estimado, cuando pesa 1,15 kg, entonces se cobra como máximo 1,10 kg.', 'S', 'V2', ['BF20'], 'N-PLA-02', { pos: 'Mejora', just: 'Mercadona ajusta el importe tras pesar sin límite publicado; FOOD4ALL pone tope del 10 %.' });
  R('Mientras no haya precios reales, mostrar «Precio todavía no disponible» en lugar del importe.', 'Dado el modo conceptual, cuando se ve una tarjeta, entonces muestra ese texto.', 'M', 'MVP', [], 'N-CAT-03', { estado: 'Decidido' });

  R.sub('RF-03.6', 'Stock y disponibilidad');
  R('Permitir al vendedor fijar las unidades disponibles por día de recogida.', 'Dadas 10 unidades, cuando se venden 10, entonces el producto sale «Agotado» ese día.', 'M', 'MVP', ['BF73'], 'N-VEN-02');
  R('Permitir marcar un producto como «No disponible esta semana» sin borrarlo.', 'Dado un producto pausado, cuando un cliente busca, entonces no aparece.', 'M', 'MVP', ['BF73'], 'N-VEN-02');
  R('Avisar al vendedor por correo cuando un producto se agote.', 'Dado el último producto vendido, cuando ocurre, entonces le llega el aviso.', 'S', 'V2', [], 'N-VEN-02');

  R.sub('RF-03.7', 'Edición, retirada y packs');
  R('Permitir editar cualquier campo; los cambios de precio no afectan a pedidos ya pagados.', 'Dado un cambio de precio, cuando hay un pedido pagado, entonces ese pedido conserva el precio anterior.', 'M', 'MVP', [], 'N-VEN-02');
  R('Permitir retirar un producto; queda en «Retirados» y puede reactivarse.', 'Dado un producto retirado, cuando lo reactiva, entonces vuelve a publicarse.', 'M', 'MVP', [], 'N-VEN-02');
  R('Permitir crear packs con varios productos del mismo vendedor y un precio conjunto.', 'Dado un pack de 3 productos, cuando se compra, entonces descuenta stock de los 3.', 'C', 'V2', [], 'N-PLA-02');
  R('Permitir importar productos desde una hoja CSV con una plantilla descargable.', 'Dado un CSV con una fila sin origen, cuando importa, entonces esa fila queda como borrador con el error indicado.', 'C', 'V3', [], 'N-VEN-02');

  R.sub('RF-03.8', 'Promociones del vendedor');
  R('Permitir descuentos del 10 % o más durante un máximo de 14 días seguidos.', 'Dado un 5 %, cuando guarda, entonces ve «El descuento mínimo es del 10 %».', 'C', 'V2', ['BF75'], 'N-VEN-01');
  R('Mostrar el precio anterior tachado junto al nuevo durante la promoción.', 'Dado un descuento activo, cuando se ve la tarjeta, entonces aparecen ambos precios.', 'C', 'V2', ['BF75'], 'N-VEN-01');

  R.sub('RF-03.9', 'Revisión antes de publicar');
  R('Publicar un producto solo si todos los campos obligatorios están completos.', 'Dada una ficha completa, cuando pulsa «Publicar», entonces el estado pasa a Publicado.', 'M', 'MVP', ['BF72'], 'N-CAT-01', { estado: 'Decidido' });
  R('Mostrar al vendedor una vista previa de la tarjeta y la ficha antes de publicar.', 'Dada una ficha completa, cuando pulsa «Vista previa», entonces ve la tarjeta tal como la verá el cliente.', 'S', 'MVP', [], 'N-CAT-01');
  R('Permitir vender producto no local solo cuando el admin lo autorice por falta de oferta local, y marcarlo «No local».', 'Dado un producto no local autorizado, cuando se ve, entonces lleva la etiqueta «No local».', 'C', 'V3', ['BF82'], 'N-CAT-03');

  R.proc('RF-04', 'Búsqueda y consulta del catálogo');

  R.sub('RF-04.1', 'Página de productos');
  R('Mostrar el catálogo en /comprar#marketplace filtrado por la zona elegida en la cabecera.', 'Dada la zona Sevilla, cuando abre el catálogo, entonces solo ve vendedores de Sevilla.', 'M', 'MVP', ['BF10'], 'N-CAR-01');
  R('Mostrar las categorías como fila de botones con su punto de color de la paleta de mercado.', 'Dado el catálogo, cuando pulsa «Fruta», entonces solo ve fruta.', 'M', 'MVP', ['BF12'], 'N-CAR-01');
  R('Mostrar los productos en rejilla de 4 columnas en ordenador, 2 en tableta y 1 en móvil.', 'Dada una pantalla de 1280 px, cuando carga, entonces hay 4 columnas.', 'M', 'MVP', [], 'N-CAR-01');
  R('Cargar 24 productos y mostrar «Ver más» para los siguientes 24.', 'Dados 60 productos, cuando pulsa «Ver más» dos veces, entonces ve los 60.', 'S', 'MVP', [], 'N-CAR-01');

  R.sub('RF-04.2', 'Buscador');
  R('Mostrar el buscador en la cabecera con el texto de ayuda «Busca productos o vendedores».', 'Dada la cabecera, cuando se carga, entonces se ve el buscador.', 'M', 'MVP', ['BF13'], 'N-CAR-01');
  R('Buscar por nombre de producto, de vendedor y de categoría, sin distinguir mayúsculas ni tildes.', 'Dado «platano», cuando busca, entonces encuentra «Plátano de Canarias».', 'M', 'MVP', ['BF13'], 'N-CAR-01');
  R('Sugerir hasta 6 resultados mientras se escribe a partir de 2 caracteres.', 'Dado «to», cuando escribe, entonces ve hasta 6 sugerencias.', 'S', 'MVP', ['BF13'], 'N-CAR-01');
  R('Si no hay resultados, mostrar «No encontramos “<texto>” en tu zona» y 4 productos de temporada.', 'Dado «caviar», cuando busca, entonces ve el mensaje y 4 sugerencias.', 'S', 'MVP', [], 'N-CAR-01');

  R.sub('RF-04.3', 'Filtros y orden');
  R('Filtrar por vendedor, categoría, «sin» un alérgeno, temporada, ecológico y conservación.', 'Dado «sin gluten», cuando filtra, entonces no aparece ningún producto con gluten ni trazas.', 'M', 'MVP', ['BF15'], 'N-CAT-02', { pos: 'Diferencial', just: 'Solo Open Food Network muestra alérgenos en la ficha; ninguno verificado filtra por alérgeno.' });
  R('Aplicar por defecto el filtro de las alergias guardadas del cliente, con aviso «Ocultamos productos con tus alérgenos» y opción de desactivarlo.', 'Dado un cliente alérgico al huevo, cuando abre el catálogo, entonces no ve productos con huevo.', 'S', 'MVP', ['BF15'], 'N-CAT-02', { pos: 'Diferencial' });
  R('Ordenar por relevancia, precio (de menor a mayor y al revés) y novedad.', 'Dado «precio de menor a mayor», cuando ordena, entonces el primero es el más barato.', 'S', 'V2', [], 'N-PLA-02');
  R('Mostrar los filtros activos como etiquetas con una «×» para quitarlos y un enlace «Quitar todos».', 'Dados 2 filtros, cuando pulsa «Quitar todos», entonces se ve el catálogo completo.', 'S', 'MVP', [], 'N-CAR-01');

  R.sub('RF-04.4', 'Tarjeta de producto');
  R('Mostrar en la tarjeta: foto, categoría con punto de color, nombre, vendedor y ciudad, origen, alérgenos y precio.', 'Dada una tarjeta, cuando se ve, entonces contiene esos siete datos.', 'M', 'MVP', ['BF16', 'BF15'], 'N-CAT-01', { estado: 'Decidido' });
  R('Dar a la tarjeta fondo blanco, borde 1 px #DDD0B0 y radio 10 px; al pasar el ratón sube 4 px en 200 ms.', 'Dado el ratón encima, cuando pasa, entonces la tarjeta se eleva.', 'S', 'MVP', [], 'N-CAR-01');
  R('Incluir en la tarjeta el botón «Añadir» y un selector de cantidad que aparece tras añadir.', 'Dado «Añadir» pulsado, cuando se añade, entonces el botón se convierte en «− 1 +».', 'M', 'MVP', ['BF29'], 'N-CAR-01');
  R('Mostrar «Agotado» en gris y desactivar «Añadir» si no hay stock.', 'Dado stock 0, cuando se ve la tarjeta, entonces «Añadir» está desactivado.', 'M', 'MVP', ['BF73'], 'N-CAR-01');

  R.sub('RF-04.5', 'Ficha de producto');
  R('Mostrar en /producto/<id> la galería de fotos, el nombre, el vendedor con enlace a su perfil y el precio por unidad y por kilo.', 'Dada una ficha, cuando pulsa el vendedor, entonces llega a su perfil.', 'M', 'MVP', ['BF17', 'BF18'], 'N-CAT-01');
  R('Mostrar ingredientes, alérgenos (contiene y trazas), conservación, tipo de fecha y vida útil.', 'Dado un queso, cuando se abre la ficha, entonces se ven los cinco datos.', 'M', 'MVP', ['BF14', 'BF15', 'BF21'], 'N-CAT-02', { estado: 'Decidido' });
  R('Mostrar el origen con municipio y distancia aproximada al centro de la zona.', 'Dado un producto de Alhaurín, cuando se ve en Málaga, entonces muestra «Alhaurín el Grande · 20 km».', 'S', 'MVP', ['BF16'], 'N-VEN-01');
  R('Mostrar hasta 4 productos del mismo vendedor bajo el título «Más de <vendedor>», para que se vea el criterio.', 'Dado un vendedor con 6 productos, cuando se abre uno, entonces se ven 4 bajo «Más de <vendedor>».', 'C', 'V2', [], 'N-CAR-01');
  R('Mostrar el desglose orientativo del precio: parte del vendedor, logística y FOOD4ALL.', 'Dado un precio, cuando se pulsa «¿A dónde va tu dinero?», entonces se ve el desglose.', 'C', 'V3', ['BF19'], 'N-CAT-03');

  R.sub('RF-04.6', 'Favoritos y habituales');
  R('Permitir marcar productos como favoritos con un corazón y verlos en «Mis favoritos».', 'Dado un favorito, cuando abre la lista, entonces aparece.', 'S', 'V2', ['BF22'], 'N-PLA-01');
  R('Mostrar «Tus habituales» con los productos comprados 2 o más veces.', 'Dado un producto comprado 3 veces, cuando abre el catálogo, entonces aparece en «Tus habituales».', 'C', 'V2', ['BF22'], 'N-PLA-01');

  R.sub('RF-04.7', 'Zona y patrocinados');
  R('Pedir la zona en la primera visita con un selector en la cabecera (Málaga, Sevilla, Granada) y recordarla.', 'Dada una zona elegida, cuando vuelve otro día, entonces sigue elegida.', 'M', 'MVP', ['BF10'], 'N-CAR-01', { estado: 'Decidido' });
  R('Marcar los productos patrocinados con la etiqueta «Patrocinado» y no mezclarlos nunca con las propuestas de la IA.', 'Dado un patrocinado, cuando se ve, entonces lleva la etiqueta; y no aparece en la cesta de la IA.', 'S', 'V2', ['BF81'], 'N-IA-02', { estado: 'Decidido' });
};
