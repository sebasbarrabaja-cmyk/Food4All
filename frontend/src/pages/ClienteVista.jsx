import { useTranslation } from 'react-i18next';
import Status from '../components/Status.jsx';
import ZoneTabs, { CLIENT_TABS } from '../components/ZoneTabs.jsx';
import BasketByVendor from '../components/BasketByVendor.jsx';
import { PhotoNote } from '../components/Photo.jsx';
import Icon from '../components/Icon.jsx';
import { EXAMPLE_ORDER, ORDER_STATES, REMINDERS, linesTotal, groupByVendor } from '../data/examples.js';
import { dato, eurT } from '../i18n/index.js';

// Vista de ejemplo del cliente: carrito, checkout, seguimiento y después de comprar.
export default function ClienteVista() {
  const { t, i18n } = useTranslation();
  const eur = (n) => eurT(i18n.resolvedLanguage, n);
  const o = EXAMPLE_ORDER;
  const subtotal = linesTotal(o.items);
  const vendors = groupByVendor(o.items).length;

  return (
    <>
      <ZoneTabs tabs={CLIENT_TABS} label="comun.pestanasClientes" />
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container">
          <p className="eyebrow">{t('cliente.antetitulo')}</p>
          <h1>{t('cliente.titulo')}</h1>
          <p className="lead">{t('cliente.entradilla', { count: vendors })}</p>
          <p><Status kind="ejemplo" /> <span className="muted small">{t('cliente.inventado')}</span></p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>{t('cliente.carrito.titulo')}</h2>
            <p className="muted">{t('cliente.carrito.texto')}</p>
          </div>
          <div className="panel">
            <BasketByVendor lines={o.items} />
            <PhotoNote />
            <div className="summary">
              <div><span>{t('cliente.carrito.subtotal')}</span><span>{eur(subtotal)}</span></div>
              <div><span>{t('cliente.carrito.entrega')}</span><span className="muted"><Status kind="pendiente" /></span></div>
              <div><strong>{t('cliente.carrito.total')}</strong><strong>{t('cliente.carrito.masEntrega', { precio: eur(subtotal) })}</strong></div>
            </div>
            <p className="muted small">{t('comun.notaPrecios')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>{t('cliente.pago.titulo')}</h2>
            <p className="muted">{t('cliente.pago.texto')}</p>
          </div>
          <ul className="divided">
            <li><strong>{t('cliente.pago.zona')}</strong> <span className="muted">{dato(t, 'zonas', o.zone)}</span></li>
            <li><strong>{t('cliente.pago.franja')}</strong> <span className="muted">{dato(t, 'franjas', o.slot)}</span> <Status kind="pendiente" /></li>
            <li><strong>{t('cliente.pago.pago')}</strong> <span className="muted">{t('cliente.pago.unaVez')}</span></li>
            <li className="muted small">{t('cliente.pago.desistimiento')}</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t('cliente.seguimiento.titulo')}</h2>
          <p className="muted">{t('cliente.seguimiento.pedido')} <strong>{o.number}</strong></p>
          <ol className="tracker">
            {ORDER_STATES.map((s, i) => (
              <li key={s} className={i < o.currentState ? 'done' : i === o.currentState ? 'current' : ''}
                aria-current={i === o.currentState ? 'step' : undefined}>
                <span className="tracker__dot">{i < o.currentState && <Icon name="check" size={14} />}</span>
                <span>{dato(t, 'estados', s)}</span>
              </li>
            ))}
          </ol>
          <p className="muted small">{t('cliente.seguimiento.hub')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>{t('cliente.despues.titulo')}</h2>
            <p className="muted">{t('cliente.despues.texto')}</p>
            <p className="muted small">
              {t('cliente.despues.prevista')} <Status kind="pendiente" />{t('cliente.despues.caducidad')}
            </p>
          </div>
          <ul className="divided">
            {REMINDERS.map(([p, txt], i) => (
              <li key={p}>
                <strong>{t(`datos.recordatorios.${i}.p`, { defaultValue: p })}.</strong>{' '}
                <span className="muted">{t(`datos.recordatorios.${i}.t`, { defaultValue: txt })}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t('cliente.incidencias.titulo')}</h2>
          <p className="muted">{t('cliente.incidencias.texto')} <Status kind="pendiente" />.</p>
        </div>
      </section>
    </>
  );
}
