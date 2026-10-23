// Segundo agente: revisa y pule los prompts del equipo antes de usarlos con Claude Code.
// Usa Gemini gratis (backend/gemini.js); la clave vive solo en backend/.env (GEMINI_API_KEY).
import { generate, aiReady, AIError, MODELS } from './gemini.js';

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

export { AIError as AgentError };
export const agentReady = aiReady;

export async function polishPrompt(texto, objetivo = '') {
  const peticion = objetivo
    ? `Objetivo del autor para esta revisión: ${objetivo}\n\n<prompt_original>\n${texto}\n</prompt_original>`
    : `<prompt_original>\n${texto}\n</prompt_original>`;

  // Los prompts largos (el documento maestro) tardan más: hasta 3 minutos.
  const out = await generate({ model: MODELS.smart, system: SYSTEM, prompt: peticion, timeoutMs: 180_000 });

  const pulido = out.match(/<prompt_pulido>\s*([\s\S]*?)\s*<\/prompt_pulido>/)?.[1];
  if (!pulido) throw new AIError('La IA no devolvió un prompt válido (formato inesperado).');
  const cambios = (out.match(/<cambios>\s*([\s\S]*?)\s*<\/cambios>/)?.[1] ?? '')
    .split('\n').map((l) => l.replace(/^\s*[-*]\s*/, '').trim()).filter(Boolean);

  return { texto: pulido, cambios, modelo: MODELS.smart };
}
