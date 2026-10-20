// RF-15 Web pública · RF-16 Panel del vendedor · RF-17 Condiciones y liquidación · RF-18 Comunicación · RF-19 Soporte · RF-13 ampliado.
module.exports = (R) => {
  R.proc('RF-15', 'Web pública e información');

  R.sub('RF-15.1', 'Cabecera');
  R('Mostrar la cabecera verde bosque --green #2F5233 con un filo inferior azafrán de 3 px, fija al hacer scroll.', 'Dado un scroll de 800 px, cuando se mira arriba, entonces la cabecera sigue visible.', 'M', 'MVP', ['BF92'], 'N-02', { estado: 'Decidido' });
  R('Mostrar a la izquierda el logo FOOD4ALL (caja de mercado con frutas y el 4 en naranja) enlazado a la portada.', 'Dado cualquier página, cuando pulsa el logo, entonces va a la portada.', 'M', 'MVP', [], 'N-02', { estado: 'Decidido' });
  R('Mostrar solo tres botones: «Quiero comprar» (siempre naranja), «Quiero vender» y «Cómo funciona»; el activo en crema.', 'Dada /vender, cuando se ve la cabecera, entonces «Quiero vender» aparece en crema.', 'M', 'MVP', ['BF92'], 'N-01', { estado: 'Decidido' });
  R('Mostrar una segunda fila en verde #24402A con las pestañas de zona (Málaga, Sevilla, Granada), la activa subrayada en azafrán.', 'Dada la zona Granada, cuando se ve la cabecera, entonces «Granada» está subrayada.', 'M', 'MVP', ['BF90'], 'N-02', { estado: 'Decidido' });
  R('En móvil, agrupar los botones en un menú de hamburguesa de 44 px con texto alternativo «Abrir menú».', 'Dado un móvil de 375 px, cuando pulsa el icono, entonces se despliegan los tres botones.', 'S', 'V2', [], 'N-01');

  R.sub('RF-15.2', 'Portada');
  R('Mostrar un hero con la ilustración propia de campo andaluz, oscurecida a la izquierda para que se lea el texto.', 'Dada la portada, cuando se carga, entonces el texto del hero cumple 4,5:1 de contraste.', 'M', 'MVP', [], 'N-03', { estado: 'Decidido' });
  R('Mostrar el lema «Planifica tu comida. Ahorra. Come como en casa.» con «Come como en casa.» en azafrán.', 'Dada la portada, cuando se lee el hero, entonces aparece el lema exacto.', 'M', 'MVP', [], 'N-01', { estado: 'Decidido' });
  R('Mostrar en el hero tres botones grandes de 54 px: «Quiero comprar», «Quiero vender» y «Cómo funciona».', 'Dada la portada, cuando se mide, entonces los tres botones miden 54 px de alto.', 'M', 'MVP', ['BF92'], 'N-01', { estado: 'Decidido' });
  R('Mostrar bajo el hero una cinta azafrán con nombres de producto en movimiento que se para al pasar el ratón.', 'Dado el ratón sobre la cinta, cuando pasa, entonces se detiene.', 'C', 'MVP', [], 'N-03', { estado: 'Decidido' });
  R('Explicar en una frase cómo funciona: «Una sola compra a varios vendedores locales, con una entrega».', 'Dada la portada, cuando se lee, entonces aparece esa frase.', 'M', 'MVP', ['BF92'], 'N-02', { estado: 'Decidido' });
  R('No mostrar prueba social: ni opiniones, ni contadores, ni «ya somos X».', 'Dada la portada, cuando se revisa, entonces no hay cifras de usuarios ni testimonios.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });

  R.sub('RF-15.3', 'Cómo funciona');
  R('Explicar el proceso del cliente en 5 pasos numerados con colores en ciclo tomate, azafrán, oliva, melocotón: pides, la IA propone, revisas, pagas una vez, recibes todo junto.', 'Dada la sección, cuando se ve, entonces hay 5 pasos en ese orden.', 'M', 'MVP', ['BF92'], 'N-01', { estado: 'Decidido' });
  R('Explicar el proceso logístico en 4 pasos: recogida en origen, hub, empaquetado y entrega única.', 'Dada la sección, cuando se ve, entonces hay 4 pasos.', 'M', 'MVP', ['BF92'], 'N-02');
  R('Mostrar un ejemplo concreto: «Tengo 25 € y 4 días» con la cesta resultante (datos de ejemplo marcados).', 'Dado el ejemplo, cuando se ve, entonces lleva el badge «Datos de ejemplo».', 'S', 'MVP', [], 'N-01', { estado: 'Decidido' });
  R('Incluir un hueco para un vídeo corto; si no hay vídeo, no mostrar nada en su lugar (ni capturas).', 'Dado AI_VIDEO vacío, cuando se carga /comprar, entonces no aparece el bloque.', 'S', 'MVP', [], 'N-01', { estado: 'Decidido' });

  R.sub('RF-15.4', 'Quiénes somos y comparativa');
  R('Explicar el problema que resolvemos, la propuesta en una frase y los valores: local, ahorro y confianza.', 'Dada la sección, cuando se lee, entonces aparecen los tres valores.', 'M', 'MVP', [], 'N-01');
  R('Mostrar las zonas iniciales (Málaga, Sevilla y Granada) en un mapa sencillo.', 'Dado el mapa, cuando se ve, entonces marca las tres ciudades.', 'S', 'MVP', ['BF90'], 'N-02');
  R('Comparar FOOD4ALL con supermercado online y delivery en una tabla de 5 criterios, sin afirmar que es más barato.', 'Dada la tabla, cuando se lee, entonces no contiene «más barato».', 'S', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Explicar el bloque «No somos»: no somos delivery inmediato ni supermercado.', 'Dado el bloque, cuando se ve, entonces usa el fondo --tint-tomato #F6DCD3.', 'S', 'MVP', [], 'N-02', { estado: 'Decidido' });

  R.sub('RF-15.5', 'Preguntas frecuentes');
  R('Publicar /preguntas-frecuentes con al menos 12 preguntas agrupadas en Comprar, Entrega, Pagos, Vender y Cuenta.', 'Dada la página, cuando se cuenta, entonces hay 12 o más preguntas en 5 grupos.', 'M', 'V2', ['BF88'], 'N-06');
  R('Mostrar cada respuesta en un desplegable accesible con teclado.', 'Dada una pregunta, cuando pulsa Intro, entonces se despliega la respuesta.', 'M', 'V2', ['BF88'], 'N-06');
  R('Incluir un buscador dentro de las preguntas frecuentes.', 'Dado «envío», cuando busca, entonces se filtran las preguntas que lo contienen.', 'C', 'V2', ['BF88'], 'N-06');
  R('Incluir al final «¿No encuentras la respuesta? Escríbenos» con enlace al contacto.', 'Dado el final de la página, cuando pulsa el enlace, entonces va a /contacto.', 'S', 'V2', ['BF89'], 'N-06');

  R.sub('RF-15.6', 'Comunidad y redes');
  R('Publicar /comunidad explicando por qué importa la comunidad, qué se publicará y cómo participar.', 'Dada /comunidad, cuando se carga, entonces tiene esos tres apartados.', 'S', 'MVP', [], 'N-03', { estado: 'Decidido' });
  R('Mostrar Instagram, TikTok, YouTube y Pinterest; sin URL, como «Próximamente» y sin enlace.', 'Dada una red sin URL, cuando se ve, entonces muestra «Próximamente».', 'S', 'MVP', [], 'N-03', { estado: 'Decidido' });
  R('Marcar las publicaciones de ejemplo como «Datos de ejemplo».', 'Dada una publicación de ejemplo, cuando se ve, entonces lleva el badge.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Ofrecer un programa «Invita a tu compi de piso» con ventaja para ambos en su primer pedido.', 'Dado un enlace de invitación, cuando el invitado compra, entonces ambos reciben la ventaja.', 'C', 'V3', ['BF91'], 'N-01', { estado: 'Pendiente' });

  R.sub('RF-15.7', 'Pie de página');
  R('Mostrar en el pie: enlaces legales (aviso legal, privacidad, cookies, condiciones), créditos de imágenes y redes.', 'Dado el pie, cuando se revisa, entonces están todos los enlaces.', 'M', 'MVP', [], 'N-07');
  R('Mostrar el aviso «Proyecto conceptual · datos de ejemplo» en el pie de todas las páginas.', 'Dada cualquier página, cuando se ve el pie, entonces aparece el aviso.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Mostrar el aviso de fotos «Imágenes ilustrativas…» con enlace a /creditos donde haya fotos.', 'Dada una página con fotos, cuando se ve, entonces aparece el aviso.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Mostrar en /creditos el autor y la licencia de cada foto de Wikimedia Commons.', 'Dada una foto, cuando se busca en /creditos, entonces aparece su autor y licencia.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Ofrecer la web en español; preparar los textos para añadir inglés más adelante.', 'Dado el código, cuando se revisa, entonces los textos están en un fichero de idioma.', 'C', 'V3', [], 'N-01');

  R.proc('RF-16', 'Panel del vendedor');

  R.sub('RF-16.1', 'Inicio del panel');
  R('Mostrar en /vender/panel un resumen con: pedidos de hoy, pedidos por confirmar, productos agotados y próxima recogida.', 'Dado un vendedor con 2 pedidos por confirmar, cuando entra, entonces ve «2 por confirmar».', 'M', 'MVP', ['BF78'], 'N-03');
  R('Destacar en naranja las acciones pendientes con plazo, con el tiempo restante.', 'Dado un pedido que vence en 3 h, cuando se ve, entonces muestra «Confirma antes de 3 h».', 'M', 'MVP', ['BF78'], 'N-03');
  R('Mostrar pestañas: Inicio, Pedidos, Productos, Ventas, Negocio; la activa en tomate --tomato.', 'Dada la pestaña Productos, cuando está activa, entonces se marca en #C8553D.', 'M', 'MVP', ['BF78'], 'N-03', { estado: 'Decidido' });

  R.sub('RF-16.2', 'Pedidos del vendedor');
  R('Listar los subpedidos por día de recogida con estado: Nuevo, Confirmado, Listo, Recogido.', 'Dado el filtro «mañana», cuando se aplica, entonces solo salen los de mañana.', 'M', 'MVP', ['BF50'], 'N-03');
  R('Permitir confirmar todos los subpedidos de un día con «Confirmar todos» si no hay faltas.', 'Dados 5 nuevos sin faltas, cuando pulsa, entonces pasan a Confirmado.', 'S', 'MVP', [], 'N-03');
  R('Mostrar el historial de subpedidos de los últimos 12 meses.', 'Dado un subpedido de hace 6 meses, cuando busca, entonces aparece.', 'S', 'V2', [], 'N-03');

  R.sub('RF-16.3', 'Ventas y estadísticas');
  R('Mostrar las ventas de la semana y del mes en importe y unidades.', 'Dadas 3 ventas de 10 €, cuando se ve, entonces muestra 30 € y 3 unidades.', 'S', 'V2', ['BF77'], 'N-03');
  R('Mostrar los 5 productos más vendidos del mes.', 'Dado el mes, cuando se ve, entonces aparecen 5 productos ordenados.', 'C', 'V2', ['BF77'], 'N-03');
  R('Mostrar la tasa de incidencias del vendedor por cada 100 subpedidos.', 'Dadas 2 incidencias en 100, cuando se ve, entonces muestra 2 %.', 'S', 'V2', [], 'N-06');
  R('Enviar un resumen semanal por correo con ventas, incidencias y valoraciones.', 'Dado el lunes, cuando llega, entonces contiene esos tres datos.', 'C', 'V2', ['BF77'], 'N-03');
  R('Permitir descargar las ventas en CSV.', 'Dado un mes, cuando pulsa «Descargar», entonces obtiene un CSV.', 'C', 'V2', [], 'N-03');

  R.proc('RF-17', 'Condiciones y liquidación del vendedor');

  R.sub('RF-17.1', 'Condiciones');
  R('Publicar las condiciones para vendedores con comisión, plazos de pago, obligaciones de calidad y causas de suspensión.', 'Dadas las condiciones, cuando se leen, entonces contienen esos cuatro apartados.', 'M', 'V2', ['BF93'], 'N-03');
  R('Avisar a los vendedores con 15 días de antelación de cualquier cambio de condiciones (Reglamento P2B).', 'Dado un cambio, cuando se publica, entonces los vendedores reciben el aviso 15 días antes.', 'M', 'V2', [], 'N-07');
  R('Exigir que el vendedor no prometa nada que FOOD4ALL no pueda cumplir en las fichas (por ejemplo, «entrega hoy»).', 'Dada una ficha con «entrega hoy», cuando se revisa, entonces se rechaza.', 'S', 'V2', [], 'N-06');

  R.sub('RF-17.2', 'Liquidación');
  R('Liquidar cada semana las ventas entregadas menos la comisión y las incidencias atribuidas.', 'Dadas ventas de 100 €, comisión del 15 % e incidencia de 5 €, cuando se liquida, entonces se pagan 80 €.', 'M', 'V2', ['BF76'], 'N-03', { estado: 'Hipótesis' });
  R('Mostrar el detalle de cada liquidación: periodo, ventas, comisión, ajustes e importe.', 'Dada una liquidación, cuando se abre, entonces se ven esos cinco datos.', 'M', 'V2', ['BF76'], 'N-03');
  R('Generar la factura de la comisión al vendedor en PDF.', 'Dada una liquidación, cuando se cierra, entonces hay un PDF de factura.', 'M', 'V3', [], 'N-07');
  R('Mostrar el porcentaje de comisión en el panel en cuanto esté decidido.', 'Dada la comisión decidida, cuando el vendedor entra, entonces ve el porcentaje.', 'M', 'V2', [], 'N-03', { estado: 'Pendiente', pos: 'Mejora', just: 'Market Wagon no publica su comisión.' });

  R.proc('RF-18', 'Comunicación con vendedores');

  R.sub('RF-18.1', 'Mensajes y avisos');
  R('Permitir al admin enviar avisos a todos los vendedores o a los de una zona.', 'Dado un aviso a Málaga, cuando se envía, entonces solo lo reciben los de Málaga.', 'S', 'V2', [], 'N-03');
  R('Mostrar los avisos en el panel del vendedor hasta que los marque como leídos.', 'Dado un aviso, cuando lo marca, entonces desaparece del inicio.', 'S', 'V2', [], 'N-03');
  R('Permitir al vendedor escribir al equipo desde su panel con asunto y mensaje.', 'Dado un mensaje, cuando se envía, entonces llega a la bandeja del admin.', 'S', 'V2', [], 'N-03');
  R('Permitir al vendedor publicar 1 novedad al día (temporada, producto nuevo) que el admin revisa antes de mostrarla.', 'Dada una segunda novedad el mismo día, cuando la envía, entonces ve «Solo una novedad al día».', 'C', 'V3', ['BF79'], 'N-03');

  R.proc('RF-19', 'Soporte y contacto');

  R.sub('RF-19.1', 'Contacto');
  R('Ofrecer /contacto con formulario: nombre, correo, motivo (pedido, vender, cuenta, otro) y mensaje.', 'Dado un mensaje enviado, cuando termina, entonces ve «Te respondemos en menos de 24 h laborables».', 'M', 'V2', ['BF89'], 'N-06');
  R('Pedir el número de pedido si el motivo es «pedido».', 'Dado el motivo pedido, cuando se elige, entonces aparece el campo número de pedido.', 'S', 'V2', ['BF89'], 'N-06');
  R('Mostrar un correo de contacto visible para quien no quiera usar el formulario.', 'Dada /contacto, cuando se ve, entonces aparece el correo.', 'S', 'V2', [], 'N-06');
  R('Atender con personas en horario laborable; indicar el horario en /contacto.', 'Dada /contacto, cuando se ve, entonces muestra el horario.', 'S', 'V2', ['BF62'], 'N-06');
  R('Ofrecer chat de soporte dentro del pedido.', 'Dado un pedido, cuando pulsa «Chatear», entonces abre el chat.', 'C', 'V3', ['BF62'], 'N-06');

  R.proc('RF-13', 'Panel de administración');

  R.sub('RF-13.5', 'Usuarios y roles');
  R('Listar usuarios con búsqueda por correo y filtro por rol.', 'Dado el filtro «vendedor», cuando se aplica, entonces solo salen vendedores.', 'M', 'V2', [], 'N-05');
  R('Permitir bloquear una cuenta con motivo; el usuario bloqueado no puede entrar.', 'Dada una cuenta bloqueada, cuando intenta entrar, entonces ve «Tu cuenta está bloqueada. Escríbenos.»', 'M', 'V2', [], 'N-06');
  R('Crear cuentas de administrador solo desde otra cuenta de administrador.', 'Dado un cliente, cuando intenta acceder a /admin/usuarios, entonces recibe 403.', 'M', 'MVP', [], 'N-07');

  R.sub('RF-13.6', 'Configuración');
  R('Configurar desde el panel la compra mínima, el coste de envío, las franjas y su capacidad por zona.', 'Dado un cambio de compra mínima a 12 €, cuando se guarda, entonces el carrito lo aplica.', 'M', 'MVP', ['BF25', 'BF26'], 'N-02');
  R('Configurar las zonas activas y sus códigos postales.', 'Dado un código postal añadido, cuando se guarda, entonces ya se puede comprar desde él.', 'M', 'MVP', ['BF90'], 'N-02');
  R('Registrar cada cambio de configuración con autor, valor anterior y valor nuevo.', 'Dado un cambio, cuando se consulta el historial, entonces aparece.', 'M', 'V2', [], 'N-05');

  R.sub('RF-13.7', 'Prompts del proyecto');
  R('Mostrar en /admin#prompts el registro de prompts del equipo con filtro por tipo y botón de copiar.', 'Dado el filtro «landing», cuando se aplica, entonces solo salen esos prompts.', 'S', 'MVP', [], 'N-02', { estado: 'Decidido' });
  R('Ofrecer «Pulir con IA» que muestra el original y la propuesta lado a lado, sin sustituir el original.', 'Dado «Pulir con IA», cuando termina, entonces el original sigue intacto.', 'S', 'MVP', [], 'N-02', { estado: 'Decidido' });
  R('Mostrar el buscador de la barra lateral desactivado y marcado «Pendiente» hasta que se decida si usa IA.', 'Dado el panel, cuando se ve el buscador, entonces está desactivado.', 'C', 'MVP', [], 'N-02', { estado: 'Decidido' });
};
