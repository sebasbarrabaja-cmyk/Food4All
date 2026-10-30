# Encargos de Juan Antonio

- [ ] #1 · 2026-10-30 · de Sebastián · Inglés, portada, «Así de fácil», paso 4: «Everything arrives together» ocupa dos líneas y el círculo del número queda descolocado; acortar el texto (p. ej. «All in one delivery») o alinear el número arriba (`frontend/src/i18n/en.json` o el CSS de los pasos)
- [ ] #2 · 2026-10-30 · de Sebastián · Panel, «Expectativa vs. realidad»: la fila «Semana 17» empieza en minúscula («aún no ha empezado») (`backend/modulos/expectativa.js`)
- [ ] #3 · 2026-10-30 · de Sebastián · Expectativa con los tokens reales: cambiar `prueba('tokens')` por `resumen()` de `backend/modulos/tokens.js` (misma forma, más `fuentes`); la fuente ya no es `docs/tokens.csv` sino `GET /api/admin/tokens` (rama `feat/indicador-tokens`)
- [ ] #4 · 2026-10-30 · de Sebastián · Confirmar las etiquetas de tus prompts en `/admin#prompts`: `2026-10-23-06` (Documento · requisito · 12 requisitos) y `2026-10-27-02` (Código · landing: mejora, comercial, documental); si algo no cuadra, corrige su cabecera
- [ ] #5 · 2026-10-30 · de Sebastián · Tus tokens de Claude Code se guardan ahora en `docs/tokens/juan-antonio/` (un archivo por sesión): súbelos con tus cambios; si salen en `docs/tokens/desconocido/`, ejecuta `git config food4all.persona juan-antonio` y muévelos
