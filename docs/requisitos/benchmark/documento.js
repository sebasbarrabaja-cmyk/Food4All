// Monta el documento de requisitos del Hito 2 en un solo .md para adjuntarlo en Asana ([B6]).
// Une la especificación con los documentos que la acompañan; no se edita a mano: se regenera con `npm run documento`.
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..');
const SALIDA = path.join(DIR, 'FOOD4ALL_documento_requisitos_hito2.md');
const leer = (f) => fs.readFileSync(path.join(DIR, f), 'utf8').replace(/\r\n/g, '\n');
// Baja un nivel los encabezados de un documento anexo y cambia su título por el del anexo
const comoAnexo = (texto, titulo) => `## ${titulo}\n` + texto.replace(/^# .*\n/, '').replace(/^(#{1,5}) /gm, '#$1 ');

const ANEXOS = [
  ['FOOD4ALL_necesidades.md', 'Anexo C. Catálogo único de necesidades'],
  ['FOOD4ALL_entrevistas_estudiantes.md', 'Anexo C2. Entrevistas a estudiantes (F-07, E1–E4)'],
  ['FOOD4ALL_personas_empatia_v2.md', 'Anexo D. Personas y mapas de empatía (B2, v2)'],
  ['FOOD4ALL_estados_pedido.md', 'Anexo E. Estados del pedido, subpedido y reembolso de prueba'],
  ['FOOD4ALL_matriz_trazabilidad.md', 'Anexo F. Matriz de trazabilidad'],
  ['FOOD4ALL_comparativo_revisado.md', 'Anexo G. Revisión del comparativo de empresas (F-04)'],
];

const spec = leer('FOOD4ALL_especificacion_requisitos.md');
const vista = leer('FOOD4ALL_asana_vista_previa.md');
const fichas = vista.slice(vista.indexOf('## 2. Tareas, con su descripción'));

const partes = [
  spec.replace(/^# .*\n/, '# FOOD4ALL · Documento de requisitos del Hito 2\n'),
  '',
  '---',
  '',
  ...ANEXOS.flatMap(([f, t]) => [comoAnexo(leer(f), t), '', '---', '']),
  comoAnexo(`# x\n\nTodas las fichas de [B4] (procesos RF y RNF, subrequisitos y requisitos atómicos con su criterio) y el Product Backlog de [B5], tal como están en Asana.\n\n${fichas}`, 'Anexo H. Fichas RF y RNF y Product Backlog'),
];
fs.writeFileSync(SALIDA, partes.join('\n'));
console.log(`${path.basename(SALIDA)} · ${(fs.statSync(SALIDA).size / 1024).toFixed(0)} KB`);
