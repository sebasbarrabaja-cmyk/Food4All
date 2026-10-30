// IA del panel (buscador): un modelo local con Ollama, sin clave ni pago. Decisión de Sebastián (30/10):
// funciona en el ordenador donde corre Ollama; en los demás, el panel avisa y el buscador solo busca
// secciones. Nada sale del ordenador: los datos del panel no se envían a ningún servicio externo.
// Arrancar: `ollama serve` y, la primera vez, `ollama pull <modelo>`.

const URL_OLLAMA = process.env.OLLAMA_URL || 'http://127.0.0.1:11434';
export const MODELO = process.env.IA_MODELO || 'qwen3.5:4b';
// El buscador envía los datos del panel y la lista de prompts: con el contexto por defecto de Ollama
// (unos 4.000 tokens) se cortarían sin avisar.
const CONTEXTO = Number(process.env.IA_CONTEXTO) || 16384;

export class AIError extends Error {
  constructor(message, status = 502) { super(message); this.status = status; }
}

// ¿Responde Ollama y tiene el modelo? Ollama lista los modelos con su etiqueta («llama3:latest»): un
// nombre sin etiqueta es el «:latest». El resultado se guarda 30 s para no esperar a Ollama (hasta
// 1,5 s si no responde) en cada carga del panel.
const NOMBRES = MODELO.includes(':') ? [MODELO] : [MODELO, `${MODELO}:latest`];
let comprobado = { cuando: 0, listo: false };
export async function aiReady() {
  if (Date.now() - comprobado.cuando < 30_000) return comprobado.listo;
  let listo = false;
  try {
    const r = await fetch(`${URL_OLLAMA}/api/tags`, { signal: AbortSignal.timeout(1500) });
    const { models = [] } = await r.json();
    listo = models.some((m) => NOMBRES.includes(m.name) || NOMBRES.includes(m.model));
  } catch { /* apagado o inalcanzable */ }
  comprobado = { cuando: Date.now(), listo };
  return listo;
}

// Devuelve el texto de la respuesta. Con `schema` (JSON Schema), responde en JSON con esa forma.
// `onUso` recibe los tokens gastados, en la forma común de modulos/tokens.js.
export async function generate({ system, prompt, schema, timeoutMs = 90_000, onUso }) {
  let res;
  try {
    res = await fetch(`${URL_OLLAMA}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODELO,
        messages: [{ role: 'system', content: system }, { role: 'user', content: prompt }],
        stream: false,
        think: false, // sin razonamiento: el buscador solo elige un apartado y da una respuesta corta
        ...(schema && { format: schema }),
        options: { num_ctx: CONTEXTO, temperature: 0 },
      }),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (e) {
    if (e.name === 'TimeoutError') throw new AIError('La IA ha tardado demasiado. Prueba otra vez.');
    // La causa real (conexión rechazada, nombre mal escrito…) va en el mensaje para poder depurar.
    throw new AIError(`No se pudo contactar con la IA local en ${URL_OLLAMA} (¿está en marcha \`ollama serve\`?): ${e.cause?.code ?? e.message}`, 503);
  }

  let data;
  try { data = await res.json(); } catch (e) {
    if (e.name === 'TimeoutError') throw new AIError('La IA ha tardado demasiado. Prueba otra vez.');
    throw new AIError(`La IA local cortó la respuesta: ${e.message}`);
  }
  if (res.status === 404) throw new AIError(`Falta el modelo ${MODELO}: ollama pull ${MODELO}`, 503);
  if (!res.ok) throw new AIError(`Error de la IA (${res.status}): ${data.error ?? 'sin detalle'}`);
  if ((data.prompt_eval_count ?? 0) >= CONTEXTO) console.warn(`IA: la pregunta llenó el contexto (${CONTEXTO} tokens); sube IA_CONTEXTO.`);

  // Ollama reutiliza lo que ya tenía calculado de la pregunta anterior (mismo principio) y no lo cuenta en
  // prompt_eval_count ni dice cuánto es: la entrada apuntada puede quedarse corta y la caché sale a 0.
  onUso?.({ entrada: data.prompt_eval_count ?? 0, salida: data.eval_count ?? 0, cache_lectura: 0 });
  const text = data.message?.content ?? '';
  if (!text.trim()) throw new AIError(data.done_reason === 'length' ? 'La respuesta se cortó por larga.' : 'La IA no devolvió texto.');
  return text;
}
