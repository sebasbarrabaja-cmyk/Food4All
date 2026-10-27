# FOOD4ALL · Revisión del comparativo de empresas (F-04)

v1 · 22/10/2026 · Revisión de Sebastián sobre el adjunto de Juan Antonio del 09/10/2026 («Esquema comparativo de empresas de alimentación») · Revisión: pendiente (Juan Antonio)

El comparativo original se conserva tal cual en Asana («Requisitos temporales → Información de otras empresas»). Esta revisión no lo sustituye: lo convierte en un **benchmark exploratorio con hallazgos trazables**, como pide la valoración provisional del Hito 2. Para cada hallazgo se indican la fuente, la observación verificable, la inferencia que hacemos, la explicación alternativa y el requisito afectado.

## 1. Cómo leerlo

- **El original no registra método ni fuentes**: no dice qué página se consultó, en qué fecha ni para qué país. Por eso su fiabilidad es **baja** (F-04).
- Las afirmaciones que pudimos comprobar en páginas públicas el 19/10/2026 están en el benchmark F-10 (fuentes S01 a S10, Anexo B de la especificación). Si un hallazgo está ahí, se cita; si no, queda **sin verificar**.
- **Una característica de un competidor no es una necesidad de FOOD4ALL.** Apoya, como mucho, una hipótesis de diseño que hay que contrastar con usuarios locales (F-07, F-08) y con la operación.

## 2. Hallazgos

| # | Hallazgo del original | Fuente y verificación | Observación verificable | Inferencia para FOOD4ALL | Explicación alternativa | Requisito afectado |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | El delivery liga el carrito a un solo establecimiento | F-04; en F-10, Glovo «un pedido = un local» salía solo de F-04. **Verificado en Glovo el 23/10/2026** en los recorridos por la competencia (`docs/competencia/recorridos/RESULTADOS.md`, capturas glovo-03, -08, -10, -11 y -12) | Verificada en Glovo: «Cuando añadas productos de un establecimiento, aparecerán aquí»; con un producto de Carrefour en el carrito, el de Eroski sale vacío, cada tienda guarda su carrito y tiene su propio «Ir al pago», sin ningún aviso. No comprobado en otras apps de delivery | Un carrito de varios vendedores con una sola entrega es poco común | El delivery no lo ofrece porque su promesa es la inmediatez: unir tiendas retrasaría el pedido, no es una carencia sin más | RF-05.1, RF-05.2 (N-CAR-01, Hipótesis) |
| 2 | Market Wagon combina varios productores en un carrito y una entrega | F-10: S07 (condiciones de uso) y S08 (orientación al vendedor) | Verificada: «un pedido consolida varios vendedores»; los vendedores llenan las cajas en el centro | Hay un referente que funciona con este modelo, en EE. UU. | Mercado, densidad y hábitos distintos; que funcione allí no prueba que funcione en Málaga, Sevilla o Granada | RF-05, RF-07, RF-08 |
| 3 | Market Wagon no revisa cada caja | F-10: S08 | Verificada: «no inspecciona el contenido de cada caja» | Verificar línea a línea en el hub puede ser un diferencial (RF-08.2-02) | Puede que no lo hagan porque es caro; nuestro diferencial tiene un coste operativo sin estimar | RF-08.2 (N-HUB-03, N-CAT-01) |
| 4 | Las ventanas de pedido con cierre (Wetaca, OFN) «reducen drásticamente» costes y merma | F-04 sin fuente; F-10 verifica que existen las ventanas (S06, S09), no su efecto | Verificada la práctica (cierre semanal, ciclos de pedido); **no** su efecto en costes ni merma | Una hora de cierre por franja puede facilitar la preparación y la ruta | El ahorro depende del volumen y de la densidad; también puede venir de la cocina centralizada de Wetaca, no de la ventana | RF-06.2-03, D-03, D-04 |
| 5 | La atención humana «supera» a los bots en producto fresco | F-04 sin fuente | No verificada | Ofrecer resolución por personas en 24 h puede generar confianza (RF-10.2-01) | Puede que el usuario prefiera rapidez (bot) a trato humano; es la hipótesis H-04 | RF-10.2 (N-INC-01, Hipótesis) |
| 6 | Mercadona exige un pedido mínimo y cobra el envío | F-10: S05 (Genbeta, 2025) | Verificada en prensa: 50 € de mínimo y 8,20 € de envío | Un mínimo bajo (10–15 €) sería una diferencia | Prensa, no la web oficial (bloqueada); puede cambiar. Un mínimo bajo puede no cubrir la logística (H-01) | RF-05.4 (H-01) |
| 7 | Glovo cobra el envío según la distancia | F-10: S01; recorridos del 23/10/2026 (glovo-06 y glovo-14) | Verificada. En los recorridos, la misma tienda (Carrefour) marca 2,99 € desde la UMA (29010) y 6,99 € desde El Palo (29018), los dos tachados como «Gratis» por una promoción | Un solo envío fijo por pedido es más fácil de entender | El envío por distancia refleja el coste real; un fijo puede ser deficitario | RF-05.4-01 |
| 8 | Delivery con recomendaciones por historial, hora y clima; Mercadona sin recomendaciones | F-04 sin fuente (Glovo parcial en F-10) | No verificada en detalle | Hay espacio para recomendaciones útiles y transparentes (RF-12) | El usuario puede no querer recomendaciones; N-IA-01 está «No confirmada» (C-08) | RF-12 (N-IA-01) |
| 9 | Too Good To Go: packs con más del 66 % de descuento y recogida a hora fija | F-04; la web de TGTG bloqueó la consulta | No verificada | Hay demanda de precio bajo y aprovechamiento | Es otro producto (excedentes sorpresa); no compite por la compra planificada | RF-04.9-02 «Aprovechamiento» (N-VEN-03, V2) |
| 10 | Wetaca: suscripción semanal flexible con pausas | F-10: S06 | Verificada | La suscripción por beneficios es viable en el sector | Wetaca vende platos propios; la recurrencia en ingredientes de varios vendedores no está probada | RF-14 (Could, V3) |
| 11 | Mercadona: «precios siempre bajos», sin promociones ni anuncios de terceros | F-04 sin fuente | No verificada | Competir en precio con Mercadona es difícil: no se promete ahorro (H-03) | — | RF-12.4-04, RF-15.4-03 |

