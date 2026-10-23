# FOOD4ALL · Recorridos por la competencia (Hito 2)

23/10/2026 · Investigación para el Hito 2, para adjuntar en Asana · Preparada con IA: los recorridos los hizo un asistente (Christina) con el guion de otro (Melchizedek), y Sebastián decide qué se adopta. Los prompts están en `prompts/`.

Material de partida: `recorridos/RESULTADOS.md` (observaciones tal cual, competidor por competidor), `recorridos/registro.tsv` (fecha, hora y URL de cada captura), `recorridos/textos/` (condiciones copiadas de las webs) y las 98 capturas de `recorridos/`. Para que el repositorio no crezca demasiado, se pasaron a JPEG de calidad 80 (18 MB en vez de 48 MB; el texto se sigue leyendo). Los PNG originales se quedan fuera del repositorio, en la carpeta de trabajo de Sebastián.

## 1. Objetivo

La valoración del 21/10 pidió que cada hallazgo del comparativo tuviera «fuente, observación verificable, inferencia, alternativa y requisito afectado», y la Clase 5 avisa: «no comparar precios, cobertura o vendedores sin controlar fecha, región, código postal y condiciones de acceso». El objetivo era comprobar **por dentro** cómo compra un estudiante en cada competidor (buscar → ficha → carrito → inicio del pago) y confirmar o desmentir los hallazgos del comparativo que estaban sin verificar.

## 2. Pasos realizados

1. **Guion** (`PARA-CHRISTINA-competencia.md`, en la carpeta de trabajo): 8 competidores, qué comprobar en cada uno y siete reglas: no pagar, no crear cuentas, no usar datos personales, código postal 29010 (Málaga), solo las cookies necesarias, no saltarse bloqueos y marcar como «No verificado» lo que no se vea.
2. **Recorrido** el 23/10/2026, de 15:14 a 16:10, con un navegador automatizado (Chrome 155 a 1440 px, desde España). En cada web: portada → buscar «tomate» → ficha → añadir dos productos (de dos vendedores, si había varios) → carrito → inicio del pago, y **parar** ahí.
3. **Evidencia:** 98 capturas con su hora y URL, y los textos de las condiciones oficiales (Mercadona, Too Good To Go, Wetaca y KnowEats).
4. **Desvíos, declarados:** Mercadona no da servicio en el 29010 con la web nueva, así que el carrito se vio con el 46001 (Valencia). Market Wagon solo funciona en EE. UU. (se usó el 46204, Indianápolis). Open Food Network no tiene tiendas en Málaga (se usó ALEKO, en Vitoria). La dirección completa que pedían algunas webs fue la de un edificio público: la Facultad de Ciencias de la UMA.
5. **Límites:** lo que solo se ve con cuenta o al pagar (franjas exactas, tarifas finales, sustituciones) queda como «No verificado». Local Food Marketplace no tiene tienda pública: se vende como software. Lo observado en una tienda de Open Food Network es de esa tienda y no se puede generalizar.

## 3. Información recogida

Son hechos observados. Las cifras son del 23/10/2026 y de la ubicación indicada.

| Competidor | Varios vendedores en un carrito | Pedido mínimo | Envío o tarifa | Franja o cierre | Si falta algo | Cancelación | Información del productor | Recomendaciones |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Glovo** (29010) | **No:** un carrito por tienda, sin ningún aviso | Existe (cifra no visible) | 2,99 € o 6,99 € según la dirección (promoción «Gratis») | No: solo un tiempo estimado (15-25 min) | No verificado | No verificado | Ninguna: nombre, precio y foto | «Otros también compraron», sin explicar |
| **Mercadona** (46001) | No aplica (un vendedor) | **60 €** (no avisa en el carrito) | **8,20 €** de «tarifa de servicio» (no sale en el carrito) | Tramos de lunes a sábado, de 7 a 22 h, tras identificarse | **Preferencia del cliente:** sustituir por similar o no servir; nunca por algo más caro | Hasta la hora del correo de confirmación | Categoría y precio por kg; ni origen ni productor | «Productos relacionados» |
| **Too Good To Go** (web) | No aplica: todo va por la app | No verificado | Recogida en tienda; packs al 25-50 % | Hora de recogida fijada por la tienda | La tienda cancela; reembolso «a discreción» | Hasta el fin de la recogida | Alérgenos solo en la recogida | No hay en la web |
| **Wetaca** (29010) | **En parte:** platos y «De nuestros proveedores» en un solo carrito y una entrega | **22 €** | Gratis esta semana (tarifa normal no visible) | **Cierre el miércoles a las 23:59**; franja acotada por correo días antes | No verificado (incidencias: «compensaciones») | Sin coste; según el cierre del miércoles | Platos muy detallados; del proveedor, **ni nombre ni origen** | Platos «similares», sin explicar |
| **Market Wagon** (46204) | **Sí:** dos granjas, un pedido, una entrega («Multiple Vendors» en los términos) | **No hay mínimo** | Suscripción opcional de envío gratis (13,95 $/mes) | Día a elegir (martes o jueves); «no podemos dar horas exactas» | «Avisad a soporte» | No verificado | **La mejor:** granja, condado, prácticas, reseñas con fecha y chat con el productor | Trending y Popular; sin IA |
| **Open Food Network · Katuma** (Vitoria) | **Sí:** dos productoras en el carrito de un hub | Sin mínimo en esa tienda | 3,50 € (bici de carga) o gratis acordado con la productora | **Ciclos:** cierre el lunes a las 20:00 y entrega el jueves de 17 a 19 h o el viernes de 11 a 13 h | No verificado | No verificado | «Desde [productora]», con enlace | Sin IA; **etiqueta ambiental A-E que explica en qué se basa** |
| **KnowEats** | No aplica (un vendedor) | **28 €** | Solo con la dirección | Viernes o lunes; franja de mañana (dos páginas se contradicen en el día de corte) | No verificado | **Solo 24 h después de pagar** | Plato detallado; extras sin productor | Sin IA |
| **Local Food Marketplace** | No verificado: no hay tienda pública | — | — | — | — | — | — | — |

