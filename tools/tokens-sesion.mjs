// Hook SessionEnd de Claude Code (.claude/settings.json): al cerrar la sesión suma los tokens del
// historial y lo guarda en un archivo nuevo, docs/tokens/<persona>/<fecha>-<sesion>.csv. Va en git:
// súbelo con tus cambios y el panel (/admin#tokens) suma los de todo el equipo. Un archivo por sesión
// y no una fila más en el mismo: así dos ramas nunca tocan el mismo archivo y no hay conflictos.
// Si algo falla, sale sin error y sin escribir: nunca debe impedir cerrar la sesión.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { personaDe, lineaCsv } from './tokens-comun.mjs';

const COLUMNAS = ['fecha', 'persona', 'rama', 'sesion', 'motivo', 'modelos', 'mensajes',
  'entrada', 'salida', 'cache_escritura', 'cache_lectura', 'total'];

const git = (cwd, ...args) => {
  try { return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim(); } catch { return ''; }
};
// ID del equipo. Primero `git config food4all.persona`, si alguien lo ha puesto; si no, se deduce
// del nombre y el correo de git.
function persona(cwd) {
  const fija = git(cwd, 'config', 'food4all.persona');
  if (/^[a-z-]+$/.test(fija)) return fija; // también es el nombre de la carpeta: nada de «../»
  return personaDe(`${git(cwd, 'config', 'user.name')} ${git(cwd, 'config', 'user.email')}`);
}

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
  const quien = persona(cwd);
  const fecha = new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Madrid' }).slice(0, 16);
  const carpeta = `${raiz}/docs/tokens/${quien}`;
  mkdirSync(carpeta, { recursive: true });
  // 2026-10-30 13:08 + id de la sesión → 2026-10-30-1308-1a2b3c4d.csv
  const destino = `${carpeta}/${fecha.replace(/[ :]/g, (c) => (c === ' ' ? '-' : ''))}-${sesion.replace(/[^a-z0-9]/gi, '').slice(0, 8) || 'sesion'}.csv`;
  const fila = {
    fecha,
    persona: quien,
    rama: git(cwd, 'branch', '--show-current'),
    sesion, motivo,
    modelos: [...modelos].join(' '),
    mensajes: usos.size,
    ...suma, total,
  };
  writeFileSync(destino, `${COLUMNAS.join(',')}\n${lineaCsv(COLUMNAS, fila)}`);
} catch {
  // Silencio a propósito: ver la cabecera.
}
