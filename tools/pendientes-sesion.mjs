// Hook SessionStart de Claude Code (.claude/settings.json): al abrir una sesión, lista los issues
// abiertos asignados a quien la abre (gh issue list --assignee @me). Lo que se imprime le llega a
// Claude, que se lo dice a la persona. Sin gh, sin sesión en gh o sin red, no imprime nada.
import { execFileSync } from 'node:child_process';

try {
  const out = execFileSync('gh', ['issue', 'list', '--assignee', '@me', '--state', 'open',
    '--limit', '20', '--json', 'number,title'], { encoding: 'utf8', timeout: 8000, stdio: ['ignore', 'pipe', 'ignore'] });
  const issues = JSON.parse(out);
  if (issues.length) {
    console.log([
      'Issues abiertos asignados a esta persona en GitHub (tablero del equipo). Al empezar, díselo en una o dos líneas:',
      ...issues.map((i) => `- #${i.number} ${i.title}`),
      'Reparto y contratos: docs/contratos.md.',
    ].join('\n'));
  }
} catch {
  // Silencio a propósito: el aviso nunca debe impedir abrir la sesión.
}
