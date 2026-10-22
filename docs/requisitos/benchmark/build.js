// Genera el catálogo de requisitos con benchmark: node build.js <salida.xlsx> <stats.json>
const fs = require('fs');
const ExcelJS = require('exceljs');
const { COMPETIDORES, FUENTES, NO_ABIERTAS, BF } = require('./bench');
const { NECESIDADES } = require('./necesidades');
const { alcance, dependeDe } = require('./alcance');

const [outXlsx, outStats] = process.argv.slice(2);
const NEC = Object.fromEntries(NECESIDADES.map((n) => [n.id, n]));
const PRIO = { M: 'Must', S: 'Should', C: 'Could', W: "Won't" };
const COMP = COMPETIDORES.map((c) => c[0]);
const NOMBRE = Object.fromEntries(COMPETIDORES.map((c) => [c[0], c[1]]));

// ---------- Recogida de requisitos ----------
const rows = [];
let proc = null, procName = null, tipo = 'RF', sub = null, subName = null, n = 0;
const R = (texto, criterio, prio, entrega, bfs, necesidad, opts = {}) => {
  n += 1;
  rows.push({ id: `${sub}-${String(n).padStart(2, '0')}`, proc, procName, sub, subName, tipo, texto, criterio,
    prio: PRIO[prio], entrega, bfs, necesidad, ...opts });
};
R.proc = (id, name, t = 'RF') => { proc = id; procName = name; tipo = t; };
R.sub = (id, name) => { sub = id; subName = name; n = 0; };
['rf01', 'rf02_04', 'rf05_08', 'rf09_14', 'rf15_19', 'detalle', 'rnf'].forEach((f) => require(`./${f}`)(R));

// Orden natural de IDs (RF-01.2-03 < RF-01.10-01 < RNF-01.1-01).
const clave = (id) => [id.startsWith('RNF') ? 1 : 0, ...id.match(/\d+/g).map(Number)];
rows.sort((a, b) => {
  const ka = clave(a.id), kb = clave(b.id);
  for (let i = 0; i < Math.max(ka.length, kb.length); i++) if ((ka[i] || 0) !== (kb[i] || 0)) return (ka[i] || 0) - (kb[i] || 0);
  return 0;
});
const ids = new Set();
for (const r of rows) { if (ids.has(r.id)) throw new Error(`ID repetido ${r.id}`); ids.add(r.id); }

// Un detalle sin función propia se compara con las funciones de su subrequisito.
const porSub = {};
for (const r of rows) (porSub[r.sub] = porSub[r.sub] || new Set()) && r.bfs.forEach((b) => porSub[r.sub].add(b));
for (const r of rows) {
  if (r.bfs.length) r.nivel = 'Requisito';
  else if (porSub[r.sub].size) { r.bfs = [...porSub[r.sub]]; r.nivel = 'Función del subrequisito'; }
  else r.nivel = 'No comparable';
}

// ---------- Benchmark por requisito ----------
const ORDEN = { S: 3, P: 2, N: 1, '?': 0 };
for (const r of rows) {
  for (const b of r.bfs) if (!BF[b]) throw new Error(`Función desconocida ${b} en ${r.id}`);
  r.comp = {};
  const fuentes = new Set();
  for (const c of COMP) {
    let best = '?';
    for (const b of r.bfs) {
      const v = BF[b].vals[c];
      if (v && ORDEN[v[0]] > ORDEN[best]) best = v[0];
      if (v) fuentes.add(v[1]);
    }
    r.comp[c] = r.bfs.length ? best : '';
  }
  r.fuentes = [...fuentes].sort().join(', ');
  const cuenta = (v) => COMP.filter((c) => r.comp[c] === v);
  const [s, p, no, q] = ['S', 'P', 'N', '?'].map(cuenta);
  const nombres = (l) => l.map((c) => NOMBRE[c]).join(', ');
  let pos, just;
  if (!r.bfs.length) {
    pos = 'Sin referente';
    just = 'Requisito interno, legal o técnico: no se puede observar desde fuera en los competidores.';
  } else if (s.length >= 3) {
    pos = 'Paridad';
    just = `Estándar del mercado: lo ofrecen ${nombres(s)}.`;
  } else if (s.length + p.length > 0) {
    pos = 'Poco extendido';
    just = [s.length && `Lo ofrecen ${nombres(s)}`, p.length && `parcial en ${nombres(p)}`].filter(Boolean).join('; ') + '.';
  } else if (no.length > 0) {
    pos = 'Diferencial';
    just = `Ninguno verificado lo ofrece; no lo tienen ${nombres(no)}.`;
  } else {
    pos = 'Sin evidencia';
    just = 'No se pudo verificar en ningún competidor desde sus páginas públicas.';
  }
  if (r.bfs.length && q.length) just += ` Sin verificar: ${nombres(q)}.`;
  if (r.nivel === 'Función del subrequisito') just = `Comparado a nivel de función (${r.subName}): ${just}`;
  const datos = [['S', s], ['P', p], ['N', no], ['?', q]].filter(([, l]) => l.length).map(([k, l]) => `${k}: ${nombres(l)}`).join(' · ');
  r.pos = r.pos || pos;
  r.just = r.just ? `${r.just}${r.bfs.length ? ` Datos: ${datos}.` : ''}` : just;
  r.estado = r.estado || 'Pendiente';
  r.funciones = r.bfs.map((b) => `${b} ${BF[b].nombre}`).join('\n');
  if (!NEC[r.necesidad]) throw new Error(`Necesidad desconocida ${r.necesidad} en ${r.id}`);
  r.necTexto = NEC[r.necesidad].texto;
  r.alcance = alcance(r);
  r.depende = dependeDe(r);
}

