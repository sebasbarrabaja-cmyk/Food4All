import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Título de la pestaña por ruta (más específica primero).
const TITLES = [
  ['/comprar/cliente', 'Vista del cliente'],
  ['/comprar', 'Quiero comprar'],
  ['/vender/panel', 'Panel del vendedor'],
  ['/vender', 'Quiero vender'],
  ['/comunidad', 'Comunidad'],
  ['/creditos', 'Créditos de imágenes'],
  ['/admin/login', 'Acceso administración'],
  ['/admin', 'Administración'],
];

// Al cambiar de página: vuelve arriba (salvo si hay ancla) y actualiza el título.
// `key` cambia en cada clic, aunque la URL sea la misma: así un segundo clic en
// «Cómo funciona» vuelve a llevar a la sección.
export default function RouteEffects() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  useEffect(() => {
    const match = pathname === '/' ? null : TITLES.find(([p]) => pathname.startsWith(p));
    document.title = match ? `${match[1]} · FOOD4ALL` : 'FOOD4ALL · Planifica tu comida';
  }, [pathname]);

  return null;
}
