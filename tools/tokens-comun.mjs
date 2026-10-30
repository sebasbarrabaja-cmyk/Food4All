// Lo que comparten los hooks (tools/tokens-sesion.mjs y tools/pendientes-sesion.mjs) y el panel
// (backend/modulos/tokens.js): el formato CSV y cómo se reconoce a cada persona. Sin dependencias
// ni procesos: lo que usa git está en tools/git-comun.mjs, solo para los hooks.
// ID del equipo (backend/datos-prueba/usuarios.json) a partir del nombre o el correo de git.
export const PERSONAS = { sebastian: /sebas|zeronegativo/, 'juan-antonio': /juan|jamc46|martincampano/, miguel: /miguel/ };
export function personaDe(texto) {
  const t = String(texto ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (Object.hasOwn(PERSONAS, t)) return t; // ya es un ID
  return Object.keys(PERSONAS).find((p) => PERSONAS[p].test(t)) ?? 'desconocido';
}

// Una celda: entre comillas si lleva comas, comillas o saltos de línea ("" es una comilla).
export const celda = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
export const lineaCsv = (columnas, fila) => `${columnas.map((k) => celda(fila[k] ?? '')).join(',')}\n`;

// Celdas de una línea CSV escrita con `celda`. Ningún campo lleva saltos de línea.
export function celdas(linea) {
  const out = [''];
  let comillas = false;
  for (let i = 0; i < linea.length; i++) {
    const c = linea[i];
    if (comillas && c === '"' && linea[i + 1] === '"') { out[out.length - 1] += '"'; i++; }
    else if (c === '"') comillas = !comillas;
    else if (c === ',' && !comillas) out.push('');
    else out[out.length - 1] += c;
  }
  return out;
}

// Texto CSV → lista de objetos con las columnas de la cabecera.
export function parseCsv(texto) {
  const [cabecera, ...lineas] = texto.split(/\r?\n/).filter((l) => l.trim());
  if (!cabecera) return [];
  const columnas = celdas(cabecera);
  return lineas.map((l) => Object.fromEntries(celdas(l).map((v, i) => [columnas[i], v])));
}
