# FOOD4ALL · Matriz de trazabilidad

v0.4 · 22/10/2026 · Generada con `benchmark/asana.js`: no se edita a mano. Fuentes: `necesidades.js`, el Excel de requisitos y la especificación (historias y RNF).

Responde a [B6] «Matriz de trazabilidad inicial». Columnas: necesidad, fuente, requisito, historia, prioridad y entrega, criterios de aceptación y RNF. Las de Caso de uso (Hito 3), Clase (Hito 4) y Prueba (Hito 5) quedan vacías para los próximos hitos.

**Cómo leerla.** Una relación escrita no prueba que la fuente sea válida ni que el enlace sea correcto: eso lo comprueba el revisor de cada bloque y lo deja en un comentario de Asana. El estado de cada necesidad dice qué tipo de evidencia tiene (`FOOD4ALL_necesidades.md`).

## 1. Cobertura por necesidad

| Necesidad | Estado | Fuentes | Procesos | Subrequisitos | Historias | Requisitos (MVP) | Observación |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **N-PLA-01** Saber qué comprar y qué comer los próximos días, planificando en vez de improvisar | Indicio | F-01, F-02, F-07 (E3, E4) | RF-04, RF-05, RF-06, RF-09, RF-12, RF-15 | 13 | US-08, US-14, US-19 | 21 (12) | — |
| **N-PLA-02** Controlar cuánto gasta en comida y ajustarse a un presupuesto | Indicio | F-01, F-07 (E4; E1 comparativo) | RF-01, RF-03, RF-04, RF-05, RF-06, RF-07, RF-08, RF-12, RF-14, RF-15 | 14 | US-08, US-19 | 20 (5) | — |
| **N-CAR-01** Comprar producto local de varios vendedores en un solo pedido y un solo pago, sin ir de tienda en tienda | Indicio | F-04, F-10, F-07 (E4; E3 en contra del producto, no de la necesidad) | RF-01, RF-03, RF-04, RF-05, RF-06, RF-07, RF-12, RF-13, RF-15, RNF-03, RNF-04, RNF-05, RNF-06, RNF-07, RNF-10 | 44 | US-01, US-04, US-05, US-14 | 162 (137) | — |
| **N-ENT-01** Recibir todo en una sola entrega, en una franja conocida | Hipótesis | F-04, F-05 | RF-05, RF-06, RF-08, RF-09, RF-13, RF-15 | 16 | US-06, US-12 | 33 (27) | — |
| **N-CAD-01** Gestionar cantidades, conservación y caducidades para no tirar comida | Indicio | F-01, F-03, F-07 (E3, E4) | RF-03, RF-08, RF-12, RNF-11 | 5 | US-08 | 8 (3) | — |
| **N-IA-01** Que el asistente simplifique la decisión sin obligarle a explicar demasiado | No confirmada | F-02, F-07 (en contra: E3, E4) | RF-12, RNF-03, RNF-10 | 5 | US-08 | 10 (10) | — |
| **N-IA-02** Saber cuándo habla con una IA y distinguir una recomendación de la publicidad | Obligación legal | F-03 (Reglamento de IA 2024/1689; DSA 2022/2065) | RF-04, RF-12, RNF-08 | 5 | US-08 | 11 (9) | — |
| **N-CAT-01** Confiar en el origen, la calidad y la trazabilidad de lo que compra | Indicio | F-03 (Reglamento 178/2002), F-04, F-07 (E4; E1 y E2 comparativos) | RF-03, RF-04, RF-07, RF-08, RF-11, RF-13, RF-16, RF-17, RNF-09 | 20 | US-03, US-10, US-13 | 36 (14) | — |
| **N-CAT-02** Conocer ingredientes y alérgenos antes de pagar | Obligación legal | F-03 (Reglamento 1169/2011, art. 14) | RF-01, RF-03, RF-04, RF-06, RF-08, RF-12 | 9 | US-03, US-05, US-10 | 14 (14) | — |
| **N-CAT-03** Recibir información veraz: precio final, costes, condiciones y avisos, sin sorpresas | Obligación legal | F-03 (RDL 1/2007; LSSI; P2B 2019/1150) | RF-03, RF-04, RF-05, RF-06, RF-08, RF-11, RF-13, RF-14, RF-15, RF-17, RNF-08 | 25 | US-05 | 35 (18) | — |
| **N-CUE-01** Que sus datos personales y de salud estén protegidos y solo se usen para lo que aceptó | Obligación legal | F-03 (RGPD; LOPDGDD) | RF-01, RF-02, RF-06, RF-07, RF-09, RF-13, RNF-01, RNF-02 | 22 | US-01 | 61 (53) | — |
| **N-INC-01** Tener una solución rápida, atendida por personas, si algo llega mal | Hipótesis | F-04 (fiabilidad baja: no cita fuentes) | RF-10, RF-13, RF-15, RF-19 | 9 | US-07, US-17 | 34 (17) | — |
| **N-VEN-01** Llegar a clientes nuevos y ganar visibilidad | Hipótesis | F-01 (comercio tradicional 10,6 %) | RF-02, RF-03, RF-04, RF-11, RF-12, RF-15, RF-18 | 11 | US-10 | 15 (10) | — |
| **N-VEN-02** Vender online sin montar una web propia ni gestionar envíos | Hipótesis | F-01, F-04 | RF-01, RF-03, RF-16, RF-18, RNF-04 | 8 | US-02, US-18 | 16 (9) | — |
| **N-VEN-03** Reducir la merma del género que no vende a tiempo | Hipótesis | F-03 (Ley 1/2025) | RF-04 | 1 | — | 1 (0) | Solo fuera del MVP; sin historia |
| **N-VEN-04** Saber qué preparar y para cuándo: pedido claro y franja de recogida | Hipótesis | F-06, F-12 | RF-07, RF-16 | 7 | US-11, US-15 | 13 (12) | — |
| **N-VEN-05** Cobrar con transparencia: comisión y liquidación claras | Hipótesis | F-12 (críticas a la tarifa de Market Wagon) | RF-02, RF-16, RF-17 | 5 | US-16 | 11 (1) | — |
| **N-VEN-06** Conocer con claridad los requisitos y los pasos del alta | Hipótesis | F-03 | RF-01, RF-02, RF-16 | 8 | US-02 | 24 (22) | — |
| **N-VEN-07** Admitir solo vendedores con registro sanitario o con una exención justificada | Obligación legal | F-03 (RD 191/2011; RD 1086/2020) | RF-01, RF-02, RF-13 | 6 | US-02, US-09 | 9 (9) | — |
| **N-HUB-01** Tener rutas y franjas de recogida fiables, con aviso de «pedido listo» | Hipótesis | F-06, F-12 | RF-07, RF-08 | 3 | US-12 | 6 (3) | — |
| **N-HUB-02** Mantener la cadena de frío y separar frío y seco | Obligación legal | F-03 (Reglamento 852/2004), F-12 | RF-08 | 4 | US-12 | 4 (2) | — |
| **N-HUB-03** Verificar cada pedido y resolver las faltas antes de entregar | Hipótesis | F-06, F-12 | RF-07, RF-08, RF-13 | 6 | US-11, US-12 | 16 (13) | — |

