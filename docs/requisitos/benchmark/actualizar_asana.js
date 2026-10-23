// Lleva la v0.4 (22/10/2026) al Hito 2 de Food4All en Asana. Solo toca tareas [Food4All]: nunca las de otros grupos ni [TODOS].
// - [B4] y [B5]: reescribe la descripción (y el nombre, si cambia) de las tareas que creó subir_asana.js, y crea US-14 a US-19.
// - [B1], [B2], [B4], [B5], [B6] y algunas de sus subtareas: añade arriba un bloque «Actualización v0.4» y conserva
//   la descripción original debajo.
// No asigna responsables, no pone fechas, no marca nada como completado y no cambia «Estado entrega».
// Antes de escribir guarda la copia de todo lo que va a cambiar en asana_copia_hito2_v04_antes.json.
//
// Uso: node actualizar_asana.js                    en seco: no escribe; deja el HTML en ./html_previo_v04 y lista los cambios
//      node actualizar_asana.js --si               aplica los cambios de descripción y crea las historias nuevas
//      node actualizar_asana.js --si --adjuntos    además adjunta los documentos (.md) en sus tareas
// Nunca publica comentarios en Asana (regla del proyecto desde el 23/10/2026): los comentarios los escribe el equipo.
const fs = require('fs');
const path = require('path');
const { cliente, html, bloqueMd, bienFormado } = require('./asana_html');

const aplicar = process.argv.includes('--si');
const conAdjuntos = process.argv.includes('--adjuntos');
const { asana, adjuntar, env } = cliente();
const { b4, b5 } = JSON.parse(fs.readFileSync(path.join(__dirname, 'asana_tareas.json'), 'utf8'));
const COPIA = path.join(__dirname, 'asana_copia_hito2_v04_antes.json');
const PREVIO = path.join(__dirname, 'html_previo_v04');
const DOCS = path.join(__dirname, '..');
const MARCA = 'Actualización v0.4';

