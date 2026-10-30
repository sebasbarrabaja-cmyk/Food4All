// Ayudas con git para los hooks de Claude Code (tools/*-sesion.mjs). El panel no las usa.
import { execFileSync } from 'node:child_process';
import { PERSONAS, personaDe } from './tokens-comun.mjs';

export const git = (cwd, ...args) => {
  try { return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; }
};

// Raíz del repositorio, aunque el hook se lance desde una subcarpeta.
export const raiz = (cwd) => git(cwd, 'rev-parse', '--show-toplevel') || cwd;

// ID de quien usa este ordenador. Primero `git config food4all.persona`, si es un ID del equipo; si no,
// se deduce del nombre y el correo de git. También es nombre de carpeta y de archivo.
export function personaGit(cwd) {
  const fija = git(cwd, 'config', 'food4all.persona');
  if (Object.hasOwn(PERSONAS, fija)) return fija;
  return personaDe(`${git(cwd, 'config', 'user.name')} ${git(cwd, 'config', 'user.email')}`);
}
