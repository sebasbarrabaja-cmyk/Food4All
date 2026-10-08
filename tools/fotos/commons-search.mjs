// Busca fotos en Wikimedia Commons con licencia libre y genera una hoja de contactos.
// Uso (desde food4all/): node tools/fotos/commons-search.mjs tools/fotos/candidatas
// Edita QUERIES con lo que quieras buscar; abre candidatas/sheet.html para elegir.
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';

const OUT = process.argv[2];
mkdirSync(OUT, { recursive: true });

const QUERIES = {
  p1: 'sourdough bread loaf',
  p2: 'mollete pan',
  p3: 'oranges fruit basket market',
  p4: 'avocados fruit',
  p5: 'lentejas',
  p6: 'extra virgin olive oil bottle',
  p7: 'brown eggs',
  p8: 'fresh goat cheese',
  p9: 'breadsticks',
  p10: 'tortas de aceite',
  p11: 'tomatoes market stall',
  p12: 'zucchini',
  p13: 'apples crate',
  p14: 'potaje de garbanzos',
  market: 'fruit vegetable market stall Spain',
  bakery: 'bakery bread shelves',
  farm: 'farmer vegetable harvest field',
};

const OK_LICENSE = /^(cc0|pd|public domain|cc by(-sa)? ?[0-9.]*)/i;
const strip = (html = '') => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

async function search(q) {
  const url = 'https://commons.wikimedia.org/w/api.php?' + new URLSearchParams({
    action: 'query', format: 'json', generator: 'search', gsrnamespace: '6', gsrlimit: '14',
    gsrsearch: `filetype:bitmap ${q}`, prop: 'imageinfo', iiprop: 'url|extmetadata|size|mime', iiurlwidth: '640',
  });
  const res = await fetch(url, { headers: { 'User-Agent': 'FOOD4ALL-university-project/1.0 (landing de ejemplo)' } });
  const pages = Object.values((await res.json()).query?.pages ?? {}).sort((a, b) => a.index - b.index);
  return pages.map((p) => {
    const ii = p.imageinfo?.[0] ?? {};
    const m = ii.extmetadata ?? {};
    return {
      title: p.title,
      page: ii.descriptionurl,
      thumb: ii.thumburl,
      w: ii.width, h: ii.height, mime: ii.mime,
      license: strip(m.LicenseShortName?.value),
      artist: strip(m.Artist?.value).slice(0, 80),
    };
  }).filter((x) => x.thumb && /jpeg|png/.test(x.mime) && OK_LICENSE.test(x.license) && x.w >= 800 && x.w >= x.h * 0.9)
    .slice(0, 6);
}

// Reutiliza lo ya encontrado; reintenta con pausa lo que falte (Commons limita la frecuencia).
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const FILE = `${OUT}/candidates.json`;
const all = existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : {};
for (const [id, q] of Object.entries(QUERIES)) {
  if (all[id]?.length >= 3) { console.log(id, 'ya', all[id].length); continue; }
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const found = await search(q);
      const seen = new Set((all[id] ?? []).map((c) => c.title));
      all[id] = [...(all[id] ?? []), ...found.filter((c) => !seen.has(c.title))].slice(0, 6);
      break;
    } catch (e) { console.error(id, 'reintento', attempt + 1); await sleep(4000 * (attempt + 1)); }
  }
  console.log(id, all[id]?.length ?? 0);
  await sleep(1500);
}
writeFileSync(`${OUT}/candidates.json`, JSON.stringify(all, null, 2));

const rows = Object.entries(all).map(([id, list]) => `
  <h2>${id} · ${QUERIES[id]}</h2><div class="row">${list.map((c, i) => `
    <figure><img src="${c.thumb}"><figcaption>${i} · ${c.license}</figcaption></figure>`).join('')}</div>`).join('');
writeFileSync(`${OUT}/sheet.html`, `<!doctype html><meta charset="utf-8"><style>
body{font:12px sans-serif;margin:8px;background:#fff} h2{font-size:13px;margin:8px 0 2px}
.row{display:flex;gap:6px} figure{margin:0;width:180px} img{width:180px;height:120px;object-fit:cover;display:block}
figcaption{font-size:11px}</style>${rows}`);
