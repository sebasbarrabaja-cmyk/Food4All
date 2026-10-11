---
titulo: Prompt de la landing (fuente de verdad)
fecha: 2026-10-08
autor: Equipo
herramienta: Claude Code
tipo: Prompt base
origen: FOOD4ALL_prompt_landing.md
---

Actúa como un desarrollador full stack y diseñador web senior. Quiero que construyas la landing/marketplace de FOOD4ALL, un proyecto universitario conceptual de Ingeniería Informática. Todo el contenido debe estar en español.

# 0. PRIORIDAD DE ESTE PROMPT
Este prompt es la fuente de verdad. Además de él recibirás documentos de contexto del proyecto (presentación, documento maestro u otros). Úsalos para ampliar detalles, pero si te piden tomar una decisión o si su información discrepa de este prompt, haz caso siempre a este prompt. Si algo no aparece en ninguno de los dos, no lo inventes: márcalo como pendiente o usa datos de ejemplo etiquetados como tales.

# 1. CONTEXTO DEL PROYECTO
FOOD4ALL es una plataforma de alimentación local que ayuda a las personas, especialmente a estudiantes que viven fuera de casa, a planificar, comprar y gestionar su comida desde un único lugar. Combina productos de varios vendedores locales en una sola compra, con entrega consolidada e inteligencia artificial.
- Lema: "Planifica tu comida. Ahorra. Come como en casa."
- Problema que resuelve: la inexperiencia de las personas con la gestión de la comida (precio, tiempo, qué comprar, qué comer, planificación, desperdicio y fragmentación).
- Público inicial: estudiantes que viven fuera de casa y compran su propia comida. Mercado potencial: cualquier persona. Zona inicial: Andalucía (Málaga, Sevilla y Granada).
- Qué NO es: no es una app de delivery inmediato (tipo Glovo), no es un supermercado y no es una empresa centrada en platos preparados.
- Es un proyecto conceptual: no existen todavía vendedores reales, pedidos, piloto, acuerdos con universidades ni precios cerrados.

# 2. OBJETIVO
Que cualquier persona entienda en pocos segundos qué es FOOD4ALL y cómo funciona, y que pueda moverse a la zona que le interesa (cliente o vendedor). La web demuestra la experiencia completa: un estudiante indica lo que necesita, recibe una propuesta de cesta, añade productos de varios vendedores locales, paga una sola vez y recibe todo consolidado. El equipo gestiona el proyecto desde un panel de administración privado.

# 3. CÓMO TRABAJAMOS
Esta sección es el corazón del contenido. Debe reflejarse con detalle en las zonas de clientes y vendedores, y en las pantallas de demostración.

## 3.1 Reparto de papeles
- El CLIENTE decide qué necesita (presupuesto, días, preferencias), revisa la cesta, paga una sola vez y recibe un único pedido.
- El VENDEDOR mantiene su catálogo y su disponibilidad, prepara su parte de cada pedido y la deja lista para la recogida. No gestiona envíos ni cobra directamente al consumidor.
- FOOD4ALL pone la plataforma y la IA, reúne los pedidos de varios vendedores en uno, recoge en origen, consolida, verifica, empaqueta y entrega. Es un único intermediario en lugar de varios ("Solo somos un intermediario, no siete").

