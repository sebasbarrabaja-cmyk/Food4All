// IA del panel (buscador): Gemini, nivel gratuito de Google AI Studio.
// La clave vive solo en backend/.env (GEMINI_API_KEY); nunca llega al navegador.
// Condiciones del nivel gratuito: solo para uso interno del equipo (panel privado), nunca en la web
// pública, porque en la UE no se puede ofrecer a usuarios sin pasar al nivel de pago.

const API = 'https://generativelanguage.googleapis.com/v1beta/models';

export const MODELS = {
  // Rápido y sin razonamiento (~2-3 s): buscador.
  fast: process.env.GEMINI_MODEL_RAPIDO || 'gemini-3.5-flash-lite',
  // Razona antes de responder (~3-5 s): revisor de prompts.
  smart: process.env.GEMINI_MODEL || 'gemini-3.5-flash',
};

export class AIError extends Error {
  constructor(message, status = 502) { super(message); this.status = status; }
}

// usageMetadata de Gemini → { entrada, salida, cache_lectura }. Entra todo lo enviado (también lo de
// herramientas) menos lo leído de caché, que va aparte; el razonamiento (thoughts) se cobra como salida.
function uso(u) {
  const cache = u.cachedContentTokenCount ?? 0;
  return {
    entrada: (u.promptTokenCount ?? 0) + (u.toolUsePromptTokenCount ?? 0) - cache,
    salida: (u.candidatesTokenCount ?? 0) + (u.thoughtsTokenCount ?? 0),
    cache_lectura: cache,
  };
}

export const aiReady = () => Boolean(process.env.GEMINI_API_KEY);

// Devuelve el texto de la respuesta. Con `schema`, Gemini responde en JSON con esa forma.
// `onUso` recibe los tokens gastados, en la forma común de modulos/tokens.js (sirve para cualquier
// proveedor), aunque luego la respuesta no sirva.
export async function generate({ model, system, prompt, schema, timeoutMs = 90_000, onUso }) {
  if (!aiReady()) throw new AIError('Falta GEMINI_API_KEY en backend/.env.', 503);

  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    ...(schema && { generationConfig: { responseMimeType: 'application/json', responseSchema: schema } }),
  };

  // Un reintento si Google está saturado (503): en el nivel gratuito pasa a veces.
  for (let intento = 1; ; intento++) {
    let res;
    try {
      res = await fetch(`${API}/${model}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (e) {
      throw new AIError(e.name === 'TimeoutError' ? 'La IA ha tardado demasiado. Prueba otra vez.' : `No se pudo contactar con la IA: ${e.message}`);
    }

    if (res.status === 503 && intento === 1) { await new Promise((r) => setTimeout(r, 2000)); continue; }
    const data = await res.json().catch(() => ({}));
    if (res.status === 400 && /API key/i.test(data.error?.message ?? '')) throw new AIError('La clave de Gemini no es válida (GEMINI_API_KEY).', 503);
    if (res.status === 429) throw new AIError('Se ha agotado la cuota gratuita de la IA. Prueba más tarde.', 429);
    if (res.status === 503) throw new AIError('La IA está saturada ahora mismo. Prueba en un minuto.', 503);
    if (!res.ok) throw new AIError(`Error de la IA (${res.status}): ${data.error?.message ?? 'sin detalle'}`);

    if (data.usageMetadata) onUso?.(uso(data.usageMetadata));
    const cand = data.candidates?.[0];
    if (!cand || cand.finishReason === 'SAFETY' || data.promptFeedback?.blockReason) throw new AIError('La IA no ha querido responder a esto.', 422);
    // Las partes con `thought: true` son el razonamiento interno: no se muestran.
    const text = (cand.content?.parts ?? []).filter((p) => !p.thought).map((p) => p.text ?? '').join('');
    if (!text) throw new AIError(cand.finishReason === 'MAX_TOKENS' ? 'La respuesta se cortó por larga.' : 'La IA no devolvió texto.');
    return text;
  }
}
