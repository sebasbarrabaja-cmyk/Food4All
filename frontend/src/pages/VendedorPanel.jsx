import Status from '../components/Status.jsx';
import Photo, { PhotoNote } from '../components/Photo.jsx';
import ZoneTabs, { SELLER_TABS } from '../components/ZoneTabs.jsx';
import { PRODUCTS, VENDORS, VENDOR_ORDERS, PRICE_NOTE, eur, linesTotal, productById } from '../data/examples.js';

// Vista de ejemplo del panel de un vendedor (Granja La Vereda).
const VENDOR = VENDORS.find((v) => v.id === 's1');
const CATALOG = PRODUCTS.filter((p) => p.vendor === VENDOR.id);

export default function VendedorPanel() {
  return (
    <>
      <ZoneTabs tabs={SELLER_TABS} label="Zona de vendedores" />
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Panel del vendedor</p>
          <h1>{VENDOR.name}</h1>
          <p className="lead">Así verías tu catálogo, tus pedidos y tus ventas.</p>
          <p>
            <Status kind="ejemplo" /> <span className="muted small">Vendedor inventado.</span>{' '}
            Estado de la solicitud: <Status kind="decidido">Verificada</Status>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Catálogo</h2>
          <p className="muted">Sin ficha completa, el producto no se publica.</p>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Producto</th><th>Categoría</th><th>Unidad</th><th>Alérgenos</th><th>Tipo de fecha</th><th>Conservación</th><th>Precio</th><th>Ficha</th></tr></thead>
              <tbody>
                {CATALOG.map((p) => (
                  <tr key={p.id}>
                    <td><div className="cell-photo"><Photo id={p.id} alt="" className="basket__thumb" /><div><strong>{p.name}</strong><br /><span className="muted small">{p.origin}</span></div></div></td>
                    <td>{p.category}</td><td>{p.unit}</td><td>{p.allergens}</td>
                    <td>{p.dateType}</td><td>{p.storage}</td>
                    <td>{eur(p.price)}</td>
                    <td><Status kind="decidido">Completa</Status></td>
                  </tr>
                ))}
                <tr>
                  <td><strong>Miel de azahar</strong><br /><span className="muted small">Sierra Norte de Sevilla</span></td>
                  <td>Despensa</td><td>500 g</td><td className="muted">—</td><td className="muted">—</td><td>Ambiente</td>
                  <td className="muted">—</td>
                  <td><Status kind="hipotesis">Incompleta · no publicada</Status></td>
                </tr>
              </tbody>
            </table>
          </div>
          <PhotoNote />
          <p className="muted small">{PRICE_NOTE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Pedidos</h2>
          <p className="muted">Solo ves tu parte de cada pedido consolidado. Confirmas disponibilidad o avisas de una falta para proponer sustituto.</p>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Pedido</th><th>Tus productos</th><th>Recogida</th><th>Estado</th></tr></thead>
              <tbody>
                {VENDOR_ORDERS.map((o) => (
                  <tr key={o.number}>
                    <td><strong>{o.number}</strong></td>
                    <td>{o.items.map(([id, q]) => `${productById(id).name} × ${q}`).join(', ')}</td>
                    <td className="muted">{o.pickup}</td>
                    <td>{o.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted small" style={{ marginTop: 8 }}>
            Deja cada parte identificada con número de pedido y fecha de lote o caducidad. FOOD4ALL la recoge en origen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Liquidación</h2>
            <p className="muted">Tus ventas y la comisión de FOOD4ALL.</p>
          </div>
          <ul className="divided">
            <li><strong>Ventas del periodo:</strong> {eur(linesTotal(VENDOR_ORDERS.filter((o) => o.state === 'Confirmado').flatMap((o) => o.items)))} <span className="muted small">(pedidos confirmados, antes de la comisión)</span></li>
            <li><strong>Comisión FOOD4ALL:</strong> <Status kind="pendiente" /></li>
            <li><strong>Quién la asume:</strong> <Status kind="pendiente" /></li>
            <li><strong>Periodicidad de pagos:</strong> <Status kind="pendiente" /></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Visibilidad patrocinada</h2>
          <p className="muted">Opcional. Los productos destacados siempre se marcan como patrocinados y nunca se mezclan con las recomendaciones de la IA.</p>
        </div>
      </section>
    </>
  );
}
