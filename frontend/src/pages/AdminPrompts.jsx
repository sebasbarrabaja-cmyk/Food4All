import { useEffect, useState, useCallback } from 'react';
import Icon from '../components/Icon.jsx';

// Registro de prompts del proyecto (ficheros en /prompts).
const AUTHORS = ['Sebastián', 'Juan Antonio', 'Miguel', 'Equipo'];
const EMPTY = { titulo: '', autor: 'Sebastián', herramienta: 'Claude Code', tipo: 'Sesión de trabajo', tema: 'Requisitos del Hito 2', texto: '' };

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
        <pre className="prompt-text">{p.texto}</pre>
        <div className="toolbar">
          <CopyButton text={p.texto} />
        </div>
      </div>
    </details>
  );
}

function NewPrompt({ types, temas, onSaved }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [ok, setOk] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function save(e) {
    e.preventDefault();
    setSaving(true); setErrors({}); setOk('');
    try {
      const saved = await api('/api/admin/prompts', form);
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
          <label htmlFor="np-autor">Autor</label>
          <select id="np-autor" value={form.autor} onChange={set('autor')}>{AUTHORS.map((a) => <option key={a}>{a}</option>)}</select>
        </div>
        <div className="field">
          <label htmlFor="np-tool">Herramienta</label>
          <input id="np-tool" value={form.herramienta} onChange={set('herramienta')} />
        </div>
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

export default function AdminPrompts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const load = useCallback(() => api('/api/admin/prompts').then(setData).catch((e) => setError(e.message)), []);
  useEffect(() => { load(); }, [load]);

  if (error) return <p role="alert" className="form-error">No se pudieron cargar los prompts: {error}</p>;
  if (!data) return <p className="muted">Cargando prompts…</p>;

  const shown = data.prompts.filter((p) => !filter || p.tipo === filter).slice().reverse();
  return (
    <>
      <p className="muted small">
        Todo prompt usado para desarrollar el proyecto se guarda aquí tal cual se envió (ficheros en <code>prompts/</code> del repositorio).
      </p>
      <div className="chips" role="group" aria-label="Filtrar por tipo">
        {['', ...data.types].map((t) => (
          <button key={t || 'todos'} type="button" className="chip" aria-pressed={filter === t} onClick={() => setFilter(t)}>
            {t || 'Todos'} <span className="muted">{t ? data.prompts.filter((p) => p.tipo === t).length : data.prompts.length}</span>
          </button>
        ))}
      </div>
      {shown.length === 0 && <p className="muted">No hay prompts de este tipo.</p>}
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
      <NewPrompt types={data.types} temas={data.temas} onSaved={load} />
    </>
  );
}
