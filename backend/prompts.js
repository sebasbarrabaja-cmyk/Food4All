// Registro de prompts del proyecto: un fichero Markdown por prompt en /prompts (dentro del repo,
// para que todo el equipo vea los mismos). Cabecera sencilla entre líneas "---".
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';

const DIR = new URL('../prompts/', import.meta.url);
const FIELDS = ['titulo', 'fecha', 'autor', 'herramienta', 'tipo', 'tema', 'resultado', 'etiquetas', 'landing', 'requisitos', 'origen'];
export const TYPES = ['Prompt base', 'Sesión de trabajo', 'Feedback', 'Otro'];
// Para qué sirvió cada prompt: el panel los agrupa por persona y, dentro, por tema.
export const TEMAS = ['Contexto y método', 'Landing (web y panel)', 'Requisitos del Hito 2', 'Asana', 'Competencia', 'Organización del equipo', 'Otro'];
// Punto 10 del feedback del 27/10 (#19). Qué salió del prompt (uno), para qué se usó (varias) y, si
// tocó la landing, de qué tipo fue el cambio (varios). Listas cerradas: prompts/README.md.
export const RESULTADOS = ['Código', 'Documento', 'Asana', 'Análisis o decisión', 'Descartado'];
export const ETIQUETAS = ['landing', 'requisito', 'búsqueda de información', 'Asana', 'competencia', 'organización', 'otro'];
export const LANDING = ['vista', 'comercial', 'documental', 'mejora', 'mantenimiento', 'interno'];
// Campos de la cabecera que son listas separadas por comas.
const LISTAS = ['etiquetas', 'landing', 'requisitos'];

// IDs de requisitos y decisiones del Hito 2, con los formatos de docs/requisitos: RF-05, RF-12.1-01,
// RF-01.1.CA1, RF-CUE-01, RNF-02.1-03, RST-03, N-CAR-01, N-12, C-28, H-03, M-06, CL-01, D-01. El final
// no puede seguir con letra, cifra, «.N» o «-N»: así RF-12 no coincide dentro de RF-12.1-01.
const ID_FUENTE = String.raw`\b(?:R(?:N)?F-(?:\d+(?:\.\d+)?(?:-\d+)?(?:\.CA\d+)?|[A-Z]+-\d+)|RST-\d+|N-(?:[A-Z]+-)?\d+|C-\d+|H-\d+|M-\d+|CL-\d+|D-\d+)(?![\w]|[.-]\d)`;
const ID = new RegExp(ID_FUENTE, 'g');
const ID_EXACTO = new RegExp(`^${ID_FUENTE}$`);

// Cada mensaje de una sesión (### HH:MM) o apartado (#### Cambio 1…) con su línea **Resultado:**, que dice
// qué se decidió o se hizo. Es lo que enseña el panel al buscar cómo se llegó a un requisito. Los
// encabezados sin «Resultado» (por ejemplo, dentro de un prompt pegado) no cuentan.
function pasos(texto) {
  return texto.split(/^#{3,4} /m).slice(1).map((bloque) => {
    const titulo = bloque.slice(0, bloque.indexOf('\n')).trim();
    const r = bloque.match(/\*\*Resultado:\*\*\s*([\s\S]*?)(?=\n#{2,4} |$)/);
    return { titulo, resultado: r ? r[1].trim() : '' };
  }).filter((p) => p.resultado);
}

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
  for (const k of LISTAS) meta[k] = (meta[k] ?? '').split(',').map((v) => v.trim()).filter(Boolean);
  const texto = (m ? m[2] : raw).trim();
  return { id: file.replace(/\.md$/, ''), ...meta, texto, pasos: pasos(texto), menciona: [...new Set(texto.match(ID) ?? [])] };
}

export const esId = (v) => ID_EXACTO.test(v);

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

export function add({ titulo, autor, herramienta, tipo, tema, resultado, etiquetas = [], landing = [], requisitos = [], origen, texto }) {
  mkdirSync(DIR, { recursive: true });
  const fecha = hoyEnEspana();
  // AAAA-MM-DD-NN-titulo.md: NN es el siguiente número del día (01, 02…), para que se ordenen.
  const used = readdirSync(DIR)
    .map((f) => f.match(/^(\d{4}-\d{2}-\d{2})-(\d{2,})-/))
    .filter((m) => m?.[1] === fecha)
    .map((m) => Number(m[2]));
  const nn = String(Math.max(0, ...used) + 1).padStart(2, '0');
  const file = `${fecha}-${nn}-${slug(titulo)}.md`;

  const meta = { titulo, fecha, autor, herramienta, tipo, tema, resultado, etiquetas: etiquetas.join(', '), landing: landing.join(', '), requisitos: requisitos.join(', '), origen };
  const head = FIELDS.filter((k) => oneLine(meta[k])).map((k) => `${k}: ${oneLine(meta[k])}`).join('\n');
  writeFileSync(new URL(file, DIR), `---\n${head}\n---\n\n${texto.trim()}\n`);
  return parse(file);
}