## 3. Qué cambia en la especificación

- F-04 aparece como fuente con **fiabilidad baja** en el catálogo de necesidades. Ninguna necesidad se apoya solo en F-04 para pasar de hipótesis.
- Los hallazgos 4, 5, 8 y 11 dejan de presentarse como hechos. En la especificación y en el contexto se citan como hipótesis.
- Los hallazgos 2, 3, 6 y 7 se apoyan en F-10, que sí cita página y fecha.
- El hallazgo 1 queda verificado en Glovo con los recorridos del 23/10/2026 (capturas con fecha, hora y URL en `docs/competencia/recorridos/registro.tsv`). Solo prueba lo que hace Glovo, no todo el delivery. *Revisión de Juan Antonio, 23/10/2026, con ayuda del asistente.*

## 4. Pendiente

- Juan Antonio: confirmar o corregir las inferencias. **Páginas del original: aportadas el 23/10/2026** (ver abajo).

**Páginas que usó Juan Antonio para el original** (las indica él el 23/10/2026; no anotó la fecha exacta de consulta, que fue antes del 09/10/2026, ni qué apartado de cada web):

- Open Food Network: https://openfoodnetwork.net/?locale=es_US (hallazgo 4).
- Local Food Marketplace: https://home.localfoodmarketplace.com/ (no tiene un hallazgo propio en la tabla).
- Market Wagon: https://dairy.marketwagon.com/ (hallazgos 2 y 3).

Con esto el original ya tiene fuentes para Open Food Network y Market Wagon. El resto de empresas del original (Glovo, Mercadona, Wetaca, Too Good To Go) siguen sin página indicada. Si cambia la fiabilidad de F-04 lo decide el equipo.
- Comprobar a mano, con cuenta o app, lo que quedó sin verificar (lista «Por verificar a mano» del Anexo B de la especificación).
