---
titulo: Arreglar los hallazgos menores de la revisión de los PR #23 a #31 (encargos #5 a #8)
fecha: 2026-10-30
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
resultado: Código
etiquetas: landing, organización
landing: mantenimiento, interno
origen: Continuación de 2026-10-30-06 (misma sesión), después de unir el PR #38
---

Horas aproximadas: la sesión no guardó la hora de cada mensaje; el registro se escribió a las 15:20.

### ~15:13

si, abre el PR

**Resultado:** PR #38 abierto (registro de la unión y encargos). El asistente corrige `resultado: Aceptado`, que no es un valor válido, a `Código`. Sebastián sube el commit y une el #38.

### ~15:15

haz los encargos #5 a #8

**Resultado:** Especificación con `prompt-master`. Comprobado que el #5 (tokens por persona) ya lo resolvió el PR #32 (`docs/tokens/<persona>/`, en git). Preguntas sobre el #7, que es del módulo de Juan Antonio (`expectativa.js`), y sobre cómo arreglar el #6.

### ~15:17

1b 2a 3a 4a

**Resultado:**
- El #7 pasa a Juan Antonio como encargo, con la propuesta: commits de `HEAD` y caché de 60 s.
- #6: el hook de tokens reescribe el archivo de una sesión retomada y suma los subagentes. Probado con un historial inventado: 150 y luego 180 en el mismo archivo.
- #8: `EnConstruccion` dice que la ruta no responde, con el código de error, en vez de «0 elementos».

### ~15:22

Haz las pruebas y luego el pr

**Resultado:**
- Comprobado con `claude -p` que `--continue` mantiene el id de sesión. Comprobado con historiales reales que los subagentes se guardan en `<sesión>/subagents/*.jsonl` con su consumo.
- La `/code-review high` de la rama (64 k tokens) encontró 9 cosas. Arreglado:
  - un subagente ilegible ya no hace perder la sesión entera, y los historiales se leen de uno en uno;
  - los comentarios del hook dicen la verdad sobre `fecha`, `rama` y los conflictos;
  - un 401 dice «la sesión ha caducado» y los demás errores enseñan el `error` del servidor.
- Queda como encargo #9: quitar en `resumen()` las filas repetidas de una misma sesión, para cubrir el caso de retomarla en otra rama.
- En el navegador (PinchTab, servidor en el puerto 3002 con credenciales temporales, sin `.env`), las cuatro secciones en construcción dicen cuántos elementos devuelve su ruta (1, 3, 2 y 1). El mensaje de 401 no se pudo provocar: al recargar, el panel lleva antes al login.
- PinchTab se atascó una vez (353 % de CPU) y hubo que reiniciarlo.

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
