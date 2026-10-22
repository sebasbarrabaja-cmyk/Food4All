// Sube asana_tareas.json al Hito 2 de Food4All en Asana, sin responsables ni fechas.
// Solo crea subtareas debajo de [B4] y [B5]; no modifica ni borra tareas existentes.
// Cada tarea creada se apunta en asana_creadas.json: si se corta, se puede relanzar y sigue donde iba,
// y `node subir_asana.js --deshacer --si` borra exactamente esas tareas.
// Uso: node subir_asana.js --seco   (no llama a Asana para escribir; deja el HTML en ./html_previo)
//      node subir_asana.js          (sube)
//      node subir_asana.js --ordenar (deja las subtareas en el orden de la cascada)
//      node subir_asana.js --deshacer --si
const fs = require('fs');
const path = require('path');

const TAREAS = path.join(__dirname, 'asana_tareas.json');
const REGISTRO = path.join(__dirname, 'asana_creadas.json');
const seco = process.argv.includes('--seco');
const deshacer = process.argv.includes('--deshacer');
const { cliente, html, bienFormado } = require('./asana_html');
const { asana, env } = cliente();

(async () => {
  const registro = fs.existsSync(REGISTRO) ? JSON.parse(fs.readFileSync(REGISTRO, 'utf8')) : { creadas: [] };
  const guardar = () => fs.writeFileSync(REGISTRO, JSON.stringify(registro, null, 1));

  if (deshacer) {
    if (!process.argv.includes('--si')) { console.log(`Se borrarían ${registro.creadas.length} tareas. Repite con --si.`); return; }
    for (const t of [...registro.creadas].reverse()) {
      await asana('DELETE', `/tasks/${t.gid}`);
      registro.creadas = registro.creadas.filter((x) => x.gid !== t.gid);
      guardar();
      console.log('Borrada', t.clave);
    }
    return;
  }

  // La API mete cada subtarea nueva arriba del todo: se recolocan en el orden del registro
  // (el de creación), poniendo cada una justo después de su hermana anterior.
  if (process.argv.includes('--ordenar')) {
    const porPadre = new Map();
    registro.creadas.forEach((t) => porPadre.set(t.padre, [...(porPadre.get(t.padre) || []), t]));
    let movidas = 0;
    for (const [padre, hijos] of porPadre) {
      for (let i = 1; i < hijos.length; i++) {
        await asana('POST', `/tasks/${hijos[i].gid}/setParent`, { parent: padre, insert_after: hijos[i - 1].gid });
        if (++movidas % 20 === 0) console.log(`${movidas} recolocadas…`);
      }
    }
    console.log(`Recolocadas: ${movidas}`);
    return;
  }

  const { b4, b5 } = JSON.parse(fs.readFileSync(TAREAS, 'utf8'));

  // Localizar [Food4All] Hito 2 y sus bloques [B4] y [B5] (solo lectura)
  const secciones = await asana('GET', `/projects/${env.ASANA_PROJECT_GID}/sections`);
  let hito;
  for (const s of secciones) {
    const ts = await asana('GET', `/sections/${s.gid}/tasks?opt_fields=name`);
    hito = ts.find((t) => /^\[Food4All\] Hito 2 /.test(t.name));
    if (hito) break;
  }
  if (!hito) throw new Error('No encuentro [Food4All] Hito 2');
  const bloques = await asana('GET', `/tasks/${hito.gid}/subtasks?opt_fields=name`);
  const padreB4 = bloques.find((t) => t.name.startsWith('[B4]'));
  const padreB5 = bloques.find((t) => t.name.startsWith('[B5]'));
  if (!padreB4 || !padreB5) throw new Error('No encuentro [B4] o [B5]');
  console.log(`Hito: ${hito.name}\nB4: ${padreB4.name}\nB5: ${padreB5.name}`);

  // No duplicar: si ya existen y no están en el registro, parar
  const yaB4 = await asana('GET', `/tasks/${padreB4.gid}/subtasks?opt_fields=name`);
  const conocidas = new Set(registro.creadas.map((t) => t.gid));
  const ajenas = yaB4.filter((t) => b4.some((g) => g.nombre === t.name) && !conocidas.has(t.gid));
  if (ajenas.length) throw new Error(`Ya existen en B4 sin estar en el registro: ${ajenas.map((t) => t.name).join(', ')}`);

  let n = 0;
  let fallos = 0;
  if (seco) fs.mkdirSync(path.join(__dirname, 'html_previo'), { recursive: true });
  async function crear(t, padreGid, clave) {
    const notas = html(t.bloques);
    if (!bienFormado(notas)) { fallos++; console.error('HTML mal formado:', clave); }
    let gid = registro.creadas.find((x) => x.clave === clave)?.gid;
    if (seco) {
      fs.writeFileSync(path.join(__dirname, 'html_previo', `${String(n).padStart(3, '0')}.html`), notas);
      gid = `seco-${n}`;
    } else if (!gid) {
      const creada = await asana('POST', `/tasks/${padreGid}/subtasks`, { name: t.nombre, html_notes: notas });
      gid = creada.gid;
      registro.creadas.push({ clave, gid, nombre: t.nombre, padre: padreGid });
      guardar();
    }
    n++;
    if (n % 20 === 0) console.log(`${n} tareas…`);
    for (const h of t.hijos) await crear(h, gid, `${clave} > ${h.nombre}`);
  }
  for (const g of b4) await crear(g, padreB4.gid, `B4 > ${g.nombre}`);
  await crear(b5, padreB5.gid, `B5 > ${b5.nombre}`);
  console.log(`${seco ? 'En seco' : 'Creadas'}: ${n} tareas · HTML mal formado: ${fallos} · Registro: ${seco ? '—' : REGISTRO}`);
})().catch((e) => { console.error(e.message); process.exit(1); });
