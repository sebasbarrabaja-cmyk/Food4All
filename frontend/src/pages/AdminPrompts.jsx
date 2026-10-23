import { useEffect, useState, useCallback } from 'react';
import Icon from '../components/Icon.jsx';
import Status from '../components/Status.jsx';

// Registro de prompts del proyecto + segundo agente que los pule (backend/agent.js).
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

// Resultado del agente: original y propuesta lado a lado; nada se guarda sin confirmar.
function PolishResult({ source, result, onSave, onDiscard, saving }) {
  return (
    <div className="polish" role="region" aria-label="Propuesta del agente revisor">
      <div className="polish__head">
        <strong><Icon name="spark" size={18} /> Propuesta del agente revisor</strong>
        <span className="muted small">{result.modelo} · revisa antes de guardar</span>
      </div>
      {result.cambios.length > 0 && (
        <ul className="polish__changes">{result.cambios.map((c) => <li key={c}>{c}</li>)}</ul>
      )}
      <div className="polish__cols">
        <div><p className="polish__label">Original · {words(source)} palabras</p><pre className="prompt-text">{source}</pre></div>
        <div><p className="polish__label">Pulido · {words(result.texto)} palabras</p><pre className="prompt-text prompt-text--new">{result.texto}</pre></div>
      </div>
      <div className="toolbar">
        <button type="button" className="btn btn-primary" onClick={onSave} disabled={saving}>{saving ? 'Guardando…' : 'Guardar como versión pulida'}</button>
        <CopyButton text={result.texto} />
        <button type="button" className="btn btn-link" onClick={onDiscard}>Descartar</button>
      </div>
    </div>
  );
}

function usePolish(agentOn) {
  const [state, setState] = useState({ loading: false, error: '', result: null });
  const run = async (texto, objetivo) => {
    setState({ loading: true, error: '', result: null });
    try { setState({ loading: false, error: '', result: await api('/api/admin/prompts/polish', { texto, objetivo }) }); }
    catch (e) { setState({ loading: false, error: e.message, result: null }); }
  };
  return { ...state, run, reset: () => setState({ loading: false, error: '', result: null }), disabled: !agentOn };
}

function PromptItem({ p, agentOn, onSaved }) {
  const polish = usePolish(agentOn);
  const [goal, setGoal] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  async function savePolished() {
    setSaving(true); setSaveError('');
    try {
      await api('/api/admin/prompts', {
        titulo: `${p.titulo} (pulido)`, autor: 'Agente revisor', herramienta: p.herramienta,
        tipo: 'Versión pulida', tema: p.tema || 'Otro', origen: `Versión pulida de ${p.id}`, texto: polish.result.texto,
      });
      polish.reset(); onSaved();
    } catch (e) { setSaveError(e.message); } finally { setSaving(false); }
  }

  return (
    <details className="prompt">
      <summary>
        <span className="prompt__title">{p.titulo}</span>
        <span className="prompt__meta">
          <span className={`tag tag--${(p.tipo || '').split(' ')[0].toLowerCase()}`}>{p.tipo}</span>
          {p.revision === 'hecha' ? <Status kind="decidido">Revisado por el equipo</Status> : <Status kind="pendiente">Revisión pendiente</Status>}
          <span className="muted small">{p.fecha} · {p.autor} · {p.herramienta} · {words(p.texto).toLocaleString('es-ES')} palabras</span>
        </span>
      </summary>
      <div className="prompt__body">
        {p.origen && <p className="muted small">Origen: {p.origen}</p>}
        <pre className="prompt-text">{p.texto}</pre>
        <div className="toolbar">
          <CopyButton text={p.texto} />
          <input className="input-inline" placeholder="Objetivo de la revisión (opcional): p. ej. más corto, más concreto…"
            value={goal} onChange={(e) => setGoal(e.target.value)} aria-label="Objetivo de la revisión" />
          <button type="button" className="btn btn-cta btn-sm" disabled={polish.disabled || polish.loading} onClick={() => polish.run(p.texto, goal)}>
            <Icon name="spark" size={16} /> {polish.loading ? 'El agente está revisando…' : 'Pulir con IA'}
          </button>
        </div>
        {(polish.error || saveError) && <p role="alert" className="form-error">{polish.error || saveError}</p>}
        {polish.result && <PolishResult source={p.texto} result={polish.result} saving={saving} onSave={savePolished} onDiscard={polish.reset} />}
      </div>
    </details>
  );
}

function NewPrompt({ types, temas, agentOn, onSaved }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [ok, setOk] = useState('');
  const polish = usePolish(agentOn);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function save(e) {
    e.preventDefault();
    setSaving(true); setErrors({}); setOk('');
    try {
      const saved = await api('/api/admin/prompts', form);
      setForm(EMPTY); polish.reset(); setOk(`Guardado en prompts/${saved.id}.md`); onSaved();
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
        <button type="button" className="btn btn-ghost" disabled={polish.disabled || polish.loading || words(form.texto) < 3} onClick={() => polish.run(form.texto)}>
          <Icon name="spark" size={16} /> {polish.loading ? 'Revisando…' : 'Pulir antes de guardar'}
        </button>
        {ok && <span className="small" role="status" style={{ color: 'var(--success)' }}>{ok}</span>}
      </div>
      {polish.error && <p role="alert" className="form-error">{polish.error}</p>}
      {polish.result && (
        <PolishResult source={form.texto} result={polish.result} saving={false}
          onSave={() => { setForm((f) => ({ ...f, texto: polish.result.texto, tipo: 'Versión pulida' })); polish.reset(); }}
          onDiscard={polish.reset} />
      )}
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
        El <strong>agente revisor</strong> propone una versión más clara; el original no se toca.
        Cada prompt termina con la <strong>revisión crítica del equipo</strong>, escrita por la persona:{' '}
        {data.prompts.filter((p) => p.revision === 'hecha').length} de {data.prompts.length} revisados.
      </p>
      <p className="toolbar">
        {data.agent
          ? <Status kind="decidido">Agente revisor activo</Status>
          : <><Status kind="pendiente">Agente revisor sin configurar</Status><span className="muted small">Añade GEMINI_API_KEY a backend/.env y reinicia el servidor.</span></>}
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
                {ps.map((p) => <PromptItem key={p.id} p={p} agentOn={data.agent} onSaved={load} />)}
              </div>
            </div>
          ))}
        </section>
      ))}
      <NewPrompt types={data.types} temas={data.temas} agentOn={data.agent} onSaved={load} />
    </>
  );
}
