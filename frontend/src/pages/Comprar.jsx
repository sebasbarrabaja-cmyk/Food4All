import { useState } from 'react';
import { Link } from 'react-router-dom';
import Status from '../components/Status.jsx';
import ZoneTabs, { CLIENT_TABS } from '../components/ZoneTabs.jsx';
import Photo, { PhotoNote } from '../components/Photo.jsx';
import Icon from '../components/Icon.jsx';
import { PRODUCTS, VENDORS, ZONES, CATEGORY_COLOR, vendorOf, PRICE_NOTE, eur } from '../data/examples.js';

// Recorrido del cliente (sección 3.2): 6 pasos visibles + detalle del resto.
const STEPS = [
  ['Dinos qué necesitas', 'En el asistente eliges con botones el presupuesto, los días, cuántas personas sois y el tiempo para cocinar. Por ejemplo: 25 € para cuatro días.'],
  ['Recibe una propuesta de cesta', 'La IA agrupa los productos por vendedor, explica por qué propone cada uno y compara el total con tu presupuesto. La decisión es tuya.'],
  ['Ajusta a tu gusto', 'Quita, cambia o añade productos y pide sustitutos. El total se recalcula y te avisamos si superas el presupuesto.'],
  ['Paga una sola vez', 'Un único carrito con productos de varios vendedores y un solo total. Antes de pagar ves ingredientes y alérgenos.'],
  ['Sigue tu pedido', 'Recibido → recogida en origen → en el hub → empaquetado → en reparto → entregado.'],
  ['Aprovecha lo comprado', 'Recordatorios de qué consumir primero, ideas para aprovechar y tu siguiente compra lista.'],
];

// Detalle completo del recorrido (sección 3.2 del prompt).
const FULL_JOURNEY = [
  ['Entrada', 'Llegas a la portada y eliges "Quiero comprar".'],
  ['Asistente de IA', 'Te pregunta presupuesto, días, preferencias, restricciones y tiempo para cocinar. Las alergias son un dato opcional y solo se usarían durante la sesión.'],
  ['Propuesta de cesta', 'La IA agrupa la cesta por vendedor, con cantidades, total frente a tu presupuesto y el porqué de cada producto. Es una propuesta: decides tú.'],
  ['Revisión y ajuste', 'Quitas, cambias o añades productos, pides sustitutos y abres la ficha del vendedor. El total se recalcula y te avisa si superas el presupuesto.'],
  ['Carrito multi-vendedor', 'Un único carrito agrupado por vendedor y un solo total. Compra mínima y coste de entrega, por definir.'],
  ['Pago único', 'Resumen por vendedor, zona y franja de entrega, ingredientes y alérgenos a la vista y aceptación de condiciones. Los perecederos no tienen derecho de desistimiento.'],
  ['Seguimiento', 'Recibido, recogida en origen, en el hub (consolidación y verificación), empaquetado, en reparto y entregado.'],
  ['Después de comprar', 'Recordatorios de qué consumir primero, ideas para aprovechar lo comprado y la siguiente compra lista. Los avisos de caducidad necesitan datos reales del lote.'],
  ['Incidencias', 'Un formulario sencillo si algo llega mal. Quién responde (vendedor, FOOD4ALL o ambos) está por definir.'],
  ['Suscripción', 'Beneficios de entrega y promociones, sin cajas obligatorias. Próximamente, sin precios todavía.'],
];

// Vídeo corto del asistente (p. ej. '/video/asistente.mp4' en public/). Sin vídeo, el bloque queda en texto.
const AI_VIDEO = null;

const CATEGORIES = [...new Set(PRODUCTS.map((p) => p.category))].sort();

