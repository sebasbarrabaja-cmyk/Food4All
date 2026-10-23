// Prepara las tareas de Asana a partir del Excel, de la especificación, del catálogo de necesidades y de las fichas.
// No llama a Asana: genera la vista previa (.md), el árbol de tareas (.json) y la matriz de trazabilidad (.md),
// y rellena las tablas del catálogo de necesidades en la especificación y en FOOD4ALL_necesidades.md.
// Uso: node asana.js ../FOOD4ALL_requisitos_benchmark.xlsx ../FOOD4ALL_especificacion_requisitos.md ../FOOD4ALL_asana_vista_previa.md asana_tareas.json
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');
const { NECESIDADES, FUENTES_N } = require('./necesidades');

const [xlsxPath, specPath, mdOut, jsonOut] = process.argv.slice(2);
const DIR_REQ = path.dirname(specPath);
const MATRIZ = path.join(DIR_REQ, 'FOOD4ALL_matriz_trazabilidad.md');
const NEC_MD = path.join(DIR_REQ, 'FOOD4ALL_necesidades.md');
const FECHA_FICHAS = '2026-10-22';
const FECHA_BACKLOG = '2026-10-23';
const VERSION = 'v0.4 · 22/10/2026';
// Sin reparto todavía: las descripciones dicen «por asignar» y en Asana no se ponen responsable ni fecha.
const ASIGNADO = false;
const quien = (p) => (ASIGNADO ? p : 'por asignar');
const COMPETIDORES = ['Mercadona online', 'Glovo', 'Too Good To Go', 'Wetaca', 'Market Wagon', 'Open Food Network'];
const EXCLUIDO = {
  'RF-13.7': 'Excluido (Won\'t): es el panel de prompts de la landing, no del marketplace. Conserva su ID y no se construye.',
};
const FICHAS = Object.assign({}, ...['fichas_base', 'fichas_oferta', 'fichas_compra', 'fichas_entrega', 'fichas_rnf'].map((f) => require(`./${f}`)));
const NEC = Object.fromEntries(NECESIDADES.map((n) => [n.id, n]));
const conNombre = (id) => (NEC[id] ? `${id} ${NEC[id].texto}` : id);

// Orden de la cascada (fases de la especificación, bloque 5)
const CASCADA = ['RF-01', 'RF-02', 'RF-13', 'RF-15', 'RF-03', 'RF-04', 'RF-12', 'RF-16', 'RF-17',
  'RF-05', 'RF-06', 'RF-07', 'RF-14', 'RF-08', 'RF-09', 'RF-10', 'RF-11', 'RF-18', 'RF-19'];
const FASE = {};
[['1 · Base', 'RF-01 RF-02 RF-13 RF-15'], ['2 · Oferta', 'RF-03 RF-04 RF-12 RF-16 RF-17'],
  ['3 · Compra', 'RF-05 RF-06 RF-07 RF-14'], ['4 · Entrega y posventa', 'RF-08 RF-09 RF-10 RF-11 RF-18 RF-19']]
  .forEach(([f, ids]) => ids.split(' ').forEach((id) => { FASE[id] = f; }));

// Reparto propuesto (FOOD4ALL_propuesta_asana.md, apartado 4)
const RESPONSABLE = {};
[['Miguel', 'RF-01 RF-06 RF-09 RF-12 RF-14 RF-18 RNF-03 RNF-07 RNF-08 RNF-11'],
  ['Juan Antonio', 'RF-02 RF-04 RF-07 RF-11 RF-15 RF-17 RNF-04 RNF-05 RNF-06 RNF-10'],
  ['Sebastián', 'RF-03 RF-05 RF-08 RF-10 RF-13 RF-16 RF-19 RNF-01 RNF-02 RNF-09']]
  .forEach(([p, ids]) => ids.split(' ').forEach((id) => { RESPONSABLE[id] = p; }));

// El revisor es quien lleva el siguiente proceso de la cascada con otro responsable
function revisor(id, orden) {
  const i = orden.indexOf(id);
  for (let k = 1; k < orden.length; k++) {
    const sig = orden[(i + k) % orden.length];
    if (RESPONSABLE[sig] !== RESPONSABLE[id]) return RESPONSABLE[sig];
  }
  return '';
}

const natural = (a, b) => a.localeCompare(b, 'es', { numeric: true });
const unicos = (xs) => [...new Set(xs.filter(Boolean))].sort(natural);
const porFrecuencia = (xs) => {
  const c = {};
  xs.filter(Boolean).forEach((x) => { c[x] = (c[x] || 0) + 1; });
  return Object.entries(c).sort((a, b) => b[1] - a[1] || natural(a[0], b[0]));
};

