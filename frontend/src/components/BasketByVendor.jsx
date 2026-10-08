import { groupByVendor, PRICE_PENDING } from '../data/examples.js';
import Photo from './Photo.jsx';

// Lista agrupada por vendedor, con origen y alérgenos visibles (se usa en asistente y carrito).
export default function BasketByVendor({ lines, showNotes = false }) {
  return (
    <div className="basket">
      {groupByVendor(lines).map(({ vendor, lines: ls }) => (
        <div key={vendor.id} className="basket__group">
          <h4>{vendor.name} <span className="muted small">· {vendor.type}, {vendor.zone}</span></h4>
          <ul className="divided">
            {ls.map(({ product: p, qty, note }) => (
              <li key={p.id} className="basket__line">
                <Photo id={p.id} alt="" className="basket__thumb" />
                <div className="basket__info">
                  <strong>{p.name}</strong> <span className="muted">× {qty} · {p.unit}</span>
                  <div className="small muted">Origen: {p.origin} · Alérgenos: {p.allergens} · {p.storage}</div>
                  {showNotes && note && <div className="small basket__why">Por qué: {note}</div>}
                </div>
                <span className="small muted basket__price">{PRICE_PENDING}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
