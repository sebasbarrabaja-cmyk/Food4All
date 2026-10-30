# FOOD4ALL · Alcance, coste y tiempo

26/10/2026 · Versión 0.2 · Estado: **borrador**, pendiente de revisión por el equipo · Preparado por Sebastián con Claude Code (prompt en `prompts/2026-10-26-03-sesion-alcance-coste-tiempo.md`)

Este documento fija las tres restricciones del proyecto (alcance, tiempo y coste) en dos planos que no se mezclan:

- **A. El proyecto de clase:** lo que el equipo entrega en la asignatura (documentación, landing y demo), con 3 personas, hasta enero de 2027.
- **B. El negocio real:** lo que costaría lanzar FOOD4ALL de verdad en Málaga, Sevilla y Granada durante un curso académico.

Como en el resto del proyecto, cada dato lleva su etiqueta: **Hecho** (con fuente), **Inferencia** (cálculo sobre hechos), **Hipótesis** (supuesto del equipo que hay que comprobar) o **No encontrado**. Las cifras se calcularon con un script y se pueden repetir con los supuestos de cada tabla.

---

## A. Proyecto de clase

### A.1 Alcance

**Qué se entrega (alcance del proyecto).** Son los cinco hitos de la asignatura (contexto del proyecto, apartado 12, y Asana):

| Hito | Entregable | Estado a 26/10/2026 |
| --- | --- | --- |
| 1 · Contexto, actores y alcance | Nombre, equipo y roles, mercado, alcance, marco legal y landing documental | Hecho |
| 2 · Requisitos y criterios de aceptación | Necesidades, 564 requisitos, historias, matriz y línea base H2-v0.4 (15 % de la nota) | Entregado el 23/10/2026 |
| 3 · Análisis y diseño estructurado | Análisis del mercado y diseño estructurado | En curso (Sprint 3) |
| 4 · Modelo de dominio y diseño OO | Modelo de dominio, secuencias, contratos, clases, arquitectura por capas, patrones y revisión cruzada | Futuro |
| 5 · Integración, calidad y dossier | Trazabilidad, plan de pruebas, calidad, registro de cambios, dossier, presentación y demo de 60 s | Futuro |

**Qué se especifica (alcance del producto).** Es la línea base H2-v0.4 (`docs/requisitos/benchmark/stats.json`):

| Entrega | Requisitos | Qué significa |
| --- | ---: | --- |
| MVP | 367 | Entra en la primera versión |
| MVP simulado | 36 | Entra, pero con un servicio de prueba: pago, reembolso o IA (RST-01, RST-02 y RST-07) |
| V2 | 131 | Segunda versión |
| V3 | 26 | Tercera versión |
| Excluido | 4 | Fuera del producto: son del panel interno de la landing (C-11) |
| **Total** | **564** | 490 RF y 74 RNF |

Procesos que **no tienen nada en el MVP** y quedan para después: RF-14 Suscripción, RF-17 Condiciones y liquidación del vendedor, RF-18 Comunicación con vendedores, RF-19 Soporte y contacto, y RNF-11 Sostenibilidad. RF-11 Valoraciones solo lleva 1 de sus 13 requisitos.

**Qué queda fuera del proyecto de clase** (restricciones validadas en la criba, `FOOD4ALL_criba_argumentos.md`):

- No se cobra dinero real; el pago y el reembolso son de prueba (RST-01 y RST-02).
- No hay integraciones reales: ni banco, ni proveedor logístico, ni inventario del comercio, ni motor de IA (RST-07).
- Solo se trabaja con Málaga, Sevilla y Granada (RST-04).
- La landing es informativa: no es el marketplace. **Hipótesis:** el marketplace no se programa entero en la asignatura (el temario pide análisis, diseño, pruebas y una demo de 60 s). Hay que confirmarlo con el profesor.

### A.2 Tiempo

**Inferencia:** la semana 1 empezó el lunes 21/09/2026. Sale de dos fechas conocidas: la semana 5 acaba el 23/10 (entrega del Hito 2) y la semana 8, el 13/11 (fecha límite del Hito 3). Las fechas de los Hitos 4 y 5 se calculan sin vacaciones.

