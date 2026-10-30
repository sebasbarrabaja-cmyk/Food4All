import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  // RouteEffects no sabe qué rutas no existen: el título lo pone esta página, en cada URL
  // (de una 404 a otra la página no se vuelve a montar) y al cambiar de idioma.
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => { document.title = `${t('comun.titulos.noEncontrada')} · FOOD4ALL`; }, [pathname, t]);
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="container">
        <p className="eyebrow">{t('noEncontrada.antetitulo')}</p>
        <h1>{t('noEncontrada.titulo')}</h1>
        <p className="lead">{t('noEncontrada.texto')}</p>
        <div className="hero__actions">
          <Link to="/" className="btn btn-primary">{t('noEncontrada.portada')}</Link>
          <Link to="/comprar" className="btn btn-ghost">{t('comun.quieroComprar')}</Link>
          <Link to="/vender" className="btn btn-ghost">{t('comun.quieroVender')}</Link>
        </div>
      </div>
    </section>
  );
}
