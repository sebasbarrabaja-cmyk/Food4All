# Precios de ejemplo de la landing

Los productos de la landing son inventados, y sus precios también: sirven para que el carrito y el pedido de ejemplo enseñen un total. En la web van siempre con el aviso «Precios de ejemplo, meramente representativos».

**Criterio (25/10/2026):** precio de supermercado de octubre de 2026 y un poco por encima, porque es producto local de pequeño productor. Donde no se encontró una fuente, el precio es una **estimación** y así se indica. No se afirma que FOOD4ALL sea más barato que nadie (H-03, RST-03).

Los importes están en `frontend/src/data/examples.js` (campo `price`). Si cambia uno, se cambia aquí también.

| Producto | Cantidad | Precio de ejemplo | Referencia (octubre de 2026) |
|---|---|---|---|
| Pan de masa madre | 1 pieza | 4,50 € | Panaderías artesanas: 2,65–7,50 € por hogaza [4] |
| Molletes | 4 uds. | 2,40 € | Estimación |
| Naranjas | 2 kg | 3,60 € | Mayorista ~1,10 €/kg (Mercamadrid) [3] |
| Aguacates | 3 uds. | 3,90 € | Estimación (venta al público 8,27 €/kg en agosto [3]) |
| Lentejas | 1 kg | 2,20 € | Pardina de supermercado: 1,85 €/kg [6] |
| Aceite de oliva virgen extra | 1 l | 4,90 € | Supermercados: 4,15–4,75 €/l [1] |
| Huevos camperos | 12 uds. | 4,20 € | Supermercados: 3,20–4,69 € la docena [2] |
| Queso fresco de cabra | 250 g | 3,90 € | Marca blanca 2,95 €; con DOP 5,49 € [5] |
| Picos de aceite | 250 g | 2,20 € | Estimación |
| Torta de aceite | 6 uds. | 2,40 € | Inés Rosales, 6 uds.: 2,15 € [7] |
| Tomate de huerta | 1 kg | 3,20 € | Mayorista ~2,30 €/kg; el tomate sube un 15,9 % en septiembre [3] |
| Calabacín | 1 kg | 1,90 € | Origen, Almería: 0,62–0,80 €/kg [3] |
| Manzanas | 1 kg | 2,60 € | Mayorista Golden ~1,90 €/kg [3] |
| Potaje de garbanzos (2 raciones) | 700 g | 6,50 € | Estimación |

**Comprobación:** el pedido de ejemplo suma 19,10 € sin la entrega, por encima de la compra mínima de 10–15 € (H-01). En el panel del vendedor, las ventas de los pedidos confirmados suman 8,40 €. La miel del panel del vendedor no tiene precio a propósito: es el ejemplo de ficha incompleta, que no se publica.

## Fuentes

1. [El precio del aceite de oliva virgen extra, cadena a cadena](https://www.merca2.es/2026/10/24/precio-aceite-oliva-supermercados-6-2481084/), Merca2, 24/10/2026.
2. [El precio de los huevos sube: cuánto cuestan en 6 supermercados](https://www.elconfidencialdigital.com/articulo/gourmet/precio-huevos-sube-cuanto-cuestan-6-supermercados/202610171734141494620.html), El Confidencial Digital, 17/10/2026; [Ahorramás, camperos y ecológicos](https://www.ahorramas.com/frescos/huevos/camperos-y-ecologicos/).
3. [Mercasa, precios de mercados mayoristas](https://www.mercasa.es/precios-y-mercados-mayoristas/) (13–16/10/2026); [análisis de José David Díaz](https://www.tiempo.com/noticias/plantas/los-precios-de-las-frutas-y-hortalizas-que-vienen-analizados-hoy-20-de-octubre-por-el-agronomo-jose-david-diaz.html), 20/10/2026; [pizarra de precios de Almería](https://www.fhalmeria.com/pizarra-de-precios/almeria); [OCU vía Qué.es](https://www.que.es/2026/10/04/precio-alimentos-ocu-tomate-septiembre/), 04/10/2026; [ComeFruta](https://comefruta.es/precios-de-mercado-frutas-de-temporada).
4. [Amasa](https://amasa.es/), [Turris](https://turris.es/es/pan/), [Panaderías Julia](http://www.panaderiasjulia.es/comprar/pan-de-payes-1-kg) (páginas sin fecha).
5. [Queso fresco de cabra Hacendado 250 g](https://finditapp.es/product/21865/queso-fresco-de-cabra-hacendado); [Carrefour Classic 250 g](https://www.carrefour.es/supermercado/queso-fresco-de-cabra-carrefour-classic-250-g/R-VC4AECOMM-593312/p); [Alcampo, queso de cabra](https://www.compraonline.alcampo.es/categories/frescos/quesos/queso-de-cabra/OC350104).
6. [Lenteja pardina Hacendado 1 kg, RadarSuper](https://radarsuper.com/mercadona/p/lenteja-pardina-hacendado-categoria-extra-paquete), 22/10/2026; [Carrefour Classic 1 kg](https://www.carrefour.es/supermercado/lenteja-pardina-categoria-extra-classic-carrefour-1-kg/R-616401946/p).
7. [Tortas de aceite Inés Rosales en Mercadona](https://tulistadelmerca.es/productos-mercadona/tortas-de-aceite-ines-rosales/), 07/10/2026.
