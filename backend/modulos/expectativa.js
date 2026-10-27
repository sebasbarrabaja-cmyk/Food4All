// Punto 11, expectativa vs. realidad. Dueño: Juan Antonio. Contrato: docs/contratos.md.
// Se calcula en cada petición y no se guarda nada: lo previsto sale de docs/FOOD4ALL_alcance_coste_tiempo.md
// y lo real, de git, de prompts/ y de la ruta de tokens. Si un dato no se puede medir, se dice («Sin medir»),
// nunca se estima. Además de los campos del contrato, cada fila lleva `medido` (medido | sin-medir | prueba | futuro).
import { Router } from 'express';
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { prueba } from './prueba.js';

const RAIZ = fileURLToPath(new URL('../../', import.meta.url));
const PLAN = 'docs/FOOD4ALL_alcance_coste_tiempo.md';

// Autores de git de cada persona (IDs de datos-prueba/usuarios.json). Sebastián firma con varios nombres
// desde distintos equipos; todos son la misma cuenta de GitHub.
const AUTORES = {
  sebastian: ['Sebastián', 'Sebastian', 'ZeroNegativo', 'sebasbarrabaja-cmyk'],
  'juan-antonio': ['Jamc46'],
  miguel: [],
};
const NOMBRES = { sebastian: 'Sebastián', 'juan-antonio': 'Juan Antonio', miguel: 'Miguel' };

