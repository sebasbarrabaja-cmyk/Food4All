import Icon from './Icon.jsx';
import { NETWORKS } from '../data/social.js';

// Fila de iconos de redes (pie y portada). Sin cuenta todavía, el icono no enlaza a nada.
export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`}>
      {NETWORKS.map((n) => (
        <li key={n.id}>
          {n.url
            ? <a href={n.url} target="_blank" rel="noreferrer" aria-label={`${n.name} de FOOD4ALL`}><Icon name={n.id} size={22} /></a>
            : <span title={`${n.name}: próximamente`} aria-label={`${n.name}: próximamente`}><Icon name={n.id} size={22} /></span>}
        </li>
      ))}
    </ul>
  );
}
