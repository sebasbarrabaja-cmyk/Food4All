---
titulo: Recorridos por la competencia (Christina)
fecha: 2026-10-23
autor: Sebastián
herramienta: Claude (Christina, asistente de Sebastián en mikoshi)
tipo: Otro
tema: Competencia
origen: Mensaje de Sebastián a Christina y guion escrito por Melchizedek (Claude Code en WSL) que ella siguió. Resultado en docs/competencia/
---

Christina hizo los recorridos por la competencia del 23/10/2026 (15:14–16:10). No guardó sus prompts aquí porque el guion le prohibía tocar el repositorio; los registra Melchizedek.

### 15:10 (aprox.) · Sebastián a Christina

Tienes instrucciones de mel.

**Resultado:** Christina leyó el guion de abajo y recorrió 8 competidores sin pagar, sin cuenta y sin datos personales. Dejó 98 capturas, `RESULTADOS.md`, `registro.tsv` y los textos de las condiciones. Está en `docs/competencia/recorridos/` y el análisis, en `docs/competencia/FOOD4ALL_recorridos_competencia.md`.

### Guion que siguió (`PARA-CHRISTINA-competencia.md`, escrito por Melchizedek a petición de Sebastián), tal cual

# Para Christina · Recorridos por la competencia de Food4All

23/10/2026 · Lo prepara Melchizedek (el Claude de WSL) a petición de Sebas. Sebas te avisa de que tienes instrucciones nuevas. Los resultados vuelven a Melchizedek.

## Objetivo

Probar cómo funciona cada competidor **por dentro**, como lo haría un estudiante que compra comida para la semana, y dejar capturas y notas que sirvan de evidencia en el Hito 2. Ya hay capturas de las portadas en `food4all/docs/competencia/`; ahora hace falta el **recorrido**: buscar → ficha de producto → carrito → checkout, **sin llegar a pagar**.

El profesor insiste en no comparar «precios, cobertura o vendedores sin controlar fecha, región, código postal y condiciones de acceso» (Clase 5). Por eso cada observación lleva fecha, hora, URL y código postal.

## Reglas

1. **No pagar nunca.** Para en la pantalla donde se piden los datos de pago y no escribas nada en ella.
2. **No crear cuentas ni meter datos personales** (nombre, correo, teléfono, dirección real). Si un paso exige una cuenta, captura esa pantalla, apunta «requiere cuenta en el paso X» y sigue con el siguiente competidor.
3. Si hay que elegir ubicación, usa el código postal **29010 (Málaga)**. Si no hay servicio en España, usa el código postal de ejemplo que proponga la propia web y apúntalo.
4. Cookies: acepta solo las necesarias, si se puede elegir.
5. No resuelvas captchas ni sortees bloqueos. Si la web bloquea el acceso, captura el bloqueo y apunta «bloqueada».
6. No toques el repositorio `food4all/` ni Asana. Solo escribes en la carpeta de resultados.
7. Lo que no se pueda comprobar se marca **«No verificado»**. No completes huecos con lo que «suele» pasar.

## Competidores y qué comprobar en cada uno