// ---------- Excel ----------
const wb = new ExcelJS.Workbook();
wb.creator = 'FOOD4ALL';
const VERDE = 'FF2F5233', CREMA = 'FFF6F1E6';
const FILL = { S: 'FFDCEFD9', P: 'FFF8ECC8', N: 'FFF6DCD3', '?': 'FFEDEDED' };
const POSFILL = { Paridad: 'FFE4ECD9', 'Poco extendido': 'FFF8ECC8', Diferencial: 'FFFBE4D3', Mejora: 'FFFBE4D3', 'Sin evidencia': 'FFEDEDED', 'Sin referente': 'FFFFFFFF', 'Paridad parcial': 'FFE4ECD9' };

function cabecera(ws, cols) {
  ws.columns = cols.map(([header, key, width]) => ({ header, key, width }));
  const h = ws.getRow(1);
  h.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  h.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: VERDE } };
  h.alignment = { vertical: 'middle', wrapText: true };
  h.height = 32;
  ws.views = [{ state: 'frozen', xSplit: 1, ySplit: 1 }];
  ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: cols.length } };
}

// Léeme
const total = rows.length, nRF = rows.filter((r) => r.tipo === 'RF').length;
const leeme = wb.addWorksheet('Léeme');
leeme.columns = [{ width: 26 }, { width: 110 }];
[
  ['FOOD4ALL · Catálogo de requisitos con benchmark', ''],
  ['Fecha', '19/10/2026 · v0.4 del 22/10/2026: catálogo único de necesidades, regla prioridad/entrega, alcance y dependencias'],
  ['Requisitos', `${total} (${nRF} funcionales y ${total - nRF} no funcionales)`],
  ['Competidores', COMPETIDORES.map((c) => `${c[1]} (${c[2]})`).join('; ')],
  ['Método', 'Cada requisito se enlaza con una o varias funciones observables de los competidores (hoja Benchmark). La comparación sale de las páginas públicas de cada uno (hoja Fuentes). Solo se marca S, N o P con una fuente abierta; lo demás queda como «?».'],
  ['Valores', 'S = lo tiene · P = parcial o con condiciones · N = no lo tiene · ? = no verificado · vacío = el requisito no es comparable'],
  ['Posición', 'Paridad: lo ofrecen 3 o más (estándar, imprescindible para competir) · Poco extendido: 1 o 2 · Diferencial: ninguno verificado y al menos uno confirmado que no · Mejora: FOOD4ALL lo hace mejor que quien lo tiene (motivo en la justificación) · Sin evidencia: no se pudo comprobar · Sin referente: requisito interno, legal o técnico'],
  ['Prioridad', 'MoSCoW: Must, Should, Could, Won\'t'],
  ['Entrega', 'MVP = demo de 60 segundos · V2 = siguiente versión · V3 = más adelante · Excluido = no es del marketplace (Won\'t)'],
  ['Regla', 'Must solo en MVP; el MVP solo lleva Must o Should; V2 lleva Should o Could; V3 solo Could. La prioridad MoSCoW se refiere siempre al MVP'],
  ['Alcance', 'MVP simulado = entra en la demo con un servicio simulado (pago, reembolso de prueba o IA) · MVP · V2 · V3 · Excluido'],
  ['Depende de', 'Decisión pendiente (D-), hipótesis (H-) o servicio externo que puede cambiar el requisito. Detalle en la especificación, bloque 10'],
  ['Necesidad', 'Catálogo único N-<MÓDULO>-NN (hoja Necesidades). Sustituye a N-01…N-08 (v0.3) y a N-01…N-20 del documento de personas'],
  ['Estado', 'Decidido = ya acordado en el proyecto · Hipótesis = falta validarlo con datos · Pendiente = propuesta para que el equipo la apruebe'],
  ['IDs', 'RF-05.2-03 = proceso RF-05, subrequisito 2, requisito 3. Cada subrequisito (RF-05.2) se corresponde con una ficha y una subtarea de Asana.'],
  ['Límites', 'Too Good To Go y la ayuda de Mercadona bloquearon el acceso automático, así que sus valores salen sobre todo del comparativo interno F-04 o quedan como «?». Glovo podría permitir acceso con Google o Apple, pero solo lo indican guías no oficiales que no se abrieron: queda «?». Lo que exige cuenta o app debe comprobarlo el equipo a mano.'],
].forEach((r, i) => {
  const row = leeme.addRow(r);
  row.alignment = { wrapText: true, vertical: 'top' };
  if (i === 0) row.font = { bold: true, size: 14, color: { argb: VERDE } };
  else row.getCell(1).font = { bold: true };
});

