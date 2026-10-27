// Módulos nuevos del panel (feedback del profesor del 27/10). server.js solo llama a montarModulos:
// cada módulo vive en su archivo y lo cambia solo su dueño (docs/contratos.md, apartado 1).
import tareas from './tareas.js';
import avisos from './avisos.js';
import cronograma from './cronograma.js';
import traza from './traza.js';
import tokens from './tokens.js';
import expectativa from './expectativa.js';

export function montarModulos(app, requireAdmin) {
  const modulos = { tareas, avisos, cronograma, traza, tokens, expectativa };
  for (const [nombre, router] of Object.entries(modulos)) app.use(`/api/admin/${nombre}`, requireAdmin, router);
}
