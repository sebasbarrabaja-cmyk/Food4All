# Prompts del proyecto

Registro de todos los prompts usados para desarrollar FOOD4ALL. Se consultan y se añaden desde el panel de administración (sección **Prompts**).

- Un fichero `.md` por prompt, con nombre `AAAA-MM-DD-NN-titulo.md` (`NN` = número del prompt en ese día: `01`, `02`…), para que se ordenen por fecha y por orden.
- Cabecera entre líneas `---` con `titulo`, `fecha`, `autor`, `herramienta`, `tipo`, `tema` y `origen`. `tema` dice para qué sirvió: Contexto y método · Landing (web y panel) · Requisitos del Hito 2 · Asana · Competencia · Organización del equipo · Otro. El panel los agrupa por persona y, dentro, por tema.
- Desde el 30/10 (punto 10 del feedback, #19), la cabecera lleva además, para encontrar los prompts:
  - `resultado` (uno): qué salió del prompt. Código · Documento · Asana · Análisis o decisión · Descartado.
  - `etiquetas` (una o varias, separadas por comas): para qué se usó. landing · requisito · búsqueda de información · Asana · competencia · organización · otro.
  - `landing` (solo si tocó la landing; uno o varios): vista (diseño) · comercial (textos de venta, FAQ, comparativas) · documental (páginas que enseñan el proyecto) · mejora (funciones nuevas) · mantenimiento (arreglos, seguridad, QA) · interno (lo que no se ve: refactor, agentes, herramientas).
  - `requisitos` (opcional): IDs de requisitos y decisiones del Hito 2 a los que llegó o que cambió (`RF-05`, `RST-03`, `C-28`…). En el panel, al buscar un ID salen los prompts que llevaron a él, con sus líneas **Resultado:**, y los que solo lo mencionan.
  - Las listas cerradas están en `backend/prompts.js` (`RESULTADOS`, `ETIQUETAS`, `LANDING`): si añadís un valor, cambiadlo también allí.
- En las sesiones, cada mensaje va bajo `### HH:MM` y termina con una línea `**Resultado:**` que dice qué se hizo con él (o si se interrumpió o se descartó). Así cada prompt queda con fecha, persona y resultado.
- Los prompts se guardan tal cual se enviaron, con sus erratas: es un registro, no un documento pulido.
- Si añadís uno a mano, seguid el mismo formato y subidlo con el resto de cambios.
