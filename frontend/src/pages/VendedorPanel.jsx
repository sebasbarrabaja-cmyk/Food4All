import { useTranslation } from 'react-i18next';
import Status from '../components/Status.jsx';
import Photo, { PhotoNote } from '../components/Photo.jsx';
import ZoneTabs, { SELLER_TABS } from '../components/ZoneTabs.jsx';
import { PRODUCTS, VENDORS, VENDOR_ORDERS, linesTotal, productById } from '../data/examples.js';
import { dato, productoT, eurT } from '../i18n/index.js';

// Vista de ejemplo del panel de un vendedor (Granja La Vereda).
const VENDOR = VENDORS.find((v) => v.id === 's1');
const CATALOG = PRODUCTS.filter((p) => p.vendor === VENDOR.id);

export default function VendedorPanel() {
  const { t, i18n } = useTranslation();
  const eur = (n) => eurT(i18n.resolvedLanguage, n);
  const cat = t('panelVendedor.catalogo', { returnObjects: true });
  const ped = t('panelVendedor.pedidos', { returnObjects: true });
  const liq = t('panelVendedor.liquidacion', { returnObjects: true });
  return (
    <>
      <ZoneTabs tabs={SELLER_TABS} label="comun.pestanasVendedores" />
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container">
          <p className="eyebrow">{t('panelVendedor.antetitulo')}</p>
          <h1>{VENDOR.name}</h1>
          <p className="lead">{t('panelVendedor.entradilla')}</p>
          <p>
            <Status kind="ejemplo" /> <span className="muted small">{t('panelVendedor.inventado')}</span>{' '}
            {t('panelVendedor.estadoSolicitud')} <Status kind="decidido">{t('panelVendedor.verificada')}</Status>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{cat.titulo}</h2>
          <p className="muted">{cat.texto}</p>
          <div className="table-wrap">
            <table>
              <thead><tr>{cat.columnas.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {CATALOG.map((product) => {
                  const p = productoT(t, product);
                  return (
                    <tr key={p.id}>
                      <td><div className="cell-photo"><Photo id={p.id} alt="" className="basket__thumb" /><div><strong>{p.name}</strong><br /><span className="muted small">{p.origin}</span></div></div></td>
                      <td>{dato(t, 'categorias', p.category)}</td><td>{p.unit}</td><td>{p.allergens}</td>
                      <td>{p.dateType}</td><td>{p.storage}</td>
                      <td>{eur(p.price)}</td>
                      <td><Status kind="decidido">{cat.completa}</Status></td>
                    </tr>
                  );
                })}
                <tr>
                  <td><strong>{cat.miel}</strong><br /><span className="muted small">{cat.mielOrigen}</span></td>
                  <td>{cat.mielCategoria}</td><td>500 g</td><td className="muted">—</td><td className="muted">—</td><td>{cat.mielConservacion}</td>
                  <td className="muted">—</td>
                  <td><Status kind="hipotesis">{cat.incompleta}</Status></td>
                </tr>
              </tbody>
            </table>
          </div>
          <PhotoNote />
          <p className="muted small">{t('comun.notaPrecios')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{ped.titulo}</h2>
          <p className="muted">{ped.texto}</p>
          <div className="table-wrap">
            <table>
              <thead><tr>{ped.columnas.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {VENDOR_ORDERS.map((o) => (
                  <tr key={o.number}>
                    <td><strong>{o.number}</strong></td>
                    <td>{o.items.map(([id, q]) => `${productoT(t, productById(id)).name} × ${q}`).join(', ')}</td>
                    <td className="muted">{dato(t, 'franjas', o.pickup)}</td>
                    <td>{dato(t, 'estados', o.state)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted small" style={{ marginTop: 8 }}>{ped.nota}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>{liq.titulo}</h2>
            <p className="muted">{liq.texto}</p>
          </div>
          <ul className="divided">
            <li><strong>{liq.ventas}</strong> {eur(linesTotal(VENDOR_ORDERS.filter((o) => o.state === 'Confirmado').flatMap((o) => o.items)))} <span className="muted small">{liq.confirmados}</span></li>
            <li><strong>{liq.comision}</strong> <Status kind="pendiente" /></li>
            <li><strong>{liq.quien}</strong> <Status kind="pendiente" /></li>
            <li><strong>{liq.periodicidad}</strong> <Status kind="pendiente" /></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t('panelVendedor.patrocinio.titulo')}</h2>
          <p className="muted">{t('panelVendedor.patrocinio.texto')}</p>
        </div>
      </section>
    </>
  );
}