**Hallazgos del comparativo** (`docs/requisitos/FOOD4ALL_comparativo_revisado.md`):
- **Confirmados:** #1 (Glovo no junta tiendas en un carrito), #2 (Market Wagon: varios productores en una entrega), #4 (Wetaca: cierre, pausas y cancelación), #6 (Mercadona: mínimo de 60 € y tarifa de 8,20 €, ahora en la web oficial), #7 (Glovo: el envío cambia con la dirección) y #9 (Too Good To Go: sin la app no se ve nada).
- **Confirmados en parte:** #3 (Market Wagon: el productor se ve muy bien, pero la hora de corte no) y #8 (Glovo: hay recomendaciones, pero no se sabe en qué se basan).

## 4. Comparación con FOOD4ALL

Inferencias sobre lo observado:

- **Carrito con varios vendedores** (nuestro núcleo, RF-05 a RF-07): Glovo **no lo tiene**. Market Wagon y Open Food Network sí, pero **no operan en Málaga**. Wetaca es lo más parecido en España (proveedores dentro del mismo pedido), pero **oculta quién es el proveedor**. Esto apoya que el hueco existe en nuestra zona. **No prueba que el estudiante lo quiera:** eso lo dicen o no las entrevistas.
- **Producto y precio** (las prioridades 1 y 2 del Product Owner): Glovo, Mercadona y Wetaca no dicen el origen ni el productor. Solo Market Wagon y Open Food Network lo hacen. Enseñar quién lo produce y de dónde viene es un diferencial real en España.
- **Precio total visible:** Mercadona tiene un mínimo de 60 € y una tarifa de 8,20 € que **no aparecen en el carrito**, y KnowEats y Glovo esconden el envío hasta poner la dirección. Nuestra N-CAT-03 («precio final, sin sorpresas») nos distingue si se cumple desde el carrito.
- **Mínimos:** van de 0 € (Market Wagon y Open Food Network) a 60 € (Mercadona). Nuestra hipótesis H-01 (una compra mínima de 10-15 €) está en la parte baja.
- **IA:** ninguno usa una IA visible. Las recomendaciones que hay («Otros también compraron», «similares») no explican nada. Lo único que se explica es la etiqueta ambiental de Open Food Network. Coincide con poner la IA en tercer lugar y con exigir que explique sus propuestas (N-IA-02).

## 5. Problemas reales y cómo los resuelven

