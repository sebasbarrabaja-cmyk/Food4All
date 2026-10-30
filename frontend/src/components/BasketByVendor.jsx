import { useTranslation } from 'react-i18next';
import { groupByVendor } from '../data/examples.js';
import { dato, productoT, eurT } from '../i18n/index.js';
import Photo from './Photo.jsx';

// Lista agrupada por vendedor, con origen y alérgenos visibles (se usa en asistente y carrito).
export default function BasketByVendor({ lines, showNotes = false }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="basket">
      {groupByVendor(lines).map(({ vendor, lines: ls }) => (
        <div key={vendor.id} className="basket__group">
          <h4>{vendor.name} <span className="muted small">· {dato(t, 'tipos', vendor.type)}, {dato(t, 'zonas', vendor.zone)}</span></h4>
          <ul className="divided">
            {ls.map(({ product, qty, note }) => {
              const p = productoT(t, product);
              return (
                <li key={p.id} className="basket__line">
                  <Photo id={p.id} alt="" className="basket__thumb" />
                  <div className="basket__info">
                    <strong>{p.name}</strong> <span className="muted">× {qty} · {p.unit}</span>
                    <div className="small muted">{t('comun.cesta.origen')}: {p.origin} · {t('comun.cesta.alergenos')}: {p.allergens} · {p.storage}</div>
                    {showNotes && note && <div className="small basket__why">{t('comun.cesta.porQue')}: {note}</div>}
                  </div>
                  <span className="small basket__price">{eurT(i18n.resolvedLanguage, p.price * qty)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
