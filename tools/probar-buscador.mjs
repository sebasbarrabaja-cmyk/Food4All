// Batería de preguntas para afinar el buscador del panel (backend/search.js) con la IA local.
// Uso: node tools/probar-buscador.mjs   (necesita Ollama en marcha; no suma tokens al panel)
// Cada caso: pregunta, apartado esperado y, si aplica, el principio del id del prompt esperado.
// `antes` = pregunta previa de la misma conversación (para probar «los», «ese»…).
import { ask } from '../backend/search.js';

const CASOS = [
  ['¿De qué va el proyecto?', '#resumen'],
  ['¿Qué incluye y qué no incluye FOOD4ALL?', '#resumen'],
  ['¿Qué decisiones están descartadas?', '#resumen'],
  ['¿Cuánto mide el mercado?', '#mercado'],
  ['¿Cuántos estudiantes hay en el segmento?', '#mercado'],
  ['¿Qué ley regula los riders?', '#legal'],
  ['¿Qué dice el RGPD del proyecto?', '#legal'],
  ['¿Quién hace el frontend?', '#equipo'],
  ['¿Qué es la RST-06?', '#hito2'],
  ['¿Qué necesidades salieron de las entrevistas?', '#hito2'],
  ['¿Qué se decidió en la criba?', '#hito2'],
  ['¿Qué requisitos son Must?', '#hito2'],
  ['¿Qué hitos hay en el curso?', '#hitos'],
  ['¿Cuántas altas de vendedores hay?', '#vendedores'],
  ['¿Cuántos tokens hemos gastado?', '#tokens'],
  ['¿Qué pedidos de ejemplo hay?', '#marketplace'],
  ['¿Dónde están los prompts de la landing?', '#prompts'],
  ['¿En qué prompt se hizo el tema oscuro?', '#prompts', '2026-10-20-04'],
  ['Llévame al prompt de la investigación del comercio local', '#prompts', '2026-10-26-01'],
  ['¿Qué prompt hizo Juan Antonio para los idiomas?', '#prompts', '2026-10-27-02'],
  ['¿Dónde está el formulario de alta?', '/vender'],
  ['¿Dónde están las preguntas frecuentes?', '/faq'],
  ['¿Cuál es la capital de Francia?', 'ninguno'],
  // Seguimiento: «los» se refiere a la pregunta anterior.
  ['¿Y puedes mandarme al prompt que los creó?', '#prompts', '2026-10-23', { antes: '¿Qué requisitos de restricción (RST) votó Juan Antonio?' }],
  ['¿Y quién lo hizo?', '#prompts', '2026-10-20-03', { antes: '¿En qué prompt se pusieron los límites del formulario y del login?' }],
];

let bien = 0;
const tiempos = [];
for (const [pregunta, destino, prompt, { antes } = {}] of CASOS) {
  const conversacion = [];
  if (antes) {
    const r0 = await ask(antes, { apuntar: false });
    conversacion.push({ pregunta: antes, respuesta: r0.respuesta });
  }
  const t = Date.now();
  let r;
  try { r = await ask(pregunta, { conversacion, apuntar: false }); } catch (e) { r = { respuesta: `ERROR ${e.message}`, destino: null }; }
  const s = (Date.now() - t) / 1000;
  tiempos.push(s);
  const okDestino = (r.destino ?? 'ninguno') === destino;
  const okPrompt = !prompt || (r.prompt ?? '').startsWith(prompt);
  bien += okDestino && okPrompt;
  console.log(`${okDestino && okPrompt ? 'OK ' : 'MAL'} ${s.toFixed(1)} s | ${pregunta} → ${r.destino ?? 'ninguno'}${r.prompt ? ` · ${r.prompt}` : ''}${okDestino && okPrompt ? '' : ` (esperado ${destino}${prompt ? ` · ${prompt}…` : ''})`}\n    ${r.respuesta.slice(0, 140)}`);
}
tiempos.sort((a, b) => a - b);
console.log(`\nAcierto: ${bien}/${CASOS.length} · mediana ${tiempos[Math.floor(tiempos.length / 2)].toFixed(1)} s · máximo ${tiempos.at(-1).toFixed(1)} s`);
