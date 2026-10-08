// Descarga las fotos elegidas de Commons y genera el fichero de créditos.
// Uso (desde food4all/): node tools/fotos/commons-download.mjs tools/fotos/candidatas/candidates.json frontend/public/img frontend/src/data/photoCredits.js
// Edita PICK: id -> número de la foto elegida en la hoja de contactos.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const [cands, imgDir, creditsFile] = process.argv.slice(2);
const all = JSON.parse(readFileSync(cands, 'utf8'));
mkdirSync(imgDir, { recursive: true });

// id -> índice elegido en la hoja de contactos; ancho deseado
const PICK = {
  p1: 5, p2: 5, p3: 4, p4: 0, p5: 0, p6: 1, p7: 1, p8: 2, p9: 0, p10: 0,
  p11: 1, p12: 5, p13: 2, p14: 2, market: 2, bakery: 0, farm: 2,
};
const WIDE = new Set(['market', 'bakery', 'farm']);
const UA = { 'User-Agent': 'FOOD4ALL-university-project/1.0 (landing de ejemplo)' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const credits = {};
for (const [id, i] of Object.entries(PICK)) {
  const c = all[id][i];
  const width = WIDE.has(id) ? 1400 : 640;
  const url = c.thumb.replace(/\/\d+px-/, `/${width}px-`);
  const file = `${imgDir}/${id}.jpg`;
  if (!existsSync(file)) {
    for (let attempt = 0; attempt < 4; attempt++) {
      const res = await fetch(url, { headers: UA });
      if (res.ok) { writeFileSync(file, Buffer.from(await res.arrayBuffer())); break; }
      // Si no existe ese ancho (original más pequeño), vuelve al de 640
      if (res.status === 400 || res.status === 404) { const r2 = await fetch(c.thumb, { headers: UA }); writeFileSync(file, Buffer.from(await r2.arrayBuffer())); break; }
      console.error(id, res.status, 'reintento'); await sleep(3000 * (attempt + 1));
    }
    await sleep(1200);
  }
  credits[id] = {
    title: c.title.replace(/^File:/, '').replace(/\.[a-z]+$/i, ''),
    author: c.artist || 'Autor en Wikimedia Commons',
    license: c.license,
    url: c.page,
  };
  console.log(id, 'ok');
}

writeFileSync(creditsFile, `// Créditos de las fotos (Wikimedia Commons, licencias libres). Generado automáticamente.
// Imágenes ilustrativas: no corresponden a productos ni vendedores reales.
export const PHOTO_CREDITS = ${JSON.stringify(credits, null, 2)};
`);
