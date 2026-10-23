import { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';
import Status from '../components/Status.jsx';

// Hito 2 (requisitos): todo llega de backend/hito2.js, que lo lee de docs/requisitos en cada petición.

// Estado de una necesidad → badge (regla de evidencia de FOOD4ALL_necesidades.md).
const NEED_KIND = { Confirmada: 'decidido', 'Obligación legal': 'decidido', Indicio: 'hipotesis', Hipótesis: 'pendiente', 'No confirmada': 'descartado' };

const Ext = ({ href, children }) => (href
  ? <a href={href} target="_blank" rel="noreferrer">{children}<span className="sr-only"> (abre Asana en otra pestaña)</span></a>
  : children);

function Figures({ f }) {
  const later = (f.entrega.V2 ?? 0) + (f.entrega.V3 ?? 0);
  const rf = f.procesos.filter((p) => p.id.startsWith('RF-')).length;
  const rnf = f.procesos.filter((p) => p.id.startsWith('RNF-')).length;
  const tiles = [
    ['Requisitos', f.total, `${rf} procesos RF y ${rnf} RNF`],
    ['En el MVP', f.entrega.MVP, `${f.alcance['MVP simulado'] ?? 0} simulados (pago, reembolso e IA)`],
    ['Must', f.prioridad.Must, `Should ${f.prioridad.Should} · Could ${f.prioridad.Could} · Won't ${f.prioridad["Won't"]}`],
    ['Para después', later, `V2 ${f.entrega.V2} · V3 ${f.entrega.V3} · excluidos ${f.entrega.Excluido}`],
  ];
  return (
    <div className="h2-figures">
      {tiles.map(([label, value, note]) => (
        <div key={label} className="h2-figure"><span className="h2-figure__label">{label}</span><strong>{value}</strong><span className="muted small">{note}</span></div>
      ))}
    </div>
  );
}

function Trace({ needs, trace }) {
  const [need, setNeed] = useState(needs.some((n) => n.id === 'N-CAR-01') ? 'N-CAR-01' : needs[0]?.id);
  const items = trace.filter((t) => t.necesidades.includes(need));
  const current = needs.find((n) => n.id === need);
  return (
    <>
      <p className="filter">
        <label htmlFor="h2-need">Necesidad</label>{' '}
        <select id="h2-need" value={need} onChange={(e) => setNeed(e.target.value)}>
          {needs.map((n) => <option key={n.id} value={n.id}>{n.id} · {n.texto}</option>)}
        </select>
      </p>
      {current && <p className="muted small">{current.estado} · fuentes: {current.fuentes} · historias: {current.historias}</p>}
      <div className="table-wrap">
        <table>
          <caption className="sr-only">Requisitos, criterios y tareas de {need}</caption>
          <thead><tr><th>Requisito (tarea en Asana)</th><th>Historia</th><th>Prioridad · entrega</th><th>Criterios de aceptación</th><th>Depende de</th></tr></thead>
          <tbody>
            {items.map((t) => (
              <tr key={t.id}>
                <td><Ext href={t.asana}><strong>{t.id}</strong></Ext> <span className="muted small">{t.name}</span></td>
                <td>{t.historia && t.historia !== '—' ? <Ext href={t.historiaAsana}>{t.historia}</Ext> : '—'}</td>
                <td className="nowrap">{t.prioridad}</td>
                <td className="muted small">{t.criterios}</td>
                <td className="muted small">{t.depende}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {items.length === 0 && <p className="muted">Ningún subrequisito cubre esta necesidad.</p>}
    </>
  );
}

export default function AdminHito2() {
  const [d, setD] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('/api/admin/hito2')
      .then((r) => r.json().then((data) => (r.ok ? setD(data) : setError(data.error ?? 'Error inesperado'))))
      .catch(() => setError('No se pudo contactar con el servidor.'));
  }, []);

  if (error) return <p role="alert" className="form-error">{error}</p>;
  if (!d) return <p className="muted">Cargando el Hito 2…</p>;

  return (
    <>
      <p className="lead">Necesidades, decisiones y requisitos del Hito 2, leídos de <code>docs/requisitos</code> del repositorio (línea base v0.4). Lo que se ve aquí es lo mismo que hay en los documentos.</p>
      <ul className="h2-links" aria-label="Hito 2 en Asana">
        {d.asana.map((a) => <li key={a.url}><a href={a.url} target="_blank" rel="noreferrer"><Icon name="flag" size={16} /> {a.name}<span className="sr-only"> (abre Asana en otra pestaña)</span></a></li>)}
      </ul>

      <h3 id="hito2-cifras">Requisitos principales</h3>
      <Figures f={d.figures} />
      <details className="h2-more">
        <summary>Requisitos por proceso</summary>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Proceso</th><th>Requisitos</th><th>En el MVP</th><th>Must</th></tr></thead>
            <tbody>
              {d.figures.procesos.map((p) => (
                <tr key={p.id}><td><Ext href={p.asana}><strong>{p.id}</strong></Ext> {p.name}</td><td>{p.total}</td><td>{p.mvp}</td><td>{p.must}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <h3 id="hito2-necesidades">Necesidades</h3>
      <p className="muted small">Confirmada: 3 o más entrevistas independientes del perfil objetivo, con cita literal. Indicio: 1 o 2. Las personas y el benchmark no confirman.</p>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Necesidad</th><th>Estado</th><th>Fuentes</th><th>Requisitos (MVP)</th></tr></thead>
          <tbody>
            {d.needs.map((n) => (
              <tr key={n.id}>
                <td><strong>{n.id}</strong> {n.texto}</td>
                <td><Status kind={NEED_KIND[n.estado] ?? 'pendiente'}>{n.estado}</Status></td>
                <td className="muted small">{n.fuentes}</td>
                <td>{n.reqs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 id="hito2-decisiones">Decisiones: la criba</h3>
      <ul className="divided">
        {d.criba.map((c) => (
          <li key={c.id}>
            <Status kind={c.decided ? 'decidido' : 'pendiente'}>{c.decided ? 'Decidido' : 'Por responder'}</Status>{' '}
            <strong>{c.id} · {c.title}</strong> <span className="muted small">· {c.owner}</span>
            <br /><span className="muted small">{c.proposal}</span>
          </li>
        ))}
      </ul>

      <h3 id="hito2-hipotesis">Hipótesis y decisiones abiertas</h3>
      <div className="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Qué</th><th>Valor provisional</th><th>Cómo se cierra</th></tr></thead>
          <tbody>
            {d.decisions.map((x) => (
              <tr key={x.id}><td><strong>{x.id}</strong><br /><span className="muted small">{x.tipo}</span></td><td>{x.descripcion}</td><td>{x.provisional}</td><td className="muted small">{x.cierre}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 id="hito2-restricciones">Restricciones y exclusiones</h3>
      <div className="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Restricción</th><th>De dónde sale</th><th>Validación</th></tr></thead>
          <tbody>
            {d.rst.map((r) => (
              <tr key={r.id}>
                <td><strong>{r.id}</strong></td><td>{r.texto}</td><td className="muted small">{r.origen}</td>
                <td className="muted small">{['Sebastián', 'Juan Antonio', 'Miguel'].map((p, i) => `${p}: ${r.votos[i] || 'pendiente'}`).join(' · ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="h2-sub"><strong>Excluidos del marketplace (Won't):</strong></p>
      <ul className="divided">{d.excluded.map((x) => <li key={x.id}><strong>{x.id}</strong> {x.texto}</li>)}</ul>

      <h3 id="hito2-fuentes">Fuentes</h3>
      <ul className="divided">{d.sources.map((s) => <li key={s.id}><strong>{s.id}</strong> {s.fuente} <span className="muted small">· {s.estado}</span></li>)}</ul>

      <h3 id="hito2-trazabilidad">Trazabilidad: necesidad → requisito → criterio → tarea</h3>
      <Trace needs={d.needs} trace={d.trace} />

      <h3 id="hito2-cambios">Evolución: registro de cambios</h3>
      <p className="muted small">Qué cambió, quién lo decidió, cuándo y por qué (campos de la Clase 11). Fuente: FOOD4ALL_linea_base_h2.md.</p>
      <div className="h2-changes">
        {[...d.changes].reverse().map((c) => (
          <details key={c.id} className="prompt">
            <summary>
              <span className="prompt__title">{c.id} · {c.elemento}</span>
              <span className="prompt__meta muted small">{c.fecha} · {c.responsable} · {c.tipo} · v{c.version}</span>
            </summary>
            <dl className="prompt__body h2-change">
              <dt>Por qué</dt><dd>{c.origen}</dd>
              <dt>Impacto</dt><dd>{c.impacto}</dd>
              <dt>Alternativa</dt><dd>{c.alternativa}</dd>
              <dt>Decisión</dt><dd>{c.decision}</dd>
              <dt>Evidencia</dt><dd>{c.evidencia}</dd>
            </dl>
          </details>
        ))}
      </div>

      <h3 id="hito2-abierto">Abierto al cerrar esta versión</h3>
      <ul className="divided">{d.open.map((o) => <li key={o.que}><strong>{o.que}</strong><br /><span className="muted small">{o.porque} · {o.quien}</span></li>)}</ul>
    </>
  );
}
