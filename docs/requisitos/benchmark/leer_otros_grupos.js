// Lee (solo GET) el proyecto de Asana de la asignatura para comparar Food4All con los otros grupos (IndiConnect, LearnCode…).
// No escribe nada en Asana: no hay ninguna llamada POST, PUT ni DELETE en este script.
// Agrupa las tareas raíz por la etiqueta del nombre ([Food4All], [IndiConnect]…) y baja hasta 3 niveles de subtareas,
// con descripción, responsable, fecha, adjuntos y comentarios.
//
// Uso: node leer_otros_grupos.js                     todo (unos minutos: una petición por tarea y por sus comentarios)
//      node leer_otros_grupos.js --sin-comentarios   más rápido, sin leer los comentarios
// Deja el resultado FUERA del repositorio, en ../../../../asana-otros-grupos/ (es contenido de otros grupos):
//   asana_otros_grupos.json  todo lo leído
//   resumen.md               recuento por grupo para comparar
const fs = require('fs');
const path = require('path');
const { cliente } = require('./asana_html');

const conComentarios = !process.argv.includes('--sin-comentarios');
const { env } = cliente();
const API = 'https://app.asana.com/api/1.0';
const SALIDA = path.join(__dirname, '../../../../asana-otros-grupos');
const CAMPOS = 'name,completed,completed_at,assignee.name,due_on,notes,num_subtasks,created_at,modified_at,memberships.section.name';
const PROFUNDIDAD = 3;
let peticiones = 0;

// Única forma de hablar con Asana en este script: GET con paginación y reintentos.
async function get(ruta) {
  const datos = [];
  let url = API + ruta + (ruta.includes('?') ? '&' : '?') + 'limit=100';
  while (url) {
    let r;
    for (let intento = 0; intento < 6; intento++) {
      peticiones++;
      r = await fetch(url, { headers: { Authorization: `Bearer ${env.ASANA_TOKEN}` } });
      if (r.status !== 429 && r.status < 500) break;
      await new Promise((ok) => setTimeout(ok, 1000 * (+r.headers.get('retry-after') || 5 * (intento + 1))));
    }
    const j = await r.json();
    if (!r.ok) throw new Error(`GET ${ruta} → ${r.status} ${JSON.stringify(j.errors)}`);
    datos.push(...[].concat(j.data));
    url = j.next_page?.uri ?? null;
  }
  return datos;
}

const grupoDe = (nombre) => (nombre.match(/^\s*\[([^\]]+)\]/)?.[1] ?? 'sin etiqueta').trim();

async function leerTarea(t, nivel) {
  const tarea = {
    gid: t.gid, nombre: t.name.trim(), nivel, seccion: t.memberships?.[0]?.section?.name ?? null,
    completada: t.completed, completada_el: t.completed_at, responsable: t.assignee?.name ?? null, fecha: t.due_on,
    creada: t.created_at, modificada: t.modified_at, descripcion: t.notes ?? '', adjuntos: [], comentarios: [], subtareas: [],
  };
  tarea.adjuntos = (await get(`/attachments?parent=${t.gid}&opt_fields=name,created_at`)).map((a) => a.name);
  if (conComentarios) {
    tarea.comentarios = (await get(`/tasks/${t.gid}/stories?opt_fields=type,created_at,created_by.name,text`))
      .filter((s) => s.type === 'comment')
      .map((s) => ({ autor: s.created_by?.name ?? null, fecha: s.created_at, texto: s.text }));
  }
  if (nivel < PROFUNDIDAD && t.num_subtasks > 0) {
    for (const s of await get(`/tasks/${t.gid}/subtasks?opt_fields=${CAMPOS}`)) tarea.subtareas.push(await leerTarea(s, nivel + 1));
  }
  process.stdout.write('.');
  return tarea;
}

const todas = (t) => [t, ...t.subtareas.flatMap(todas)];
const pct = (n, total) => (total ? `${Math.round((100 * n) / total)} %` : '—');
const BUSCAR = { 'RF-': /\bRF-\d/, 'RNF-': /\bRNF-\d/, 'RST-': /\bRST-\d/, 'US-': /\bUS-\d/, 'Gherkin (Dado…cuando…entonces)': /\bdado\b[\s\S]*\bcuando\b[\s\S]*\bentonces\b/i,
  'Entrevista': /entrevista/i, 'Matriz': /matriz/i, 'Línea base': /l[ií]nea base/i, 'Registro de cambios': /registro de cambios|control de cambios/i, 'MoSCoW': /moscow|\bmust\b/i };

