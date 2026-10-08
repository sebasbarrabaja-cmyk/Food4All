import { NavLink } from 'react-router-dom';

// Pestañas dentro de una zona: "cómo funciona" y la vista de ejemplo.
export default function ZoneTabs({ tabs, label }) {
  return (
    <nav className="zone-tabs" aria-label={label}>
      <div className="container">
        {tabs.map(([to, text]) => (
          <NavLink key={to} to={to} end>{text}</NavLink>
        ))}
      </div>
    </nav>
  );
}

export const CLIENT_TABS = [['/comprar', 'Cómo comprar'], ['/comprar/cliente', 'Ejemplo de pedido']];
export const SELLER_TABS = [['/vender', 'Cómo vender'], ['/vender/panel', 'Panel de ejemplo']];
