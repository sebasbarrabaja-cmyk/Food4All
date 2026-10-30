---
titulo: Resultado, etiquetas y requisitos de cada prompt, y filtros del panel (#19)
fecha: 2026-10-30
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
resultado: Código
etiquetas: landing, requisito, organización
landing: mejora, documental
origen: Continuación de 2026-10-30-01 (misma sesión): punto 10 del feedback del profesor del 27/10
---

Horas aproximadas: la sesión no guardó la hora de cada mensaje. Hora medida: 13:27, al terminar las pruebas en el navegador.

#### Propuesta enseñada antes de escribir nada

Tabla con `resultado` (Código · Documento · Asana · Análisis o decisión · Descartado) y `etiquetas` (landing · requisito · búsqueda de información · Asana · competencia · organización · otro) para los 28 prompts, y tres preguntas: qué significa `resultado`, qué hacer con las filas de Juan Antonio y si había que cambiar alguna fila.

### ~13:16

1a(Lo más importante no es que salga literalmente lo que escribí, aunque quiero que quede guardado, sino que si el profesor pregunta, como llego el alumno a este requisito le salga las decisiones y promts usados) 3 No pero especificaria un poco mas dentro de la langin, tipo, mantenitmieto, mejoras, cambios internos, vista, documental, comercial, etc

**Resultado:** `resultado` = qué salió del prompt. Las filas de Juan Antonio se escriben y él las confirma (la pregunta 2 quedó sin responder; se tomó la recomendada). Propuesta: tipos de cambio de la landing (vista, comercial, documental, mejora, mantenimiento, interno) y un campo `requisitos` con los IDs a los que llegó cada prompt, para que el panel responda «cómo se llegó a este requisito» con los prompts y sus decisiones. Dos preguntas.

### ~13:20

1a 2b

**Resultado:** Hecho en `feat/etiquetas-prompts` (encima de `feat/indicador-tokens`):
- Cabeceras nuevas en los 28 prompts: `resultado`, `etiquetas`, `landing` (campo aparte, 2b) y `requisitos`. Los `requisitos` son los IDs que aparecen en las líneas **Resultado:** de cada prompt (lo que se decidió o se cambió), no todos los que nombra. Solo se añadieron líneas: el texto de los prompts no cambia.
- `backend/prompts.js`: listas cerradas `RESULTADOS`, `ETIQUETAS` y `LANDING`; cada prompt devuelve además sus `pasos` (cada `### HH:MM` con su resultado) y los IDs que `menciona`. `backend/server.js` las devuelve y valida las del formulario.
- `AdminPrompts.jsx`: filtros por persona, uso, resultado, etiqueta, tipo de cambio en la landing y requisito, combinables, con contador y «Quitar filtros». Al escribir un requisito sale «Cómo se llegó a …»: los prompts que llevaron a él, en orden, con las decisiones que lo nombran, y los que solo lo mencionan. El formulario de alta pide también resultado, etiquetas, tipo de cambio y requisitos.
- Documentado en `prompts/README.md` y en la skill `food4all-prompts`.
- Probado con un servidor de prueba montado sobre una copia del proyecto (el alta escribe en `prompts/`): validación de valores y de IDs, repetidos quitados, cabecera escrita bien, «Cómo se llegó a RST-06» con 3 prompts y filtros combinados (landing · mantenimiento → 6). Arreglados en la prueba: desplegables que se pisaban y la traza, que no respetaba los demás filtros.

#### Revisión de código (/code-review)

Diez posibles fallos. Arreglados: (1) un carácter como «(» en el filtro de requisito rompía todo el panel → ya no se construye una expresión regular con lo que escribe el usuario; (2) el formato de IDs no reconocía `RNF-02.1-03`, `RF-01.1.CA1`, `RF-CUE-01` ni las necesidades `N-CAR-01` → ampliado con los formatos de `docs/requisitos`, y añadidos a 4 cabeceras los `N-…` que faltaban; (3) el filtro acepta varios IDs separados por comas y lo que no tiene forma de ID se ignora; (4) buscar `RF-12` ya no trae las decisiones de `RF-12.1-01`; (5) separadores sueltos en la línea de etiquetas; (6) el formulario no enseñaba los errores de resultado y de tipo de cambio; (7) el servidor acepta `landing` solo si la etiqueta «landing» está marcada; (8) las decisiones bajo apartados `####` (por ejemplo, «Cambio 1…») también cuentan, y los encabezados sin **Resultado:** no; (9) la expresión regular de IDs se compila una vez; (10) sin listas vacías en la traza. Probado otra vez en una copia del proyecto con el navegador.

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
