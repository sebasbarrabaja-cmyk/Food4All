import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Status from '../components/Status.jsx';
import ZoneTabs, { CLIENT_TABS } from '../components/ZoneTabs.jsx';
import Photo, { PhotoNote } from '../components/Photo.jsx';
import Icon from '../components/Icon.jsx';
import { PRODUCTS, VENDORS, ZONES, CATEGORY_COLOR, vendorOf } from '../data/examples.js';
import { dato, productoT, eurT } from '../i18n/index.js';

// Recorrido del cliente (sección 3.2): 6 pasos visibles + detalle del resto (10 pasos).
// Los textos están en i18n: comprar.pasos y comprar.recorrido.

// Vídeo corto del asistente (p. ej. '/video/asistente.mp4' en public/). Sin vídeo, el bloque queda en texto.
const AI_VIDEO = null;

const CATEGORIES = [...new Set(PRODUCTS.map((p) => p.category))].sort();

export default function Comprar() {
  const { t, i18n } = useTranslation();
  const [zone, setZone] = useState('Todas');
  const [category, setCategory] = useState('');
  const [vendorId, setVendorId] = useState('');
  const vendors = VENDORS.filter((v) => zone === 'Todas' || v.zone === zone);
  const products = PRODUCTS.filter((p) =>
    vendors.some((v) => v.id === p.vendor)
    && (!category || p.category === category)
    && (!vendorId || p.vendor === vendorId));
  const pasos = t('comprar.pasos', { returnObjects: true });
  const recorrido = t('comprar.recorrido', { returnObjects: true });
  const cmp = t('comprar.comparacion', { returnObjects: true });

  function pickZone(z) {
    setZone(z);
    // Si el vendedor elegido no es de la nueva ciudad, se quita el filtro.
    if (vendorId && z !== 'Todas' && VENDORS.find((v) => v.id === vendorId)?.zone !== z) setVendorId('');
  }

  return (
    <>
      <ZoneTabs tabs={CLIENT_TABS} label="comun.pestanasClientes" />
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container split">
          <div>
            <p className="eyebrow">{t('comprar.antetitulo')}</p>
            <h1>{t('comprar.titulo')}</h1>
            <p className="lead">{t('comprar.entradilla')}</p>
            <Link to="/comprar/cliente" className="btn btn-cta" style={{ marginTop: 8 }}>{t('comprar.verPedido')} <Icon name="arrow" size={18} /></Link>
          </div>
          <div>
            <ol className="steps">
              {pasos.map(({ t: titulo, d }) => (
                <li key={titulo}><div><h3>{titulo}</h3><p>{d}</p></div></li>
              ))}
            </ol>
            <details className="full-journey">
              <summary>{t('comprar.verRecorrido')}</summary>
              <ol className="divided full-journey__list">
                {recorrido.map(({ t: titulo, d }) => <li key={titulo}><strong>{titulo}.</strong> <span className="muted">{d}</span></li>)}
              </ol>
            </details>
          </div>
        </div>
      </section>

      {/* Por feedback del profesor: sin captura del asistente (aburría). Solo vídeo, si lo hay. */}
      <section className="section" id="asistente">
        <div className={`container ${AI_VIDEO ? 'split' : 'ai-brief'}`}>
          <div>
            <p className="eyebrow">{t('comprar.asistente.antetitulo')}</p>
            <h2>{t('comprar.asistente.titulo')}</h2>
            <p className="muted">{t('comprar.asistente.texto')}</p>
          </div>
          {AI_VIDEO && (
            <video className="ai-video" src={AI_VIDEO} controls preload="metadata" playsInline>
              {t('comprar.asistente.sinVideo')}
            </video>
          )}
        </div>
      </section>

      <section className="section" id="marketplace">
        <div className="container">
          <p className="eyebrow">{t('comprar.mercado.antetitulo')}</p>
          <h2>{t('comprar.mercado.titulo')} <Status kind="ejemplo" /></h2>
          <p className="muted">{t('comprar.mercado.texto')}</p>
          <div className="filters">
            <div className="chips" role="group" aria-label={t('comprar.mercado.filtrarCiudad')}>
              {['Todas', ...ZONES].map((z) => (
                <button key={z} type="button" className="chip" aria-pressed={zone === z} onClick={() => pickZone(z)}>
                  {z === 'Todas' ? t('comprar.mercado.todas') : dato(t, 'zonas', z)}
                </button>
              ))}
            </div>
            <label className="filter">
              <span>{t('comprar.mercado.categoria')}</span>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">{t('comprar.mercado.todas')}</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{dato(t, 'categorias', c)}</option>)}
              </select>
            </label>
            <label className="filter">
              <span>{t('comprar.mercado.vendedor')}</span>
              <select value={vendorId} onChange={(e) => setVendorId(e.target.value)}>
                <option value="">{t('comprar.mercado.todos')}</option>
                {vendors.map((v) => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </label>
            <span className="muted small" aria-live="polite">{t('comprar.mercado.productos', { count: products.length })}</span>
          </div>
          <ul className="product-grid">
            {products.map((product) => {
              const p = productoT(t, product);
              const v = vendorOf(p);
              return (
                <li key={p.id} className="product-card">
                  <Photo id={p.id} alt={p.name} className="product-card__img" />
                  <div className="product-card__body">
                    <span className="cat small" style={{ '--cat': CATEGORY_COLOR[p.category] }}>{dato(t, 'categorias', p.category)}</span>
                    <h3>{p.name} <span className="muted small nowrap">{p.unit}</span></h3>
                    <p className="small"><strong>{v.name}</strong> <span className="muted">· {dato(t, 'zonas', v.zone)}</span></p>
                    <dl className="product-card__facts small">
                      <dt>{t('comprar.mercado.origen')}</dt><dd>{p.origin}</dd>
                      <dt>{t('comprar.mercado.alergenos')}</dt><dd>{p.allergens}</dd>
                      <dt>{t('comprar.mercado.conservacion')}</dt><dd>{p.storage}</dd>
                    </dl>
                    <p className="product-card__price small">{eurT(i18n.resolvedLanguage, p.price)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          {products.length === 0 && <p className="muted">{t('comprar.mercado.sinResultados')}</p>}
          <PhotoNote />
          <p className="muted small" style={{ marginTop: 12 }}>
            {t('comprar.mercado.compraMinima')} <Status kind="hipotesis" /> · {t('comprar.mercado.costeEntrega')} <Status kind="pendiente" /> ·
            {' '}{t('comprar.mercado.inventados')} {t('comun.notaPrecios')}
          </p>
        </div>
      </section>

      <section className="section" id="comparacion">
        <div className="container">
          <p className="eyebrow">{cmp.antetitulo}</p>
          <h2>{cmp.titulo}</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th></th>{cmp.columnas.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {cmp.filas.map((f) => (
                  <tr key={f.t}>
                    <th scope="row">{f.t}</th>
                    {/* La columna de mercados municipales sin comprobar va en gris, como antes */}
                    {f.c.map((c, i) => <td key={i} className={i === 1 && f === cmp.filas[2] ? 'muted' : undefined}>{c}</td>)}
                  </tr>
                ))}
                <tr><th scope="row">{cmp.precio}</th><td colSpan={4}>{cmp.precioA} <Status kind="hipotesis" /> {cmp.precioB}</td></tr>
              </tbody>
            </table>
          </div>
          <p className="muted small" style={{ marginTop: 8 }}>{cmp.nota}</p>
        </div>
      </section>
    </>
  );
}