## 3.2 Cómo trabajamos con el CLIENTE, paso a paso
1. Entrada: el cliente llega a la portada, ve el lema y elige "Quiero comprar".
2. Asistente de IA: pregunta "¿Qué necesitas?". Recoge presupuesto, número de días, preferencias y restricciones, y tiempo disponible para cocinar. Ejemplos de petición: "Tengo 25 € y necesito comida para cuatro días" o "Quiero comida saludable para cinco días, tengo poco tiempo para cocinar y quiero productos locales". Las alergias e intolerancias son datos de salud: pídelas como dato opcional, con aviso claro de uso y sin guardarlas más allá de la sesión de demostración.
3. Propuesta de cesta: la IA muestra la cesta agrupada por vendedor, con cantidades, total frente al presupuesto y una explicación breve de por qué propone cada producto. Debe verse que es una propuesta de una IA y que el cliente decide.
4. Revisión y ajuste: el cliente puede quitar, cambiar o añadir productos, pedir un sustituto y abrir la ficha del vendedor. El total se recalcula y se avisa si supera el presupuesto.
5. Carrito multi-vendedor: un único carrito agrupado por vendedor, con un solo total. Se muestra la compra mínima en estudio y el coste de entrega como pendientes de definir.
6. Checkout único: resumen por vendedor, zona de entrega, franja de entrega (a definir), pago simulado (sin pagos reales) y aceptación de condiciones. Antes de pagar deben verse ingredientes y alérgenos de cada producto. Informa de que los productos perecederos no tienen derecho de desistimiento.
7. Seguimiento: el pedido pasa por estos estados visibles para el cliente: recibido, recogida en origen, en el hub (consolidación y verificación), empaquetado, en reparto, entregado.
8. Después de comprar: recordatorios de qué consumir primero, ideas para aprovechar lo comprado y la siguiente compra lista o repetir una lista anterior. Los avisos de caducidad solo son fiables con datos reales (fecha y tipo de fecha: caducidad o consumo preferente), así que en la demo se presentan como funcionalidad prevista con datos de ejemplo.
9. Incidencias: formulario sencillo para reclamar si un producto llega mal. Quién responde ante el cliente (vendedor, FOOD4ALL o ambos) está pendiente de definir.
10. Suscripción: beneficios de entrega y promociones, no una caja obligatoria. Se muestra como "próximamente", sin precios.

## 3.3 Cómo trabajamos con el VENDEDOR, paso a paso
1. Entrada: el vendedor llega a la portada y elige "Quiero vender". Ve qué gana: nuevos clientes, más alcance y visibilidad, un canal de venta adicional y logística centralizada.
2. Alta: formulario con nombre del negocio, tipo (agricultor, granja, frutería, panadería, obrador, despensa, cocina local), zona, contacto, número de registro sanitario, qué ofrece y horarios de recogida posibles.
3. Verificación: el equipo de administración revisa que cumple los estándares mínimos (sin producto en mal estado, sin fraude, sin información oculta, registro sanitario y fichas completas). Estados de la solicitud visibles para el vendedor: recibida, en revisión, verificada o rechazada. El proceso detallado de homologación está pendiente de definir.
4. Catálogo: el vendedor da de alta sus productos con una ficha obligatoria completa: nombre, categoría, origen, precio, unidad, disponibilidad, ingredientes y alérgenos, tipo de fecha (caducidad o consumo preferente) y conservación (ambiente o frío). Sin ficha completa, el producto no se publica.
5. Pedidos: cuando un cliente compra, el vendedor recibe solo su parte del pedido consolidado: productos, cantidades y franja de recogida. Confirma disponibilidad o avisa de una falta para proponer sustituto.
6. Preparación y recogida: el vendedor prepara su parte y la deja lista, identificada con el número de pedido y la fecha de lote o caducidad. FOOD4ALL pasa a recogerla en origen. El vendedor no gestiona el envío.
7. Verificación en el hub: FOOD4ALL comprueba el estado del producto contra el pedido. Si algo no cumple, se retira y se avisa al vendedor y al cliente.
8. Liquidación: el vendedor ve sus ventas y la comisión de FOOD4ALL. El porcentaje, quién lo asume y la periodicidad de los pagos están pendientes: muéstralos como "por definir".
9. Visibilidad opcional: puede pagar por destacar productos. Siempre se marca como contenido patrocinado y se separa de las recomendaciones de la IA.
10. Mensaje honesto: estamos buscando a los primeros vendedores y el proyecto aún no está pilotado.

Muestra este recorrido en la zona de vendedores como explicación paso a paso. Haz funcional el formulario de alta y añade una vista de ejemplo del panel del vendedor (catálogo y pedidos) con datos de ejemplo claramente etiquetados.

## 3.4 Logística y dinero
- Logística coordinada por FOOD4ALL: recoger en origen, trasladar, consolidar en un hub, verificar, empaquetar y entregar en una única entrega consolidada.
- Ingreso principal: una comisión sobre cada compra. Complementos previstos: visibilidad patrocinada, afiliación y suscripción por beneficios.

