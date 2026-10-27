import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo.jsx';
import SocialLinks from './SocialLinks.jsx';
import useReveal from './useReveal.js';
import { IDIOMAS, cambiarIdioma } from '../i18n/index.js';

// Selector de idioma (punto 3, 27/10): dos botones con su nombre en su propio idioma, como las ciudades de /comprar.
function SelectorIdioma() {
  const { t, i18n } = useTranslation();
  return (
    <div className="lang-switch" role="group" aria-label={t('comun.idioma')}>
      {IDIOMAS.map(([lng, nombre]) => (
        <button key={lng} type="button" lang={lng} aria-label={nombre} aria-pressed={i18n.resolvedLanguage === lng}
          onClick={() => cambiarIdioma(lng)}>
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function PublicLayout() {
  const { pathname, hash } = useLocation();
  const { t } = useTranslation();
  useReveal(pathname);
  return (
    <div className="public">
      <a className="skip-link" href="#main">{t('comun.saltar')}</a>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label={t('comun.inicio')}>
            <Logo size={38} />
          </Link>
          {/* Tres acciones. El asistente de IA no va aquí: es del marketplace, no de la landing (25/10) */}
          <nav aria-label={t('comun.navPrincipal')} className="site-nav">
            <NavLink to="/comprar" className="nav-btn nav-btn--buy">{t('comun.quieroComprar')}</NavLink>
            <NavLink to="/vender" className="nav-btn">{t('comun.quieroVender')}</NavLink>
            <Link to="/#como" className={`nav-btn${pathname === '/' && hash === '#como' ? ' active' : ''}`}>{t('comun.comoFunciona')}</Link>
          </nav>
          <SelectorIdioma />
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Logo size={28} />
            <p className="muted small" style={{ marginTop: 8 }}>{t('comun.lema')}</p>
          </div>
          <nav aria-label={t('comun.pie.clientes')}>
            <h2 className="footer-title">{t('comun.pie.clientes')}</h2>
            <Link to="/comprar">{t('comun.comoFunciona')}</Link>
            <Link to="/comprar#asistente">{t('comun.pie.asistente')}</Link>
            <Link to="/comprar#marketplace">{t('comun.pie.productos')}</Link>
            <Link to="/comprar/cliente">{t('comun.pie.ejemploPedido')}</Link>
          </nav>
          <nav aria-label={t('comun.pie.vendedores')}>
            <h2 className="footer-title">{t('comun.pie.vendedores')}</h2>
            <Link to="/vender">{t('comun.comoFunciona')}</Link>
            <Link to="/vender#alta">{t('comun.pie.solicitarAlta')}</Link>
            <Link to="/vender/panel">{t('comun.pie.panelEjemplo')}</Link>
          </nav>
          <nav aria-label={t('comun.pie.comunidad')}>
            <h2 className="footer-title">{t('comun.pie.comunidad')}</h2>
            <Link to="/comunidad">{t('comun.pie.porQue')}</Link>
            <Link to="/comunidad#redes">{t('comun.pie.redes')}</Link>
            <SocialLinks className="social-links--footer" />
            <p className="muted small" style={{ marginTop: 10 }}>{t('comun.pie.zona')} <span className="nowrap">Málaga · {t('datos.zonas.Sevilla', { defaultValue: 'Sevilla' })} · Granada</span></p>
          </nav>
        </div>
        <div className="container footer-bottom">
          <p className="muted small">{t('comun.pie.aviso')} · <Link to="/faq">{t('comun.pie.faq')}</Link> · <Link to="/creditos">{t('comun.pie.creditos')}</Link></p>
          <Link to="/admin/login" className="admin-link">{t('comun.pie.admin')}</Link>
        </div>
      </footer>
    </div>
  );
}
