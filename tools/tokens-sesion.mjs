// Hook SessionEnd de Claude Code (.claude/settings.json): al cerrar la sesión suma los tokens del
// historial y añade una fila a docs/tokens.csv (ignorado por git: cada uno guarda los suyos).
// Si algo falla, sale sin error y sin escribir: nunca debe impedir cerrar la sesión.
import { readFileSync, appendFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const COLUMNAS = ['fecha', 'persona', 'rama', 'sesion', 'motivo', 'modelos', 'mensajes',
  'entrada', 'salida', 'cache_escritura', 'cache_lectura', 'total'];

const git = (cwd, ...args) => {
  try { return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim(); } catch { return ''; }
};
const csv = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));

try {
  const input = JSON.parse(readFileSync(0, 'utf8'));
  const { transcript_path: ruta, session_id: sesion = '', reason: motivo = '' } = input;
  const cwd = input.cwd || process.cwd();
  if (!ruta || !existsSync(ruta)) process.exit(0);

  // Un mismo mensaje puede aparecer en varias líneas (una por bloque): se cuenta una vez por id.
  const usos = new Map();
  const modelos = new Set();
  for (const linea of readFileSync(ruta, 'utf8').split('\n')) {
    if (!linea.trim()) continue;
    let e;
    try { e = JSON.parse(linea); } catch { continue; }
    const m = e?.message;
    if (e?.type !== 'assistant' || !m?.usage) continue;
    if (m.model && m.model !== '<synthetic>') modelos.add(m.model);
    usos.set(m.id ?? e.uuid ?? usos.size, m.usage);
  }
  if (!usos.size) process.exit(0);

  const suma = { entrada: 0, salida: 0, cache_escritura: 0, cache_lectura: 0 };
  for (const u of usos.values()) {
    suma.entrada += u.input_tokens ?? 0;
    suma.salida += u.output_tokens ?? 0;
    suma.cache_escritura += u.cache_creation_input_tokens ?? 0;
    suma.cache_lectura += u.cache_read_input_tokens ?? 0;
  }
  const total = suma.entrada + suma.salida + suma.cache_escritura + suma.cache_lectura;

  const raiz = git(cwd, 'rev-parse', '--show-toplevel') || cwd;
  const destino = `${raiz}/docs/tokens.csv`;
  const fila = {
    fecha: new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Madrid' }).slice(0, 16),
    persona: git(cwd, 'config', 'user.name') || 'desconocido',
    rama: git(cwd, 'branch', '--show-current'),
    sesion, motivo,
    modelos: [...modelos].join(' '),
    mensajes: usos.size,
    ...suma, total,
  };
  if (!existsSync(destino)) appendFileSync(destino, `${COLUMNAS.join(',')}\n`);
  appendFileSync(destino, `${COLUMNAS.map((k) => csv(fila[k])).join(',')}\n`);
} catch {
  // Silencio a propósito: ver la cabecera.
}