| Hito | Sprint | Semanas | Desde | Hasta | Fuente de la fecha final |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1–2 | 21/09/2026 | 02/10/2026 | Inferencia |
| 2 | 2 | 3–5 | 05/10/2026 | 23/10/2026 | **Hecho** (entrega) |
| 3 | 3 | 6–8 | 26/10/2026 | 13/11/2026 | **Hecho** (D-03, «antes del 13/11») |
| 4 | 4 | 9–12 | 16/11/2026 | 11/12/2026 | Inferencia |
| 5 | 5 | 13–16 | 14/12/2026 | 08/01/2027 | Inferencia, **sin contar la Navidad** |
| Semana 17 | — | 17 | 11/01/2027 | 15/01/2027 | Inferencia (sección de Asana) |

**Riesgo de calendario:** el Hito 5 cae sobre las vacaciones de Navidad. Si no hay clase durante dos o tres semanas, el Hito 5 y la Semana 17 se retrasan lo mismo (hasta finales de enero). **Pendiente:** contrastar con el calendario académico oficial y con Asana.

**Responsables por área** (contexto del proyecto): Sebastián (backend y Product Owner), Juan Antonio (frontend) y Miguel (IA y datos). Las pruebas y la documentación son de los tres. Los responsables de cada tarea de los Hitos 3 a 5 están en Asana y no se repiten aquí.

### A.3 Coste

El equipo no cobra. El coste se calcula **como si** las horas las pagara una empresa: es la forma de comparar el esfuerzo con el valor de lo que se hace.

**Tarifa por hora (junior en España, 2026):**

| Escenario | Bruto anual | Fuente | Coste empresa (× 1,3215) | €/hora (1.760 h/año) |
| --- | ---: | --- | ---: | ---: |
| Bajo | 24.677 € | **Hecho:** media de Indeed para desarrollador junior, actualizada el 09/09/2026 | 32.611 € | 18,53 € |
| Medio | 28.000 € | **Inferencia:** punto medio del rango 24.000–32.000 € (Jobrise e Indeed) | 37.002 € | 21,02 € |
| Alto | 32.000 € | **Hecho:** media de un perfil junior según Nettocalc 2026 | 42.288 € | 24,03 € |

- **Cotización de la empresa (Hecho):** contingencias comunes 23,60 %, desempleo indefinido 5,50 %, MEI 0,75 %, formación 0,60 % y FOGASA 0,20 %, que suman 30,65 % (Orden PJC/297/2026, según Asepeyo y Cuatrecasas). Fuentes secundarias: hay que confirmarlo en el BOE.
- **Accidentes de trabajo (Hipótesis):** 1,5 %, porque depende del CNAE. En total, el factor es 1 + 0,3215 = 1,3215.
- **Horas anuales (Hipótesis):** 1.760 (40 h a la semana durante 44 semanas). Depende del convenio.

**Horas del equipo (Hipótesis, a corregir con las horas reales):** 6 h por persona y semana, de media.

- Hay un indicio a favor: una asignatura de 6 ECTS son 150–180 h por estudiante (1 ECTS = 25–30 h, RD 822/2021). El proyecto sería algo más de la mitad. Los créditos de esta asignatura **no están verificados**.
- El esfuerzo no ha sido uniforme. El 23/10 hay 112 de los 144 commits de `main`: el Hito 2 se concentró en el último día.

| Hito | Semanas | Horas por persona | Horas del equipo (×3) |
| --- | ---: | ---: | ---: |
| 1 | 2 | 12 | 36 |
| 2 | 3 | 18 | 54 |
| 3 | 3 | 18 | 54 |
| 4 | 4 | 24 | 72 |
| 5 | 4 | 24 | 72 |
| Semana 17 | 1 | 6 | 18 |
| **Total** | **17** | **102** | **306** |

**Coste de personal del proyecto de clase:**

| Escenario | €/hora | 306 h | Con reserva del 15 % (Hipótesis) |
| --- | ---: | ---: | ---: |
| Bajo | 18,53 € | 5.670 € | 6.521 € |
| Medio | 21,02 € | 6.432 € | 7.397 € |
| Alto | 24,03 € | 7.353 € | 8.456 € |

