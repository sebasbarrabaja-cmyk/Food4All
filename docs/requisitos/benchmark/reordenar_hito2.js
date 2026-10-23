// Reordena el Hito 2 de Food4All en Asana con los cinco apartados que pide el enunciado (necesidades, user stories,
// RF, RNF y matriz de trazabilidad), sube las entrevistas E1–E6 y adjunta el documento de requisitos v0.4.
// Solo toca tareas [Food4All] del Hito 2. Nunca publica comentarios (regla del proyecto desde el 23/10/2026).
//
// Uso: node reordenar_hito2.js         en seco: lee Asana (solo GET) y lista los cambios, sin escribir nada
//      node reordenar_hito2.js --si    guarda la copia de lo que cambia y aplica los cambios
// Antes de escribir guarda en asana_copia_hito2_reordenar_antes.json el estado de cada tarea que toca o borra.
const fs = require('fs');
const path = require('path');
const { cliente, bloqueMd, bienFormado } = require('./asana_html');

const aplicar = process.argv.includes('--si');
const { asana, adjuntar } = cliente();
const REQ = path.join(__dirname, '..');
const COPIA = path.join(__dirname, 'asana_copia_hito2_reordenar_antes.json');
const HOY = '2026-10-23';
const PIE = '\n\n_Preparado con el script `docs/requisitos/benchmark/reordenar_hito2.js` (23/10/2026)._';

// gid del Hito 2 y de sus tareas (lectura del 23/10/2026, 19:47)
const G = {
  hito2: '1218693472298299', historias: '1219778820409707',
  entrega: '1219576135905899', recogida: '1219576135905901', carrito: '1219638004965792',
  temporales: '1219350212080609', otrasEmpresas: '1219350212080612', inicial: '1219350212080613', comparar: '1219350212080616', criba: '1219350212080617',
  b1: '1219658628732136', entEstudiantes: '1219639783923611', entVendedores: '1219639783923612', resumen: '1219639783923613',
  b2: '1219658628732137', b3: '1219658628732138', b4: '1219658628732139', rf: '1219706035211412', rnf: '1219706036557411',
  b5: '1219658628732140', backlog: '1219706269855253',
  b6: '1219658628732141', matriz: '1219640514565663', glosario: '1219640514565664', montar: '1219640514565665', estado: '1219640514565666',
};

const notas = (md) => {
  const h = `<body>${bloqueMd(md + PIE)}</body>`;
  if (!bienFormado(h)) throw new Error(`Texto mal formado: ${md.slice(0, 60)}…`);
  return h;
};

