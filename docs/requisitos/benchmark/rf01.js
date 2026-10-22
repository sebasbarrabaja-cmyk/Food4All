// RF-01 · Registro, inicio de sesión y roles. Diseño: docs/DISENO.md (tokens de tokens.css).
module.exports = (R) => {
  R.proc('RF-01', 'Registro, inicio de sesión y roles');

  R.sub('RF-01.1', 'Punto de entrada y pantalla de acceso');
  R('Mostrar el enlace de texto «Entrar» en la cabecera verde, a la derecha de «Cómo funciona» y separado 24 px; no es un botón, para mantener los tres botones principales.', 'Dado un visitante sin sesión, cuando carga cualquier página pública, entonces ve «Entrar» a la derecha de «Cómo funciona».', 'M', 'MVP', ['BF01'], 'N-CAR-01', { estado: 'Decidido' });
  R('Llevar el enlace «Entrar» a la ruta /entrar.', 'Dado un visitante, cuando pulsa «Entrar», entonces la URL pasa a /entrar.', 'M', 'MVP', [], 'N-CAR-01');
  R('Mostrar /entrar sobre fondo crema --bg #F6F1E6 con la cabecera y el pie normales de la web.', 'Dada la ruta /entrar, cuando se carga, entonces el fondo es #F6F1E6 y se ven cabecera y pie.', 'M', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('Mostrar el acceso en una tarjeta centrada de 420 px de ancho, fondo blanco --surface, borde 1 px --border #DDD0B0, radio 10 px, sin sombra y 32 px de relleno.', 'Dada una pantalla de 1280 px, cuando se carga /entrar, entonces la tarjeta mide 420 px y está centrada.', 'M', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('Titular la tarjeta «Entra en FOOD4ALL» en Fraunces 600, tamaño h2 y color --green #2F5233.', 'Dada /entrar, cuando se carga, entonces el título es exactamente «Entra en FOOD4ALL».', 'M', 'MVP', [], 'N-CAR-01');
  R('Mostrar bajo el título el texto «Compra a varios vendedores locales con una sola cuenta.» en Figtree 17 px y color --text-soft #4A5340.', 'Dada /entrar, cuando se carga, entonces se ve ese texto bajo el título.', 'S', 'MVP', [], 'N-CAR-01');
  R('Ordenar la tarjeta así: título, subtítulo, botón de Google, separador «o con tu correo», formulario y enlaces de pie.', 'Dada /entrar, cuando se recorre de arriba abajo, entonces los elementos aparecen en ese orden.', 'M', 'MVP', [], 'N-CAR-01');
  R('Mostrar en el pie de la tarjeta «¿No tienes cuenta? Crear cuenta» con enlace a /registro.', 'Dada /entrar, cuando pulsa «Crear cuenta», entonces llega a /registro.', 'M', 'MVP', ['BF01'], 'N-CAR-01');
  R('Mostrar bajo el anterior «¿Vendes productos locales? Solicita el alta» con enlace a /vender#alta.', 'Dada /entrar, cuando pulsa «Solicita el alta», entonces llega al formulario de alta de vendedor.', 'S', 'MVP', ['BF70'], 'N-VEN-06');
  R('Guardar la página de origen en el parámetro volver cuando se exige sesión (por ejemplo /entrar?volver=/carrito) y redirigir a ella tras entrar.', 'Dado un visitante que pulsa «Pagar» sin sesión, cuando entra, entonces vuelve a /carrito con el carrito intacto.', 'M', 'MVP', ['BF28'], 'N-CAR-01');
  R('Aceptar en volver solo rutas internas que empiecen por «/»; cualquier otra se ignora y se usa la redirección por rol.', 'Dado volver=https://otra.web, cuando entra, entonces no sale de FOOD4ALL.', 'M', 'MVP', [], 'N-CUE-01');
  R('En pantallas de menos de 768 px, mostrar la tarjeta a ancho completo con 16 px de margen lateral.', 'Dado un móvil de 375 px, cuando abre /entrar, entonces la tarjeta ocupa 343 px.', 'S', 'V2', [], 'N-CAR-01');

  R.sub('RF-01.2', 'Inicio de sesión con correo y contraseña');
  R('Pedir el correo en un campo de tipo email con etiqueta visible «Correo electrónico» y autocompletado email.', 'Dado el formulario, cuando el foco entra en el campo, entonces el lector de pantalla anuncia «Correo electrónico».', 'M', 'MVP', ['BF01'], 'N-CAR-01');
  R('Pedir la contraseña en un campo de tipo password con etiqueta «Contraseña» y autocompletado current-password.', 'Dado el formulario, cuando escribe, entonces los caracteres se ocultan.', 'M', 'MVP', ['BF01'], 'N-CAR-01');
  R('Dar a los campos 48 px de alto, borde 1 px #DDD0B0 y radio 10 px; al enfocarlos, borde de 2 px --green.', 'Dado un campo, cuando recibe el foco, entonces su borde pasa a 2 px #2F5233.', 'M', 'MVP', [], 'N-CAR-01');
  R('Incluir un icono de ojo en el campo de contraseña que la muestra u oculta, con texto alternativo «Mostrar contraseña» / «Ocultar contraseña».', 'Dada una contraseña escrita, cuando pulsa el ojo, entonces se ve en claro y el texto alternativo cambia.', 'S', 'MVP', [], 'N-CAR-01');
  R('Incluir la casilla «Mantener la sesión iniciada», desmarcada por defecto.', 'Dado /entrar, cuando se carga, entonces la casilla está desmarcada.', 'S', 'MVP', [], 'N-CAR-01');
  R('Mostrar el enlace «¿Has olvidado tu contraseña?» alineado a la derecha, encima del botón «Entrar».', 'Dado /entrar, cuando pulsa el enlace, entonces llega a /recuperar.', 'M', 'MVP', ['BF07'], 'N-CAR-01');
  R('Mostrar el botón «Entrar» a ancho completo, 48 px, forma píldora, fondo --accent #D9822B y texto --on-accent #23301F en Figtree 600.', 'Dado /entrar, cuando se carga, entonces el botón es naranja #D9822B con texto «Entrar».', 'M', 'MVP', [], 'N-CAR-01', { estado: 'Decidido' });
  R('Mientras se comprueban las credenciales, cambiar el texto del botón a «Entrando…» y desactivarlo.', 'Dada una petición en curso, cuando pulsa otra vez, entonces no se envía una segunda petición.', 'M', 'MVP', [], 'N-CAR-01');
  R('Validar en el navegador el formato del correo y mostrar «Escribe un correo válido, por ejemplo nombre@correo.com» bajo el campo en rojo #C0392B.', 'Dado «ana@», cuando pulsa «Entrar», entonces sale ese mensaje y el foco va al campo.', 'M', 'MVP', [], 'N-CAR-01');
  R('Si la contraseña está vacía, mostrar «Escribe tu contraseña» bajo el campo.', 'Dada la contraseña vacía, cuando pulsa «Entrar», entonces sale ese mensaje.', 'M', 'MVP', [], 'N-CAR-01');
  R('Si las credenciales no son correctas, mostrar encima del formulario, con fondo --tint-tomato #F6DCD3, «El correo o la contraseña no son correctos.» sin decir cuál falla.', 'Dada una contraseña incorrecta, cuando pulsa «Entrar», entonces ve ese aviso y el campo contraseña se vacía.', 'M', 'MVP', [], 'N-CUE-01');
  R('Redirigir tras entrar según el rol: cliente a /comprar/cliente y vendedor a /vender/panel, salvo que exista volver.', 'Dado un vendedor, cuando entra, entonces llega a /vender/panel.', 'M', 'MVP', [], 'N-CAR-01');
  R('Bloquear la cuenta 15 minutos tras 5 intentos fallidos seguidos con el mismo correo y mostrar «Has superado los intentos. Prueba de nuevo en 15 minutos o recupera tu contraseña.»', 'Dados 5 fallos, cuando lo intenta por sexta vez con la contraseña correcta, entonces no entra y ve el aviso.', 'M', 'MVP', [], 'N-CUE-01');
  R('Cerrar la sesión tras 2 horas sin actividad si no se marcó «Mantener la sesión»; con ella, tras 30 días.', 'Dada una sesión sin marcar, cuando pasan 2 h sin actividad, entonces la siguiente acción pide entrar.', 'M', 'MVP', [], 'N-CUE-01');
  R('Permitir que un vendedor con el alta «En revisión» entre, pero mostrarle solo el estado de su solicitud.', 'Dado un vendedor en revisión, cuando entra, entonces ve su solicitud y no el panel completo.', 'M', 'MVP', ['BF70'], 'N-VEN-07');
  R('Enviar el formulario con la tecla Intro desde cualquiera de los dos campos.', 'Dado el foco en contraseña, cuando pulsa Intro, entonces se envía el formulario.', 'S', 'MVP', [], 'N-CAR-01');
  R('Seguir el orden de tabulación: Google, correo, contraseña, ojo, casilla, enlace de olvido, «Entrar».', 'Dado el teclado, cuando pulsa Tab desde el inicio, entonces recorre los elementos en ese orden.', 'M', 'MVP', [], 'N-CAR-01');
  R('Anunciar los mensajes de error con aria-live para lectores de pantalla.', 'Dado un error, cuando aparece, entonces el lector de pantalla lo lee sin mover el foco a mano.', 'M', 'MVP', [], 'N-CAR-01');

  R.sub('RF-01.3', 'Inicio de sesión con Google');
  R('Mostrar como primer elemento del acceso el botón «Continuar con Google», ancho completo, 48 px, fondo blanco, borde 1 px #DDD0B0 y logo oficial de Google a la izquierda.', 'Dada /entrar, cuando se carga, entonces el primer botón es «Continuar con Google».', 'S', 'MVP', ['BF02'], 'N-CAR-01');
  R('Usar OAuth 2.0 de Google pidiendo solo nombre, correo y foto de perfil.', 'Dado el consentimiento de Google, cuando se muestra, entonces solo pide esos tres datos.', 'S', 'MVP', ['BF02'], 'N-CUE-01');
  R('Si el correo de Google ya tiene cuenta, entrar directamente con su rol.', 'Dado un cliente registrado con ese correo, cuando acepta en Google, entonces entra como cliente.', 'S', 'MVP', ['BF02'], 'N-CAR-01');
  R('Si el correo es nuevo, crear una cuenta de cliente y pedir en un paso extra la zona (Málaga, Sevilla o Granada) y la aceptación de condiciones.', 'Dado un correo nuevo, cuando vuelve de Google, entonces ve el paso de zona y condiciones.', 'S', 'MVP', ['BF02', 'BF10'], 'N-CAR-01');
  R('No crear la cuenta hasta que se acepten las condiciones en el paso extra.', 'Dado el paso extra sin aceptar, cuando pulsa «Continuar», entonces no se crea la cuenta.', 'M', 'MVP', [], 'N-CUE-01');
  R('Si el usuario cierra la ventana de Google, volver a /entrar sin mostrar error.', 'Dada la ventana de Google cerrada, cuando vuelve, entonces sigue en /entrar sin aviso.', 'S', 'MVP', [], 'N-CAR-01');
  R('No permitir crear cuentas de vendedor con Google; las altas de vendedor pasan por RF-02.', 'Dado un correo nuevo de Google, cuando se crea la cuenta, entonces su rol es cliente.', 'M', 'MVP', [], 'N-VEN-07');
  R('Si el correo de Google ya existe con contraseña, pedirla una vez para vincular ambas formas de acceso.', 'Dada una cuenta con contraseña, cuando entra con Google por primera vez, entonces se le pide la contraseña para vincular.', 'S', 'V2', ['BF02'], 'N-CAR-01');
  R('Ofrecer «Continuar con Apple» en la app de iPhone cuando exista app nativa.', 'Dado un iPhone con la app, cuando abre el acceso, entonces ve «Continuar con Apple».', 'C', 'V3', ['BF03'], 'N-CAR-01');

  R.sub('RF-01.4', 'Registro de cuenta de cliente');
  R('Ofrecer el registro en /registro con la misma tarjeta y estilo que /entrar y el título «Crea tu cuenta».', 'Dado /registro, cuando se carga, entonces el título es «Crea tu cuenta».', 'M', 'MVP', ['BF01'], 'N-CAR-01');
  R('Pedir el nombre (2 a 40 caracteres); si falta, mostrar «Escribe tu nombre».', 'Dado un nombre de 1 carácter, cuando envía, entonces ve el mensaje.', 'M', 'MVP', ['BF01'], 'N-CAR-01');
  R('Pedir el correo y comprobar que no está registrado; si lo está, mostrar «Ya hay una cuenta con este correo. ¿Quieres entrar?» con enlace a /entrar.', 'Dado un correo registrado, cuando envía, entonces ve el aviso con el enlace.', 'M', 'MVP', ['BF01'], 'N-CAR-01');
  R('Exigir una contraseña de al menos 8 caracteres con una letra y un número; si no, «Usa al menos 8 caracteres con letras y números».', 'Dado «abcdefgh», cuando envía, entonces ve el mensaje.', 'M', 'MVP', ['BF01'], 'N-CUE-01');
  R('Mostrar bajo la contraseña una barra de fortaleza de 4 tramos que se actualiza al escribir.', 'Dada una contraseña de 12 caracteres con símbolos, cuando la escribe, entonces se llenan los 4 tramos.', 'C', 'V2', [], 'N-CUE-01');
  R('Pedir la zona con un desplegable obligatorio: Málaga, Sevilla o Granada; si falta, «Elige tu zona».', 'Dada la zona vacía, cuando envía, entonces ve el mensaje.', 'M', 'MVP', ['BF10'], 'N-CAR-01');
  R('Exigir la casilla «Acepto las Condiciones de uso y la Política de privacidad», con ambos títulos enlazados; si falta, «Para crear la cuenta tienes que aceptar las condiciones».', 'Dada la casilla sin marcar, cuando envía, entonces no se crea la cuenta.', 'M', 'MVP', ['BF85'], 'N-CUE-01', { estado: 'Decidido' });
  R('Ofrecer la casilla opcional «Quiero recibir novedades por correo», desmarcada por defecto.', 'Dado /registro, cuando se carga, entonces la casilla está desmarcada.', 'S', 'MVP', [], 'N-CUE-01');
  R('No pedir alergias ni datos de salud en el registro.', 'Dado /registro, cuando se revisan los campos, entonces no hay ninguno de salud.', 'M', 'MVP', [], 'N-CUE-01', { estado: 'Decidido' });
  R('Mostrar el botón «Crear cuenta» con el mismo estilo que «Entrar».', 'Dado /registro, cuando se carga, entonces el botón es naranja #D9822B.', 'M', 'MVP', [], 'N-CAR-01');
  R('Al crear la cuenta, iniciar sesión y llevar a /comprar/cliente con el aviso «Te hemos enviado un correo para confirmar tu cuenta.»', 'Dado un registro correcto, cuando termina, entonces ve el aviso en /comprar/cliente.', 'M', 'MVP', [], 'N-CAR-01');

  R.sub('RF-01.5', 'Verificación del correo');
  R('Enviar al registrarse un correo con el botón «Confirmar mi correo» y un enlace válido 24 horas.', 'Dado un registro, cuando llega el correo, entonces el enlace caduca a las 24 h.', 'M', 'MVP', ['BF05'], 'N-CUE-01');
  R('Permitir navegar y llenar el carrito sin verificar, pero no pagar.', 'Dado un cliente sin verificar, cuando pulsa «Pagar», entonces ve «Confirma tu correo para poder pagar. Reenviar correo».', 'M', 'MVP', ['BF05'], 'N-CUE-01');
  R('Permitir reenviar el correo de verificación como máximo una vez cada 2 minutos.', 'Dado un reenvío, cuando pulsa otra vez antes de 2 min, entonces el botón está desactivado con la cuenta atrás.', 'S', 'MVP', [], 'N-CUE-01');
  R('Si el enlace ha caducado, mostrar «Este enlace ha caducado» y un botón «Enviar otro».', 'Dado un enlace de hace 25 h, cuando lo abre, entonces ve ese aviso.', 'M', 'MVP', [], 'N-CUE-01');

  R.sub('RF-01.6', 'Recuperación de contraseña');
  R('Ofrecer /recuperar con el título «Recupera tu contraseña», un campo de correo y el botón naranja «Enviar enlace».', 'Dado /recuperar, cuando se carga, entonces ve ese título y ese botón.', 'M', 'MVP', ['BF07'], 'N-CAR-01');
  R('Responder siempre «Si hay una cuenta con ese correo, te hemos enviado un enlace. Revisa también la carpeta de spam.», exista o no la cuenta.', 'Dado un correo no registrado, cuando lo envía, entonces ve el mismo mensaje.', 'M', 'MVP', [], 'N-CUE-01');
  R('Enviar un enlace de un solo uso válido 60 minutos con el botón «Cambiar contraseña».', 'Dado un enlace usado, cuando lo abre otra vez, entonces ve «Este enlace ya no sirve. Pide otro.»', 'M', 'MVP', ['BF07'], 'N-CUE-01');
  R('Mostrar en /recuperar/nueva los campos «Nueva contraseña» y «Repite la contraseña» con las reglas del registro y el botón «Guardar contraseña».', 'Dadas dos contraseñas distintas, cuando guarda, entonces ve «Las contraseñas no coinciden».', 'M', 'MVP', ['BF07'], 'N-CUE-01');
  R('Al cambiar la contraseña, cerrar todas las sesiones abiertas y llevar a /entrar con el aviso verde #2F7D4B «Contraseña cambiada. Ya puedes entrar.»', 'Dada una sesión abierta en otro navegador, cuando cambia la contraseña, entonces esa sesión se cierra.', 'M', 'MVP', [], 'N-CUE-01');
  R('Limitar a 3 las peticiones de recuperación por correo y hora.', 'Dadas 3 peticiones en una hora, cuando pide la cuarta, entonces no se envía correo.', 'S', 'MVP', [], 'N-CUE-01');
  R('Avisar por correo de que la contraseña ha cambiado, con un enlace «No he sido yo».', 'Dado un cambio de contraseña, cuando termina, entonces llega el aviso al correo.', 'S', 'V2', ['BF07'], 'N-CUE-01');

  R.sub('RF-01.7', 'Menú de usuario y cierre de sesión');
  R('Con sesión, sustituir «Entrar» por un círculo de 36 px con las iniciales (fondo --saffron #E3A82B, texto --text) y el nombre en crema a su derecha.', 'Dada una sesión de «Ana López», cuando carga la cabecera, entonces ve «AL» y «Ana».', 'M', 'MVP', [], 'N-CAR-01');
  R('Abrir al pulsarlo un menú de 240 px, fondo blanco, borde 1 px #DDD0B0, radio 10 px y opciones de 44 px.', 'Dado el círculo, cuando lo pulsa, entonces se abre el menú bajo él.', 'M', 'MVP', [], 'N-CAR-01');
  R('Mostrar al cliente, en este orden: Mis pedidos, Mi carrito, Preferencias, Mis datos, Cerrar sesión.', 'Dado un cliente, cuando abre el menú, entonces ve esas cinco opciones en ese orden.', 'M', 'MVP', [], 'N-CAR-01');
  R('Mostrar al vendedor, en este orden: Mi panel, Mis productos, Pedidos recibidos, Datos del negocio, Cerrar sesión.', 'Dado un vendedor, cuando abre el menú, entonces ve esas cinco opciones en ese orden.', 'M', 'MVP', [], 'N-VEN-02');
  R('Separar «Cerrar sesión» con una línea y mostrarlo en rojo #C0392B.', 'Dado el menú, cuando se abre, entonces «Cerrar sesión» es la última opción y en rojo.', 'S', 'MVP', [], 'N-CAR-01');
  R('Cerrar el menú al pulsar fuera o con la tecla Escape y devolver el foco al círculo.', 'Dado el menú abierto, cuando pulsa Escape, entonces se cierra y el foco vuelve al círculo.', 'M', 'MVP', [], 'N-CAR-01');
  R('Al cerrar sesión, invalidarla en el servidor, ir a la portada y mostrar 4 s «Has cerrado la sesión.»', 'Dado un cierre de sesión, cuando vuelve atrás en el navegador, entonces no ve datos privados.', 'M', 'MVP', [], 'N-CUE-01');
  R('Conservar el carrito del cliente en su cuenta al cerrar sesión.', 'Dado un carrito con 3 productos, cuando cierra sesión y vuelve a entrar, entonces sigue con 3 productos.', 'M', 'MVP', ['BF28'], 'N-CAR-01');

  R.sub('RF-01.8', 'Mis datos y direcciones');
  R('Ofrecer «Mis datos» con nombre, correo, teléfono opcional y contraseña, cada uno editable con su botón «Guardar».', 'Dado un cambio de nombre, cuando guarda, entonces la cabecera muestra el nombre nuevo.', 'M', 'MVP', [], 'N-CAR-01');
  R('Exigir la contraseña actual para cambiar el correo o la contraseña.', 'Dado un cambio de correo, cuando no escribe la contraseña actual, entonces no se guarda.', 'M', 'MVP', ['BF07'], 'N-CUE-01');
  R('Al cambiar el correo, enviar verificación a la dirección nueva y mantener la antigua hasta confirmarla.', 'Dado un correo nuevo sin confirmar, cuando entra, entonces sigue usando el antiguo.', 'S', 'MVP', [], 'N-CUE-01');
  R('Permitir guardar hasta 5 direcciones con alias (Casa, Piso…), calle, número, piso, código postal, ciudad e indicaciones para el repartidor.', 'Dadas 5 direcciones, cuando intenta añadir la sexta, entonces ve «Puedes guardar hasta 5 direcciones».', 'S', 'MVP', ['BF09'], 'N-CAR-01');
  R('Marcar una dirección como predeterminada para el checkout.', 'Dada una dirección predeterminada, cuando llega al checkout, entonces aparece seleccionada.', 'S', 'MVP', ['BF09'], 'N-CAR-01');
  R('Comprobar que el código postal de cada dirección está en una zona con servicio; si no, «Todavía no llegamos a este código postal».', 'Dado el código 28001, cuando guarda, entonces ve el aviso.', 'M', 'MVP', ['BF10'], 'N-CAR-01');

  R.sub('RF-01.9', 'Preferencias, dieta y alergias');
  R('Ofrecer «Preferencias» con presupuesto semanal orientativo, número de personas del piso y tipo de dieta (omnívora, vegetariana, vegana).', 'Dado un presupuesto de 30 €, cuando guarda, entonces el asistente lo usa por defecto.', 'S', 'MVP', ['BF11'], 'N-PLA-02');
  R('Pedir consentimiento explícito y separado antes de guardar alergias o intolerancias, con el texto «Guardaremos tus alergias solo para avisarte y filtrar productos. Puedes borrarlas cuando quieras.»', 'Dado el consentimiento sin marcar, cuando intenta guardar alergias, entonces no se guardan.', 'M', 'MVP', [], 'N-CAT-02', { estado: 'Decidido' });
  R('Usar la lista de 14 alérgenos del Reglamento (UE) 1169/2011 como casillas.', 'Dada la sección de alergias, cuando se abre, entonces hay 14 casillas.', 'M', 'MVP', ['BF15'], 'N-CAT-02', { estado: 'Decidido' });
  R('Permitir retirar el consentimiento y borrar las alergias con un botón «Borrar mis alergias».', 'Dado un borrado, cuando confirma, entonces las alergias desaparecen y no se usan.', 'M', 'MVP', ['BF08'], 'N-CUE-01');

  R.sub('RF-01.10', 'Privacidad y baja de la cuenta');
  R('Permitir descargar todos los datos personales en un archivo JSON desde «Mis datos».', 'Dado un cliente, cuando pulsa «Descargar mis datos», entonces recibe un JSON con sus datos y pedidos.', 'M', 'MVP', ['BF08'], 'N-CUE-01', { estado: 'Decidido' });
  R('Permitir eliminar la cuenta tras confirmar con la contraseña y el texto «Entiendo que se borrarán mis datos».', 'Dada la eliminación confirmada, cuando termina, entonces no puede volver a entrar con ese correo y contraseña.', 'M', 'MVP', ['BF08'], 'N-CUE-01', { estado: 'Decidido' });
  R('Conservar anonimizados los pedidos de una cuenta eliminada durante el plazo legal de facturación.', 'Dada una cuenta eliminada, cuando el admin consulta sus pedidos, entonces no ve nombre ni correo.', 'M', 'MVP', [], 'N-CUE-01');
  R('No permitir eliminar la cuenta con un pedido en curso; avisar «Tienes un pedido en camino. Podrás eliminar la cuenta cuando se entregue.»', 'Dado un pedido en reparto, cuando intenta eliminar la cuenta, entonces ve el aviso.', 'M', 'MVP', [], 'N-CUE-01');
};