La reserva del 15 % cubre la repetición de trabajo. Ya ha pasado con las 12 entrevistas descartadas (C-22) y con las correcciones del Hito 2.

**Herramientas e infraestructura:**

| Partida | Coste para el equipo | Etiqueta |
| --- | ---: | --- |
| GitHub (repositorio público) | 0 € | Hecho |
| Asana (proyecto de la asignatura, compartido con los tres grupos) | 0 € | Hecho: lo da la asignatura |
| IA local con Ollama (buscador del panel; hasta el 30/10, Gemini en su nivel gratuito) | 0 € | Hecho (`README.md`) |
| Servidor de la landing (se ejecuta en local con `npm start`) | 0 € | Hecho |
| Asistentes de IA de cada miembro (Claude Code y otros) | Según el plan de cada uno | **Pendiente:** cada miembro lo indica |
| Dominio de la marca (tarea del Hito 1) | — | **Pendiente:** no consta que se haya comprado |

**Total del proyecto de clase:** de 6.521 € a 8.456 € de horas equivalentes (7.397 € en el escenario medio), más las suscripciones de IA que se confirmen. El gasto real en dinero es 0 € más esas suscripciones.

---

## B. Negocio real (piloto de un curso en tres ciudades)

### B.1 Alcance

Es el MVP de la línea base, pero **sin simulaciones**: con pago real, reembolsos reales, IA real y reparto propio desde un hub por ciudad. Los supuestos operativos salen del análisis del mercado del Hito 3:

- 3 hubs, uno por ciudad.
- Entre 40 y 60 pedidos al día por hub.
- 210 días de operación al año, unos 7 meses.
- Cierre de pedidos la víspera a las 20:00 y una sola entrega por franja.

Siguen sin decidir el rol jurídico (D-01), la comisión (D-02), el hub (D-03, se decide en el Hito 3) y el coste logístico (R6). Todas las cifras de este bloque dependen de esas decisiones.

### B.2 Tiempo

**Hipótesis:**

| Fase | Duración | Contenido |
| --- | --- | --- |
| Construcción del MVP | 6–8 meses | Programar los 403 requisitos del MVP, con integraciones reales |
| Alta de vendedores y prueba en una ciudad | 1–2 meses | Entrevistas a vendedores (F-08, ninguna hecha), registro sanitario (RST-05) y prueba del hub |
| Piloto en tres ciudades | 1 curso (≈ 7 meses de operación) | El periodo sobre el que se calcula el SOM |

### B.3 Coste

El periodo es el primer curso: la construcción y los 7 meses de operación. Los sueldos se calculan con el factor de cotización de A.3 (× 1,3215): el SMI de 2026 (17.094 €/año, RD 126/2026, **Hecho**) cuesta 22.590 € a la empresa, un junior (28.000 €) cuesta 37.002 € y un senior (41.339 €, media de Indeed del 11/10/2026, **Hecho**) cuesta 54.629 €. «Pesimista» es menos pedidos y menos gasto; «optimista» es más pedidos y, por tanto, más gasto.

**Partidas con fuente o calculadas sobre datos:**

| Partida | Pesimista | Optimista | Cálculo y etiqueta |
| --- | ---: | ---: | --- |
| Construir el MVP (una vez) | 55.503 € | 85.756 € | **Hipótesis:** de 3 juniors durante 6 meses a 2 juniors y 1 senior durante 8 meses |
| Repartidores | 39.532 € | 79.064 € | **Inferencia:** 1 o 2 personas por hub, cobrando el SMI, durante 7 meses |
| Pasarela de pago | 6.566 € | 33.232 € | **Inferencia:** 1,5 % + 0,25 € por cobro (tarifa estándar de Stripe para tarjetas del EEE, según meetergo; confirmar en la web de Stripe) sobre 281.400 € a 30 € por pedido, y sobre 1.500.800 € a 35 € por pedido |
| Gestoría (contabilidad, impuestos y nóminas) | 2.880 € | 7.680 € | **Inferencia:** 150–280 €/mes (percentiles 25 y 75 de 30 despachos, Copilot Gestoría 2026) más 15–30 € por nómina, con 6–12 empleados, durante 12 meses |
| Seguro de responsabilidad civil | 300 € | 600 € | **Hecho (fuente secundaria):** 300–600 €/año para una pyme (Asest). No cubre la mercancía transportada |
| IA real (Gemini 3.5 Flash) | 100 € | 500 € | **Hipótesis:** una consulta por pedido de unos 2.000 tokens de entrada y 1.000 de salida, a 1,50 $ y 9 $ por millón (precio de terceros; confirmar en Google) |

