import { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Status from '../components/Status.jsx';
import Icon from '../components/Icon.jsx';
import AdminPrompts from './AdminPrompts.jsx';
import AdminHito2 from './AdminHito2.jsx';
import {
  VENDORS, PRODUCTS, ZONES, EXAMPLE_ORDER, ORDER_STATES, VENDOR_ORDERS, productById,
} from '../data/examples.js';

// Vista privada: todo el contenido interno llega del backend tras comprobar la sesión.
const STATUSES = ['recibida', 'en revisión', 'verificada', 'rechazada'];
const SECTIONS = [
  ['resumen', 'Resumen', 'grid'], ['mercado', 'Mercado', 'chart'], ['legal', 'Marco legal', 'scale'],
  ['equipo', 'Equipo', 'users'], ['hito2', 'Hito 2 · Requisitos', 'check'], ['hitos', 'Hitos y Asana', 'flag'], ['vendedores', 'Altas', 'store'],
  ['marketplace', 'Marketplace', 'basket'], ['prompts', 'Prompts', 'doc'],
];

// Palabras con las que el buscador encuentra cada sección al momento, sin IA.
const KEYWORDS = {
  resumen: 'proyecto de que va idea resumen alcance incluye no incluye decisiones decidido hipotesis pendiente descartado',
  mercado: 'mercado tam sam som datos estudiantes gasto cuota ticket',
  legal: 'legal ley leyes normativa rgpd lopdgdd registro sanitario dsa',
  equipo: 'equipo roles quien miembros sebastian juan antonio miguel',
  hito2: 'hito 2 requisitos necesidades criba decisiones restricciones rst exclusiones trazabilidad matriz criterios cambios linea base fuentes entrevistas',
  hitos: 'hitos asana tareas plan entregas calendario',
  vendedores: 'altas vendedores solicitudes alta',
  marketplace: 'marketplace pedidos ejemplo zonas productos malaga sevilla granada',
  prompts: 'prompts ia claude gemini registro',
};
const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const TITLES = Object.fromEntries(SECTIONS.map(([id, t]) => [`#${id}`, t]));

// Buscador: al escribir, filtra secciones; con Intro, pregunta a la IA (backend/search.js).
function SideSearch({ ia }) {
  const [q, setQ] = useState('');
  const [answer, setAnswer] = useState(null); // { loading } | { respuesta, destino } | { error }
  const words = norm(q).split(/\s+/).filter((w) => w.length > 1);
  const matches = words.length
    ? SECTIONS.filter(([id, t]) => words.some((w) => norm(`${t} ${KEYWORDS[id] ?? ''}`).includes(w)))
    : [];

  async function submit(e) {
    e.preventDefault();
    if (q.trim().length < 2 || !ia) return;
    setAnswer({ loading: true });
    try {
      const r = await fetch('/api/admin/ask', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ pregunta: q.trim() }),
      });
      const data = await r.json();
      setAnswer(r.ok ? data : { error: data.error ?? 'No se pudo responder.' });
    } catch {
      setAnswer({ error: 'No se pudo contactar con el servidor.' });
    }
  }

  const goTo = answer?.destino;
  return (
    <>
      <form className="side-search" role="search" onSubmit={submit}>
        <Icon name="search" size={18} />
        <input type="search" placeholder="Busca o pregunta…" value={q} aria-label="Buscar en el panel o hacer una pregunta"
          onChange={(e) => { setQ(e.target.value); setAnswer(null); }} />
      </form>
      <p className="side-search__note">
        {ia ? 'Escribe para saltar a una sección. Pulsa Intro para preguntar a la IA.' : 'IA sin configurar (GEMINI_API_KEY): solo busca secciones.'}
      </p>
      {matches.length > 0 && !answer && (
        <ul className="side-search__results">
          {matches.map(([id, t, icon]) => <li key={id}><a href={`#${id}`}><Icon name={icon} size={16} /> {t}</a></li>)}
        </ul>
      )}
      <div className="side-search__answer" aria-live="polite">
        {answer?.loading && <p className="muted small">Buscando…</p>}
        {answer?.error && <p className="form-error small" role="alert">{answer.error}</p>}
        {answer?.respuesta && (
          <>
            <p>{answer.respuesta}</p>
            {goTo && (goTo.startsWith('#')
              ? <a className="btn btn-ghost btn-sm" href={goTo}>Ir a {TITLES[goTo] ?? goTo}</a>
              : <Link className="btn btn-ghost btn-sm" to={goTo}>Abrir {goTo}</Link>)}
          </>
        )}
      </div>
    </>
  );
}

