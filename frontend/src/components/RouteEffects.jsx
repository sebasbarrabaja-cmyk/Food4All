import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Título de la pestaña por ruta (más específica primero). Las públicas, en el idioma elegido
// (comun.titulos); el panel, siempre en español.
const TITLES = [
  '/comprar/cliente', '/comprar', '/vender/panel', '/vender', '/comunidad', '/creditos', '/faq',
  ['/admin/login', 'Acceso administración'],
  ['/admin', 'Administración'],
];

// Al cambiar de página: vuelve arriba (salvo si hay ancla) y actualiza el título y el idioma de <html>.
// `key` cambia en cada clic, aunque la URL sea la misma: así un segundo clic en
// «Cómo funciona» vuelve a llevar a la sección.
export default function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  useEffect(() => {
    const admin = pathname.startsWith('/admin');
    // El lector de pantalla pronuncia según `lang`: el panel no se traduce.
    document.documentElement.lang = admin ? 'es' : lng;
    if (pathname === '/') { document.title = t('comun.titulos.portada'); return; }
    const match = TITLES.find((r) => pathname.startsWith(Array.isArray(r) ? r[0] : r));
    // Sin coincidencia es una 404: el título lo pone NotFound.
    if (match) document.title = `${Array.isArray(match) ? match[1] : t(`comun.titulos.${match}`)} · FOOD4ALL`;
  }, [pathname, lng, t]);

  return null;
}
