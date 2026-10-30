// Hook SessionEnd de Claude Code (.claude/settings.json): al cerrar la sesión suma los tokens del
// historial (con sus subagentes) y lo guarda en docs/tokens/<persona>/<fecha>-<sesion>.csv. Va en git:
// súbelo con tus cambios y el panel (/admin#tokens) suma los de todo el equipo. Un archivo por sesión
// y no una fila más en el mismo: así dos ramas nunca tocan el mismo archivo y no hay conflictos.
// Si algo falla, sale sin error y sin escribir: nunca debe impedir cerrar la sesión.
import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { lineaCsv } from './tokens-comun.mjs';
import { git, raiz as raizDe, personaGit } from './git-comun.mjs';

const COLUMNAS = ['fecha', 'persona', 'rama', 'sesion', 'motivo', 'modelos', 'mensajes',
  'entrada', 'salida', 'cache_escritura', 'cache_lectura', 'total'];

try {
  const input = JSON.parse(readFileSync(0, 'utf8'));
  const { transcript_path: ruta, session_id: sesion = '', reason: motivo = '' } = input;
  const cwd = input.cwd || process.cwd();
  if (!ruta || !existsSync(ruta)) process.exit(0);

  // El historial principal y el de cada subagente (<historial sin .jsonl>/subagents/*.jsonl), que
  // Claude Code guarda aparte. Un mismo mensaje puede aparecer en varias líneas (una por bloque): se
  // cuenta una vez por id.
  const subagentes = `${ruta.replace(/\.jsonl$/, '')}/subagents`;
  const historiales = [ruta, ...(existsSync(subagentes)
    ? readdirSync(subagentes).filter((n) => n.endsWith('.jsonl')).map((n) => `${subagentes}/${n}`) : [])];
  const usos = new Map();
  const modelos = new Set();
  for (const linea of historiales.flatMap((h) => readFileSync(h, 'utf8').split('\n'))) {
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

  const raiz = raizDe(cwd);
  const quien = personaGit(cwd);
  const fecha = new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Madrid' }).slice(0, 16);
  const carpeta = `${raiz}/docs/tokens/${quien}`;
  mkdirSync(carpeta, { recursive: true });
  // 2026-10-30 13:08 + id de la sesión → 2026-10-30-1308-1a2b3c4d.csv. Una sesión retomada
  // (--continue, --resume) trae el historial entero: se reescribe su archivo, que conserva la fecha
  // del primer cierre, en vez de crear otro que volvería a contar lo ya apuntado.
  const id = sesion.replace(/[^a-z0-9]/gi, '').slice(0, 8);
  const previo = id && readdirSync(carpeta).find((n) => n.endsWith(`-${id}.csv`));
  const destino = `${carpeta}/${previo || `${fecha.replace(/[ :]/g, (c) => (c === ' ' ? '-' : ''))}-${id || 'sesion'}.csv`}`;
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
