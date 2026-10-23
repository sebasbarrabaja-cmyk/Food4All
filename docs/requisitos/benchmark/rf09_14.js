// RF-09 Seguimiento · RF-10 Incidencias · RF-11 Valoraciones · RF-12 IA · RF-13 Administración · RF-14 Suscripción.
module.exports = (R) => {
  R.proc('RF-09', 'Seguimiento del pedido y notificaciones');

  R.sub('RF-09.1', 'Estados');
  R('Gestionar seis estados del pedido: Recibido, Recogida, En el hub, Empaquetado, En reparto y Entregado.', 'Dado un pedido nuevo, cuando se crea, entonces está en Recibido.', 'M', 'MVP', ['BF54'], 'N-ENT-01', { estado: 'Decidido' });
  R('Calcular el estado global como el del subpedido más atrasado hasta que todos llegan al hub.', 'Dados 2 subpedidos en el hub y 1 en Recogida, cuando se ve el pedido, entonces está en Recogida.', 'M', 'MVP', [], 'N-ENT-01');
  R('Guardar la hora de cada cambio de estado.', 'Dado un cambio a Empaquetado, cuando se consulta, entonces se ve su hora.', 'M', 'MVP', [], 'N-ENT-01');

  R.sub('RF-09.2', 'Pantalla de seguimiento');
  R('Mostrar en /pedido/<número> una línea de seis pasos con el actual resaltado en --green y los pasados con su hora.', 'Dado un pedido En el hub, cuando lo abre, entonces los tres primeros pasos aparecen completados.', 'M', 'MVP', ['BF54'], 'N-ENT-01');
  R('Mostrar debajo el detalle por vendedor con el estado de cada subpedido.', 'Dado un subpedido con falta, cuando se ve, entonces muestra «Falta 1 unidad · reembolso de prueba registrado».', 'M', 'MVP', [], 'N-ENT-01');
  R('Mostrar la franja de entrega y, el día de reparto, una hora estimada de ±30 min.', 'Dado el día de entrega, cuando abre el pedido, entonces ve «Llega entre 18:20 y 18:50».', 'S', 'V2', ['BF55'], 'N-ENT-01');
  R('Mostrar el mapa del repartidor en tiempo real.', 'Dado un pedido en reparto, cuando abre el mapa, entonces ve la posición actualizada cada 30 s.', 'C', 'V3', ['BF55'], 'N-ENT-01', { just: 'Glovo lo ofrece porque es inmediato; en entrega por franja aporta menos, por eso va a V3.' });

  R.sub('RF-09.3', 'Notificaciones');
  R('Enviar correo al confirmar el pedido, al salir a reparto y al entregarlo.', 'Dado un pedido entregado, cuando se revisa el correo, entonces hay 3 mensajes.', 'M', 'MVP', ['BF38'], 'N-ENT-01');
  R('Avisar por correo de cualquier falta o sustitución en cuanto el vendedor la marque.', 'Dada una falta, cuando se marca, entonces llega el aviso en menos de 5 min.', 'M', 'MVP', [], 'N-ENT-01');
  R('Permitir elegir en «Mis datos» qué avisos recibir, salvo los obligatorios del pedido.', 'Dado «salida a reparto» desactivado, cuando sale, entonces no llega ese correo.', 'S', 'V2', [], 'N-CUE-01');
  R('Enviar notificaciones push en la app cuando exista.', 'Dada la app instalada, cuando sale a reparto, entonces llega la notificación.', 'C', 'V3', [], 'N-ENT-01');

  R.sub('RF-09.4', 'Mis pedidos');
  R('Listar en «Mis pedidos» los pedidos del cliente, del más reciente al más antiguo, con fecha, total, estado y número de vendedores.', 'Dados 3 pedidos, cuando abre la lista, entonces el primero es el último que hizo.', 'M', 'MVP', ['BF54'], 'N-ENT-01');
  R('Ofrecer en cada pedido entregado el botón «Repetir pedido», que añade al carrito lo que siga disponible.', 'Dado un pedido con un producto agotado, cuando pulsa «Repetir», entonces se añaden los demás y avisa del agotado.', 'S', 'V2', ['BF22'], 'N-PLA-01');

  R.proc('RF-10', 'Incidencias, reembolsos y sustituciones');

  R.sub('RF-10.1', 'Abrir una incidencia');
  R('Mostrar en cada pedido entregado el botón «Tengo un problema».', 'Dado un pedido entregado, cuando lo abre, entonces ve el botón.', 'M', 'MVP', ['BF58'], 'N-INC-01');
  R('Permitir abrir incidencias hasta 48 horas después de la entrega en frescos y 14 días en despensa.', 'Dado un fresco entregado hace 50 h, cuando pulsa el botón, entonces ve «El plazo para frescos es de 48 horas».', 'M', 'MVP', ['BF59'], 'N-INC-01', { estado: 'Hipótesis' });
  R('Pedir el producto afectado (uno o varios) y el tipo: mal estado, falta, producto equivocado, caducado, otro.', 'Dado «mal estado» sin producto, cuando envía, entonces ve «Elige el producto».', 'M', 'MVP', ['BF58'], 'N-INC-01');
  R('Exigir al menos una foto en «mal estado», «equivocado» y «caducado», hasta 3 fotos de 5 MB.', 'Dado «mal estado» sin foto, cuando envía, entonces ve «Añade una foto del producto».', 'M', 'MVP', [], 'N-INC-01');
  R('Pedir una descripción opcional de hasta 500 caracteres.', 'Dados 501 caracteres, cuando escribe, entonces no se aceptan más.', 'S', 'MVP', [], 'N-INC-01');
  R('Dejar elegir la solución preferida: reembolso o sustitución en el próximo pedido.', 'Dada «sustitución», cuando se resuelve, entonces el producto se añade gratis al siguiente pedido.', 'S', 'MVP', [], 'N-INC-01');

  R.sub('RF-10.2', 'Resolución');
  R('Resolver en menos de 24 horas laborables con una persona del equipo, no con un bot.', 'Dada una incidencia abierta el lunes a las 10:00, cuando se resuelve, entonces es antes del martes a las 10:00.', 'M', 'MVP', ['BF62'], 'N-INC-01', { estado: 'Hipótesis', pos: 'Mejora', just: 'El comparativo F-04 señala que el delivery usa bots; la atención humana genera más confianza en fresco.' });
  R('Registrar el reembolso aprobado al momento como reembolso de prueba sobre el pago simulado; con pagos reales (V3) se devolverá al medio de pago original en un máximo de 5 días hábiles.', 'Dado un reembolso aprobado, cuando se registra, entonces el pedido muestra «Reembolso de prueba: <importe>» con fecha y no se hace ninguna transferencia.', 'M', 'MVP', ['BF60'], 'N-INC-01');
  R('No pedir la devolución física de perecederos.', 'Dado un yogur en mal estado, cuando se resuelve, entonces no se pide devolverlo.', 'M', 'MVP', ['BF61'], 'N-INC-01');
  R('Atribuir cada incidencia a su responsable: vendedor, hub o reparto, para las métricas y para la liquidación.', 'Dado un fallo del vendedor, cuando se resuelve, entonces el importe se descuenta de su liquidación.', 'S', 'V2', [], 'N-INC-01');
  R('Avisar al cliente por correo de la resolución con el importe y la fecha.', 'Dada una resolución, cuando se cierra, entonces llega el correo.', 'M', 'MVP', [], 'N-INC-01');

  R.sub('RF-10.3', 'Seguimiento de la incidencia');
  R('Mostrar las incidencias en el pedido con estado: Abierta, En revisión, Resuelta o Rechazada.', 'Dada una incidencia, cuando abre el pedido, entonces ve su estado.', 'M', 'MVP', [], 'N-INC-01');
  R('Permitir intercambiar mensajes con el equipo dentro de la incidencia.', 'Dado un mensaje del equipo, cuando llega, entonces el cliente puede responder en la misma pantalla.', 'S', 'V2', ['BF62'], 'N-INC-01');
  R('Exigir un motivo al rechazar una incidencia.', 'Dado un rechazo sin motivo, cuando el admin guarda, entonces no se permite.', 'M', 'MVP', [], 'N-INC-01');

  R.proc('RF-11', 'Valoraciones de productos y vendedores');

  R.sub('RF-11.1', 'Pedir la valoración');
  R('Pedir valoración 24 horas después de la entrega por correo y en «Mis pedidos».', 'Dado un pedido entregado ayer, cuando abre «Mis pedidos», entonces ve «Valora tu pedido».', 'S', 'V2', ['BF63'], 'N-CAT-01');
  R('Valorar cada vendedor del pedido de 1 a 5 estrellas y, opcionalmente, cada producto.', 'Dados 3 vendedores, cuando valora, entonces hay 3 bloques de estrellas.', 'S', 'V2', ['BF63'], 'N-CAT-01');
  R('Permitir un comentario de hasta 300 caracteres.', 'Dados 301 caracteres, cuando escribe, entonces no se aceptan más.', 'S', 'V2', [], 'N-CAT-01');
  R('Permitir valorar solo productos realmente comprados y entregados.', 'Dado un producto no comprado, cuando intenta valorarlo, entonces no se permite.', 'S', 'V2', [], 'N-CAT-03');

  R.sub('RF-11.2', 'Mostrar y moderar');
  R('Mostrar en el perfil del vendedor la media y el número de valoraciones a partir de 3.', 'Dadas 2 valoraciones, cuando se ve el perfil, entonces muestra «Pocas valoraciones todavía».', 'S', 'V2', ['BF63'], 'N-CAT-01');
  R('Moderar los comentarios antes de publicarlos: sin insultos, datos personales ni publicidad.', 'Dado un comentario con un teléfono, cuando se modera, entonces no se publica.', 'S', 'V2', [], 'N-CAT-03');
  R('Permitir al vendedor responder una vez a cada comentario.', 'Dada una respuesta, cuando se publica, entonces aparece bajo el comentario.', 'C', 'V2', [], 'N-VEN-01');
  R('No mostrar valoraciones inventadas ni contadores de prueba social mientras el proyecto sea conceptual.', 'Dado el modo conceptual, cuando se ve un perfil, entonces no hay estrellas de ejemplo.', 'S', 'V2', [], 'N-CAT-03', { estado: 'Decidido' });

  R.proc('RF-12', 'Asistente de IA para generar la cesta');

  R.sub('RF-12.1', 'Entrada');
  R('Ofrecer el asistente en /comprar#asistente y desde la portada con «Pide una cesta a la IA».', 'Dada la portada, cuando pulsa el acceso, entonces llega al asistente.', 'S', 'MVP', ['BF67'], 'N-IA-01');
  R('Pedir presupuesto (5 a 200 €), días (1 a 7), número de personas (1 a 6) y tiempo para cocinar (poco, normal, mucho).', 'Dado un presupuesto de 3 €, cuando envía, entonces ve «El presupuesto mínimo es de 5 €».', 'S', 'MVP', ['BF67'], 'N-IA-01', { pos: 'Diferencial', just: 'Wetaca sugiere un menú semanal propio; ninguno verificado arma una cesta de varios vendedores por presupuesto.' });
  R('Permitir escribir la petición en lenguaje natural («Tengo 25 € y 4 días»).', 'Dado ese texto, cuando lo envía, entonces el asistente rellena presupuesto 25 € y 4 días.', 'S', 'MVP', [], 'N-IA-01');
  R('Rellenar por defecto con las preferencias guardadas del cliente.', 'Dado un presupuesto guardado de 30 €, cuando abre el asistente, entonces aparece 30 €.', 'S', 'MVP', ['BF11'], 'N-IA-01');

  R.sub('RF-12.2', 'Generación de la cesta');
  R('Proponer una cesta solo con productos disponibles de la zona y del día de entrega elegido.', 'Dado un producto agotado, cuando se genera la cesta, entonces no aparece.', 'S', 'MVP', ['BF24'], 'N-PLA-01');
  R('No superar el presupuesto indicado; si no es posible, decirlo: «Con 8 € para 4 días no llegamos. Te proponemos 2 días.»', 'Dados 8 € y 4 días, cuando se genera, entonces ve ese mensaje.', 'S', 'MVP', [], 'N-PLA-02');
  R('Excluir siempre los productos con alérgenos guardados del cliente, también por trazas.', 'Dado un cliente alérgico al gluten, cuando se genera la cesta, entonces ningún producto contiene gluten ni trazas.', 'S', 'MVP', ['BF15'], 'N-CAT-02', { estado: 'Decidido' });
  R('Mostrar la cesta agrupada por vendedor, como el carrito.', 'Dada una cesta de 3 vendedores, cuando se muestra, entonces hay 3 grupos.', 'S', 'MVP', ['BF24'], 'N-CAR-01');
  R('Responder en 10 segundos como máximo; si tarda más, mostrar «Estamos preparando tu cesta…» con una animación suave.', 'Dada una respuesta de 12 s, cuando pasa de 10 s, entonces ve el mensaje.', 'S', 'MVP', [], 'N-PLA-01');

  R.sub('RF-12.3', 'Explicación y ajuste');
  R('Explicar en cada producto por qué se propone («Para 3 cenas · aguanta 5 días en nevera»).', 'Dada una cesta, cuando se ve un producto, entonces tiene su motivo.', 'S', 'MVP', ['BF68'], 'N-IA-02', { pos: 'Mejora', just: 'Ningún competidor recorrido explica sus recomendaciones («Otros también compraron», «Productos relacionados», platos «similares»); solo la etiqueta ambiental de Open Food Network dice en qué se basa (recorrido del 23/10/2026).' });
  R('Permitir quitar, cambiar la cantidad o pedir «Otra opción» en cada producto.', 'Dado «Otra opción», cuando la pulsa, entonces se cambia por un producto de la misma categoría.', 'S', 'MVP', [], 'N-IA-01');
  R('Permitir pasar toda la cesta al carrito con «Añadir todo al carrito».', 'Dada una cesta de 9 productos, cuando pulsa el botón, entonces el carrito tiene los 9.', 'S', 'MVP', [], 'N-IA-01');
  R('No añadir nada al carrito sin que el cliente lo confirme.', 'Dada una cesta generada, cuando no pulsa nada, entonces el carrito no cambia.', 'S', 'MVP', [], 'N-IA-02', { estado: 'Decidido' });

  R.sub('RF-12.4', 'Transparencia');
  R('Indicar de forma visible «Propuesta generada por IA. Revísala antes de comprar.»', 'Dada una cesta, cuando se muestra, entonces aparece ese aviso.', 'S', 'MVP', [], 'N-IA-02', { estado: 'Decidido' });
  R('No incluir productos patrocinados en las propuestas de la IA.', 'Dado un producto patrocinado, cuando se genera la cesta, entonces no aparece por ser patrocinado.', 'S', 'MVP', ['BF81'], 'N-IA-02', { estado: 'Decidido' });
  R('No hacer afirmaciones médicas ni nutricionales (por ejemplo «adelgaza» o «cura»).', 'Dada una explicación, cuando se revisa, entonces no contiene afirmaciones de salud.', 'S', 'MVP', [], 'N-IA-02', { estado: 'Decidido' });
  R('No prometer ahorro frente al supermercado mientras no esté demostrado.', 'Dada una explicación, cuando se revisa, entonces no dice «más barato que el súper».', 'S', 'MVP', [], 'N-IA-02', { estado: 'Decidido' });

  R.sub('RF-12.5', 'Plan de comidas y después de comprar');
  R('Proponer un plan de comidas por días con los productos de la cesta.', 'Dada una cesta para 4 días, cuando pulsa «Ver plan», entonces ve 4 días con sus comidas.', 'C', 'V2', ['BF67'], 'N-PLA-01');
  R('Proponer recetas sencillas con lo comprado, de 30 minutos o menos si el tiempo es «poco».', 'Dado «poco tiempo», cuando ve las recetas, entonces todas son de 30 min o menos.', 'C', 'V2', ['BF67'], 'N-PLA-01');
  R('Enviar tras la entrega un aviso «Consume primero» con los productos de vida útil más corta.', 'Dado un pedido con pescado, cuando se entrega, entonces el aviso lo pone primero.', 'S', 'V2', ['BF69'], 'N-CAD-01', { pos: 'Diferencial', just: 'Ninguno verificado ayuda a gestionar lo ya comprado; Too Good To Go solo cuenta el impacto.' });
  R('Sugerir la siguiente compra cuando se acerque el fin de los días planificados.', 'Dado un plan de 4 días, cuando llega el día 3, entonces recibe «¿Preparamos tu próxima cesta?»', 'C', 'V2', [], 'N-PLA-01');

  R.proc('RF-13', 'Panel de administración');

  R.sub('RF-13.1', 'Acceso');
  R('Entrar al panel por /admin con usuario y contraseña propios, sin enlace visible desde la web pública salvo un acceso discreto en el pie.', 'Dada la portada, cuando se busca un botón de admin, entonces solo está el enlace discreto del pie.', 'M', 'MVP', [], 'N-CUE-01', { estado: 'Decidido' });
  R('Mostrar una barra lateral fija a la izquierda con las secciones y la activa marcada.', 'Dado /admin, cuando se cambia de sección, entonces la barra marca la nueva.', 'M', 'MVP', [], 'N-CUE-01', { estado: 'Decidido' });
  R('Cerrar la sesión de administración tras 30 minutos sin actividad.', 'Dados 31 min sin actividad, cuando pulsa algo, entonces debe entrar de nuevo.', 'M', 'MVP', [], 'N-CUE-01');

  R.sub('RF-13.2', 'Vendedores');
  R('Listar las solicitudes de alta con filtros por estado y zona.', 'Dado el filtro «En revisión», cuando se aplica, entonces solo salen esas.', 'M', 'MVP', ['BF70'], 'N-VEN-07');
  R('Ver el detalle de cada solicitud con documentos y cambiar su estado con motivo.', 'Dado un rechazo, cuando se guarda con motivo, entonces se envía al vendedor.', 'M', 'MVP', ['BF70'], 'N-VEN-07');
  R('Suspender a un vendedor ocultando sus productos sin borrarlos y con motivo registrado.', 'Dado un vendedor suspendido, cuando un cliente busca sus productos, entonces no aparecen.', 'S', 'V2', [], 'N-CAT-01');

  R.sub('RF-13.3', 'Catálogo, pedidos e incidencias');
  R('Revisar y retirar productos que incumplan las normas, avisando al vendedor.', 'Dado un producto retirado por el admin, cuando ocurre, entonces el vendedor recibe el motivo.', 'S', 'V2', [], 'N-CAT-01');
  R('Ver todos los pedidos con sus subpedidos y estados, con búsqueda por número.', 'Dado F4A-2026-00012, cuando lo busca, entonces ve su detalle.', 'M', 'MVP', ['BF54'], 'N-HUB-03');
  R('Gestionar la cola de incidencias ordenada por antigüedad, con el plazo de 24 h visible.', 'Dada una incidencia de hace 20 h, cuando se ve la cola, entonces aparece en naranja.', 'M', 'MVP', ['BF58'], 'N-INC-01');

  R.sub('RF-13.4', 'Contenido, métricas y auditoría');
  R('Editar desde el panel las preguntas frecuentes, los textos legales y los avisos de la portada.', 'Dado un cambio en la FAQ, cuando se guarda, entonces se ve en la web.', 'S', 'V2', [], 'N-CAT-03');
  R('Mostrar métricas: pedidos, ticket medio, vendedores por zona, recurrencia de clientes e incidencias por cada 100 pedidos.', 'Dado el panel, cuando se abre «Métricas», entonces se ven esas cinco.', 'S', 'V2', [], 'N-CAT-01');
  R('Registrar en un historial quién cambió qué y cuándo en vendedores, productos, pedidos e incidencias.', 'Dado un cambio de estado, cuando se consulta el historial, entonces aparece con autor y hora.', 'S', 'V2', [], 'N-CAT-01');
  R('Mostrar los hitos y tareas del proyecto leídos de Asana, solo para el equipo.', 'Dado el panel, cuando se abre «Hitos», entonces se ven las tareas de Asana.', 'W', 'Excluido', [], 'N-CAR-01', { estado: 'Decidido', pos: 'Sin referente', just: 'Funcionalidad interna del proyecto académico.' });

  R.proc('RF-14', 'Suscripción');

  R.sub('RF-14.1', 'Suscripción opcional');
  R('Anunciar la suscripción como «Próximamente», sin precios, mientras no esté decidida.', 'Dado el modo conceptual, cuando se ve la suscripción, entonces no hay precios.', 'C', 'V3', ['BF64'], 'N-PLA-02', { estado: 'Decidido' });
  R('Ofrecer una suscripción con envío gratis y cesta semanal propuesta por la IA.', 'Dado un suscriptor, cuando paga un pedido, entonces el envío es 0 €.', 'C', 'V3', ['BF64', 'BF27'], 'N-PLA-02', { estado: 'Pendiente' });
  R('Permitir pausar la suscripción las semanas que se quiera antes del cierre semanal.', 'Dada una pausa antes del cierre, cuando llega la semana, entonces no se genera cesta.', 'C', 'V3', ['BF65'], 'N-PLA-02');
  R('Permitir cancelar la suscripción en cualquier momento sin coste y con dos clics.', 'Dado «Cancelar», cuando confirma, entonces no hay más cobros.', 'C', 'V3', ['BF66'], 'N-CAT-03');
};