Los números (#) son los hallazgos de `food4all/docs/requisitos/FOOD4ALL_comparativo_revisado.md` que quedaron **sin verificar** o verificados solo por prensa. Son la prioridad.

| Orden | Competidor | URL de partida | Qué comprobar sobre todo |
|---|---|---|---|
| 1 | Glovo | glovo.com (España) | #1: ¿se pueden meter productos de **dos tiendas distintas** en el mismo carrito? ¿Qué mensaje sale si lo intentas? #7: el coste de envío según la distancia. #8: ¿hay recomendaciones y en qué se basan? |
| 2 | Mercadona online | tienda.mercadona.es | #6: pedido mínimo y coste de envío **en la web oficial** (antes solo había prensa). Franjas de entrega. Sustituciones cuando falta un producto |
| 3 | Too Good To Go | toogoodtogo.com (la web; la app no) | #9: qué se puede ver sin la app: packs, descuento, hora de recogida |
| 4 | Wetaca | wetaca.com | #4: hora de cierre de pedidos, ventanas de entrega, pausas de la suscripción, cancelación |
| 5 | Market Wagon | marketwagon.com | #2 y #3: un carrito con varios productores y una sola entrega; qué se ve del productor; hora de corte |
| 6 | Open Food Network | openfoodnetwork.org (o la instancia de España si existe) | Ciclos de pedido con apertura y cierre, cómo se elige el hub o el punto de recogida |
| 7 | Local Food Marketplace | localfoodmarketplace.com | Si hay una tienda de demostración pública: catálogo, carrito y punto de recogida |
| 8 | KnowEats | (la URL que figure en `docs/competencia/lamina.html`) | Recorrido general |

Si vas mal de tiempo, los **4 primeros** son los imprescindibles.

## En cada competidor

Recorrido: portada → buscar «tomate» (o un producto básico equivalente) → ficha de producto → añadir 2 productos (de **2 vendedores distintos** si la web tiene varios) → carrito → inicio del checkout → **parar**.

Capturas a tamaño de escritorio (1440 px de ancho si puedes elegir), con este nombre:
`<competidor>-<NN>-<paso>.png`, por ejemplo `glovo-03-carrito.png`.

Apunta en cada uno:

- fecha, hora, URL de cada captura y código postal usado;
- **carrito con varios vendedores:** sí / no / no aplica, y qué mensaje sale;
- **pedido mínimo y coste de envío:** cifra exacta tal como aparece y en qué pantalla;
- **franja u hora de cierre del pedido:** sí / no, y cómo se elige;
- **qué pasa si falta un producto** (sustituciones o reembolso), si la web lo explica, y dónde;
- **cancelación:** hasta cuándo y dónde se explica;
- **recomendaciones o IA visibles:** qué proponen y si explican por qué;
- **información del vendedor o productor** en la ficha de producto;
- **barreras:** en qué paso exige cuenta, app o ubicación, o en qué paso bloquea.

## Qué entregas

Carpeta `~/proyectos/Food4All-recibido-2026-10-23/competencia-recorridos/` con:

1. Las capturas.
2. `RESULTADOS.md` con una sección por competidor, en este formato:

```markdown
## Glovo
- Fecha y hora: 23/10/2026 17:05 · CP: 29010 · Navegador: …
- Recorrido completado hasta: checkout / bloqueado en «…»
| Comprobación | Observado (tal cual aparece) | Captura | Verificado |
|---|---|---|---|
| Carrito con varios vendedores | «…» | glovo-04-carrito.png | Sí / No verificado |
| Pedido mínimo / envío | … | … | … |
| … | … | … | … |
- Hallazgos del comparativo: #1 confirmado / desmentido / no verificado; #7 …
- Notas: (solo hechos observados; las interpretaciones, marcadas como «Inferencia»)
```

3. Al final de `RESULTADOS.md`, una tabla resumen: competidor × (varios vendedores, mínimo, envío, franja, faltas, cancelación, IA) con Sí / No / No verificado.

Cuando termines, avisa a Sebas para que se lo diga a Melchizedek. Tiempo orientativo: unos 10–15 min por competidor.

---

## Revisión crítica del equipo

*Respuestas de Sebastián a preguntas guiadas del asistente (23/10/2026), comunes a 22-01, 23-02 y 23-04; aquí van solo las que corresponden a este archivo. Las opciones las propuso el asistente; la elección es de Sebastián.*

- **Revisado por:** Sebastián
- **Fecha:** 23/10/2026
- **Qué aceptamos de lo que propuso la IA y por qué:**
  - Recorrer la competencia como lo haría un cliente, con capturas, en vez de fiarnos de lo que dicen sus webs.
- **Qué corregimos, rechazamos o comprobamos aparte:**
  - Puse límites a los recorridos: sin pagar, sin crear cuenta y sin datos personales.
  - Las mejoras de la competencia no se aplicaron solas: las revisé una a una (M-01 a M-08).
- **Por qué estaba justificado usar IA aquí:**
  - Recorrer 8 webs y sacar 98 capturas con notas lleva muchas horas a mano.
  - Las reglas y las decisiones las puse yo; la IA las aplicaba y documentaba.