// Requisitos
const ws = wb.addWorksheet('Requisitos');
cabecera(ws, [
  ['ID', 'id', 13], ['Proceso', 'procName', 22], ['Subrequisito', 'subName', 24], ['Tipo', 'tipo', 6],
  ['El sistema deberá…', 'texto', 60], ['Criterio de aceptación', 'criterio', 55], ['Prioridad', 'prio', 9],
  ['Entrega', 'entrega', 8], ['Alcance', 'alcance', 12], ['Depende de', 'depende', 18], ['Necesidad', 'necesidad', 10], ['Necesidad (texto)', 'necTexto', 34],
  ['Funciones comparadas', 'funciones', 30], ['Nivel de comparación', 'nivel', 14],
  ...COMPETIDORES.map((c) => [c[1], c[0], 10]),
  ['Posición', 'pos', 14], ['Justificación', 'just', 55], ['Fuentes', 'fuentes', 12], ['Estado', 'estado', 11], ['Responsable', 'resp', 14],
]);
for (const r of rows) {
  const row = ws.addRow({ ...r, ...r.comp });
  row.alignment = { wrapText: true, vertical: 'top' };
  COMP.forEach((c) => {
    const cell = row.getCell(c);
    if (FILL[cell.value]) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: FILL[cell.value] } };
    cell.alignment = { horizontal: 'center', vertical: 'top' };
  });
  const pc = row.getCell('pos');
  if (POSFILL[r.pos]) pc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: POSFILL[r.pos] } };
}

// Necesidades: catálogo único y cuántos requisitos cubren cada una
const wn = wb.addWorksheet('Necesidades');
cabecera(wn, [['ID', 'id', 10], ['Necesidad', 'texto', 50], ['Quién', 'quien', 14], ['Tipo', 'tipo', 14], ['Estado', 'estado', 14], ['Fuentes', 'fuentes', 34],
  ['Antes (v0.3)', 'v03', 12], ['Antes (B2 v1)', 'b2', 14], ['Requisitos', 'n', 10], ['Requisitos MVP', 'nMvp', 10]]);
for (const n of NECESIDADES) {
  const rs = rows.filter((r) => r.necesidad === n.id);
  wn.addRow({ ...n, n: rs.length, nMvp: rs.filter((r) => r.entrega === 'MVP').length }).alignment = { wrapText: true, vertical: 'top' };
}

// Benchmark
const wb2 = wb.addWorksheet('Benchmark');
cabecera(wb2, [['ID', 'id', 7], ['Proceso', 'proceso', 9], ['Función', 'nombre', 40], ...COMPETIDORES.map((c) => [c[1], c[0], 30]), ['Requisitos que la usan', 'usos', 12]]);
for (const b of Object.values(BF)) {
  const vals = Object.fromEntries(COMP.map((c) => {
    const v = b.vals[c];
    return [c, v ? `${v[0]} · ${v[2]} (${v[1]})` : '?'];
  }));
  const row = wb2.addRow({ ...b, ...vals, usos: rows.filter((r) => r.bfs.includes(b.id)).length });
  row.alignment = { wrapText: true, vertical: 'top' };
  COMP.forEach((c) => {
    const k = (b.vals[c] || ['?'])[0];
    row.getCell(c).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: FILL[k] } };
  });
}