export default function Comprar() {
  const [zone, setZone] = useState('Todas');
  const [category, setCategory] = useState('');
  const [vendorId, setVendorId] = useState('');
  const vendors = VENDORS.filter((v) => zone === 'Todas' || v.zone === zone);
  const products = PRODUCTS.filter((p) =>
    vendors.some((v) => v.id === p.vendor)
    && (!category || p.category === category)
    && (!vendorId || p.vendor === vendorId));

  function pickZone(z) {
    setZone(z);
    // Si el vendedor elegido no es de la nueva ciudad, se quita el filtro.
    if (vendorId && z !== 'Todas' && VENDORS.find((v) => v.id === vendorId)?.zone !== z) setVendorId('');
  }

  return (
    <>
      <ZoneTabs tabs={CLIENT_TABS} label="Zona de clientes" />
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container split">
          <div>
            <p className="eyebrow">Zona de clientes</p>
            <h1>Tu compra de varios días, planificada</h1>
            <p className="lead">Productos de vendedores locales en una sola compra y una sola entrega.</p>
            <Link to="/comprar/cliente" className="btn btn-cta" style={{ marginTop: 8 }}>Ver cómo sería tu pedido <Icon name="arrow" size={18} /></Link>
          </div>
          <div>
            <ol className="steps">
              {STEPS.map(([t, d]) => (
                <li key={t}><div><h3>{t}</h3><p>{d}</p></div></li>
              ))}
            </ol>
            <details className="full-journey">
              <summary>Ver el recorrido completo, paso a paso (10 pasos)</summary>
              <ol className="divided full-journey__list">
                {FULL_JOURNEY.map(([t, d]) => <li key={t}><strong>{t}.</strong> <span className="muted">{d}</span></li>)}
              </ol>
            </details>
          </div>
        </div>
      </section>

      {/* Por feedback del profesor: sin captura del asistente (aburría). Solo vídeo, si lo hay. */}
      <section className="section" id="asistente">
        <div className={`container ${AI_VIDEO ? 'split' : 'ai-brief'}`}>
          <div>
            <p className="eyebrow">Asistente de IA</p>
            <h2>Elige qué necesitas y te propone la cesta</h2>
            <p className="muted">
              Eliges presupuesto, días, cuántas personas sois y tiempo para cocinar. La IA te propone productos de varios vendedores
              y te explica por qué. Tú decides.
            </p>
          </div>
          {AI_VIDEO && (
            <video className="ai-video" src={AI_VIDEO} controls preload="metadata" playsInline>
              Tu navegador no puede reproducir el vídeo.
            </video>
          )}
        </div>
      </section>

      <section className="section" id="marketplace">
        <div className="container">
          <p className="eyebrow">Marketplace</p>
          <h2>Productos de vendedores locales <Status kind="ejemplo" /></h2>
          <p className="muted">Cada producto muestra quién lo vende, de dónde viene y sus alérgenos antes de pagar.</p>
          <div className="filters">
            <div className="chips" role="group" aria-label="Filtrar por ciudad">
              {['Todas', ...ZONES].map((z) => (
                <button key={z} type="button" className="chip" aria-pressed={zone === z} onClick={() => pickZone(z)}>{z}</button>
              ))}
            </div>
            <label className="filter">
              <span>Categoría</span>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Todas</option>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="filter">
              <span>Vendedor</span>
              <select value={vendorId} onChange={(e) => setVendorId(e.target.value)}>
                <option value="">Todos</option>
                {vendors.map((v) => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </label>
            <span className="muted small" aria-live="polite">{products.length} {products.length === 1 ? 'producto' : 'productos'}</span>
          </div>
          <ul className="product-grid">
            {products.map((p) => (
              <li key={p.id} className="product-card">
                <Photo id={p.id} alt={p.name} className="product-card__img" />
                <div className="product-card__body">
                  <span className="cat small" style={{ '--cat': CATEGORY_COLOR[p.category] }}>{p.category}</span>
                  <h3>{p.name} <span className="muted small nowrap">{p.unit}</span></h3>
                  <p className="small"><strong>{vendorOf(p).name}</strong> <span className="muted">· {vendorOf(p).zone}</span></p>
                  <dl className="product-card__facts small">
                    <dt>Origen</dt><dd>{p.origin}</dd>
                    <dt>Alérgenos</dt><dd>{p.allergens}</dd>
                    <dt>Conservación</dt><dd>{p.storage}</dd>
                  </dl>
                  <p className="product-card__price small">{eur(p.price)}</p>
                </div>
              </li>
            ))}
          </ul>
          {products.length === 0 && <p className="muted">No hay productos de ejemplo con estos filtros.</p>}
          <PhotoNote />
          <p className="muted small" style={{ marginTop: 12 }}>
            Compra mínima: unos 10–15 € <Status kind="hipotesis" /> · Coste de entrega <Status kind="pendiente" /> ·
            Vendedores y productos inventados para la demostración. {PRICE_NOTE}
          </p>
        </div>
      </section>

      <section className="section" id="comparacion">
        <div className="container">
          <p className="eyebrow">Comparación conceptual</p>
          <h2>¿En qué se diferencia?</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th></th><th>FOOD4ALL</th><th>Plataformas de mercados municipales</th><th>Supermercado</th><th>Delivery inmediato</th></tr></thead>
              <tbody>
                <tr><th scope="row">Para qué</th><td>Planificar varios días</td><td>Comprar en los puestos de tu mercado</td><td>Compra general</td><td>Comer ahora</td></tr>
                <tr><th scope="row">Vendedores</th><td>Varios locales en un carrito</td><td>Puestos de un mercado (en Sevilla, un mercado por pedido)</td><td>Una cadena</td><td>Normalmente uno por pedido</td></tr>
                <tr><th scope="row">Después de comprar</th><td>Recordatorios y siguiente compra</td><td>—</td><td>—</td><td>—</td></tr>
                <tr><th scope="row">Precio</th><td colSpan={4}>Algunos productos podrían ser más competitivos <Status kind="hipotesis" /> — no afirmamos que todo sea más barato.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="muted small" style={{ marginTop: 8 }}>Comparación conceptual. La columna de mercados municipales resume las plataformas públicas de Málaga y Sevilla, consultadas el 26/10/2026.</p>
        </div>
      </section>
    </>
  );
}
