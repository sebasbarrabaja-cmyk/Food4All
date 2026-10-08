// Iconos SVG de trazo (sin emojis). Añadir aquí los que hagan falta.
const PATHS = {
  basket: 'M5 10h14l-1.5 9h-11L5 10Zm3 0 3-6m5 6-3-6M9 14v2m3-2v2m3-2v2',
  store: 'M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6',
  truck: 'M3 6h11v10H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  spark: 'M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  check: 'M5 12l4 4 10-10',
  x: 'M6 6l12 12M18 6 6 18',
  chat: 'M4 5h16v11H9l-5 4V5Zm4 5h8M8 13h5',
  card: 'M3 6h18v12H3zM3 10h18M7 15h4',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z',
  pin: 'M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9c0-3.3 2.7-6 6-6s6 2.7 6 6m1-9a3 3 0 1 0 0-6m2 15c0-2.6-1.4-4.8-3.5-5.6',
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 17h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7',
  leaf: 'M5 19c0-8 6-14 14-14 0 8-6 14-14 14Zm0 0 7-7',
  lock: 'M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3',
};

export default function Icon({ name, size = 20, title }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden={title ? undefined : true} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d={PATHS[name]} />
    </svg>
  );
}