// Barra lateral del panel: salta entre secciones y marca la que está en pantalla.
function Sidebar({ ia }) {
  const [active, setActive] = useState(SECTIONS[0][0]);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      const top = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (top) setActive(top.target.id);
    }, { rootMargin: '-15% 0px -70% 0px' });
    SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <aside className="admin-side">
      <SideSearch ia={ia} />
      <nav aria-label="Secciones de administración">
        <ul className="side-nav">
          {SECTIONS.map(([id, t, icon]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : undefined} aria-current={active === id ? 'location' : undefined}>
                <Icon name={icon} size={18} /> {t}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

// Fecha y hora de España, corta: «25/10/26, 23:40».
const fecha = (iso) => (iso
  ? new Date(iso).toLocaleString('es-ES', { timeZone: 'Europe/Madrid', dateStyle: 'short', timeStyle: 'short' })
  : '—');

function Sellers() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState(''); // fallo al cambiar un estado: la tabla se queda
  const navigate = useNavigate();

  // Sesión caducada (401) → al login: no es lo mismo que «no hay solicitudes».
  const load = useCallback(() => fetch('/api/admin/sellers')
    .then((r) => {
      if (r.status === 401) return navigate('/admin/login');
      if (!r.ok) throw new Error(`error ${r.status}`);
      return r.json().then((list) => { setItems(list); setError(''); });
    })
    .catch((e) => setError(e.message)), [navigate]);
  useEffect(() => { load(); }, [load]);

  async function setStatus(id, status) {
    const r = await fetch(`/api/admin/sellers/${id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }),
    }).catch(() => null);
    if (r?.status === 401) return navigate('/admin/login');
    if (!r?.ok) return setActionError('No se pudo cambiar el estado. Inténtalo otra vez.');
    setActionError('');
    load();
  }

  if (error) return <p role="alert" style={{ color: 'var(--danger)' }}>Error con las altas: {error} <button className="btn btn-ghost" onClick={load}>Reintentar</button></p>;
  if (!items.length) return <p className="muted">Todavía no hay solicitudes de alta.</p>;
  // La más nueva, arriba.
  const sorted = [...items].sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? ''));
  return (
    <div className="table-wrap">
      {actionError && <p role="alert" style={{ color: 'var(--danger)' }}>{actionError}</p>}
      <table>
        <thead><tr><th>Fecha</th><th>Negocio</th><th>Contacto</th><th>Recogida</th><th>Registro o exención</th><th>Estado</th></tr></thead>
        <tbody>
          {sorted.map((s) => (
            <tr key={s.id}>
              <td className="small">{fecha(s.createdAt)}</td>
              <td><strong>{s.businessName}</strong> <span className="muted small">· {s.type} · {s.zone}</span><br /><span className="muted small">{s.offer}</span></td>
              <td>{s.email}<br /><span className="muted small">{s.phone || 'sin teléfono'}</span></td>
              <td className="small">{s.pickupHours || '—'}</td>
              <td>{s.sanitaryRegistry}</td>
              <td>
                <select aria-label={`Estado de ${s.businessName}`} value={s.status} onChange={(e) => setStatus(s.id, e.target.value)}>
                  {STATUSES.map((st) => <option key={st}>{st}</option>)}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const done = (t) => (t.completed ? <Status kind="decidido">Hecho</Status> : <Status kind="hipotesis">Abierto</Status>);
const count = (p) => p && p.total > 0 && <span className="muted small"> · {p.done}/{p.total}</span>;

// Responsable en Asana y, si difiere o falta, el previsto en el plan.
// Sin conexión (offline) no se sabe quién la tiene en Asana: solo se muestra el previsto.
function Who({ t, offline }) {
  const asana = t.assignee;
  const plan = t.planned;
  if (offline) return plan ? <span className="muted small">previsto: {plan}</span> : null;
  return (
    <span className="muted small">
      {asana ?? 'Sin asignar'}
      {plan && plan !== asana && <> · plan: {plan}</>}
      {t.due_on && <> · {t.due_on}</>}
    </span>
  );
}

// Hitos del curso leídos de Asana (tareas [Food4All]), con subtareas en dos niveles.
function Milestones() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const load = useCallback(() => {
    setData(null); setError('');
    fetch('/api/admin/milestones')
      .then((r) => (r.ok ? r.json() : r.json().then((d) => Promise.reject(new Error(d.error)))))
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);
  useEffect(() => { load(); }, [load]);

  if (error) return <p role="alert" style={{ color: 'var(--danger)' }}>Error al cargar los hitos: {error} <button className="btn btn-ghost" onClick={load}>Reintentar</button></p>;
  if (!data) return <p className="muted">Cargando hitos de Asana…</p>;

  const offline = data.source === 'plan';
  return (
    <>
      <p className="toolbar">
        <button className="btn btn-ghost" onClick={load}>Actualizar</button>
        {offline
          ? <span className="muted small">Sin conexión con Asana ({data.error}). Se muestra el plan: qué hay que hacer y quién lo tiene previsto, sin estado real.</span>
          : <span className="muted small">Datos en directo de Asana · solo tareas [Food4All].</span>}
      </p>
      {data.milestones.map((m) => (
        <details key={m.n ?? m.title} className="milestone" open={!m.completed && m.children.length > 0}>
          <summary>
            <span className="milestone__title">Hito {m.n} · {m.title}</span>
            {count(m.progress)}
            {m.due_on && <span className="muted small"> · entrega {m.due_on}</span>}
            {m.completed && <> <Status kind="decidido">Completado</Status></>}
          </summary>
          {m.children.length === 0
            ? <p className="muted small">{offline ? 'El plan no detalla este hito.' : 'Todavía sin subtareas en Asana.'}</p>
            : (
              <ul className="divided">
                {m.children.map((c) => (
                  <li key={c.name}>
                    <div className="task-line">
                      <span>{!offline && done(c)} <strong>{c.name}</strong>{count(c.progress)}</span>
                      <Who t={c} offline={offline} />
                    </div>
                    {c.children.length > 0 && (
                      <ul className="subtasks">
                        {c.children.map((l) => (
                          <li key={l.name} className="task-line">
                            <span>{!offline && done(l)} {l.name}</span>
                            <Who t={l} offline={offline} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {c.planOnly?.length > 0 && !c.completed && (
                      <ul className="subtasks subtasks--plan" aria-label="Pasos del plan que no están en Asana">
                        {c.planOnly.map((l) => (
                          <li key={l.name} className="task-line">
                            <span><Status kind="pendiente">Solo en el plan</Status> {l.name}</span>
                            <span className="muted small">plan: {l.planned}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
        </details>
      ))}
    </>
  );
}

const productos = (n) => `${n} ${n === 1 ? 'producto' : 'productos'}`;

function MarketplaceExample() {
  const orders = [
    { ...EXAMPLE_ORDER, state: ORDER_STATES[EXAMPLE_ORDER.currentState] },
    ...VENDOR_ORDERS.map((o) => ({ number: o.number, zone: 'Sevilla', items: o.items, state: o.state })),
  ];
  return (
    <>
      <div className="cols-3">
        {ZONES.map((z) => (
          <div key={z}>
            <h3>{z}</h3>
            <ul className="divided">
              {VENDORS.filter((v) => v.zone === z).map((v) => (
                <li key={v.id} className="task-line">
                  <span><strong>{v.name}</strong> <span className="muted small">{v.type}</span></span>
                  <span className="muted small nowrap">{productos(PRODUCTS.filter((p) => p.vendor === v.id).length)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h3 style={{ marginTop: 24 }}>Pedidos de ejemplo</h3>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Pedido</th><th>Zona</th><th>Productos</th><th>Vendedores</th><th>Estado</th></tr></thead>
          <tbody>
            {orders.map((o) => {
              const names = o.items.map(([id, q]) => `${productById(id).name} × ${q}`);
              const sellers = new Set(o.items.map(([id]) => productById(id).vendor));
              return (
                <tr key={o.number}>
                  <td><strong>{o.number}</strong></td><td>{o.zone}</td>
                  <td className="muted small">{names.join(', ')}</td>
                  <td>{sellers.size}</td><td>{o.state}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

const KIND = { fuente: ['decidido', 'Fuente externa'], hipotesis: ['hipotesis', 'Estimación propia'], pendiente: ['pendiente', 'Por validar'] };

export default function Admin() {
  const [p, setP] = useState(null);
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    fetch('/api/admin/project').then((r) => (r.ok ? r.json().then(setP) : navigate('/admin/login')));
  }, [navigate]);

  // Enlace directo (p. ej. /admin#prompts para el profesor): cuando el panel se pinta, las secciones
  // de arriba aún cargan sus datos y crecen, y la sección pedida se va hacia abajo. Durante 3 s, cada
  // vez que el panel cambia de altura se vuelve a bajar a ella; si la persona toca la página, se para.
  useEffect(() => {
    if (!p || !hash) return undefined;
    const go = () => document.getElementById(hash.slice(1))?.scrollIntoView();
    const ro = new ResizeObserver(go);
    ro.observe(document.querySelector('.admin-main'));
    const stop = () => ro.disconnect();
    const timer = setTimeout(stop, 3000);
    const USER = ['wheel', 'keydown', 'mousedown', 'touchstart'];
    USER.forEach((ev) => window.addEventListener(ev, stop, { once: true }));
    return () => { stop(); clearTimeout(timer); USER.forEach((ev) => window.removeEventListener(ev, stop)); };
  }, [p, hash]);

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    navigate('/');
  }

  if (!p) return null;
  return (
    <>
      <div className="admin-bar">
        <div className="container">
          <strong>FOOD4ALL · Administración</strong>
          <span><Link to="/">Salir a la web pública</Link> · <button className="btn btn-link" onClick={logout}>Cerrar sesión</button></span>
        </div>
      </div>
      <div className="admin-layout">
        <Sidebar ia={p.ia} />
        <main className="admin-main">
          <section className="section" id="resumen" style={{ borderTop: 0 }}>
            <h2>Resumen del proyecto</h2>
            <p className="lead">{p.summary}</p>
            <div className="cols-2">
              <div><h3>Incluye</h3><ul className="divided">{p.scope.includes.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div><h3>No incluye</h3><ul className="divided">{p.scope.excludes.map((x) => <li key={x} className="muted">{x}</li>)}</ul></div>
            </div>
            <div className="cols-4" style={{ marginTop: 24 }}>
              {[['decidido', 'Decidido'], ['hipotesis', 'Hipótesis'], ['pendiente', 'Pendiente'], ['descartado', 'Descartado']].map(([k, t]) => (
                <div key={k}><h3><Status kind={k}>{t}</Status></h3><ul className="divided">{(p.decisions[k] ?? []).map((x) => <li key={x}>{x}</li>)}</ul></div>
              ))}
            </div>
          </section>

          <section className="section" id="mercado">
            <h2>Mercado</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Dato</th><th>Valor</th><th>Tipo</th><th>Fuente</th></tr></thead>
                <tbody>
                  {p.market.map((m) => (
                    <tr key={m.label}>
                      <td>{m.label}</td><td><strong>{m.value}</strong></td>
                      <td><Status kind={KIND[m.kind][0]}>{KIND[m.kind][1]}</Status></td>
                      <td className="muted small">{m.url ? <a href={m.url} target="_blank" rel="noreferrer">{m.source}</a> : m.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="section" id="legal">
            <h2>Marco legal</h2>
            <p className="muted small">{p.legal.note}</p>
            <div className="cols-2">
              <ul className="divided">
                {p.legal.areas.map(([area, norms]) => (
                  <li key={area}>
                    <strong>{area}:</strong>{' '}
                    {norms.map(([n, url], i) => (
                      <span key={n}>{i > 0 && ' · '}<a href={url} target="_blank" rel="noreferrer">{n}</a></span>
                    ))}
                  </li>
                ))}
              </ul>
              <div>
                <h3>Tareas legales pendientes</h3>
                <ol className="divided numbered">{p.legal.tasks.map((t) => <li key={t}>{t}</li>)}</ol>
              </div>
            </div>
            <p style={{ marginTop: 12 }}><Status kind="pendiente" /> {p.legal.pending}</p>
          </section>

          <section className="section" id="equipo">
            <h2>Equipo y roles</h2>
            <ul className="divided">
              {p.team.map((m) => <li key={m.name}><strong>{m.name}</strong> — <span className="muted">{m.role}</span></li>)}
              <li className="muted">{p.shared}</li>
            </ul>
          </section>

          <section className="section" id="hito2">
            <h2>Hito 2 · Necesidades y requisitos</h2>
            <AdminHito2 />
          </section>

          <section className="section" id="hitos">
            <h2>Hitos y tareas (Asana)</h2>
            <Milestones />
          </section>

          <section className="section" id="vendedores">
            <h2>Altas de vendedores</h2>
            <p className="muted small">Almacenamiento provisional en el servidor (backend/data/db.json). Solo visible para administración.</p>
            <Sellers />
          </section>

          <section className="section" id="marketplace">
            <h2>Marketplace <Status kind="ejemplo" /></h2>
            <p className="muted small">Vendedores, catálogo y pedidos inventados que usa la web pública. Se editan en frontend/src/data/examples.js.</p>
            <MarketplaceExample />
          </section>

          <section className="section" id="prompts">
            <h2>Prompts del proyecto</h2>
            <AdminPrompts />
          </section>
        </main>
      </div>
    </>
  );
}