| Problema | Cómo lo resuelven (observado) | Qué tenemos en FOOD4ALL |
| --- | --- | --- |
| **Falta un producto** | Mercadona: el cliente elige de antemano «sustituir por similar» o «no servir», y nunca se sustituye por algo más caro. Too Good To Go: la tienda cancela hasta una hora antes. Market Wagon: el cliente avisa a soporte. Wetaca: «compensaciones» | El vendedor declara la falta, se resta del total con un reembolso de prueba y hay un sustituto propuesto con hora de corte (RF-07.3, `FOOD4ALL_estados_pedido.md`). **El cliente no elige su preferencia de antemano** |
| **Un vendedor falla** | Market Wagon y Open Food Network: no se ve. Too Good To Go: la tienda puede cancelar la reserva | Alerta al administrador y aviso de posible retraso (RF-07.3-01, RF-07.5-02); el pedido global se conserva y se cae solo ese grupo (RF-07.6) |
| **La entrega llega tarde o no hay nadie** | Market Wagon: «no podemos dar horas exactas» (llega por la tarde). KnowEats: «no podemos asegurar una hora». Wetaca: acota la franja por correo unos días antes. Mercadona: si no hay nadie, llaman o envían un SMS para fijar otro tramo | Entrega fallida y reprogramar (RF-08.4-03); aviso 30 minutos antes en V2 (RF-08.7-01). **No hay nada para la entrega que llega tarde** |
| **Unir los carritos de varios vendedores** | Market Wagon: un pedido «que consolida las transacciones con varios vendedores», y puntos de recogida comunitarios («Market Host»). Open Food Network: el hub junta a sus productoras y trabaja por **ciclos** con apertura y cierre | Subpedidos por vendedor y consolidación en el hub, en una entrega con frío y seco separados (RF-07.1, RF-08.3-01). Recogida en un punto, en V3 (RF-08.4-05) |
| **Cancelar** | Mercadona: hasta la hora del correo de confirmación. Wetaca: hasta el miércoles a las 23:59. KnowEats: solo 24 h después de pagar. Too Good To Go: hasta el fin de la recogida | El cliente cancela antes de la hora de cierre de su franja; «Cancelado» es una propuesta (comité de cambio de la Clase 11) |
| **Costes escondidos** | Mercadona y KnowEats no muestran el mínimo ni las tarifas en el carrito | N-CAT-03 y RF-06: precio final antes de pagar |

## 6. Posibles mejoras para FOOD4ALL

Son **propuestas**: ninguna está aprobada ni aplicada. Las decide Sebastián como Product Owner, con el equipo, y cada una que se apruebe se anota en el registro de cambios de `docs/requisitos/FOOD4ALL_linea_base_h2.md`.

| N.º | Mejora | Lo hace | Requisito afectado | Por qué |
| --- | --- | --- | --- | --- |
| M-01 ✅ C-14 (RF-07.3-09, Should · V2) | Que el cliente elija, al pagar o por cada producto, «sustituir por uno parecido» o «no servir», y que el sustituto nunca sea más caro | Mercadona | RF-07.3 (faltas y sustitutos), RF-06 | Evita preguntar en cada falta y protege el presupuesto (N-PLA-02) |
| M-02 ✅ C-15 (RF-08.4-06, RF-08.2-05 y -06; Must · MVP) | Avisar al cliente si la entrega va a llegar tarde, con una nueva hora estimada o la opción de cambiar de franja | Wetaca (franja acotada por correo); Mercadona (contacto si no está) | RF-08.4, RF-08.7-01 (hoy en V2), RF-09 | Cubre el hueco de la entrega tardía |
| M-03 | Ciclos de pedido explícitos: cada franja tiene su hora de cierre, se ve desde el carrito y explica hasta cuándo se puede cancelar | Open Food Network, Wetaca | RF-06.2-03 (hora de cierre visible), RF-13.6 | Deja clara la consolidación y da evidencia para la regla de cancelación |
| M-04 | Mostrar desde el carrito el mínimo que falta, la tarifa de envío y el total final | Lo contrario de lo que hacen Mercadona y KnowEats | RF-05, RF-06; N-CAT-03 | Precio claro, sin sorpresas: es la prioridad 2 del PO |
| M-05 | Ficha de productor completa en cada producto: nombre, zona, cómo produce y reseñas | Market Wagon | RF-03, RF-04; RF-11 (valoraciones, hoy en V2) | Es el diferencial del producto (prioridad 2) y responde a E2, que echaba de menos opiniones |
| M-06 | Punto de recogida comunitario como alternativa a la entrega en casa | Market Wagon (Market Host), Open Food Network | RF-08.4-05 (hoy en V3); D-03 | Reduce el riesgo de H-02 (esperar una franja) y el coste del reparto |
| M-07 | Mirar el catálogo y llenar el carrito sin cuenta; pedirla solo al pagar | Market Wagon, Open Food Network, KnowEats | RF-01, RF-05 | Menos barreras para probar. Glovo y Mercadona piden cuenta antes |
| M-08 | Que toda recomendación (también la de la IA) diga en qué se basa | Etiqueta ambiental A-E de Open Food Network | RF-12; N-IA-02 | La IA va en tercer lugar y la confianza es baja: si explica, se puede comprobar |

## 7. Siguientes pasos

1. Sebastián decide qué mejoras se adoptan, y se anotan en el registro de cambios.
2. Los hallazgos confirmados se pasan a `docs/requisitos/FOOD4ALL_comparativo_revisado.md`.
3. Este documento se adjunta en Asana al bloque del comparativo. Lo adjunta una persona del equipo, no el asistente.
