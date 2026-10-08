import { Link } from 'react-router-dom';

// Foto ilustrativa (Wikimedia Commons). Las fotos viven en public/img/<id>.jpg.
export const photoSrc = (id) => `/img/${id}.jpg`;

export default function Photo({ id, alt, className = '' }) {
  return <img className={`photo ${className}`} src={photoSrc(id)} alt={alt} loading="lazy" decoding="async" />;
}

// Aviso en letra pequeña que acompaña a los bloques con fotos.
export function PhotoNote({ className = '' }) {
  return (
    <p className={`photo-note ${className}`}>
      Imágenes ilustrativas de Wikimedia Commons: no corresponden a productos ni vendedores reales.{' '}
      <Link to="/creditos">Créditos</Link>
    </p>
  );
}
