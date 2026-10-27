import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Pestañas dentro de una zona: "cómo funciona" y la vista de ejemplo. `label` y los textos son claves de i18n.
export default function ZoneTabs({ tabs, label }) {
  const { t } = useTranslation();
  return (
    <nav className="zone-tabs" aria-label={t(label)}>
      <div className="container">
        {tabs.map(([to, text]) => (
          <NavLink key={to} to={to} end>{t(text)}</NavLink>
        ))}
      </div>
    </nav>
  );
}

export const CLIENT_TABS = [['/comprar', 'comun.comoComprar'], ['/comprar/cliente', 'comun.pie.ejemploPedido']];
export const SELLER_TABS = [['/vender', 'comun.comoVender'], ['/vender/panel', 'comun.pie.panelEjemplo']];
