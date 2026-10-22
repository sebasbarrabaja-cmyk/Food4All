// Acceso a la API de Asana y conversión de los bloques de asana_tareas.json a texto enriquecido (html_notes).
// Lo usan subir_asana.js (creación del 20/10/2026) y actualizar_asana.js (v0.4).
const fs = require('fs');
const path = require('path');

const ENV = path.join(__dirname, '../../../backend/.env');
const API = 'https://app.asana.com/api/1.0';

function cliente() {
  const env = Object.fromEntries(fs.readFileSync(ENV, 'utf8').split(/\r?\n/).filter((l) => l.includes('='))
    .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()]));
  const auth = { Authorization: `Bearer ${env.ASANA_TOKEN}` };
  async function asana(metodo, ruta, data) {
    for (let intento = 0; intento < 6; intento++) {
      const r = await fetch(API + ruta, { method: metodo, headers: { ...auth, 'Content-Type': 'application/json' }, body: data ? JSON.stringify({ data }) : undefined });
      if (r.status === 429 || r.status >= 500) { await new Promise((ok) => setTimeout(ok, 1000 * (+r.headers.get('retry-after') || 5 * (intento + 1)))); continue; }
      const j = await r.json();
      if (!r.ok) throw new Error(`${metodo} ${ruta} → ${r.status} ${JSON.stringify(j.errors)}`);
      return j.data;
    }
    throw new Error(`${metodo} ${ruta}: demasiados reintentos`);
  }
  async function adjuntar(padreGid, fichero, nombre) {
    const form = new FormData();
    form.append('parent', padreGid);
    form.append('file', new Blob([fs.readFileSync(fichero)], { type: 'text/markdown' }), nombre || path.basename(fichero));
    const r = await fetch(`${API}/attachments`, { method: 'POST', headers: auth, body: form });
    const j = await r.json();
    if (!r.ok) throw new Error(`Adjuntar ${fichero} → ${r.status} ${JSON.stringify(j.errors)}`);
    return j.data;
  }
  return { asana, adjuntar, env };
}

// --- Markdown sencillo → texto enriquecido de Asana ---
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function enLinea(s) {
  return s.split(/(`[^`]*`)/).map((t) => {
    if (t.startsWith('`') && t.endsWith('`') && t.length > 1) return `<code>${esc(t.slice(1, -1))}</code>`;
    return esc(t)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[\s(])_([^_]+)_(?=$|[\s.,;:)])/g, '$1<em>$2</em>');
  }).join('');
}
function bloqueMd(texto) {
  const out = [];
  const lineas = texto.split('\n');
  for (let i = 0; i < lineas.length; i++) {
    const l = lineas[i];
    if (l.startsWith('```')) {
      const pre = [];
      for (i++; i < lineas.length && !lineas[i].startsWith('```'); i++) pre.push(lineas[i]);
      out.push(`<pre>${esc(pre.join('\n'))}</pre>`);
    } else if (l.startsWith('|')) {
      const filas = [];
      for (; i < lineas.length && lineas[i].startsWith('|'); i++) filas.push(lineas[i].split('|').slice(1, -1).map((c) => c.trim()));
      i--;
      const cab = filas[0];
      const items = filas.slice(2).map((f) => `<li><strong>${enLinea(f[0])}</strong>: ${f.slice(1)
        .map((c, k) => (cab.length > 2 && c ? `${enLinea(cab[k + 1])}: ${enLinea(c)}` : enLinea(c))).filter(Boolean).join(' · ')}</li>`);
      out.push(`<ul>${items.join('')}</ul>`);
    } else if (/^\s*(- |\d+\. )/.test(l)) {
      const ordenada = /^\d+\. /.test(l);
      const items = [];
      for (; i < lineas.length && /^\s*(- |\d+\. )/.test(lineas[i]); i++) {
        const m = lineas[i].match(/^(\s*)(?:- |\d+\. )(.*)$/);
        if (m[1].length && items.length) items[items.length - 1].hijos.push(m[2]);
        else items.push({ t: m[2], hijos: [] });
      }
      i--;
      const tag = ordenada ? 'ol' : 'ul';
      out.push(`<${tag}>${items.map((it) => `<li>${enLinea(it.t)}${it.hijos.length ? `<ul>${it.hijos.map((h) => `<li>${enLinea(h)}</li>`).join('')}</ul>` : ''}</li>`).join('')}</${tag}>`);
    } else if (l.trim()) {
      out.push(enLinea(l.replace(/^#+ /, '').replace(/^> /, '')) + '\n');
    }
  }
  return out.join('');
}
function html(bloques) {
  const out = [];
  for (const b of bloques) {
    if (b.aviso) out.push(`<strong>⚠️ ${esc(b.aviso)}</strong>\n`);
    if (b.h) out.push(`\n<strong>${esc(b.h)}</strong>\n`);
    if (b.p) out.push(bloqueMd(b.p));
    if (b.md) out.push(bloqueMd(b.md));
    if (b.lista) out.push(`<ul>${b.lista.map((x) => `<li>${enLinea(x)}</li>`).join('')}</ul>`);
    if (b.ol) out.push(`<ol>${b.ol.map((x) => `<li>${enLinea(x)}</li>`).join('')}</ol>`);
    if (b.atomicos) {
      out.push(`<ul>${b.atomicos.map((x) => `<li>☐ <strong>${esc(x.id)}</strong> [${esc(`${x.prioridad} · ${x.entrega}${x.alcance === 'MVP simulado' ? ' simulado' : ''} · ${x.estado} · ${x.necesidad}`)}] ${enLinea(x.texto)}`
        + `<ul><li>Criterio: ${enLinea(x.criterio)}</li>${x.depende ? `<li>Depende de: ${esc(x.depende)}</li>` : ''}<li>Competencia: ${esc(Object.entries(x.comp).map(([c, v]) => `${c} ${v || '?'}`).join(' · '))} → ${esc(x.posicion)}</li></ul></li>`).join('')}</ul>`);
    }
  }
  return `<body>${out.join('')}</body>`;
}

// Comprobación mínima de que las etiquetas cierran bien
function bienFormado(h) {
  const pila = [];
  for (const m of h.matchAll(/<(\/?)([a-z0-9]+)>/g)) {
    if (!m[1]) pila.push(m[2]);
    else if (pila.pop() !== m[2]) return false;
  }
  return pila.length === 0 && !/<(?!\/?(body|strong|em|code|pre|ul|ol|li)>)/.test(h);
}

module.exports = { cliente, html, bloqueMd, bienFormado };
