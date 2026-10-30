import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Foto ilustrativa (Wikimedia Commons). Las fotos viven en public/img/<id>.jpg.
export const photoSrc = (id) => `/img/${id}.jpg`;

export default function Photo({ id, alt, className = '' }) {
  return <img className={`photo ${className}`} src={photoSrc(id)} alt={alt} loading="lazy" decoding="async" />;
}

// Aviso en letra pequeña que acompaña a los bloques con fotos.
export function PhotoNote({ className = '' }) {
  const { t } = useTranslation();
  return (
    <p className={`photo-note ${className}`}>
      {t('comun.notaFotos')}{' '}
      <Link to="/creditos">{t('comun.creditos')}</Link>
    </p>
  );
}