**Partidas sin fuente (rango de hipótesis del equipo):**

| Partida | Pesimista | Optimista | Supuesto y cómo se comprueba |
| --- | ---: | ---: | --- |
| Alquiler de los 3 hubs | 16.800 € | 31.500 € | 800–1.500 € al mes por hub durante 7 meses. **No encontrado:** precio de un local o nave pequeña. Se comprueba con anuncios fechados en las tres ciudades |
| Furgonetas con frío (RST-10) | 12.600 € | 42.000 € | 1 o 2 por hub, a 600–1.000 € al mes en renting, durante 7 meses. **No encontrado:** las empresas de renting no publican precios. Se comprueba pidiendo presupuesto |
| Personal del hub (preparar y juntar pedidos) | 19.766 € | 39.532 € | Media jornada o jornada completa por hub, cobrando el SMI, durante 7 meses |
| Atención al cliente y alta de vendedores | 13.177 € | 26.355 € | 1 o 2 personas para las tres ciudades, cobrando el SMI, durante 7 meses (respuesta humana en 24 h, RST-05) |
| Dirección del negocio | 0 € | 21.584 € | Pesimista: los fundadores no cobran. Optimista: 1 sueldo de junior durante 7 meses |
| Mantenimiento del software | 10.792 € | 21.584 € | Media jornada o jornada completa de un junior durante 7 meses (arreglos y V2) |
| Marketing (captar clientes) | 6.700 € | 40.200 € | 10–30 € por cliente para 670–1.340 clientes (los del SOM). **No encontrado:** un coste de captación de referencia |
| Asesoría legal (D-01, venta directa) y constitución | 1.000 € | 3.000 € | Se comprueba pidiendo presupuesto |
| Servidores y dominio | 240 € | 1.200 € | 20–100 € al mes durante 12 meses |

| Total | Pesimista | Optimista |
| --- | ---: | ---: |
| Sin construir el MVP (operar el primer curso) | 130.454 € | 348.032 € |
| **Con el MVP (primer curso completo)** | **185.957 €** | **433.787 €** |

En la versión 0.1, solo con las partidas de la primera tabla más el alquiler, el coste era de 118.501 € a 199.799 €. Ese «barato» era un mínimo: no contaba las furgonetas, el personal fuera del reparto ni el marketing.

**Siguen sin contar:** el IVA, las compensaciones por faltas o retrasos (dependen de D-02), el seguro de la mercancía, los gastos de antes del lanzamiento (alta de vendedores y prueba en una ciudad) y la subida de sueldos de 2027.

**Ingresos esperados** (análisis del mercado del Hito 3, **Hipótesis**): el GMV, es decir, el valor total de los pedidos, está entre 0,28 y 1,5 M€. Con una comisión del 10–15 %, salen **28.000–225.000 € al año**.

**Lectura:**

- **Escenario pesimista:** ingresa ≈ 28.000 € y gasta ≈ 130.500 € en operar. Pierde unos 102.000 € sin contar el MVP, y unos 158.000 € con él.
- **Escenario optimista:** ingresa ≈ 225.000 € y gasta ≈ 348.000 € en operar. También pierde: unos 123.000 € sin contar el MVP, y unos 209.000 € con él. Con más pedidos hacen falta más repartidores, más furgonetas y más personal, así que el coste crece a la vez que los ingresos.
- **Conclusión:** con estos supuestos, el modelo **no se paga en ningún escenario**. El primer curso de una plataforma suele perder dinero, pero aquí también se pierde en la operación, sin contar el MVP. Eso confirma el riesgo R6: con un pedido de 10–15 € y una comisión del 10–15 %, cada pedido deja 1–2,25 €, y eso no paga el reparto. Antes de dar por bueno el modelo hay que decidir el pedido mínimo, la recogida en un punto (C-19), la comisión (D-02) y si el reparto se hace con medios propios o se subcontrata.

