import { useEffect } from 'react';

// Aparición suave al hacer scroll en la web pública. Se aplica sola a los bloques de cada
// sección y, en escalera, a los elementos de las rejillas. Sin JavaScript o con
// "reducir movimiento" todo se ve desde el principio (el CSS solo oculta si hay .reveal-on).
const GROUPS = [
  '.steps-visual', '.zones', '.mosaic', '.why-grid', '.network-grid', '.pillars',
  '.product-grid', '.values', '.benefits', '.roles', '.status-cols', '.steps',
].join(',');

export default function useReveal(pathname) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    document.documentElement.classList.add('reveal-on');

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    // Espera un fotograma para que la página nueva esté pintada.
    const raf = requestAnimationFrame(() => {
      const watch = (el, delay = 0) => {
        if (el.hasAttribute('data-reveal')) return;
        el.setAttribute('data-reveal', '');
        el.style.setProperty('--reveal-delay', `${delay}ms`);
        io.observe(el);
      };
      document.querySelectorAll('.public main :is(' + GROUPS + ')').forEach((group) => {
        [...group.children].forEach((child, i) => watch(child, Math.min(i, 6) * 90));
      });
      document.querySelectorAll('.public main .section > .container > *').forEach((el) => {
        if (!el.matches(GROUPS)) watch(el);
      });
    });

    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [pathname]);
}