// Fuentes
const wf = wb.addWorksheet('Fuentes');
cabecera(wf, [['ID', 'id', 7], ['Fuente', 'titulo', 70], ['Enlace', 'url', 70], ['Tipo', 'tipo', 10], ['Fiabilidad', 'fia', 22]]);
FUENTES.forEach((f) => wf.addRow({ id: f[0], titulo: f[1], url: f[2], tipo: f[3], fia: f[4] }).alignment = { wrapText: true, vertical: 'top' });
wf.addRow({});
wf.addRow({ titulo: 'Páginas que no se pudieron abrir (no cuentan como fuente)' }).font = { bold: true };
NO_ABIERTAS.forEach((f) => wf.addRow({ titulo: f[0], url: f[1], fia: f[2] }).alignment = { wrapText: true, vertical: 'top' });
wf.addRow({ titulo: 'Todas las páginas se consultaron el 19/10/2026.' });

// Resumen
const POS = ['Paridad', 'Paridad parcial', 'Poco extendido', 'Mejora', 'Diferencial', 'Sin evidencia', 'Sin referente'];
const procs = [...new Map(rows.map((r) => [r.proc, r.procName])).entries()];
const wr = wb.addWorksheet('Resumen');
cabecera(wr, [['Proceso', 'p', 10], ['Nombre', 'n', 34], ['Total', 't', 8], ['Must', 'm', 8], ['MVP', 'mvp', 8], ...POS.map((p) => [p, p, 12])]);
const stats = { total, nRF, procesos: [], porPos: {}, porPrio: {}, porEntrega: {}, porEstado: {}, bf: Object.keys(BF).length, fuentes: FUENTES.length };
for (const [p, name] of procs) {
  const rs = rows.filter((r) => r.proc === p);
  const o = { p, n: name, t: rs.length, m: rs.filter((r) => r.prio === 'Must').length, mvp: rs.filter((r) => r.entrega === 'MVP').length };
  POS.forEach((k) => { o[k] = rs.filter((r) => r.pos === k).length; });
  wr.addRow(o);
  stats.procesos.push(o);
}
for (const r of rows) {
  stats.porPos[r.pos] = (stats.porPos[r.pos] || 0) + 1;
  stats.porPrio[r.prio] = (stats.porPrio[r.prio] || 0) + 1;
  stats.porEntrega[r.entrega] = (stats.porEntrega[r.entrega] || 0) + 1;
  stats.porEstado[r.estado] = (stats.porEstado[r.estado] || 0) + 1;
  stats.porAlcance = stats.porAlcance || {};
  stats.porAlcance[r.alcance] = (stats.porAlcance[r.alcance] || 0) + 1;
}
stats.porNecesidad = Object.fromEntries(NECESIDADES.map((n) => [n.id, rows.filter((r) => r.necesidad === n.id).length]));
stats.diferenciales = rows.filter((r) => r.pos === 'Diferencial' || r.pos === 'Mejora').map((r) => `${r.id} · ${r.texto}`);
stats.bfSinVerificar = Object.values(BF).filter((b) => COMP.every((c) => !b.vals[c])).map((b) => `${b.id} ${b.nombre}`);
stats.compVerif = Object.fromEntries(COMP.map((c) => [c, Object.values(BF).filter((b) => b.vals[c]).length]));
wr.addRow({});
wr.addRow({ n: 'Total', t: total, m: rows.filter((r) => r.prio === 'Must').length, mvp: rows.filter((r) => r.entrega === 'MVP').length, ...stats.porPos }).font = { bold: true };

wb.xlsx.writeFile(outXlsx).then(() => {
  fs.writeFileSync(outStats, JSON.stringify(stats, null, 2));
  console.log(`ok · ${total} requisitos (${nRF} RF) · ${Object.keys(BF).length} funciones`);
  console.log(JSON.stringify({ porPos: stats.porPos, porPrio: stats.porPrio, porEntrega: stats.porEntrega, porEstado: stats.porEstado, compVerif: stats.compVerif }, null, 1));
});