## 2. Matriz por subrequisito

| Requisito | Necesidades | Fuentes de la necesidad | Historia | Prioridad · Entrega | Alcance | Depende de | Criterios de aceptación | RNF | Caso de uso (H3) | Clase (H4) | Prueba (H5) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **RF-01.1** Punto de entrada y pantalla de acceso | N-CAR-01, N-CUE-01, N-VEN-06 | F-03, F-04, F-07, F-10 | US-01 | Must · MVP | MVP | — | RF-01.1-01 … RF-01.1-12 (12) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.2** Inicio de sesión con correo y contraseña | N-CAR-01, N-CUE-01, N-VEN-07 | F-03, F-04, F-07, F-10 | US-01 | Must · MVP | MVP | — | RF-01.2-01 … RF-01.2-18 (18) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.3** Inicio de sesión con Google | N-CAR-01, N-CUE-01, N-VEN-07 | F-03, F-04, F-07, F-10 | US-01 | Must · MVP | MVP | Servicio externo: Google | RF-01.3-01 … RF-01.3-09 (9) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.4** Registro de cuenta de cliente | N-CAR-01, N-CUE-01 | F-03, F-04, F-07, F-10 | US-01 | Must · MVP | MVP | — | RF-01.4-01 … RF-01.4-11 (11) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.5** Verificación del correo | N-CUE-01 | F-03 | US-01 | Must · MVP | MVP | Servicio externo: correo | RF-01.5-01 … RF-01.5-04 (4) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.6** Recuperación de contraseña | N-CUE-01, N-CAR-01 | F-03, F-04, F-07, F-10 | US-01 | Must · MVP | MVP | Servicio externo: correo | RF-01.6-01 … RF-01.6-07 (7) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.7** Menú de usuario y cierre de sesión | N-CAR-01, N-CUE-01, N-VEN-02 | F-01, F-03, F-04, F-07, F-10 | US-01 | Must · MVP | MVP | — | RF-01.7-01 … RF-01.7-08 (8) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.8** Mis datos y direcciones | N-CAR-01, N-CUE-01 | F-03, F-04, F-07, F-10 | US-01 | Must · MVP | MVP | D-03 hub y zonas | RF-01.8-01 … RF-01.8-06 (6) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.9** Preferencias, dieta y alergias | N-CAT-02, N-CUE-01, N-PLA-02 | F-01, F-03, F-07 | US-01 | Must · MVP | MVP | — | RF-01.9-01 … RF-01.9-04 (4) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-01.10** Privacidad y baja de la cuenta | N-CUE-01 | F-03 | US-01 | Must · MVP | MVP | — | RF-01.10-01 … RF-01.10-04 (4) | RNF-01, RNF-02, RNF-05, RNF-06 | | | |
| **RF-02.1** Página «Quiero vender» | N-VEN-06, N-VEN-01, N-VEN-05 | F-01, F-03, F-12 | US-02 | Must · MVP | MVP | D-02 comisión | RF-02.1-01 … RF-02.1-05 (5) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-02.2** Formulario de solicitud | N-VEN-06, N-VEN-07, N-CUE-01 | F-03 | US-02 | Must · MVP | MVP | D-03 hub y zonas; Servicio externo: correo | RF-02.2-01 … RF-02.2-10 (10) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-02.3** Documentación | N-CUE-01, N-VEN-06, N-VEN-07 | F-03 | US-02 | Must · MVP | MVP | — | RF-02.3-01 … RF-02.3-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-02.4** Estados de la solicitud | N-VEN-06, N-VEN-07 | F-03 | US-02 | Must · MVP | MVP | Servicio externo: correo | RF-02.4-01 … RF-02.4-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-02.5** Activación y formación | N-VEN-06 | F-03 | US-02 | Must · MVP | MVP | — | RF-02.5-01 … RF-02.5-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-02.6** Datos del negocio y perfil público | N-VEN-01, N-VEN-05 | F-01, F-12 | US-02 | Should · MVP | MVP | — | RF-02.6-01 … RF-02.6-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-02.7** Diseño y comportamiento del formulario de alta | N-VEN-06 | F-03 | US-02 | Must · MVP | MVP | — | RF-02.7-01 … RF-02.7-06 (6) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-13.1** Acceso | N-CUE-01 | F-03 | US-09 | Must · MVP | MVP | — | RF-13.1-01 … RF-13.1-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-13.2** Vendedores | N-VEN-07, N-CAT-01 | F-03, F-04, F-07 | US-09 | Must · MVP | MVP | — | RF-13.2-01 … RF-13.2-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-13.3** Catálogo, pedidos e incidencias | N-CAT-01, N-HUB-03, N-INC-01 | F-03, F-04, F-06, F-07, F-12 | US-09 | Must · MVP | MVP | H-04 plazos de incidencias | RF-13.3-01 … RF-13.3-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-13.4** Contenido, métricas y auditoría | N-CAT-01, N-CAR-01, N-CAT-03 | F-03, F-04, F-07, F-10 | US-09 | Should · V2 | V2 | — | RF-13.4-01 … RF-13.4-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-13.5** Usuarios y roles | N-CUE-01, N-CAT-01 | F-03, F-04, F-07 | US-09 | Must · MVP | MVP | — | RF-13.5-01 … RF-13.5-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-13.6** Configuración | N-ENT-01, N-CAT-01 | F-03, F-04, F-05, F-07 | US-09 | Must · MVP | MVP | D-03 hub y zonas; H-01 compra mínima | RF-13.6-01 … RF-13.6-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-13.7** Prompts del proyecto | N-CAR-01 | F-04, F-07, F-10 | US-09 | Won't · Excluido | Excluido | — | RF-13.7-01 … RF-13.7-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-15.1** Cabecera | N-CAR-01, N-PLA-01 | F-01, F-02, F-04, F-07, F-10 | US-14 | Must · MVP | MVP | — | RF-15.1-01 … RF-15.1-05 (5) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-15.2** Portada | N-PLA-01, N-VEN-01, N-CAT-03, N-ENT-01 | F-01, F-02, F-03, F-04, F-05, F-07 | US-14 | Must · MVP | MVP | — | RF-15.2-01 … RF-15.2-06 (6) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-15.3** Cómo funciona | N-PLA-01, N-ENT-01 | F-01, F-02, F-04, F-05, F-07 | US-14 | Must · MVP | MVP | — | RF-15.3-01 … RF-15.3-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-15.4** Quiénes somos y comparativa | N-CAR-01, N-CAT-03, N-ENT-01, N-PLA-01 | F-01, F-02, F-03, F-04, F-05, F-07, F-10 | US-14 | Must · MVP | MVP | — | RF-15.4-01 … RF-15.4-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-15.5** Preguntas frecuentes | N-INC-01 | F-04 | US-14 | Should · V2 | V2 | — | RF-15.5-01 … RF-15.5-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-15.6** Comunidad y redes | N-VEN-01, N-CAT-03, N-PLA-02 | F-01, F-03, F-07 | US-14 | Must · MVP | MVP | — | RF-15.6-01 … RF-15.6-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-15.7** Pie de página | N-CAT-03, N-CAR-01 | F-03, F-04, F-07, F-10 | US-14 | Must · MVP | MVP | — | RF-15.7-01 … RF-15.7-05 (5) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-03.1** Alta de producto | N-CAT-01, N-VEN-02 | F-01, F-03, F-04, F-07 | US-10 | Must · MVP | MVP | — | RF-03.1-01 … RF-03.1-06 (6) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-03.2** Información obligatoria | N-CAD-01, N-CAT-03, N-CAT-01, N-CAT-02, N-VEN-01 | F-01, F-03, F-04, F-07 | US-10 | Must · MVP | MVP | — | RF-03.2-01 … RF-03.2-07 (7) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-03.3** Alérgenos | N-CAT-02 | F-03 | US-10 | Must · MVP | MVP | — | RF-03.3-01 … RF-03.3-03 (3) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-03.4** Fotos | N-CAR-01, N-CAT-01 | F-03, F-04, F-07, F-10 | US-10 | Must · MVP | MVP | — | RF-03.4-01 … RF-03.4-04 (4) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-03.5** Precio | N-PLA-02, N-CAT-03, N-VEN-02 | F-01, F-03, F-04, F-07 | US-10 | Must · MVP | MVP | — | RF-03.5-01 … RF-03.5-04 (4) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-03.6** Stock y disponibilidad | N-VEN-02 | F-01, F-04 | US-10 | Must · MVP | MVP | — | RF-03.6-01 … RF-03.6-03 (3) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-03.7** Edición, retirada y packs | N-VEN-02, N-PLA-02 | F-01, F-04, F-07 | US-10 | Must · MVP | MVP | — | RF-03.7-01 … RF-03.7-04 (4) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-03.8** Promociones del vendedor | N-VEN-01 | F-01 | US-10 | Could · V2 | V2 | — | RF-03.8-01 … RF-03.8-02 (2) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-03.9** Revisión antes de publicar | N-CAT-01, N-CAT-03 | F-03, F-04, F-07 | US-10 | Must · MVP | MVP | — | RF-03.9-01 … RF-03.9-03 (3) | RNF-01, RNF-05, RNF-06, RNF-09 | | | |
| **RF-04.1** Página de productos | N-CAR-01 | F-04, F-07, F-10 | US-03 | Must · MVP | MVP | — | RF-04.1-01 … RF-04.1-04 (4) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-04.2** Buscador | N-CAR-01 | F-04, F-07, F-10 | US-03 | Must · MVP | MVP | — | RF-04.2-01 … RF-04.2-04 (4) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-04.3** Filtros y orden | N-CAT-02, N-CAR-01, N-PLA-02 | F-01, F-03, F-04, F-07, F-10 | US-03 | Must · MVP | MVP | — | RF-04.3-01 … RF-04.3-04 (4) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-04.4** Tarjeta de producto | N-CAR-01, N-CAT-01 | F-03, F-04, F-07, F-10 | US-03 | Must · MVP | MVP | — | RF-04.4-01 … RF-04.4-04 (4) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-04.5** Ficha de producto | N-CAR-01, N-CAT-01, N-CAT-02, N-CAT-03, N-VEN-01 | F-01, F-03, F-04, F-07, F-10 | US-03 | Must · MVP | MVP | D-02 comisión | RF-04.5-01 … RF-04.5-05 (5) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-04.6** Favoritos y habituales | N-PLA-01 | F-01, F-02, F-07 | US-03 | Should · V2 | V2 | — | RF-04.6-01 … RF-04.6-02 (2) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-04.7** Zona y patrocinados | N-CAR-01, N-IA-02 | F-03, F-04, F-07, F-10 | US-03 | Must · MVP | MVP | — | RF-04.7-01 … RF-04.7-02 (2) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-04.8** Catálogo en móvil y estados | N-CAR-01 | F-04, F-07, F-10 | US-03 | Must · MVP | MVP | — | RF-04.8-01 … RF-04.8-05 (5) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-04.9** Etiquetas y avisos en la tarjeta | N-CAR-01, N-CAT-02, N-VEN-01, N-VEN-03 | F-01, F-03, F-04, F-07, F-10 | US-03 | Must · MVP | MVP | — | RF-04.9-01 … RF-04.9-04 (4) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06, RNF-08 | | | |
| **RF-12.1** Entrada | N-IA-01 | F-02, F-07 | US-08 | Should · MVP | MVP (con partes simuladas) | Servicio externo: motor de IA | RF-12.1-01 … RF-12.1-04 (4) | RNF-01, RNF-02, RNF-05, RNF-06, RNF-08, RNF-10 | | | |
| **RF-12.2** Generación de la cesta | N-PLA-01, N-CAR-01, N-CAT-02, N-PLA-02 | F-01, F-02, F-03, F-04, F-07, F-10 | US-08 | Should · MVP | MVP (con partes simuladas) | Servicio externo: motor de IA | RF-12.2-01 … RF-12.2-05 (5) | RNF-01, RNF-02, RNF-05, RNF-06, RNF-08, RNF-10 | | | |
| **RF-12.3** Explicación y ajuste | N-IA-01, N-IA-02 | F-02, F-03, F-07 | US-08 | Should · MVP | MVP (con partes simuladas) | Servicio externo: motor de IA | RF-12.3-01 … RF-12.3-04 (4) | RNF-01, RNF-02, RNF-05, RNF-06, RNF-08, RNF-10 | | | |
| **RF-12.4** Transparencia | N-IA-02 | F-03 | US-08 | Should · MVP | MVP (con partes simuladas) | Servicio externo: motor de IA | RF-12.4-01 … RF-12.4-04 (4) | RNF-01, RNF-02, RNF-05, RNF-06, RNF-08, RNF-10 | | | |
| **RF-12.5** Plan de comidas y después de comprar | N-PLA-01, N-CAD-01 | F-01, F-02, F-03, F-07 | US-08 | Should · V2 | V2 | Servicio externo: motor de IA | RF-12.5-01 … RF-12.5-04 (4) | RNF-01, RNF-02, RNF-05, RNF-06, RNF-08, RNF-10 | | | |
| **RF-12.6** Diseño del asistente | N-IA-01, N-IA-02, N-PLA-02 | F-01, F-02, F-03, F-07 | US-08 | Should · MVP | MVP (con partes simuladas) | Servicio externo: motor de IA | RF-12.6-01 … RF-12.6-05 (5) | RNF-01, RNF-02, RNF-05, RNF-06, RNF-08, RNF-10 | | | |
| **RF-12.7** Reglas de la propuesta | N-PLA-01, N-CAD-01, N-VEN-01 | F-01, F-02, F-03, F-07 | US-08 | Should · MVP | MVP (con partes simuladas) | Servicio externo: motor de IA | RF-12.7-01 … RF-12.7-04 (4) | RNF-01, RNF-02, RNF-05, RNF-06, RNF-08, RNF-10 | | | |
| **RF-16.1** Inicio del panel | N-VEN-04 | F-06, F-12 | US-15 | Must · MVP | MVP | — | RF-16.1-01 … RF-16.1-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-16.2** Pedidos del vendedor | N-VEN-04 | F-06, F-12 | US-15 | Must · MVP | MVP | — | RF-16.2-01 … RF-16.2-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-16.3** Ventas y estadísticas | N-VEN-05, N-CAT-01 | F-03, F-04, F-07, F-12 | US-15 | Should · V2 | V2 | — | RF-16.3-01 … RF-16.3-05 (5) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-16.4** Productos en el panel | N-VEN-02, N-VEN-06 | F-01, F-03, F-04 | US-15 | Must · MVP | MVP | — | RF-16.4-01 … RF-16.4-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-16.5** Días de recogida | N-VEN-04 | F-06, F-12 | US-15 | Must · MVP | MVP | — | RF-16.5-01 … RF-16.5-02 (2) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-17.1** Condiciones | N-CAT-01, N-CAT-03, N-VEN-05 | F-03, F-04, F-07, F-12 | US-16 | Should · V2 | V2 | D-02 comisión | RF-17.1-01 … RF-17.1-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-17.2** Liquidación | N-VEN-05, N-CAT-03 | F-03, F-12 | US-16 | Should · V2 | V2 | D-02 comisión | RF-17.2-01 … RF-17.2-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-05.1** Añadir al carrito | N-CAR-01 | F-04, F-07, F-10 | US-04 | Must · MVP | MVP | — | RF-05.1-01 … RF-05.1-05 (5) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-05.2** Vista del carrito agrupada | N-CAR-01, N-ENT-01, N-PLA-01 | F-01, F-02, F-04, F-05, F-07, F-10 | US-04 | Must · MVP | MVP | — | RF-05.2-01 … RF-05.2-06 (6) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-05.3** Cantidades | N-CAR-01 | F-04, F-07, F-10 | US-04 | Must · MVP | MVP | — | RF-05.3-01 … RF-05.3-03 (3) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-05.4** Envío y compra mínima | N-CAR-01, N-CAT-03, N-ENT-01 | F-03, F-04, F-05, F-07, F-10 | US-04 | Must · MVP | MVP | H-01 compra mínima | RF-05.4-01 … RF-05.4-04 (4) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-05.5** Presupuesto | N-PLA-02 | F-01, F-07 | US-04 | Should · MVP | MVP | — | RF-05.5-01 … RF-05.5-02 (2) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-05.6** Cambios de stock y precio | N-CAR-01, N-CAT-03 | F-03, F-04, F-07, F-10 | US-04 | Must · MVP | MVP | — | RF-05.6-01 … RF-05.6-03 (3) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-05.7** Persistencia | N-CAR-01 | F-04, F-07, F-10 | US-04 | Must · MVP | MVP | — | RF-05.7-01 … RF-05.7-03 (3) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-05.8** Diseño del carrito | N-CAR-01 | F-04, F-07, F-10 | US-04 | Must · MVP | MVP | H-01 compra mínima | RF-05.8-01 … RF-05.8-06 (6) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-05.9** Información de la entrega en el carrito | N-ENT-01, N-PLA-01 | F-01, F-02, F-04, F-05, F-07 | US-04 | Should · MVP | MVP | — | RF-05.9-01 … RF-05.9-03 (3) | RNF-01, RNF-03, RNF-04, RNF-05, RNF-06 | | | |
| **RF-06.1** Acceso y resumen | N-CAR-01, N-CUE-01 | F-03, F-04, F-07, F-10 | US-05 | Must · MVP | MVP | — | RF-06.1-01 … RF-06.1-03 (3) | RNF-01, RNF-04, RNF-05, RNF-06, RNF-07 | | | |
| **RF-06.2** Dirección y franja | N-ENT-01, N-PLA-01 | F-01, F-02, F-04, F-05, F-07 | US-05 | Must · MVP | MVP | D-03 hub y zonas; H-02 espera de la entrega | RF-06.2-01 … RF-06.2-04 (4) | RNF-01, RNF-04, RNF-05, RNF-06, RNF-07 | | | |
| **RF-06.3** Revisión de alérgenos y condiciones | N-CAT-02, N-CAT-03 | F-03 | US-05 | Must · MVP | MVP | — | RF-06.3-01 … RF-06.3-04 (4) | RNF-01, RNF-04, RNF-05, RNF-06, RNF-07 | | | |
| **RF-06.4** Pago simulado | N-CAR-01, N-CAT-03, N-PLA-02 | F-01, F-03, F-04, F-07, F-10 | US-05 | Must · MVP | MVP (con partes simuladas) | — | RF-06.4-01 … RF-06.4-08 (8) | RNF-01, RNF-04, RNF-05, RNF-06, RNF-07 | | | |
| **RF-06.5** Confirmación | N-CAR-01, N-CAT-03 | F-03, F-04, F-07, F-10 | US-05 | Must · MVP | MVP | Servicio externo: correo | RF-06.5-01 … RF-06.5-04 (4) | RNF-01, RNF-04, RNF-05, RNF-06, RNF-07 | | | |
| **RF-06.6** Modificar o cancelar | N-CAR-01, N-PLA-01, N-PLA-02 | F-01, F-02, F-04, F-07, F-10 | US-05 | Must · MVP | MVP (con partes simuladas) | — | RF-06.6-01 … RF-06.6-04 (4) | RNF-01, RNF-04, RNF-05, RNF-06, RNF-07 | | | |
| **RF-06.7** Diseño y navegación del checkout | N-CAR-01, N-CAT-03 | F-03, F-04, F-07, F-10 | US-05 | Must · MVP | MVP | — | RF-06.7-01 … RF-06.7-06 (6) | RNF-01, RNF-04, RNF-05, RNF-06, RNF-07 | | | |
| **RF-06.8** Datos de facturación | N-CAT-03 | F-03 | US-05 | Could · V2 | V2 | — | RF-06.8-01 … RF-06.8-02 (2) | RNF-01, RNF-04, RNF-05, RNF-06, RNF-07 | | | |
| **RF-07.1** División | N-CAR-01, N-VEN-04 | F-04, F-06, F-07, F-10, F-12 | US-11 | Must · MVP | MVP | — | RF-07.1-01 … RF-07.1-02 (2) | RNF-01, RNF-05, RNF-06, RNF-07 | | | |
| **RF-07.2** Aviso y vista del vendedor | N-VEN-04, N-CUE-01 | F-03, F-06, F-12 | US-11 | Must · MVP | MVP | Servicio externo: correo | RF-07.2-01 … RF-07.2-03 (3) | RNF-01, RNF-05, RNF-06, RNF-07 | | | |
| **RF-07.3** Confirmar o avisar de faltas | N-HUB-03, N-PLA-02, N-VEN-04 | F-01, F-06, F-07, F-12 | US-11 | Must · MVP | MVP (con partes simuladas) | — | RF-07.3-01 … RF-07.3-09 (9) | RNF-01, RNF-05, RNF-06, RNF-07 | | | |
| **RF-07.4** Preparación y etiqueta | N-CAT-01, N-HUB-01 | F-03, F-04, F-06, F-07, F-12 | US-11 | Must · MVP | MVP | — | RF-07.4-01 … RF-07.4-03 (3) | RNF-01, RNF-05, RNF-06, RNF-07 | | | |
| **RF-07.5** Plazos y avisos al vendedor | N-HUB-03, N-CAT-01, N-VEN-04 | F-03, F-04, F-06, F-07, F-12 | US-11 | Must · MVP | MVP (con partes simuladas) | D-02 comisión | RF-07.5-01 … RF-07.5-04 (4) | RNF-01, RNF-05, RNF-06, RNF-07 | | | |
| **RF-07.6** Pedido sin el grupo de un vendedor | N-HUB-03 | F-06, F-12 | US-11 | Must · MVP | MVP (con partes simuladas) | H-01 compra mínima | RF-07.6-01 … RF-07.6-02 (2) | RNF-01, RNF-05, RNF-06, RNF-07 | | | |
| **RF-14.1** Suscripción opcional | N-PLA-02, N-CAT-03 | F-01, F-03, F-07 | US-19 | Could · V3 | V3 | — | RF-14.1-01 … RF-14.1-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-14.2** Gestión de la suscripción | N-PLA-02, N-CAT-03 | F-01, F-03, F-07 | US-19 | Could · V3 | V3 | — | RF-14.2-01 … RF-14.2-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-08.1** Ruta de recogida | N-HUB-01 | F-06, F-12 | US-12 | Must · MVP | MVP | D-03 hub y zonas | RF-08.1-01 … RF-08.1-03 (3) | RNF-01, RNF-05, RNF-06, RNF-09, RNF-11 | | | |
| **RF-08.2** Recepción y verificación en el hub | N-HUB-03, N-HUB-02 | F-03, F-06, F-12 | US-12 | Must · MVP | MVP (con partes simuladas) | D-01 rol jurídico; D-03 hub y zonas | RF-08.2-01 … RF-08.2-04 (4) | RNF-01, RNF-05, RNF-06, RNF-09, RNF-11 | | | |
| **RF-08.3** Empaquetado consolidado | N-ENT-01, N-CAT-02, N-HUB-02 | F-03, F-04, F-05, F-12 | US-12 | Must · MVP | MVP | D-01 rol jurídico; D-03 hub y zonas | RF-08.3-01 … RF-08.3-04 (4) | RNF-01, RNF-05, RNF-06, RNF-09, RNF-11 | | | |
| **RF-08.4** Reparto y entrega | N-ENT-01, N-CAT-03, N-PLA-02 | F-01, F-03, F-04, F-05, F-07 | US-12 | Must · MVP | MVP | D-03 hub y zonas | RF-08.4-01 … RF-08.4-05 (5) | RNF-01, RNF-05, RNF-06, RNF-09, RNF-11 | | | |
| **RF-08.5** Retirada y excedentes | N-CAD-01, N-CAT-01 | F-01, F-03, F-04, F-07 | US-12 | Should · V2 | V2 | D-01 rol jurídico; D-03 hub y zonas | RF-08.5-01 … RF-08.5-02 (2) | RNF-01, RNF-05, RNF-06, RNF-09, RNF-11 | | | |
| **RF-08.6** Aplicación del operador | N-HUB-01, N-HUB-02, N-HUB-03 | F-03, F-06, F-12 | US-12 | Should · V2 | V2 | D-03 hub y zonas | RF-08.6-01 … RF-08.6-04 (4) | RNF-01, RNF-05, RNF-06, RNF-09, RNF-11 | | | |
| **RF-08.7** Entrega al cliente | N-ENT-01, N-HUB-02 | F-03, F-04, F-05, F-12 | US-12 | Must · MVP | MVP | D-03 hub y zonas | RF-08.7-01 … RF-08.7-04 (4) | RNF-01, RNF-05, RNF-06, RNF-09, RNF-11 | | | |
| **RF-09.1** Estados | N-ENT-01 | F-04, F-05 | US-06 | Must · MVP | MVP | — | RF-09.1-01 … RF-09.1-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-09.2** Pantalla de seguimiento | N-ENT-01 | F-04, F-05 | US-06 | Must · MVP | MVP | H-02 espera de la entrega | RF-09.2-01 … RF-09.2-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-09.3** Notificaciones | N-ENT-01, N-CUE-01 | F-03, F-04, F-05 | US-06 | Must · MVP | MVP | Servicio externo: correo | RF-09.3-01 … RF-09.3-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-09.4** Mis pedidos | N-ENT-01, N-PLA-01 | F-01, F-02, F-04, F-05, F-07 | US-06 | Must · MVP | MVP | — | RF-09.4-01 … RF-09.4-02 (2) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-09.5** Plantillas de correo | N-CUE-01, N-ENT-01 | F-03, F-04, F-05 | US-06 | Must · MVP | MVP | Servicio externo: correo | RF-09.5-01 … RF-09.5-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-10.1** Abrir una incidencia | N-INC-01 | F-04 | US-07 | Must · MVP | MVP (con partes simuladas) | H-04 plazos de incidencias | RF-10.1-01 … RF-10.1-06 (6) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-10.2** Resolución | N-INC-01 | F-04 | US-07 | Must · MVP | MVP (con partes simuladas) | D-02 comisión; H-04 plazos de incidencias | RF-10.2-01 … RF-10.2-05 (5) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-10.3** Seguimiento de la incidencia | N-INC-01 | F-04 | US-07 | Must · MVP | MVP | — | RF-10.3-01 … RF-10.3-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-10.4** Diseño del formulario de incidencia | N-INC-01 | F-04 | US-07 | Must · MVP | MVP | — | RF-10.4-01 … RF-10.4-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-10.5** Criterios de resolución | N-INC-01 | F-04 | US-07 | Should · V2 | V2 | — | RF-10.5-01 … RF-10.5-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-11.1** Pedir la valoración | N-CAT-01, N-CAT-03 | F-03, F-04, F-07 | US-13 | Should · V2 | V2 | — | RF-11.1-01 … RF-11.1-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-11.2** Mostrar y moderar | N-CAT-03, N-CAT-01, N-VEN-01 | F-01, F-03, F-04, F-07 | US-13 | Should · V2 | V2 | — | RF-11.2-01 … RF-11.2-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-11.3** Diseño y reglas de la valoración | N-CAT-01, N-CAT-03 | F-03, F-04, F-07 | US-13 | Should · V2 | V2 | — | RF-11.3-01 … RF-11.3-05 (5) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-18.1** Mensajes y avisos | N-VEN-02, N-VEN-01 | F-01, F-04 | US-18 | Should · V2 | V2 | — | RF-18.1-01 … RF-18.1-04 (4) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-19.1** Contacto | N-INC-01 | F-04 | US-17 | Should · V2 | V2 | — | RF-19.1-01 … RF-19.1-05 (5) | RNF-01, RNF-05, RNF-06 | | | |
| **RF-19.2** Bandeja de soporte del equipo | N-INC-01 | F-04 | US-17 | Should · V2 | V2 | — | RF-19.2-01 … RF-19.2-03 (3) | RNF-01, RNF-05, RNF-06 | | | |
| **RNF-01.1** Autenticación y sesiones | N-CUE-01 | F-03 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-01.1-01 … RNF-01.1-05 (5) | — | | | |
| **RNF-01.2** Autorización y datos de entrada | N-CUE-01 | F-03 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-01.2-01 … RNF-01.2-07 (7) | — | | | |
| **RNF-02.1** Minimización y consentimiento | N-CUE-01 | F-03 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-02.1-01 … RNF-02.1-04 (4) | — | | | |
| **RNF-02.2** Derechos y conservación | N-CUE-01 | F-03 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-02.2-01 … RNF-02.2-04 (4) | — | | | |
| **RNF-03.1** Tiempos de carga | N-CAR-01 | F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-03.1-01 … RNF-03.1-04 (4) | — | | | |
| **RNF-03.2** Servidor | N-CAR-01, N-IA-01 | F-02, F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Should · MVP | MVP | — | RNF-03.2-01 … RNF-03.2-02 (2) | — | | | |
| **RNF-03.3** Peso de la página | N-CAR-01 | F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Should · MVP | MVP | — | RNF-03.3-01 … RNF-03.3-02 (2) | — | | | |
| **RNF-04.1** Facilidad de uso | N-CAR-01, N-VEN-02 | F-01, F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-04.1-01 … RNF-04.1-06 (6) | — | | | |
| **RNF-04.2** Consistencia visual | N-CAR-01 | F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-04.2-01 … RNF-04.2-06 (6) | — | | | |
| **RNF-05.1** Percepción y operación | N-CAR-01 | F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-05.1-01 … RNF-05.1-07 (7) | — | | | |
| **RNF-06.1** Navegadores y pantallas | N-CAR-01 | F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-06.1-01 … RNF-06.1-04 (4) | — | | | |
| **RNF-07.1** Disponibilidad y datos | N-CAR-01 | F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-07.1-01 … RNF-07.1-05 (5) | — | | | |
| **RNF-08.1** IA, publicidad y comercio | N-CAT-03, N-IA-02 | F-03 | (criterio de las historias de sus procesos) | Must · MVP | MVP | D-01 rol jurídico | RNF-08.1-01 … RNF-08.1-06 (6) | — | | | |
| **RNF-09.1** Registro de lotes | N-CAT-01 | F-03, F-04, F-07 | (criterio de las historias de sus procesos) | Must · MVP | MVP | D-01 rol jurídico | RNF-09.1-01 … RNF-09.1-04 (4) | — | | | |
| **RNF-10.1** Código y documentación | N-CAR-01, N-IA-01 | F-02, F-04, F-07, F-10 | (criterio de las historias de sus procesos) | Must · MVP | MVP | — | RNF-10.1-01 … RNF-10.1-05 (5) | — | | | |
| **RNF-11.1** Embalaje y desperdicio | N-CAD-01 | F-01, F-03, F-07 | (criterio de las historias de sus procesos) | Should · V2 | V2 | — | RNF-11.1-01 … RNF-11.1-03 (3) | — | | | |

