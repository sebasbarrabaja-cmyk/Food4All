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
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 4 4',
  copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
  pot: 'M4 10h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-3Zm4-3c0-1 1-1 1-2m3 2c0-1 1-1 1-2m3 2c0-1 1-1 1-2',
  recycle: 'M7 7h10l-3-3m3 3-3 3M17 17H7l3 3m-3-3 3-3',
  flag: 'M5 21V4m0 0h11l-2 4 2 4H5',
  doc: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  chart: 'M4 20V11m6 9V5m6 15v-7m-14 7h20',
  scale: 'M12 4v16M8 20h8M5 8h14M5 8l-3 6a3 3 0 0 0 6 0L5 8Zm14 0-3 6a3 3 0 0 0 6 0l-3-6Z',
  play: 'M8 5v14l11-7L8 5Z',
  // Redes sociales: siluetas simplificadas en el mismo trazo que el resto
  instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5-9.5h.01',
  tiktok: 'M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.5 4.5 5 4.5',
  youtube: 'M3 8.5C3 6 4.5 5 7 5h10c2.5 0 4 1 4 3.5v7c0 2.5-1.5 3.5-4 3.5H7c-2.5 0-4-1-4-3.5v-7ZM10 9v6l5-3-5-3Z',
  pinterest: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-1.6-3.5 1.9-7.5M11 13.6c.5.8 1.3 1.1 2.2 1.1 1.9 0 3.2-1.8 3.2-3.9 0-2.2-1.9-3.7-4.3-3.7-2.6 0-4.4 1.8-4.4 4 0 .9.3 1.6.9 2',
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
