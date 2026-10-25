import Status from '../components/Status.jsx';
import ZoneTabs, { CLIENT_TABS } from '../components/ZoneTabs.jsx';
import BasketByVendor from '../components/BasketByVendor.jsx';
import { PhotoNote } from '../components/Photo.jsx';
import Icon from '../components/Icon.jsx';
import { EXAMPLE_ORDER, ORDER_STATES, REMINDERS, PRICE_NOTE, eur, productById, groupByVendor } from '../data/examples.js';

// Vista de ejemplo del cliente: carrito, checkout, seguimiento y después de comprar.
export default function ClienteVista() {
  const o = EXAMPLE_ORDER;
  const subtotal = o.items.reduce((sum, [id, qty]) => sum + productById(id).price * qty, 0);
  const vendors = groupByVendor(o.items).length;

  return (
    <>
      <ZoneTabs tabs={CLIENT_TABS} label="Zona de clientes" />
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Vista del cliente</p>
          <h1>Así sería tu pedido</h1>
          <p className="lead">Un pedido de ejemplo con productos de {vendors} vendedores locales, pagado una sola vez y entregado junto.</p>
          <p><Status kind="ejemplo" /> <span className="muted small">Pedido inventado para ilustrar la experiencia. No se pueden hacer compras.</span></p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>1 · Un carrito, varios vendedores</h2>
            <p className="muted">Los productos se agrupan por vendedor, pero pagas un solo total. Ingredientes y alérgenos están a la vista antes de pagar.</p>
          </div>
          <div className="panel">
            <BasketByVendor lines={o.items} />
            <PhotoNote />
            <div className="summary">
              <div><span>Subtotal</span><span>{eur(subtotal)}</span></div>
              <div><span>Entrega</span><span className="muted"><Status kind="pendiente" /></span></div>
              <div><strong>Total</strong><strong>{eur(subtotal)} + entrega</strong></div>
            </div>
            <p className="muted small">{PRICE_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>2 · Pago único</h2>
            <p className="muted">Resumen por vendedor, zona y franja de entrega, y aceptación de condiciones.</p>
          </div>
          <ul className="divided">
            <li><strong>Zona de entrega:</strong> <span className="muted">{o.zone}</span></li>
            <li><strong>Franja:</strong> <span className="muted">{o.slot}</span> <Status kind="pendiente" /></li>
            <li><strong>Pago:</strong> <span className="muted">Una sola vez a FOOD4ALL por todo el pedido.</span></li>
            <li className="muted small">Los productos perecederos no tienen derecho de desistimiento.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>3 · Seguimiento</h2>
          <p className="muted">Pedido <strong>{o.number}</strong></p>
          <ol className="tracker">
            {ORDER_STATES.map((s, i) => (
              <li key={s} className={i < o.currentState ? 'done' : i === o.currentState ? 'current' : ''}
                aria-current={i === o.currentState ? 'step' : undefined}>
                <span className="tracker__dot">{i < o.currentState && <Icon name="check" size={14} />}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <p className="muted small">En el hub consolidamos los productos de todos los vendedores y verificamos su estado antes de empaquetar.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>4 · Después de comprar</h2>
            <p className="muted">Recordatorios de qué consumir primero e ideas para aprovechar lo comprado.</p>
            <p className="muted small">
              Funcionalidad prevista <Status kind="pendiente" />: los avisos de caducidad necesitan la fecha real
              del lote y su tipo (caducidad o consumo preferente).
            </p>
          </div>
          <ul className="divided">
            {REMINDERS.map(([p, t]) => <li key={p}><strong>{p}.</strong> <span className="muted">{t}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>¿Algo llegó mal?</h2>
          <p className="muted">Habrá un formulario sencillo de incidencias. Quién responde ante el cliente (vendedor, FOOD4ALL o ambos) está <Status kind="pendiente" />.</p>
        </div>
      </section>
    </>
  );
}
