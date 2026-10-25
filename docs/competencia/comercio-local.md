# Pequeño comercio local: qué hay y qué cambia en la landing

Investigación de escritorio del 26/10/2026 sobre cómo venden hoy los pequeños comercios y productores de alimentación de Málaga, Sevilla y Granada. Inspira, pero **no valida** ninguna necesidad: para eso hacen falta entrevistas a vendedores, que todavía no hay (F-08).

- **Hecho:** dato con fuente, enlazada y fechada.
- **Inferencia:** conclusión nuestra a partir de los hechos.
- **Hipótesis:** está por comprobar.

No se nombran comercios concretos: el repositorio es público y la landing usa vendedores inventados.

## Hallazgos

| # | Tipo | Hallazgo | Fuente (consulta: 26/10/2026) | ¿Qué cambia en la landing? |
|---|---|---|---|---|
| CL-01 | Hecho | Málaga tiene una plataforma municipal de compra online con mercados municipales y comercios: recogida en tienda, taquilla o domicilio, envío gratis y franjas de 2 h (lunes a viernes 10–14 y 16–20; sábados 10–14). No dice claramente si un pedido puede juntar varios comercios. | [Yo Compro en Málaga](https://yocomproenmalaga.com/); [El Español, 20/05/2024](https://www.elespanol.com/malaga/20240520/comprar-online-mercados-comercios-tradicionales-malaga-pagina-web/856664746_0.html) | Sí: es el competidor más cercano y no estaba en la tabla «¿En qué se diferencia?» |
| CL-02 | Hecho | Sevilla tiene una plataforma de los mercados de abastos con recogida o reparto según el código postal. Avisa: «En cada compra solo se permiten pedidos de un único mercado o agrupación». | [Mercados de Sevilla](https://www.mercadosdesevilla.es/es-ES/buscar); [Ayuntamiento de Sevilla, 2024](https://www.sevilla.org/actualidad/noticias/2024/el-gobierno-municipal-amplia-y-actualiza-la-plataforma-de-comercio-electronico-para-los-mercados-de-abastos) | Sí: la diferencia de Food4All (vendedores de distintos sitios en un pedido) se puede decir con un dato |
| CL-03 | Hecho (búsqueda sin resultado) | En Granada no se encontró una plataforma municipal parecida para el Mercado de San Agustín ni para otros mercados. **No verificado** con el Ayuntamiento. | Búsqueda web del 26/10/2026 | No. Idea para el equipo (ver abajo) |
| CL-04 | Hecho | Las plataformas de reparto cobran al comercio entre el 15 % y el 35 % por pedido según el plan; Just Eat, del 7 al 10 % si el cliente recoge. Son cifras de blogs del sector, orientativas. | [Qamarero](https://qamarero.com/blog/comisiones-delivery-cuanto-cobran-realmente-las-plataformas/); [Foodlus, 2026](https://foodlus.com/blog/cuanto-cobra-glovo-restaurantes-comisiones); [Fooderise, 2026](https://www.fooderise.com/en/platform-fees) | No: la comisión de Food4All sigue «Por definir» (D-02). Referencia para el equipo |
| CL-05 | Hecho | Venta directa en Andalucía (Decreto 163/2016): el titular de una explotación puede vender productos primarios sin transformar en la explotación, en mercados y a comercios minoristas «sin intermediarios», tras inscribirse en el SIVDA. La página oficial no menciona la venta a domicilio ni por internet. | [Junta de Andalucía, venta directa](https://www.juntadeandalucia.es/organismos/agriculturapescaaguaydesarrollorural/areas/industrias-agroalimentarias/produccion/paginas/venta-directa-productos-primarios.html); [BOJA 210/2016](https://www.juntadeandalucia.es/boja/2016/210/1) | Sí, poco: el formulario solo pedía «registro sanitario», sin decir qué hacer si no se tiene (RST-05 admite «una exención justificada») |
| CL-06 | Inferencia | Por CL-05, un agricultor en venta directa **puede que no pueda** vender a través de Food4All, que es un intermediario. **No verificado**: hay que preguntarlo (D-01, rol jurídico). | CL-05 | No: pregunta legal para el equipo |
| CL-07 | Hecho | El 30,8 % de los consumidores combina tienda física y online para la compra de alimentación, y el 7,2 % compra solo online (3,5 % en 2020). La tienda física sigue siendo la referencia de confianza. | [ASEDAS vía Autónomos y Emprendedor, 11/08/2026](https://www.autonomosyemprendedor.es/articulo/todo-digital/compra-alimentos-online-duplica-mas-mitad-clientes-confia-tiendas-fisicas/20260811142256055360.html) | No. Contexto de mercado para el equipo |
| CL-08 | Hecho | El Kit Digital estatal cerró el 31/10/2025; las noticias de su reapertura en 2026 no tienen fuente oficial. La Junta tiene líneas de ayuda a la digitalización y la venta online del comercio, sin convocatoria abierta confirmada. | [Becas y Ayudas, 2026](https://becasyayudas.com/ayudas/ayudas-digitalizacion-andalucia-2026/); [Rpidev, 2026](https://www.rpidev.com/subvenciones/ayudas-andalucia/) | No |
| CL-09 | Hecho | En las tres provincias hay negocios que venden cestas de fruta y verdura de productores con reparto a domicilio. Cada uno es su propia tienda, con sus días y zonas de reparto. | Webs comerciales de cestas (consultadas el 26/10/2026; no se nombran) | No. Inferencia: el productor que ya reparte lo hace por su cuenta |
| CL-10 | Hecho (búsqueda sin resultado) | No se encontraron estudios con el coste de envío de los pequeños productores en España. | Búsqueda web del 26/10/2026 | No: no se afirma nada sobre el ahorro logístico del vendedor |

## Cambios hechos en la landing

1. **Tabla «¿En qué se diferencia?» (`/comprar`)** (CL-01, CL-02): nueva columna «Plataformas de mercados municipales», el competidor más cercano.
2. **Formulario de alta y requisitos mínimos (`/vender`)** (CL-05, RST-05): el campo admite el registro sanitario **o el motivo de una exención**, y los requisitos dicen lo mismo que la RST-05.

## Ideas para el equipo (no aplicadas: las decide el equipo)

- **Competencia:** añadir las plataformas municipales de Málaga y Sevilla al comparativo. Para la defensa: Food4All junta vendedores de distintos mercados y productores que no están en ningún mercado, para planificar varios días.
- **Preguntas para las entrevistas a vendedores (F-08):** ¿vendes ya por la plataforma de tu mercado o por otra?, ¿qué comisión te parecería razonable?, ¿tienes registro sanitario o vendes en venta directa?, ¿repartes tú?
- **Legal (D-01):** ¿puede un productor en venta directa (Decreto 163/2016) vender a través de un intermediario como Food4All?
- **Comisión (D-02):** las plataformas de reparto cobran entre el 15 y el 35 % (CL-04). Es una referencia, no un objetivo.
- **Zona inicial (Hipótesis):** en Granada no se encontró plataforma municipal (CL-03). Habría que comprobarlo antes de decidir nada.
