import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import SocialLinks from './SocialLinks.jsx';
import useReveal from './useReveal.js';

export default function PublicLayout() {
  const { pathname, hash } = useLocation();
  useReveal(pathname);
  return (
    <div className="public">
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label="FOOD4ALL, inicio">
            <Logo size={38} />
          </Link>
          {/* Tres acciones y, a la derecha, el asistente: visible, pero sin destacar más que comprar (RF-12.1-01, C-26) */}
          <nav aria-label="Principal" className="site-nav">
            <NavLink to="/comprar" className="nav-btn nav-btn--buy">Quiero comprar</NavLink>
            <NavLink to="/vender" className="nav-btn">Quiero vender</NavLink>
            <Link to="/#como" className={`nav-btn${pathname === '/' && hash === '#como' ? ' active' : ''}`}>Cómo funciona</Link>
            {/* Sin estado activo: en /comprar ya se marca «Quiero comprar», y en crema destacaría tanto como él */}
            <Link to="/comprar#asistente" className="nav-btn nav-btn--ai">
              <Icon name="spark" size={18} /> Asistente IA
            </Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Logo size={28} />
            <p className="muted small" style={{ marginTop: 8 }}>Planifica tu comida. Ahorra. Come como en casa.</p>
          </div>
          <nav aria-label="Clientes">
            <h2 className="footer-title">Clientes</h2>
            <Link to="/comprar">Cómo funciona</Link>
            <Link to="/comprar#asistente">Asistente de IA</Link>
            <Link to="/comprar#marketplace">Productos</Link>
            <Link to="/comprar/cliente">Ejemplo de pedido</Link>
          </nav>
          <nav aria-label="Vendedores">
            <h2 className="footer-title">Vendedores</h2>
            <Link to="/vender">Cómo funciona</Link>
            <Link to="/vender#alta">Solicitar el alta</Link>
            <Link to="/vender/panel">Panel de ejemplo</Link>
          </nav>
          <nav aria-label="Comunidad">
            <h2 className="footer-title">Comunidad</h2>
            <Link to="/comunidad">Por qué nos importa</Link>
            <Link to="/comunidad#redes">Nuestras redes</Link>
            <SocialLinks className="social-links--footer" />
            <p className="muted small" style={{ marginTop: 10 }}>Zona inicial: Málaga · Sevilla · Granada</p>
          </nav>
        </div>
        <div className="container footer-bottom">
          <p className="muted small">Proyecto universitario conceptual · Datos de ejemplo · Sin vendedores, pedidos ni precios reales · <Link to="/creditos">Créditos de imágenes</Link></p>
          <Link to="/admin/login" className="admin-link">Acceso administración</Link>
        </div>
      </footer>
    </div>
  );
}
