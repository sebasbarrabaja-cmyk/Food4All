// Registro de prompts del proyecto: un fichero Markdown por prompt en /prompts (dentro del repo,
// para que todo el equipo vea los mismos). Cabecera sencilla entre líneas "---".
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';

const DIR = new URL('../prompts/', import.meta.url);
const FIELDS = ['titulo', 'fecha', 'autor', 'herramienta', 'tipo', 'tema', 'origen'];
export const TYPES = ['Prompt base', 'Sesión de trabajo', 'Feedback', 'Versión pulida', 'Otro'];
// Para qué sirvió cada prompt: el panel los agrupa por persona y, dentro, por tema.
export const TEMAS = ['Contexto y método', 'Landing (web y panel)', 'Requisitos del Hito 2', 'Asana', 'Competencia', 'Organización del equipo', 'Otro'];

function parse(file) {
  const raw = readFileSync(new URL(file, DIR), 'utf8').replace(/\r\n/g, '\n');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  if (m) {
    for (const line of m[1].split('\n')) {
      const i = line.indexOf(':');
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return { id: file.replace(/\.md$/, ''), ...meta, texto: (m ? m[2] : raw).trim() };
}

export function list() {
  if (!existsSync(DIR)) return [];
  return readdirSync(DIR)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .sort()
    .map(parse);
}

const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50) || 'prompt';
const oneLine = (s) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim();

// Día de España, no de UTC: entre las 00:00 y las 02:00 toISOString daría el día anterior.
// Con formatToParts y no con un formato de idioma, que puede cambiar entre versiones de ICU.
function hoyEnEspana() {
  const parts = new Intl.DateTimeFormat('en', { timeZone: 'Europe/Madrid', year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}

export function add({ titulo, autor, herramienta, tipo, tema, origen, texto }) {
  mkdirSync(DIR, { recursive: true });
  const fecha = hoyEnEspana();
  // AAAA-MM-DD-NN-titulo.md: NN es el siguiente número del día (01, 02…), para que se ordenen.
  const used = readdirSync(DIR)
    .map((f) => f.match(/^(\d{4}-\d{2}-\d{2})-(\d{2,})-/))
    .filter((m) => m?.[1] === fecha)
    .map((m) => Number(m[2]));
  const nn = String(Math.max(0, ...used) + 1).padStart(2, '0');
  const file = `${fecha}-${nn}-${slug(titulo)}.md`;

  const meta = { titulo, fecha, autor, herramienta, tipo, tema, origen };
  const head = FIELDS.filter((k) => oneLine(meta[k])).map((k) => `${k}: ${oneLine(meta[k])}`).join('\n');
  writeFileSync(new URL(file, DIR), `---\n${head}\n---\n\n${texto.trim()}\n`);
  return parse(file);
}