// Bloques que se añaden arriba de las descripciones existentes (Markdown sencillo)
const PREFACIOS = {
  '[B1]': `**${MARCA} (22/10/2026)**
- **Catálogo único de necesidades:** \`docs/requisitos/FOOD4ALL_necesidades.md\` (adjunto). 22 necesidades con ID N-<MÓDULO>-NN, como propone este bloque: 16 de usuario y 6 obligaciones legales. Sustituye a N-01…N-08 (fichas de B4 hasta el 21/10) y a N-01…N-20 (personas de B2, v1); las equivalencias están en el apartado 4.
- **Regla de evidencia** (sustituye a «confirmada si aparece en 2 o más fuentes»): una necesidad es Confirmada si la mencionan 3 o más entrevistas independientes del perfil afectado, con pregunta abierta, cita literal y sin un número igual o mayor que la contradiga. Con 1 o 2, es un Indicio. Las personas y el benchmark no confirman.
- **Plan de contraste:** para cada necesidad, la pregunta abierta y qué requisitos cambian si resulta falsa (apartado 5).
- **Entrevistas:** se registran el 23/10 como subtareas de «Historias de usuario» con la plantilla del apartado 6 (E1…, V1…), sin datos que identifiquen a nadie.
- **Estado a 22/10:** 0 necesidades confirmadas. Todas son Hipótesis u Obligación legal.`,
  'Resumen de hallazgos': `**${MARCA} (22/10/2026)**
- Los códigos son los del catálogo único (\`FOOD4ALL_necesidades.md\`). El ejemplo de abajo (N-IA-01: ajustar la compra a un presupuesto) es ahora **N-PLA-02**.
- La regla «CONFIRMADA con 2 o más fuentes» se sustituye por la regla de evidencia del apartado 1 del catálogo.
- Tabla de hallazgos: Qué dijeron | Qué significa | N-ID | Fuente (E3, V2…). Al terminar, se cambia el estado en \`benchmark/necesidades.js\` y se regenera con \`npm run todo\`.`,
  '[B2]': `**${MARCA} (22/10/2026)**
- Adjunta la **v2** del documento de personas (\`FOOD4ALL_personas_empatia_v2.md\`): mismos textos, con las necesidades del catálogo único y los requisitos con su ID vigente de B4. La v1 numeraba sus requisitos por su cuenta (su RF-01 era el asistente, que en B4 es RF-12).
- Incluye el mapa necesidad → proceso → ficha → historia → criterio (apartado 10).
- Son **arquetipos documentales**, no usuarios observados: se contrastan con las entrevistas de B1 antes de presentarlos como validación.
- Pendiente: revisión de Juan Antonio.`,
  '[B4]': `**${MARCA} (22/10/2026)**
- Las **105 fichas del MVP** (90 RF y 15 RNF) tienen todos sus apartados escritos. Las de V2 y V3 dicen que se completan cuando entren en un sprint.
- Cada requisito lleva su necesidad del catálogo único (ID y nombre), su **alcance** (MVP, MVP simulado, V2, V3 o Excluido) y de qué **depende** (D-01 rol jurídico, D-02 comisión, D-03 hub, H-…).
- **Regla de prioridad:** Must solo en el MVP; el MVP solo lleva Must o Should; V2 lleva Should o Could; V3 solo Could. 58 requisitos ajustados.
- **Estados comunes del pedido** (RF-06 a RF-10, RNF-07): \`FOOD4ALL_estados_pedido.md\`. El reembolso es un registro de prueba, nunca una transferencia. 3 requisitos nuevos de faltas (RF-07.3-06 a -08).
- Cada RNF indica el **origen de su umbral** (ley, referencia técnica, decisión o hipótesis) y su plan de verificación para el Sprint 5.
- Pendiente: repartir responsables y revisores, la revisión de cada ficha por otro miembro y la criba.`,
  '[B5]': `**${MARCA} (22/10/2026)**
- **19 historias**, una por proceso: nuevas US-14 (web pública), US-15 (panel del vendedor), US-16 (liquidación), US-17 (contacto), US-18 (avisos al vendedor) y US-19 (suscripción).
- Todas con **criterios Gherkin propios**. La prioridad de cada historia coincide con la de los requisitos de su proceso: US-06 y US-07 pasan a Must y US-08 queda como Should con IA simulada. Las 14 primeras forman el MVP.
- **Revisión INVEST:** tabla en el bloque 6 de la especificación. Pendiente: que la marque otro miembro.`,
  '[B6]': `**${MARCA} (22/10/2026)**
- **Matriz de trazabilidad** generada: \`FOOD4ALL_matriz_trazabilidad.md\` (adjunta en «Matriz de trazabilidad inicial»). Tiene cobertura por necesidad, 127 subrequisitos con necesidad, fuente, historia, prioridad, alcance, dependencias, criterios y RNF, y controles. Las columnas de los Hitos 3, 4 y 5 quedan vacías.
- **Glosario v2:** bloque 11 de la especificación, con todos los términos pedidos y los del pedido (pedido global, línea, falta, hora de cierre, reembolso de prueba…).
- **Documento de requisitos:** \`FOOD4ALL_documento_requisitos_hito2.md\` (especificación v0.4 con anexos de necesidades, personas, estados, matriz, comparativo y fichas). Se regenera con \`npm run todo\`.
- Pendiente: «Estado entrega» del Hito 2 y la Sprint Review.`,
  'Matriz de trazabilidad inicial': `**${MARCA} (22/10/2026)** Matriz generada desde el repositorio (adjunta): \`docs/requisitos/FOOD4ALL_matriz_trazabilidad.md\`. No se edita a mano; si cambia un requisito, se regenera con \`npm run todo\`. Una relación escrita no prueba que la fuente sea válida: lo confirma el revisor de cada bloque.`,
  'Glosario v2': `**${MARCA} (22/10/2026)** Glosario v2 en el bloque 11 de la especificación (\`FOOD4ALL_especificacion_requisitos.md\`), con todos los términos pedidos aquí.`,
  'Montar el documento de requisitos': `**${MARCA} (22/10/2026)** Documento montado: \`FOOD4ALL_documento_requisitos_hito2.md\` (adjunto en el Hito 2). Une la especificación v0.4 y sus anexos; se regenera con \`npm run todo\`.`,
};

// Adjuntos: [fichero, tarea destino]
const ADJUNTOS = [
  ['FOOD4ALL_documento_requisitos_hito2.md', 'HITO'],
  ['FOOD4ALL_correcciones_hito2.md', 'HITO'],
  ['FOOD4ALL_necesidades.md', '[B1]'],
  ['FOOD4ALL_personas_empatia_v2.md', '[B2]'],
  ['FOOD4ALL_estados_pedido.md', '[B4]'],
  ['FOOD4ALL_matriz_trazabilidad.md', 'Matriz de trazabilidad inicial'],
  ['FOOD4ALL_comparativo_revisado.md', 'Información de otras empresas'],
];