// --- Especificación: tablas markdown ---
let spec = fs.readFileSync(specPath, 'utf8');
function tabla(desdeTitulo) {
  const i = spec.indexOf(desdeTitulo);
  if (i < 0) throw new Error(`No encuentro «${desdeTitulo}» en la especificación`);
  const lineas = spec.slice(i).split('\n');
  const ini = lineas.findIndex((l) => l.startsWith('|'));
  const filas = [];
  for (let k = ini; k < lineas.length && lineas[k].startsWith('|'); k++) filas.push(lineas[k]);
  const celdas = (l) => l.split('|').slice(1, -1).map((c) => c.trim());
  const cab = celdas(filas[0]);
  return filas.slice(2).map((l) => Object.fromEntries(celdas(l).map((c, j) => [cab[j], c])));
}
const procMeta = Object.fromEntries(tabla('### 7.1 Catálogo de procesos').map((r) => [r.ID, r]));
const rnfMeta = Object.fromEntries(tabla('## 8. Requisitos no funcionales').map((r) => [r.ID, r]));
const backlog = tabla('## 12. Product Backlog');
const historias = Object.fromEntries(tabla('## 6. Historias de usuario').map((r) => [r.ID, r]));
// Criterios Gherkin de cada historia (bloques ```gherkin del bloque 6)
const criteriosUS = {};
for (const m of spec.matchAll(/```gherkin\n(US-\d+) · ([^\n]+)\n([\s\S]*?)```/g)) {
  criteriosUS[m[1]] = m[3].trim().split('\n').filter((l) => /^Criterio/.test(l));
}

// Procesos a los que afecta cada RNF («Todos», «RF-04, RF-05», «RF-04 a RF-06»)
function procesosDe(texto) {
  if (/Todos/.test(texto)) return CASCADA;
  const ids = [];
  for (const parte of texto.split(',').map((s) => s.trim())) {
    const m = parte.match(/RF-(\d+) a RF-(\d+)/);
    if (m) for (let n = +m[1]; n <= +m[2]; n++) ids.push('RF-' + String(n).padStart(2, '0'));
    else if (/^RF-\d+$/.test(parte)) ids.push(parte);
  }
  return ids;
}