## 3. Controles

- Requisitos sin necesidad: **0** de 560.
- Procesos RF sin historia: **ninguno**.
- Subrequisitos: 127 (105 del MVP, todos con ficha completa).
- N-VEN-03 solo se cubre fuera del MVP.
- Necesidades de usuario confirmadas con entrevistas: **0** de 16. Las entrevistas F-07 y F-08 se registran el 23/10/2026; hasta entonces todas son hipótesis (regla de evidencia en `FOOD4ALL_necesidades.md`).

## 4. Fuentes

| ID | Fuente | Tipo y fiabilidad |
| --- | --- | --- |
| F-01 | Mercado (Hito 1): MAPA 2025, EUROSTUDENT 8, cifras de US, UGR y UMA | Referencia externa |
| F-02 | Alcance (Hito 1) | Decisión del equipo |
| F-03 | Marco legal (Hito 1) | Norma (análisis orientativo, sin revisión profesional) |
| F-04 | Comparativo de 10 empresas (adjunto de Juan Antonio, 09/10/2026) | Benchmark exploratorio: fiabilidad baja, no cita fuentes |
| F-05 | Investigación de entrega a clientes (Miguel) | En curso |
| F-06 | Investigación de recogida a vendedores (Juan Antonio) | En curso |
| F-07 | Entrevistas a estudiantes: E1–E4 de Sebastián (23/10/2026), con E3 y E4 del perfil objetivo y E1 y E2 comparativos; faltan las del resto del equipo | Apuntes, no transcripciones: sin citas literales |
| F-08 | Entrevistas a vendedores (mínimo 2-3) | Pendiente: se suben el 23/10/2026 |
| F-09 | Borrador de 211 requisitos (09/10/2026) | Histórico: lista de ideas, no evidencia |
| F-10 | Benchmark de 6 competidores, consultado el 19/10/2026 | Referencia externa (páginas públicas) |
| F-11 | Personas y mapas de empatía (B2, 20/10/2026) | Síntesis documental del equipo: no es evidencia independiente |
| F-12 | Estudios de food hubs citados en B2: Santa González et al. 2025 (Wisconsin), Universidad de Manchester 2025, Red Tomato, Local Line, prensa sobre Market Wagon | Referencia externa |
