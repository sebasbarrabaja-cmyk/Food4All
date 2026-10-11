// Registro de prompts del proyecto: un fichero Markdown por prompt en /prompts (dentro del repo,
// para que todo el equipo vea los mismos). Cabecera sencilla entre líneas "---".
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';

const DIR = new URL('../prompts/', import.meta.url);
const FIELDS = ['titulo', 'fecha', 'autor', 'herramienta', 'tipo', 'origen'];
export const TYPES = ['Prompt base', 'Sesión de trabajo', 'Feedback', 'Versión pulida', 'Otro'];

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

export function add({ titulo, autor, herramienta, tipo, origen, texto }) {
  mkdirSync(DIR, { recursive: true });
  const fecha = new Date().toISOString().slice(0, 10);
  const existing = new Set(readdirSync(DIR));
  let file = `${fecha}-${slug(titulo)}.md`;
  for (let n = 2; existing.has(file); n++) file = `${fecha}-${slug(titulo)}-${n}.md`;

  const meta = { titulo, fecha, autor, herramienta, tipo, origen };
  const head = FIELDS.filter((k) => oneLine(meta[k])).map((k) => `${k}: ${oneLine(meta[k])}`).join('\n');
  writeFileSync(new URL(file, DIR), `---\n${head}\n---\n\n${texto.trim()}\n`);
  return parse(file);
}
