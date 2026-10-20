# FOOD4ALL · Vista previa de los requisitos en Asana

> **Vista previa: no se ha escrito nada en Asana.** Así quedaría cada tarea, con su descripción exacta, si se aprueba la propuesta (`FOOD4ALL_propuesta_asana.md`).
> Generado con `benchmark/asana.js` a partir del Excel y de la especificación. 173 subtareas nuevas.

**Supuestos de esta vista** (se cambian con tu feedback): todo va dentro de [B4] (D1); las fichas antiguas no se tocan aquí (D2); los requisitos atómicos son una lista en la descripción (D3); reparto de la propuesta (D4); numeración del Excel (D7); RF-13.7 aparece marcado como «propuesto quitar».

## 1. Árbol

```text
[Food4All] Hito 2 – Requisitos y Criterios de Aceptación · Marketplace Local
├─ [B4] Catálogo de requisitos: fichas RF / RNF
│   ├─ Requisitos funcionales (RF-01 a RF-19)
│   │   ├─ RF-01 · Registro, inicio de sesión y roles                     @Miguel
│   │   │   ├─ RF-01.1 · Punto de entrada y pantalla de acceso
│   │   │   ├─ RF-01.2 · Inicio de sesión con correo y contraseña
│   │   │   ├─ RF-01.3 · Inicio de sesión con Google
│   │   │   ├─ RF-01.4 · Registro de cuenta de cliente
│   │   │   ├─ RF-01.5 · Verificación del correo
│   │   │   ├─ RF-01.6 · Recuperación de contraseña
│   │   │   ├─ RF-01.7 · Menú de usuario y cierre de sesión
│   │   │   ├─ RF-01.8 · Mis datos y direcciones
│   │   │   ├─ RF-01.9 · Preferencias, dieta y alergias
│   │   │   └─ RF-01.10 · Privacidad y baja de la cuenta
│   │   ├─ RF-02 · Alta y verificación de vendedor                        @Juan Antonio
│   │   │   ├─ RF-02.1 · Página «Quiero vender»
│   │   │   ├─ RF-02.2 · Formulario de solicitud
│   │   │   ├─ RF-02.3 · Documentación
│   │   │   ├─ RF-02.4 · Estados de la solicitud
│   │   │   ├─ RF-02.5 · Activación y formación
│   │   │   ├─ RF-02.6 · Datos del negocio y perfil público
│   │   │   └─ RF-02.7 · Diseño y comportamiento del formulario de alta
│   │   ├─ RF-13 · Panel de administración                                @Sebastián
│   │   │   ├─ RF-13.1 · Acceso
│   │   │   ├─ RF-13.2 · Vendedores
│   │   │   ├─ RF-13.3 · Catálogo, pedidos e incidencias
│   │   │   ├─ RF-13.4 · Contenido, métricas y auditoría
│   │   │   ├─ RF-13.5 · Usuarios y roles
│   │   │   ├─ RF-13.6 · Configuración
│   │   │   └─ RF-13.7 · Prompts del proyecto  ⚠ propuesto quitar
│   │   ├─ RF-15 · Web pública e información                              @Juan Antonio
│   │   │   ├─ RF-15.1 · Cabecera
│   │   │   ├─ RF-15.2 · Portada
│   │   │   ├─ RF-15.3 · Cómo funciona
│   │   │   ├─ RF-15.4 · Quiénes somos y comparativa
│   │   │   ├─ RF-15.5 · Preguntas frecuentes
│   │   │   ├─ RF-15.6 · Comunidad y redes
│   │   │   └─ RF-15.7 · Pie de página
│   │   ├─ RF-03 · Gestión del catálogo y ficha de producto               @Sebastián
│   │   │   ├─ RF-03.1 · Alta de producto
│   │   │   ├─ RF-03.2 · Información obligatoria
│   │   │   ├─ RF-03.3 · Alérgenos
│   │   │   ├─ RF-03.4 · Fotos
│   │   │   ├─ RF-03.5 · Precio
│   │   │   ├─ RF-03.6 · Stock y disponibilidad
│   │   │   ├─ RF-03.7 · Edición, retirada y packs
│   │   │   ├─ RF-03.8 · Promociones del vendedor
│   │   │   └─ RF-03.9 · Revisión antes de publicar
│   │   ├─ RF-04 · Búsqueda y consulta del catálogo                       @Juan Antonio
│   │   │   ├─ RF-04.1 · Página de productos
│   │   │   ├─ RF-04.2 · Buscador
│   │   │   ├─ RF-04.3 · Filtros y orden
│   │   │   ├─ RF-04.4 · Tarjeta de producto
│   │   │   ├─ RF-04.5 · Ficha de producto
│   │   │   ├─ RF-04.6 · Favoritos y habituales
│   │   │   ├─ RF-04.7 · Zona y patrocinados
│   │   │   ├─ RF-04.8 · Catálogo en móvil y estados
│   │   │   └─ RF-04.9 · Etiquetas y avisos en la tarjeta
│   │   ├─ RF-12 · Asistente de IA para generar la cesta                  @Miguel
│   │   │   ├─ RF-12.1 · Entrada
│   │   │   ├─ RF-12.2 · Generación de la cesta
│   │   │   ├─ RF-12.3 · Explicación y ajuste
│   │   │   ├─ RF-12.4 · Transparencia
│   │   │   ├─ RF-12.5 · Plan de comidas y después de comprar
│   │   │   ├─ RF-12.6 · Diseño del asistente
│   │   │   └─ RF-12.7 · Reglas de la propuesta
│   │   ├─ RF-16 · Panel del vendedor                                     @Sebastián
│   │   │   ├─ RF-16.1 · Inicio del panel
│   │   │   ├─ RF-16.2 · Pedidos del vendedor
│   │   │   ├─ RF-16.3 · Ventas y estadísticas
│   │   │   ├─ RF-16.4 · Productos en el panel
│   │   │   └─ RF-16.5 · Días de recogida
│   │   ├─ RF-17 · Condiciones y liquidación del vendedor                 @Juan Antonio
│   │   │   ├─ RF-17.1 · Condiciones
│   │   │   └─ RF-17.2 · Liquidación
│   │   ├─ RF-05 · Carrito multi-vendedor                                 @Sebastián
│   │   │   ├─ RF-05.1 · Añadir al carrito
│   │   │   ├─ RF-05.2 · Vista del carrito agrupada
│   │   │   ├─ RF-05.3 · Cantidades
│   │   │   ├─ RF-05.4 · Envío y compra mínima
│   │   │   ├─ RF-05.5 · Presupuesto
│   │   │   ├─ RF-05.6 · Cambios de stock y precio
│   │   │   ├─ RF-05.7 · Persistencia
│   │   │   ├─ RF-05.8 · Diseño del carrito
│   │   │   └─ RF-05.9 · Información de la entrega en el carrito
│   │   ├─ RF-06 · Checkout y pago único simulado                         @Miguel
│   │   │   ├─ RF-06.1 · Acceso y resumen
│   │   │   ├─ RF-06.2 · Dirección y franja
│   │   │   ├─ RF-06.3 · Revisión de alérgenos y condiciones
│   │   │   ├─ RF-06.4 · Pago simulado
│   │   │   ├─ RF-06.5 · Confirmación
│   │   │   ├─ RF-06.6 · Modificar o cancelar
│   │   │   ├─ RF-06.7 · Diseño y navegación del checkout
│   │   │   └─ RF-06.8 · Datos de facturación
│   │   ├─ RF-07 · División en subpedidos y confirmación del vendedor     @Juan Antonio
│   │   │   ├─ RF-07.1 · División
│   │   │   ├─ RF-07.2 · Aviso y vista del vendedor
│   │   │   ├─ RF-07.3 · Confirmar o avisar de faltas
│   │   │   ├─ RF-07.4 · Preparación y etiqueta
│   │   │   ├─ RF-07.5 · Plazos y avisos al vendedor
│   │   │   └─ RF-07.6 · Pedido sin el grupo de un vendedor
│   │   ├─ RF-14 · Suscripción                                            @Miguel
│   │   │   ├─ RF-14.1 · Suscripción opcional
│   │   │   └─ RF-14.2 · Gestión de la suscripción
│   │   ├─ RF-08 · Recogida, consolidación en el hub y entrega            @Sebastián
│   │   │   ├─ RF-08.1 · Ruta de recogida
│   │   │   ├─ RF-08.2 · Recepción y verificación en el hub
│   │   │   ├─ RF-08.3 · Empaquetado consolidado
│   │   │   ├─ RF-08.4 · Reparto y entrega
│   │   │   ├─ RF-08.5 · Retirada y excedentes
│   │   │   ├─ RF-08.6 · Aplicación del operador
│   │   │   └─ RF-08.7 · Entrega al cliente
│   │   ├─ RF-09 · Seguimiento del pedido y notificaciones                @Miguel
│   │   │   ├─ RF-09.1 · Estados
│   │   │   ├─ RF-09.2 · Pantalla de seguimiento
│   │   │   ├─ RF-09.3 · Notificaciones
│   │   │   ├─ RF-09.4 · Mis pedidos
│   │   │   └─ RF-09.5 · Plantillas de correo
│   │   ├─ RF-10 · Incidencias, reembolsos y sustituciones                @Sebastián
│   │   │   ├─ RF-10.1 · Abrir una incidencia
│   │   │   ├─ RF-10.2 · Resolución
│   │   │   ├─ RF-10.3 · Seguimiento de la incidencia
│   │   │   ├─ RF-10.4 · Diseño del formulario de incidencia
│   │   │   └─ RF-10.5 · Criterios de resolución
│   │   ├─ RF-11 · Valoraciones de productos y vendedores                 @Juan Antonio
│   │   │   ├─ RF-11.1 · Pedir la valoración
│   │   │   ├─ RF-11.2 · Mostrar y moderar
│   │   │   └─ RF-11.3 · Diseño y reglas de la valoración
│   │   ├─ RF-18 · Comunicación con vendedores                            @Miguel
│   │   │   └─ RF-18.1 · Mensajes y avisos
│   │   └─ RF-19 · Soporte y contacto                                     @Sebastián
│   │       ├─ RF-19.1 · Contacto
│   │       └─ RF-19.2 · Bandeja de soporte del equipo
│   └─ Requisitos no funcionales (RNF-01 a RNF-11)
│       ├─ RNF-01 · Seguridad                                             @Sebastián
│       │   ├─ RNF-01.1 · Autenticación y sesiones
│       │   └─ RNF-01.2 · Autorización y datos de entrada
│       ├─ RNF-02 · Privacidad (RGPD y LOPDGDD)                           @Sebastián
│       │   ├─ RNF-02.1 · Minimización y consentimiento
│       │   └─ RNF-02.2 · Derechos y conservación
│       ├─ RNF-03 · Rendimiento                                           @Miguel
│       │   ├─ RNF-03.1 · Tiempos de carga
│       │   ├─ RNF-03.2 · Servidor
│       │   └─ RNF-03.3 · Peso de la página
│       ├─ RNF-04 · Usabilidad                                            @Juan Antonio
│       │   ├─ RNF-04.1 · Facilidad de uso
│       │   └─ RNF-04.2 · Consistencia visual
│       ├─ RNF-05 · Accesibilidad (WCAG 2.2 AA)                           @Juan Antonio
│       │   └─ RNF-05.1 · Percepción y operación
│       ├─ RNF-06 · Compatibilidad                                        @Juan Antonio
│       │   └─ RNF-06.1 · Navegadores y pantallas
│       ├─ RNF-07 · Fiabilidad y disponibilidad                           @Miguel
│       │   └─ RNF-07.1 · Disponibilidad y datos
│       ├─ RNF-08 · Transparencia y cumplimiento                          @Miguel
│       │   └─ RNF-08.1 · IA, publicidad y comercio
│       ├─ RNF-09 · Trazabilidad alimentaria                              @Sebastián
│       │   └─ RNF-09.1 · Registro de lotes
│       ├─ RNF-10 · Mantenibilidad                                        @Juan Antonio
│       │   └─ RNF-10.1 · Código y documentación
│       └─ RNF-11 · Sostenibilidad                                        @Miguel
│           └─ RNF-11.1 · Embalaje y desperdicio
└─ [B5] User stories y revisión INVEST
    └─ Product Backlog (13 historias)
        ├─ #1 US-01 · Registrarme con mi correo y elegir mi zona        @Miguel
        ├─ #2 US-02 · Darme de alta con mis datos y mi registro sanitario @Juan Antonio
        ├─ #3 US-09 · Aprobar o rechazar las solicitudes de vendedores  @Sebastián
        ├─ #4 US-10 · Publicar productos con ficha completa (origen, alérgenos, conservación) @Sebastián
        ├─ #5 US-03 · Ver de quién es cada producto y sus alérgenos     @Juan Antonio
        ├─ #6 US-04 · Añadir productos de varios vendedores a un solo carrito @Sebastián
        ├─ #7 US-05 · Pagar una sola vez todo el carrito                @Miguel
        ├─ #8 US-11 · Ver y confirmar solo la parte del pedido que me corresponde @Juan Antonio
        ├─ #9 US-12 · Comprobar que cada subpedido recibido coincide con el pedido @Sebastián
        ├─ #10 US-08 · Pedir a la IA una cesta para mi presupuesto y mis días @Miguel
        ├─ #11 US-06 · Seguir mi pedido hasta la entrega                @Miguel
        ├─ #12 US-07 · Reclamar un producto en mal estado con una foto  @Sebastián
        └─ #13 US-13 · Valorar productos y vendedores                   @Juan Antonio
```

## 2. Tareas, con su descripción

Cada encabezado es una tarea de Asana; lo que hay debajo es su descripción tal cual. En Asana los requisitos atómicos se ven como lista con casillas.

### Requisitos funcionales (RF-01 a RF-19)

_Responsable: — · Fecha: por asignar · Subtareas: 19_

Un proceso principal por subtarea, en el orden de la cascada de construcción. Dentro de cada proceso, un subrequisito por pantalla o método, con su ficha. Fuente: docs/requisitos/ del repositorio.

#### RF-01 · Registro, inicio de sesión y roles

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 10_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 1 · Base (puesto 1 de 19 en la cascada) · **Actores:** Cliente, vendedor, admin · **Necesidades:** N-02 · **Historias:** US-01 · **Prioridad:** Must

