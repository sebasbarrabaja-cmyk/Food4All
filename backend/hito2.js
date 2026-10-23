// Hito 2 (requisitos) para el panel: se lee de docs/requisitos en cada petición, nunca se copia a mano.
// Así lo que ve el profesor es lo mismo que está en los documentos del repositorio.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const REQ = fileURLToPath(new URL('../docs/requisitos/', import.meta.url));
const ASANA = 'https://app.asana.com/0/0/';

// Hito 2 y sus bloques en Asana (proyecto de la asignatura, tareas [Food4All]).
const ASANA_HITO2 = [
  ['Hito 2 · Requisitos y criterios de aceptación', '1218693472298299'],
  ['B1 · Conocer a los usuarios: entrevistas y necesidades', '1219658628732136'],
  ['B2 · Personas y mapas de empatía', '1219658628732137'],
  ['B3 · Requisitos legales que se convierten en requisitos del software', '1219658628732138'],
  ['B4 · Catálogo de requisitos: fichas RF / RNF', '1219658628732139'],
  ['B5 · User stories y revisión INVEST', '1219658628732140'],
  ['B6 · Trazabilidad y entrega del hito', '1219658628732141'],
].map(([name, gid]) => ({ name, url: ASANA + gid }));

const read = (f) => readFileSync(REQ + f, 'utf8');

// Orden natural de IDs: RF-02.1 < RF-10.1 < RNF-01.1.
const key = (id) => [id.startsWith('RNF') ? 1 : 0, ...(id.match(/\d+/g) ?? []).map(Number)];
function byId(a, b) {
  const ka = key(a), kb = key(b);
  for (let i = 0; i < Math.max(ka.length, kb.length); i++) if ((ka[i] ?? 0) !== (kb[i] ?? 0)) return (ka[i] ?? 0) - (kb[i] ?? 0);
  return 0;
}

// Quita el formato Markdown en línea; el panel muestra texto plano.
const plain = (s) => s.replace(/\*\*|`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();

// Filas de tabla Markdown cuya primera celda empieza por el prefijo (por ejemplo «C-» o «RST-»).
function rows(md, prefix) {
  return md.split('\n')
    .filter((l) => l.startsWith('| ') && plain(l.slice(2)).startsWith(prefix))
    .map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => plain(c)));
}

// Texto de un apartado «## …» o «### …» hasta el siguiente del mismo nivel o superior.
function section(md, title) {
  const i = md.indexOf(title);
  if (i < 0) return '';
  const level = md.lastIndexOf('\n', i) + 1;
  const hashes = md.slice(level).match(/^#+/)?.[0] ?? '##';
  const rest = md.slice(i + title.length);
  const end = rest.search(new RegExp(`\\n#{1,${hashes.length}} `));
  return end < 0 ? rest : rest.slice(0, end);
}

// gid de Asana de cada proceso, subrequisito e historia que creó benchmark/subir_asana.js.
function asanaIds() {
  const { creadas } = JSON.parse(read('benchmark/asana_creadas.json'));
  const ids = {};
  for (const t of creadas) {
    const id = t.nombre.match(/\b((?:RF|RNF)-\d+(?:\.\d+)?|US-\d+)\b/)?.[1];
    if (id && !ids[id]) ids[id] = ASANA + t.gid;
  }
  return ids;
}

function criba(md) {
  return [...md.matchAll(/^## ([A-F]) · (.+?) · (.+)$/gm)].map((m) => {
    const body = section(md, m[0]);
    return {
      id: m[1], title: m[2], owner: m[3],
      proposal: plain(body.match(/\*\*Decisión propuesta:\*\* (.+)/)?.[1] ?? ''),
      decided: body.includes('**Decisión de '),
    };
  });
}

export function hito2() {
  const stats = JSON.parse(read('benchmark/stats.json'));
  const base = read('FOOD4ALL_linea_base_h2.md');
  const matriz = read('FOOD4ALL_matriz_trazabilidad.md');
  const spec = read('FOOD4ALL_especificacion_requisitos.md');
  const crib = read('FOOD4ALL_criba_argumentos.md');
  const nec = read('FOOD4ALL_necesidades.md');
  const asana = asanaIds();

  return {
    figures: {
      total: stats.total, prioridad: stats.porPrio, entrega: stats.porEntrega, alcance: stats.porAlcance,
      procesos: stats.procesos.map(({ p, n, t, m, mvp }) => ({ id: p, name: n, total: t, must: m, mvp, asana: asana[p] ?? null })),
    },
    needs: rows(section(matriz, '## 1. Cobertura por necesidad'), 'N-').map(([n, estado, fuentes, procesos, , historias, reqs]) => {
      const [, id, texto] = n.match(/^(N-[A-Z]+-\d+) (.+)$/) ?? [, n, ''];
      return { id, texto, estado, fuentes, procesos, historias, reqs };
    }),
    trace: rows(section(matriz, '## 2. Matriz por subrequisito'), 'RF-').concat(rows(section(matriz, '## 2. Matriz por subrequisito'), 'RNF-'))
      .map(([r, necesidades, , historia, prioridad, alcance, depende, criterios]) => {
        const [, id, name] = r.match(/^((?:RF|RNF)-[\d.]+) (.+)$/) ?? [, r, ''];
        return { id, name, necesidades: necesidades.split(', '), historia, prioridad, alcance, depende, criterios,
          asana: asana[id] ?? null, historiaAsana: asana[historia] ?? null };
      })
      .sort((x, y) => byId(x.id, y.id)),
    sources: rows(nec, 'F-').map(([id, fuente, estado]) => ({ id, fuente, estado })),
    criba: criba(crib),
    decisions: rows(section(spec, '| ID | Tipo | Descripción | Procesos afectados'), 'H-')
      .concat(rows(section(spec, '| ID | Tipo | Descripción | Procesos afectados'), 'D-'))
      .map(([id, tipo, descripcion, procesos, provisional, cierre]) => ({ id, tipo, descripcion, procesos, provisional, cierre })),
    rst: rows(crib, 'RST-').map(([id, texto, origen, ...votos]) => ({ id, texto, origen, votos })),
    // Requisitos atómicos excluidos (Won't): están en la vista previa de Asana con su etiqueta.
    excluded: [...read('FOOD4ALL_asana_vista_previa.md').matchAll(/\*\*((?:RF|RNF)-[\d.]+-\d+)\*\* `([^`]*Excluido[^`]*)` (.+?) _\(/g)]
      .map(([, id, etiqueta, texto]) => ({ id, etiqueta, texto })),
    changes: rows(section(base, '## 4. Registro de cambios'), 'C-')
      .map(([id, origen, elemento, tipo, impacto, alternativa, decision, responsable, fecha, version, evidencia]) =>
        ({ id, origen, elemento, tipo, impacto, alternativa, decision, responsable, fecha, version, evidencia }))
      .sort((x, y) => Number(x.id.slice(2)) - Number(y.id.slice(2))),
    open: rows(section(base, '## 5. Abierto al cerrar esta versión'), '')
      .filter(([q]) => q && q !== 'Qué' && !/^-+$/.test(q))
      .map(([que, porque, quien]) => ({ que, porque, quien })),
    asana: ASANA_HITO2,
  };
}
