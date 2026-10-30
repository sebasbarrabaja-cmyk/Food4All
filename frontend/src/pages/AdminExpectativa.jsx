import { useEffect, useState } from 'react';
import Status from '../components/Status.jsx';

// Punto 11 del feedback del 27/10. Dueño: Juan Antonio. Datos: GET /api/admin/expectativa (forma en docs/contratos.md).
// Todo llega de backend/modulos/expectativa.js, que lo calcula en cada petición: aquí no se escribe ningún dato.

// Cómo de fiable es lo real de cada fila (campo `medido`).
const MEDIDO = {
  medido: ['decidido', 'Medido'],
  'sin-medir': ['pendiente', 'Sin medir'],
  prueba: ['ejemplo', 'Datos de prueba'],
  futuro: ['pendiente', 'Por llegar'],
};

export default function AdminExpectativa() {
  const [d, setD] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('/api/admin/expectativa')
      .then((r) => r.json().then((data) => (r.ok ? setD(data) : setError(data.error ?? 'Error inesperado'))))
      .catch(() => setError('No se pudo contactar con el servidor.'));
  }, []);

  if (error) return <p role="alert" className="form-error">{error}</p>;
  if (!d) return <p className="muted">Calculando lo previsto y lo real…</p>;

  return (
    <>
      <p className="lead">
        Lo previsto sale de <code>docs/FOOD4ALL_alcance_coste_tiempo.md</code>; lo real, de git, de <code>prompts/</code> y de los tokens.
        Lo que nadie mide se marca como «Sin medir»: no se estima.
      </p>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Aspecto</th><th>Previsto</th><th>Real</th><th>Fuente</th></tr></thead>
          <tbody>
            {d.filas.map((f, i) => {
              const [kind, etiqueta] = MEDIDO[f.medido] ?? MEDIDO.medido;
              return (
                <tr key={i}>
                  <th scope="row">{f.aspecto}</th>
                  <td>{f.previsto}</td>
                  <td>
                    <strong>{f.real}</strong> <Status kind={kind}>{etiqueta}</Status>
                    {f.nota && <div className="muted small">{f.nota}</div>}
                  </td>
                  <td className="muted small">{f.fuente}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="muted small">Calculado el {new Date(d.generado).toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}.</p>
    </>
  );
}