---

## C. Supuestos que más cambian el resultado

| Supuesto | Valor usado | Cómo se comprueba | Quién |
| --- | --- | --- | --- |
| Horas por persona y semana | 6 h | Cada miembro anota sus horas reales de los Hitos 1–3 | Los tres |
| Créditos de la asignatura | 6 ECTS (no verificado) | Guía docente | Sebastián |
| Fechas de los Hitos 4 y 5 | Sin vacaciones | Calendario académico y Asana | Sebastián |
| Que el marketplace no se programe en clase | Sí | Preguntar al profesor | Sebastián |
| Comisión | 10–15 % | D-02 | Equipo |
| Personas por hub | 1–2 | D-03 y entrevistas a vendedores | Equipo |
| Alquiler del hub | 800–1.500 €/mes | Anuncios con fecha en las tres ciudades | Equipo |
| Renting de una furgoneta con frío | 600–1.000 €/mes | Presupuesto de dos empresas de renting | Equipo |
| Coste de captar un cliente | 10–30 € | Prueba de anuncios o referencia publicada | Equipo |

## D. Fuentes

- Línea base y requisitos: `docs/requisitos/benchmark/stats.json`, `docs/requisitos/FOOD4ALL_linea_base_h2.md` y `docs/requisitos/FOOD4ALL_criba_argumentos.md`.
- Mercado, SOM e ingresos: `FOOD4ALL · Análisis del mercado (Hito 3)` (26/10/2026).
- Salario junior: [Indeed, desarrollador/a junior](https://es.indeed.com/career/junior-developer/salaries) (consultado el 26/10/2026), [Nettocalc, desarrollador de software](https://nettocalc.com/es/desarrollador-software) y [Jobrise, salario developer junior 2026](https://jobrise.io/es/blog/salario-developer-junior-espana-2026/).
- Cotizaciones de 2026: [Asepeyo, bases y tipos 2026](https://www.asepeyo.es/wp-content/uploads/Bases-tipos-cotizacion-2026-ES.pdf) y [Cuatrecasas, Orden de cotización 2026](https://www.cuatrecasas.com/es/spain/laboral/art/claves-orden-cotizacion-2026).
- SMI 2026: [CSIF, RD 126/2026](https://www.csif.es/va/noticia/portada/castillayleonempresaprivada/articulo/85925).
- Desarrollador senior: [Indeed, desarrollador/a senior](https://es.indeed.com/career/senior-developer/salaries) (actualizado el 11/10/2026).
- Gestoría: [Copilot Gestoría, precios 2026](https://copilotgestoria.com/blog/pricing-gestorias-2026-tarifas-servicio-margenes-rentabilidad-estudio-despachos) y [Gestoría 24/7](https://gestoria247.com/sociedades/precios).
- Seguro de responsabilidad civil: [Asest](https://asest.es/story/supuesto-practico-los-seguros-de-responsabilidad-civil-en-pequenos-negocios/) (fuente secundaria).
- Stripe: [meetergo](https://meetergo.com/es/blog/stripe) y [getquipu](https://getquipu.com/blog/comisiones-stripe/) (fuentes secundarias).
- Gemini: [pricepertoken](https://pricepertoken.com/pricing-page/model/google-gemini-3.5-flash) (fuente secundaria; la oficial es [ai.google.dev/gemini-api/docs/pricing](https://ai.google.dev/gemini-api/docs/pricing)).

## E. Registro de cambios

| Versión | Fecha | Cambio | Responsable |
| --- | --- | --- | --- |
| 0.1 | 26/10/2026 | Primera versión | Sebastián |
| 0.2 | 26/10/2026 | B.3: partidas que faltaban (furgonetas, personal del hub, atención al cliente, dirección, mantenimiento, marketing, gestoría, seguro, asesoría y servidores) y un senior en el MVP optimista. El coste del primer curso pasa de 118.501–199.799 € a 185.957–433.787 €, y el modelo deja de cubrir costes también en el escenario optimista | Sebastián |
