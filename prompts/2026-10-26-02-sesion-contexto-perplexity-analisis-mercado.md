---
titulo: Sesión para preparar el contexto y el prompt de Perplexity del análisis del mercado (Hito 3)
fecha: 2026-10-26
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Contexto y método
origen: Sesión en WSL desde ~/proyectos; rama docs/prompt-analisis-mercado. Horas aproximadas (~), reconstruidas por el asistente a partir de la hora de los archivos
---

### ~01:20

Generame un .md con el contexto del proyecto, para el siguiente punto que tengo que hacer para asana, analisis del mercado quiero recurrir a perplexity y necesito darle las herramientas para que me de el resultado que espero, dime la direccion de la carpeta cuando termines

**Resultado:** El asistente leyó `AGENTS.md`, el documento maestro (secciones 64 a 66 y 68), el catálogo de necesidades, el comparativo revisado, los recorridos por la competencia y `docs/competencia/comercio-local.md`. No pudo leer la tarea del Hito 3 en Asana: el conector no tiene acceso al proyecto de la asignatura. Generó `~/proyectos/food4all-analisis-mercado/FOOD4ALL_contexto_perplexity_analisis_mercado.md`, fuera del repositorio. Tiene el prompt para Perplexity (abajo), el contexto del proyecto, lo que ya se sabe del mercado, los huecos, 10 preguntas concretas y una lista para revisar la respuesta. No lleva datos personales de las entrevistas ni nombres del equipo. Sin la especificación previa del paso 1, porque no tocaba el repositorio. El prompt está **sin probar** en Perplexity.

#### Prompt para Perplexity (modo Research, con el .md de contexto adjunto)

Redactado por el asistente con prompt-master. Sebastián lo pega en Perplexity.

