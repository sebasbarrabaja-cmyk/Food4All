// Segundo agente: revisa y pule los prompts del equipo antes de usarlos con Claude Code.
// La clave vive solo en backend/.env (ANTHROPIC_API_KEY); nunca llega al navegador.
import Anthropic from '@anthropic-ai/sdk';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-opus-5-5';

const SYSTEM = `Eres el revisor de prompts del equipo de FOOD4ALL, un proyecto universitario de Ingeniería Informática: una landing informativa (React + Express) de un marketplace de alimentación local en Andalucía. El equipo escribe prompts en español para un asistente de programación (Claude Code) y tú los pules antes de que se usen.

Tu trabajo:
- Mantén la intención, el alcance y todas las decisiones del autor. No añadas funcionalidades ni datos nuevos; si falta algo importante, indícalo como pregunta o como "pendiente" en lugar de inventarlo.
- Ordena el contenido: contexto, objetivo, tareas concretas (numeradas si hay varias), restricciones y criterio de "terminado".
- Elimina ambigüedades, repeticiones y erratas. Convierte peticiones vagas ("más bonito", "más animado") en criterios comprobables sin cambiar lo que se pide.
- Respeta las decisiones ya tomadas del proyecto: es una landing para el profesor (profesional, no funcional), contenido en español, datos de ejemplo marcados como tales, sin prueba social inventada y precios como "Precio todavía no disponible".
- Escribe en español claro y directo, sin relleno.

Responde exactamente con este formato y nada más:
<prompt_pulido>
(el prompt mejorado, listo para copiar)
</prompt_pulido>
<cambios>
- (cada cambio importante que has hecho y por qué, en una línea)
</cambios>`;

export class AgentError extends Error {
  constructor(message, status = 502) { super(message); this.status = status; }
}

export const agentReady = () => Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);

export async function polishPrompt(texto, objetivo = '') {
  if (!agentReady()) throw new AgentError('Falta ANTHROPIC_API_KEY en backend/.env.', 503);
  const client = new Anthropic();

  const peticion = objetivo
    ? `Objetivo del autor para esta revisión: ${objetivo}\n\n<prompt_original>\n${texto}\n</prompt_original>`
    : `<prompt_original>\n${texto}\n</prompt_original>`;

  let msg;
  try {
    // En streaming: los prompts largos (el documento maestro) pueden generar respuestas largas.
    msg = await client.beta.messages.stream({
      model: MODEL,
      max_tokens: 64000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: 'medium' },
      system: SYSTEM,
      messages: [{ role: 'user', content: peticion }],
    }).finalMessage();
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) throw new AgentError('La clave de Anthropic no es válida (ANTHROPIC_API_KEY).', 503);
    if (e instanceof Anthropic.RateLimitError) throw new AgentError('Demasiadas peticiones a la IA. Prueba en un minuto.', 429);
    if (e instanceof Anthropic.APIError) throw new AgentError(`Error de la IA (${e.status ?? 'sin estado'}): ${e.message}`);
    throw new AgentError(`No se pudo contactar con la IA: ${e.message}`);
  }

  if (msg.stop_reason === 'refusal') throw new AgentError('La IA no ha querido revisar este texto.', 422);
  const out = msg.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  const pulido = out.match(/<prompt_pulido>\s*([\s\S]*?)\s*<\/prompt_pulido>/)?.[1];
  if (!pulido) {
    const motivo = msg.stop_reason === 'max_tokens' ? 'la respuesta se cortó por larga' : 'formato inesperado';
    throw new AgentError(`La IA no devolvió un prompt válido (${motivo}).`);
  }
  const cambios = (out.match(/<cambios>\s*([\s\S]*?)\s*<\/cambios>/)?.[1] ?? '')
    .split('\n').map((l) => l.replace(/^\s*[-*]\s*/, '').trim()).filter(Boolean);

  return { texto: pulido, cambios, modelo: msg.model };
}
