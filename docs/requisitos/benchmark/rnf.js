// Requisitos no funcionales, uno por métrica verificable.
module.exports = (R) => {
  R.proc('RNF-01', 'Seguridad', 'RNF');
  R.sub('RNF-01.1', 'Autenticación y sesiones');
  R('Guardar las contraseñas solo con hash bcrypt de coste 12 o superior.', 'Dada la base de datos, cuando se revisa, entonces no hay ninguna contraseña en claro.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Servir toda la web por HTTPS con TLS 1.2 o superior y redirigir HTTP a HTTPS.', 'Dada una petición http://, cuando llega, entonces se redirige con código 301.', 'M', 'MVP', [], 'N-07');
  R('Usar cookies de sesión HttpOnly, Secure y SameSite=Lax.', 'Dada la cookie de sesión, cuando se inspecciona, entonces tiene los tres atributos.', 'M', 'MVP', [], 'N-07');
  R('Regenerar el identificador de sesión al iniciar sesión.', 'Dado un inicio de sesión, cuando termina, entonces el identificador es distinto del anterior.', 'M', 'MVP', [], 'N-07');
  R('Proteger los formularios que cambian datos contra CSRF.', 'Dada una petición sin token CSRF, cuando llega, entonces se rechaza con 403.', 'M', 'MVP', [], 'N-07');
  R.sub('RNF-01.2', 'Autorización y datos de entrada');
  R('Comprobar el rol en el servidor en cada acción; ocultar un botón no basta.', 'Dado un cliente que llama a la API de vendedor, cuando lo intenta, entonces recibe 403.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Validar en el servidor todos los datos de entrada, aunque ya se validen en el navegador.', 'Dado un precio negativo enviado a la API, cuando llega, entonces se rechaza con 400.', 'M', 'MVP', [], 'N-07');
  R('Escapar todo texto de usuario al mostrarlo para evitar inyección de código (XSS).', 'Dado un nombre «<script>», cuando se muestra, entonces aparece como texto.', 'M', 'MVP', [], 'N-07');
  R('Usar consultas parametrizadas en la base de datos.', 'Dado un buscador con «\' OR 1=1», cuando busca, entonces no devuelve datos ajenos.', 'M', 'MVP', [], 'N-07');
  R('Guardar los secretos (claves de API, Asana) solo en variables de entorno del servidor, nunca en el frontend ni en el repositorio.', 'Dado el repositorio, cuando se busca un token, entonces no aparece.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Limitar a 100 peticiones por minuto e IP las rutas públicas de la API.', 'Dadas 101 peticiones en un minuto, cuando llega la 101, entonces recibe 429.', 'S', 'V2', [], 'N-07');
  R('Comprobar el tipo real de los archivos subidos y rechazar los ejecutables.', 'Dado un .exe renombrado a .jpg, cuando se sube, entonces se rechaza.', 'M', 'MVP', [], 'N-07');

  R.proc('RNF-02', 'Privacidad (RGPD y LOPDGDD)', 'RNF');
  R.sub('RNF-02.1', 'Minimización y consentimiento');
  R('Pedir solo los datos necesarios para cada función; ningún campo opcional se marca por defecto.', 'Dados los formularios, cuando se revisan, entonces ninguna casilla opcional viene marcada.', 'M', 'MVP', ['BF85'], 'N-07', { estado: 'Decidido' });
  R('Tratar las alergias como datos de salud: consentimiento explícito, separado y revocable.', 'Dado el consentimiento retirado, cuando se consulta la base de datos, entonces las alergias no están.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Publicar la política de privacidad con responsable, finalidades, base jurídica, plazos y derechos.', 'Dada /privacidad, cuando se lee, entonces contiene esos cinco apartados.', 'M', 'MVP', ['BF85'], 'N-07');
  R('Mostrar un aviso de cookies que permita rechazarlas todas con el mismo esfuerzo que aceptarlas.', 'Dado el aviso, cuando se ve, entonces «Rechazar» y «Aceptar» están al mismo nivel.', 'M', 'MVP', [], 'N-07');
  R.sub('RNF-02.2', 'Derechos y conservación');
  R('Atender las solicitudes de acceso, rectificación y supresión en un máximo de 30 días.', 'Dada una supresión pedida el 1 de mayo, cuando se resuelve, entonces es antes del 31 de mayo.', 'M', 'MVP', ['BF08'], 'N-07');
  R('No mostrar datos del cliente a los vendedores: solo productos y cantidades.', 'Dado un subpedido, cuando lo abre el vendedor, entonces no ve nombre, correo ni dirección.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Mostrar al repartidor solo nombre, dirección, teléfono e indicaciones, y solo el día de la entrega.', 'Dado un pedido de mañana, cuando el repartidor lo busca hoy, entonces no ve la dirección.', 'M', 'V2', [], 'N-07');
  R('Borrar las cuentas sin actividad durante 3 años, avisando 30 días antes.', 'Dada una cuenta inactiva 3 años, cuando vence el aviso, entonces se borra.', 'S', 'V3', [], 'N-07');

  R.proc('RNF-03', 'Rendimiento', 'RNF');
  R.sub('RNF-03.1', 'Tiempos de carga');
  R('Mostrar el contenido principal de la portada en 2,5 s o menos en móvil con 4G (LCP).', 'Dada una medición Lighthouse móvil, cuando se ejecuta, entonces el LCP es ≤ 2,5 s.', 'M', 'MVP', [], 'N-02', { estado: 'Hipótesis' });
  R('Mantener el desplazamiento de elementos al cargar (CLS) por debajo de 0,1.', 'Dada una medición, cuando se ejecuta, entonces el CLS es < 0,1.', 'S', 'MVP', [], 'N-02');
  R('Responder a cada interacción en menos de 200 ms (INP).', 'Dada una medición, cuando se pulsa «Añadir», entonces el INP es < 200 ms.', 'S', 'MVP', [], 'N-02');
  R('Servir las fotos en WebP con lazy loading fuera de la primera pantalla.', 'Dada la página de productos, cuando se carga, entonces solo se descargan las fotos visibles.', 'S', 'MVP', [], 'N-02');
  R.sub('RNF-03.2', 'Servidor');
  R('Responder el 95 % de las peticiones de la API en menos de 500 ms con 100 usuarios a la vez.', 'Dada una prueba de carga de 100 usuarios, cuando termina, entonces el p95 es < 500 ms.', 'S', 'V2', [], 'N-02', { estado: 'Hipótesis' });
  R('Generar la cesta de la IA en 10 s o menos en el 95 % de los casos.', 'Dadas 20 peticiones, cuando se miden, entonces 19 tardan ≤ 10 s.', 'S', 'MVP', [], 'N-01', { estado: 'Hipótesis' });

  R.proc('RNF-04', 'Usabilidad', 'RNF');
  R.sub('RNF-04.1', 'Facilidad de uso');
  R('Que el visitante entienda qué es FOOD4ALL y elija una de las tres acciones principales en menos de 30 s.', 'Dados 5 estudiantes, cuando ven la portada, entonces al menos 4 eligen en < 30 s.', 'M', 'MVP', [], 'N-01', { estado: 'Decidido' });
  R('Que un estudiante complete su primera compra sin ayuda en 5 minutos o menos.', 'Dados 5 estudiantes, cuando prueban, entonces al menos 4 lo consiguen en ≤ 5 min.', 'M', 'MVP', [], 'N-01', { estado: 'Hipótesis' });
  R('Que un vendedor publique su primer producto sin ayuda en 10 minutos o menos.', 'Dados 3 vendedores, cuando prueban, entonces al menos 2 lo consiguen en ≤ 10 min.', 'S', 'MVP', [], 'N-03', { estado: 'Hipótesis' });
  R('Escribir todos los textos de interfaz en español claro, en segunda persona y sin tecnicismos.', 'Dada una revisión de textos, cuando se hace, entonces no hay términos técnicos sin explicar.', 'M', 'MVP', [], 'N-01');
  R('Mostrar cada error junto al campo que lo causa, con qué hacer para corregirlo.', 'Dado un error, cuando aparece, entonces dice cómo arreglarlo.', 'M', 'MVP', [], 'N-01');
  R('Mantener el texto siempre sobre fondo liso, nunca sobre fotos o texturas.', 'Dada una revisión visual, cuando se hace, entonces ningún texto va sobre imagen salvo el hero con oscurecido.', 'M', 'MVP', [], 'N-01', { estado: 'Decidido' });

  R.proc('RNF-05', 'Accesibilidad (WCAG 2.2 AA)', 'RNF');
  R.sub('RNF-05.1', 'Percepción y operación');
  R('Mantener un contraste de 4,5:1 en texto normal y 3:1 en texto grande e iconos.', 'Dada una revisión con axe, cuando se ejecuta, entonces no hay errores de contraste.', 'M', 'MVP', [], 'N-02', { estado: 'Decidido' });
  R('Permitir usar toda la web solo con teclado, con el foco siempre visible.', 'Dada una compra completa con teclado, cuando se hace, entonces se termina sin ratón.', 'M', 'MVP', [], 'N-02');
  R('Dar a todas las zonas pulsables al menos 44 × 44 px.', 'Dada una revisión, cuando se mide, entonces ningún botón es menor de 44 px.', 'M', 'MVP', [], 'N-02', { estado: 'Decidido' });
  R('Dar texto alternativo a todas las imágenes con contenido y vacío a las decorativas.', 'Dada una revisión, cuando se ejecuta, entonces no hay imágenes sin alt.', 'M', 'MVP', [], 'N-02');
  R('Respetar prefers-reduced-motion: sin animaciones si el usuario lo pide.', 'Dado el ajuste activado, cuando se carga la portada, entonces nada se mueve.', 'M', 'MVP', [], 'N-02', { estado: 'Decidido' });
  R('Etiquetar todos los campos de formulario con <label> visible.', 'Dada una revisión, cuando se ejecuta, entonces ningún campo carece de etiqueta.', 'M', 'MVP', [], 'N-02');
  R('Permitir ampliar el texto al 200 % sin perder contenido ni funciones.', 'Dado un zoom del 200 %, cuando se usa el carrito, entonces todo sigue accesible.', 'S', 'MVP', [], 'N-02');

  R.proc('RNF-06', 'Compatibilidad', 'RNF');
  R.sub('RNF-06.1', 'Navegadores y pantallas');
  R('Funcionar en las 2 últimas versiones de Chrome, Firefox, Safari y Edge.', 'Dadas las pruebas de interfaz, cuando se ejecutan en los 4, entonces todas pasan.', 'M', 'MVP', [], 'N-01');
  R('Adaptarse a pantallas desde 360 px de ancho sin desplazamiento horizontal.', 'Dado un móvil de 360 px, cuando se navega, entonces no hay scroll horizontal.', 'M', 'V2', [], 'N-01', { estado: 'Decidido' });
  R('Mostrar siempre el modo claro por defecto; el oscuro solo si se activa.', 'Dado un sistema en modo oscuro, cuando se abre la web, entonces se ve en claro.', 'M', 'MVP', [], 'N-01', { estado: 'Decidido' });
  R('Poder instalarse como aplicación web (PWA) con icono y pantalla de inicio.', 'Dado Chrome en Android, cuando se abre la web, entonces ofrece instalarla.', 'C', 'V3', [], 'N-01');

  R.proc('RNF-07', 'Fiabilidad y disponibilidad', 'RNF');
  R.sub('RNF-07.1', 'Disponibilidad y datos');
  R('Estar disponible el 99,5 % del tiempo mensual, sin contar mantenimientos avisados.', 'Dado un mes, cuando se mide, entonces la caída total es ≤ 3,6 h.', 'S', 'V3', [], 'N-02', { estado: 'Hipótesis' });
  R('No perder ningún pedido pagado aunque falle un subpedido o un servicio externo.', 'Dado un fallo simulado del servicio de correo, cuando se paga, entonces el pedido se guarda igual.', 'M', 'MVP', [], 'N-02');
  R('Hacer copia de seguridad diaria de la base de datos y conservarla 30 días.', 'Dada una restauración de prueba, cuando se hace, entonces se recuperan los datos del día anterior.', 'M', 'V2', [], 'N-02');
  R('Registrar los errores del servidor con fecha, ruta y usuario anonimizado.', 'Dado un error 500, cuando ocurre, entonces aparece en el registro.', 'M', 'MVP', [], 'N-02');
  R('Si un servicio externo (IA, correo) no responde, seguir funcionando y mostrar un aviso claro.', 'Dada la IA caída, cuando se abre el asistente, entonces ve «El asistente no está disponible ahora. Puedes comprar desde el catálogo».', 'M', 'MVP', [], 'N-01');

  R.proc('RNF-08', 'Transparencia y cumplimiento', 'RNF');
  R.sub('RNF-08.1', 'IA, publicidad y comercio');
  R('Identificar como IA todo contenido generado por el asistente (Reglamento (UE) 2024/1689).', 'Dada una respuesta de la IA, cuando se muestra, entonces lleva la etiqueta.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Identificar como «Patrocinado» todo contenido pagado (DSA 2022/2065).', 'Dado un contenido pagado, cuando se muestra, entonces lleva la etiqueta.', 'M', 'V2', ['BF81'], 'N-07', { estado: 'Decidido' });
  R('Explicar a los vendedores cómo se ordenan los productos en el catálogo (Reglamento P2B 2019/1150).', 'Dadas las condiciones de vendedor, cuando se leen, entonces explican el orden.', 'M', 'V2', [], 'N-07');
  R('Publicar aviso legal con identificación del prestador (LSSI).', 'Dada /aviso-legal, cuando se lee, entonces identifica al titular.', 'M', 'MVP', [], 'N-07');
  R('Marcar la web como «Proyecto conceptual» y los datos como «de ejemplo» mientras no haya operación real.', 'Dado el pie de página, cuando se ve, entonces aparece el aviso.', 'M', 'MVP', [], 'N-07', { estado: 'Decidido' });
  R('Declarar el rol jurídico de FOOD4ALL en las condiciones una vez decidido (intermediario, operador o mixto).', 'Dadas las condiciones, cuando se leen, entonces indican el rol.', 'M', 'V2', ['BF84'], 'N-05', { estado: 'Pendiente' });

  R.proc('RNF-09', 'Trazabilidad alimentaria', 'RNF');
  R.sub('RNF-09.1', 'Registro de lotes');
  R('Registrar para cada línea entregada: vendedor, producto, lote o caducidad y fecha de recogida y de entrega (Reglamento 178/2002).', 'Dado un pedido entregado, cuando se consulta, entonces cada línea tiene esos datos.', 'M', 'MVP', [], 'N-05', { estado: 'Decidido' });
  R('Poder listar en menos de 1 hora todos los clientes que recibieron un lote concreto.', 'Dado un lote, cuando se busca, entonces sale la lista de pedidos afectados.', 'M', 'V2', [], 'N-05');
  R('Conservar los registros de trazabilidad al menos 5 años.', 'Dado un pedido de hace 4 años, cuando se consulta, entonces su trazabilidad está.', 'M', 'V2', [], 'N-05');
  R('Registrar las temperaturas de la cadena de frío en el hub y en el reparto.', 'Dado un reparto de refrigerados, cuando termina, entonces hay registro de temperatura.', 'S', 'V2', ['BF48'], 'N-05');

  R.proc('RNF-10', 'Mantenibilidad', 'RNF');
  R.sub('RNF-10.1', 'Código y documentación');
  R('Separar el código en capas: presentación, lógica de negocio y acceso a datos.', 'Dada una revisión de diseño, cuando se hace, entonces ninguna página accede directamente a la base de datos.', 'M', 'MVP', [], 'N-02');
  R('Poder sustituir el motor de IA simulado por uno real cambiando solo la configuración (patrón Adapter).', 'Dado un cambio de proveedor de IA, cuando se hace, entonces solo cambia la configuración.', 'M', 'MVP', [], 'N-01', { estado: 'Decidido' });
  R('Usar siempre los tokens de diseño de tokens.css; ningún color suelto en los componentes.', 'Dada una búsqueda de «#» en los componentes, cuando se hace, entonces no hay colores sueltos.', 'M', 'MVP', [], 'N-02', { estado: 'Decidido' });
  R('Cubrir con pruebas automáticas cada criterio de aceptación Must.', 'Dado un criterio Must, cuando se busca su prueba, entonces existe.', 'S', 'V2', [], 'N-02');
  R('Mantener actualizada la guía docs/DISENO.md con cada cambio visual.', 'Dado un cambio visual, cuando se hace el commit, entonces incluye la guía actualizada.', 'M', 'MVP', [], 'N-02', { estado: 'Decidido' });

  R.proc('RNF-11', 'Sostenibilidad', 'RNF');
  R.sub('RNF-11.1', 'Embalaje y desperdicio');
  R('Usar embalaje reutilizable o reciclable en todas las entregas.', 'Dada una entrega, cuando se revisa el embalaje, entonces todo es reutilizable o reciclable.', 'S', 'V2', [], 'N-08');
  R('Medir el desperdicio del hub en kg por semana y su destino (Ley 1/2025).', 'Dada una semana, cuando se consulta, entonces aparecen los kg y su destino.', 'S', 'V2', ['BF69'], 'N-08');
  R('Priorizar la donación de excedentes aptos frente al desecho.', 'Dado un excedente apto, cuando se decide su destino, entonces la primera opción es donar.', 'S', 'V2', [], 'N-08', { estado: 'Decidido' });
};
