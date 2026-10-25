import { PHOTO_CREDITS } from '../data/photoCredits.js';
import { PRODUCTS } from '../data/examples.js';
import Photo from '../components/Photo.jsx';

const LABELS = {
  market: 'Puesto de fruta y verdura (portada)',
  bakery: 'Panadería (portada)',
  farm: 'Cosecha en el campo (portada)',
  ...Object.fromEntries(PRODUCTS.map((p) => [p.id, `${p.name} (catálogo de ejemplo)`])),
};

export default function Creditos() {
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="container">
        <p className="eyebrow">Créditos</p>
        <h1>Créditos de las imágenes</h1>
        <p className="lead">
          Las fotos de esta web son ilustrativas y proceden de Wikimedia Commons, con licencias libres.
          No muestran productos, vendedores ni pedidos reales de FOOD4ALL. La ilustración de la portada y el logo son propios.
        </p>
        <div className="table-wrap">
          <table>
            <thead><tr><th></th><th>Uso en la web</th><th>Autor</th><th>Licencia</th><th>Original</th></tr></thead>
            <tbody>
              {Object.entries(PHOTO_CREDITS).map(([id, c]) => (
                <tr key={id}>
                  <td><Photo id={id} alt="" className="credit-thumb" /></td>
                  <td>{LABELS[id] ?? id}</td>
                  <td className="muted">{c.author}</td>
                  <td>{c.license}</td>
                  <td className="nowrap"><a href={c.url} target="_blank" rel="noreferrer">Ver en Commons</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
