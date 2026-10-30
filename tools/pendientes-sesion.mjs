// Hook SessionStart de Claude Code (.claude/settings.json): al abrir, reanudar o limpiar una sesión,
// lista lo que tiene pendiente quien la abre, y Claude se lo dice a la persona:
// - sus encargos abiertos de docs/encargos/<persona>.md, los de esta copia y los de main en GitHub
//   (así llegan aunque su rama sea antigua). Cada encargo tiene un número fijo («#3»): si en una de las
//   dos versiones está hecho («- [x] #3 …»), ya no sale;
// - sus issues abiertos (gh issue list --assignee @me).
// Sin red, sin gh o sin sesión en gh, se salta esa parte. Nunca debe impedir abrir la sesión.
import { readFileSync, existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { git, raiz, personaGit } from './git-comun.mjs';

const ejecutar = promisify(execFile);
const dir = raiz(process.env.CLAUDE_PROJECT_DIR || process.cwd());
const ENCARGO = /^- \[( |x)\] (#\d+) · (.*)$/i;

// main de GitHub sin pedir nada: con el ssh que tenga configurado cada uno, pero sin preguntas.
const ssh = git(dir, 'config', 'core.sshCommand') || 'ssh';
const traerMain = ejecutar('git', ['-c', `core.sshCommand=${ssh} -o BatchMode=yes -o ConnectTimeout=5`, 'fetch', '--quiet', 'origin', 'main'],
  { cwd: dir, timeout: 8000, env: { ...process.env, GIT_TERMINAL_PROMPT: '0' } }).catch(() => null);
const issues = ejecutar('gh', ['issue', 'list', '--assignee', '@me', '--state', 'open', '--limit', '20', '--json', 'number,title'],
  { cwd: dir, timeout: 8000 }).then(({ stdout }) => JSON.parse(stdout)).catch(() => []);

const salida = [];
try {
  await traerMain;
  const ruta = `docs/encargos/${personaGit(dir)}.md`;
  const local = existsSync(`${dir}/${ruta}`) ? readFileSync(`${dir}/${ruta}`, 'utf8') : '';
  const lineas = [local, git(dir, 'show', `origin/main:${ruta}`)].join('\n').split('\n')
    .map((l) => l.match(ENCARGO)).filter(Boolean);
  const hechos = new Set(lineas.filter((m) => m[1].toLowerCase() === 'x').map((m) => m[2]));
  const abiertos = new Map(lineas.filter((m) => m[1] === ' ' && !hechos.has(m[2])).map((m) => [m[2], m[3]]));
  if (abiertos.size) {
    salida.push(`Encargos abiertos para esta persona (${ruta}). Díselos al empezar y, al terminar cada uno, márcalo «- [x]» sin cambiar su número, con la fecha y el commit:`,
      ...[...abiertos].map(([n, texto]) => `- ${n} · ${texto}`));
  }
} catch { /* silencio a propósito */ }

const lista = await issues;
if (lista.length) {
  salida.push('Issues abiertos asignados a esta persona en GitHub (tablero del equipo). Díselo en una o dos líneas:',
    ...lista.map((i) => `- #${i.number} ${i.title}`), 'Reparto y contratos: docs/contratos.md.');
}
if (salida.length) console.log(salida.join('\n'));