const prefijoId = (nombre) => (nombre.match(/^(RN?F-\d+(?:\.\d+)?) ·/) || [])[1];
const usDe = (nombre) => (nombre.match(/\b(US-\d+) ·/) || [])[1];
const F = 'name,html_notes,completed';

(async () => {
  // --- Lectura (solo GET) ---
  const proyecto = await asana('GET', `/projects/${env.ASANA_PROJECT_GID}/tasks?opt_fields=name&limit=100`);
  const hitoRef = proyecto.find((t) => /^\[Foo[df]4All\] Hito 2 /i.test(t.name));
  if (!hitoRef) throw new Error('No encuentro [Food4All] Hito 2');
  const hito = { gid: hitoRef.gid, ...(await asana('GET', `/tasks/${hitoRef.gid}?opt_fields=${F}`)) };
  const hijos = async (gid) => asana('GET', `/tasks/${gid}/subtasks?opt_fields=${F}`);
  const bloques = await hijos(hito.gid);
  const bloque = (pre) => bloques.find((t) => t.name.startsWith(pre));
  const B = { '[B1]': bloque('[B1]'), '[B2]': bloque('[B2]'), '[B4]': bloque('[B4]'), '[B5]': bloque('[B5]'), '[B6]': bloque('[B6]') };
  for (const [k, v] of Object.entries(B)) if (!v) throw new Error(`No encuentro ${k}`);
  const subB1 = await hijos(B['[B1]'].gid);
  const subB6 = await hijos(B['[B6]'].gid);
  const temporales = bloques.find((t) => t.name.startsWith('Requisitos temporales'));
  // Desde el 23/10 (reordenar_hito2.js) la criba y el benchmark están en [B4], no en «Requisitos temporales».
  const subTemp = temporales ? await hijos(temporales.gid) : await hijos(B['[B4]'].gid);
  const destinos = {
    HITO: hito, '[B1]': B['[B1]'], '[B2]': B['[B2]'], '[B4]': B['[B4]'], '[B5]': B['[B5]'], '[B6]': B['[B6]'],
    'Resumen de hallazgos': subB1.find((t) => t.name.startsWith('Resumen de hallazgos')),
    'Matriz de trazabilidad inicial': subB6.find((t) => t.name.startsWith('Matriz de trazabilidad')),
    'Glosario v2': subB6.find((t) => t.name.startsWith('Glosario')),
    'Montar el documento de requisitos': subB6.find((t) => t.name.startsWith('Montar el documento')),
    'Información de otras empresas': subTemp.find((t) => t.name.startsWith('Información de otras empresas')),
    'Criba de requisitos': subTemp.find((t) => t.name.startsWith('Criba de requisitos')),
  };
  for (const [k, v] of Object.entries(destinos)) if (!v) throw new Error(`No encuentro la tarea «${k}»`);

  // --- Plan ---
  const plan = []; // { tipo: 'actualizar' | 'crear' | 'prefacio' | 'adjuntar' | 'comentar', ... }
  async function emparejar(generadas, padre, clave) {
    const existentes = await hijos(padre.gid);
    for (const t of generadas) {
      const ex = existentes.find((e) => clave(e.name) && clave(e.name) === clave(t.nombre)) || existentes.find((e) => e.name === t.nombre);
      const notas = html(t.bloques);
      if (!bienFormado(notas)) throw new Error(`HTML mal formado: ${t.nombre}`);
      if (!ex) plan.push({ tipo: 'crear', padre: padre.gid, nombre: t.nombre, notas });
      else if (ex.name !== t.nombre || ex.html_notes !== notas) plan.push({ tipo: 'actualizar', gid: ex.gid, antes: ex, nombre: t.nombre, notas });
      if (t.hijos.length) {
        if (!ex) throw new Error(`No existe ${t.nombre} y tiene subtareas: créala primero con subir_asana.js`);
        await emparejar(t.hijos, ex, prefijoId);
      }
    }
  }
  await emparejar(b4, B['[B4]'], (n) => n.split(' (')[0]);
  const existB5 = await hijos(B['[B5]'].gid);
  const backlog = existB5.find((t) => t.name.startsWith('Product Backlog'));
  if (!backlog) throw new Error('No encuentro «Product Backlog» en [B5]');
  const notasBacklog = html(b5.bloques);
  if (backlog.name !== b5.nombre || backlog.html_notes !== notasBacklog) plan.push({ tipo: 'actualizar', gid: backlog.gid, antes: backlog, nombre: b5.nombre, notas: notasBacklog });
  await emparejar(b5.hijos, backlog, usDe);

  for (const [clave, md] of Object.entries(PREFACIOS)) {
    const t = destinos[clave];
    if ((t.html_notes || '').includes(MARCA)) continue;
    const original = (t.html_notes || '<body></body>').replace(/^<body>/, '').replace(/<\/body>$/, '');
    const notas = `<body>${bloqueMd(md)}\n<strong>Descripción anterior</strong>\n${original}</body>`;
    if (!bienFormado(notas)) throw new Error(`HTML mal formado en el prefacio de ${clave}`);
    plan.push({ tipo: 'prefacio', gid: t.gid, antes: t, nombre: t.name, notas });
  }
  if (conAdjuntos) {
    for (const [f, clave] of ADJUNTOS) {
      const t = destinos[clave];
      const ya = await asana('GET', `/attachments?parent=${t.gid}&opt_fields=name`);
      if (!ya.some((a) => a.name === f)) plan.push({ tipo: 'adjuntar', gid: t.gid, nombre: `${f} → ${t.name}`, fichero: path.join(DOCS, f) });
    }
  }

  const cuenta = plan.reduce((c, p) => ({ ...c, [p.tipo]: (c[p.tipo] || 0) + 1 }), {});
  console.log(`Hito: ${hito.name}`);
  console.log('Plan:', JSON.stringify(cuenta));
  plan.filter((p) => p.tipo !== 'actualizar').forEach((p) => console.log(`  ${p.tipo}: ${p.nombre}`));
  const renombres = plan.filter((p) => p.tipo === 'actualizar' && p.antes.name !== p.nombre);
  renombres.forEach((p) => console.log(`  renombrar: «${p.antes.name}» → «${p.nombre}»`));

  if (!aplicar) {
    fs.mkdirSync(PREVIO, { recursive: true });
    plan.filter((p) => p.notas).forEach((p, i) => fs.writeFileSync(path.join(PREVIO, `${String(i).padStart(3, '0')}.html`), p.notas));
    console.log(`En seco: no se ha escrito nada. HTML en ${path.basename(PREVIO)}/. Para aplicar: --si`);
    return;
  }

  // --- Copia antes de escribir ---
  fs.writeFileSync(COPIA, JSON.stringify({ fecha: new Date().toISOString(), tareas: plan.filter((p) => p.antes).map((p) => ({ gid: p.gid, name: p.antes.name, html_notes: p.antes.html_notes })) }, null, 1));
  console.log(`Copia guardada en ${path.basename(COPIA)}`);

  let n = 0;
  for (const p of plan) {
    if (p.tipo === 'actualizar' || p.tipo === 'prefacio') await asana('PUT', `/tasks/${p.gid}`, { name: p.nombre, html_notes: p.notas });
    else if (p.tipo === 'crear') await asana('POST', `/tasks/${p.padre}/subtasks`, { name: p.nombre, html_notes: p.notas });
    else if (p.tipo === 'adjuntar') await adjuntar(p.gid, p.fichero);
    if (++n % 20 === 0) console.log(`${n} de ${plan.length}…`);
  }
  // Las subtareas nuevas aparecen arriba: se deja el backlog en el orden de la especificación
  if (plan.some((p) => p.tipo === 'crear' && p.padre === backlog.gid)) {
    const actuales = await hijos(backlog.gid);
    const ordenadas = b5.hijos.map((h) => actuales.find((a) => usDe(a.name) === h.id)).filter(Boolean);
    for (let i = 1; i < ordenadas.length; i++) await asana('POST', `/tasks/${ordenadas[i].gid}/setParent`, { parent: backlog.gid, insert_after: ordenadas[i - 1].gid });
    console.log('Backlog reordenado.');
  }
  console.log(`Hecho: ${n} cambios.`);
})().catch((e) => { console.error(e.message); process.exit(1); });
