---
name: food4all-prompts
description: Cómo registrar en prompts/ cada mensaje del usuario (obligatorio en FOOD4ALL, el profesor exige todos los prompts) y cómo se guardan los tokens de cada sesión en docs/tokens/. Úsala en cada sesión de trabajo, antes de hacer un commit y cuando haya que consultar, ordenar o contar prompts o tokens.
---

# FOOD4ALL · Registro de prompts y tokens

## Prompts (obligatorio)

- **Todos los mensajes del usuario**, también los que no cambian nada («abrela», «1a 2b», preguntas). Esta decisión de Sebastián (26/10) manda sobre cualquier regla privada que diga lo contrario.
- Un `.md` por sesión en `prompts/`: `AAAA-MM-DD-NN-titulo.md`, donde `NN` es el siguiente número libre de ese día (`01`, `02`…). Si la sesión sigue otro día, se abre un archivo nuevo.
- Cabecera entre líneas `---`:
  - `titulo`, `fecha` (AAAA-MM-DD) y `autor` (Sebastián · Juan Antonio · Miguel · Equipo).
  - `herramienta` (Claude Code) y `tipo` (Prompt base · Sesión de trabajo · Feedback · Otro).
  - `tema` (Contexto y método · Landing (web y panel) · Requisitos del Hito 2 · Asana · Competencia · Organización del equipo · Otro) y `origen`.
  - `resultado` (Código · Documento · Asana · Análisis o decisión · Descartado), `etiquetas` (landing · requisito · búsqueda de información · Asana · competencia · organización · otro, separadas por comas), `landing` si tocó la landing (vista · comercial · documental · mejora · mantenimiento · interno) y `requisitos` con los IDs a los que llegó o que cambió (`RF-05`, `RST-03`, `C-28`…). Qué significa cada uno: `prompts/README.md`.
  - Estas listas están en `backend/prompts.js` (`TYPES`, `TEMAS`, `RESULTADOS`, `ETIQUETAS` y `LANDING`): si añades un valor, cámbialo también allí.
- Cada mensaje va bajo `### HH:MM`, **tal cual se envió, con erratas**, y termina con una línea `**Resultado:**` (qué se hizo, o si se interrumpió o se descartó).
  - Si no sabes la hora exacta: `### ~HH:MM`. Nunca una hora inventada.
  - Lo que escribe el asistente y no es un mensaje (especificaciones, resúmenes) va bajo `####`.
- El archivo termina con `## Revisión crítica del equipo` y `*Pendiente: la escribe <persona>.*`. La escribe la persona, no el asistente.
- **Las credenciales nunca se copian:** se escribe `[usuario y contraseña del panel: omitidos del registro]`.
- El registro va **en el mismo commit** que el cambio al que corresponde.
- Se ve en `/admin#prompts` (agrupado por persona y por tema).

## Tokens

- Al cerrar la sesión (`/exit`, Ctrl+D o `/clear`), el hook `SessionEnd` de `.claude/settings.json` ejecuta `tools/tokens-sesion.mjs`. El script suma el consumo del historial y lo guarda en un archivo nuevo, `docs/tokens/<persona>/<fecha>-<sesion>.csv` (uno por sesión: así dos ramas nunca tocan el mismo archivo).
- Columnas: `fecha, persona, rama, sesion, motivo, modelos, mensajes, entrada, salida, cache_escritura, cache_lectura, total`. La persona es el ID del equipo (`sebastian`, `juan-antonio`, `miguel`): sale de `git config food4all.persona` si está puesto y, si no, del nombre y el correo de git. Si sale la carpeta `desconocido/`, pon `git config food4all.persona <tu-id>` y mueve sus archivos a tu carpeta.
- **`docs/tokens/` va en git**: sube tus archivos nuevos con tus cambios. El panel (`/admin#tokens`) suma los de todo el equipo.
- Las llamadas a la IA del panel (buscador) se apuntan en `docs/tokens-ia.csv`, que sí está en `.gitignore` (cada servidor apunta las suyas). El proveedor traduce su consumo a `{ entrada, salida, cache_lectura, total }` antes de llamar a `registrarIA` (`backend/modulos/tokens.js`); hoy lo hace `backend/ia.js` (Ollama).
- El antiguo `docs/tokens.csv` (hasta el 30/10) sigue ignorado; el panel lo sigue sumando, así que no hace falta moverlo.
- Solo funciona si Claude Code se abre **dentro de la carpeta del repositorio** (si no, no carga `.claude/settings.json`). Si se cierra la terminal de golpe, la sesión no se apunta.
- En el registro de la sesión, el total de tokens se puede citar copiándolo del archivo de esa sesión en `docs/tokens/<persona>/` en la sesión siguiente.
