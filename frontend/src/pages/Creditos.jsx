import { useTranslation } from 'react-i18next';
import { PHOTO_CREDITS } from '../data/photoCredits.js';
import { PRODUCTS } from '../data/examples.js';
import { productoT } from '../i18n/index.js';
import Photo from '../components/Photo.jsx';

export default function Creditos() {
  const { t } = useTranslation();
  const labels = {
    market: t('creditos.usos.market'),
    bakery: t('creditos.usos.bakery'),
    farm: t('creditos.usos.farm'),
    ...Object.fromEntries(PRODUCTS.map((p) => [p.id, t('creditos.usos.producto', { nombre: productoT(t, p).name })])),
  };
  const columnas = t('creditos.columnas', { returnObjects: true });
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="container">
        <p className="eyebrow">{t('creditos.antetitulo')}</p>
        <h1>{t('creditos.titulo')}</h1>
        <p className="lead">{t('creditos.texto')}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{columnas.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
            <tbody>
              {Object.entries(PHOTO_CREDITS).map(([id, c]) => (
                <tr key={id}>
                  <td><Photo id={id} alt="" className="credit-thumb" /></td>
                  <td>{labels[id] ?? id}</td>
                  <td className="muted">{c.author}</td>
                  <td>{c.license}</td>
                  <td className="nowrap"><a href={c.url} target="_blank" rel="noreferrer">{t('creditos.verCommons')}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
