---
name: food4all-prompts
description: Cómo registrar en prompts/ cada mensaje del usuario (obligatorio en FOOD4ALL, el profesor exige todos los prompts) y cómo se guardan los tokens de cada sesión en docs/tokens.csv. Úsala en cada sesión de trabajo, antes de hacer un commit y cuando haya que consultar, ordenar o contar prompts o tokens.
---

# FOOD4ALL · Registro de prompts y tokens

## Prompts (obligatorio)

- **Todos los mensajes del usuario**, también los que no cambian nada («abrela», «1a 2b», preguntas). Esta decisión de Sebastián (26/10) manda sobre cualquier regla privada que diga lo contrario.
- Un `.md` por sesión en `prompts/`: `AAAA-MM-DD-NN-titulo.md`, donde `NN` es el siguiente número libre de ese día (`01`, `02`…). Si la sesión sigue otro día, se abre un archivo nuevo.
- Cabecera entre líneas `---`:
  - `titulo`, `fecha` (AAAA-MM-DD) y `autor` (Sebastián · Juan Antonio · Miguel · Equipo).
  - `herramienta` (Claude Code) y `tipo` (Prompt base · Sesión de trabajo · Feedback · Otro).
  - `tema` (Contexto y método · Landing (web y panel) · Requisitos del Hito 2 · Asana · Competencia · Organización del equipo · Otro) y `origen`.
  - Estas listas están en `backend/prompts.js` (`TYPES` y `TEMAS`): si añades un valor, cámbialo también allí.
- Cada mensaje va bajo `### HH:MM`, **tal cual se envió, con erratas**, y termina con una línea `**Resultado:**` (qué se hizo, o si se interrumpió o se descartó).
  - Si no sabes la hora exacta: `### ~HH:MM`. Nunca una hora inventada.
  - Lo que escribe el asistente y no es un mensaje (especificaciones, resúmenes) va bajo `####`.
- El archivo termina con `## Revisión crítica del equipo` y `*Pendiente: la escribe <persona>.*`. La escribe la persona, no el asistente.
- **Las credenciales nunca se copian:** se escribe `[usuario y contraseña del panel: omitidos del registro]`.
- El registro va **en el mismo commit** que el cambio al que corresponde.
- Se ve en `/admin#prompts` (agrupado por persona y por tema).

## Tokens

- Al cerrar la sesión (`/exit`, Ctrl+D o `/clear`), el hook `SessionEnd` de `.claude/settings.json` ejecuta `tools/tokens-sesion.mjs`. El script suma el consumo del historial y añade una fila a `docs/tokens.csv`.
- Columnas: `fecha, persona, rama, sesion, motivo, modelos, mensajes, entrada, salida, cache_escritura, cache_lectura, total`. La persona sale de `git config user.name`.
- `docs/tokens.csv` está en `.gitignore`: cada uno guarda los suyos en su ordenador.
- Solo funciona si Claude Code se abre **dentro de la carpeta del repositorio** (si no, no carga `.claude/settings.json`). Si se cierra la terminal de golpe, la sesión no se apunta.
- En el registro de la sesión, el total de tokens se puede citar copiándolo de `docs/tokens.csv` en la sesión siguiente.