## 3.5 Estado de las decisiones (indícalo en la interfaz cuando corresponda)
- DECIDIDO: marketplace abierto con estándares mínimos, carrito multi-vendedor, entrega consolidada coordinada por FOOD4ALL, IA visible y funcional, producto local como elemento central, comisión como ingreso principal, suscripción por beneficios.
- HIPÓTESIS: compra mínima de unos 10 a 15 €, primer pedido con ventaja de entrega, que algunos productos sean más baratos que en el supermercado.
- PENDIENTE: porcentaje de comisión, precios de suscripción, ubicación del hub, puntos de recogida, horarios de entrega, quién paga cada parte de la logística, definición exacta de "local" y proceso detallado de alta de vendedores.

# 4. MODOS DE VISIÓN
La aplicación tiene dos vistas separadas:
- VISTA PÚBLICA (clientes y vendedores): portada, zona de clientes y zona de vendedores. No muestra nada interno: ni equipo, ni roles, ni tareas, ni Asana, ni análisis de mercado o marco legal.
- VISTA DE ADMINISTRADOR: panel privado con toda la información del proyecto (equipo y roles, hitos y tareas, alcance, mercado, marco legal, conexión con Asana y gestión del marketplace).

Acceso: botón discreto "Acceso administración" en el pie de la vista pública que lleva a un inicio de sesión. La protección debe estar en el backend (las rutas y endpoints de administración exigen sesión), no solo ocultando botones. El administrador puede volver a la vista pública con un enlace de salida.

# 5. ESTRUCTURA

## 5.1 Vista pública: portada
- Hero con imagen fuerte de campo, agricultura o mercado con fruta y producto fresco (que se note lo local desde el primer segundo) y el mensaje "Planifica tu comida. Ahorra. Come como en casa."
- Presentación breve de quiénes somos, sin nombres ni roles del equipo: qué problema resolvemos y cómo funcionamos en una frase: "Una sola compra de varios vendedores locales, con una entrega consolidada".
- Dos paneles grandes que llevan a cada zona: "Quiero comprar" y "Quiero vender".
- Pie con el acceso discreto a administración y el aviso "Proyecto universitario conceptual · Datos de ejemplo".

## 5.2 Vista pública: zona de clientes ("Quiero comprar")
- Explicación del recorrido completo de la sección 3.2, en 6 pasos visibles y con el detalle del resto accesible.
- Asistente de IA visible y funcional (simulado en esta fase).
- Marketplace: catálogo con productos y vendedores, filtros por categoría y vendedor, y carrito multi-vendedor que agrupe los productos por vendedor y muestre un único total.
- En cada producto: vendedor, origen y alérgenos visibles antes de pagar.
- Seguimiento de pedido y recordatorios posteriores, mostrados con datos de ejemplo.
- Comparación conceptual con supermercado y delivery, sin afirmar que todo sea más barato.

## 5.3 Vista pública: zona de vendedores ("Quiero vender")
- Mensaje clave "Solo somos un intermediario, no siete" y el recorrido completo de la sección 3.3.
- Reparto de papeles de la sección 3.1 y requisitos mínimos del marketplace.
- Formulario de alta funcional, con validación y mensaje de confirmación. Los datos se guardan en el backend.
- Vista de ejemplo del panel del vendedor (catálogo y pedidos), con datos de ejemplo.

## 5.4 Vista de administrador (privada)
Toda la información interna del proyecto se muestra únicamente aquí:
- Resumen del proyecto: nombre, alcance, mercado y marco legal (sección 8), con lo decidido, las hipótesis y lo pendiente.
- Equipo y roles: Sebastián (backend: API, base de datos, lógica del carrito multi-vendedor y pedidos), Juan Antonio (frontend: landing y experiencia de compra), Miguel (IA y datos: asistente de cesta y catálogo de productos y vendedores). Las pruebas y la documentación las comparten los tres.
- Hitos y tareas con responsables (sección 7) y conexión con Asana (sección 6).
- Gestión del marketplace: altas de vendedores recibidas con su estado y la acción de aprobar o rechazar, catálogo de ejemplo y pedidos de ejemplo.