// Secciones «## E1 · …» de un documento de entrevistas, sin el separador final.
function entrevistas(fichero) {
  const md = fs.readFileSync(path.join(REQ, fichero), 'utf8');
  return [...md.matchAll(/^## (E\d) · (.+)$/gm)].map((m, i, all) => {
    const fin = all[i + 1]?.index ?? md.search(/\n### Qué cambia|\n### Recordatorios/);
    return { id: m[1], titulo: m[2].trim(), texto: md.slice(m.index + m[0].length, fin < 0 ? undefined : fin).replace(/\n---\s*$/, '').trim() };
  });
}

async function main() {
  // --- Estado actual (solo GET) ---
  const F = 'name,completed,assignee.gid,assignee.name,due_on,parent.gid,notes,html_notes';
  const actual = {};
  for (const [k, gid] of Object.entries(G)) {
    try { actual[k] = await asana('GET', `/tasks/${gid}?opt_fields=${F}`); }
    catch (e) { actual[k] = null; console.log(`⚠️  ${k} (${gid}) no existe o no se puede leer: ${e.message}`); }
  }
  const quien = (k) => actual[k]?.assignee?.gid;
  const SEBAS = quien('b1'), JUAN = quien('b2');
  if (!SEBAS || !JUAN) throw new Error('No se pudo saber el gid de Sebastián (B1) o de Juan Antonio (B2).');

  const plan = [];
  const nombre = (k, name) => actual[k] && actual[k].name !== name && plan.push({ tipo: 'renombrar', k, gid: G[k], de: actual[k].name, name });
  const mover = (k, padre, por) => actual[k] && actual[k].parent?.gid !== G[padre] && plan.push({ tipo: 'mover', k, gid: G[k], padre: G[padre], por });
  const asignar = (k, gid, persona) => actual[k] && quien(k) !== gid && plan.push({ tipo: 'asignar', k, gid: G[k], assignee: gid, persona, de: actual[k].assignee?.name ?? 'sin asignar' });
  const completar = (k, por) => actual[k] && !actual[k].completed && plan.push({ tipo: 'completar', k, gid: G[k], por });
  const crear = (padre, name, md, assignee, persona, extra = {}) => plan.push({ tipo: 'crear', padre: G[padre], name, html: notas(md), assignee, persona, ...extra });
  const borrar = (k, por) => actual[k] && plan.push({ tipo: 'borrar', k, gid: G[k], de: actual[k].name, por });

  // B1 · Necesidades: «Historias de usuario» con E1–E6 dentro; fuera los dos duplicados vacíos
  nombre('b1', '[B1] Necesidades identificadas: entrevistas y catálogo');
  mover('historias', 'b1', 'Las entrevistas son la evidencia de las necesidades');
  asignar('historias', SEBAS, 'Sebastián');
  for (const e of entrevistas('FOOD4ALL_entrevistas_E1_E4_preguntas.md')) crear('historias', `${e.id} · ${e.titulo}`, e.texto, SEBAS, 'Sebastián');
  // El título del documento lleva fecha y ciudad; en Asana basta con el perfil general (RST-06).
  for (const e of entrevistas('FOOD4ALL_entrevistas_E5_E6_juan_antonio.md')) crear('historias', `${e.id} · Estudiante que comparte piso`, e.texto, JUAN, 'Juan Antonio');
  borrar('entEstudiantes', 'Duplica «Historias de usuario» (las entrevistas están ahí); vacía');
  borrar('entVendedores', 'Duplica «Historias de usuario»; vacía. Las entrevistas a vendedores siguen pendientes (F-08), anotadas en la línea base');

  // B2 · Personas: sus 4 subtareas ya están hechas
  completar('b2', 'Sus 4 subtareas están completadas');

  // B3 · Restricciones
  nombre('b3', '[B3] Restricciones (RST) y requisitos legales');
  crear('b3', 'Validar las RST (RST-01 a RST-11)', [
    'RST-01 a RST-11 validadas por Sebastián y Juan Antonio el 23/10/2026: 9 de 9 a favor; RST-06 y RST-07 con el texto nuevo (C-27).',
    'Miguel no vota por separado: sus tareas las asume Sebastián (C-22).',
    'Tabla y votos: `docs/requisitos/FOOD4ALL_criba_argumentos.md`, apartado «Restricciones (RST) candidatas».',
  ].join('\n\n'), SEBAS, 'Sebastián', { completed: true });

  // B4 · Requisitos funcionales y no funcionales, con la criba y el benchmark que la justifica
  nombre('b4', '[B4] Requisitos funcionales y no funcionales (fichas y criba)');
  for (const k of ['criba', 'otrasEmpresas', 'inicial', 'comparar']) mover(k, 'b4', 'Sale de «Requisitos temporales», que se borra');
  asignar('rf', SEBAS, 'Sebastián');
  asignar('rnf', SEBAS, 'Sebastián');
  borrar('temporales', 'Contenedor vacío tras mover sus 4 subtareas a [B4]');
  borrar('entrega', 'Vacía; lo cubren C-15 (retrasos) y D-03, que se decide en el Hito 3');
  borrar('recogida', 'Vacía; lo cubren C-15 y D-03 (Hito 3)');
  borrar('carrito', 'Vacía; lo cubren RF-08.3-01 (una sola entrega) y C-20 (carrito del visitante)');

  // B5 · User stories
  nombre('b5', '[B5] User stories y criterios de aceptación');
  asignar('backlog', SEBAS, 'Sebastián');

  // B6 · Matriz, línea base y entrega (las tareas de Miguel pasan a Sebastián)
  nombre('b6', '[B6] Matriz de trazabilidad, línea base y entrega');
  for (const k of ['b6', 'matriz', 'glosario', 'montar', 'estado']) asignar(k, SEBAS, 'Sebastián');
  crear('b6', 'Línea base H2-v0.4 y registro de cambios', 'Foto fechada del Hito 2 con el registro de cambios desde C-01 (origen, elemento, impacto, alternativa, decisión, responsable, fecha y versión) y los temas abiertos. Adjunta: `FOOD4ALL_linea_base_h2.md`.', SEBAS, 'Sebastián', { adjunto: 'FOOD4ALL_linea_base_h2.md' });
  crear('b6', 'Revisión cruzada: comparativo y personas', 'Revisión de `FOOD4ALL_comparativo_revisado.md` y `FOOD4ALL_personas_empatia_v2.md` (apartados 6.2 y 10), hecha por alguien distinto del autor. **El comentario lo escribe Juan Antonio** en esta tarea: elemento revisado, discrepancias, decisión (reformular / investigar / descartar / correcto), cambio, fecha y revisor.', JUAN, 'Juan Antonio');
  crear('b6', 'Revisión cruzada: núcleo de compra y estados del pedido', 'Revisión de RF-05, RF-06 y RF-07 y de `FOOD4ALL_estados_pedido.md`, hecha por alguien distinto del autor (Sebastián). **El comentario lo escribe el revisor** con el mismo formato: elemento, discrepancias, decisión, cambio, fecha y revisor.', JUAN, 'Juan Antonio');
  crear('b6', 'Explicar al profesor cómo ver los prompts (/admin#prompts)', 'Los prompts están en el panel de la landing documental (`/admin#prompts`), agrupados por persona y por tema. La contraseña se da en persona. La página del Hito 2 está en `/admin#hito2`.', SEBAS, 'Sebastián');

  // Documento de requisitos v0.4 en el Hito 2
  plan.push({ tipo: 'adjuntar', gid: G.hito2, fichero: 'FOOD4ALL_documento_requisitos_hito2.md', nombre: 'FOOD4ALL_documento_requisitos_hito2_v0.4_2026-10-23.md' });

  // --- Informe ---
  const n = (t) => plan.filter((p) => p.tipo === t).length;
  console.log(`\nPlan para el Hito 2 (${aplicar ? 'SE APLICA' : 'en seco: no se escribe nada'})\n`);
  for (const p of plan) {
    if (p.tipo === 'renombrar') console.log(`✏️  Renombrar «${p.de}» → «${p.name}»`);
    if (p.tipo === 'mover') console.log(`↪️  Mover «${actual[p.k].name}» a ${Object.keys(G).find((k) => G[k] === p.padre)} · ${p.por}`);
    if (p.tipo === 'asignar') console.log(`👤 «${actual[p.k].name}»: ${p.de} → ${p.persona}`);
    if (p.tipo === 'completar') console.log(`✅ Completar «${actual[p.k].name}» · ${p.por}`);
    if (p.tipo === 'crear') console.log(`➕ Crear en ${Object.keys(G).find((k) => G[k] === p.padre)}: «${p.name}» · ${p.persona}${p.completed ? ' · completada' : ''}${p.adjunto ? ` · adjunta ${p.adjunto}` : ''} (${p.html.length} caracteres)`);
    if (p.tipo === 'borrar') console.log(`🗑️  Borrar «${p.de}» · ${p.por}`);
    if (p.tipo === 'adjuntar') console.log(`📎 Adjuntar ${p.fichero} al Hito 2 como ${p.nombre}`);
  }
  console.log(`\nTotal: ${plan.length} cambios (${n('renombrar')} renombrar, ${n('mover')} mover, ${n('asignar')} asignar, ${n('completar')} completar, ${n('crear')} crear, ${n('borrar')} borrar, ${n('adjuntar')} adjuntar). Ningún comentario.`);
  if (!aplicar) return console.log('En seco: no se ha escrito nada. Para aplicar: node reordenar_hito2.js --si');

  // --- Aplicar: copia primero, luego en orden (los movimientos antes que los borrados) ---
  fs.writeFileSync(COPIA, JSON.stringify({ fecha: new Date().toISOString(), tareas: actual }, null, 1));
  console.log(`Copia guardada en ${path.basename(COPIA)}`);
  const orden = ['renombrar', 'mover', 'asignar', 'completar', 'crear', 'borrar', 'adjuntar'];
  for (const tipo of orden) {
    for (const p of plan.filter((x) => x.tipo === tipo)) {
      if (tipo === 'renombrar') await asana('PUT', `/tasks/${p.gid}`, { name: p.name });
      if (tipo === 'mover') await asana('POST', `/tasks/${p.gid}/setParent`, { parent: p.padre });
      if (tipo === 'asignar') await asana('PUT', `/tasks/${p.gid}`, { assignee: p.assignee });
      if (tipo === 'completar') await asana('PUT', `/tasks/${p.gid}`, { completed: true });
      if (tipo === 'crear') {
        const t = await asana('POST', `/tasks/${p.padre}/subtasks`, { name: p.name, html_notes: p.html, assignee: p.assignee, due_on: HOY, completed: Boolean(p.completed) });
        if (p.adjunto) await adjuntar(t.gid, path.join(REQ, p.adjunto));
      }
      if (tipo === 'borrar') await asana('DELETE', `/tasks/${p.gid}`);
      if (tipo === 'adjuntar') await adjuntar(p.gid, path.join(REQ, p.fichero), p.nombre);
      process.stdout.write('.');
    }
  }
  console.log('\nHecho. Vuelve a leer Asana para comprobarlo (leer_otros_grupos.js).');
}

main().catch((e) => { console.error(e.message); process.exit(1); });
