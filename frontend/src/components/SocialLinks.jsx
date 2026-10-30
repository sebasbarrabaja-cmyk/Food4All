import { useTranslation } from 'react-i18next';
import Icon from './Icon.jsx';
import { NETWORKS } from '../data/social.js';

// Fila de iconos de redes (pie y portada). Sin cuenta todavía, el icono no enlaza a nada.
export default function SocialLinks({ className = '' }) {
  const { t } = useTranslation();
  return (
    <ul className={`social-links ${className}`}>
      {NETWORKS.map((n) => (
        <li key={n.id}>
          {n.url
            ? <a href={n.url} target="_blank" rel="noreferrer" aria-label={t('comun.redSocial', { red: n.name })}><Icon name={n.id} size={22} /></a>
            : <span title={t('comun.redProximamente', { red: n.name })} aria-label={t('comun.redProximamente', { red: n.name })}><Icon name={n.id} size={22} /></span>}
        </li>
      ))}
    </ul>
  );
}