// Fichas completas del Anexo A (FOOD4ALL); el A.1 ya usa la numeración del Excel.
const anexo = {};
{
  const a = spec.indexOf('### A.1 FOOD4ALL');
  const b = spec.indexOf('### A.2 ');
  const texto = spec.slice(a, b);
  for (const bloque of texto.split(/^#### /m).slice(1)) {
    const id = bloque.match(/^(RF-01\.\d+)/)[1];
    anexo[id] = bloque.split('\n').slice(1).join('\n').trim();
  }
}

// --- Catálogo de necesidades en markdown (se escribe en la especificación y en FOOD4ALL_necesidades.md) ---
function tablaNecesidades(filas) {
  const out = ['| ID | Necesidad | Quién | Tipo | Estado | Fuentes | Requisitos (MVP) |', '| --- | --- | --- | --- | --- | --- | --- |'];
  for (const n of NECESIDADES) {
    const rs = filas.filter((f) => f.necesidad === n.id);
    out.push(`| ${n.id} | ${n.texto} | ${n.quien} (${n.persona}) | ${n.tipo} | ${n.estado} | ${n.fuentes} | ${rs.length} (${rs.filter((f) => f.entrega === 'MVP').length}) |`);
  }
  return out.join('\n');
}
function rellenar(texto, contenido) {
  const re = /<!-- catalogo:inicio -->[\s\S]*?<!-- catalogo:fin -->/;
  if (!re.test(texto)) throw new Error('Faltan las marcas <!-- catalogo:inicio --> / <!-- catalogo:fin -->');
  return texto.replace(re, `<!-- catalogo:inicio -->\n${contenido}\n<!-- catalogo:fin -->`);
}

(async () => {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(xlsxPath);
  const hoja = wb.getWorksheet('Requisitos');
  const cab = hoja.getRow(1).values.map((v) => String(v || '').trim());
  const col = (n) => { const i = cab.indexOf(n); if (i < 0) throw new Error(`Falta la columna «${n}» en el Excel`); return i; };
  const filas = [];
  hoja.eachRow((r, i) => {
    if (i === 1) return;
    const v = (n) => String(r.getCell(col(n)).value ?? '').trim();
    const id = v('ID');
    const m = id.match(/^((RN?F-\d+)\.\d+)-\d+$/);
    if (!m) return;
    filas.push({
      id, sub: m[1], proc: m[2], proceso: v('Proceso'), subNombre: v('Subrequisito'), texto: v('El sistema deberá…'),
      criterio: v('Criterio de aceptación'), prioridad: v('Prioridad'), entrega: v('Entrega'), alcance: v('Alcance'), depende: v('Depende de'),
      necesidad: v('Necesidad'), posicion: v('Posición'), fuentes: v('Fuentes'), estado: v('Estado'),
      comp: Object.fromEntries(COMPETIDORES.map((c) => [c, v(c)])),
    });
  });
  const sinNecesidad = filas.filter((f) => !NEC[f.necesidad]);
  if (sinNecesidad.length) throw new Error(`Requisitos con necesidad desconocida: ${sinNecesidad.map((f) => f.id).join(', ')}`);

  // Agrupar proceso → subrequisito → atómicos
  const procesos = new Map();
  for (const f of filas) {
    if (!procesos.has(f.proc)) procesos.set(f.proc, { id: f.proc, nombre: f.proceso, subs: new Map() });
    const p = procesos.get(f.proc);
    if (!p.subs.has(f.sub)) p.subs.set(f.sub, { id: f.sub, nombre: f.subNombre, atomicos: [] });
    p.subs.get(f.sub).atomicos.push(f);
  }

  const peorPrioridad = (xs) => ['Must', 'Should', 'Could', "Won't"].find((p) => xs.some((x) => x.prioridad === p)) || '';
  const primeraEntrega = (xs) => ['MVP', 'V2', 'V3', 'Excluido'].find((e) => xs.some((x) => x.entrega === e)) || '';
  const alcanceDe = (xs) => {
    const e = primeraEntrega(xs);
    if (e !== 'MVP') return e;
    return xs.some((x) => x.alcance === 'MVP simulado') ? 'MVP (con partes simuladas)' : 'MVP';
  };
  function competencia(xs) {
    const pos = {};
    xs.forEach((x) => { pos[x.posicion] = (pos[x.posicion] || 0) + 1; });
    const posTxt = Object.entries(pos).sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k} ${n}`).join(' · ');
    const porComp = COMPETIDORES.map((c) => {
      const s = xs.filter((x) => x.comp[c] === 'S').length;
      const p = xs.filter((x) => x.comp[c] === 'P').length;
      const n = xs.filter((x) => x.comp[c] === 'N').length;
      return `${c}: ${s} sí${p ? `, ${p} parcial` : ''}${n ? `, ${n} no` : ''}`;
    });
    const dif = xs.filter((x) => /Diferencial|Mejora/.test(x.posicion)).map((x) => `${x.id} (${x.posicion})`);
    return { posTxt, porComp, dif };
  }
  const historiasDe = (procId) => Object.values(historias).filter((h) => h.Proceso === procId).map((h) => h.ID);
  const rnfsDe = (procId) => Object.values(rnfMeta).filter((r) => procesosDe(r.Procesos).includes(procId)).map((r) => `${r.ID} ${r['Característica']}`);

  // --- Construcción de las tareas (bloques neutros: se pintan como .md o como HTML de Asana) ---
  const tareas = [];
  const ordenRF = CASCADA.filter((id) => procesos.has(id));
  const ordenRNF = [...procesos.keys()].filter((id) => id.startsWith('RNF')).sort(natural);
  const faltanFichas = [];
  const NOTA_FUERA_MVP = (e) => `Fuera del MVP (${e}): esta ficha se completa cuando el requisito entre en un sprint. Para el Hito 2 bastan la descripción de los requisitos atómicos y sus criterios.`;

  function tareaSub(p, s, tipo) {
    const resp = RESPONSABLE[p.id];
    const rev = revisor(p.id, tipo === 'RF' ? ordenRF : ordenRNF);
    const xs = s.atomicos;
    const entrega = primeraEntrega(xs);
    const fi = FICHAS[s.id];
    if (entrega === 'MVP' && !fi) faltanFichas.push(s.id);
    const c = competencia(xs);
    const necs = porFrecuencia(xs.map((x) => x.necesidad)).map(([id]) => conNombre(id));
    const fuentesN = unicos(xs.flatMap((x) => (NEC[x.necesidad].fuentes.match(/F-\d+/g) || [])));
    const dep = unicos(xs.flatMap((x) => x.depende.split('; ')));
    const b = [];
    if (EXCLUIDO[s.id]) b.push({ aviso: EXCLUIDO[s.id] });
    b.push({ p: `**Responsable:** ${quien(resp)} · **Revisor:** ${quien(rev)} · **Prioridad:** ${peorPrioridad(xs)} · **Entrega:** ${entrega} · **Alcance:** ${alcanceDe(xs)} · **Estado:** Pendiente${dep.length ? ` · **Depende de:** ${dep.join('; ')}` : ''}` });
    const origen = { h: '2. Origen', lista: [...necs.map((n) => `Necesidad: ${n}`), `Historias: ${historiasDe(p.id).join(', ') || '—'}`, `Fuentes de las necesidades: ${fuentesN.join(', ') || '—'} · Fuentes del benchmark: ${unicos(xs.flatMap((x) => x.fuentes.split(/,\s*/))).join(', ') || '—'}`] };
    const actores = { h: '3. Actores y roles', p: (tipo === 'RF' ? (procMeta[p.id] || {}).Actor : 'Todos los roles') || '—' };
    const supuestos = fi && fi.e ? { h: '4. Supuestos de entrada y salida', lista: [`Supone que existe: ${fi.e}`, `Entrega a: ${fi.s}`] } : null;

    if (tipo === 'RF' && anexo[s.id]) {
      b.push({ p: 'Ficha completa del Anexo A de la especificación (apartados 1 y 5 a 13); el resto, abajo.' });
      b.push({ md: anexo[s.id] });
      b.push(origen, actores);
      if (supuestos) b.push(supuestos);
    } else if (fi && fi.d) {
      b.push({ h: '1. Descripción', p: fi.d }, origen, actores);
      if (supuestos) b.push(supuestos);
      if (tipo === 'RF') {
        if (fi.u) b.push({ h: '5. Ubicación', p: fi.u });
        if (fi.el) b.push({ h: '6. Elementos de la pantalla (en este orden)', lista: fi.el });
        if (fi.di) b.push({ h: '7. Diseño', p: fi.di });
        if (fi.f) b.push({ h: '8. Flujo principal', ol: fi.f });
        b.push({ h: '9. Campos y validaciones', p: fi.c ? null : 'No tiene campos de entrada.', lista: fi.c ? fi.c.map(([n, t, o, v, msg]) => `**${n}** · ${t} · obligatorio: ${o} · ${v} · mensaje: ${msg}`) : null });
        if (fi.er) b.push({ h: '10. Flujos alternativos y errores', lista: fi.er });
        if (fi.r) b.push({ h: '11. Reglas de negocio y seguridad', lista: fi.r });
        if (fi.a) b.push({ h: '12. Accesibilidad', p: fi.a });
      } else {
        const meta = rnfMeta[p.id] || {};
        b.push({ h: '5. Métrica, umbral y verificación', p: `${meta['Métrica y umbral'] || '—'} · Verificación: ${meta['Verificación'] || '—'}` });
        if (fi.v) {
          b.push({ h: 'Plan de verificación (se ejecuta en el Sprint 5)', lista: [
            ...fi.v.origen.map((o) => `Origen del umbral: ${o}`),
            `Entorno: ${fi.v.entorno}`, `Muestra: ${fi.v.muestra}`, `Método: ${fi.v.metodo}`,
            `Evidencia esperada: ${fi.v.evidencia}`, `Qué haría revisar el umbral: ${fi.v.revisar}`] });
        }
      }
    } else {
      b.push({ h: '1. Descripción', p: entrega === 'MVP' ? 'Falta la ficha.' : NOTA_FUERA_MVP(entrega) }, origen, actores);
      if (supuestos) b.push(supuestos);
    }
    b.push({ h: '13. Criterios de aceptación', p: 'Uno por requisito atómico (en la lista de abajo, «Criterio»), en formato Dado / Cuando / Entonces.' });
    if (tipo === 'RF') b.push({ h: '14. Requisitos no funcionales que le aplican', p: rnfsDe(p.id).join(' · ') || '—' });
    else b.push({ h: '14. Procesos a los que afecta', p: (rnfMeta[p.id] || {}).Procesos || '—' });
    b.push({ h: '15. Competencia', p: c.posTxt, lista: [...c.porComp, ...(c.dif.length ? [`Diferenciales y mejoras: ${c.dif.join(', ')}`] : [])] });
    b.push({ h: '16. Fuera de alcance', p: (fi && fi.fa) || (entrega === 'MVP' ? 'Falta.' : NOTA_FUERA_MVP(entrega)) });
    b.push({ h: `Requisitos atómicos (${xs.length})`, atomicos: xs });
    b.push({ p: '**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario que indica: elemento revisado, discrepancias encontradas, decisión, cambio hecho y fecha. «Hecho cuando» es la definición de terminado de la ficha; los criterios de aceptación son los del apartado 13.' });
    return { id: s.id, nombre: `${s.id} · ${s.nombre}`, responsable: resp, fecha: FECHA_FICHAS, bloques: b, hijos: [] };
  }

  function tareaProceso(p, tipo) {
    const xs = [...p.subs.values()].flatMap((s) => s.atomicos);
    const resp = RESPONSABLE[p.id];
    const rev = revisor(p.id, tipo === 'RF' ? ordenRF : ordenRNF);
    const c = competencia(xs);
    const b = [{ p: `**${VERSION}** · **Responsable:** ${quien(resp)} · **Revisor:** ${quien(rev)} · **Fecha:** ${ASIGNADO ? '22/10/2026' : 'por asignar'}` }];
    if (tipo === 'RF') {
      const m = procMeta[p.id] || {};
      const i = ordenRF.indexOf(p.id);
      b.push({ p: `**Fase:** ${FASE[p.id]} (puesto ${i + 1} de ${ordenRF.length} en la cascada) · **Actores:** ${m.Actor} · **Historias:** ${historiasDe(p.id).join(', ') || '—'} · **Prioridad:** ${peorPrioridad(xs)} · **Entrega:** ${primeraEntrega(xs)}` });
      b.push({ h: 'Necesidades que cubre (nº de requisitos)', lista: porFrecuencia(xs.map((x) => x.necesidad)).map(([id, n]) => `${conNombre(id)} (${n})`) });
      b.push({ p: `**Supone que existe:** ${i === 0 ? 'nada, es el primero' : ordenRF.slice(0, i).join(', ')} (se escribe como supuesto; no hay que esperar a que esté hecho).` });
      if (['RF-06', 'RF-07', 'RF-08', 'RF-09', 'RF-10'].includes(p.id)) b.push({ p: '**Estados comunes:** FOOD4ALL_estados_pedido.md (pedido global, subpedido, línea, pago y reembolso de prueba). Esta ficha no puede contradecirlos.' });
    } else {
      const m = rnfMeta[p.id] || {};
      b.push({ p: `**El sistema deberá:** ${m['El sistema deberá…']}` });
      b.push({ p: `**Métrica y umbral:** ${m['Métrica y umbral']} · **Origen del umbral:** ${m['Origen del umbral'] || '—'} · **Verificación:** ${m['Verificación']} · **Procesos:** ${m.Procesos} · **Estado:** ${m.Estado}` });
    }
    b.push({ h: 'Subrequisitos (uno por subtarea)', lista: [...p.subs.values()].map((s) => `${s.id} · ${s.nombre} (${s.atomicos.length}) · ${peorPrioridad(s.atomicos)} · ${primeraEntrega(s.atomicos)}${EXCLUIDO[s.id] ? ' — excluido' : ''}`) });
    b.push({ h: 'Competencia', p: `${xs.length} requisitos atómicos · ${c.posTxt}. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro ${p.id}.` });
    b.push({ p: '**Hecho cuando:** todos los subrequisitos están cerrados y revisados.' });
    return {
      id: p.id, nombre: `${p.id} · ${p.nombre}`, responsable: resp, fecha: FECHA_FICHAS, bloques: b,
      hijos: [...p.subs.values()].map((s) => tareaSub(p, s, tipo)),
    };
  }

  tareas.push({
    id: 'RF', nombre: 'Requisitos funcionales (RF-01 a RF-19)', fecha: FECHA_FICHAS,
    bloques: [{ p: `${VERSION}. Un proceso principal por subtarea, en el orden de la cascada de construcción. Dentro de cada proceso, un subrequisito por pantalla o método, con su ficha. Las fichas del MVP están completas; las de V2 y V3 se completan cuando entren en un sprint. Fuente: docs/requisitos/ del repositorio.` }],
    hijos: ordenRF.map((id) => tareaProceso(procesos.get(id), 'RF')),
  });
  tareas.push({
    id: 'RNF', nombre: 'Requisitos no funcionales (RNF-01 a RNF-11)', fecha: FECHA_FICHAS,
    bloques: [{ p: `${VERSION}. Un requisito no funcional por subtarea, agrupados por característica de calidad (ISO/IEC 25010). Cada uno indica a qué procesos afecta, de dónde sale su umbral (ley, referencia técnica, decisión o hipótesis) y cómo se verificará en el Sprint 5.` }],
    hijos: ordenRNF.map((id) => tareaProceso(procesos.get(id), 'RNF')),
  });
  const mvp = backlog.filter((r) => /^MVP/.test(r.Entrega));
  const backlogTarea = {
    id: 'BACKLOG', nombre: `Product Backlog (${backlog.length} historias)`, fecha: FECHA_BACKLOG, padre: '[B5] User stories y revisión INVEST',
    bloques: [{ p: `${VERSION}. Historias ordenadas por prioridad y por la cascada. Las ${mvp.length} primeras forman el MVP (${mvp.filter((r) => r.Prioridad === 'Must').length} Must y ${mvp.filter((r) => r.Prioridad !== 'Must').length} Should con IA simulada). Puntos en escala 1, 2, 3, 5 y 8; se revisan en cada Sprint Planning. La prioridad es una propuesta hasta la criba. Revisión INVEST: bloque 6 de la especificación.` }],
    hijos: backlog.map((r) => {
      const h = historias[r.Historia] || {};
      return {
        id: r.Historia,
        nombre: `#${r.Orden} ${r.Historia} · ${r['Como… quiero… para…'].replace(/^Como [^,]+, quiero /, '').replace(/, para .*/, '').replace(/^./, (x) => x.toUpperCase())}`,
        responsable: RESPONSABLE[r.Proceso], fecha: FECHA_BACKLOG,
        bloques: [{ p: r['Como… quiero… para…'] + '.' },
          { p: `**Proceso:** ${r.Proceso} · **Prioridad:** ${r.Prioridad} · **Puntos:** ${r.Puntos} · **Entrega:** ${r.Entrega} · **Estado:** ${r.Estado}` },
          { h: 'Necesidades', lista: (h.Origen || '').split(/,\s*/).filter(Boolean).map(conNombre) },
          { h: 'Criterios de aceptación', lista: (criteriosUS[r.Historia] || ['Falta.']) },
          { p: `El detalle de cada criterio está en las fichas de los subrequisitos de ${r.Proceso}.` }],
        hijos: [],
      };
    }),
  };
  if (faltanFichas.length) throw new Error(`Subrequisitos del MVP sin ficha: ${faltanFichas.join(', ')}`);
  const usSinCriterios = backlog.filter((r) => !criteriosUS[r.Historia]).map((r) => r.Historia);
  if (usSinCriterios.length) throw new Error(`Historias sin criterios Gherkin: ${usSinCriterios.join(', ')}`);

  // --- Salidas ---
  fs.writeFileSync(jsonOut, JSON.stringify({ version: VERSION, b4: tareas, b5: backlogTarea }, null, 1));

  // Catálogo de necesidades en la especificación y en FOOD4ALL_necesidades.md
  const catalogo = tablaNecesidades(filas);
  spec = rellenar(spec, catalogo);
  fs.writeFileSync(specPath, spec);
  fs.writeFileSync(NEC_MD, rellenar(fs.readFileSync(NEC_MD, 'utf8'), catalogo));

  // Vista previa
  const md = [];
  const contar = (ts) => ts.reduce((n, t) => n + 1 + contar(t.hijos), 0);
  const total = contar(tareas) + contar([backlogTarea]);
  const pintarBloques = (bs) => {
    for (const b of bs) {
      if (b.aviso) md.push(`> ⚠️ ${b.aviso}`, '');
      if (b.h) md.push(`**${b.h}**`, '');
      if (b.p) md.push(b.p, '');
      if (b.md) md.push(b.md.replace(/^(#+) /gm, '##### '), '');
      if (b.lista) md.push(...b.lista.map((x) => `- ${x}`), '');
      if (b.ol) md.push(...b.ol.map((x, i) => `${i + 1}. ${x}`), '');
      if (b.atomicos) {
        for (const x of b.atomicos) {
          md.push(`- [ ] **${x.id}** \`${x.prioridad}·${x.entrega}·${x.estado}\`${x.alcance === 'MVP simulado' ? ' `simulado`' : ''} ${x.texto} _(${x.necesidad})_`);
          md.push(`  - Criterio: ${x.criterio}`);
          md.push(`  - Competencia: ${COMPETIDORES.map((c) => `${c.split(' ')[0]} ${x.comp[c] || '?'}`).join(' · ')} → ${x.posicion}`);
        }
        md.push('');
      }
    }
  };

  md.push('# FOOD4ALL · Requisitos en Asana (vista previa)', '',
    `> ${VERSION}. Así queda cada tarea de [B4] y [B5] en Asana, con su descripción exacta. Generado con \`benchmark/asana.js\` a partir del Excel, la especificación, \`necesidades.js\` y \`fichas_*.js\`. ${total} tareas.`, '',
    '## 1. Árbol', '', '```text',
    '[Food4All] Hito 2 – Requisitos y Criterios de Aceptación · Marketplace Local',
    '├─ [B4] Catálogo de requisitos: fichas RF / RNF');
  tareas.forEach((g, gi) => {
    const ult = gi === tareas.length - 1;
    md.push(`│   ${ult ? '└─' : '├─'} ${g.nombre}`);
    g.hijos.forEach((p, pi) => {
      const pUlt = pi === g.hijos.length - 1;
      md.push(`│   ${ult ? '   ' : '│  '} ${pUlt ? '└─' : '├─'} ${p.nombre.padEnd(62)} @${p.responsable}`);
      p.hijos.forEach((s, si) => md.push(`│   ${ult ? '   ' : '│  '} ${pUlt ? '   ' : '│  '} ${si === p.hijos.length - 1 ? '└─' : '├─'} ${s.nombre}${EXCLUIDO[s.id] ? '  ⚠ excluido' : ''}`));
    });
  });
  md.push('└─ [B5] User stories y revisión INVEST', `    └─ ${backlogTarea.nombre}`);
  backlogTarea.hijos.forEach((h, i) => md.push(`        ${i === backlogTarea.hijos.length - 1 ? '└─' : '├─'} ${h.nombre.padEnd(60)} @${h.responsable}`));
  md.push('```', '');

  md.push('## 2. Tareas, con su descripción', '',
    'Cada encabezado es una tarea de Asana; lo que hay debajo es su descripción tal cual. En Asana los requisitos atómicos se ven como lista con casillas.', '');
  const pintar = (t, nivel) => {
    md.push(`${'#'.repeat(Math.min(nivel, 5))} ${t.nombre}`, '');
    md.push(`_Responsable: ${t.responsable ? quien(t.responsable) + (ASIGNADO ? '' : ` (propuesta: ${t.responsable})`) : '—'} · Fecha: ${ASIGNADO ? t.fecha.split('-').reverse().join('/') : 'por asignar'} · Subtareas: ${t.hijos.length}_`, '');
    pintarBloques(t.bloques);
    t.hijos.forEach((h) => pintar(h, nivel + 1));
  };
  tareas.forEach((t) => pintar(t, 3));
  pintar(backlogTarea, 3);
  fs.writeFileSync(mdOut, md.join('\n'));

  // --- Matriz de trazabilidad ---
  const mx = [];
  const subs = [...procesos.values()].flatMap((p) => [...p.subs.values()].map((s) => ({ p, s })));
  const orden = (id) => (id.startsWith('RNF') ? 100 + +id.slice(4, 6) : CASCADA.indexOf(id));
  subs.sort((a, b) => orden(a.p.id) - orden(b.p.id) || natural(a.s.id, b.s.id));
  mx.push('# FOOD4ALL · Matriz de trazabilidad', '',
    `${VERSION} · Generada con \`benchmark/asana.js\`: no se edita a mano. Fuentes: \`necesidades.js\`, el Excel de requisitos y la especificación (historias y RNF).`, '',
    'Responde a [B6] «Matriz de trazabilidad inicial». Columnas: necesidad, fuente, requisito, historia, prioridad y entrega, criterios de aceptación y RNF. Las de Caso de uso (Hito 3), Clase (Hito 4) y Prueba (Hito 5) quedan vacías para los próximos hitos.', '',
    '**Cómo leerla.** Una relación escrita no prueba que la fuente sea válida ni que el enlace sea correcto: eso lo comprueba el revisor de cada bloque y lo deja en un comentario de Asana. El estado de cada necesidad dice qué tipo de evidencia tiene (`FOOD4ALL_necesidades.md`).', '');

  mx.push('## 1. Cobertura por necesidad', '',
    '| Necesidad | Estado | Fuentes | Procesos | Subrequisitos | Historias | Requisitos (MVP) | Observación |', '| --- | --- | --- | --- | --- | --- | --- | --- |');
  const avisos = [];
  for (const n of NECESIDADES) {
    const rs = filas.filter((f) => f.necesidad === n.id);
    const ps = unicos(rs.map((f) => f.proc));
    const us = unicos(Object.values(historias).filter((h) => (h.Origen || '').includes(n.id)).map((h) => h.ID));
    const nMvp = rs.filter((f) => f.entrega === 'MVP').length;
    let obs = '';
    if (!rs.length) { obs = 'Sin cubrir'; avisos.push(`${n.id} no tiene requisitos.`); } else if (!nMvp) { obs = 'Solo fuera del MVP'; avisos.push(`${n.id} solo se cubre fuera del MVP.`); }
    if (!us.length) { obs = obs ? `${obs}; sin historia` : 'Sin historia propia'; }
    mx.push(`| **${n.id}** ${n.texto} | ${n.estado} | ${n.fuentes} | ${ps.join(', ')} | ${unicos(rs.map((f) => f.sub)).length} | ${us.join(', ') || '—'} | ${rs.length} (${nMvp}) | ${obs || '—'} |`);
  }
  mx.push('');

  mx.push('## 2. Matriz por subrequisito', '',
    '| Requisito | Necesidades | Fuentes de la necesidad | Historia | Prioridad · Entrega | Alcance | Depende de | Criterios de aceptación | RNF | Caso de uso (H3) | Clase (H4) | Prueba (H5) |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |');
  for (const { p, s } of subs) {
    const xs = s.atomicos;
    const necs = porFrecuencia(xs.map((x) => x.necesidad)).map(([id]) => id);
    const fuentes = unicos(necs.flatMap((id) => NEC[id].fuentes.match(/F-\d+/g) || []));
    const us = p.id.startsWith('RNF') ? '(criterio de las historias de sus procesos)' : (historiasDe(p.id).join(', ') || '—');
    const ca = xs.length === 1 ? xs[0].id : `${xs[0].id} … ${xs[xs.length - 1].id} (${xs.length})`;
    const rnf = p.id.startsWith('RNF') ? '—' : rnfsDe(p.id).map((r) => r.split(' ')[0]).join(', ');
    const dep = unicos(xs.flatMap((x) => x.depende.split('; ')));
    mx.push(`| **${s.id}** ${s.nombre} | ${necs.join(', ')} | ${fuentes.join(', ')} | ${us} | ${peorPrioridad(xs)} · ${primeraEntrega(xs)} | ${alcanceDe(xs)} | ${dep.join('; ') || '—'} | ${ca} | ${rnf} | | | |`);
  }
  mx.push('');

  mx.push('## 3. Controles', '');
  const sinUS = ordenRF.filter((id) => !historiasDe(id).length);
  mx.push(`- Requisitos sin necesidad: **0** de ${filas.length}.`);
  mx.push(`- Procesos RF sin historia: ${sinUS.length ? sinUS.join(', ') : '**ninguno**'}.`);
  mx.push(`- Subrequisitos: ${subs.length} (${subs.filter(({ s }) => primeraEntrega(s.atomicos) === 'MVP').length} del MVP, todos con ficha completa).`);
  mx.push(...avisos.map((a) => `- ${a}`));
  mx.push(`- Necesidades de usuario confirmadas con entrevistas: **0** de ${NECESIDADES.filter((n) => n.tipo === 'Usuario').length}. Entrevistas: F-07 tiene E1–E6 (23/10/2026) y F-08 (vendedores) ninguna; sus estados siguen la regla de evidencia de \`FOOD4ALL_necesidades.md\`.`);
  mx.push('', '## 4. Fuentes', '', '| ID | Fuente | Tipo y fiabilidad |', '| --- | --- | --- |', ...FUENTES_N.map(([id, t, f]) => `| ${id} | ${t} | ${f} |`), '');
  fs.writeFileSync(MATRIZ, mx.join('\n'));

  console.log(`Tareas: ${total} · Atómicos: ${filas.length} · Fichas MVP: ${subs.filter(({ s }) => primeraEntrega(s.atomicos) === 'MVP').length} · ${mdOut} · ${path.basename(MATRIZ)}`);
  if (avisos.length) console.log('Avisos de cobertura:\n  ' + avisos.join('\n  '));
})().catch((e) => { console.error(e); process.exit(1); });
