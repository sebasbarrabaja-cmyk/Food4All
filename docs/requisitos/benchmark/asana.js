// Prepara las tareas de Asana a partir del Excel y de la especificación.
// No llama a Asana: genera la vista previa (.md) y el árbol de tareas (.json) que se subirá después.
// Uso: node asana.js ../FOOD4ALL_requisitos_benchmark.xlsx ../FOOD4ALL_especificacion_requisitos.md ../FOOD4ALL_asana_vista_previa.md asana_tareas.json
const fs = require('fs');
const ExcelJS = require('exceljs');

const [xlsxPath, specPath, mdOut, jsonOut] = process.argv.slice(2);
const FECHA_FICHAS = '2026-10-22';
const FECHA_BACKLOG = '2026-10-23';
// Sin reparto todavía: las descripciones dicen «por asignar» y en Asana no se ponen responsable ni fecha.
const ASIGNADO = false;
const quien = (p) => (ASIGNADO ? p : 'por asignar');
const COMPETIDORES = ['Mercadona online', 'Glovo', 'Too Good To Go', 'Wetaca', 'Market Wagon', 'Open Food Network'];
const PRIO = { M: 'Must', S: 'Should', C: 'Could' };
const PROPUESTO_QUITAR = { 'RF-13.7': 'Es el panel de prompts de la landing, no del marketplace (propuesto quitarlo).' };

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