const plano = (s) => s.replace(/\*\*|`/g, '').trim();
const celdas = (l) => l.replace(/^\||\|$/g, '').split('|').map(plano);

// Filas de la primera tabla Markdown cuya cabecera empieza por esas columnas.
function tabla(md, ...columnas) {
  const lineas = md.split('\n');
  const i = lineas.findIndex((l) => l.startsWith('|') && columnas.every((c, k) => celdas(l)[k] === c));
  if (i < 0) return [];
  const filas = [];
  for (let j = i + 2; j < lineas.length && lineas[j].startsWith('|'); j++) filas.push(celdas(lineas[j]));
  return filas;
}

// «21/09/2026» → «2026-09-21», para comparar con las fechas de git.
const iso = (f) => f.split('/').reverse().join('-');
const corta = (f) => f.slice(0, 5); // 21/09/2026 → 21/09

function commits() {
  try {
    // Todas las ramas descargadas; cada commit cuenta una vez.
    const out = execFileSync('git', ['log', '--all', '--format=%an|%as'], { cwd: RAIZ, encoding: 'utf8', maxBuffer: 10e6 });
    return out.trim().split('\n').filter(Boolean).map((l) => {
      const [autor, fecha] = l.split('|');
      const persona = Object.keys(AUTORES).find((p) => AUTORES[p].includes(autor)) ?? 'otros';
      return { persona, fecha };
    });
  } catch {
    return null; // sin git (por ejemplo, una copia descargada como zip)
  }
}

// Sesiones y mensajes registrados en prompts/ por autor (cabecera `autor:`; cada mensaje es un «### HH:MM»).
function prompts() {
  const dir = RAIZ + 'prompts/';
  // Los tres aparecen aunque no tengan ninguna sesión registrada.
  const cuenta = Object.fromEntries(Object.values(NOMBRES).map((n) => [n, { sesiones: 0, mensajes: 0 }]));
  for (const f of readdirSync(dir).filter((n) => /^\d{4}-\d{2}-\d{2}-.*\.md$/.test(n))) {
    const md = readFileSync(dir + f, 'utf8');
    const autor = md.match(/^autor:\s*(.+)$/m)?.[1].trim() ?? 'Sin autor';
    cuenta[autor] ??= { sesiones: 0, mensajes: 0 };
    cuenta[autor].sesiones += 1;
    cuenta[autor].mensajes += (md.match(/^### ~?\d{1,2}:\d{2}/gm) ?? []).length;
  }
  return cuenta;
}

const fila = (aspecto, previsto, real, fuente, nota = '', medido = 'medido') => ({ aspecto, previsto, real, fuente, nota, medido });

export function calcular() {
  let md = '';
  try { md = readFileSync(RAIZ + PLAN, 'utf8').replace(/\r\n/g, '\n'); } catch { /* sin plan: lo dicen las filas */ }
  const log = commits();
  const filas = [];

  // Tiempo: cada hito, con su estado según el plan y la actividad de git en esas fechas.
  const estados = Object.fromEntries(tabla(md, 'Hito', 'Entregable', 'Estado a 26/10/2026').map(([h, , e]) => [h.split(' ')[0], e]));
  const horas = Object.fromEntries(tabla(md, 'Hito', 'Semanas', 'Horas por persona', 'Horas del equipo (×3)').map((c) => [c[0], c[3]]));
  const calendario = tabla(md, 'Hito', 'Sprint', 'Semanas', 'Desde', 'Hasta');
  const primero = log?.reduce((m, c) => (c.fecha < m ? c.fecha : m), '9999');
  const hoy = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Madrid' }); // AAAA-MM-DD
  for (const [hito, , , desde, hasta] of calendario) {
    const nombre = /^\d/.test(hito) ? `Hito ${hito}` : hito;
    const enFechas = log && log.filter((c) => c.fecha >= iso(desde) && c.fecha <= iso(hasta)).length;
    // Antes del primer commit no había repositorio: 0 commits no quiere decir que no se trabajara.
    // Un hito que aún no ha empezado no tiene nada que medir.
    const futuro = iso(desde) > hoy;
    const git = futuro ? 'aún no ha empezado'
      : !log ? 'sin datos de git'
        : iso(hasta) < primero ? `antes del repositorio (primer commit: ${primero.split('-').reverse().join('/')})`
          : `${enFechas} commits en esas fechas`;
    const real = [estados[hito], git].filter(Boolean).join(' · ');
    filas.push(fila('Tiempo', `${nombre}: ${corta(desde)}–${corta(hasta)} · ${horas[hito] ?? '?'} h de equipo`, real,
      `${PLAN} (A.1 y A.2) · git log`, futuro ? '' : 'Los commits miden actividad, no horas.', futuro ? 'futuro' : 'medido'));
  }

  // Horas y coste de personal: no hay registro de horas reales.
  const total = tabla(md, 'Hito', 'Semanas', 'Horas por persona', 'Horas del equipo (×3)').find((c) => c[0] === 'Total');
  filas.push(fila('Tiempo', total ? `${total[3]} h de equipo (${total[2]} h por persona)` : 'No encontrado en el plan', 'Sin medir',
    `${PLAN} (A.3)`, 'Nadie apunta sus horas: git dice cuándo se trabajó, no cuánto.', 'sin-medir'));
  const coste = Object.fromEntries(tabla(md, 'Escenario', '€/hora').map((c) => [c[0], c[3]]));
  filas.push(fila('Coste', coste.Bajo && coste.Alto ? `${coste.Bajo} – ${coste.Alto} de horas equivalentes (con reserva del 15 %)` : 'No encontrado en el plan',
    'Sin medir', `${PLAN} (A.3)`, 'Depende de las horas reales.', 'sin-medir'));

  // Tokens de IA: la ruta de tokens es de Sebastián (#17). Mientras devuelva datos de prueba, se avisa.
  const tokens = prueba('tokens');
  const deprueba = /^Datos de prueba/.test(tokens._nota ?? '');
  filas.push(fila('Coste', 'Suscripciones de IA de cada miembro: pendiente de que cada uno lo indique',
    `${(tokens.total?.total ?? 0).toLocaleString('es-ES')} tokens registrados`, 'GET /api/admin/tokens (docs/tokens.csv)',
    deprueba ? 'Datos de prueba hasta que esté el punto 5 (#17).' : '', deprueba ? 'prueba' : 'medido'));

  // Alcance: los hitos que hay y en qué estado están.
  const hitos = Object.entries(estados);
  const fin = calendario.at(-1)?.[4];
  filas.push(fila('Alcance', hitos.length ? `${hitos.length} hitos${fin ? ` hasta el ${fin}` : ''}` : 'No encontrado en el plan',
    hitos.map(([h, e]) => `Hito ${h}: ${e}`).join(' · ') || 'Sin datos', `${PLAN} (A.1)`, 'Estado según el plan; se actualiza con él.'));

  // Reparto: el plan supone el mismo esfuerzo por persona; esto es lo que dejan ver git y prompts/.
  if (log) {
    const porPersona = Object.keys(AUTORES).map((p) => `${NOMBRES[p]} ${log.filter((c) => c.persona === p).length}`);
    const otros = log.filter((c) => c.persona === 'otros').length;
    filas.push(fila('Otro', 'Mismo esfuerzo por persona (6 h a la semana cada uno)', `Commits: ${porPersona.join(' · ')}${otros ? ` · otros ${otros}` : ''}`,
      `${PLAN} (A.3) · git log --all`, 'Un commit no equivale a una hora: solo da una idea del reparto.'));
  }
  const p = prompts();
  filas.push(fila('Otro', 'Todos los mensajes al asistente, registrados (regla del 26/10)',
    Object.entries(p).map(([a, c]) => `${a}: ${c.sesiones} sesiones, ${c.mensajes} mensajes`).join(' · '),
    'prompts/*.md', 'Mensajes con hora («### HH:MM»); algunas sesiones antiguas no los separan así.'));

  return { generado: new Date().toISOString(), filas };
}

const r = Router();
r.get('/', (_req, res) => res.json(calcular()));
export default r;
