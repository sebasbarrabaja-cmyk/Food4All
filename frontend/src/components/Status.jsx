import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Marca el estado de una decisión (sección 3.5) o un dato de ejemplo. Textos en comun.estado;
// en el panel (/admin), siempre en español aunque se haya elegido otro idioma en la web.
export default function Status({ kind, children }) {
  const { t } = useTranslation();
  const lng = useLocation().pathname.startsWith('/admin') ? 'es' : undefined;
  return <span className={`badge badge-${kind}`}>{children ?? t(`comun.estado.${kind}`, { lng })}</span>;
}