# 6. INTEGRACIÓN CON ASANA (solo vista de administrador)
- Usa la API REST de Asana (base: https://app.asana.com/api/1.0) con un Personal Access Token.
- IMPORTANTE: el token NO puede estar en el código del navegador. Crea un backend sencillo que haga de intermediario (proxy) y guarde el token en una variable de entorno (.env, que no se sube al repositorio). El frontend solo llama a nuestro backend, y estos endpoints exigen sesión de administrador.
- Endpoints a usar: listar tareas del proyecto (GET /projects/{project_gid}/tasks), detalle de tarea y subtareas (GET /tasks/{task_gid}/subtasks). Pide los campos nombre, estado (completed), responsable (assignee.name), fecha límite y sección.
- Variables de entorno: ASANA_TOKEN y ASANA_PROJECT_GID. El proyecto de Asana es el de la asignatura, "A- Universidad Europe ISW – Plantilla Base Scrum" (GID 1218693735718662), y lo comparten varios grupos. Solo se leen las tareas del grupo, que empiezan por "[Food4All]" (acepta también la errata "[Foof4All]").
- Si falla la conexión, muestra un mensaje claro y el plan de hitos de la sección 7 en lugar de romper la página.
- Asana es la fuente de verdad. Muestra cada hito con sus subtareas y sub-subtareas (dos niveles), con estado, responsable, fecha y progreso, y un botón de actualizar. Si a una tarea le falta responsable en Asana o no coincide con el plan, muestra también el responsable previsto.

# 7. HITOS Y SUBTAREAS (solo vista de administrador)
Los hitos son los 5 sprints de la asignatura. En Asana cada uno es una tarea "[Food4All] Hito N – …" y los bloques de trabajo son sus subtareas.

**Hito 1 – Contexto, actores y alcance** (sprint 1). Sus 6 subtareas, con el reparto previsto:
1. Elegir el nombre de la empresa y el porqué: proponer alternativas (Miguel), comprobar dominio y marca (Sebastián), redactar la justificación (Juan Antonio).
2. Integrantes y roles del grupo: definir el reparto de roles (Sebastián), redactar la descripción (Miguel), configurar el tablero de Asana (Juan Antonio).
3. Mercado: calcular TAM/SAM/SOM (Miguel), recopilar datos de consumo del MAPA (Juan Antonio), reunir datos de estudiantes (Sebastián), analizar la competencia (Juan Antonio), describir actores y revisar fuentes (Miguel).
4. Alcance: listar qué incluye y qué no (Sebastián), recoger decisiones tomadas y pendientes (Juan Antonio), definir las hipótesis a validar (Miguel), redactar la versión final (Sebastián).
5. Marco legal: seguridad alimentaria, información al consumidor y comercio electrónico (Miguel); plataforma y vendedores (DSA y P2B), desperdicio y reparto (Juan Antonio); protección de datos e IA y tareas legales pendientes (Sebastián).
6. Landing documental (pendiente): definir estructura y estilo visual (Juan Antonio), maquetar y pasar el contenido de los bloques 1 a 5 (Sebastián), revisar y publicar (Miguel). Esta web es la landing documental.

**Hito 2 – Requisitos y criterios de aceptación** (sprint 2). Subtareas por definir en Asana.

**Hito 3 – Análisis y diseño estructurado** (sprint 3). Subtareas en Asana.

**Hito 4 – Cómo se construye: modelo de dominio y diseño OO** (sprint 4). Subtareas en Asana: modelo de dominio, diagramas de secuencia (generar cesta con IA, checkout multivendedor, consolidación en el hub, aviso de caducidad), contratos de operación, diagrama de clases de diseño, arquitectura por capas, patrones de diseño y revisión cruzada.

**Hito 5 – Integración, calidad y dossier final** (sprint 5). Subtareas en Asana: matriz de trazabilidad, plan de pruebas, revisión de calidad, registro de cambios del master prompt, dossier final, presentación y demo del flujo de 60 segundos, y margen para correcciones.

Los responsables de los hitos 2 a 5 se leen de Asana; no los inventes.

# 8. DATOS DE MERCADO Y MARCO LEGAL (solo vista de administrador, con su fuente)
- Gasto en alimentación dentro del hogar en España, 2025: 87.831 M€ (MAPA, Informe de Consumo Alimentario 2025, presentado el 30/07/2026). Canales: supermercado 68,2 %, compra en línea 2 %, comercio tradicional 10,6 %. Ticket medio 19,4 € y 233 compras al año por persona.
- Estudiantes de grado y máster en US, UGR y UMA: unos 141.900. Comparten piso o viven solos: 27,1 % (EUROSTUDENT 8, dato nacional), unos 38.500 estudiantes. Gasto potencial: unos 72 M€/año. Estas dos últimas cifras son estimaciones propias y deben marcarse como "hipótesis a validar". La cuota alcanzable (SOM) está por validar.
- Marco legal (análisis orientativo, no asesoramiento jurídico): seguridad alimentaria (Reg. 178/2002, 852/2004, RD 191/2011), información al consumidor (Reg. 1169/2011), consumidores y comercio electrónico (RDL 1/2007, LSSI), plataformas (DSA y P2B), datos e IA (RGPD, LOPDGDD, Reglamento de IA), desperdicio (Ley 1/2025) y reparto (Ley Rider). Pendiente: decidir el rol jurídico de FOOD4ALL (intermediario, operador alimentario o mixto).

# 9. DIRECTRICES DE DISEÑO Y ANTI-AI-SLOP

## 9.1 Principio fundamental
FOOD4ALL debe sentirse como una web concebida deliberadamente por un equipo profesional de diseño de producto, no como una amalgama de componentes genéricos generados automáticamente por una IA. Cada elemento en pantalla debe cumplir un propósito claro, funcional y legible. La interfaz prioriza la densidad de información controlada y la lectura rápida. La sensación general es cálida, de mercado local y con aire artesanal, sin caer en lo gourmet ni en lo elitista.

## 9.2 Paleta obligatoria
Verdes naturales y tonos tierra, con un único acento cálido. Define estos valores como variables CSS en un solo lugar.

Modo claro:
- Fondo crema #F6F1E6; superficie #FFFFFF.
- Verde bosque #2F5233 (primario: títulos, secciones destacadas, botón principal de compra); verde medio #5C8A4A (apoyo).
- Tierra #8A5A3B (etiquetas y textos secundarios destacados).
- Acento cálido #D9822B (llamadas a la acción, con texto oscuro #23301F encima).
- Texto principal #23301F; texto suave #5E6652; bordes y divisores #DDD0B0.

Modo oscuro (valores orientativos, ajústalos para mantener un contraste mínimo de 4,5:1 en texto): fondo #171D15, superficie #202819, texto #F1EBDC, texto suave #B7BFA9, bordes #3A4533, verde #8DBB74, tierra #C99A73, acento #E39A2D.

Paleta ampliada de mercado (decisión del equipo, octubre de 2026, tras compararnos con la competencia: la paleta solo verde y crema resultaba monótona):
- Colores de producto para iconos, ilustraciones, números de pasos y acentos: tomate #C8553D, azafrán #E3A82B, oliva #7D8A2E, melocotón #E8915F.
- Tintes suaves para bandas de sección y tarjetas: salvia #E4ECD9, melocotón #FBE4D3, mostaza #F8ECC8, tomate #F6DCD3.
- Banda de cierre en verde bosque #2F5233 con texto crema.

Reglas de color:
- No añadas colores fuera de esta paleta: ni azules, ni morados, ni degradados decorativos.
- Solo se permiten neutros cálidos para bordes, fondos elevados y texto suave.
- Estados semánticos: éxito #2F7D4B, peligro #C0392B, advertencia #B7791F.
- Modo de color: modo claro siempre por defecto, independientemente del sistema del usuario (decisión del equipo, octubre de 2026). El tema oscuro queda definido pero solo se activa de forma explícita (atributo data-theme="dark"), por ejemplo desde un botón.

## 9.3 Patrones a erradicar (AI slop)

| Patrón a evitar | Alternativa profesional |
|---|---|
| Tarjetas infinitas y anidadas | Agrupación mediante divisores de 1 px, jerarquía tipográfica y espaciado de 8 a 12 px |
| Selectores o botones de radio gigantes que ocupan varias pantallas | Controles compactos: desplegable para listas de más de 4 opciones y chips compactos para estados rápidos |
| Pills y badges de colores estridentes en cada texto | Texto con peso tipográfico (seminegrita) y badges discretos con fondo al 10–15 % de opacidad |
| Sombras flotantes oscuras y exageradas | Sombra sutil (blur 4 px, opacidad 0,05) con borde de 1 px |
| Glassmorphism indiscriminado | Uso restrictivo y funcional (ver 9.4) |
| Gradientes decorativos sin función | Superficies planas |
| Espacios vacíos desproporcionados | Densidad equilibrada: padding de 12 a 16 px y secciones de 48 a 64 px como máximo |
| Emojis como iconos, tipografías Inter, Roboto o Arial por defecto, tarjetas con borde de color a la izquierda | Iconos SVG en trazo, tipografía con carácter y listas con divisores |

Tipografía: una serifa de carácter artesanal para los títulos (por ejemplo Fraunces) y una sans-serif legible para el texto (por ejemplo Figtree). Texto de al menos 16 px y zonas táctiles de al menos 44 px.

## 9.4 Uso restrictivo del efecto cristal
No es una textura decorativa, es un patrón de jerarquía y flotabilidad.
- Se permite en: barra de navegación móvil flotante (si existe) y controles flotantes sobre elementos como un mapa de vendedores.
- Está prohibido en: formularios, listados de productos o pedidos, cabeceras fijas, botones estándar de acción y cualquier panel del administrador.

## 9.5 Animaciones y transiciones
- Existen para dar feedback de interacción o continuidad espacial, nunca como adorno.
- Duración de 180 a 240 ms con curvas naturales (ease-out).
- Prohibido: rebotes elásticos exagerados, animaciones en bucle que distraigan y retardos en la respuesta a un clic. Respeta prefers-reduced-motion.

## 9.6 Reglas generales de la interfaz
- Diseño responsive (móvil primero) y accesibilidad básica: contraste, etiquetas, foco visible y navegación con teclado.
- El acento cálido se reserva para las llamadas a la acción.
- El contenido patrocinado, si aparece, se marca claramente y se separa de las recomendaciones de la IA.

# 10. TECNOLOGÍA SUGERIDA (puedes proponer otra mejor y justificarla)
- Frontend: React con Vite y CSS moderno (o Tailwind configurado con los tokens de la sección 9).
- Backend: Node.js con Express, que sirve la API propia, la autenticación de administrador y el proxy de Asana.
- Almacenamiento: base de datos sencilla (SQLite o JSON) para altas de vendedores, catálogo y pedidos de ejemplo.
- Asistente de IA: simulado en esta fase (respuestas de ejemplo basadas en el presupuesto y los días), dejando preparada la llamada a una API de IA real.
- Organiza el proyecto en carpetas claras (frontend, backend) e incluye un README con instrucciones para ejecutarlo.

# 11. REGLAS IMPORTANTES
- No inventes datos: nada de vendedores reales, clientes, pedidos reales, acuerdos con universidades, precios definitivos, comisiones ni resultados de pruebas. El catálogo y los pedidos son datos de ejemplo y deben estar etiquetados como tal.
- No afirmes que todo es más barato que un supermercado. El ahorro es una hipótesis.
- Distingue siempre entre lo decidido, las hipótesis y lo pendiente de validar.
- No hagas afirmaciones médicas sobre alimentación.
- Cita la fuente de cada dato externo y marca como estimación los cálculos propios.
- La vista pública nunca muestra información interna (equipo, roles, tareas, Asana, mercado ni marco legal).
- Nunca incluyas el token de Asana en el código del frontend ni en el repositorio.

# 12. ENTREGA
1. Primero resume en pocas líneas la arquitectura y la tecnología elegidas.
2. Después entrega el código completo y organizado por archivos.
3. Termina con los pasos para ejecutarlo y para configurar el token y el ID del proyecto de Asana.