**Supone que existe:** nada, es el primero (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-01.1 · Punto de entrada y pantalla de acceso (12)
- RF-01.2 · Inicio de sesión con correo y contraseña (18)
- RF-01.3 · Inicio de sesión con Google (9)
- RF-01.4 · Registro de cuenta de cliente (11)
- RF-01.5 · Verificación del correo (4)
- RF-01.6 · Recuperación de contraseña (7)
- RF-01.7 · Menú de usuario y cierre de sesión (8)
- RF-01.8 · Mis datos y direcciones (6)
- RF-01.9 · Preferencias, dieta y alergias (4)
- RF-01.10 · Privacidad y baja de la cuenta (4)

**Competencia**

83 requisitos atómicos · Poco extendido 40 · Paridad 38 · Sin evidencia 5. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-01.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-01.1 · Punto de entrada y pantalla de acceso

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

Ficha completa (Anexo A de la especificación). Cubre los apartados 1 y 5 a 13; el resto, abajo.

**Ubicación.** Enlace «Entrar» en la cabecera verde, a la derecha de los tres botones («Quiero comprar», «Quiero vender», «Cómo funciona»), separado de ellos por 24 px. Va como enlace de texto, no como botón, para no romper la regla de «tres botones y ya». Lleva a la ruta `/entrar`.

**Pantalla `/entrar`:**

| Elemento | Detalle |
| --- | --- |
| Fondo | Crema `--bg` #F6F1E6; cabecera y pie normales de la web |
| Tarjeta | Centrada, 420 px de ancho, fondo `--surface` #FFFFFF, borde 1 px `--border` #DDD0B0, radio `--radius` 10 px, sin sombra, 32 px de relleno |
| Título | «Entra en FOOD4ALL», Fraunces 600, `h2`, color `--green` #2F5233 |
| Subtítulo | «Compra a varios vendedores locales con una sola cuenta.» Figtree 17 px, `--text-soft` #4A5340 |
| Botón Google | Primero, ancho completo, 48 px de alto, fondo blanco, borde 1 px #DDD0B0, logo oficial de Google a la izquierda, texto «Continuar con Google» en `--text` (RF-01.3) |
| Separador | Línea 1 px #DDD0B0 con «o con tu correo» centrado, 0.85rem |
| Formulario | Campos de RF-01.2 |
| Pie de la tarjeta | «¿No tienes cuenta? Crear cuenta» (enlace a `/registro`, RF-01.4). Debajo: «¿Vendes productos locales? Solicita el alta» (enlace a `/vender#alta`, RF-02) |

Si el usuario llega desde una acción que exige sesión (por ejemplo, pagar), la ruta guarda la página de origen (`/entrar?volver=/carrito`) y tras entrar vuelve a ella.

**Criterios:**

- RF-01.1.CA1 — Dado un visitante sin sesión, cuando mira la cabecera, entonces ve «Entrar» a la derecha de los tres botones y al pulsarlo llega a `/entrar`.
- RF-01.1.CA2 — Dado un visitante que pulsa «Pagar» sin sesión, cuando entra correctamente, entonces vuelve a `/carrito` con su carrito intacto.

**2. Origen**

Necesidades: N-01, N-02, N-03, N-07 · Historias: US-01 · Fuentes: S01, S04, S06, S07, S08, S09

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 10 · Poco extendido 2

- Mercadona online: 11 sí
- Glovo: 10 sí
- Too Good To Go: 0 sí
- Wetaca: 10 sí
- Market Wagon: 10 sí, 1 parcial
- Open Food Network: 10 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (12)**

- [ ] **RF-01.1-01** `Must·MVP·Decidido` Mostrar el enlace de texto «Entrar» en la cabecera verde, a la derecha de «Cómo funciona» y separado 24 px; no es un botón, para mantener los tres botones principales.
  - Criterio: Dado un visitante sin sesión, cuando carga cualquier página pública, entonces ve «Entrar» a la derecha de «Cómo funciona».
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-02** `Must·MVP·Pendiente` Llevar el enlace «Entrar» a la ruta /entrar.
  - Criterio: Dado un visitante, cuando pulsa «Entrar», entonces la URL pasa a /entrar.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-03** `Must·MVP·Decidido` Mostrar /entrar sobre fondo crema --bg #F6F1E6 con la cabecera y el pie normales de la web.
  - Criterio: Dada la ruta /entrar, cuando se carga, entonces el fondo es #F6F1E6 y se ven cabecera y pie.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-04** `Must·MVP·Decidido` Mostrar el acceso en una tarjeta centrada de 420 px de ancho, fondo blanco --surface, borde 1 px --border #DDD0B0, radio 10 px, sin sombra y 32 px de relleno.
  - Criterio: Dada una pantalla de 1280 px, cuando se carga /entrar, entonces la tarjeta mide 420 px y está centrada.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-05** `Must·MVP·Pendiente` Titular la tarjeta «Entra en FOOD4ALL» en Fraunces 600, tamaño h2 y color --green #2F5233.
  - Criterio: Dada /entrar, cuando se carga, entonces el título es exactamente «Entra en FOOD4ALL».
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-06** `Should·MVP·Pendiente` Mostrar bajo el título el texto «Compra a varios vendedores locales con una sola cuenta.» en Figtree 17 px y color --text-soft #4A5340.
  - Criterio: Dada /entrar, cuando se carga, entonces se ve ese texto bajo el título.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-07** `Must·MVP·Pendiente` Ordenar la tarjeta así: título, subtítulo, botón de Google, separador «o con tu correo», formulario y enlaces de pie.
  - Criterio: Dada /entrar, cuando se recorre de arriba abajo, entonces los elementos aparecen en ese orden.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-08** `Must·MVP·Pendiente` Mostrar en el pie de la tarjeta «¿No tienes cuenta? Crear cuenta» con enlace a /registro.
  - Criterio: Dada /entrar, cuando pulsa «Crear cuenta», entonces llega a /registro.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-09** `Should·MVP·Pendiente` Mostrar bajo el anterior «¿Vendes productos locales? Solicita el alta» con enlace a /vender#alta.
  - Criterio: Dada /entrar, cuando pulsa «Solicita el alta», entonces llega al formulario de alta de vendedor.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-01.1-10** `Must·MVP·Pendiente` Guardar la página de origen en el parámetro volver cuando se exige sesión (por ejemplo /entrar?volver=/carrito) y redirigir a ella tras entrar.
  - Criterio: Dado un visitante que pulsa «Pagar» sin sesión, cuando entra, entonces vuelve a /carrito con el carrito intacto.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.1-11** `Must·MVP·Pendiente` Aceptar en volver solo rutas internas que empiecen por «/»; cualquier otra se ignora y se usa la redirección por rol.
  - Criterio: Dado volver=https://otra.web, cuando entra, entonces no sale de FOOD4ALL.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.1-12** `Should·V2·Pendiente` En pantallas de menos de 768 px, mostrar la tarjeta a ancho completo con 16 px de margen lateral.
  - Criterio: Dado un móvil de 375 px, cuando abre /entrar, entonces la tarjeta ocupa 343 px.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.2 · Inicio de sesión con correo y contraseña

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

Ficha completa (Anexo A de la especificación). Cubre los apartados 1 y 5 a 13; el resto, abajo.

**Campos** (etiqueta visible encima, Figtree 600; campo de 48 px de alto, borde 1 px #DDD0B0, radio 10 px; al enfocar, borde 2 px `--green`):

| Campo | Tipo | Obligatorio | Validación | Mensaje si falla |
| --- | --- | --- | --- | --- |
| Correo electrónico | email, autocompletar `email` | Sí | Formato nombre@dominio | «Escribe un correo válido, por ejemplo nombre@correo.com» |
| Contraseña | password, autocompletar `current-password` | Sí | No vacía | «Escribe tu contraseña» |

**Controles:**

- Icono de ojo dentro del campo de contraseña para mostrarla u ocultarla (texto alternativo «Mostrar contraseña» / «Ocultar contraseña»).
- Casilla «Mantener la sesión iniciada», desmarcada por defecto.
- Enlace «¿Has olvidado tu contraseña?» alineado a la derecha, encima del botón (RF-01.6).
- Botón «Entrar»: ancho completo, 48 px, forma píldora `--radius-pill`, fondo naranja `--accent` #D9822B, texto `--on-accent` #23301F en Figtree 600. Mientras se comprueba, muestra «Entrando…» y se desactiva.

**Flujo:**

1. El usuario escribe correo y contraseña y pulsa «Entrar» o la tecla Intro.
2. El navegador valida el formato; si falla, el error sale debajo del campo en rojo #C0392B y el foco va a ese campo.
3. El servidor comprueba las credenciales.
4. Si son correctas, abre la sesión y redirige según el rol: cliente → `/comprar/cliente`; vendedor → `/vender/panel`; o a la página guardada en `volver`.
5. Si son incorrectas, muestra encima del formulario un aviso con fondo `--tint-tomato` #F6DCD3: «El correo o la contraseña no son correctos.» El mensaje nunca dice cuál de los dos falla.

**Reglas** (Pendiente: propuestas para aprobar):

- Tras 5 intentos fallidos seguidos con el mismo correo, la cuenta se bloquea 15 minutos y sale: «Has superado los intentos. Prueba de nuevo en 15 minutos o recupera tu contraseña.»
- Sin «Mantener la sesión», la sesión caduca a las 2 horas sin actividad; con ella, a los 30 días.
- Las contraseñas se guardan solo como hash (bcrypt); la comunicación va por HTTPS (RNF-01).
- Un vendedor cuya alta está «en revisión» puede entrar, pero solo ve el estado de su solicitud.

**Accesibilidad:** orden de tabulación Google → correo → contraseña → ojo → casilla → olvidada → Entrar; errores anunciados con `aria-live`; contraste mínimo 4,5:1 (RNF-05).

**Criterios:**

- RF-01.2.CA1 — Dado un cliente registrado, cuando escribe su correo y contraseña correctos y pulsa «Entrar», entonces llega a `/comprar/cliente` y la cabecera muestra su menú (RF-01.7).
- RF-01.2.CA2 — Dada una contraseña incorrecta, cuando pulsa «Entrar», entonces ve «El correo o la contraseña no son correctos.» y el campo contraseña se vacía.
- RF-01.2.CA3 — Dados 5 fallos seguidos, cuando lo intenta por sexta vez, aunque la contraseña sea correcta, entonces no entra y ve el aviso de bloqueo.

**2. Origen**

Necesidades: N-02, N-05, N-07 · Historias: US-01 · Fuentes: S01, S04, S06, S07, S08, S09

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 16 · Poco extendido 2

- Mercadona online: 16 sí
- Glovo: 17 sí
- Too Good To Go: 0 sí
- Wetaca: 16 sí
- Market Wagon: 16 sí, 1 parcial
- Open Food Network: 16 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (18)**

- [ ] **RF-01.2-01** `Must·MVP·Pendiente` Pedir el correo en un campo de tipo email con etiqueta visible «Correo electrónico» y autocompletado email.
  - Criterio: Dado el formulario, cuando el foco entra en el campo, entonces el lector de pantalla anuncia «Correo electrónico».
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-02** `Must·MVP·Pendiente` Pedir la contraseña en un campo de tipo password con etiqueta «Contraseña» y autocompletado current-password.
  - Criterio: Dado el formulario, cuando escribe, entonces los caracteres se ocultan.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-03** `Must·MVP·Pendiente` Dar a los campos 48 px de alto, borde 1 px #DDD0B0 y radio 10 px; al enfocarlos, borde de 2 px --green.
  - Criterio: Dado un campo, cuando recibe el foco, entonces su borde pasa a 2 px #2F5233.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-04** `Should·MVP·Pendiente` Incluir un icono de ojo en el campo de contraseña que la muestra u oculta, con texto alternativo «Mostrar contraseña» / «Ocultar contraseña».
  - Criterio: Dada una contraseña escrita, cuando pulsa el ojo, entonces se ve en claro y el texto alternativo cambia.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-05** `Should·MVP·Pendiente` Incluir la casilla «Mantener la sesión iniciada», desmarcada por defecto.
  - Criterio: Dado /entrar, cuando se carga, entonces la casilla está desmarcada.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-06** `Must·MVP·Pendiente` Mostrar el enlace «¿Has olvidado tu contraseña?» alineado a la derecha, encima del botón «Entrar».
  - Criterio: Dado /entrar, cuando pulsa el enlace, entonces llega a /recuperar.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.2-07** `Must·MVP·Decidido` Mostrar el botón «Entrar» a ancho completo, 48 px, forma píldora, fondo --accent #D9822B y texto --on-accent #23301F en Figtree 600.
  - Criterio: Dado /entrar, cuando se carga, entonces el botón es naranja #D9822B con texto «Entrar».
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-08** `Must·MVP·Pendiente` Mientras se comprueban las credenciales, cambiar el texto del botón a «Entrando…» y desactivarlo.
  - Criterio: Dada una petición en curso, cuando pulsa otra vez, entonces no se envía una segunda petición.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-09** `Must·MVP·Pendiente` Validar en el navegador el formato del correo y mostrar «Escribe un correo válido, por ejemplo nombre@correo.com» bajo el campo en rojo #C0392B.
  - Criterio: Dado «ana@», cuando pulsa «Entrar», entonces sale ese mensaje y el foco va al campo.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-10** `Must·MVP·Pendiente` Si la contraseña está vacía, mostrar «Escribe tu contraseña» bajo el campo.
  - Criterio: Dada la contraseña vacía, cuando pulsa «Entrar», entonces sale ese mensaje.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-11** `Must·MVP·Pendiente` Si las credenciales no son correctas, mostrar encima del formulario, con fondo --tint-tomato #F6DCD3, «El correo o la contraseña no son correctos.» sin decir cuál falla.
  - Criterio: Dada una contraseña incorrecta, cuando pulsa «Entrar», entonces ve ese aviso y el campo contraseña se vacía.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-12** `Must·MVP·Pendiente` Redirigir tras entrar según el rol: cliente a /comprar/cliente y vendedor a /vender/panel, salvo que exista volver.
  - Criterio: Dado un vendedor, cuando entra, entonces llega a /vender/panel.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-13** `Must·MVP·Pendiente` Bloquear la cuenta 15 minutos tras 5 intentos fallidos seguidos con el mismo correo y mostrar «Has superado los intentos. Prueba de nuevo en 15 minutos o recupera tu contraseña.»
  - Criterio: Dados 5 fallos, cuando lo intenta por sexta vez con la contraseña correcta, entonces no entra y ve el aviso.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-14** `Must·MVP·Pendiente` Cerrar la sesión tras 2 horas sin actividad si no se marcó «Mantener la sesión»; con ella, tras 30 días.
  - Criterio: Dada una sesión sin marcar, cuando pasan 2 h sin actividad, entonces la siguiente acción pide entrar.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-15** `Must·MVP·Pendiente` Permitir que un vendedor con el alta «En revisión» entre, pero mostrarle solo el estado de su solicitud.
  - Criterio: Dado un vendedor en revisión, cuando entra, entonces ve su solicitud y no el panel completo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-01.2-16** `Should·MVP·Pendiente` Enviar el formulario con la tecla Intro desde cualquiera de los dos campos.
  - Criterio: Dado el foco en contraseña, cuando pulsa Intro, entonces se envía el formulario.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-17** `Must·MVP·Pendiente` Seguir el orden de tabulación: Google, correo, contraseña, ojo, casilla, enlace de olvido, «Entrar».
  - Criterio: Dado el teclado, cuando pulsa Tab desde el inicio, entonces recorre los elementos en ese orden.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.2-18** `Must·MVP·Pendiente` Anunciar los mensajes de error con aria-live para lectores de pantalla.
  - Criterio: Dado un error, cuando aparece, entonces el lector de pantalla lo lee sin mover el foco a mano.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.3 · Inicio de sesión con Google

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

Ficha completa (Anexo A de la especificación). Cubre los apartados 1 y 5 a 13; el resto, abajo.

**Ubicación:** botón «Continuar con Google» de RF-01.1, también en `/registro`.

**Flujo:**

1. Al pulsarlo se abre la ventana de Google (OAuth 2.0); solo se piden nombre, correo y foto de perfil.
2. Si el correo ya tiene cuenta en FOOD4ALL, entra directamente con su rol.
3. Si es nuevo, se crea una cuenta de **cliente** y se muestra un paso extra con dos campos obligatorios: zona (desplegable Málaga, Sevilla, Granada) y la casilla de condiciones de RF-01.4. Sin aceptarlas no se crea la cuenta.
4. Si el usuario cierra la ventana de Google, vuelve a `/entrar` sin mensaje de error.

**Reglas:** con Google no se pueden crear cuentas de vendedor (pasan por RF-02). Si el correo de Google ya existe con contraseña, se pide una vez la contraseña para vincular ambas formas de acceso.

**Criterios:**

- RF-01.3.CA1 — Dado un correo de Google sin cuenta, cuando el usuario acepta en Google, entonces ve el paso de zona y condiciones y, al completarlo, entra como cliente.
- RF-01.3.CA2 — Dado que el usuario cierra la ventana de Google, cuando vuelve, entonces sigue en `/entrar` sin error.

**2. Origen**

Necesidades: N-02, N-05, N-07 · Historias: US-01 · Fuentes: S04, S06

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin evidencia 5 · Poco extendido 4

- Mercadona online: 4 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 4 parcial
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (9)**

- [ ] **RF-01.3-01** `Should·MVP·Pendiente` Mostrar como primer elemento del acceso el botón «Continuar con Google», ancho completo, 48 px, fondo blanco, borde 1 px #DDD0B0 y logo oficial de Google a la izquierda.
  - Criterio: Dada /entrar, cuando se carga, entonces el primer botón es «Continuar con Google».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin evidencia
- [ ] **RF-01.3-02** `Should·MVP·Pendiente` Usar OAuth 2.0 de Google pidiendo solo nombre, correo y foto de perfil.
  - Criterio: Dado el consentimiento de Google, cuando se muestra, entonces solo pide esos tres datos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin evidencia
- [ ] **RF-01.3-03** `Should·MVP·Pendiente` Si el correo de Google ya tiene cuenta, entrar directamente con su rol.
  - Criterio: Dado un cliente registrado con ese correo, cuando acepta en Google, entonces entra como cliente.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin evidencia
- [ ] **RF-01.3-04** `Should·MVP·Pendiente` Si el correo es nuevo, crear una cuenta de cliente y pedir en un paso extra la zona (Málaga, Sevilla o Granada) y la aceptación de condiciones.
  - Criterio: Dado un correo nuevo, cuando vuelve de Google, entonces ve el paso de zona y condiciones.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-01.3-05** `Must·MVP·Pendiente` No crear la cuenta hasta que se acepten las condiciones en el paso extra.
  - Criterio: Dado el paso extra sin aceptar, cuando pulsa «Continuar», entonces no se crea la cuenta.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-01.3-06** `Should·MVP·Pendiente` Si el usuario cierra la ventana de Google, volver a /entrar sin mostrar error.
  - Criterio: Dada la ventana de Google cerrada, cuando vuelve, entonces sigue en /entrar sin aviso.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-01.3-07** `Must·MVP·Pendiente` No permitir crear cuentas de vendedor con Google; las altas de vendedor pasan por RF-02.
  - Criterio: Dado un correo nuevo de Google, cuando se crea la cuenta, entonces su rol es cliente.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-01.3-08** `Should·V2·Pendiente` Si el correo de Google ya existe con contraseña, pedirla una vez para vincular ambas formas de acceso.
  - Criterio: Dada una cuenta con contraseña, cuando entra con Google por primera vez, entonces se le pide la contraseña para vincular.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin evidencia
- [ ] **RF-01.3-09** `Could·V3·Pendiente` Ofrecer «Continuar con Apple» en la app de iPhone cuando exista app nativa.
  - Criterio: Dado un iPhone con la app, cuando abre el acceso, entonces ve «Continuar con Apple».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin evidencia

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.4 · Registro de cuenta de cliente

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

Ficha completa (Anexo A de la especificación). Cubre los apartados 1 y 5 a 13; el resto, abajo.

**Ubicación:** ruta `/registro`, misma tarjeta y estilo que `/entrar`, título «Crea tu cuenta».

| Campo | Tipo | Obligatorio | Validación | Mensaje si falla |
| --- | --- | --- | --- | --- |
| Nombre | texto | Sí | 2 a 40 caracteres | «Escribe tu nombre» |
| Correo electrónico | email | Sí | Formato válido y no registrado | «Ya hay una cuenta con este correo. ¿Quieres entrar?» (con enlace) |
| Contraseña | password, autocompletar `new-password` | Sí | Mínimo 8 caracteres, al menos una letra y un número | «Usa al menos 8 caracteres con letras y números» |
| Zona | desplegable | Sí | Málaga, Sevilla o Granada | «Elige tu zona» |
| Condiciones | casilla | Sí | Marcada | «Para crear la cuenta tienes que aceptar las condiciones» |
| Novedades por correo | casilla | No | Desmarcada por defecto | — |

Texto de la casilla obligatoria: «Acepto las Condiciones de uso y la Política de privacidad», con ambos títulos enlazados. Bajo la contraseña, una barra de 4 tramos indica su fortaleza. Botón «Crear cuenta» con el mismo estilo que «Entrar».

**Flujo:** al crear la cuenta se envía un correo de verificación con un enlace válido 24 horas. Sin verificar, el cliente puede navegar y llenar el carrito, pero al pagar ve: «Confirma tu correo para poder pagar. Reenviar correo».

**Reglas:** el registro no pide alergias ni datos de salud; eso va en Preferencias con consentimiento explícito (RNF-02).

**Criterios:**

- RF-01.4.CA1 — Dado un formulario sin la casilla de condiciones, cuando pulsa «Crear cuenta», entonces no se crea la cuenta y la casilla muestra su error.
- RF-01.4.CA2 — Dado un correo ya registrado, cuando intenta registrarse, entonces ve el aviso con el enlace a `/entrar`.
- RF-01.4.CA3 — Dado un cliente sin verificar, cuando pulsa «Pagar», entonces no puede pagar y ve el aviso para confirmar el correo.

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-01 · Fuentes: S01, S04, S06, S07, S09

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 9 · Poco extendido 2

- Mercadona online: 10 sí
- Glovo: 10 sí
- Too Good To Go: 0 sí
- Wetaca: 9 sí, 1 parcial
- Market Wagon: 10 sí
- Open Food Network: 9 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (11)**

- [ ] **RF-01.4-01** `Must·MVP·Pendiente` Ofrecer el registro en /registro con la misma tarjeta y estilo que /entrar y el título «Crea tu cuenta».
  - Criterio: Dado /registro, cuando se carga, entonces el título es «Crea tu cuenta».
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.4-02** `Must·MVP·Pendiente` Pedir el nombre (2 a 40 caracteres); si falta, mostrar «Escribe tu nombre».
  - Criterio: Dado un nombre de 1 carácter, cuando envía, entonces ve el mensaje.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.4-03** `Must·MVP·Pendiente` Pedir el correo y comprobar que no está registrado; si lo está, mostrar «Ya hay una cuenta con este correo. ¿Quieres entrar?» con enlace a /entrar.
  - Criterio: Dado un correo registrado, cuando envía, entonces ve el aviso con el enlace.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.4-04** `Must·MVP·Pendiente` Exigir una contraseña de al menos 8 caracteres con una letra y un número; si no, «Usa al menos 8 caracteres con letras y números».
  - Criterio: Dado «abcdefgh», cuando envía, entonces ve el mensaje.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.4-05** `Could·V2·Pendiente` Mostrar bajo la contraseña una barra de fortaleza de 4 tramos que se actualiza al escribir.
  - Criterio: Dada una contraseña de 12 caracteres con símbolos, cuando la escribe, entonces se llenan los 4 tramos.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.4-06** `Must·MVP·Pendiente` Pedir la zona con un desplegable obligatorio: Málaga, Sevilla o Granada; si falta, «Elige tu zona».
  - Criterio: Dada la zona vacía, cuando envía, entonces ve el mensaje.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-01.4-07** `Must·MVP·Decidido` Exigir la casilla «Acepto las Condiciones de uso y la Política de privacidad», con ambos títulos enlazados; si falta, «Para crear la cuenta tienes que aceptar las condiciones».
  - Criterio: Dada la casilla sin marcar, cuando envía, entonces no se crea la cuenta.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-01.4-08** `Should·MVP·Pendiente` Ofrecer la casilla opcional «Quiero recibir novedades por correo», desmarcada por defecto.
  - Criterio: Dado /registro, cuando se carga, entonces la casilla está desmarcada.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.4-09** `Must·MVP·Decidido` No pedir alergias ni datos de salud en el registro.
  - Criterio: Dado /registro, cuando se revisan los campos, entonces no hay ninguno de salud.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.4-10** `Must·MVP·Pendiente` Mostrar el botón «Crear cuenta» con el mismo estilo que «Entrar».
  - Criterio: Dado /registro, cuando se carga, entonces el botón es naranja #D9822B.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-01.4-11** `Must·MVP·Pendiente` Al crear la cuenta, iniciar sesión y llevar a /comprar/cliente con el aviso «Te hemos enviado un correo para confirmar tu cuenta.»
  - Criterio: Dado un registro correcto, cuando termina, entonces ve el aviso en /comprar/cliente.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.5 · Verificación del correo

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-07 · Historias: US-01 · Fuentes: S04

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 4 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-01.5-01** `Must·MVP·Pendiente` Enviar al registrarse un correo con el botón «Confirmar mi correo» y un enlace válido 24 horas.
  - Criterio: Dado un registro, cuando llega el correo, entonces el enlace caduca a las 24 h.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.5-02** `Must·MVP·Pendiente` Permitir navegar y llenar el carrito sin verificar, pero no pagar.
  - Criterio: Dado un cliente sin verificar, cuando pulsa «Pagar», entonces ve «Confirma tu correo para poder pagar. Reenviar correo».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.5-03** `Should·MVP·Pendiente` Permitir reenviar el correo de verificación como máximo una vez cada 2 minutos.
  - Criterio: Dado un reenvío, cuando pulsa otra vez antes de 2 min, entonces el botón está desactivado con la cuenta atrás.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.5-04** `Must·MVP·Pendiente` Si el enlace ha caducado, mostrar «Este enlace ha caducado» y un botón «Enviar otro».
  - Criterio: Dado un enlace de hace 25 h, cuando lo abre, entonces ve ese aviso.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.6 · Recuperación de contraseña

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

Ficha completa (Anexo A de la especificación). Cubre los apartados 1 y 5 a 13; el resto, abajo.

**Flujo:**

1. En `/entrar`, el usuario pulsa «¿Has olvidado tu contraseña?» y llega a `/recuperar`.
2. Ve el título «Recupera tu contraseña», un campo de correo y el botón naranja «Enviar enlace».
3. Al enviarlo, siempre sale el mismo mensaje, exista o no la cuenta: «Si hay una cuenta con ese correo, te hemos enviado un enlace. Revisa también la carpeta de spam.»
4. El correo trae un botón «Cambiar contraseña» con un enlace de un solo uso, válido 60 minutos.
5. El enlace abre `/recuperar/nueva`: campos «Nueva contraseña» y «Repite la contraseña» (mismas reglas que RF-01.4) y botón «Guardar contraseña».
6. Al guardar, se cierran todas las sesiones abiertas y se redirige a `/entrar` con un aviso verde #2F7D4B: «Contraseña cambiada. Ya puedes entrar.»

**Errores:** enlace caducado o usado → «Este enlace ya no sirve. Pide otro.» con botón a `/recuperar`. Contraseñas distintas → «Las contraseñas no coinciden». Máximo 3 peticiones por correo y hora.

**Criterios:**

- RF-01.6.CA1 — Dado un correo no registrado, cuando pide el enlace, entonces ve el mismo mensaje que con uno registrado.
- RF-01.6.CA2 — Dado un enlace de hace más de 60 minutos, cuando lo abre, entonces ve «Este enlace ya no sirve. Pide otro.»

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-01 · Fuentes: S01

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 7

- Mercadona online: 0 sí
- Glovo: 7 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (7)**

- [ ] **RF-01.6-01** `Must·MVP·Pendiente` Ofrecer /recuperar con el título «Recupera tu contraseña», un campo de correo y el botón naranja «Enviar enlace».
  - Criterio: Dado /recuperar, cuando se carga, entonces ve ese título y ese botón.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.6-02** `Must·MVP·Pendiente` Responder siempre «Si hay una cuenta con ese correo, te hemos enviado un enlace. Revisa también la carpeta de spam.», exista o no la cuenta.
  - Criterio: Dado un correo no registrado, cuando lo envía, entonces ve el mismo mensaje.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.6-03** `Must·MVP·Pendiente` Enviar un enlace de un solo uso válido 60 minutos con el botón «Cambiar contraseña».
  - Criterio: Dado un enlace usado, cuando lo abre otra vez, entonces ve «Este enlace ya no sirve. Pide otro.»
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.6-04** `Must·MVP·Pendiente` Mostrar en /recuperar/nueva los campos «Nueva contraseña» y «Repite la contraseña» con las reglas del registro y el botón «Guardar contraseña».
  - Criterio: Dadas dos contraseñas distintas, cuando guarda, entonces ve «Las contraseñas no coinciden».
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.6-05** `Must·MVP·Pendiente` Al cambiar la contraseña, cerrar todas las sesiones abiertas y llevar a /entrar con el aviso verde #2F7D4B «Contraseña cambiada. Ya puedes entrar.»
  - Criterio: Dada una sesión abierta en otro navegador, cuando cambia la contraseña, entonces esa sesión se cierra.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.6-06** `Should·MVP·Pendiente` Limitar a 3 las peticiones de recuperación por correo y hora.
  - Criterio: Dadas 3 peticiones en una hora, cuando pide la cuarta, entonces no se envía correo.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.6-07** `Should·V2·Pendiente` Avisar por correo de que la contraseña ha cambiado, con un enlace «No he sido yo».
  - Criterio: Dado un cambio de contraseña, cuando termina, entonces llega el aviso al correo.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.7 · Menú de usuario y cierre de sesión

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

Ficha completa (Anexo A de la especificación). Cubre los apartados 1 y 5 a 13; el resto, abajo.

**Ubicación:** con sesión iniciada, «Entrar» se sustituye en la cabecera por un círculo de 36 px con las iniciales del usuario (fondo `--saffron` #E3A82B, texto `--text`) y su nombre en crema a la derecha. Al pulsarlo se abre un menú desplegable bajo él: fondo blanco, borde 1 px #DDD0B0, radio 10 px, 240 px de ancho, opciones de 44 px de alto.

| Rol | Opciones del menú, en este orden |
| --- | --- |
| Cliente | Mis pedidos · Mi carrito · Preferencias · Mis datos · Cerrar sesión |
| Vendedor | Mi panel · Mis productos · Pedidos recibidos · Datos del negocio · Cerrar sesión |

«Cerrar sesión» va separado por una línea y en rojo #C0392B. El menú se cierra al pulsar fuera o con Escape.

**Cierre de sesión:** cierra la sesión en el servidor, lleva a la portada y muestra durante 4 s: «Has cerrado la sesión.» El carrito de un cliente se conserva en su cuenta, no en el navegador.

**Criterios:**

- RF-01.7.CA1 — Dado un vendedor con sesión, cuando abre su menú, entonces ve las cinco opciones de vendedor en el orden indicado.
- RF-01.7.CA2 — Dado un cliente con 3 productos en el carrito, cuando cierra sesión y vuelve a entrar, entonces su carrito sigue teniendo los 3 productos.

**2. Origen**

Necesidades: N-02, N-03, N-07 · Historias: US-01 · Fuentes: S04

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 8

- Mercadona online: 8 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (8)**

- [ ] **RF-01.7-01** `Must·MVP·Pendiente` Con sesión, sustituir «Entrar» por un círculo de 36 px con las iniciales (fondo --saffron #E3A82B, texto --text) y el nombre en crema a su derecha.
  - Criterio: Dada una sesión de «Ana López», cuando carga la cabecera, entonces ve «AL» y «Ana».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.7-02** `Must·MVP·Pendiente` Abrir al pulsarlo un menú de 240 px, fondo blanco, borde 1 px #DDD0B0, radio 10 px y opciones de 44 px.
  - Criterio: Dado el círculo, cuando lo pulsa, entonces se abre el menú bajo él.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.7-03** `Must·MVP·Pendiente` Mostrar al cliente, en este orden: Mis pedidos, Mi carrito, Preferencias, Mis datos, Cerrar sesión.
  - Criterio: Dado un cliente, cuando abre el menú, entonces ve esas cinco opciones en ese orden.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.7-04** `Must·MVP·Pendiente` Mostrar al vendedor, en este orden: Mi panel, Mis productos, Pedidos recibidos, Datos del negocio, Cerrar sesión.
  - Criterio: Dado un vendedor, cuando abre el menú, entonces ve esas cinco opciones en ese orden.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.7-05** `Should·MVP·Pendiente` Separar «Cerrar sesión» con una línea y mostrarlo en rojo #C0392B.
  - Criterio: Dado el menú, cuando se abre, entonces «Cerrar sesión» es la última opción y en rojo.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.7-06** `Must·MVP·Pendiente` Cerrar el menú al pulsar fuera o con la tecla Escape y devolver el foco al círculo.
  - Criterio: Dado el menú abierto, cuando pulsa Escape, entonces se cierra y el foco vuelve al círculo.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.7-07** `Must·MVP·Pendiente` Al cerrar sesión, invalidarla en el servidor, ir a la portada y mostrar 4 s «Has cerrado la sesión.»
  - Criterio: Dado un cierre de sesión, cuando vuelve atrás en el navegador, entonces no ve datos privados.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.7-08** `Must·MVP·Pendiente` Conservar el carrito del cliente en su cuenta al cerrar sesión.
  - Criterio: Dado un carrito con 3 productos, cuando cierra sesión y vuelve a entrar, entonces sigue con 3 productos.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.8 · Mis datos y direcciones

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-01 · Fuentes: S01, S04, S06, S09

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4 · Paridad 2

- Mercadona online: 5 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 3 parcial
- Market Wagon: 0 sí
- Open Food Network: 4 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RF-01.8-01** `Must·MVP·Pendiente` Ofrecer «Mis datos» con nombre, correo, teléfono opcional y contraseña, cada uno editable con su botón «Guardar».
  - Criterio: Dado un cambio de nombre, cuando guarda, entonces la cabecera muestra el nombre nuevo.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca P · Market ? · Open S → Paridad
- [ ] **RF-01.8-02** `Must·MVP·Pendiente` Exigir la contraseña actual para cambiar el correo o la contraseña.
  - Criterio: Dado un cambio de correo, cuando no escribe la contraseña actual, entonces no se guarda.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.8-03** `Should·MVP·Pendiente` Al cambiar el correo, enviar verificación a la dirección nueva y mantener la antigua hasta confirmarla.
  - Criterio: Dado un correo nuevo sin confirmar, cuando entra, entonces sigue usando el antiguo.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca P · Market ? · Open S → Paridad
- [ ] **RF-01.8-04** `Should·MVP·Pendiente` Permitir guardar hasta 5 direcciones con alias (Casa, Piso…), calle, número, piso, código postal, ciudad e indicaciones para el repartidor.
  - Criterio: Dadas 5 direcciones, cuando intenta añadir la sexta, entonces ve «Puedes guardar hasta 5 direcciones».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-01.8-05** `Should·MVP·Pendiente` Marcar una dirección como predeterminada para el checkout.
  - Criterio: Dada una dirección predeterminada, cuando llega al checkout, entonces aparece seleccionada.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-01.8-06** `Must·MVP·Pendiente` Comprobar que el código postal de cada dirección está en una zona con servicio; si no, «Todavía no llegamos a este código postal».
  - Criterio: Dado el código 28001, cuando guarda, entonces ve el aviso.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.9 · Preferencias, dieta y alergias

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-04, N-07 · Historias: US-01 · Fuentes: S01, S06, S09

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3 · Paridad 1

- Mercadona online: 0 sí
- Glovo: 2 sí
- Too Good To Go: 0 sí
- Wetaca: 2 sí
- Market Wagon: 0 sí
- Open Food Network: 2 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-01.9-01** `Should·MVP·Pendiente` Ofrecer «Preferencias» con presupuesto semanal orientativo, número de personas del piso y tipo de dieta (omnívora, vegetariana, vegana).
  - Criterio: Dado un presupuesto de 30 €, cuando guarda, entonces el asistente lo usa por defecto.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-01.9-02** `Must·MVP·Decidido` Pedir consentimiento explícito y separado antes de guardar alergias o intolerancias, con el texto «Guardaremos tus alergias solo para avisarte y filtrar productos. Puedes borrarlas cuando quieras.»
  - Criterio: Dado el consentimiento sin marcar, cuando intenta guardar alergias, entonces no se guardan.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-01.9-03** `Must·MVP·Decidido` Usar la lista de 14 alérgenos del Reglamento (UE) 1169/2011 como casillas.
  - Criterio: Dada la sección de alergias, cuando se abre, entonces hay 14 casillas.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-01.9-04** `Must·MVP·Pendiente` Permitir retirar el consentimiento y borrar las alergias con un botón «Borrar mis alergias».
  - Criterio: Dado un borrado, cuando confirma, entonces las alergias desaparecen y no se usan.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-01.10 · Privacidad y baja de la cuenta

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-07 · Historias: US-01 · Fuentes: S01

**3. Actores y roles**

Cliente, vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 4 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-01.10-01** `Must·MVP·Decidido` Permitir descargar todos los datos personales en un archivo JSON desde «Mis datos».
  - Criterio: Dado un cliente, cuando pulsa «Descargar mis datos», entonces recibe un JSON con sus datos y pedidos.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.10-02** `Must·MVP·Decidido` Permitir eliminar la cuenta tras confirmar con la contraseña y el texto «Entiendo que se borrarán mis datos».
  - Criterio: Dada la eliminación confirmada, cuando termina, entonces no puede volver a entrar con ese correo y contraseña.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.10-03** `Must·MVP·Pendiente` Conservar anonimizados los pedidos de una cuenta eliminada durante el plazo legal de facturación.
  - Criterio: Dada una cuenta eliminada, cuando el admin consulta sus pedidos, entonces no ve nombre ni correo.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-01.10-04** `Must·MVP·Pendiente` No permitir eliminar la cuenta con un pedido en curso; avisar «Tienes un pedido en camino. Podrás eliminar la cuenta cuando se entregue.»
  - Criterio: Dado un pedido en reparto, cuando intenta eliminar la cuenta, entonces ve el aviso.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-02 · Alta y verificación de vendedor

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 7_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 1 · Base (puesto 2 de 19 en la cascada) · **Actores:** Vendedor, admin · **Necesidades:** N-03, N-05 · **Historias:** US-02 · **Prioridad:** Must

**Supone que existe:** RF-01 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-02.1 · Página «Quiero vender» (5)
- RF-02.2 · Formulario de solicitud (10)
- RF-02.3 · Documentación (3)
- RF-02.4 · Estados de la solicitud (4)
- RF-02.5 · Activación y formación (3)
- RF-02.6 · Datos del negocio y perfil público (4)
- RF-02.7 · Diseño y comportamiento del formulario de alta (6)

**Competencia**

35 requisitos atómicos · Poco extendido 30 · Sin referente 3 · Mejora 2. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-02.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-02.1 · Página «Quiero vender»

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-05 · Historias: US-02 · Fuentes: S08

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4 · Mejora 1

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí, 2 parcial
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-02.1-04 (Mejora)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-02.1-01** `Must·MVP·Decidido` Explicar en /vender, en este orden: qué gana el vendedor, cómo funciona (recogida, hub, entrega), requisitos y el formulario de alta.
  - Criterio: Dado /vender, cuando se recorre, entonces las secciones aparecen en ese orden.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.1-02** `Should·MVP·Decidido` Mostrar la frase «Solo somos un intermediario, no siete» en la sección de ventajas.
  - Criterio: Dado /vender, cuando se carga, entonces aparece la frase.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-02.1-03** `Must·MVP·Decidido` Listar los requisitos mínimos: registro sanitario, ficha completa de cada producto, producto en buen estado y sin información oculta.
  - Criterio: Dado /vender, cuando se lee «Requisitos», entonces aparecen los cuatro.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-02.1-04** `Must·MVP·Decidido` Explicar la comisión como «Pendiente de definir» mientras no esté decidida, sin mostrar porcentajes.
  - Criterio: Dado /vender, cuando se lee la comisión, entonces no aparece ningún porcentaje.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Mejora
- [ ] **RF-02.1-05** `Must·MVP·Pendiente` Mostrar el botón «Solicitar el alta» en naranja --accent que baja al formulario (#alta).
  - Criterio: Dado /vender, cuando pulsa el botón, entonces la página se desplaza al formulario.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-02.2 · Formulario de solicitud

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-05, N-07 · Historias: US-02 · Fuentes: S04, S06, S07, S08

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 9 · Mejora 1

- Mercadona online: 6 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 6 parcial
- Market Wagon: 6 sí, 3 parcial
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-02.2-05 (Mejora)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (10)**

- [ ] **RF-02.2-01** `Must·MVP·Pendiente` Pedir nombre del negocio (2 a 80 caracteres).
  - Criterio: Dado un nombre vacío, cuando envía, entonces ve «Escribe el nombre del negocio».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.2-02** `Must·MVP·Pendiente` Pedir el tipo de negocio con un desplegable: agricultor, ganadero, frutería, panadería u obrador, despensa, cocina local, otro.
  - Criterio: Dado «otro», cuando lo elige, entonces aparece un campo de texto para describirlo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.2-03** `Must·MVP·Pendiente` Pedir la zona (Málaga, Sevilla, Granada) y la dirección de recogida con código postal.
  - Criterio: Dado un código postal fuera de zona, cuando envía, entonces ve «Por ahora solo recogemos en Málaga, Sevilla y Granada».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-02.2-04** `Must·MVP·Pendiente` Pedir persona de contacto, teléfono (9 dígitos) y correo.
  - Criterio: Dado un teléfono de 8 dígitos, cuando envía, entonces ve «El teléfono debe tener 9 dígitos».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.2-05** `Must·MVP·Decidido` Pedir el número de Registro General Sanitario (RGSEAA) o declarar que está exento como pequeño productor (RD 1086/2020).
  - Criterio: Dado el campo vacío sin declarar exención, cuando envía, entonces no se acepta la solicitud.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market S · Open ? → Mejora
- [ ] **RF-02.2-06** `Must·MVP·Pendiente` Pedir los días y horas en que se puede recoger el producto (casillas por día y franja).
  - Criterio: Dados ningún día marcado, cuando envía, entonces ve «Indica al menos un día de recogida».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market S · Open ? → Poco extendido
- [ ] **RF-02.2-07** `Should·MVP·Pendiente` Pedir una descripción breve de lo que vende (hasta 500 caracteres).
  - Criterio: Dados 501 caracteres, cuando escribe, entonces el contador se pone en rojo y no deja enviar.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market S · Open ? → Poco extendido
- [ ] **RF-02.2-08** `Must·MVP·Decidido` Exigir la aceptación de las condiciones para vendedores (P2B) con enlace al texto.
  - Criterio: Dada la casilla sin marcar, cuando envía, entonces no se envía.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-02.2-09** `Must·MVP·Pendiente` Al enviar, mostrar «Solicitud recibida. Te escribiremos en un máximo de 5 días hábiles.» y enviar el mismo mensaje por correo.
  - Criterio: Dada una solicitud correcta, cuando se envía, entonces ve el mensaje y le llega el correo.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market S · Open ? → Poco extendido
- [ ] **RF-02.2-10** `Must·MVP·Decidido` Guardar las solicitudes solo para el administrador; nunca se muestran en la web pública.
  - Criterio: Dada una solicitud, cuando un visitante busca su nombre, entonces no aparece.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-02.3 · Documentación

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-05, N-07 · Historias: US-02 · Fuentes: 

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin referente 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-02.3-01** `Must·MVP·Pendiente` Permitir adjuntar el justificante del registro sanitario en PDF, JPG o PNG de hasta 5 MB.
  - Criterio: Dado un archivo de 6 MB, cuando lo sube, entonces ve «El archivo no puede superar 5 MB».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-02.3-02** `Could·V2·Pendiente` Permitir adjuntar hasta 5 fotos del negocio o del producto.
  - Criterio: Dadas 5 fotos, cuando intenta subir la sexta, entonces no se añade.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-02.3-03** `Must·MVP·Pendiente` Guardar los documentos en almacenamiento privado, accesibles solo para el administrador.
  - Criterio: Dado el enlace de un documento, cuando lo abre un usuario sin rol admin, entonces recibe acceso denegado.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-02.4 · Estados de la solicitud

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-05 · Historias: US-02 · Fuentes: S08

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí, 4 parcial
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-02.4-01** `Must·MVP·Decidido` Gestionar cuatro estados: Recibida, En revisión, Verificada y Rechazada.
  - Criterio: Dada una solicitud nueva, cuando se crea, entonces su estado es Recibida.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.4-02** `Must·MVP·Pendiente` Notificar por correo al vendedor cada cambio de estado.
  - Criterio: Dado el paso a Verificada, cuando ocurre, entonces el vendedor recibe un correo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.4-03** `Must·MVP·Pendiente` Exigir un motivo escrito al rechazar y enviarlo al vendedor.
  - Criterio: Dado un rechazo sin motivo, cuando el admin guarda, entonces no se permite.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.4-04** `Should·V2·Pendiente` Permitir al vendedor rechazado volver a solicitar el alta pasados 30 días.
  - Criterio: Dado un rechazo hace 10 días, cuando vuelve a solicitar, entonces ve la fecha desde la que podrá hacerlo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-02.5 · Activación y formación

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-05 · Historias: US-02 · Fuentes: S08

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-02.5-01** `Must·MVP·Pendiente` Al verificar, enviar al vendedor un enlace para crear su contraseña, válido 72 horas.
  - Criterio: Dado el enlace, cuando pasan 73 h, entonces caduca y el admin puede reenviarlo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-02.5-02** `Should·MVP·Pendiente` Mostrar al vendedor en su primer acceso una guía de 4 pasos: datos del negocio, primer producto, días de recogida y cómo preparar pedidos.
  - Criterio: Dado un primer acceso, cuando entra, entonces ve la guía y puede saltarla.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-02.5-03** `Must·MVP·Pendiente` No publicar productos de un vendedor hasta que complete los datos del negocio.
  - Criterio: Dado un vendedor sin datos, cuando intenta publicar, entonces ve «Completa los datos del negocio antes de publicar».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-02.6 · Datos del negocio y perfil público

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03 · Historias: US-02 · Fuentes: F-04, S08, S09

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí, 3 no
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 3 no
- Market Wagon: 4 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-02.6-01** `Should·MVP·Pendiente` Permitir editar nombre comercial, descripción, foto de portada, historia (hasta 1.500 caracteres) y ciudad.
  - Criterio: Dado un cambio de historia, cuando guarda, entonces se ve en su perfil público.
  - Competencia: Mercadona N · Glovo ? · Too ? · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-02.6-02** `Should·MVP·Pendiente` Mostrar un perfil público en /vendedores/<nombre> con historia, fotos, zona y productos activos.
  - Criterio: Dado un vendedor verificado, cuando un cliente abre su perfil, entonces ve sus productos.
  - Competencia: Mercadona N · Glovo ? · Too ? · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-02.6-03** `Must·V2·Pendiente` Guardar el IBAN para las liquidaciones, visible solo enmascarado (ES** **** 1234).
  - Criterio: Dado un IBAN guardado, cuando el vendedor lo consulta, entonces ve solo los 4 últimos dígitos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-02.6-04** `Must·V2·Pendiente` Validar el formato del IBAN español (ES + 22 dígitos) antes de guardarlo.
  - Criterio: Dado un IBAN de 20 dígitos, cuando guarda, entonces ve «El IBAN no es válido».
  - Competencia: Mercadona N · Glovo ? · Too ? · Wetaca N · Market S · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-02.7 · Diseño y comportamiento del formulario de alta

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03 · Historias: US-02 · Fuentes: S08

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 6

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí, 6 parcial
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RF-02.7-01** `Must·MVP·Pendiente` Mostrar el formulario en una tarjeta blanca de 720 px con dos columnas en ordenador y una en móvil.
  - Criterio: Dada una pantalla de 1280 px, cuando se ve, entonces hay dos columnas.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.7-02** `Should·MVP·Pendiente` Agrupar los campos en tres bloques con título: Tu negocio, Contacto y Requisitos.
  - Criterio: Dado el formulario, cuando se ve, entonces hay tres bloques.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.7-03** `Must·MVP·Pendiente` Marcar los campos obligatorios con «(obligatorio)» en la etiqueta, no solo con asterisco.
  - Criterio: Dado un campo obligatorio, cuando se lee la etiqueta, entonces dice «(obligatorio)».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.7-04** `Should·MVP·Pendiente` Guardar el borrador del formulario en el navegador para no perderlo si se cierra la página.
  - Criterio: Dado un formulario a medias, cuando vuelve, entonces sigue relleno.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.7-05** `Must·MVP·Pendiente` Al fallar el envío, llevar el foco al primer campo con error y listar arriba los errores.
  - Criterio: Dados 2 errores, cuando envía, entonces ve la lista y el foco en el primero.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-02.7-06** `Must·MVP·Pendiente` Mostrar el botón «Enviar solicitud» en naranja, 48 px, con «Enviando…» mientras se procesa.
  - Criterio: Dado un envío, cuando está en curso, entonces el botón está desactivado.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-13 · Panel de administración

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 7_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 1 · Base (puesto 3 de 19 en la cascada) · **Actores:** Admin · **Necesidades:** N-05, N-06 · **Historias:** US-09 · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-13.1 · Acceso (3)
- RF-13.2 · Vendedores (3)
- RF-13.3 · Catálogo, pedidos e incidencias (3)
- RF-13.4 · Contenido, métricas y auditoría (4)
- RF-13.5 · Usuarios y roles (3)
- RF-13.6 · Configuración (3)
- RF-13.7 · Prompts del proyecto (3) — propuesto quitar

**Competencia**

22 requisitos atómicos · Sin referente 13 · Poco extendido 6 · Paridad 3. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-13.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-13.1 · Acceso

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-05, N-07 · Historias: US-09 · Fuentes: 

**3. Actores y roles**

Admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin referente 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-13.1-01** `Must·MVP·Decidido` Entrar al panel por /admin con usuario y contraseña propios, sin enlace visible desde la web pública salvo un acceso discreto en el pie.
  - Criterio: Dada la portada, cuando se busca un botón de admin, entonces solo está el enlace discreto del pie.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.1-02** `Must·MVP·Decidido` Mostrar una barra lateral fija a la izquierda con las secciones y la activa marcada.
  - Criterio: Dado /admin, cuando se cambia de sección, entonces la barra marca la nueva.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.1-03** `Must·MVP·Pendiente` Cerrar la sesión de administración tras 30 minutos sin actividad.
  - Criterio: Dados 31 min sin actividad, cuando pulsa algo, entonces debe entrar de nuevo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-13.2 · Vendedores

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-05, N-06 · Historias: US-09 · Fuentes: S08

**3. Actores y roles**

Admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí, 3 parcial
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-13.2-01** `Must·MVP·Pendiente` Listar las solicitudes de alta con filtros por estado y zona.
  - Criterio: Dado el filtro «En revisión», cuando se aplica, entonces solo salen esas.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-13.2-02** `Must·MVP·Pendiente` Ver el detalle de cada solicitud con documentos y cambiar su estado con motivo.
  - Criterio: Dado un rechazo, cuando se guarda con motivo, entonces se envía al vendedor.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-13.2-03** `Must·V2·Pendiente` Suspender a un vendedor ocultando sus productos sin borrarlos y con motivo registrado.
  - Criterio: Dado un vendedor suspendido, cuando un cliente busca sus productos, entonces no aparecen.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-13.3 · Catálogo, pedidos e incidencias

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-06 · Historias: US-09 · Fuentes: S01, S04, S06, S07

**3. Actores y roles**

Admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 2 · Poco extendido 1

- Mercadona online: 2 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 2 sí
- Market Wagon: 2 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-13.3-01** `Must·V2·Pendiente` Revisar y retirar productos que incumplan las normas, avisando al vendedor.
  - Criterio: Dado un producto retirado por el admin, cuando ocurre, entonces el vendedor recibe el motivo.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-13.3-02** `Must·MVP·Pendiente` Ver todos los pedidos con sus subpedidos y estados, con búsqueda por número.
  - Criterio: Dado F4A-2026-00012, cuando lo busca, entonces ve su detalle.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-13.3-03** `Must·MVP·Pendiente` Gestionar la cola de incidencias ordenada por antigüedad, con el plazo de 24 h visible.
  - Criterio: Dada una incidencia de hace 20 h, cuando se ve la cola, entonces aparece en naranja.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-13.4 · Contenido, métricas y auditoría

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-05, N-06, N-07 · Historias: US-09 · Fuentes: 

**3. Actores y roles**

Admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin referente 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-13.4-01** `Should·V2·Pendiente` Editar desde el panel las preguntas frecuentes, los textos legales y los avisos de la portada.
  - Criterio: Dado un cambio en la FAQ, cuando se guarda, entonces se ve en la web.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.4-02** `Should·V2·Pendiente` Mostrar métricas: pedidos, ticket medio, vendedores por zona, recurrencia de clientes e incidencias por cada 100 pedidos.
  - Criterio: Dado el panel, cuando se abre «Métricas», entonces se ven esas cinco.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.4-03** `Must·V2·Pendiente` Registrar en un historial quién cambió qué y cuándo en vendedores, productos, pedidos e incidencias.
  - Criterio: Dado un cambio de estado, cuando se consulta el historial, entonces aparece con autor y hora.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.4-04** `Should·MVP·Decidido` Mostrar los hitos y tareas del proyecto leídos de Asana, solo para el equipo.
  - Criterio: Dado el panel, cuando se abre «Hitos», entonces se ven las tareas de Asana.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-13.5 · Usuarios y roles

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-05, N-06, N-07 · Historias: US-09 · Fuentes: 

**3. Actores y roles**

Admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin referente 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-13.5-01** `Must·V2·Pendiente` Listar usuarios con búsqueda por correo y filtro por rol.
  - Criterio: Dado el filtro «vendedor», cuando se aplica, entonces solo salen vendedores.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.5-02** `Must·V2·Pendiente` Permitir bloquear una cuenta con motivo; el usuario bloqueado no puede entrar.
  - Criterio: Dada una cuenta bloqueada, cuando intenta entrar, entonces ve «Tu cuenta está bloqueada. Escríbenos.»
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.5-03** `Must·MVP·Pendiente` Crear cuentas de administrador solo desde otra cuenta de administrador.
  - Criterio: Dado un cliente, cuando intenta acceder a /admin/usuarios, entonces recibe 403.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-13.6 · Configuración

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-05 · Historias: US-09 · Fuentes: S01, S04, S05, S06, S07

**3. Actores y roles**

Admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 2 · Paridad 1

- Mercadona online: 3 sí
- Glovo: 0 sí, 2 no
- Too Good To Go: 0 sí
- Wetaca: 2 sí
- Market Wagon: 2 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-13.6-01** `Must·MVP·Pendiente` Configurar desde el panel la compra mínima, el coste de envío, las franjas y su capacidad por zona.
  - Criterio: Dado un cambio de compra mínima a 12 €, cuando se guarda, entonces el carrito lo aplica.
  - Competencia: Mercadona S · Glovo N · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-13.6-02** `Must·MVP·Pendiente` Configurar las zonas activas y sus códigos postales.
  - Criterio: Dado un código postal añadido, cuando se guarda, entonces ya se puede comprar desde él.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-13.6-03** `Must·V2·Pendiente` Registrar cada cambio de configuración con autor, valor anterior y valor nuevo.
  - Criterio: Dado un cambio, cuando se consulta el historial, entonces aparece.
  - Competencia: Mercadona S · Glovo N · Too ? · Wetaca S · Market S · Open ? → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-13.7 · Prompts del proyecto

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

> ⚠️ Es el panel de prompts de la landing, no del marketplace (propuesto quitarlo).

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-09 · Fuentes: 

**3. Actores y roles**

Admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin referente 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-13.7-01** `Should·MVP·Decidido` Mostrar en /admin#prompts el registro de prompts del equipo con filtro por tipo y botón de copiar.
  - Criterio: Dado el filtro «landing», cuando se aplica, entonces solo salen esos prompts.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.7-02** `Should·MVP·Decidido` Ofrecer «Pulir con IA» que muestra el original y la propuesta lado a lado, sin sustituir el original.
  - Criterio: Dado «Pulir con IA», cuando termina, entonces el original sigue intacto.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-13.7-03** `Could·MVP·Decidido` Mostrar el buscador de la barra lateral desactivado y marcado «Pendiente» hasta que se decida si usa IA.
  - Criterio: Dado el panel, cuando se ve el buscador, entonces está desactivado.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-15 · Web pública e información

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 7_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 1 · Base (puesto 4 de 19 en la cascada) · **Actores:** Visitante · **Necesidades:** N-01, N-02, N-07 · **Historias:** — · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02, RF-13 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-15.1 · Cabecera (5)
- RF-15.2 · Portada (6)
- RF-15.3 · Cómo funciona (4)
- RF-15.4 · Quiénes somos y comparativa (4)
- RF-15.5 · Preguntas frecuentes (4)
- RF-15.6 · Comunidad y redes (4)
- RF-15.7 · Pie de página (5)

**Competencia**

32 requisitos atómicos · Paridad 17 · Poco extendido 10 · Sin referente 5. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-15.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-15.1 · Cabecera

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02 · Historias: — · Fuentes: S04, S06, S07, S09

**3. Actores y roles**

Visitante

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 4 · Poco extendido 1

- Mercadona online: 3 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 5 sí
- Market Wagon: 4 sí
- Open Food Network: 4 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-15.1-01** `Must·MVP·Decidido` Mostrar la cabecera verde bosque --green #2F5233 con un filo inferior azafrán de 3 px, fija al hacer scroll.
  - Criterio: Dado un scroll de 800 px, cuando se mira arriba, entonces la cabecera sigue visible.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.1-02** `Must·MVP·Decidido` Mostrar a la izquierda el logo FOOD4ALL (caja de mercado con frutas y el 4 en naranja) enlazado a la portada.
  - Criterio: Dado cualquier página, cuando pulsa el logo, entonces va a la portada.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.1-03** `Must·MVP·Decidido` Mostrar solo tres botones: «Quiero comprar» (siempre naranja), «Quiero vender» y «Cómo funciona»; el activo en crema.
  - Criterio: Dada /vender, cuando se ve la cabecera, entonces «Quiero vender» aparece en crema.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.1-04** `Must·MVP·Decidido` Mostrar una segunda fila en verde #24402A con las pestañas de zona (Málaga, Sevilla, Granada), la activa subrayada en azafrán.
  - Criterio: Dada la zona Granada, cuando se ve la cabecera, entonces «Granada» está subrayada.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-15.1-05** `Should·V2·Pendiente` En móvil, agrupar los botones en un menú de hamburguesa de 44 px con texto alternativo «Abrir menú».
  - Criterio: Dado un móvil de 375 px, cuando pulsa el icono, entonces se despliegan los tres botones.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-15.2 · Portada

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02, N-03, N-07 · Historias: — · Fuentes: S06, S07, S09

**3. Actores y roles**

Visitante

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 6

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 6 sí
- Market Wagon: 6 sí
- Open Food Network: 6 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RF-15.2-01** `Must·MVP·Decidido` Mostrar un hero con la ilustración propia de campo andaluz, oscurecida a la izquierda para que se lea el texto.
  - Criterio: Dada la portada, cuando se carga, entonces el texto del hero cumple 4,5:1 de contraste.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.2-02** `Must·MVP·Decidido` Mostrar el lema «Planifica tu comida. Ahorra. Come como en casa.» con «Come como en casa.» en azafrán.
  - Criterio: Dada la portada, cuando se lee el hero, entonces aparece el lema exacto.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.2-03** `Must·MVP·Decidido` Mostrar en el hero tres botones grandes de 54 px: «Quiero comprar», «Quiero vender» y «Cómo funciona».
  - Criterio: Dada la portada, cuando se mide, entonces los tres botones miden 54 px de alto.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.2-04** `Could·MVP·Decidido` Mostrar bajo el hero una cinta azafrán con nombres de producto en movimiento que se para al pasar el ratón.
  - Criterio: Dado el ratón sobre la cinta, cuando pasa, entonces se detiene.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.2-05** `Must·MVP·Decidido` Explicar en una frase cómo funciona: «Una sola compra a varios vendedores locales, con una entrega».
  - Criterio: Dada la portada, cuando se lee, entonces aparece esa frase.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.2-06** `Must·MVP·Decidido` No mostrar prueba social: ni opiniones, ni contadores, ni «ya somos X».
  - Criterio: Dada la portada, cuando se revisa, entonces no hay cifras de usuarios ni testimonios.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-15.3 · Cómo funciona

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02 · Historias: — · Fuentes: S06, S07, S09

**3. Actores y roles**

Visitante

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 4 sí
- Market Wagon: 4 sí
- Open Food Network: 4 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-15.3-01** `Must·MVP·Decidido` Explicar el proceso del cliente en 5 pasos numerados con colores en ciclo tomate, azafrán, oliva, melocotón: pides, la IA propone, revisas, pagas una vez, recibes todo junto.
  - Criterio: Dada la sección, cuando se ve, entonces hay 5 pasos en ese orden.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.3-02** `Must·MVP·Pendiente` Explicar el proceso logístico en 4 pasos: recogida en origen, hub, empaquetado y entrega única.
  - Criterio: Dada la sección, cuando se ve, entonces hay 4 pasos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.3-03** `Should·MVP·Decidido` Mostrar un ejemplo concreto: «Tengo 25 € y 4 días» con la cesta resultante (datos de ejemplo marcados).
  - Criterio: Dado el ejemplo, cuando se ve, entonces lleva el badge «Datos de ejemplo».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-15.3-04** `Should·MVP·Decidido` Incluir un hueco para un vídeo corto; si no hay vídeo, no mostrar nada en su lugar (ni capturas).
  - Criterio: Dado AI_VIDEO vacío, cuando se carga /comprar, entonces no aparece el bloque.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-15.4 · Quiénes somos y comparativa

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02, N-07 · Historias: — · Fuentes: S04, S06

**3. Actores y roles**

Visitante

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 4 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 4 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-15.4-01** `Must·MVP·Pendiente` Explicar el problema que resolvemos, la propuesta en una frase y los valores: local, ahorro y confianza.
  - Criterio: Dada la sección, cuando se lee, entonces aparecen los tres valores.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-15.4-02** `Should·MVP·Pendiente` Mostrar las zonas iniciales (Málaga, Sevilla y Granada) en un mapa sencillo.
  - Criterio: Dado el mapa, cuando se ve, entonces marca las tres ciudades.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-15.4-03** `Should·MVP·Decidido` Comparar FOOD4ALL con supermercado online y delivery en una tabla de 5 criterios, sin afirmar que es más barato.
  - Criterio: Dada la tabla, cuando se lee, entonces no contiene «más barato».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-15.4-04** `Should·MVP·Decidido` Explicar el bloque «No somos»: no somos delivery inmediato ni supermercado.
  - Criterio: Dado el bloque, cuando se ve, entonces usa el fondo --tint-tomato #F6DCD3.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-15.5 · Preguntas frecuentes

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06 · Historias: — · Fuentes: S01, S06, S09

**3. Actores y roles**

Visitante

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 3 · Poco extendido 1

- Mercadona online: 0 sí
- Glovo: 4 sí
- Too Good To Go: 0 sí
- Wetaca: 3 sí
- Market Wagon: 0 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-15.5-01** `Must·V2·Pendiente` Publicar /preguntas-frecuentes con al menos 12 preguntas agrupadas en Comprar, Entrega, Pagos, Vender y Cuenta.
  - Criterio: Dada la página, cuando se cuenta, entonces hay 12 o más preguntas en 5 grupos.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-15.5-02** `Must·V2·Pendiente` Mostrar cada respuesta en un desplegable accesible con teclado.
  - Criterio: Dada una pregunta, cuando pulsa Intro, entonces se despliega la respuesta.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-15.5-03** `Could·V2·Pendiente` Incluir un buscador dentro de las preguntas frecuentes.
  - Criterio: Dado «envío», cuando busca, entonces se filtran las preguntas que lo contienen.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-15.5-04** `Should·V2·Pendiente` Incluir al final «¿No encuentras la respuesta? Escríbenos» con enlace al contacto.
  - Criterio: Dado el final de la página, cuando pulsa el enlace, entonces va a /contacto.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-15.6 · Comunidad y redes

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-03, N-07 · Historias: — · Fuentes: F-04, S02

**3. Actores y roles**

Visitante

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 4 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 4 parcial
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-15.6-01** `Should·MVP·Decidido` Publicar /comunidad explicando por qué importa la comunidad, qué se publicará y cómo participar.
  - Criterio: Dada /comunidad, cuando se carga, entonces tiene esos tres apartados.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-15.6-02** `Should·MVP·Decidido` Mostrar Instagram, TikTok, YouTube y Pinterest; sin URL, como «Próximamente» y sin enlace.
  - Criterio: Dada una red sin URL, cuando se ve, entonces muestra «Próximamente».
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-15.6-03** `Must·MVP·Decidido` Marcar las publicaciones de ejemplo como «Datos de ejemplo».
  - Criterio: Dada una publicación de ejemplo, cuando se ve, entonces lleva el badge.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-15.6-04** `Could·V3·Pendiente` Ofrecer un programa «Invita a tu compi de piso» con ventaja para ambos en su primer pedido.
  - Criterio: Dado un enlace de invitación, cuando el invitado compra, entonces ambos reciben la ventaja.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca P · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-15.7 · Pie de página

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-07 · Historias: — · Fuentes: 

**3. Actores y roles**

Visitante

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin referente 5

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-15.7-01** `Must·MVP·Pendiente` Mostrar en el pie: enlaces legales (aviso legal, privacidad, cookies, condiciones), créditos de imágenes y redes.
  - Criterio: Dado el pie, cuando se revisa, entonces están todos los enlaces.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-15.7-02** `Must·MVP·Decidido` Mostrar el aviso «Proyecto conceptual · datos de ejemplo» en el pie de todas las páginas.
  - Criterio: Dada cualquier página, cuando se ve el pie, entonces aparece el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-15.7-03** `Must·MVP·Decidido` Mostrar el aviso de fotos «Imágenes ilustrativas…» con enlace a /creditos donde haya fotos.
  - Criterio: Dada una página con fotos, cuando se ve, entonces aparece el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-15.7-04** `Must·MVP·Decidido` Mostrar en /creditos el autor y la licencia de cada foto de Wikimedia Commons.
  - Criterio: Dada una foto, cuando se busca en /creditos, entonces aparece su autor y licencia.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-15.7-05** `Could·V3·Pendiente` Ofrecer la web en español; preparar los textos para añadir inglés más adelante.
  - Criterio: Dado el código, cuando se revisa, entonces los textos están en un fichero de idioma.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-03 · Gestión del catálogo y ficha de producto

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 9_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 2 · Oferta (puesto 5 de 19 en la cascada) · **Actores:** Vendedor · **Necesidades:** N-04, N-05 · **Historias:** US-10 · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02, RF-13, RF-15 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-03.1 · Alta de producto (6)
- RF-03.2 · Información obligatoria (7)
- RF-03.3 · Alérgenos (3)
- RF-03.4 · Fotos (4)
- RF-03.5 · Precio (4)
- RF-03.6 · Stock y disponibilidad (3)
- RF-03.7 · Edición, retirada y packs (4)
- RF-03.8 · Promociones del vendedor (2)
- RF-03.9 · Revisión antes de publicar (3)

**Competencia**

36 requisitos atómicos · Poco extendido 28 · Sin referente 4 · Paridad 2 · Diferencial 1 · Mejora 1. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-03.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-03.1 · Alta de producto

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-04 · Historias: US-10 · Fuentes: F-04, S02, S04, S08, S09

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Poco extendido 5 · Paridad 1

- Mercadona online: 1 sí
- Glovo: 1 sí
- Too Good To Go: 0 sí, 1 no
- Wetaca: 0 sí
- Market Wagon: 5 sí
- Open Food Network: 1 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RF-03.1-01** `Must·MVP·Pendiente` Ofrecer en «Mis productos» el botón «Añadir producto» que abre la ficha vacía.
  - Criterio: Dado un vendedor verificado, cuando pulsa el botón, entonces ve la ficha vacía.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.1-02** `Must·MVP·Pendiente` Pedir el nombre del producto (3 a 80 caracteres) con las calificaciones detrás («Tomate rosa, ecológico»).
  - Criterio: Dado un nombre de 2 caracteres, cuando guarda, entonces ve el error.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.1-03** `Must·MVP·Pendiente` Pedir una descripción que no repita el nombre (20 a 600 caracteres).
  - Criterio: Dada una descripción igual al nombre, cuando guarda, entonces ve «Describe el producto, no repitas el nombre».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.1-04** `Must·MVP·Pendiente` Pedir la categoría: fruta, verdura, carne, pescado, lácteos y huevos, pan y bollería, despensa, comida preparada.
  - Criterio: Dada la categoría vacía, cuando guarda, entonces ve «Elige una categoría».
  - Competencia: Mercadona S · Glovo S · Too N · Wetaca ? · Market ? · Open S → Paridad
- [ ] **RF-03.1-05** `Must·MVP·Pendiente` Pedir el formato de venta: por unidad, por peso (kg) o por pack, con su cantidad.
  - Criterio: Dado «por peso» sin cantidad, cuando guarda, entonces ve el error.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.1-06** `Must·MVP·Pendiente` Guardar el producto como borrador hasta que la ficha esté completa.
  - Criterio: Dada una ficha incompleta, cuando guarda, entonces queda en estado Borrador y no se publica.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-03.2 · Información obligatoria

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-04, N-07, N-08 · Historias: US-10 · Fuentes: F-04, S04, S06, S08, S09

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Poco extendido 6 · Diferencial 1

- Mercadona online: 0 sí, 4 parcial
- Glovo: 0 sí
- Too Good To Go: 0 sí, 4 no
- Wetaca: 0 sí, 4 parcial
- Market Wagon: 6 sí, 1 parcial
- Open Food Network: 5 sí
- Diferenciales y mejoras: RF-03.2-03 (Diferencial)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (7)**

- [ ] **RF-03.2-01** `Must·MVP·Decidido` Exigir el origen: municipio y provincia de producción.
  - Criterio: Dado el origen vacío, cuando publica, entonces no se publica.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-03.2-02** `Must·MVP·Decidido` Exigir la lista de ingredientes en productos elaborados.
  - Criterio: Dado un producto de despensa sin ingredientes, cuando publica, entonces no se publica.
  - Competencia: Mercadona P · Glovo ? · Too N · Wetaca ? · Market P · Open S → Poco extendido
- [ ] **RF-03.2-03** `Must·MVP·Pendiente` Exigir el tipo de fecha: caducidad o consumo preferente, y los días de vida útil desde la recogida.
  - Criterio: Dado un fresco sin vida útil, cuando publica, entonces no se publica.
  - Competencia: Mercadona P · Glovo ? · Too N · Wetaca P · Market S · Open S → Diferencial
- [ ] **RF-03.2-04** `Must·MVP·Pendiente` Exigir la conservación: ambiente, refrigerado (0–4 °C) o congelado (−18 °C).
  - Criterio: Dado un yogur sin conservación, cuando publica, entonces no se publica.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca P · Market S · Open ? → Poco extendido
- [ ] **RF-03.2-05** `Must·MVP·Pendiente` Exigir el peso o volumen neto en productos envasados.
  - Criterio: Dado un envasado sin peso, cuando publica, entonces no se publica.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.2-06** `Should·MVP·Pendiente` Permitir indicar etiquetas opcionales: temporada, ecológico certificado, aprovechamiento.
  - Criterio: Dado «ecológico» marcado, cuando se publica, entonces la tarjeta muestra la etiqueta.
  - Competencia: Mercadona P · Glovo ? · Too N · Wetaca P · Market S · Open S → Poco extendido
- [ ] **RF-03.2-07** `Must·MVP·Pendiente` Exigir el número de certificado si se marca «ecológico certificado».
  - Criterio: Dado «ecológico» sin certificado, cuando publica, entonces ve el error.
  - Competencia: Mercadona P · Glovo ? · Too N · Wetaca P · Market S · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-03.3 · Alérgenos

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-04 · Historias: US-10 · Fuentes: S09

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-03.3-01** `Must·MVP·Decidido` Exigir que el vendedor marque, para los 14 alérgenos, «contiene», «puede contener trazas» o «no contiene».
  - Criterio: Dado un alérgeno sin marcar, cuando publica, entonces no se publica.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-03.3-02** `Must·MVP·Pendiente` Mostrar los alérgenos con icono y texto; nunca solo con icono.
  - Criterio: Dado un producto con gluten, cuando se ve la ficha, entonces aparece el icono con la palabra «Gluten».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-03.3-03** `Must·MVP·Pendiente` Pedir al vendedor que confirme los alérgenos cada vez que cambie los ingredientes.
  - Criterio: Dado un cambio de ingredientes, cuando guarda, entonces debe confirmar de nuevo los alérgenos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-03.4 · Fotos

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-04 · Historias: US-10 · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-03.4-01** `Must·MVP·Pendiente` Exigir al menos 1 foto y permitir hasta 5, en JPG, PNG o WebP de hasta 5 MB.
  - Criterio: Dado un producto sin foto, cuando publica, entonces no se publica.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.4-02** `Could·V2·Pendiente` Recomendar foto horizontal con el producto en primer plano y avisar si la foto es vertical.
  - Criterio: Dada una foto vertical, cuando la sube, entonces ve el consejo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.4-03** `Should·MVP·Pendiente` Generar versiones de 400 y 1200 px de ancho para la tarjeta y la ficha.
  - Criterio: Dada una foto de 4000 px, cuando se publica, entonces la tarjeta carga la de 400 px.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.4-04** `Should·MVP·Pendiente` Exigir texto alternativo para cada foto, propuesto a partir del nombre.
  - Criterio: Dada una foto, cuando se publica, entonces su alt no está vacío.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-03.5 · Precio

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-03, N-07 · Historias: US-10 · Fuentes: S04, S08, S09

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Poco extendido 2 · Mejora 1 · Paridad 1

- Mercadona online: 3 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 2 sí, 1 no
- Open Food Network: 2 sí
- Diferenciales y mejoras: RF-03.5-03 (Mejora)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-03.5-01** `Must·V2·Pendiente` Pedir el precio con IVA incluido y con dos decimales.
  - Criterio: Dado «2,5», cuando guarda, entonces se muestra «2,50 €».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.5-02** `Must·V2·Pendiente` Calcular y mostrar el precio por kilo o litro a partir del precio y el peso.
  - Criterio: Dados 500 g a 2,00 €, cuando se muestra, entonces aparece «4,00 €/kg».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-03.5-03** `Should·V2·Pendiente` En productos por peso, mostrar el precio aproximado y cobrar el peso real con un margen máximo de ±10 %.
  - Criterio: Dado 1 kg estimado, cuando pesa 1,15 kg, entonces se cobra como máximo 1,10 kg.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market N · Open ? → Mejora
- [ ] **RF-03.5-04** `Must·MVP·Decidido` Mientras no haya precios reales, mostrar «Precio todavía no disponible» en lugar del importe.
  - Criterio: Dado el modo conceptual, cuando se ve una tarjeta, entonces muestra ese texto.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-03.6 · Stock y disponibilidad

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03 · Historias: US-10 · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-03.6-01** `Must·MVP·Pendiente` Permitir al vendedor fijar las unidades disponibles por día de recogida.
  - Criterio: Dadas 10 unidades, cuando se venden 10, entonces el producto sale «Agotado» ese día.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.6-02** `Must·MVP·Pendiente` Permitir marcar un producto como «No disponible esta semana» sin borrarlo.
  - Criterio: Dado un producto pausado, cuando un cliente busca, entonces no aparece.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.6-03** `Should·V2·Pendiente` Avisar al vendedor por correo cuando un producto se agote.
  - Criterio: Dado el último producto vendido, cuando ocurre, entonces le llega el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-03.7 · Edición, retirada y packs

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-03 · Historias: US-10 · Fuentes: 

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Sin referente 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-03.7-01** `Must·MVP·Pendiente` Permitir editar cualquier campo; los cambios de precio no afectan a pedidos ya pagados.
  - Criterio: Dado un cambio de precio, cuando hay un pedido pagado, entonces ese pedido conserva el precio anterior.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-03.7-02** `Must·MVP·Pendiente` Permitir retirar un producto; queda en «Retirados» y puede reactivarse.
  - Criterio: Dado un producto retirado, cuando lo reactiva, entonces vuelve a publicarse.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-03.7-03** `Could·V2·Pendiente` Permitir crear packs con varios productos del mismo vendedor y un precio conjunto.
  - Criterio: Dado un pack de 3 productos, cuando se compra, entonces descuenta stock de los 3.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-03.7-04** `Could·V3·Pendiente` Permitir importar productos desde una hoja CSV con una plantilla descargable.
  - Criterio: Dado un CSV con una fila sin origen, cuando importa, entonces esa fila queda como borrador con el error indicado.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-03.8 · Promociones del vendedor

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Could · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03 · Historias: US-10 · Fuentes: F-04, S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Poco extendido 2

- Mercadona online: 0 sí
- Glovo: 0 sí, 2 parcial
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 2 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-03.8-01** `Could·V2·Pendiente` Permitir descuentos del 10 % o más durante un máximo de 14 días seguidos.
  - Criterio: Dado un 5 %, cuando guarda, entonces ve «El descuento mínimo es del 10 %».
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.8-02** `Could·V2·Pendiente` Mostrar el precio anterior tachado junto al nuevo durante la promoción.
  - Criterio: Dado un descuento activo, cuando se ve la tarjeta, entonces aparecen ambos precios.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-03.9 · Revisión antes de publicar

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-04 · Historias: US-10 · Fuentes: S07, S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-03.9-01** `Must·MVP·Decidido` Publicar un producto solo si todos los campos obligatorios están completos.
  - Criterio: Dada una ficha completa, cuando pulsa «Publicar», entonces el estado pasa a Publicado.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.9-02** `Should·MVP·Pendiente` Mostrar al vendedor una vista previa de la tarjeta y la ficha antes de publicar.
  - Criterio: Dada una ficha completa, cuando pulsa «Vista previa», entonces ve la tarjeta tal como la verá el cliente.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-03.9-03** `Could·V3·Pendiente` Permitir vender producto no local solo cuando el admin lo autorice por falta de oferta local, y marcarlo «No local».
  - Criterio: Dado un producto no local autorizado, cuando se ve, entonces lleva la etiqueta «No local».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-04 · Búsqueda y consulta del catálogo

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 9_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 2 · Oferta (puesto 6 de 19 en la cascada) · **Actores:** Cliente · **Necesidades:** N-02, N-04 · **Historias:** US-03 · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-04.1 · Página de productos (4)
- RF-04.2 · Buscador (4)
- RF-04.3 · Filtros y orden (4)
- RF-04.4 · Tarjeta de producto (4)
- RF-04.5 · Ficha de producto (5)
- RF-04.6 · Favoritos y habituales (2)
- RF-04.7 · Zona y patrocinados (2)
- RF-04.8 · Catálogo en móvil y estados (5)
- RF-04.9 · Etiquetas y avisos en la tarjeta (4)

**Competencia**

34 requisitos atómicos · Poco extendido 25 · Paridad 6 · Diferencial 3. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-04.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-04.1 · Página de productos

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-03 · Fuentes: F-04, S02, S04, S06, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Paridad 3 · Poco extendido 1

- Mercadona online: 4 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí, 3 no
- Wetaca: 0 sí, 3 parcial
- Market Wagon: 0 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-04.1-01** `Must·MVP·Pendiente` Mostrar el catálogo en /comprar#marketplace filtrado por la zona elegida en la cabecera.
  - Criterio: Dada la zona Sevilla, cuando abre el catálogo, entonces solo ve vendedores de Sevilla.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-04.1-02** `Must·MVP·Pendiente` Mostrar las categorías como fila de botones con su punto de color de la paleta de mercado.
  - Criterio: Dado el catálogo, cuando pulsa «Fruta», entonces solo ve fruta.
  - Competencia: Mercadona S · Glovo S · Too N · Wetaca ? · Market ? · Open S → Paridad
- [ ] **RF-04.1-03** `Must·MVP·Pendiente` Mostrar los productos en rejilla de 4 columnas en ordenador, 2 en tableta y 1 en móvil.
  - Criterio: Dada una pantalla de 1280 px, cuando carga, entonces hay 4 columnas.
  - Competencia: Mercadona S · Glovo S · Too N · Wetaca P · Market ? · Open S → Paridad
- [ ] **RF-04.1-04** `Should·MVP·Pendiente` Cargar 24 productos y mostrar «Ver más» para los siguientes 24.
  - Criterio: Dados 60 productos, cuando pulsa «Ver más» dos veces, entonces ve los 60.
  - Competencia: Mercadona S · Glovo S · Too N · Wetaca P · Market ? · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-04.2 · Buscador

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-03 · Fuentes: S04, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Poco extendido 4

- Mercadona online: 4 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 4 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-04.2-01** `Must·MVP·Pendiente` Mostrar el buscador en la cabecera con el texto de ayuda «Busca productos o vendedores».
  - Criterio: Dada la cabecera, cuando se carga, entonces se ve el buscador.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.2-02** `Must·MVP·Pendiente` Buscar por nombre de producto, de vendedor y de categoría, sin distinguir mayúsculas ni tildes.
  - Criterio: Dado «platano», cuando busca, entonces encuentra «Plátano de Canarias».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.2-03** `Should·MVP·Pendiente` Sugerir hasta 6 resultados mientras se escribe a partir de 2 caracteres.
  - Criterio: Dado «to», cuando escribe, entonces ve hasta 6 sugerencias.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.2-04** `Should·MVP·Pendiente` Si no hay resultados, mostrar «No encontramos “<texto>” en tu zona» y 4 productos de temporada.
  - Criterio: Dado «caviar», cuando busca, entonces ve el mensaje y 4 sugerencias.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-04.3 · Filtros y orden

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02, N-04 · Historias: US-03 · Fuentes: S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Diferencial 2 · Poco extendido 2

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 4 sí
- Diferenciales y mejoras: RF-04.3-01 (Diferencial), RF-04.3-02 (Diferencial)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-04.3-01** `Must·MVP·Pendiente` Filtrar por vendedor, categoría, «sin» un alérgeno, temporada, ecológico y conservación.
  - Criterio: Dado «sin gluten», cuando filtra, entonces no aparece ningún producto con gluten ni trazas.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Diferencial
- [ ] **RF-04.3-02** `Should·MVP·Pendiente` Aplicar por defecto el filtro de las alergias guardadas del cliente, con aviso «Ocultamos productos con tus alérgenos» y opción de desactivarlo.
  - Criterio: Dado un cliente alérgico al huevo, cuando abre el catálogo, entonces no ve productos con huevo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Diferencial
- [ ] **RF-04.3-03** `Should·V2·Pendiente` Ordenar por relevancia, precio (de menor a mayor y al revés) y novedad.
  - Criterio: Dado «precio de menor a mayor», cuando ordena, entonces el primero es el más barato.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.3-04** `Should·MVP·Pendiente` Mostrar los filtros activos como etiquetas con una «×» para quitarlos y un enlace «Quitar todos».
  - Criterio: Dados 2 filtros, cuando pulsa «Quitar todos», entonces se ve el catálogo completo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-04.4 · Tarjeta de producto

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-04 · Historias: US-03 · Fuentes: S04, S08, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Poco extendido 3 · Paridad 1

- Mercadona online: 2 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-04.4-01** `Must·MVP·Decidido` Mostrar en la tarjeta: foto, categoría con punto de color, nombre, vendedor y ciudad, origen, alérgenos y precio.
  - Criterio: Dada una tarjeta, cuando se ve, entonces contiene esos siete datos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-04.4-02** `Should·MVP·Pendiente` Dar a la tarjeta fondo blanco, borde 1 px #DDD0B0 y radio 10 px; al pasar el ratón sube 4 px en 200 ms.
  - Criterio: Dado el ratón encima, cuando pasa, entonces la tarjeta se eleva.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Paridad
- [ ] **RF-04.4-03** `Must·MVP·Pendiente` Incluir en la tarjeta el botón «Añadir» y un selector de cantidad que aparece tras añadir.
  - Criterio: Dado «Añadir» pulsado, cuando se añade, entonces el botón se convierte en «− 1 +».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.4-04** `Must·MVP·Pendiente` Mostrar «Agotado» en gris y desactivar «Añadir» si no hay stock.
  - Criterio: Dado stock 0, cuando se ve la tarjeta, entonces «Añadir» está desactivado.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-04.5 · Ficha de producto

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-03, N-04 · Historias: US-03 · Fuentes: F-04, S04, S06, S08, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Poco extendido 3 · Paridad 2

- Mercadona online: 2 sí, 1 parcial
- Glovo: 0 sí
- Too Good To Go: 0 sí, 2 no
- Wetaca: 0 sí, 2 parcial, 1 no
- Market Wagon: 4 sí
- Open Food Network: 5 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-04.5-01** `Must·MVP·Pendiente` Mostrar en /producto/<id> la galería de fotos, el nombre, el vendedor con enlace a su perfil y el precio por unidad y por kilo.
  - Criterio: Dada una ficha, cuando pulsa el vendedor, entonces llega a su perfil.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca N · Market S · Open S → Paridad
- [ ] **RF-04.5-02** `Must·MVP·Decidido` Mostrar ingredientes, alérgenos (contiene y trazas), conservación, tipo de fecha y vida útil.
  - Criterio: Dado un queso, cuando se abre la ficha, entonces se ven los cinco datos.
  - Competencia: Mercadona P · Glovo ? · Too N · Wetaca P · Market S · Open S → Poco extendido
- [ ] **RF-04.5-03** `Should·MVP·Pendiente` Mostrar el origen con municipio y distancia aproximada al centro de la zona.
  - Criterio: Dado un producto de Alhaurín, cuando se ve en Málaga, entonces muestra «Alhaurín el Grande · 20 km».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-04.5-04** `Could·V2·Pendiente` Mostrar hasta 4 productos relacionados del mismo vendedor.
  - Criterio: Dado un vendedor con 6 productos, cuando se abre uno, entonces se ven 4 relacionados.
  - Competencia: Mercadona S · Glovo ? · Too N · Wetaca P · Market S · Open S → Paridad
- [ ] **RF-04.5-05** `Could·V3·Pendiente` Mostrar el desglose orientativo del precio: parte del vendedor, logística y FOOD4ALL.
  - Criterio: Dado un precio, cuando se pulsa «¿A dónde va tu dinero?», entonces se ve el desglose.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-04.6 · Favoritos y habituales

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01 · Historias: US-03 · Fuentes: S04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Poco extendido 2

- Mercadona online: 2 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-04.6-01** `Should·V2·Pendiente` Permitir marcar productos como favoritos con un corazón y verlos en «Mis favoritos».
  - Criterio: Dado un favorito, cuando abre la lista, entonces aparece.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-04.6-02** `Could·V2·Pendiente` Mostrar «Tus habituales» con los productos comprados 2 o más veces.
  - Criterio: Dado un producto comprado 3 veces, cuando abre el catálogo, entonces aparece en «Tus habituales».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-04.7 · Zona y patrocinados

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-03 · Fuentes: F-04, S04, S06

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Poco extendido 2

- Mercadona online: 1 sí, 1 no
- Glovo: 1 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 1 parcial
- Market Wagon: 0 sí, 1 no
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-04.7-01** `Must·MVP·Decidido` Pedir la zona en la primera visita con un selector en la cabecera (Málaga, Sevilla, Granada) y recordarla.
  - Criterio: Dada una zona elegida, cuando vuelve otro día, entonces sigue elegida.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-04.7-02** `Must·V2·Decidido` Marcar los productos patrocinados con la etiqueta «Patrocinado» y no mezclarlos nunca con las propuestas de la IA.
  - Criterio: Dado un patrocinado, cuando se ve, entonces lleva la etiqueta; y no aparece en la cesta de la IA.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market N · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-04.8 · Catálogo en móvil y estados

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02 · Historias: US-03 · Fuentes: S04, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Poco extendido 5

- Mercadona online: 5 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 5 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-04.8-01** `Should·V2·Pendiente` En móvil, abrir los filtros en un panel desde abajo con el botón «Filtrar (n)».
  - Criterio: Dados 2 filtros activos, cuando se ve el botón, entonces dice «Filtrar (2)».
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.8-02** `Should·MVP·Pendiente` Mantener los filtros y la posición al volver de una ficha al catálogo.
  - Criterio: Dado un filtro y un scroll, cuando vuelve atrás, entonces conserva ambos.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.8-03** `Could·MVP·Pendiente` Mostrar marcadores grises de carga con la forma de la tarjeta mientras llegan los productos.
  - Criterio: Dada una carga lenta, cuando espera, entonces ve las tarjetas grises.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.8-04** `Must·MVP·Pendiente` Si falla la carga, mostrar «No hemos podido cargar los productos» con el botón «Reintentar».
  - Criterio: Dado un error de red, cuando ocurre, entonces ve el mensaje y el botón.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-04.8-05** `Should·V2·Pendiente` Reflejar búsqueda y filtros en la URL para poder compartirlos.
  - Criterio: Dada la URL con ?cat=fruta, cuando se abre, entonces sale filtrado por fruta.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-04.9 · Etiquetas y avisos en la tarjeta

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-03, N-04, N-08 · Historias: US-03 · Fuentes: F-04, S08, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia

**15. Competencia**

Poco extendido 3 · Diferencial 1

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí, 2 parcial
- Wetaca: 0 sí
- Market Wagon: 2 sí
- Open Food Network: 2 sí
- Diferenciales y mejoras: RF-04.9-03 (Diferencial)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-04.9-01** `Should·MVP·Pendiente` Mostrar la etiqueta «Temporada» en oliva --olive y «Ecológico» con su sello cuando correspondan.
  - Criterio: Dado un producto de temporada, cuando se ve, entonces lleva la etiqueta en #7D8A2E.
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-04.9-02** `Could·V2·Pendiente` Mostrar «Aprovechamiento» en los productos con defecto estético y precio reducido.
  - Criterio: Dado un producto de aprovechamiento, cuando se ve, entonces lleva la etiqueta.
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-04.9-03** `Must·MVP·Pendiente` Mostrar el aviso «Contiene tus alérgenos» en rojo si el cliente desactivó el filtro y el producto tiene uno de sus alérgenos.
  - Criterio: Dado un alérgico al huevo sin filtro, cuando ve un producto con huevo, entonces aparece el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Diferencial
- [ ] **RF-04.9-04** `Could·V2·Pendiente` Mostrar «Quedan 3» cuando queden 3 unidades o menos.
  - Criterio: Dadas 2 unidades, cuando se ve, entonces muestra «Quedan 2».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-12 · Asistente de IA para generar la cesta

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 7_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 2 · Oferta (puesto 7 de 19 en la cascada) · **Actores:** Cliente · **Necesidades:** N-01, N-07, N-08 · **Historias:** US-08 · **Prioridad:** Should

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-12.1 · Entrada (4)
- RF-12.2 · Generación de la cesta (5)
- RF-12.3 · Explicación y ajuste (4)
- RF-12.4 · Transparencia (4)
- RF-12.5 · Plan de comidas y después de comprar (4)
- RF-12.6 · Diseño del asistente (5)
- RF-12.7 · Reglas de la propuesta (4)

**Competencia**

30 requisitos atómicos · Poco extendido 26 · Diferencial 2 · Paridad 2. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-12.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-12.1 · Entrada

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01 · Historias: US-08 · Fuentes: S06

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia · RNF-10 Mantenibilidad

**15. Competencia**

Poco extendido 3 · Diferencial 1

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 4 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-12.1-02 (Diferencial)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-12.1-01** `Should·MVP·Pendiente` Ofrecer el asistente en /comprar#asistente y desde la portada con «Pide una cesta a la IA».
  - Criterio: Dada la portada, cuando pulsa el acceso, entonces llega al asistente.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.1-02** `Should·MVP·Pendiente` Pedir presupuesto (5 a 200 €), días (1 a 7), número de personas (1 a 6) y tiempo para cocinar (poco, normal, mucho).
  - Criterio: Dado un presupuesto de 3 €, cuando envía, entonces ve «El presupuesto mínimo es de 5 €».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Diferencial
- [ ] **RF-12.1-03** `Should·MVP·Pendiente` Permitir escribir la petición en lenguaje natural («Tengo 25 € y 4 días»).
  - Criterio: Dado ese texto, cuando lo envía, entonces el asistente rellena presupuesto 25 € y 4 días.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.1-04** `Should·MVP·Pendiente` Rellenar por defecto con las preferencias guardadas del cliente.
  - Criterio: Dado un presupuesto guardado de 30 €, cuando abre el asistente, entonces aparece 30 €.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-12.2 · Generación de la cesta

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02, N-04 · Historias: US-08 · Fuentes: F-04, S07, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia · RNF-10 Mantenibilidad

**15. Competencia**

Poco extendido 5

- Mercadona online: 0 sí, 4 no
- Glovo: 0 sí, 4 no
- Too Good To Go: 0 sí, 4 no
- Wetaca: 0 sí, 4 no
- Market Wagon: 4 sí
- Open Food Network: 5 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-12.2-01** `Should·MVP·Pendiente` Proponer una cesta solo con productos disponibles de la zona y del día de entrega elegido.
  - Criterio: Dado un producto agotado, cuando se genera la cesta, entonces no aparece.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-12.2-02** `Must·MVP·Pendiente` No superar el presupuesto indicado; si no es posible, decirlo: «Con 8 € para 4 días no llegamos. Te proponemos 2 días.»
  - Criterio: Dados 8 € y 4 días, cuando se genera, entonces ve ese mensaje.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-12.2-03** `Must·MVP·Decidido` Excluir siempre los productos con alérgenos guardados del cliente, también por trazas.
  - Criterio: Dado un cliente alérgico al gluten, cuando se genera la cesta, entonces ningún producto contiene gluten ni trazas.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-12.2-04** `Should·MVP·Pendiente` Mostrar la cesta agrupada por vendedor, como el carrito.
  - Criterio: Dada una cesta de 3 vendedores, cuando se muestra, entonces hay 3 grupos.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-12.2-05** `Should·MVP·Pendiente` Responder en 10 segundos como máximo; si tarda más, mostrar «Estamos preparando tu cesta…» con una animación suave.
  - Criterio: Dada una respuesta de 12 s, cuando pasa de 10 s, entonces ve el mensaje.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-12.3 · Explicación y ajuste

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-07 · Historias: US-08 · Fuentes: F-04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia · RNF-10 Mantenibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí, 4 no
- Glovo: 0 sí, 4 parcial
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-12.3-01** `Should·MVP·Pendiente` Explicar en cada producto por qué se propone («Para 3 cenas · aguanta 5 días en nevera»).
  - Criterio: Dada una cesta, cuando se ve un producto, entonces tiene su motivo.
  - Competencia: Mercadona N · Glovo P · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-12.3-02** `Should·MVP·Pendiente` Permitir quitar, cambiar la cantidad o pedir «Otra opción» en cada producto.
  - Criterio: Dado «Otra opción», cuando la pulsa, entonces se cambia por un producto de la misma categoría.
  - Competencia: Mercadona N · Glovo P · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-12.3-03** `Should·MVP·Pendiente` Permitir pasar toda la cesta al carrito con «Añadir todo al carrito».
  - Criterio: Dada una cesta de 9 productos, cuando pulsa el botón, entonces el carrito tiene los 9.
  - Competencia: Mercadona N · Glovo P · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-12.3-04** `Must·MVP·Decidido` No añadir nada al carrito sin que el cliente lo confirme.
  - Criterio: Dada una cesta generada, cuando no pulsa nada, entonces el carrito no cambia.
  - Competencia: Mercadona N · Glovo P · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-12.4 · Transparencia

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-07 · Historias: US-08 · Fuentes: F-04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia · RNF-10 Mantenibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí, 4 no
- Glovo: 4 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí, 4 no
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-12.4-01** `Must·MVP·Decidido` Indicar de forma visible «Propuesta generada por IA. Revísala antes de comprar.»
  - Criterio: Dada una cesta, cuando se muestra, entonces aparece ese aviso.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market N · Open ? → Poco extendido
- [ ] **RF-12.4-02** `Must·MVP·Decidido` No incluir productos patrocinados en las propuestas de la IA.
  - Criterio: Dado un producto patrocinado, cuando se genera la cesta, entonces no aparece por ser patrocinado.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market N · Open ? → Poco extendido
- [ ] **RF-12.4-03** `Must·MVP·Decidido` No hacer afirmaciones médicas ni nutricionales (por ejemplo «adelgaza» o «cura»).
  - Criterio: Dada una explicación, cuando se revisa, entonces no contiene afirmaciones de salud.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market N · Open ? → Poco extendido
- [ ] **RF-12.4-04** `Must·MVP·Decidido` No prometer ahorro frente al supermercado mientras no esté demostrado.
  - Criterio: Dada una explicación, cuando se revisa, entonces no dice «más barato que el súper».
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market N · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-12.5 · Plan de comidas y después de comprar

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-08 · Historias: US-08 · Fuentes: F-04, S06

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia · RNF-10 Mantenibilidad

**15. Competencia**

Poco extendido 3 · Diferencial 1

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí, 2 parcial
- Wetaca: 3 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-12.5-03 (Diferencial)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-12.5-01** `Could·V2·Pendiente` Proponer un plan de comidas por días con los productos de la cesta.
  - Criterio: Dada una cesta para 4 días, cuando pulsa «Ver plan», entonces ve 4 días con sus comidas.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.5-02** `Could·V2·Pendiente` Proponer recetas sencillas con lo comprado, de 30 minutos o menos si el tiempo es «poco».
  - Criterio: Dado «poco tiempo», cuando ve las recetas, entonces todas son de 30 min o menos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.5-03** `Should·V2·Pendiente` Enviar tras la entrega un aviso «Consume primero» con los productos de vida útil más corta.
  - Criterio: Dado un pedido con pescado, cuando se entrega, entonces el aviso lo pone primero.
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca ? · Market ? · Open ? → Diferencial
- [ ] **RF-12.5-04** `Could·V2·Pendiente` Sugerir la siguiente compra cuando se acerque el fin de los días planificados.
  - Criterio: Dado un plan de 4 días, cuando llega el día 3, entonces recibe «¿Preparamos tu próxima cesta?»
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca S · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-12.6 · Diseño del asistente

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-07 · Historias: US-08 · Fuentes: S06

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia · RNF-10 Mantenibilidad

**15. Competencia**

Poco extendido 5

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 5 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-12.6-01** `Should·MVP·Pendiente` Mostrar el asistente con opciones guiadas (botones de presupuesto 15, 25, 40 € y días 2, 4, 7) y un campo de texto libre.
  - Criterio: Dado el asistente, cuando se abre, entonces se ven los botones y el campo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.6-02** `Should·MVP·Pendiente` Mostrar la conversación como mensajes: los del cliente a la derecha y los de la IA a la izquierda con la etiqueta «IA».
  - Criterio: Dada una respuesta, cuando aparece, entonces está a la izquierda con la etiqueta.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.6-03** `Should·MVP·Pendiente` Mostrar el total de la cesta propuesta y lo que queda del presupuesto.
  - Criterio: Dada una cesta de 23,40 € con 25 €, cuando se ve, entonces muestra «Te sobran 1,60 €».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.6-04** `Should·MVP·Pendiente` Permitir empezar de nuevo con «Nueva cesta».
  - Criterio: Dado «Nueva cesta», cuando lo pulsa, entonces se vacía la conversación.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.6-05** `Must·MVP·Pendiente` Si la petición no es de comida, responder «Solo puedo ayudarte con tu compra de comida».
  - Criterio: Dado «hazme los deberes», cuando lo envía, entonces recibe esa respuesta.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-12.7 · Reglas de la propuesta

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-03, N-08 · Historias: US-08 · Fuentes: F-04, S06, S07, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-02 Privacidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-08 Transparencia · RNF-10 Mantenibilidad

**15. Competencia**

Poco extendido 2 · Paridad 2

- Mercadona online: 0 sí, 3 no
- Glovo: 0 sí, 3 no
- Too Good To Go: 0 sí, 3 no
- Wetaca: 3 sí, 1 no
- Market Wagon: 3 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-12.7-01** `Could·V2·Pendiente` Repartir la cesta entre al menos 2 vendedores cuando sea posible, sin encarecerla.
  - Criterio: Dadas dos opciones de igual precio, cuando se genera, entonces se combinan vendedores.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-12.7-02** `Should·MVP·Pendiente` Priorizar los productos de temporada y los de vida útil adecuada a los días pedidos.
  - Criterio: Dados 7 días, cuando se genera, entonces no propone pescado fresco para el día 7.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-12.7-03** `Must·MVP·Pendiente` Respetar la dieta guardada (vegetariana o vegana).
  - Criterio: Dado un cliente vegano, cuando se genera, entonces no hay productos animales.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-12.7-04** `Could·V2·Pendiente` Guardar las últimas 5 cestas generadas en «Mis cestas».
  - Criterio: Dadas 6 cestas, cuando abre la lista, entonces ve las 5 últimas.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-16 · Panel del vendedor

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 5_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 2 · Oferta (puesto 8 de 19 en la cascada) · **Actores:** Vendedor · **Necesidades:** N-03 · **Historias:** — · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-16.1 · Inicio del panel (3)
- RF-16.2 · Pedidos del vendedor (3)
- RF-16.3 · Ventas y estadísticas (5)
- RF-16.4 · Productos en el panel (4)
- RF-16.5 · Días de recogida (2)

**Competencia**

17 requisitos atómicos · Poco extendido 15 · Sin referente 2. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-16.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-16.1 · Inicio del panel

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03 · Historias: — · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-16.1-01** `Must·MVP·Pendiente` Mostrar en /vender/panel un resumen con: pedidos de hoy, pedidos por confirmar, productos agotados y próxima recogida.
  - Criterio: Dado un vendedor con 2 pedidos por confirmar, cuando entra, entonces ve «2 por confirmar».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-16.1-02** `Must·MVP·Pendiente` Destacar en naranja las acciones pendientes con plazo, con el tiempo restante.
  - Criterio: Dado un pedido que vence en 3 h, cuando se ve, entonces muestra «Confirma antes de 3 h».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-16.1-03** `Must·MVP·Decidido` Mostrar pestañas: Inicio, Pedidos, Productos, Ventas, Negocio; la activa en tomate --tomato.
  - Criterio: Dada la pestaña Productos, cuando está activa, entonces se marca en #C8553D.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-16.2 · Pedidos del vendedor

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03 · Historias: — · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-16.2-01** `Must·MVP·Pendiente` Listar los subpedidos por día de recogida con estado: Nuevo, Confirmado, Listo, Recogido.
  - Criterio: Dado el filtro «mañana», cuando se aplica, entonces solo salen los de mañana.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-16.2-02** `Should·MVP·Pendiente` Permitir confirmar todos los subpedidos de un día con «Confirmar todos» si no hay faltas.
  - Criterio: Dados 5 nuevos sin faltas, cuando pulsa, entonces pasan a Confirmado.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-16.2-03** `Should·V2·Pendiente` Mostrar el historial de subpedidos de los últimos 12 meses.
  - Criterio: Dado un subpedido de hace 6 meses, cuando busca, entonces aparece.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-16.3 · Ventas y estadísticas

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-06 · Historias: — · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 5

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí, 5 parcial
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-16.3-01** `Should·V2·Pendiente` Mostrar las ventas de la semana y del mes en importe y unidades.
  - Criterio: Dadas 3 ventas de 10 €, cuando se ve, entonces muestra 30 € y 3 unidades.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-16.3-02** `Could·V2·Pendiente` Mostrar los 5 productos más vendidos del mes.
  - Criterio: Dado el mes, cuando se ve, entonces aparecen 5 productos ordenados.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-16.3-03** `Should·V2·Pendiente` Mostrar la tasa de incidencias del vendedor por cada 100 subpedidos.
  - Criterio: Dadas 2 incidencias en 100, cuando se ve, entonces muestra 2 %.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-16.3-04** `Could·V2·Pendiente` Enviar un resumen semanal por correo con ventas, incidencias y valoraciones.
  - Criterio: Dado el lunes, cuando llega, entonces contiene esos tres datos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido
- [ ] **RF-16.3-05** `Could·V2·Pendiente` Permitir descargar las ventas en CSV.
  - Criterio: Dado un mes, cuando pulsa «Descargar», entonces obtiene un CSV.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market P · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-16.4 · Productos en el panel

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-04 · Historias: — · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-16.4-01** `Must·MVP·Pendiente` Listar los productos con foto, nombre, estado (Publicado, Borrador, Retirado, Agotado) y stock.
  - Criterio: Dado un borrador, cuando se ve la lista, entonces muestra el estado Borrador.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-16.4-02** `Should·MVP·Pendiente` Permitir cambiar el stock desde la lista sin abrir la ficha.
  - Criterio: Dado el stock de 10, cuando lo cambia a 8 en la lista, entonces se guarda.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-16.4-03** `Must·MVP·Pendiente` Mostrar qué le falta a cada borrador para publicarse.
  - Criterio: Dado un borrador sin alérgenos, cuando se ve, entonces dice «Faltan alérgenos».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-16.4-04** `Could·V2·Pendiente` Permitir duplicar un producto para crear otro parecido.
  - Criterio: Dado «Duplicar», cuando lo pulsa, entonces se crea un borrador con los mismos datos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-16.5 · Días de recogida

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03 · Historias: — · Fuentes: 

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin referente 2

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-16.5-01** `Must·MVP·Pendiente` Permitir al vendedor marcar días sin recogida (vacaciones) con fecha de inicio y fin.
  - Criterio: Dadas vacaciones del 1 al 7, cuando se guardan, entonces sus productos no se venden esos días.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-16.5-02** `Must·MVP·Pendiente` Avisar de que hay pedidos en esas fechas antes de guardar las vacaciones.
  - Criterio: Dado un pedido el día 3, cuando marca vacaciones, entonces ve el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-17 · Condiciones y liquidación del vendedor

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 2_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 2 · Oferta (puesto 9 de 19 en la cascada) · **Actores:** Vendedor, admin · **Necesidades:** N-03 · **Historias:** — · **Prioridad:** Should

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-17.1 · Condiciones (3)
- RF-17.2 · Liquidación (4)

**Competencia**

7 requisitos atómicos · Poco extendido 6 · Mejora 1. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-17.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-17.1 · Condiciones

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-06, N-07 · Historias: — · Fuentes: S08

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-17.1-01** `Must·V2·Pendiente` Publicar las condiciones para vendedores con comisión, plazos de pago, obligaciones de calidad y causas de suspensión.
  - Criterio: Dadas las condiciones, cuando se leen, entonces contienen esos cuatro apartados.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-17.1-02** `Must·V2·Pendiente` Avisar a los vendedores con 15 días de antelación de cualquier cambio de condiciones (Reglamento P2B).
  - Criterio: Dado un cambio, cuando se publica, entonces los vendedores reciben el aviso 15 días antes.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-17.1-03** `Should·V2·Pendiente` Exigir que el vendedor no prometa nada que FOOD4ALL no pueda cumplir en las fichas (por ejemplo, «entrega hoy»).
  - Criterio: Dada una ficha con «entrega hoy», cuando se revisa, entonces se rechaza.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-17.2 · Liquidación

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-07 · Historias: — · Fuentes: S08

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3 · Mejora 1

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-17.2-04 (Mejora)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-17.2-01** `Must·V2·Hipótesis` Liquidar cada semana las ventas entregadas menos la comisión y las incidencias atribuidas.
  - Criterio: Dadas ventas de 100 €, comisión del 15 % e incidencia de 5 €, cuando se liquida, entonces se pagan 80 €.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-17.2-02** `Must·V2·Pendiente` Mostrar el detalle de cada liquidación: periodo, ventas, comisión, ajustes e importe.
  - Criterio: Dada una liquidación, cuando se abre, entonces se ven esos cinco datos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-17.2-03** `Must·V3·Pendiente` Generar la factura de la comisión al vendedor en PDF.
  - Criterio: Dada una liquidación, cuando se cierra, entonces hay un PDF de factura.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-17.2-04** `Must·V2·Pendiente` Mostrar el porcentaje de comisión en el panel en cuanto esté decidido.
  - Criterio: Dada la comisión decidida, cuando el vendedor entra, entonces ve el porcentaje.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Mejora

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-05 · Carrito multi-vendedor

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 9_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 3 · Compra (puesto 10 de 19 en la cascada) · **Actores:** Cliente · **Necesidades:** N-02 · **Historias:** US-04 · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-05.1 · Añadir al carrito (5)
- RF-05.2 · Vista del carrito agrupada (6)
- RF-05.3 · Cantidades (3)
- RF-05.4 · Envío y compra mínima (4)
- RF-05.5 · Presupuesto (2)
- RF-05.6 · Cambios de stock y precio (3)
- RF-05.7 · Persistencia (3)
- RF-05.8 · Diseño del carrito (6)
- RF-05.9 · Información de la entrega en el carrito (3)

**Competencia**

35 requisitos atómicos · Poco extendido 25 · Paridad 7 · Diferencial 2 · Mejora 1. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-05.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-05.1 · Añadir al carrito

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-04 · Fuentes: F-04, S04, S06, S07, S08, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3 · Paridad 2

- Mercadona online: 3 sí, 1 no
- Glovo: 0 sí, 3 no
- Too Good To Go: 0 sí, 3 no
- Wetaca: 0 sí, 3 parcial, 1 no
- Market Wagon: 4 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-05.1-01** `Must·MVP·Decidido` Permitir añadir productos de cualquier vendedor de la zona al mismo carrito.
  - Criterio: Dado un producto del vendedor A en el carrito, cuando añade uno del vendedor B, entonces el carrito tiene ambos.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-05.1-02** `Must·MVP·Pendiente` Mostrar el icono del carrito en la cabecera con un contador de unidades en un círculo naranja --accent.
  - Criterio: Dados 3 productos, cuando se ve la cabecera, entonces el contador muestra 3.
  - Competencia: Mercadona S · Glovo N · Too N · Wetaca P · Market S · Open S → Paridad
- [ ] **RF-05.1-03** `Should·MVP·Pendiente` Al añadir, mostrar durante 3 s el aviso «Añadido: <producto> de <vendedor>» con enlace «Ver carrito».
  - Criterio: Dado un añadido, cuando ocurre, entonces aparece el aviso.
  - Competencia: Mercadona S · Glovo N · Too N · Wetaca P · Market S · Open S → Paridad
- [ ] **RF-05.1-04** `Must·MVP·Pendiente` No permitir añadir productos de otra zona; si cambia de zona con productos, avisar «Tu carrito tiene productos de <zona>. ¿Vaciarlo?»
  - Criterio: Dado un carrito de Málaga, cuando cambia a Sevilla, entonces ve la pregunta.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-05.1-05** `Must·MVP·Pendiente` Limitar la cantidad de cada producto al stock disponible del día de recogida.
  - Criterio: Dado stock 4, cuando intenta poner 5, entonces el + se desactiva en 4.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-05.2 · Vista del carrito agrupada

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02 · Historias: US-04 · Fuentes: F-04, S01, S04, S05, S07, S08, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4 · Paridad 2

- Mercadona online: 4 sí, 1 no
- Glovo: 0 sí, 4 no
- Too Good To Go: 0 sí, 3 no
- Wetaca: 0 sí, 3 no
- Market Wagon: 5 sí
- Open Food Network: 5 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RF-05.2-01** `Must·MVP·Decidido` Mostrar el carrito en /carrito agrupado por vendedor, con el nombre del vendedor y su ciudad como cabecera de cada grupo.
  - Criterio: Dados productos de 3 vendedores, cuando abre /carrito, entonces ve 3 grupos.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-05.2-02** `Must·MVP·Pendiente` Mostrar en cada línea: miniatura, nombre, formato, precio unitario, selector de cantidad, subtotal y botón «Quitar».
  - Criterio: Dada una línea, cuando se ve, entonces contiene esos siete elementos.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-05.2-03** `Must·MVP·Pendiente` Mostrar el subtotal de cada vendedor al pie de su grupo.
  - Criterio: Dados 2 productos de 3 € del vendedor A, cuando se ve, entonces su subtotal es 6,00 €.
  - Competencia: Mercadona S · Glovo N · Too N · Wetaca N · Market S · Open S → Paridad
- [ ] **RF-05.2-04** `Must·MVP·Decidido` Mostrar un único total del carrito con el desglose: productos, envío y total.
  - Criterio: Dados 25 € de productos y envío de 3,90 €, cuando se ve, entonces el total es 28,90 €.
  - Competencia: Mercadona S · Glovo N · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-05.2-05** `Must·MVP·Pendiente` Mostrar la nota «Recibirás todo en una sola entrega» bajo el total.
  - Criterio: Dado un carrito con varios vendedores, cuando se ve, entonces aparece la nota.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-05.2-06** `Should·MVP·Pendiente` Con el carrito vacío, mostrar «Tu carrito está vacío» y los botones «Ver productos» y «Pedir una cesta a la IA».
  - Criterio: Dado un carrito vacío, cuando abre /carrito, entonces ve el mensaje y los dos botones.
  - Competencia: Mercadona S · Glovo N · Too N · Wetaca N · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-05.3 · Cantidades

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-04 · Fuentes: S04, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 3 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-05.3-01** `Must·MVP·Pendiente` Cambiar la cantidad con los botones − y + o escribiendo el número.
  - Criterio: Dado 2, cuando pulsa +, entonces pasa a 3 y se recalculan subtotal y total.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-05.3-02** `Should·MVP·Pendiente` Al poner la cantidad a 0 o pulsar «Quitar», eliminar la línea y mostrar «Producto quitado. Deshacer» durante 5 s.
  - Criterio: Dado «Quitar», cuando pulsa «Deshacer», entonces la línea vuelve.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-05.3-03** `Should·MVP·Pendiente` Recalcular los totales en menos de 300 ms tras cada cambio.
  - Criterio: Dado un cambio de cantidad, cuando ocurre, entonces el total se actualiza en ≤ 300 ms.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-05.4 · Envío y compra mínima

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-04 · Fuentes: S01, S05, S07

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3 · Mejora 1

- Mercadona online: 4 sí
- Glovo: 0 sí, 2 no
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 2 sí
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-05.4-02 (Mejora)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-05.4-01** `Must·MVP·Decidido` Cobrar un único coste de envío por pedido, sea cual sea el número de vendedores.
  - Criterio: Dados 4 vendedores, cuando se ve el total, entonces hay un solo concepto de envío.
  - Competencia: Mercadona S · Glovo N · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-05.4-02** `Must·MVP·Hipótesis` Exigir una compra mínima configurable por el admin (hipótesis inicial: entre 10 y 15 €).
  - Criterio: Dado un mínimo de 12 € y 10 € en el carrito, cuando pulsa «Pagar», entonces no avanza.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Mejora
- [ ] **RF-05.4-03** `Must·MVP·Pendiente` Mostrar una barra de progreso hacia la compra mínima: «Te faltan 2,00 € para el mínimo».
  - Criterio: Dados 10 € y un mínimo de 12 €, cuando se ve el carrito, entonces aparece ese texto.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-05.4-04** `Must·MVP·Pendiente` Mostrar el coste de envío antes del checkout, nunca por primera vez al pagar.
  - Criterio: Dado el carrito, cuando se ve, entonces el envío ya figura en el desglose.
  - Competencia: Mercadona S · Glovo N · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-05.5 · Presupuesto

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01 · Historias: US-04 · Fuentes: 

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Diferencial 2

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-05.5-01 (Diferencial), RF-05.5-02 (Diferencial)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-05.5-01** `Should·MVP·Pendiente` Si el cliente fijó un presupuesto, mostrar en el carrito «Llevas 24,10 € de tu presupuesto de 30 €».
  - Criterio: Dado un presupuesto de 30 €, cuando el carrito suma 24,10 €, entonces ve ese texto.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Diferencial
- [ ] **RF-05.5-02** `Should·MVP·Pendiente` Avisar en color --warning #B7791F cuando el carrito supere el presupuesto, sin impedir la compra.
  - Criterio: Dados 32 € con presupuesto de 30 €, cuando se ve, entonces aparece «Te has pasado 2,00 € de tu presupuesto».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Diferencial

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-05.6 · Cambios de stock y precio

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-04 · Fuentes: S08

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-05.6-01** `Must·MVP·Pendiente` Comprobar stock y precio de cada línea al abrir el carrito y al pulsar «Pagar».
  - Criterio: Dado un producto agotado después de añadirlo, cuando abre el carrito, entonces la línea aparece marcada.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-05.6-02** `Must·MVP·Pendiente` Marcar las líneas agotadas con «Ya no está disponible» y excluirlas del total.
  - Criterio: Dada una línea agotada, cuando se ve el total, entonces no la suma.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-05.6-03** `Must·MVP·Pendiente` Si cambió un precio, mostrar «El precio ha cambiado de 2,00 € a 2,20 €» en la línea.
  - Criterio: Dado un cambio de precio, cuando abre el carrito, entonces ve el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-05.7 · Persistencia

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-04 · Fuentes: S04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 3 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-05.7-01** `Must·MVP·Pendiente` Guardar el carrito de un cliente con sesión en su cuenta y mostrarlo en cualquier dispositivo.
  - Criterio: Dado un carrito en el ordenador, cuando entra desde el móvil, entonces ve el mismo carrito.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-05.7-02** `Should·MVP·Pendiente` Guardar el carrito de un visitante sin sesión en el navegador durante 7 días.
  - Criterio: Dado un visitante, cuando vuelve a los 5 días, entonces su carrito sigue.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-05.7-03** `Should·MVP·Pendiente` Al entrar, unir el carrito del navegador con el de la cuenta; si un producto está en ambos, quedarse con la cantidad mayor y avisar.
  - Criterio: Dados 2 tomates en el navegador y 3 en la cuenta, cuando entra, entonces quedan 3 y ve el aviso.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-05.8 · Diseño del carrito

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-04 · Fuentes: F-04, S04, S05, S07, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3 · Paridad 3

- Mercadona online: 5 sí, 1 no
- Glovo: 0 sí, 4 no
- Too Good To Go: 0 sí, 4 no
- Wetaca: 0 sí, 4 no
- Market Wagon: 4 sí
- Open Food Network: 5 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RF-05.8-01** `Must·MVP·Pendiente` Mostrar el carrito en dos columnas en ordenador: líneas a la izquierda (2/3) y resumen fijo a la derecha (1/3).
  - Criterio: Dada una pantalla de 1280 px, cuando se ve, entonces el resumen sigue visible al hacer scroll.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-05.8-02** `Should·V2·Pendiente` En móvil, mostrar el total y el botón «Pagar» en una barra fija abajo.
  - Criterio: Dado un móvil, cuando hace scroll, entonces la barra sigue abajo.
  - Competencia: Mercadona S · Glovo N · Too N · Wetaca N · Market S · Open S → Paridad
- [ ] **RF-05.8-03** `Must·MVP·Decidido` Separar los grupos de vendedor con tarjetas blancas con borde 1 px #DDD0B0, sin tarjetas anidadas.
  - Criterio: Dados 2 vendedores, cuando se ve, entonces hay 2 tarjetas al mismo nivel.
  - Competencia: Mercadona S · Glovo N · Too N · Wetaca N · Market S · Open S → Paridad
- [ ] **RF-05.8-04** `Must·MVP·Pendiente` Mostrar el botón «Pagar» naranja con el total: «Pagar 28,90 €», desactivado si no se llega al mínimo.
  - Criterio: Dado un carrito bajo el mínimo, cuando se ve, entonces el botón está desactivado con el motivo.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-05.8-05** `Should·MVP·Pendiente` Mostrar el enlace «Seguir comprando» que vuelve al catálogo con la zona y filtros anteriores.
  - Criterio: Dado el carrito, cuando pulsa el enlace, entonces vuelve al catálogo filtrado.
  - Competencia: Mercadona S · Glovo N · Too N · Wetaca N · Market S · Open S → Paridad
- [ ] **RF-05.8-06** `Should·MVP·Pendiente` Ofrecer «Vaciar carrito» con confirmación.
  - Criterio: Dado «Vaciar», cuando confirma, entonces el carrito queda vacío.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-05.9 · Información de la entrega en el carrito

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-08 · Historias: US-04 · Fuentes: S01, S04, S06, S08, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-03 Eficiencia · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 1 sí, 1 parcial
- Glovo: 0 sí, 1 parcial
- Too Good To Go: 0 sí
- Wetaca: 2 sí
- Market Wagon: 1 sí
- Open Food Network: 2 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-05.9-01** `Should·MVP·Pendiente` Mostrar la próxima franja disponible en el carrito: «Próxima entrega: jueves 18–20 h».
  - Criterio: Dado el carrito, cuando se ve, entonces muestra la próxima franja.
  - Competencia: Mercadona S · Glovo P · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-05.9-02** `Could·V2·Pendiente` Mostrar la hora de cierre para esa franja con cuenta atrás si faltan menos de 2 horas.
  - Criterio: Dado un cierre en 90 min, cuando se ve, entonces muestra «Cierra en 1 h 30 min».
  - Competencia: Mercadona P · Glovo ? · Too ? · Wetaca S · Market ? · Open S → Poco extendido
- [ ] **RF-05.9-03** `Should·MVP·Pendiente` Explicar con un icono de información por qué hay un solo envío aunque haya varios vendedores.
  - Criterio: Dado el icono, cuando pasa el ratón, entonces explica la entrega consolidada.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-06 · Checkout y pago único simulado

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 8_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 3 · Compra (puesto 11 de 19 en la cascada) · **Actores:** Cliente · **Necesidades:** N-02, N-04 · **Historias:** US-05 · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-06.1 · Acceso y resumen (3)
- RF-06.2 · Dirección y franja (4)
- RF-06.3 · Revisión de alérgenos y condiciones (4)
- RF-06.4 · Pago simulado (8)
- RF-06.5 · Confirmación (4)
- RF-06.6 · Modificar o cancelar (4)
- RF-06.7 · Diseño y navegación del checkout (6)
- RF-06.8 · Datos de facturación (2)

**Competencia**

35 requisitos atómicos · Poco extendido 20 · Paridad 11 · Diferencial 2 · Sin referente 2. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-06.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-06.1 · Acceso y resumen

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-05 · Fuentes: F-04, S04, S06, S07, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 2 · Paridad 1

- Mercadona online: 0 sí, 3 no
- Glovo: 0 sí, 2 no
- Too Good To Go: 0 sí, 2 no
- Wetaca: 0 sí, 3 no
- Market Wagon: 2 sí, 1 no
- Open Food Network: 2 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-06.1-01** `Must·MVP·Pendiente` Exigir sesión con correo verificado para pasar al checkout.
  - Criterio: Dado un visitante, cuando pulsa «Pagar», entonces va a /entrar?volver=/checkout.
  - Competencia: Mercadona N · Glovo ? · Too ? · Wetaca N · Market N · Open ? → Paridad
- [ ] **RF-06.1-02** `Must·MVP·Pendiente` Mostrar el checkout en una sola página con tres pasos numerados: Entrega, Revisión y Pago.
  - Criterio: Dado /checkout, cuando se carga, entonces se ven los tres pasos.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-06.1-03** `Must·MVP·Pendiente` Mostrar a la derecha un resumen fijo con los grupos por vendedor, el envío y el total.
  - Criterio: Dada una pantalla de 1280 px, cuando hace scroll, entonces el resumen sigue visible.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-06.2 · Dirección y franja

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-08 · Historias: US-05 · Fuentes: S01, S04, S06, S07, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 2 · Paridad 2

- Mercadona online: 3 sí, 1 parcial
- Glovo: 2 sí
- Too Good To Go: 0 sí
- Wetaca: 3 sí
- Market Wagon: 2 sí
- Open Food Network: 4 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-06.2-01** `Must·MVP·Pendiente` Mostrar la dirección predeterminada y permitir elegir otra o añadir una nueva sin salir del checkout.
  - Criterio: Dado «Añadir dirección», cuando la guarda, entonces queda seleccionada.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-06.2-02** `Must·MVP·Hipótesis` Ofrecer días de entrega de los próximos 7 días y franjas de 2 horas entre 9:00 y 21:00 según la capacidad de la zona.
  - Criterio: Dada una franja llena, cuando se ve, entonces aparece desactivada con «Completa».
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-06.2-03** `Must·MVP·Pendiente` Mostrar la hora de cierre de cada franja: «Pide antes del martes a las 20:00».
  - Criterio: Dada una franja, cuando se ve, entonces muestra su hora de cierre.
  - Competencia: Mercadona P · Glovo ? · Too ? · Wetaca S · Market ? · Open S → Poco extendido
- [ ] **RF-06.2-04** `Should·MVP·Pendiente` Permitir indicaciones para el repartidor de hasta 200 caracteres.
  - Criterio: Dados 201 caracteres, cuando escribe, entonces no se aceptan más.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-06.3 · Revisión de alérgenos y condiciones

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-04, N-07 · Historias: US-05 · Fuentes: S01, S07, S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Diferencial 2 · Poco extendido 1 · Paridad 1

- Mercadona online: 0 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 3 sí
- Diferenciales y mejoras: RF-06.3-01 (Diferencial), RF-06.3-02 (Diferencial)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-06.3-01** `Must·MVP·Decidido` Mostrar antes de pagar la lista de alérgenos de todo el pedido agrupada por producto.
  - Criterio: Dado un pedido con pan y queso, cuando llega a Revisión, entonces ve «Gluten (pan)» y «Leche (queso)».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Diferencial
- [ ] **RF-06.3-02** `Must·MVP·Pendiente` Si algún producto contiene un alérgeno guardado por el cliente, pedir confirmación expresa.
  - Criterio: Dado un cliente alérgico al huevo y un producto con huevo, cuando avanza, entonces debe marcar «Sé que este producto contiene huevo».
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open S → Diferencial
- [ ] **RF-06.3-03** `Must·MVP·Decidido` Avisar de que los productos perecederos no admiten desistimiento y los de despensa sí, durante 14 días.
  - Criterio: Dado un pedido mixto, cuando llega a Revisión, entonces ve el aviso con los productos de cada tipo.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-06.3-04** `Must·MVP·Pendiente` Exigir la casilla «He leído y acepto las condiciones de compra» con enlace.
  - Criterio: Dada la casilla sin marcar, cuando pulsa «Pagar», entonces no avanza.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-06.4 · Pago simulado

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02, N-07 · Historias: US-05 · Fuentes: F-04, S01, S02, S04, S06, S07, S09, S10

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Paridad 6 · Poco extendido 2

- Mercadona online: 5 sí, 2 no
- Glovo: 7 sí, 1 no
- Too Good To Go: 0 sí, 4 no
- Wetaca: 6 sí, 1 no
- Market Wagon: 7 sí
- Open Food Network: 7 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (8)**

- [ ] **RF-06.4-01** `Must·MVP·Decidido` Ofrecer pago simulado con tarjeta, claramente marcado «Pago de prueba: no se cobra nada».
  - Criterio: Dado el paso Pago, cuando se carga, entonces ve el aviso.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-06.4-02** `Must·MVP·Pendiente` Validar el número de tarjeta con el algoritmo de Luhn, la caducidad futura y el CVC de 3 dígitos.
  - Criterio: Dada una caducidad pasada, cuando paga, entonces ve «La tarjeta ha caducado».
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-06.4-03** `Must·MVP·Pendiente` Simular un rechazo con la tarjeta de prueba 4000 0000 0000 0002 y mostrar «El banco ha rechazado el pago».
  - Criterio: Dada esa tarjeta, cuando paga, entonces ve el rechazo y el pedido no se crea.
  - Competencia: Mercadona S · Glovo S · Too N · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-06.4-04** `Must·MVP·Pendiente` Mostrar el botón «Pagar 28,90 €» con el importe exacto, en naranja --accent.
  - Criterio: Dado un total de 28,90 €, cuando se ve el botón, entonces dice «Pagar 28,90 €».
  - Competencia: Mercadona S · Glovo S · Too N · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-06.4-05** `Must·MVP·Decidido` Hacer un único cobro por el total, aunque el pedido tenga varios vendedores.
  - Criterio: Dados 3 vendedores, cuando paga, entonces hay un solo cargo.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-06.4-06** `Must·MVP·Pendiente` Evitar cobros dobles: un segundo clic en «Pagar» durante el proceso no genera otro pedido.
  - Criterio: Dado un doble clic, cuando termina, entonces hay un solo pedido.
  - Competencia: Mercadona S · Glovo S · Too N · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-06.4-07** `Could·V3·Pendiente` Preparar la integración para PayPal y Bizum en una versión con pagos reales.
  - Criterio: Dado el diseño, cuando se revisa, entonces los métodos de pago son intercambiables.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market S · Open S → Paridad
- [ ] **RF-06.4-08** `Could·V3·Pendiente` Estudiar aceptar tickets restaurante, que Glovo y Wetaca ya admiten.
  - Criterio: Dada la versión con pagos reales, cuando se decide, entonces queda documentado si se admiten.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-06.5 · Confirmación

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-05 · Fuentes: S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 4 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-06.5-01** `Must·MVP·Pendiente` Tras pagar, mostrar /pedido/<número> con «¡Pedido confirmado!», número, franja, dirección y grupos por vendedor.
  - Criterio: Dado un pago correcto, cuando termina, entonces ve esa página.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-06.5-02** `Must·MVP·Pendiente` Enviar un correo de confirmación con el mismo contenido y el enlace al seguimiento.
  - Criterio: Dado un pedido, cuando se confirma, entonces llega el correo en menos de 2 minutos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-06.5-03** `Must·MVP·Pendiente` Numerar los pedidos como F4A-AAAA-NNNNN (año y número correlativo).
  - Criterio: Dado el primer pedido de 2026, cuando se crea, entonces su número es F4A-2026-00001.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-06.5-04** `Should·V2·Pendiente` Generar una factura en PDF por pedido con el desglose por vendedor, descargable desde «Mis pedidos».
  - Criterio: Dado un pedido entregado, cuando pulsa «Factura», entonces descarga el PDF.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-06.6 · Modificar o cancelar

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02, N-08 · Historias: US-05 · Fuentes: S01, S04, S06, S10

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 3 · Paridad 1

- Mercadona online: 3 sí
- Glovo: 3 sí, 1 parcial
- Too Good To Go: 0 sí
- Wetaca: 1 sí
- Market Wagon: 0 sí
- Open Food Network: 1 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-06.6-01** `Should·V2·Pendiente` Permitir modificar cantidades o franja hasta la hora de cierre de la franja.
  - Criterio: Dado un pedido antes del cierre, cuando cambia la franja, entonces se guarda.
  - Competencia: Mercadona S · Glovo P · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-06.6-02** `Must·MVP·Pendiente` Permitir cancelar sin coste hasta la hora de cierre con el botón «Cancelar pedido» y confirmación.
  - Criterio: Dada una cancelación antes del cierre, cuando confirma, entonces se reembolsa el total.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-06.6-03** `Must·MVP·Pendiente` Después del cierre, ocultar «Cancelar pedido» y mostrar «El pedido ya se está preparando».
  - Criterio: Dado un pedido tras el cierre, cuando lo abre, entonces no ve el botón.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-06.6-04** `Could·V2·Pendiente` Aplicar códigos promocionales en el checkout con el campo «¿Tienes un código?».
  - Criterio: Dado un código válido del 10 %, cuando lo aplica, entonces el total baja un 10 %.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-06.7 · Diseño y navegación del checkout

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-05 · Fuentes: S01, S04, S06

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 6

- Mercadona online: 6 sí
- Glovo: 0 sí, 6 parcial
- Too Good To Go: 0 sí
- Wetaca: 6 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RF-06.7-01** `Must·MVP·Pendiente` Mostrar los tres pasos como acordeón: el actual abierto y los completados resumidos con «Cambiar».
  - Criterio: Dado el paso Pago, cuando se ve, entonces Entrega aparece resumida con «Cambiar».
  - Competencia: Mercadona S · Glovo P · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-06.7-02** `Must·MVP·Pendiente` No avanzar de paso si hay errores; mostrar el error junto al campo.
  - Criterio: Dada una franja sin elegir, cuando pulsa «Continuar», entonces ve «Elige una franja».
  - Competencia: Mercadona S · Glovo P · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-06.7-03** `Should·MVP·Pendiente` Conservar lo rellenado si el cliente vuelve al carrito y regresa al checkout.
  - Criterio: Dada una franja elegida, cuando vuelve al carrito y regresa, entonces sigue elegida.
  - Competencia: Mercadona S · Glovo P · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-06.7-04** `Should·V2·Pendiente` Reservar la franja elegida durante 15 minutos mientras se paga.
  - Criterio: Dada una franja con 1 hueco, cuando otro cliente intenta elegirla en esos 15 min, entonces aparece completa.
  - Competencia: Mercadona S · Glovo P · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-06.7-05** `Must·MVP·Pendiente` Si cambia el precio o el stock durante el checkout, volver a Revisión con el aviso del cambio.
  - Criterio: Dado un producto agotado durante el pago, cuando paga, entonces vuelve a Revisión con el aviso.
  - Competencia: Mercadona S · Glovo P · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-06.7-06** `Could·MVP·Pendiente` Mostrar en el checkout solo el logo y un enlace «Volver al carrito», sin el menú completo.
  - Criterio: Dado /checkout, cuando se ve la cabecera, entonces solo están el logo y el enlace.
  - Competencia: Mercadona S · Glovo P · Too ? · Wetaca S · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-06.8 · Datos de facturación

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Could · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-07 · Historias: US-05 · Fuentes: 

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-04 Usabilidad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Sin referente 2

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-06.8-01** `Could·V2·Pendiente` Pedir NIF y razón social solo si el cliente marca «Necesito factura a nombre de empresa».
  - Criterio: Dada la casilla marcada, cuando se ve, entonces aparecen esos campos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-06.8-02** `Could·V2·Pendiente` Validar el formato del NIF o NIE.
  - Criterio: Dado un NIF con letra errónea, cuando envía, entonces ve «El NIF no es válido».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-07 · División en subpedidos y confirmación del vendedor

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 6_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 3 · Compra (puesto 12 de 19 en la cascada) · **Actores:** Vendedor · **Necesidades:** N-02, N-03 · **Historias:** US-11 · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05, RF-06 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-07.1 · División (2)
- RF-07.2 · Aviso y vista del vendedor (3)
- RF-07.3 · Confirmar o avisar de faltas (5)
- RF-07.4 · Preparación y etiqueta (3)
- RF-07.5 · Plazos y avisos al vendedor (4)
- RF-07.6 · Pedido sin el grupo de un vendedor (2)

**Competencia**

19 requisitos atómicos · Poco extendido 18 · Mejora 1. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-07.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-07.1 · División

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-03 · Historias: US-11 · Fuentes: F-04, S07, S09

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 2

- Mercadona online: 0 sí, 2 no
- Glovo: 0 sí, 2 no
- Too Good To Go: 0 sí, 2 no
- Wetaca: 0 sí, 2 no
- Market Wagon: 2 sí
- Open Food Network: 2 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-07.1-01** `Must·MVP·Decidido` Al confirmar un pedido, crear un subpedido por vendedor con sus líneas, su subtotal y el mismo número de pedido más un sufijo (-A, -B…).
  - Criterio: Dado un pedido de 3 vendedores, cuando se confirma, entonces hay 3 subpedidos F4A-…-A, -B y -C.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido
- [ ] **RF-07.1-02** `Must·MVP·Pendiente` Mantener el pedido global como unidad para el cliente y los subpedidos como unidad para cada vendedor.
  - Criterio: Dado un pedido, cuando el cliente lo abre, entonces ve uno; y cada vendedor ve solo el suyo.
  - Competencia: Mercadona N · Glovo N · Too N · Wetaca N · Market S · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-07.2 · Aviso y vista del vendedor

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-07 · Historias: US-11 · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-07.2-01** `Must·MVP·Pendiente` Avisar al vendedor por correo y en su panel de cada subpedido nuevo.
  - Criterio: Dado un subpedido nuevo, cuando se crea, entonces el vendedor lo ve en «Pedidos recibidos» con la marca «Nuevo».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.2-02** `Must·MVP·Decidido` Mostrar al vendedor solo su parte: productos, cantidades, día y franja de recogida; nunca datos del cliente.
  - Criterio: Dado un subpedido, cuando lo abre el vendedor, entonces no ve nombre ni dirección del cliente.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.2-03** `Should·MVP·Pendiente` Generar la hoja de preparación del día con todas las líneas por producto, imprimible.
  - Criterio: Dado el día de recogida, cuando pulsa «Hoja de preparación», entonces ve el total por producto.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-07.3 · Confirmar o avisar de faltas

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-03 · Historias: US-11 · Fuentes: S01, S07, S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 4 · Mejora 1

- Mercadona online: 0 sí
- Glovo: 0 sí, 3 parcial
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 5 sí
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-07.3-04 (Mejora)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-07.3-01** `Must·MVP·Pendiente` Pedir al vendedor que confirme cada subpedido antes de 12 horas desde la hora de cierre.
  - Criterio: Dado un subpedido sin confirmar a las 12 h, cuando vence, entonces el admin recibe una alerta.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.3-02** `Must·MVP·Pendiente` Permitir al vendedor marcar una línea como «Falta» indicando cuántas unidades puede servir.
  - Criterio: Dadas 4 pedidas y 2 disponibles, cuando marca la falta, entonces la línea queda en 2.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.3-03** `Should·V2·Pendiente` Permitir al vendedor proponer un sustituto solo de su catálogo y de precio igual o menor.
  - Criterio: Dado un sustituto más caro, cuando lo propone, entonces no se permite.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.3-04** `Should·V2·Pendiente` Pedir al cliente que acepte o rechace el sustituto antes de la recogida; sin respuesta, se reembolsa la línea.
  - Criterio: Dado un sustituto sin respuesta, cuando llega la recogida, entonces se reembolsa esa línea.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Mejora
- [ ] **RF-07.3-05** `Must·MVP·Pendiente` Reembolsar automáticamente las faltas y recalcular el total del pedido.
  - Criterio: Dada una falta de 2,00 €, cuando se confirma, entonces el cliente recibe 2,00 € y ve el total nuevo.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-07.4 · Preparación y etiqueta

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-05 · Historias: US-11 · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-07.4-01** `Must·MVP·Pendiente` Generar para cada subpedido una etiqueta imprimible con número de subpedido, vendedor, número de bultos y conservación (ambiente, refrigerado o congelado).
  - Criterio: Dado un subpedido, cuando pulsa «Imprimir etiqueta», entonces obtiene un PDF de 100 × 60 mm.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.4-02** `Must·MVP·Decidido` Incluir en la etiqueta el lote o la fecha de caducidad de cada producto.
  - Criterio: Dado un producto con lote, cuando se imprime, entonces el lote aparece.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.4-03** `Must·MVP·Pendiente` Permitir al vendedor marcar el subpedido como «Listo para recoger».
  - Criterio: Dado «Listo», cuando lo marca, entonces el operador lo ve en su ruta.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-07.5 · Plazos y avisos al vendedor

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-03, N-06 · Historias: US-11 · Fuentes: S08

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-07.5-01** `Should·MVP·Pendiente` Avisar al vendedor 2 horas antes de que venza el plazo de confirmación.
  - Criterio: Dado un subpedido sin confirmar, cuando faltan 2 h, entonces llega el recordatorio.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.5-02** `Must·MVP·Pendiente` Si el vendedor no confirma en plazo, avisar al cliente de un posible retraso en ese grupo.
  - Criterio: Dado un plazo vencido, cuando ocurre, entonces el cliente recibe el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.5-03** `Must·MVP·Pendiente` Si el vendedor no tiene nada del subpedido, permitir «No puedo servir este pedido», que reembolsa todo su grupo.
  - Criterio: Dado «No puedo servir», cuando confirma, entonces se reembolsa el grupo entero.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-07.5-04** `Should·V2·Pendiente` Contar las faltas por vendedor para su tasa de cumplimiento.
  - Criterio: Dadas 3 faltas en 50 subpedidos, cuando se ve, entonces la tasa es 94 %.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-07.6 · Pedido sin el grupo de un vendedor

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-11 · Fuentes: S05

**3. Actores y roles**

Vendedor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-07 Fiabilidad

**15. Competencia**

Poco extendido 2

- Mercadona online: 2 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-07.6-01** `Must·MVP·Pendiente` Si un grupo se cancela entero, mantener el resto del pedido y recalcular la compra mínima sin cobrar recargo.
  - Criterio: Dado un grupo cancelado que deja el pedido bajo el mínimo, cuando ocurre, entonces el pedido sigue sin recargo.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-07.6-02** `Must·MVP·Pendiente` Si se cancelan todos los grupos, cancelar el pedido y reembolsar también el envío.
  - Criterio: Dados todos los grupos cancelados, cuando ocurre, entonces se reembolsa el total.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-14 · Suscripción

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 2_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 3 · Compra (puesto 13 de 19 en la cascada) · **Actores:** Cliente · **Necesidades:** N-01 · **Historias:** — · **Prioridad:** Could

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05, RF-06, RF-07 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-14.1 · Suscripción opcional (4)
- RF-14.2 · Gestión de la suscripción (4)

**Competencia**

8 requisitos atómicos · Paridad 4 · Poco extendido 4. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-14.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-14.1 · Suscripción opcional

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-07 · Historias: — · Fuentes: S01, S06, S10

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 2 · Poco extendido 2

- Mercadona online: 0 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 4 sí
- Market Wagon: 0 sí
- Open Food Network: 2 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-14.1-01** `Must·MVP·Decidido` Anunciar la suscripción como «Próximamente», sin precios, mientras no esté decidida.
  - Criterio: Dado el modo conceptual, cuando se ve la suscripción, entonces no hay precios.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-14.1-02** `Could·V3·Pendiente` Ofrecer una suscripción con envío gratis y cesta semanal propuesta por la IA.
  - Criterio: Dado un suscriptor, cuando paga un pedido, entonces el envío es 0 €.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-14.1-03** `Could·V3·Pendiente` Permitir pausar la suscripción las semanas que se quiera antes del cierre semanal.
  - Criterio: Dada una pausa antes del cierre, cuando llega la semana, entonces no se genera cesta.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market ? · Open ? → Poco extendido
- [ ] **RF-14.1-04** `Must·V3·Pendiente` Permitir cancelar la suscripción en cualquier momento sin coste y con dos clics.
  - Criterio: Dado «Cancelar», cuando confirma, entonces no hay más cobros.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-14.2 · Gestión de la suscripción

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Could · **Entrega:** V3 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-07 · Historias: — · Fuentes: S01, S04, S06, S09, S10

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 2 · Poco extendido 2

- Mercadona online: 0 sí, 1 parcial
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 4 sí
- Market Wagon: 0 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-14.2-01** `Could·V3·Pendiente` Mostrar en «Mi suscripción» el estado, la próxima cesta, la fecha de cobro y los botones Pausar y Cancelar.
  - Criterio: Dado un suscriptor, cuando abre la página, entonces ve esos datos y botones.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-14.2-02** `Could·V3·Pendiente` Avisar 48 horas antes del cierre semanal para revisar la cesta propuesta.
  - Criterio: Dado el cierre del miércoles, cuando es lunes, entonces llega el aviso.
  - Competencia: Mercadona P · Glovo ? · Too ? · Wetaca S · Market ? · Open S → Poco extendido
- [ ] **RF-14.2-03** `Could·V3·Pendiente` Si no se revisa, enviar la cesta propuesta tal cual y cobrarla.
  - Criterio: Dada una cesta sin cambios, cuando pasa el cierre, entonces se confirma.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open S → Paridad
- [ ] **RF-14.2-04** `Could·V3·Pendiente` Confirmar la cancelación por correo y mantener la ventaja hasta el fin del periodo pagado.
  - Criterio: Dada una cancelación a mitad de mes, cuando ocurre, entonces el envío gratis sigue hasta fin de mes.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-08 · Recogida, consolidación en el hub y entrega

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 7_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 4 · Entrega y posventa (puesto 14 de 19 en la cascada) · **Actores:** Operador, repartidor · **Necesidades:** N-02, N-08 · **Historias:** US-12 · **Prioridad:** Must

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05, RF-06, RF-07, RF-14 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-08.1 · Ruta de recogida (3)
- RF-08.2 · Recepción y verificación en el hub (4)
- RF-08.3 · Empaquetado consolidado (4)
- RF-08.4 · Reparto y entrega (5)
- RF-08.5 · Retirada y excedentes (2)
- RF-08.6 · Aplicación del operador (4)
- RF-08.7 · Entrega al cliente (4)

**Competencia**

26 requisitos atómicos · Poco extendido 13 · Paridad 12 · Mejora 1. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-08.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-08.1 · Ruta de recogida

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-05 · Historias: US-12 · Fuentes: S08, S09

**3. Actores y roles**

Operador, repartidor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria · RNF-11 Sostenibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 3 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-08.1-01** `Must·MVP·Pendiente` Generar cada día la lista de vendedores a visitar con dirección, franja de recogida y subpedidos.
  - Criterio: Dados 6 subpedidos de 4 vendedores, cuando se genera la ruta, entonces tiene 4 paradas.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-08.1-02** `Should·V2·Pendiente` Ordenar las paradas por cercanía empezando por el hub.
  - Criterio: Dadas 4 paradas, cuando se ordena, entonces la primera es la más cercana al hub.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-08.1-03** `Must·MVP·Pendiente` Registrar en cada parada la hora de recogida y los bultos recogidos.
  - Criterio: Dado un bulto menos de lo esperado, cuando lo registra, entonces se crea una incidencia.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-08.2 · Recepción y verificación en el hub

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-05, N-06 · Historias: US-12 · Fuentes: S06, S07, S08, S09

**3. Actores y roles**

Operador, repartidor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria · RNF-11 Sostenibilidad

**15. Competencia**

Poco extendido 2 · Mejora 1 · Paridad 1

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 2 sí
- Market Wagon: 3 sí, 1 no
- Open Food Network: 2 sí
- Diferenciales y mejoras: RF-08.2-02 (Mejora)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-08.2-01** `Must·MVP·Pendiente` Registrar la llegada de cada subpedido al hub con hora y responsable.
  - Criterio: Dado un subpedido recibido, cuando se registra, entonces su estado pasa a «En el hub».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-08.2-02** `Must·MVP·Pendiente` Comprobar línea a línea cada subpedido contra el pedido antes de empaquetar.
  - Criterio: Dada una línea que no coincide, cuando se revisa, entonces se marca y se avisa al admin.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market N · Open ? → Mejora
- [ ] **RF-08.2-03** `Must·MVP·Pendiente` Comprobar el estado y la caducidad de los frescos y retirar los que no cumplan.
  - Criterio: Dado un producto en mal estado, cuando se revisa, entonces se retira y se reembolsa.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-08.2-04** `Must·V2·Pendiente` Registrar la temperatura de la cámara de frío al recibir refrigerados.
  - Criterio: Dada una temperatura de 6 °C, cuando se registra, entonces salta una alerta.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-08.3 · Empaquetado consolidado

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-04, N-08 · Historias: US-12 · Fuentes: S06, S07, S08, S09

**3. Actores y roles**

Operador, repartidor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria · RNF-11 Sostenibilidad

**15. Competencia**

Paridad 3 · Poco extendido 1

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 4 sí
- Market Wagon: 4 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-08.3-01** `Must·MVP·Decidido` Agrupar todos los subpedidos de un pedido en una sola entrega, separando frío y seco.
  - Criterio: Dado un pedido con yogur y pan, cuando se empaqueta, entonces hay una bolsa de frío y otra de seco, con el mismo número.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-08.3-02** `Must·MVP·Pendiente` Usar embalaje isotérmico y acumuladores de frío para los refrigerados.
  - Criterio: Dado un refrigerado, cuando se empaqueta, entonces va en bolsa isotérmica.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open ? → Poco extendido
- [ ] **RF-08.3-03** `Must·MVP·Pendiente` Imprimir la etiqueta de entrega con número de pedido, nombre, dirección, franja y número de bultos (1/2, 2/2).
  - Criterio: Dados 2 bultos, cuando se etiquetan, entonces llevan «1/2» y «2/2».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-08.3-04** `Must·MVP·Pendiente` Incluir en el paquete la hoja con la información obligatoria de los productos sin etiqueta.
  - Criterio: Dada fruta a granel, cuando se entrega, entonces la hoja indica origen y vendedor.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-08.4 · Reparto y entrega

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02, N-07 · Historias: US-12 · Fuentes: F-04, S02, S04, S06, S07, S09

**3. Actores y roles**

Operador, repartidor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria · RNF-11 Sostenibilidad

**15. Competencia**

Paridad 4 · Poco extendido 1

- Mercadona online: 3 sí
- Glovo: 4 sí
- Too Good To Go: 3 sí, 1 no
- Wetaca: 3 sí
- Market Wagon: 5 sí
- Open Food Network: 3 sí, 1 parcial

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-08.4-01** `Must·MVP·Pendiente` Asignar los pedidos empaquetados a rutas de reparto por franja.
  - Criterio: Dada la franja 18–20 h, cuando se asigna, entonces todos sus pedidos están en una ruta.
  - Competencia: Mercadona S · Glovo S · Too N · Wetaca S · Market S · Open P → Paridad
- [ ] **RF-08.4-02** `Must·MVP·Pendiente` Registrar la entrega con hora y nombre de quien recibe.
  - Criterio: Dada una entrega, cuando se registra, entonces el estado pasa a «Entregado».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-08.4-03** `Must·MVP·Pendiente` Si no hay nadie, dejar aviso, marcar «Entrega fallida» y ofrecer reprogramar en la siguiente franja libre.
  - Criterio: Dada una entrega fallida, cuando el cliente abre el pedido, entonces ve «Elige otra franja».
  - Competencia: Mercadona S · Glovo S · Too S · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-08.4-04** `Should·V2·Pendiente` Tras dos entregas fallidas, devolver el pedido al hub y reembolsar solo los productos de despensa.
  - Criterio: Dadas dos fallidas, cuando ocurre, entonces se reembolsa la despensa y no los perecederos.
  - Competencia: Mercadona S · Glovo S · Too S · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-08.4-05** `Could·V3·Pendiente` Ofrecer recogida en un punto de la zona sin coste de envío.
  - Criterio: Dada la opción «Recoger en punto», cuando la elige, entonces el envío es 0 €.
  - Competencia: Mercadona ? · Glovo S · Too S · Wetaca ? · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-08.5 · Retirada y excedentes

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-05, N-08 · Historias: US-12 · Fuentes: F-04

**3. Actores y roles**

Operador, repartidor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria · RNF-11 Sostenibilidad

**15. Competencia**

Poco extendido 2

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí, 2 parcial
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-08.5-01** `Must·V2·Decidido` Permitir al admin retirar un lote de producto y avisar a todos los clientes que lo compraron.
  - Criterio: Dado un lote retirado, cuando se confirma, entonces cada comprador recibe el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-08.5-02** `Should·V2·Pendiente` Registrar los excedentes del hub y su destino: devolución, donación o desecho.
  - Criterio: Dado un excedente, cuando se registra, entonces queda su destino y fecha.
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-08.6 · Aplicación del operador

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-05, N-06 · Historias: US-12 · Fuentes: S06, S07, S08, S09

**3. Actores y roles**

Operador, repartidor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria · RNF-11 Sostenibilidad

**15. Competencia**

Poco extendido 2 · Paridad 2

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 3 sí
- Market Wagon: 4 sí
- Open Food Network: 3 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-08.6-01** `Must·V2·Pendiente` Ofrecer al operador una vista móvil con la ruta del día y una casilla por parada.
  - Criterio: Dada la ruta, cuando marca una parada, entonces queda con la hora.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open S → Poco extendido
- [ ] **RF-08.6-02** `Should·V2·Pendiente` Permitir escanear o escribir el número de subpedido para registrarlo.
  - Criterio: Dado un número escrito, cuando se registra, entonces el subpedido pasa a Recogida.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad
- [ ] **RF-08.6-03** `Should·V2·Pendiente` Mostrar al operador la conservación de cada bulto con color: azul para frío, gris para ambiente.
  - Criterio: Dado un bulto refrigerado, cuando se ve, entonces aparece en azul.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open ? → Poco extendido
- [ ] **RF-08.6-04** `Should·V2·Pendiente` Permitir fotografiar un bulto dañado al recogerlo y adjuntarlo a la incidencia.
  - Criterio: Dado un bulto dañado, cuando lo fotografía, entonces la foto queda en la incidencia.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open S → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-08.7 · Entrega al cliente

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-06, N-08 · Historias: US-12 · Fuentes: S02, S06, S07

**3. Actores y roles**

Operador, repartidor

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad · RNF-09 Trazabilidad alimentaria · RNF-11 Sostenibilidad

**15. Competencia**

Poco extendido 2 · Paridad 2

- Mercadona online: 0 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 3 sí
- Market Wagon: 3 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-08.7-01** `Should·V2·Pendiente` Avisar al cliente 30 minutos antes de la llegada.
  - Criterio: Dado un reparto, cuando faltan 30 min, entonces llega el aviso.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-08.7-02** `Could·V2·Pendiente` Permitir al cliente indicar «Dejar a un vecino» o «Dejar en conserjería» con nombre.
  - Criterio: Dada la indicación, cuando se entrega, entonces el repartidor la ve.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-08.7-03** `Must·MVP·Decidido` No dejar productos refrigerados sin entregar en mano.
  - Criterio: Dado un pedido con frío y nadie en casa, cuando ocurre, entonces no se deja en la puerta.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open ? → Poco extendido
- [ ] **RF-08.7-04** `Could·V3·Pendiente` Registrar la foto de la entrega cuando se deja en conserjería.
  - Criterio: Dada una entrega en conserjería, cuando termina, entonces hay foto.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-09 · Seguimiento del pedido y notificaciones

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 5_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 4 · Entrega y posventa (puesto 15 de 19 en la cascada) · **Actores:** Cliente · **Necesidades:** N-02 · **Historias:** US-06 · **Prioridad:** Should

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05, RF-06, RF-07, RF-14, RF-08 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-09.1 · Estados (3)
- RF-09.2 · Pantalla de seguimiento (4)
- RF-09.3 · Notificaciones (4)
- RF-09.4 · Mis pedidos (2)
- RF-09.5 · Plantillas de correo (4)

**Competencia**

17 requisitos atómicos · Poco extendido 17. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-09.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-09.1 · Estados

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-06 · Fuentes: S01, S04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 3 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-09.1-01** `Must·MVP·Decidido` Gestionar seis estados del pedido: Recibido, Recogida, En el hub, Empaquetado, En reparto y Entregado.
  - Criterio: Dado un pedido nuevo, cuando se crea, entonces está en Recibido.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-09.1-02** `Must·MVP·Pendiente` Calcular el estado global como el del subpedido más atrasado hasta que todos llegan al hub.
  - Criterio: Dados 2 subpedidos en el hub y 1 en Recogida, cuando se ve el pedido, entonces está en Recogida.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-09.1-03** `Must·MVP·Pendiente` Guardar la hora de cada cambio de estado.
  - Criterio: Dado un cambio a Empaquetado, cuando se consulta, entonces se ve su hora.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-09.2 · Pantalla de seguimiento

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: US-06 · Fuentes: S01, S02, S04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 2 sí
- Glovo: 4 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-09.2-01** `Must·MVP·Pendiente` Mostrar en /pedido/<número> una línea de seis pasos con el actual resaltado en --green y los pasados con su hora.
  - Criterio: Dado un pedido En el hub, cuando lo abre, entonces los tres primeros pasos aparecen completados.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-09.2-02** `Must·MVP·Pendiente` Mostrar debajo el detalle por vendedor con el estado de cada subpedido.
  - Criterio: Dado un subpedido con falta, cuando se ve, entonces muestra «Falta 1 unidad · reembolsada».
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-09.2-03** `Should·V2·Pendiente` Mostrar la franja de entrega y, el día de reparto, una hora estimada de ±30 min.
  - Criterio: Dado el día de entrega, cuando abre el pedido, entonces ve «Llega entre 18:20 y 18:50».
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-09.2-04** `Could·V3·Pendiente` Mostrar el mapa del repartidor en tiempo real.
  - Criterio: Dado un pedido en reparto, cuando abre el mapa, entonces ve la posición actualizada cada 30 s.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-09.3 · Notificaciones

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-06 · Fuentes: S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 4 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-09.3-01** `Must·MVP·Pendiente` Enviar correo al confirmar el pedido, al salir a reparto y al entregarlo.
  - Criterio: Dado un pedido entregado, cuando se revisa el correo, entonces hay 3 mensajes.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-09.3-02** `Must·MVP·Pendiente` Avisar por correo de cualquier falta o sustitución en cuanto el vendedor la marque.
  - Criterio: Dada una falta, cuando se marca, entonces llega el aviso en menos de 5 min.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-09.3-03** `Should·V2·Pendiente` Permitir elegir en «Mis datos» qué avisos recibir, salvo los obligatorios del pedido.
  - Criterio: Dado «salida a reparto» desactivado, cuando sale, entonces no llega ese correo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-09.3-04** `Could·V3·Pendiente` Enviar notificaciones push en la app cuando exista.
  - Criterio: Dada la app instalada, cuando sale a reparto, entonces llega la notificación.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-09.4 · Mis pedidos

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02 · Historias: US-06 · Fuentes: S01, S04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 2

- Mercadona online: 2 sí
- Glovo: 1 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RF-09.4-01** `Must·MVP·Pendiente` Listar en «Mis pedidos» los pedidos del cliente, del más reciente al más antiguo, con fecha, total, estado y número de vendedores.
  - Criterio: Dados 3 pedidos, cuando abre la lista, entonces el primero es el último que hizo.
  - Competencia: Mercadona S · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-09.4-02** `Should·V2·Pendiente` Ofrecer en cada pedido entregado el botón «Repetir pedido», que añade al carrito lo que siga disponible.
  - Criterio: Dado un pedido con un producto agotado, cuando pulsa «Repetir», entonces se añaden los demás y avisa del agotado.
  - Competencia: Mercadona S · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-09.5 · Plantillas de correo

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02, N-07 · Historias: US-06 · Fuentes: S09

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 4 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-09.5-01** `Should·MVP·Pendiente` Usar una plantilla de correo con el logo, colores de marca y texto alternativo en todas las imágenes.
  - Criterio: Dado un correo, cuando se abre sin imágenes, entonces se entiende igual.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-09.5-02** `Must·MVP·Pendiente` Incluir en cada correo de pedido el número, el estado y un botón «Ver mi pedido».
  - Criterio: Dado el correo de reparto, cuando se lee, entonces tiene esos tres elementos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-09.5-03** `Must·V2·Pendiente` Enviar los correos desde un dominio verificado (SPF y DKIM) para evitar el spam.
  - Criterio: Dado un correo enviado, cuando se revisan las cabeceras, entonces pasa SPF y DKIM.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido
- [ ] **RF-09.5-04** `Must·MVP·Pendiente` No incluir datos de salud (alergias) en los correos.
  - Criterio: Dado un correo de pedido, cuando se revisa, entonces no menciona alergias del cliente.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open S → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-10 · Incidencias, reembolsos y sustituciones

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 5_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 4 · Entrega y posventa (puesto 16 de 19 en la cascada) · **Actores:** Cliente, admin · **Necesidades:** N-06 · **Historias:** US-07 · **Prioridad:** Should

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05, RF-06, RF-07, RF-14, RF-08, RF-09 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-10.1 · Abrir una incidencia (6)
- RF-10.2 · Resolución (5)
- RF-10.3 · Seguimiento de la incidencia (3)
- RF-10.4 · Diseño del formulario de incidencia (4)
- RF-10.5 · Criterios de resolución (3)

**Competencia**

21 requisitos atómicos · Paridad 9 · Poco extendido 8 · Sin referente 3 · Mejora 1. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-10.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-10.1 · Abrir una incidencia

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06 · Historias: US-07 · Fuentes: S01, S06, S07

**3. Actores y roles**

Cliente, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 5 · Poco extendido 1

- Mercadona online: 0 sí
- Glovo: 5 sí
- Too Good To Go: 0 sí
- Wetaca: 5 sí
- Market Wagon: 6 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RF-10.1-01** `Must·MVP·Pendiente` Mostrar en cada pedido entregado el botón «Tengo un problema».
  - Criterio: Dado un pedido entregado, cuando lo abre, entonces ve el botón.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-10.1-02** `Must·MVP·Hipótesis` Permitir abrir incidencias hasta 48 horas después de la entrega en frescos y 14 días en despensa.
  - Criterio: Dado un fresco entregado hace 50 h, cuando pulsa el botón, entonces ve «El plazo para frescos es de 48 horas».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-10.1-03** `Must·MVP·Pendiente` Pedir el producto afectado (uno o varios) y el tipo: mal estado, falta, producto equivocado, caducado, otro.
  - Criterio: Dado «mal estado» sin producto, cuando envía, entonces ve «Elige el producto».
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-10.1-04** `Must·MVP·Pendiente` Exigir al menos una foto en «mal estado», «equivocado» y «caducado», hasta 3 fotos de 5 MB.
  - Criterio: Dado «mal estado» sin foto, cuando envía, entonces ve «Añade una foto del producto».
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-10.1-05** `Should·MVP·Pendiente` Pedir una descripción opcional de hasta 500 caracteres.
  - Criterio: Dados 501 caracteres, cuando escribe, entonces no se aceptan más.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-10.1-06** `Should·MVP·Pendiente` Dejar elegir la solución preferida: reembolso o sustitución en el próximo pedido.
  - Criterio: Dada «sustitución», cuando se resuelve, entonces el producto se añade gratis al siguiente pedido.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-10.2 · Resolución

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06 · Historias: US-07 · Fuentes: S01, S02, S07

**3. Actores y roles**

Cliente, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4 · Mejora 1

- Mercadona online: 0 sí
- Glovo: 4 sí, 1 parcial
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí
- Diferenciales y mejoras: RF-10.2-01 (Mejora)

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-10.2-01** `Must·MVP·Hipótesis` Resolver en menos de 24 horas laborables con una persona del equipo, no con un bot.
  - Criterio: Dada una incidencia abierta el lunes a las 10:00, cuando se resuelve, entonces es antes del martes a las 10:00.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Mejora
- [ ] **RF-10.2-02** `Must·MVP·Pendiente` Reembolsar al medio de pago original en un máximo de 5 días hábiles.
  - Criterio: Dado un reembolso aprobado, cuando pasan 5 días hábiles, entonces el cliente lo ha recibido.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-10.2-03** `Must·MVP·Pendiente` No pedir la devolución física de perecederos.
  - Criterio: Dado un yogur en mal estado, cuando se resuelve, entonces no se pide devolverlo.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-10.2-04** `Must·V2·Pendiente` Atribuir cada incidencia a su responsable: vendedor, hub o reparto, para las métricas y para la liquidación.
  - Criterio: Dado un fallo del vendedor, cuando se resuelve, entonces el importe se descuenta de su liquidación.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-10.2-05** `Must·MVP·Pendiente` Avisar al cliente por correo de la resolución con el importe y la fecha.
  - Criterio: Dada una resolución, cuando se cierra, entonces llega el correo.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-10.3 · Seguimiento de la incidencia

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06 · Historias: US-07 · Fuentes: S02

**3. Actores y roles**

Cliente, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-10.3-01** `Must·MVP·Pendiente` Mostrar las incidencias en el pedido con estado: Abierta, En revisión, Resuelta o Rechazada.
  - Criterio: Dada una incidencia, cuando abre el pedido, entonces ve su estado.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-10.3-02** `Should·V2·Pendiente` Permitir intercambiar mensajes con el equipo dentro de la incidencia.
  - Criterio: Dado un mensaje del equipo, cuando llega, entonces el cliente puede responder en la misma pantalla.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-10.3-03** `Must·MVP·Pendiente` Exigir un motivo al rechazar una incidencia.
  - Criterio: Dado un rechazo sin motivo, cuando el admin guarda, entonces no se permite.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-10.4 · Diseño del formulario de incidencia

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06 · Historias: US-07 · Fuentes: S01, S06, S07

**3. Actores y roles**

Cliente, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Paridad 4

- Mercadona online: 0 sí
- Glovo: 4 sí
- Too Good To Go: 0 sí
- Wetaca: 4 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-10.4-01** `Must·MVP·Pendiente` Mostrar la incidencia en 3 pasos: qué producto, qué pasó y qué solución prefieres.
  - Criterio: Dado el formulario, cuando se abre, entonces muestra el paso 1 de 3.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-10.4-02** `Should·MVP·Pendiente` Mostrar las fotos subidas en miniatura con opción de quitarlas.
  - Criterio: Dada una foto, cuando pulsa «×», entonces se quita.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-10.4-03** `Must·MVP·Pendiente` Al enviar, mostrar «Hemos recibido tu incidencia. Te responderemos antes de <fecha y hora>».
  - Criterio: Dada una incidencia el lunes a las 10:00, cuando la envía, entonces ve «antes del martes a las 10:00».
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad
- [ ] **RF-10.4-04** `Should·MVP·Pendiente` Limitar a una incidencia abierta por producto y pedido.
  - Criterio: Dada una incidencia abierta del mismo producto, cuando intenta otra, entonces ve la existente.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca S · Market S · Open ? → Paridad

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-10.5 · Criterios de resolución

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06 · Historias: US-07 · Fuentes: 

**3. Actores y roles**

Cliente, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Sin referente 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-10.5-01** `Should·V2·Pendiente` Aprobar automáticamente las faltas confirmadas por el hub, sin esperar a revisión.
  - Criterio: Dada una falta registrada en el hub, cuando el cliente reclama, entonces se aprueba al momento.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-10.5-02** `Should·V2·Pendiente` Avisar al admin si un cliente supera 3 incidencias en 30 días.
  - Criterio: Dada la cuarta incidencia, cuando se abre, entonces el admin recibe el aviso.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RF-10.5-03** `Could·V2·Pendiente` Reembolsar el envío si la incidencia afecta a más de la mitad del importe del pedido.
  - Criterio: Dado un pedido de 30 € con 16 € afectados, cuando se resuelve, entonces se reembolsa también el envío.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-11 · Valoraciones de productos y vendedores

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 3_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 4 · Entrega y posventa (puesto 17 de 19 en la cascada) · **Actores:** Cliente · **Necesidades:** N-06 · **Historias:** US-13 · **Prioridad:** Should

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05, RF-06, RF-07, RF-14, RF-08, RF-09, RF-10 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-11.1 · Pedir la valoración (4)
- RF-11.2 · Mostrar y moderar (4)
- RF-11.3 · Diseño y reglas de la valoración (5)

**Competencia**

13 requisitos atómicos · Poco extendido 13. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-11.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-11.1 · Pedir la valoración

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06, N-07 · Historias: US-13 · Fuentes: F-04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí, 4 parcial
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 4 parcial
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-11.1-01** `Should·V2·Pendiente` Pedir valoración 24 horas después de la entrega por correo y en «Mis pedidos».
  - Criterio: Dado un pedido entregado ayer, cuando abre «Mis pedidos», entonces ve «Valora tu pedido».
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.1-02** `Should·V2·Pendiente` Valorar cada vendedor del pedido de 1 a 5 estrellas y, opcionalmente, cada producto.
  - Criterio: Dados 3 vendedores, cuando valora, entonces hay 3 bloques de estrellas.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.1-03** `Should·V2·Pendiente` Permitir un comentario de hasta 300 caracteres.
  - Criterio: Dados 301 caracteres, cuando escribe, entonces no se aceptan más.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.1-04** `Must·V2·Pendiente` Permitir valorar solo productos realmente comprados y entregados.
  - Criterio: Dado un producto no comprado, cuando intenta valorarlo, entonces no se permite.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-11.2 · Mostrar y moderar

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03, N-06, N-07 · Historias: US-13 · Fuentes: F-04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí, 4 parcial
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 4 parcial
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-11.2-01** `Should·V2·Pendiente` Mostrar en el perfil del vendedor la media y el número de valoraciones a partir de 3.
  - Criterio: Dadas 2 valoraciones, cuando se ve el perfil, entonces muestra «Pocas valoraciones todavía».
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.2-02** `Must·V2·Pendiente` Moderar los comentarios antes de publicarlos: sin insultos, datos personales ni publicidad.
  - Criterio: Dado un comentario con un teléfono, cuando se modera, entonces no se publica.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.2-03** `Could·V2·Pendiente` Permitir al vendedor responder una vez a cada comentario.
  - Criterio: Dada una respuesta, cuando se publica, entonces aparece bajo el comentario.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.2-04** `Must·MVP·Decidido` No mostrar valoraciones inventadas ni contadores de prueba social mientras el proyecto sea conceptual.
  - Criterio: Dado el modo conceptual, cuando se ve un perfil, entonces no hay estrellas de ejemplo.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-11.3 · Diseño y reglas de la valoración

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06, N-07 · Historias: US-13 · Fuentes: F-04

**3. Actores y roles**

Cliente

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 5

- Mercadona online: 0 sí
- Glovo: 0 sí, 5 parcial
- Too Good To Go: 0 sí
- Wetaca: 0 sí, 5 parcial
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-11.3-01** `Should·V2·Pendiente` Mostrar las estrellas como botones accesibles con «1 de 5»… «5 de 5».
  - Criterio: Dado el teclado, cuando elige 4, entonces el lector anuncia «4 de 5».
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.3-02** `Could·V2·Pendiente` Permitir editar la valoración durante 7 días.
  - Criterio: Dada una valoración de hace 3 días, cuando la edita, entonces se guarda.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.3-03** `Should·V2·Pendiente` Ordenar los comentarios del perfil del vendedor del más reciente al más antiguo.
  - Criterio: Dados 3 comentarios, cuando se ven, entonces el primero es el último publicado.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.3-04** `Must·V2·Pendiente` No permitir que el vendedor borre ni oculte valoraciones.
  - Criterio: Dado un vendedor, cuando busca una opción de borrar, entonces no existe.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido
- [ ] **RF-11.3-05** `Should·V2·Pendiente` Permitir al vendedor denunciar una valoración falsa para que la revise el admin.
  - Criterio: Dada una denuncia, cuando se envía, entonces aparece en la cola del admin.
  - Competencia: Mercadona ? · Glovo P · Too ? · Wetaca P · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-18 · Comunicación con vendedores

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 1_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 4 · Entrega y posventa (puesto 18 de 19 en la cascada) · **Actores:** Vendedor, admin · **Necesidades:** N-03 · **Historias:** — · **Prioridad:** Could

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05, RF-06, RF-07, RF-14, RF-08, RF-09, RF-10, RF-11 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-18.1 · Mensajes y avisos (4)

**Competencia**

4 requisitos atómicos · Poco extendido 4. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-18.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-18.1 · Mensajes y avisos

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-03 · Historias: — · Fuentes: S08

**3. Actores y roles**

Vendedor, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RF-18.1-01** `Should·V2·Pendiente` Permitir al admin enviar avisos a todos los vendedores o a los de una zona.
  - Criterio: Dado un aviso a Málaga, cuando se envía, entonces solo lo reciben los de Málaga.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-18.1-02** `Should·V2·Pendiente` Mostrar los avisos en el panel del vendedor hasta que los marque como leídos.
  - Criterio: Dado un aviso, cuando lo marca, entonces desaparece del inicio.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-18.1-03** `Should·V2·Pendiente` Permitir al vendedor escribir al equipo desde su panel con asunto y mensaje.
  - Criterio: Dado un mensaje, cuando se envía, entonces llega a la bandeja del admin.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RF-18.1-04** `Could·V3·Pendiente` Permitir al vendedor publicar 1 novedad al día (temporada, producto nuevo) que el admin revisa antes de mostrarla.
  - Criterio: Dada una segunda novedad el mismo día, cuando la envía, entonces ve «Solo una novedad al día».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RF-19 · Soporte y contacto

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 2_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**Fase:** 4 · Entrega y posventa (puesto 19 de 19 en la cascada) · **Actores:** Cliente, admin · **Necesidades:** N-06 · **Historias:** — · **Prioridad:** Should

**Supone que existe:** RF-01, RF-02, RF-13, RF-15, RF-03, RF-04, RF-12, RF-16, RF-17, RF-05, RF-06, RF-07, RF-14, RF-08, RF-09, RF-10, RF-11, RF-18 (se escribe como supuesto; no hay que esperar a que esté hecho).

**Subrequisitos (uno por subtarea)**

- RF-19.1 · Contacto (5)
- RF-19.2 · Bandeja de soporte del equipo (3)

**Competencia**

8 requisitos atómicos · Poco extendido 8. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-19.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RF-19.1 · Contacto

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06 · Historias: — · Fuentes: S01, S02

**3. Actores y roles**

Cliente, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 5

- Mercadona online: 0 sí
- Glovo: 5 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RF-19.1-01** `Must·V2·Pendiente` Ofrecer /contacto con formulario: nombre, correo, motivo (pedido, vender, cuenta, otro) y mensaje.
  - Criterio: Dado un mensaje enviado, cuando termina, entonces ve «Te respondemos en menos de 24 h laborables».
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-19.1-02** `Should·V2·Pendiente` Pedir el número de pedido si el motivo es «pedido».
  - Criterio: Dado el motivo pedido, cuando se elige, entonces aparece el campo número de pedido.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-19.1-03** `Should·V2·Pendiente` Mostrar un correo de contacto visible para quien no quiera usar el formulario.
  - Criterio: Dada /contacto, cuando se ve, entonces aparece el correo.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-19.1-04** `Should·V2·Pendiente` Atender con personas en horario laborable; indicar el horario en /contacto.
  - Criterio: Dada /contacto, cuando se ve, entonces muestra el horario.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-19.1-05** `Could·V3·Pendiente` Ofrecer chat de soporte dentro del pedido.
  - Criterio: Dado un pedido, cuando pulsa «Chatear», entonces abre el chat.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RF-19.2 · Bandeja de soporte del equipo

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-06 · Historias: — · Fuentes: S01

**3. Actores y roles**

Cliente, admin

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad**

_Por completar por el responsable._ Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Requisitos no funcionales que le aplican**

RNF-01 Seguridad · RNF-05 Accesibilidad · RNF-06 Compatibilidad

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 3 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RF-19.2-01** `Should·V2·Pendiente` Reunir en el panel los mensajes de contacto, de vendedores y de incidencias en una bandeja.
  - Criterio: Dado un mensaje de contacto, cuando llega, entonces aparece en la bandeja.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-19.2-02** `Should·V2·Pendiente` Asignar cada mensaje a una persona del equipo y marcarlo como resuelto.
  - Criterio: Dado un mensaje asignado, cuando se resuelve, entonces sale de pendientes.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RF-19.2-03** `Could·V2·Pendiente` Medir el tiempo de primera respuesta y mostrar la media semanal.
  - Criterio: Dadas respuestas de 2 y 4 h, cuando se ve, entonces la media es 3 h.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

### Requisitos no funcionales (RNF-01 a RNF-11)

_Responsable: — · Fecha: por asignar · Subtareas: 11_

Un requisito no funcional por subtarea, agrupados por característica de calidad (ISO/IEC 25010). Cada uno indica a qué procesos afecta.

#### RNF-01 · Seguridad

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 2_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Autorizar cada acción en el servidor según el rol

**Métrica y umbral:** 0 accesos fuera de rol · **Verificación:** Pruebas con cuentas de cada rol · **Procesos:** Todos · **Estado:** Decidido

**Subrequisitos (uno por subtarea)**

- RNF-01.1 · Autenticación y sesiones (5)
- RNF-01.2 · Autorización y datos de entrada (7)

**Competencia**

12 requisitos atómicos · Sin referente 12. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-01.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-01.1 · Autenticación y sesiones

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-07 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

0 accesos fuera de rol · Verificación: Pruebas con cuentas de cada rol

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

Todos

**15. Competencia**

Sin referente 5

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RNF-01.1-01** `Must·MVP·Decidido` Guardar las contraseñas solo con hash bcrypt de coste 12 o superior.
  - Criterio: Dada la base de datos, cuando se revisa, entonces no hay ninguna contraseña en claro.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.1-02** `Must·MVP·Pendiente` Servir toda la web por HTTPS con TLS 1.2 o superior y redirigir HTTP a HTTPS.
  - Criterio: Dada una petición http://, cuando llega, entonces se redirige con código 301.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.1-03** `Must·MVP·Pendiente` Usar cookies de sesión HttpOnly, Secure y SameSite=Lax.
  - Criterio: Dada la cookie de sesión, cuando se inspecciona, entonces tiene los tres atributos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.1-04** `Must·MVP·Pendiente` Regenerar el identificador de sesión al iniciar sesión.
  - Criterio: Dado un inicio de sesión, cuando termina, entonces el identificador es distinto del anterior.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.1-05** `Must·MVP·Pendiente` Proteger los formularios que cambian datos contra CSRF.
  - Criterio: Dada una petición sin token CSRF, cuando llega, entonces se rechaza con 403.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RNF-01.2 · Autorización y datos de entrada

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-07 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

0 accesos fuera de rol · Verificación: Pruebas con cuentas de cada rol

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

Todos

**15. Competencia**

Sin referente 7

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (7)**

- [ ] **RNF-01.2-01** `Must·MVP·Decidido` Comprobar el rol en el servidor en cada acción; ocultar un botón no basta.
  - Criterio: Dado un cliente que llama a la API de vendedor, cuando lo intenta, entonces recibe 403.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.2-02** `Must·MVP·Pendiente` Validar en el servidor todos los datos de entrada, aunque ya se validen en el navegador.
  - Criterio: Dado un precio negativo enviado a la API, cuando llega, entonces se rechaza con 400.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.2-03** `Must·MVP·Pendiente` Escapar todo texto de usuario al mostrarlo para evitar inyección de código (XSS).
  - Criterio: Dado un nombre «<script>», cuando se muestra, entonces aparece como texto.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.2-04** `Must·MVP·Pendiente` Usar consultas parametrizadas en la base de datos.
  - Criterio: Dado un buscador con «' OR 1=1», cuando busca, entonces no devuelve datos ajenos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.2-05** `Must·MVP·Decidido` Guardar los secretos (claves de API, Asana) solo en variables de entorno del servidor, nunca en el frontend ni en el repositorio.
  - Criterio: Dado el repositorio, cuando se busca un token, entonces no aparece.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.2-06** `Should·V2·Pendiente` Limitar a 100 peticiones por minuto e IP las rutas públicas de la API.
  - Criterio: Dadas 101 peticiones en un minuto, cuando llega la 101, entonces recibe 429.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-01.2-07** `Must·MVP·Pendiente` Comprobar el tipo real de los archivos subidos y rechazar los ejecutables.
  - Criterio: Dado un .exe renombrado a .jpg, cuando se sube, entonces se rechaza.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-02 · Privacidad (RGPD y LOPDGDD)

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 2_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Pedir solo datos necesarios y consentimiento explícito para alergias

**Métrica y umbral:** Datos de salud solo con consentimiento · **Verificación:** Checklist RGPD · **Procesos:** RF-01, RF-12 · **Estado:** Decidido

**Subrequisitos (uno por subtarea)**

- RNF-02.1 · Minimización y consentimiento (4)
- RNF-02.2 · Derechos y conservación (4)

**Competencia**

8 requisitos atómicos · Poco extendido 8. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-02.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-02.1 · Minimización y consentimiento

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-07 · Historias: — · Fuentes: S01, S07

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

Datos de salud solo con consentimiento · Verificación: Checklist RGPD

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-01, RF-12

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 4 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RNF-02.1-01** `Must·MVP·Decidido` Pedir solo los datos necesarios para cada función; ningún campo opcional se marca por defecto.
  - Criterio: Dados los formularios, cuando se revisan, entonces ninguna casilla opcional viene marcada.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RNF-02.1-02** `Must·MVP·Decidido` Tratar las alergias como datos de salud: consentimiento explícito, separado y revocable.
  - Criterio: Dado el consentimiento retirado, cuando se consulta la base de datos, entonces las alergias no están.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RNF-02.1-03** `Must·MVP·Pendiente` Publicar la política de privacidad con responsable, finalidades, base jurídica, plazos y derechos.
  - Criterio: Dada /privacidad, cuando se lee, entonces contiene esos cinco apartados.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RNF-02.1-04** `Must·MVP·Pendiente` Mostrar un aviso de cookies que permita rechazarlas todas con el mismo esfuerzo que aceptarlas.
  - Criterio: Dado el aviso, cuando se ve, entonces «Rechazar» y «Aceptar» están al mismo nivel.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RNF-02.2 · Derechos y conservación

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-07 · Historias: — · Fuentes: S01

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

Datos de salud solo con consentimiento · Verificación: Checklist RGPD

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-01, RF-12

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 4 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RNF-02.2-01** `Must·MVP·Pendiente` Atender las solicitudes de acceso, rectificación y supresión en un máximo de 30 días.
  - Criterio: Dada una supresión pedida el 1 de mayo, cuando se resuelve, entonces es antes del 31 de mayo.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RNF-02.2-02** `Must·MVP·Decidido` No mostrar datos del cliente a los vendedores: solo productos y cantidades.
  - Criterio: Dado un subpedido, cuando lo abre el vendedor, entonces no ve nombre, correo ni dirección.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RNF-02.2-03** `Must·V2·Pendiente` Mostrar al repartidor solo nombre, dirección, teléfono e indicaciones, y solo el día de la entrega.
  - Criterio: Dado un pedido de mañana, cuando el repartidor lo busca hoy, entonces no ve la dirección.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RNF-02.2-04** `Should·V3·Pendiente` Borrar las cuentas sin actividad durante 3 años, avisando 30 días antes.
  - Criterio: Dada una cuenta inactiva 3 años, cuando vence el aviso, entonces se borra.
  - Competencia: Mercadona ? · Glovo S · Too ? · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-03 · Rendimiento

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 3_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Cargar catálogo y carrito con rapidez en móvil 4G

**Métrica y umbral:** ≤ 2,5 s · **Verificación:** Medición de rendimiento web · **Procesos:** RF-04, RF-05 · **Estado:** Hipótesis

**Subrequisitos (uno por subtarea)**

- RNF-03.1 · Tiempos de carga (4)
- RNF-03.2 · Servidor (2)
- RNF-03.3 · Peso de la página (2)

**Competencia**

8 requisitos atómicos · Sin referente 8. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-03.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-03.1 · Tiempos de carga

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

≤ 2,5 s · Verificación: Medición de rendimiento web

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-04, RF-05

**15. Competencia**

Sin referente 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RNF-03.1-01** `Must·MVP·Hipótesis` Mostrar el contenido principal de la portada en 2,5 s o menos en móvil con 4G (LCP).
  - Criterio: Dada una medición Lighthouse móvil, cuando se ejecuta, entonces el LCP es ≤ 2,5 s.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-03.1-02** `Should·MVP·Pendiente` Mantener el desplazamiento de elementos al cargar (CLS) por debajo de 0,1.
  - Criterio: Dada una medición, cuando se ejecuta, entonces el CLS es < 0,1.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-03.1-03** `Should·MVP·Pendiente` Responder a cada interacción en menos de 200 ms (INP).
  - Criterio: Dada una medición, cuando se pulsa «Añadir», entonces el INP es < 200 ms.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-03.1-04** `Should·MVP·Pendiente` Servir las fotos en WebP con lazy loading fuera de la primera pantalla.
  - Criterio: Dada la página de productos, cuando se carga, entonces solo se descargan las fotos visibles.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RNF-03.2 · Servidor

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

≤ 2,5 s · Verificación: Medición de rendimiento web

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-04, RF-05

**15. Competencia**

Sin referente 2

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RNF-03.2-01** `Should·V2·Hipótesis` Responder el 95 % de las peticiones de la API en menos de 500 ms con 100 usuarios a la vez.
  - Criterio: Dada una prueba de carga de 100 usuarios, cuando termina, entonces el p95 es < 500 ms.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-03.2-02** `Should·MVP·Hipótesis` Generar la cesta de la IA en 10 s o menos en el 95 % de los casos.
  - Criterio: Dadas 20 peticiones, cuando se miden, entonces 19 tardan ≤ 10 s.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RNF-03.3 · Peso de la página

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

≤ 2,5 s · Verificación: Medición de rendimiento web

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-04, RF-05

**15. Competencia**

Sin referente 2

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (2)**

- [ ] **RNF-03.3-01** `Should·V2·Pendiente` Mantener el JavaScript inicial de la portada por debajo de 200 KB comprimido.
  - Criterio: Dada la compilación, cuando se mide, entonces el JS inicial es < 200 KB.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-03.3-02** `Should·MVP·Pendiente` Cargar las fuentes con font-display: swap para que el texto se vea desde el principio.
  - Criterio: Dada una carga lenta, cuando empieza, entonces el texto se ve con la fuente de sistema.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-04 · Usabilidad

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 2_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Permitir completar la primera compra sin ayuda

**Métrica y umbral:** ≥ 4 de 5 usuarios en ≤ 5 min · **Verificación:** Test con 5 estudiantes · **Procesos:** RF-04 a RF-06 · **Estado:** Hipótesis

**Subrequisitos (uno por subtarea)**

- RNF-04.1 · Facilidad de uso (6)
- RNF-04.2 · Consistencia visual (6)

**Competencia**

12 requisitos atómicos · Sin referente 12. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-04.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-04.1 · Facilidad de uso

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-03 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

≥ 4 de 5 usuarios en ≤ 5 min · Verificación: Test con 5 estudiantes

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-04 a RF-06

**15. Competencia**

Sin referente 6

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RNF-04.1-01** `Must·MVP·Decidido` Que el visitante entienda qué es FOOD4ALL y elija una de las tres acciones principales en menos de 30 s.
  - Criterio: Dados 5 estudiantes, cuando ven la portada, entonces al menos 4 eligen en < 30 s.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.1-02** `Must·MVP·Hipótesis` Que un estudiante complete su primera compra sin ayuda en 5 minutos o menos.
  - Criterio: Dados 5 estudiantes, cuando prueban, entonces al menos 4 lo consiguen en ≤ 5 min.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.1-03** `Should·MVP·Hipótesis` Que un vendedor publique su primer producto sin ayuda en 10 minutos o menos.
  - Criterio: Dados 3 vendedores, cuando prueban, entonces al menos 2 lo consiguen en ≤ 10 min.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.1-04** `Must·MVP·Pendiente` Escribir todos los textos de interfaz en español claro, en segunda persona y sin tecnicismos.
  - Criterio: Dada una revisión de textos, cuando se hace, entonces no hay términos técnicos sin explicar.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.1-05** `Must·MVP·Pendiente` Mostrar cada error junto al campo que lo causa, con qué hacer para corregirlo.
  - Criterio: Dado un error, cuando aparece, entonces dice cómo arreglarlo.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.1-06** `Must·MVP·Decidido` Mantener el texto siempre sobre fondo liso, nunca sobre fotos o texturas.
  - Criterio: Dada una revisión visual, cuando se hace, entonces ningún texto va sobre imagen salvo el hero con oscurecido.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

##### RNF-04.2 · Consistencia visual

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

≥ 4 de 5 usuarios en ≤ 5 min · Verificación: Test con 5 estudiantes

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-04 a RF-06

**15. Competencia**

Sin referente 6

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RNF-04.2-01** `Must·MVP·Decidido` Usar Fraunces 600 en títulos y Figtree a 17 px con interlineado 1,6 en el texto.
  - Criterio: Dada una revisión, cuando se inspeccionan los estilos, entonces se cumplen esas fuentes.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.2-02** `Must·MVP·Decidido` Reservar el naranja --accent #D9822B solo para lo que se pulsa.
  - Criterio: Dada una revisión, cuando se buscan usos del naranja, entonces todos son botones o enlaces de acción.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.2-03** `Must·MVP·Decidido` No usar azules, morados ni degradados decorativos.
  - Criterio: Dada una revisión, cuando se buscan esos colores, entonces no aparecen.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.2-04** `Should·MVP·Decidido` Usar radio de 10 px en tarjetas y forma píldora en botones y chips.
  - Criterio: Dada una revisión, cuando se miden, entonces se cumplen los radios.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.2-05** `Must·MVP·Decidido` No usar emojis como iconos; solo iconos SVG de trazo de 1,6 px.
  - Criterio: Dada una revisión, cuando se buscan emojis en la interfaz, entonces no hay.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-04.2-06** `Could·MVP·Decidido` Animar las respuestas al ratón entre 180 y 240 ms y las apariciones al hacer scroll en 600 ms.
  - Criterio: Dada una revisión, cuando se miden, entonces las duraciones están en ese rango.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-05 · Accesibilidad (WCAG 2.2 AA)

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 1_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Cumplir WCAG 2.2 nivel AA

**Métrica y umbral:** Contraste ≥ 4,5:1; uso con teclado · **Verificación:** Revisión automática y manual · **Procesos:** Todos · **Estado:** Decidido

**Subrequisitos (uno por subtarea)**

- RNF-05.1 · Percepción y operación (7)

**Competencia**

7 requisitos atómicos · Sin referente 7. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-05.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-05.1 · Percepción y operación

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-02 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

Contraste ≥ 4,5:1; uso con teclado · Verificación: Revisión automática y manual

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

Todos

**15. Competencia**

Sin referente 7

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (7)**

- [ ] **RNF-05.1-01** `Must·MVP·Decidido` Mantener un contraste de 4,5:1 en texto normal y 3:1 en texto grande e iconos.
  - Criterio: Dada una revisión con axe, cuando se ejecuta, entonces no hay errores de contraste.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-05.1-02** `Must·MVP·Pendiente` Permitir usar toda la web solo con teclado, con el foco siempre visible.
  - Criterio: Dada una compra completa con teclado, cuando se hace, entonces se termina sin ratón.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-05.1-03** `Must·MVP·Decidido` Dar a todas las zonas pulsables al menos 44 × 44 px.
  - Criterio: Dada una revisión, cuando se mide, entonces ningún botón es menor de 44 px.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-05.1-04** `Must·MVP·Pendiente` Dar texto alternativo a todas las imágenes con contenido y vacío a las decorativas.
  - Criterio: Dada una revisión, cuando se ejecuta, entonces no hay imágenes sin alt.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-05.1-05** `Must·MVP·Decidido` Respetar prefers-reduced-motion: sin animaciones si el usuario lo pide.
  - Criterio: Dado el ajuste activado, cuando se carga la portada, entonces nada se mueve.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-05.1-06** `Must·MVP·Pendiente` Etiquetar todos los campos de formulario con <label> visible.
  - Criterio: Dada una revisión, cuando se ejecuta, entonces ningún campo carece de etiqueta.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-05.1-07** `Should·MVP·Pendiente` Permitir ampliar el texto al 200 % sin perder contenido ni funciones.
  - Criterio: Dado un zoom del 200 %, cuando se usa el carrito, entonces todo sigue accesible.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-06 · Compatibilidad

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 1_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Funcionar en móvil y en ordenador

**Métrica y umbral:** Desde 360 px; 2 últimas versiones de 4 navegadores · **Verificación:** Pruebas de interfaz · **Procesos:** Todos · **Estado:** Decidido

**Subrequisitos (uno por subtarea)**

- RNF-06.1 · Navegadores y pantallas (4)

**Competencia**

4 requisitos atómicos · Sin referente 4. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-06.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-06.1 · Navegadores y pantallas

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

Desde 360 px; 2 últimas versiones de 4 navegadores · Verificación: Pruebas de interfaz

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

Todos

**15. Competencia**

Sin referente 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RNF-06.1-01** `Must·MVP·Pendiente` Funcionar en las 2 últimas versiones de Chrome, Firefox, Safari y Edge.
  - Criterio: Dadas las pruebas de interfaz, cuando se ejecutan en los 4, entonces todas pasan.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-06.1-02** `Must·V2·Decidido` Adaptarse a pantallas desde 360 px de ancho sin desplazamiento horizontal.
  - Criterio: Dado un móvil de 360 px, cuando se navega, entonces no hay scroll horizontal.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-06.1-03** `Must·MVP·Decidido` Mostrar siempre el modo claro por defecto; el oscuro solo si se activa.
  - Criterio: Dado un sistema en modo oscuro, cuando se abre la web, entonces se ve en claro.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-06.1-04** `Could·V3·Pendiente` Poder instalarse como aplicación web (PWA) con icono y pantalla de inicio.
  - Criterio: Dado Chrome en Android, cuando se abre la web, entonces ofrece instalarla.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-07 · Fiabilidad y disponibilidad

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 1_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** No perder un pedido pagado aunque falle un subpedido

**Métrica y umbral:** 100 % de pedidos conservados · **Verificación:** Prueba con fallo simulado · **Procesos:** RF-06, RF-07 · **Estado:** Decidido

**Subrequisitos (uno por subtarea)**

- RNF-07.1 · Disponibilidad y datos (5)

**Competencia**

5 requisitos atómicos · Sin referente 5. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-07.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-07.1 · Disponibilidad y datos

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

100 % de pedidos conservados · Verificación: Prueba con fallo simulado

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-06, RF-07

**15. Competencia**

Sin referente 5

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RNF-07.1-01** `Should·V3·Hipótesis` Estar disponible el 99,5 % del tiempo mensual, sin contar mantenimientos avisados.
  - Criterio: Dado un mes, cuando se mide, entonces la caída total es ≤ 3,6 h.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-07.1-02** `Must·MVP·Pendiente` No perder ningún pedido pagado aunque falle un subpedido o un servicio externo.
  - Criterio: Dado un fallo simulado del servicio de correo, cuando se paga, entonces el pedido se guarda igual.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-07.1-03** `Must·V2·Pendiente` Hacer copia de seguridad diaria de la base de datos y conservarla 30 días.
  - Criterio: Dada una restauración de prueba, cuando se hace, entonces se recuperan los datos del día anterior.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-07.1-04** `Must·MVP·Pendiente` Registrar los errores del servidor con fecha, ruta y usuario anonimizado.
  - Criterio: Dado un error 500, cuando ocurre, entonces aparece en el registro.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-07.1-05** `Must·MVP·Pendiente` Si un servicio externo (IA, correo) no responde, seguir funcionando y mostrar un aviso claro.
  - Criterio: Dada la IA caída, cuando se abre el asistente, entonces ve «El asistente no está disponible ahora. Puedes comprar desde el catálogo».
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-08 · Transparencia y cumplimiento

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 1_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Indicar que la cesta la propone una IA y separar lo patrocinado

**Métrica y umbral:** 100 % de propuestas etiquetadas · **Verificación:** Revisión de pantallas · **Procesos:** RF-04, RF-12 · **Estado:** Decidido

**Subrequisitos (uno por subtarea)**

- RNF-08.1 · IA, publicidad y comercio (6)

**Competencia**

6 requisitos atómicos · Poco extendido 6. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-08.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-08.1 · IA, publicidad y comercio

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-05, N-07 · Historias: — · Fuentes: F-04, S07

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

100 % de propuestas etiquetadas · Verificación: Revisión de pantallas

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-04, RF-12

**15. Competencia**

Poco extendido 6

- Mercadona online: 0 sí, 5 no
- Glovo: 5 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 5 sí, 1 no
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (6)**

- [ ] **RNF-08.1-01** `Must·MVP·Decidido` Identificar como IA todo contenido generado por el asistente (Reglamento (UE) 2024/1689).
  - Criterio: Dada una respuesta de la IA, cuando se muestra, entonces lleva la etiqueta.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RNF-08.1-02** `Must·V2·Decidido` Identificar como «Patrocinado» todo contenido pagado (DSA 2022/2065).
  - Criterio: Dado un contenido pagado, cuando se muestra, entonces lleva la etiqueta.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market N · Open ? → Poco extendido
- [ ] **RNF-08.1-03** `Must·V2·Pendiente` Explicar a los vendedores cómo se ordenan los productos en el catálogo (Reglamento P2B 2019/1150).
  - Criterio: Dadas las condiciones de vendedor, cuando se leen, entonces explican el orden.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RNF-08.1-04** `Must·MVP·Pendiente` Publicar aviso legal con identificación del prestador (LSSI).
  - Criterio: Dada /aviso-legal, cuando se lee, entonces identifica al titular.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RNF-08.1-05** `Must·MVP·Decidido` Marcar la web como «Proyecto conceptual» y los datos como «de ejemplo» mientras no haya operación real.
  - Criterio: Dado el pie de página, cuando se ve, entonces aparece el aviso.
  - Competencia: Mercadona N · Glovo S · Too ? · Wetaca ? · Market S · Open ? → Poco extendido
- [ ] **RNF-08.1-06** `Must·V2·Pendiente` Declarar el rol jurídico de FOOD4ALL en las condiciones una vez decidido (intermediario, operador o mixto).
  - Criterio: Dadas las condiciones, cuando se leen, entonces indican el rol.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-09 · Trazabilidad alimentaria

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 1_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Registrar vendedor, lote o caducidad y fecha de cada producto entregado

**Métrica y umbral:** 100 % de líneas con lote · **Verificación:** Auditoría de pedidos de prueba · **Procesos:** RF-03, RF-08 · **Estado:** Decidido

**Subrequisitos (uno por subtarea)**

- RNF-09.1 · Registro de lotes (4)

**Competencia**

4 requisitos atómicos · Poco extendido 4. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-09.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-09.1 · Registro de lotes

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-05 · Historias: — · Fuentes: S06, S07

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

100 % de líneas con lote · Verificación: Auditoría de pedidos de prueba

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-03, RF-08

**15. Competencia**

Poco extendido 4

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 4 sí
- Market Wagon: 4 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (4)**

- [ ] **RNF-09.1-01** `Must·MVP·Decidido` Registrar para cada línea entregada: vendedor, producto, lote o caducidad y fecha de recogida y de entrega (Reglamento 178/2002).
  - Criterio: Dado un pedido entregado, cuando se consulta, entonces cada línea tiene esos datos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open ? → Poco extendido
- [ ] **RNF-09.1-02** `Must·V2·Pendiente` Poder listar en menos de 1 hora todos los clientes que recibieron un lote concreto.
  - Criterio: Dado un lote, cuando se busca, entonces sale la lista de pedidos afectados.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open ? → Poco extendido
- [ ] **RNF-09.1-03** `Must·V2·Pendiente` Conservar los registros de trazabilidad al menos 5 años.
  - Criterio: Dado un pedido de hace 4 años, cuando se consulta, entonces su trazabilidad está.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open ? → Poco extendido
- [ ] **RNF-09.1-04** `Should·V2·Pendiente` Registrar las temperaturas de la cadena de frío en el hub y en el reparto.
  - Criterio: Dado un reparto de refrigerados, cuando termina, entonces hay registro de temperatura.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca S · Market S · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-10 · Mantenibilidad

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 1_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Poder sustituir el motor de IA simulado por uno real sin tocar el resto

**Métrica y umbral:** Solo cambia la configuración · **Verificación:** Revisión de diseño (Sprint 4) · **Procesos:** RF-12 · **Estado:** Decidido

**Subrequisitos (uno por subtarea)**

- RNF-10.1 · Código y documentación (5)

**Competencia**

5 requisitos atómicos · Sin referente 5. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-10.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-10.1 · Código y documentación

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Must · **Entrega:** MVP · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-01, N-02 · Historias: — · Fuentes: 

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

Solo cambia la configuración · Verificación: Revisión de diseño (Sprint 4)

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-12

**15. Competencia**

Sin referente 5

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (5)**

- [ ] **RNF-10.1-01** `Must·MVP·Pendiente` Separar el código en capas: presentación, lógica de negocio y acceso a datos.
  - Criterio: Dada una revisión de diseño, cuando se hace, entonces ninguna página accede directamente a la base de datos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-10.1-02** `Must·MVP·Decidido` Poder sustituir el motor de IA simulado por uno real cambiando solo la configuración (patrón Adapter).
  - Criterio: Dado un cambio de proveedor de IA, cuando se hace, entonces solo cambia la configuración.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-10.1-03** `Must·MVP·Decidido` Usar siempre los tokens de diseño de tokens.css; ningún color suelto en los componentes.
  - Criterio: Dada una búsqueda de «#» en los componentes, cuando se hace, entonces no hay colores sueltos.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-10.1-04** `Should·V2·Pendiente` Cubrir con pruebas automáticas cada criterio de aceptación Must.
  - Criterio: Dado un criterio Must, cuando se busca su prueba, entonces existe.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente
- [ ] **RNF-10.1-05** `Must·MVP·Decidido` Mantener actualizada la guía docs/DISENO.md con cada cambio visual.
  - Criterio: Dado un cambio visual, cuando se hace el commit, entonces incluye la guía actualizada.
  - Competencia: Mercadona ? · Glovo ? · Too ? · Wetaca ? · Market ? · Open ? → Sin referente

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

#### RNF-11 · Sostenibilidad

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 1_

**Responsable:** por asignar · **Revisor:** por asignar · **Fecha:** por asignar

**El sistema deberá:** Usar embalaje reutilizable y medir el desperdicio del hub

**Métrica y umbral:** kg por semana y destino · **Verificación:** Registro semanal · **Procesos:** RF-08 · **Estado:** Hipótesis

**Subrequisitos (uno por subtarea)**

- RNF-11.1 · Embalaje y desperdicio (3)

**Competencia**

3 requisitos atómicos · Poco extendido 3. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RNF-11.

**Hecho cuando:** todos los subrequisitos están cerrados y revisados.

##### RNF-11.1 · Embalaje y desperdicio

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

**Responsable:** por asignar · **Revisor:** por asignar · **Prioridad:** Should · **Entrega:** V2 · **Estado:** Pendiente

**1. Descripción**

_Por completar por el responsable._

**2. Origen**

Necesidades: N-08 · Historias: — · Fuentes: F-04

**3. Actores y roles**

Todos los roles

**4. Supuestos de entrada y salida**

_Por completar por el responsable._

**5. Métrica, umbral y verificación**

kg por semana y destino · Verificación: Registro semanal

**13. Criterios de aceptación**

Uno por requisito atómico (en la lista de abajo, «Criterio»).

**14. Procesos a los que afecta**

RF-08

**15. Competencia**

Poco extendido 3

- Mercadona online: 0 sí
- Glovo: 0 sí
- Too Good To Go: 0 sí, 3 parcial
- Wetaca: 0 sí
- Market Wagon: 0 sí
- Open Food Network: 0 sí

**16. Fuera de alcance**

_Por completar por el responsable._

**Requisitos atómicos (3)**

- [ ] **RNF-11.1-01** `Should·V2·Pendiente` Usar embalaje reutilizable o reciclable en todas las entregas.
  - Criterio: Dada una entrega, cuando se revisa el embalaje, entonces todo es reutilizable o reciclable.
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RNF-11.1-02** `Should·V2·Pendiente` Medir el desperdicio del hub en kg por semana y su destino (Ley 1/2025).
  - Criterio: Dada una semana, cuando se consulta, entonces aparecen los kg y su destino.
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca ? · Market ? · Open ? → Poco extendido
- [ ] **RNF-11.1-03** `Should·V2·Decidido` Priorizar la donación de excedentes aptos frente al desecho.
  - Criterio: Dado un excedente apto, cuando se decide su destino, entonces la primera opción es donar.
  - Competencia: Mercadona ? · Glovo ? · Too P · Wetaca ? · Market ? · Open ? → Poco extendido

**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.

### Product Backlog (13 historias)

_Responsable: — · Fecha: por asignar · Subtareas: 13_

Historias ordenadas por valor y por la cascada. Las 9 primeras forman el MVP. Puntos: escala 1, 2, 3, 5, 8, se revisan en cada Sprint Planning.

#### #1 US-01 · Registrarme con mi correo y elegir mi zona

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

Como estudiante, quiero registrarme con mi correo y elegir mi zona, para comprar a vendedores de mi ciudad.

**Proceso:** RF-01 · **Prioridad:** Must · **Puntos:** 3 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-01 (Gherkin, en su ficha).

#### #2 US-02 · Darme de alta con mis datos y mi registro sanitario

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

Como vendedor, quiero darme de alta con mis datos y mi registro sanitario, para empezar a vender.

**Proceso:** RF-02 · **Prioridad:** Must · **Puntos:** 5 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-02 (Gherkin, en su ficha).

#### #3 US-09 · Aprobar o rechazar las solicitudes de vendedores

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

Como administrador, quiero aprobar o rechazar las solicitudes de vendedores, para que solo vendan negocios con registro sanitario.

**Proceso:** RF-13 · **Prioridad:** Must · **Puntos:** 3 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-13 (Gherkin, en su ficha).

#### #4 US-10 · Publicar productos con ficha completa (origen, alérgenos, conservación)

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

Como vendedor, quiero publicar productos con ficha completa (origen, alérgenos, conservación), para que el cliente compre con confianza.

**Proceso:** RF-03 · **Prioridad:** Must · **Puntos:** 5 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-03 (Gherkin, en su ficha).

#### #5 US-03 · Ver de quién es cada producto y sus alérgenos

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

Como estudiante, quiero ver de quién es cada producto y sus alérgenos, para comprar con confianza.

**Proceso:** RF-04 · **Prioridad:** Must · **Puntos:** 3 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-04 (Gherkin, en su ficha).

#### #6 US-04 · Añadir productos de varios vendedores a un solo carrito

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

Como estudiante, quiero añadir productos de varios vendedores a un solo carrito, para no hacer varios pedidos.

**Proceso:** RF-05 · **Prioridad:** Must · **Puntos:** 5 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-05 (Gherkin, en su ficha).

#### #7 US-05 · Pagar una sola vez todo el carrito

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

Como estudiante, quiero pagar una sola vez todo el carrito, para no repetir el pago con cada vendedor.

**Proceso:** RF-06 · **Prioridad:** Must · **Puntos:** 8 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-06 (Gherkin, en su ficha).

#### #8 US-11 · Ver y confirmar solo la parte del pedido que me corresponde

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

Como vendedor, quiero ver y confirmar solo la parte del pedido que me corresponde, para prepararla a tiempo.

**Proceso:** RF-07 · **Prioridad:** Must · **Puntos:** 5 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-07 (Gherkin, en su ficha).

#### #9 US-12 · Comprobar que cada subpedido recibido coincide con el pedido

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

Como operador del hub, quiero comprobar que cada subpedido recibido coincide con el pedido, para entregar un único paquete completo.

**Proceso:** RF-08 · **Prioridad:** Must · **Puntos:** 8 · **Entrega:** MVP · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-08 (Gherkin, en su ficha).

#### #10 US-08 · Pedir a la IA una cesta para mi presupuesto y mis días

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

Como estudiante, quiero pedir a la IA una cesta para mi presupuesto y mis días, para no tener que planificar yo solo.

**Proceso:** RF-12 · **Prioridad:** Should · **Puntos:** 8 · **Entrega:** Versión 2 · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-12 (Gherkin, en su ficha).

#### #11 US-06 · Seguir mi pedido hasta la entrega

_Responsable: por asignar (propuesta: Miguel) · Fecha: por asignar · Subtareas: 0_

Como estudiante, quiero seguir mi pedido hasta la entrega, para saber cuándo estar en casa.

**Proceso:** RF-09 · **Prioridad:** Should · **Puntos:** 3 · **Entrega:** Versión 2 · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-09 (Gherkin, en su ficha).

#### #12 US-07 · Reclamar un producto en mal estado con una foto

_Responsable: por asignar (propuesta: Sebastián) · Fecha: por asignar · Subtareas: 0_

Como estudiante, quiero reclamar un producto en mal estado con una foto, para recibir reembolso o sustitución.

**Proceso:** RF-10 · **Prioridad:** Should · **Puntos:** 5 · **Entrega:** Versión 2 · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-10 (Gherkin, en su ficha).

#### #13 US-13 · Valorar productos y vendedores

_Responsable: por asignar (propuesta: Juan Antonio) · Fecha: por asignar · Subtareas: 0_

Como estudiante, quiero valorar productos y vendedores, para ayudar a otros a elegir.

**Proceso:** RF-11 · **Prioridad:** Should · **Puntos:** 2 · **Entrega:** Versión 2 · **Estado:** Por hacer

**Criterios de aceptación:** los de los subrequisitos de RF-11 (Gherkin, en su ficha).
