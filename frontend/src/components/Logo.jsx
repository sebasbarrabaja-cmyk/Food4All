// Logo FOOD4ALL: caja de mercado con tres piezas de producto (varios vendedores, una sola compra)
// y una hoja (producto local). Usa los tokens de color, así que se adapta al modo oscuro.
export function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="logo-mark">
      {/* hoja */}
      <path d="M21 9.5c0-4.2 3.2-7 7.6-7.2.1 4.3-3 7.3-7.6 7.2Z" fill="var(--green-mid)" />
      <path d="M21 9.5c1.6-2 3.4-3.5 5.4-4.6" stroke="var(--logo-stripe, var(--bg))" strokeWidth="0.9" fill="none" strokeLinecap="round" />
      {/* tres productos */}
      <circle cx="11.5" cy="17" r="5" fill="var(--accent)" />
      <circle cx="20" cy="15.2" r="5.6" fill="var(--earth)" />
      <circle cx="28.5" cy="17" r="5" fill="var(--green-mid)" />
      {/* caja */}
      <path d="M4.5 19.5h31l-2.6 15.2a2.4 2.4 0 0 1-2.4 2H9.5a2.4 2.4 0 0 1-2.4-2L4.5 19.5Z" fill="var(--logo-crate, var(--green))" />
      <path d="M8 26.2h24M8.9 31h22.2" stroke="var(--logo-stripe, var(--bg))" strokeWidth="1.3" strokeLinecap="round" opacity=".55" />
    </svg>
  );
}

export default function Logo({ size = 32 }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-word">FOOD<span className="logo-four">4</span>ALL</span>
    </span>
  );
}