```
Actúa como analista de mercado especializado en comercio electrónico de alimentación en España. Adjunto un documento con el contexto de FOOD4ALL, un proyecto universitario de Ingeniería del Software (no es una empresa real ni opera). Léelo entero antes de buscar.

OBJETIVO
Elaborar el análisis del mercado del Hito 3 de FOOD4ALL: un marketplace de producto local para estudiantes universitarios que viven fuera de casa en Málaga, Sevilla y Granada, con un solo carrito de varios vendedores, un solo pago y una sola entrega.

REGLAS DE EVIDENCIA (OBLIGATORIAS)
1. Cada dato lleva su fuente enlazada, la fecha de publicación y el ámbito (España, Andalucía, provincia o ciudad). Prioriza fuentes oficiales (INE, MAPA, Ministerio de Universidades, Junta de Andalucía, ayuntamientos, universidades, CNMC, Eurostat) y estudios sectoriales con metodología publicada. Los blogs y la prensa solo como apoyo y marcados como tales.
2. Clasifica cada afirmación como HECHO (dato con fuente), INFERENCIA (conclusión tuya a partir de hechos) o HIPÓTESIS (por comprobar). Nunca presentes una inferencia como hecho.
3. NUNCA inventes cifras, citas, empresas ni estudios. Si no encuentras un dato, escribe «No encontrado» y di qué buscaste. Si dudas de un dato, márcalo [no verificado].
4. Los datos de mercado y de competidores NO validan necesidades de usuario: solo apoyan hipótesis. Dilo así en las conclusiones.
5. No nombres a pequeños comercios o productores concretos (solo empresas y plataformas grandes o públicas).
6. Usa datos de 2024 en adelante siempre que existan; si usas uno más antiguo, explica por qué.
7. No repitas lo que el documento ya tiene (apartado 4): verifícalo, actualízalo si hay un dato más reciente y céntrate en los huecos del apartado 5.

ENTREGABLE (en español, en Markdown, con este orden)
1. Resumen ejecutivo: 8-10 viñetas, cada una con su etiqueta HECHO/INFERENCIA/HIPÓTESIS.
2. Tamaño del mercado: tabla TAM / SAM / SOM con cálculo paso a paso, supuestos y fuente de cada número. Para el SOM, propón un rango con el método usado (por ejemplo, tasa de adopción de referentes comparables) y márcalo HIPÓTESIS.
3. Segmento: estudiantes que viven fuera de casa en Málaga, Sevilla y Granada (número, forma de convivencia, gasto en alimentación, frecuencia y canal de compra, uso de apps de comida). Separa dato nacional, andaluz y local.
4. Tendencias: compra de alimentación online en España, producto local y de proximidad, hogares unipersonales, desperdicio alimentario. Cada tendencia con su dato y su implicación para FOOD4ALL.
5. Competencia: tabla con competidores directos e indirectos (incluye los del apartado 4.3 y añade los que falten en España). Columnas: nombre, tipo, ámbito geográfico, varios vendedores en un carrito (sí/no/no verificado), pedido mínimo, coste de envío, modelo de ingresos/comisión, fuente y fecha. Después, un mapa de posicionamiento en texto (dos ejes: precio y conveniencia frente a origen local y transparencia) y dónde quedaría FOOD4ALL.
6. Lado del vendedor: número aproximado de pequeños productores y comercios de alimentación en las tres provincias, cómo venden hoy online, comisiones habituales de las plataformas y obstáculos (registro sanitario, logística, digitalización).
7. Análisis PESTEL breve (máx. 2 viñetas por letra) y DAFO de FOOD4ALL, cada punto ligado a un dato o marcado HIPÓTESIS.
8. Riesgos de mercado y cómo comprobar cada uno (qué dato o qué pregunta de entrevista lo confirmaría o desmentiría).
9. Respuestas a las preguntas del apartado 6 del documento, una por una.
10. Lista de fuentes: título, organismo/medio, fecha de publicación, URL y fecha de consulta.
11. Lo que no se pudo encontrar y dónde se podría conseguir (encuesta propia, petición a la universidad, etc.).

CRITERIOS DE HECHO
- Todas las cifras tienen fuente enlazada y fecha.
- Todas las afirmaciones llevan su etiqueta.
- TAM, SAM y SOM tienen el cálculo visible y reproducible.
- Ninguna conclusión dice que una necesidad está «validada» por datos de mercado.

Requisitos extra del enunciado: [AÑADIR AQUÍ SI EL HITO 3 PIDE ALGO MÁS]
```

### ~01:33

guarda el prompt en prompts/

**Resultado:** Se creó este registro en la rama `docs/prompt-analisis-mercado`, con los dos mensajes de la sesión y el prompt para Perplexity. El archivo de contexto sigue fuera del repositorio. Sin `push`.

### ~01:35

súbelo, ya cargué la clave. Y una cosa, no tiene por defecto la regla de guardar el promt con la hora? Sino hay que añadirla. Y luego, mañana quiero arreglar para que no gaste tanto contexto el proyecto, segmentarlo y crear skills individuales para cada punto

**Resultado:** Se subió la rama `docs/prompt-analisis-mercado` a GitHub, sin PR. La regla de la hora ya existe (`AGENTS.md`, regla 1, con `~` si no se sabe la hora exacta), pero el asistente no recibe la hora de cada mensaje. Propuso tres opciones: a) un hook del proyecto que la apunte; b) usar el hook global de Sebastián; c) dejarlo con `~`. Para el día siguiente propuso partir el proyecto en skills: registro de prompts, requisitos del Hito 2, mercado y competencia, Asana y landing, con `AGENTS.md` como índice corto.

### ~01:38

1c Me parece bien la division, aunque quiero concretarla mas, Mañana te lo recuerdo yo personalmente

**Resultado:** Las horas siguen siendo aproximadas, con `~` (opción c). El reparto en skills se concretará el 27/10, cuando Sebastián lo recuerde.

### 01:38

sí, súbelo

**Resultado:** Se subió a GitHub el registro de los últimos mensajes (rama `docs/prompt-analisis-mercado`, sin PR).
