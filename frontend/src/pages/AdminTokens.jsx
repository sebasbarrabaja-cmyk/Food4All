import { useEffect, useState } from 'react';

// Punto 5 del feedback del 27/10. Dueño: Sebastián. Datos: GET /api/admin/tokens (forma en docs/contratos.md).
// Todo llega de backend/modulos/tokens.js, que suma docs/tokens/*.csv y docs/tokens-ia.csv en cada petición.

const PERSONAS = { sebastian: 'Sebastián', 'juan-antonio': 'Juan Antonio', miguel: 'Miguel', panel: 'Panel (sin usuario)' };
const ACCIONES = { 'sesion-claude': 'Sesiones de Claude Code', buscador: 'Buscador del panel (IA)', otra: 'Otra' };
const n = (x) => x.toLocaleString('es-ES');

function Reparto({ titulo, filas, clave, nombres, total }) {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>{titulo}</th><th>Tokens</th><th>%</th></tr></thead>
        <tbody>
          {filas.map((f) => (
            <tr key={f[clave]}>
              <th scope="row">{nombres[f[clave]] ?? f[clave]}</th>
              <td>{n(f.total)}</td>
              <td>{total ? `${Math.round((f.total / total) * 100)} %` : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdminTokens() {
  const [d, setD] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('/api/admin/tokens')
      .then((r) => r.json().then((data) => (r.ok ? setD(data) : setError(data.error ?? 'Error inesperado'))))
      .catch(() => setError('No se pudo contactar con el servidor.'));
  }, []);

  if (error) return <p role="alert" className="form-error">{error}</p>;
  if (!d) return <p className="muted">Sumando los tokens…</p>;

  const t = d.total;
  const tiles = [
    ['Total', t.total, `${d.filas.length} registros`],
    ['Entrada', t.entrada, 'Lo que se envía al modelo'],
    ['Salida', t.salida, 'Lo que responde (con el razonamiento)'],
    ['Caché', t.cache_escritura + t.cache_lectura, `Escritura ${n(t.cache_escritura)} · lectura ${n(t.cache_lectura)}`],
  ];

  return (
    <>
      <p className="lead">
        Sesiones de Claude Code de cada persona (<code>docs/tokens/</code>, en git) y llamadas del buscador a la IA
        (<code>docs/tokens-ia.csv</code>, solo las de este ordenador).
      </p>
      {!d.filas.length ? (
        <p className="muted">Sin datos todavía: cada sesión se apunta al cerrarla con <code>/exit</code>.</p>
      ) : (
        <>
          <div className="h2-figures">
            {tiles.map(([label, value, note]) => (
              <div key={label} className="h2-figure"><span className="h2-figure__label">{label}</span><strong>{n(value)}</strong><span className="muted small">{note}</span></div>
            ))}
          </div>
          <h3>Por persona</h3>
          <Reparto titulo="Persona" filas={d.por_persona} clave="persona" nombres={PERSONAS} total={t.total} />
          <h3>Por acción</h3>
          <Reparto titulo="Acción" filas={d.por_accion} clave="accion" nombres={ACCIONES} total={t.total} />
          <details className="h2-more">
            <summary>Todos los registros ({d.filas.length})</summary>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Fecha</th><th>Persona</th><th>Acción</th><th>Rama</th><th>Modelos</th><th>Total</th></tr></thead>
                <tbody>
                  {d.filas.map((f, i) => (
                    <tr key={i}>
                      <td>{f.fecha}</td><td>{PERSONAS[f.persona] ?? f.persona}</td><td>{ACCIONES[f.accion] ?? f.accion}</td>
                      <td className="muted small">{f.rama || '—'}</td><td className="muted small">{f.modelos || '—'}</td><td>{n(f.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </>
      )}
      <p className="muted small">Leído de: {d.fuentes.length ? d.fuentes.join(' · ') : 'ningún archivo todavía'}.</p>
    </>
  );
}
