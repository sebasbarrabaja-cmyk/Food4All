import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Status from '../components/Status.jsx';

// Punto 4 del feedback del 27/10: preguntas frecuentes. Dueño: Juan Antonio.
// Las respuestas salen solo de lo ya decidido (línea base H2-v0.4, RST de la criba y estados del pedido);
// lo abierto se marca con su estado, como en el resto de la web. Textos en i18n (faq.*).
// Cada respuesta es una lista de trozos { t, estado? }: la etiqueta de estado va detrás de su trozo.
export default function Faq() {
  const { t } = useTranslation();
  const grupos = t('faq.grupos', { returnObjects: true });
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="container faq">
        <p className="eyebrow">{t('faq.antetitulo')}</p>
        <h1>{t('faq.titulo')}</h1>
        <p className="lead">{t('faq.entradilla')}</p>
        {grupos.map((g) => (
          <section key={g.id} id={g.id} className="faq__group" aria-labelledby={`faq-${g.id}`}>
            <h2 id={`faq-${g.id}`}>{g.titulo}</h2>
            {g.preguntas.map((q) => (
              <details key={q.p} className="faq__item">
                <summary>{q.p}</summary>
                <p className="muted">
                  {q.r.map((parte, i) => (
                    <span key={i}>
                      {i > 0 && ' '}{parte.t}{parte.estado && <> <Status kind={parte.estado} />.</>}
                    </span>
                  ))}
                </p>
              </details>
            ))}
            {g.id === 'vendedores' && <Link to="/vender#alta" className="btn btn-ghost faq__cta">{t('faq.verAlta')}</Link>}
          </section>
        ))}
        <p className="muted small faq__more">{t('faq.otraPregunta')} <Link to="/comunidad">{t('comun.pie.comunidad')}</Link></p>
      </div>
    </section>
  );
}