// --- Especificación: tablas markdown ---
const spec = fs.readFileSync(specPath, 'utf8');
function tabla(desdeTitulo) {
  const i = spec.indexOf(desdeTitulo);
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

(async () => {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(xlsxPath);
  const hoja = wb.getWorksheet('Requisitos');
  const cab = hoja.getRow(1).values.map((v) => String(v || '').trim());
  const col = (n) => cab.indexOf(n);
  const filas = [];
  hoja.eachRow((r, i) => {
    if (i === 1) return;
    const v = (n) => String(r.getCell(col(n)).value ?? '').trim();
    const id = v('ID');
    const m = id.match(/^((RN?F-\d+)\.\d+)-\d+$/);
    if (!m) return;
    filas.push({
      id, sub: m[1], proc: m[2], proceso: v('Proceso'), subNombre: v('Subrequisito'), texto: v('El sistema deberá…'),
      criterio: v('Criterio de aceptación'), prioridad: v('Prioridad'), entrega: v('Entrega'), necesidad: v('Necesidad'),
      posicion: v('Posición'), fuentes: v('Fuentes'), estado: v('Estado'),
      comp: Object.fromEntries(COMPETIDORES.map((c) => [c, v(c)])),
    });
  });

  // Agrupar proceso → subrequisito → atómicos
  const procesos = new Map();
  for (const f of filas) {
    if (!procesos.has(f.proc)) procesos.set(f.proc, { id: f.proc, nombre: f.proceso, subs: new Map() });
    const p = procesos.get(f.proc);
    if (!p.subs.has(f.sub)) p.subs.set(f.sub, { id: f.sub, nombre: f.subNombre, atomicos: [] });
    p.subs.get(f.sub).atomicos.push(f);
  }

  const peorPrioridad = (xs) => ['Must', 'Should', 'Could'].find((p) => xs.some((x) => x.prioridad === p)) || '';
  const primeraEntrega = (xs) => ['MVP', 'V2', 'V3'].find((e) => xs.some((x) => x.entrega === e)) || '';
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

  // --- Construcción de las tareas (bloques neutros: se pintan como .md o como HTML de Asana) ---
  const POR_COMPLETAR = '_Por completar por el responsable._';
  const tareas = [];
  const ordenRF = CASCADA.filter((id) => procesos.has(id));
  const ordenRNF = [...procesos.keys()].filter((id) => id.startsWith('RNF')).sort(natural);

  function tareaSub(p, s, tipo) {
    const resp = RESPONSABLE[p.id];
    const rev = revisor(p.id, tipo === 'RF' ? ordenRF : ordenRNF);
    const xs = s.atomicos;
    const meta = tipo === 'RF' ? procMeta[p.id] || {} : rnfMeta[p.id] || {};
    const c = competencia(xs);
    const rnfs = Object.values(rnfMeta).filter((r) => procesosDe(r.Procesos).includes(p.id)).map((r) => `${r.ID} ${r['Característica']}`);
    const b = [];
    if (PROPUESTO_QUITAR[s.id]) b.push({ aviso: PROPUESTO_QUITAR[s.id] });
    b.push({ p: `**Responsable:** ${quien(resp)} · **Revisor:** ${quien(rev)} · **Prioridad:** ${peorPrioridad(xs)} · **Entrega:** ${primeraEntrega(xs)} · **Estado:** Pendiente` });
    if (anexo[s.id]) {
      b.push({ p: 'Ficha completa (Anexo A de la especificación). Cubre los apartados 1 y 5 a 13; el resto, abajo.' });
      b.push({ md: anexo[s.id] });
      b.push({ h: '2. Origen', p: `Necesidades: ${unicos(xs.map((x) => x.necesidad)).join(', ')} · Historias: ${meta.Historias || '—'} · Fuentes: ${unicos(xs.flatMap((x) => x.fuentes.split(/,\s*/))).join(', ')}` });
      b.push({ h: '3. Actores y roles', p: meta.Actor || POR_COMPLETAR });
      b.push({ h: '4. Supuestos de entrada y salida', p: POR_COMPLETAR });
    } else {
      b.push({ h: '1. Descripción', p: POR_COMPLETAR });
      b.push({ h: '2. Origen', p: `Necesidades: ${unicos(xs.map((x) => x.necesidad)).join(', ')} · Historias: ${meta.Historias || '—'} · Fuentes: ${unicos(xs.flatMap((x) => x.fuentes.split(/,\s*/))).join(', ')}` });
      b.push({ h: '3. Actores y roles', p: meta.Actor || (tipo === 'RNF' ? 'Todos los roles' : POR_COMPLETAR) });
      b.push({ h: '4. Supuestos de entrada y salida', p: POR_COMPLETAR });
      if (tipo === 'RF') {
        b.push({ h: '5 a 12. Ubicación, elementos, diseño, flujo, campos, errores, reglas y accesibilidad', p: `${POR_COMPLETAR} Base: los requisitos atómicos de abajo. Diseño: docs/DISENO.md.` });
      } else {
        b.push({ h: '5. Métrica, umbral y verificación', p: `${meta['Métrica y umbral'] || '—'} · Verificación: ${meta['Verificación'] || '—'}` });
      }
      b.push({ h: '13. Criterios de aceptación', p: 'Uno por requisito atómico (en la lista de abajo, «Criterio»).' });
    }
    if (tipo === 'RF') b.push({ h: '14. Requisitos no funcionales que le aplican', p: rnfs.join(' · ') || '—' });
    else b.push({ h: '14. Procesos a los que afecta', p: meta.Procesos || '—' });
    b.push({ h: '15. Competencia', p: c.posTxt, lista: [...c.porComp, ...(c.dif.length ? [`Diferenciales y mejoras: ${c.dif.join(', ')}`] : [])] });
    b.push({ h: '16. Fuera de alcance', p: POR_COMPLETAR });
    b.push({ h: `Requisitos atómicos (${xs.length})`, atomicos: xs });
    b.push({ p: '**Hecho cuando:** los 16 apartados están completos, cada regla tiene su criterio y el revisor lo aprueba en un comentario.' });
    return { nombre: `${s.id} · ${s.nombre}`, responsable: resp, fecha: FECHA_FICHAS, bloques: b, hijos: [] };
  }

  function tareaProceso(p, tipo) {
    const xs = [...p.subs.values()].flatMap((s) => s.atomicos);
    const resp = RESPONSABLE[p.id];
    const rev = revisor(p.id, tipo === 'RF' ? ordenRF : ordenRNF);
    const c = competencia(xs);
    const b = [{ p: `**Responsable:** ${quien(resp)} · **Revisor:** ${quien(rev)} · **Fecha:** ${ASIGNADO ? '22/10/2026' : 'por asignar'}` }];
    if (tipo === 'RF') {
      const m = procMeta[p.id] || {};
      const i = ordenRF.indexOf(p.id);
      b.push({ p: `**Fase:** ${FASE[p.id]} (puesto ${i + 1} de ${ordenRF.length} en la cascada) · **Actores:** ${m.Actor} · **Necesidades:** ${m.Necesidades} · **Historias:** ${m.Historias || '—'} · **Prioridad:** ${m.Prioridad}` });
      b.push({ p: `**Supone que existe:** ${i === 0 ? 'nada, es el primero' : ordenRF.slice(0, i).join(', ')} (se escribe como supuesto; no hay que esperar a que esté hecho).` });
    } else {
      const m = rnfMeta[p.id] || {};
      b.push({ p: `**El sistema deberá:** ${m['El sistema deberá…']}` });
      b.push({ p: `**Métrica y umbral:** ${m['Métrica y umbral']} · **Verificación:** ${m['Verificación']} · **Procesos:** ${m.Procesos} · **Estado:** ${m.Estado}` });
    }
    b.push({ h: 'Subrequisitos (uno por subtarea)', lista: [...p.subs.values()].map((s) => `${s.id} · ${s.nombre} (${s.atomicos.length})${PROPUESTO_QUITAR[s.id] ? ' — propuesto quitar' : ''}`) });
    b.push({ h: 'Competencia', p: `${xs.length} requisitos atómicos · ${c.posTxt}. Detalle: FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro ${p.id}.` });
    b.push({ p: '**Hecho cuando:** todos los subrequisitos están cerrados y revisados.' });
    return {
      nombre: `${p.id} · ${p.nombre}`, responsable: resp, fecha: FECHA_FICHAS, bloques: b,
      hijos: [...p.subs.values()].map((s) => tareaSub(p, s, tipo)),
    };
  }

  tareas.push({
    nombre: 'Requisitos funcionales (RF-01 a RF-19)', fecha: FECHA_FICHAS,
    bloques: [{ p: 'Un proceso principal por subtarea, en el orden de la cascada de construcción. Dentro de cada proceso, un subrequisito por pantalla o método, con su ficha. Fuente: docs/requisitos/ del repositorio.' }],
    hijos: ordenRF.map((id) => tareaProceso(procesos.get(id), 'RF')),
  });
  tareas.push({
    nombre: 'Requisitos no funcionales (RNF-01 a RNF-11)', fecha: FECHA_FICHAS,
    bloques: [{ p: 'Un requisito no funcional por subtarea, agrupados por característica de calidad (ISO/IEC 25010). Cada uno indica a qué procesos afecta.' }],
    hijos: ordenRNF.map((id) => tareaProceso(procesos.get(id), 'RNF')),
  });
  const backlogTarea = {
    nombre: 'Product Backlog (13 historias)', fecha: FECHA_BACKLOG, padre: '[B5] User stories y revisión INVEST',
    bloques: [{ p: 'Historias ordenadas por valor y por la cascada. Las 9 primeras forman el MVP. Puntos: escala 1, 2, 3, 5, 8, se revisan en cada Sprint Planning.' }],
    hijos: backlog.map((r) => ({
      nombre: `#${r.Orden} ${r.Historia} · ${r['Como… quiero… para…'].replace(/^Como [^,]+, quiero /, '').replace(/, para .*/, '').replace(/^./, (c) => c.toUpperCase())}`,
      responsable: RESPONSABLE[r.Proceso], fecha: FECHA_BACKLOG,
      bloques: [{ p: r['Como… quiero… para…'] + '.' },
        { p: `**Proceso:** ${r.Proceso} · **Prioridad:** ${r.Prioridad} · **Puntos:** ${r.Puntos} · **Entrega:** ${r.Entrega} · **Estado:** ${r.Estado}` },
        { p: `**Criterios de aceptación:** los de los subrequisitos de ${r.Proceso} (Gherkin, en su ficha).` }],
      hijos: [],
    })),
  };

  // --- Salidas ---
  fs.writeFileSync(jsonOut, JSON.stringify({ b4: tareas, b5: backlogTarea }, null, 1));

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
      if (b.atomicos) {
        for (const x of b.atomicos) {
          md.push(`- [ ] **${x.id}** \`${x.prioridad}·${x.entrega}·${x.estado}\` ${x.texto}`);
          md.push(`  - Criterio: ${x.criterio}`);
          md.push(`  - Competencia: ${COMPETIDORES.map((c) => `${c.split(' ')[0]} ${x.comp[c] || '?'}`).join(' · ')} → ${x.posicion}`);
        }
        md.push('');
      }
    }
  };

  md.push('# FOOD4ALL · Vista previa de los requisitos en Asana', '',
    '> **Vista previa: no se ha escrito nada en Asana.** Así quedaría cada tarea, con su descripción exacta, si se aprueba la propuesta (`FOOD4ALL_propuesta_asana.md`).',
    `> Generado con \`benchmark/asana.js\` a partir del Excel y de la especificación. ${total} subtareas nuevas.`, '',
    '**Supuestos de esta vista** (se cambian con tu feedback): todo va dentro de [B4] (D1); las fichas antiguas no se tocan aquí (D2); los requisitos atómicos son una lista en la descripción (D3); reparto de la propuesta (D4); numeración del Excel (D7); RF-13.7 aparece marcado como «propuesto quitar».', '',
    '## 1. Árbol', '', '```text',
    '[Food4All] Hito 2 – Requisitos y Criterios de Aceptación · Marketplace Local',
    '├─ [B4] Catálogo de requisitos: fichas RF / RNF');
  tareas.forEach((g, gi) => {
    const ult = gi === tareas.length - 1;
    md.push(`│   ${ult ? '└─' : '├─'} ${g.nombre}`);
    g.hijos.forEach((p, pi) => {
      const pUlt = pi === g.hijos.length - 1;
      md.push(`│   ${ult ? '   ' : '│  '} ${pUlt ? '└─' : '├─'} ${p.nombre.padEnd(62)} @${p.responsable}`);
      p.hijos.forEach((s, si) => md.push(`│   ${ult ? '   ' : '│  '} ${pUlt ? '   ' : '│  '} ${si === p.hijos.length - 1 ? '└─' : '├─'} ${s.nombre}${PROPUESTO_QUITAR[s.nombre.split(' ')[0]] ? '  ⚠ propuesto quitar' : ''}`));
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
  console.log(`Tareas: ${total} · Atómicos: ${filas.length} · ${mdOut}`);
})().catch((e) => { console.error(e); process.exit(1); });
