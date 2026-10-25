import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  // RouteEffects no sabe qué rutas no existen: el título lo pone esta página, en cada URL
  // (de una 404 a otra la página no se vuelve a montar).
  const { pathname } = useLocation();
  useEffect(() => { document.title = 'Página no encontrada · FOOD4ALL'; }, [pathname]);
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1>Esta página no existe</h1>
        <p className="lead">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
        <div className="hero__actions">
          <Link to="/" className="btn btn-primary">Ir a la portada</Link>
          <Link to="/comprar" className="btn btn-ghost">Quiero comprar</Link>
          <Link to="/vender" className="btn btn-ghost">Quiero vender</Link>
        </div>
      </div>
    </section>
  );
}