function resumen(grupos) {
  const filas = Object.entries(grupos).map(([g, raices]) => {
    const ts = raices.flatMap(todas);
    const texto = (t) => `${t.nombre}\n${t.descripcion}`;
    return { g, raices: raices.length, ts,
      completadas: ts.filter((t) => t.completada).length, conResp: ts.filter((t) => t.responsable).length,
      conFecha: ts.filter((t) => t.fecha).length, vacias: ts.filter((t) => !t.descripcion.trim()).length,
      adjuntos: ts.reduce((n, t) => n + t.adjuntos.length, 0), comentarios: ts.reduce((n, t) => n + t.comentarios.length, 0),
      autores: new Set(ts.flatMap((t) => t.comentarios.map((c) => c.autor)).filter(Boolean)).size,
      claves: Object.fromEntries(Object.entries(BUSCAR).map(([k, re]) => [k, ts.filter((t) => re.test(texto(t))).length])) };
  });
  const md = [`# Asana de la asignatura · recuento por grupo`, ``,
    `Leído el ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })} con \`leer_otros_grupos.js\` (solo lectura, ${peticiones} peticiones${conComentarios ? '' : ', sin comentarios'}).`, ``,
    `| Grupo | Tareas raíz | Tareas (3 niveles) | Completadas | Con responsable | Con fecha | Sin descripción | Adjuntos | Comentarios | Personas que comentan |`,
    `| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |`,
    ...filas.map((f) => `| ${f.g} | ${f.raices} | ${f.ts.length} | ${pct(f.completadas, f.ts.length)} | ${pct(f.conResp, f.ts.length)} | ${pct(f.conFecha, f.ts.length)} | ${f.vacias} | ${f.adjuntos} | ${f.comentarios} | ${f.autores} |`),
    ``, `## Tareas que mencionan cada cosa (nombre o descripción)`, ``,
    `| Grupo | ${Object.keys(BUSCAR).join(' | ')} |`, `| --- |${' --- |'.repeat(Object.keys(BUSCAR).length)}`,
    ...filas.map((f) => `| ${f.g} | ${Object.values(f.claves).join(' | ')} |`),
    ``, `## Tareas raíz de cada grupo`, ``,
    ...filas.flatMap((f) => [`### ${f.g}`, ``, ...grupos[f.g].map((t) => `- ${t.completada ? '✅' : '⬜'} ${t.nombre} · ${t.responsable ?? 'sin responsable'} · ${t.fecha ?? 'sin fecha'} · ${todas(t).length - 1} subtareas`), ``])];
  return md.join('\n');
}

(async () => {
  if (!env.ASANA_TOKEN || !env.ASANA_PROJECT_GID) throw new Error('Faltan ASANA_TOKEN o ASANA_PROJECT_GID en backend/.env');
  const inicio = Date.now();
  const raices = await get(`/projects/${env.ASANA_PROJECT_GID}/tasks?opt_fields=${CAMPOS}`);
  console.log(`${raices.length} tareas raíz en el proyecto. Leyendo subtareas${conComentarios ? ' y comentarios' : ''}…`);
  const grupos = {};
  for (const t of raices) (grupos[grupoDe(t.name)] ??= []).push(await leerTarea(t, 1));
  fs.mkdirSync(SALIDA, { recursive: true });
  fs.writeFileSync(path.join(SALIDA, 'asana_otros_grupos.json'), JSON.stringify({ leido: new Date().toISOString(), grupos }, null, 2));
  fs.writeFileSync(path.join(SALIDA, 'resumen.md'), resumen(grupos));
  console.log(`\nHecho en ${Math.round((Date.now() - inicio) / 1000)} s con ${peticiones} peticiones GET. Grupos: ${Object.keys(grupos).join(', ')}`);
  console.log(`Resultado en ${SALIDA}`);
})().catch((e) => { console.error('\n' + e.message); process.exit(1); });
