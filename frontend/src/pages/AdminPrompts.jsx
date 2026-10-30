import { useEffect, useState, useCallback } from 'react';
import Icon from '../components/Icon.jsx';

// Registro de prompts del proyecto (ficheros en /prompts).
const AUTHORS = ['Sebastián', 'Juan Antonio', 'Miguel', 'Equipo'];
const EMPTY = { titulo: '', autor: 'Sebastián', herramienta: 'Claude Code', tipo: 'Sesión de trabajo', tema: 'Requisitos del Hito 2', resultado: '', etiquetas: [], landing: [], requisitos: '', texto: '' };
const SIN_FILTROS = { tipo: '', autor: '', tema: '', resultado: '', etiqueta: '', landing: '', requisito: '' };

const words = (t) => t.trim().split(/\s+/).filter(Boolean).length;

async function api(url, body) {
  const r = await fetch(url, body && { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw Object.assign(new Error(data.error || 'Error inesperado'), { errors: data.errors });
  return data;
}

function CopyButton({ text }) {
  const [done, setDone] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(text);
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  }
  return <button type="button" className="btn btn-ghost btn-sm" onClick={copy}><Icon name={done ? 'check' : 'copy'} size={16} /> {done ? 'Copiado' : 'Copiar'}</button>;
}

function Etiquetas({ p }) {
  const partes = [
    p.resultado && `Resultado: ${p.resultado}`,
    p.etiquetas.length > 0 && `Para: ${p.etiquetas.join(', ')}${p.landing.length ? ` (landing: ${p.landing.join(', ')})` : ''}`,
    p.requisitos.length > 0 && `Requisitos: ${p.requisitos.join(', ')}`,
  ].filter(Boolean);
  return partes.length ? <p className="muted small">{partes.join(' · ')}</p> : null;
}

function PromptItem({ p }) {
  return (
    <details className="prompt">
      <summary>
        <span className="prompt__title">{p.titulo}</span>
        <span className="prompt__meta">
          <span className={`tag tag--${(p.tipo || '').split(' ')[0].toLowerCase()}`}>{p.tipo}</span>
          <span className="muted small">{p.fecha} · {p.autor} · {p.herramienta} · {words(p.texto).toLocaleString('es-ES')} palabras</span>
        </span>
      </summary>
      <div className="prompt__body">
        {p.origen && <p className="muted small">Origen: {p.origen}</p>}
        <Etiquetas p={p} />
        <pre className="prompt-text">{p.texto}</pre>
        <div className="toolbar">
          <CopyButton text={p.texto} />
        </div>
      </div>
    </details>
  );
}

function NewPrompt({ types, temas, resultados, etiquetas, landing, onSaved }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [ok, setOk] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (k, v) => () => setForm((f) => ({ ...f, [k]: f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v] }));

  async function save(e) {
    e.preventDefault();
    setSaving(true); setErrors({}); setOk('');
    try {
      const requisitos = form.requisitos.split(',').map((x) => x.trim().toUpperCase()).filter(Boolean);
      const saved = await api('/api/admin/prompts', { ...form, requisitos, landing: form.etiquetas.includes('landing') ? form.landing : [] });
      setForm(EMPTY); setOk(`Guardado en prompts/${saved.id}.md`); onSaved();
    } catch (err) { setErrors(err.errors || { texto: err.message }); }
    finally { setSaving(false); }
  }

  return (
    <form className="panel new-prompt" onSubmit={save} noValidate>
      <h3>Guardar un prompt nuevo</h3>
      <div className="form-row">
        <div className="field">
          <label htmlFor="np-titulo">Título</label>
          <input id="np-titulo" value={form.titulo} onChange={set('titulo')} aria-invalid={Boolean(errors.titulo)} aria-describedby={errors.titulo ? 'np-titulo-err' : undefined} />
          {errors.titulo && <span className="error" id="np-titulo-err" role="alert">{errors.titulo}</span>}
        </div>
        <div className="field">
          <label htmlFor="np-tipo">Tipo</label>
          <select id="np-tipo" value={form.tipo} onChange={set('tipo')}>{types.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
        <div className="field">
          <label htmlFor="np-tema">Para qué sirvió</label>
          <select id="np-tema" value={form.tema} onChange={set('tema')}>{temas.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
        <div className="field">
          <label htmlFor="np-resultado">Resultado</label>
          <select id="np-resultado" value={form.resultado} onChange={set('resultado')}>
            <option value="">Sin indicar</option>{resultados.map((t) => <option key={t}>{t}</option>)}
          </select>
          {errors.resultado && <span className="error" role="alert">{errors.resultado}</span>}
        </div>
        <div className="field">
          <label htmlFor="np-autor">Autor</label>
          <select id="np-autor" value={form.autor} onChange={set('autor')}>{AUTHORS.map((a) => <option key={a}>{a}</option>)}</select>
        </div>
        <div className="field">
          <label htmlFor="np-tool">Herramienta</label>
          <input id="np-tool" value={form.herramienta} onChange={set('herramienta')} />
        </div>
      </div>
      <fieldset className="field">
        <legend>Para qué se usó</legend>
        <div className="checks">
          {etiquetas.map((t) => <label key={t}><input type="checkbox" checked={form.etiquetas.includes(t)} onChange={toggle('etiquetas', t)} /> {t}</label>)}
        </div>
        {errors.etiquetas && <span className="error" role="alert">{errors.etiquetas}</span>}
      </fieldset>
      {form.etiquetas.includes('landing') && (
        <fieldset className="field">
          <legend>Tipo de cambio en la landing</legend>
          <div className="checks">
            {landing.map((t) => <label key={t}><input type="checkbox" checked={form.landing.includes(t)} onChange={toggle('landing', t)} /> {t}</label>)}
          </div>
          {errors.landing && <span className="error" role="alert">{errors.landing}</span>}
        </fieldset>
      )}
      <div className="field">
        <label htmlFor="np-req">Requisitos a los que llegó o que cambió (opcional)</label>
        <input id="np-req" value={form.requisitos} onChange={set('requisitos')} placeholder="RF-05, RST-03, C-28"
          aria-invalid={Boolean(errors.requisitos)} aria-describedby={errors.requisitos ? 'np-req-err' : undefined} />
        {errors.requisitos && <span className="error" id="np-req-err" role="alert">{errors.requisitos}</span>}
      </div>
      <div className="field">
        <label htmlFor="np-texto">Prompt</label>
        <textarea id="np-texto" rows={8} value={form.texto} onChange={set('texto')} aria-invalid={Boolean(errors.texto)} aria-describedby={errors.texto ? 'np-texto-err' : undefined}
          placeholder="Pega aquí el prompt tal cual lo has enviado (o vas a enviar)." />
        {errors.texto && <span className="error" id="np-texto-err" role="alert">{errors.texto}</span>}
      </div>
      <div className="toolbar">
        <button className="btn btn-primary" disabled={saving}>{saving ? 'Guardando…' : 'Guardar'}</button>
        {ok && <span className="small" role="status" style={{ color: 'var(--success)' }}>{ok}</span>}
      </div>
    </form>
  );
}

// Por persona (en el orden del equipo) y, dentro, por tema; en cada tema, del más nuevo al más antiguo.
function groups(prompts, temas) {
  const people = [...AUTHORS, ...new Set(prompts.map((p) => p.autor || 'Sin autor'))].filter((a, i, all) => all.indexOf(a) === i);
  return people
    .map((autor) => [autor, [...temas, 'Sin tema']
      .map((tema) => [tema, prompts.filter((p) => (p.autor || 'Sin autor') === autor && (temas.includes(p.tema) ? p.tema : 'Sin tema') === tema)])
      .filter(([, ps]) => ps.length)])
    .filter(([, ts]) => ts.length);
}

const pasa = (p, f) => (!f.tipo || p.tipo === f.tipo) && (!f.autor || (p.autor || 'Sin autor') === f.autor)
  && (!f.tema || p.tema === f.tema) && (!f.resultado || p.resultado === f.resultado)
  && (!f.etiqueta || p.etiquetas.includes(f.etiqueta)) && (!f.landing || p.landing.includes(f.landing));

// Cómo se llegó a un requisito: los prompts que lo tienen en `requisitos`, del más antiguo al más nuevo,
// con las líneas «Resultado» que lo nombran (las decisiones), y los que solo lo mencionan en el texto.
// «Lo nombra» es coincidencia exacta: RF-12 no cuenta dentro de RF-12.1-01 (como en backend/prompts.js).
const nombra = (texto, id) => texto.split(/[^\w.-]+/).some((t) => t.replace(/[.-]+$/, '') === id);

function Traza({ id, prompts }) {
  const llegan = prompts.filter((p) => p.requisitos.includes(id));
  const mencionan = prompts.filter((p) => !p.requisitos.includes(id) && p.menciona.includes(id));
  if (!llegan.length && !mencionan.length) return <p className="muted">Ningún prompt registrado nombra {id}.</p>;
  return (
    <div className="panel">
      <h3>Cómo se llegó a {id}</h3>
      {llegan.length === 0 && <p className="muted small">Ningún prompt lo tiene como resultado; solo lo mencionan.</p>}
      <ol>
        {llegan.map((p) => {
          const pasos = p.pasos.filter((s) => nombra(s.resultado, id));
          return (
            <li key={p.id}>
              <strong>{p.fecha} · {p.titulo}</strong> <span className="muted small">({p.autor})</span>
              {pasos.length > 0 && (
                <ul>
                  {pasos.map((s, i) => <li key={i} className="small"><span className="muted">{s.titulo}</span> {s.resultado}</li>)}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
      {mencionan.length > 0 && (
        <p className="muted small">También lo mencionan: {mencionan.map((p) => `${p.fecha} · ${p.titulo}`).join(' — ')}.</p>
      )}
    </div>
  );
}

export default function AdminPrompts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [f, setF] = useState(SIN_FILTROS);
  const setFiltro = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value, ...(k === 'etiqueta' && e.target.value !== 'landing' && { landing: '' }) }));
  const load = useCallback(() => api('/api/admin/prompts').then(setData).catch((e) => setError(e.message)), []);
  useEffect(() => { load(); }, [load]);

  if (error) return <p role="alert" className="form-error">No se pudieron cargar los prompts: {error}</p>;
  if (!data) return <p className="muted">Cargando prompts…</p>;

  // Varios IDs separados por comas o espacios; lo que no tiene forma de ID (letras, guion…) se ignora.
  const ids = [...new Set(f.requisito.toUpperCase().split(/[\s,;]+/).filter((t) => /^[A-Z]{1,3}-[A-Z0-9.-]*[A-Z0-9]$/.test(t)))];
  const shown = data.prompts.filter((p) => pasa(p, f) && (!ids.length || ids.some((id) => p.requisitos.includes(id) || p.menciona.includes(id)))).slice().reverse();
  const autores = [...new Set([...AUTHORS, ...data.prompts.map((p) => p.autor || 'Sin autor')])];
  const activos = Object.values(f).some(Boolean);
  const select = (k, label, opciones) => (
    <div className="field">
      <label htmlFor={`pf-${k}`}>{label}</label>
      <select id={`pf-${k}`} value={f[k]} onChange={setFiltro(k)}>
        <option value="">Todos</option>{opciones.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
  return (
    <>
      <p className="muted small">
        Todo prompt usado para desarrollar el proyecto se guarda aquí tal cual se envió (ficheros en <code>prompts/</code> del repositorio).
      </p>
      <div className="chips" role="group" aria-label="Filtrar por tipo">
        {['', ...data.types].map((t) => (
          <button key={t || 'todos'} type="button" className="chip" aria-pressed={f.tipo === t} onClick={() => setF((x) => ({ ...x, tipo: t }))}>
            {t || 'Todos'} <span className="muted">{t ? data.prompts.filter((p) => p.tipo === t).length : data.prompts.length}</span>
          </button>
        ))}
      </div>
      <div className="form-row prompt-filters" role="group" aria-label="Filtros de prompts">
        {select('autor', 'Persona', autores)}
        {select('tema', 'Uso', data.temas)}
        {select('resultado', 'Resultado', data.resultados)}
        {select('etiqueta', 'Etiqueta', data.etiquetas)}
        {f.etiqueta === 'landing' && select('landing', 'En la landing', data.landing)}
        <div className="field">
          <label htmlFor="pf-requisito">Requisito</label>
          <input id="pf-requisito" value={f.requisito} onChange={setFiltro('requisito')} placeholder="RF-05, RST-03, C-28…" />
        </div>
      </div>
      <p className="muted small" role="status">
        {shown.length} de {data.prompts.length} prompts
        {activos && <> · <button type="button" className="btn-link" onClick={() => setF(SIN_FILTROS)}>Quitar filtros</button></>}
      </p>
      {ids.map((id) => <Traza key={id} id={id} prompts={data.prompts.filter((p) => pasa(p, f))} />)}
      {shown.length === 0 && <p className="muted">Ningún prompt cumple estos filtros.</p>}
      {groups(shown, data.temas).map(([autor, temas]) => (
        <section key={autor} className="prompt-group" aria-labelledby={`pg-${autor}`}>
          <h3 id={`pg-${autor}`}>{autor} <span className="muted small">· {temas.reduce((n, [, ps]) => n + ps.length, 0)}</span></h3>
          {temas.map(([tema, ps]) => (
            <div key={tema}>
              <h4 className="prompt-group__tema">{tema} <span className="muted small">· {ps.length}</span></h4>
              <div className="prompt-list">
                {ps.map((p) => <PromptItem key={p.id} p={p} />)}
              </div>
            </div>
          ))}
        </section>
      ))}
      <NewPrompt types={data.types} temas={data.temas} resultados={data.resultados} etiquetas={data.etiquetas} landing={data.landing} onSaved={load} />
    </>
  );
}
