// Diagrama del modelo: varios vendedores → hub de FOOD4ALL → una sola entrega.
// SVG en línea con los tokens de color, para que funcione en modo claro y oscuro.
const VENDORS = [
  ['Agricultor', 'fruta y verdura'],
  ['Panadería', 'pan del día'],
  ['Granja', 'huevos y lácteos'],
];

export default function FlowDiagram() {
  return (
    <figure className="flow-diagram">
      <svg viewBox="0 0 1080 300" role="img" aria-labelledby="fd-title fd-desc">
        <title id="fd-title">Cómo llega tu pedido</title>
        <desc id="fd-desc">
          Tres vendedores locales preparan su parte. FOOD4ALL la recoge en origen, la consolida y verifica en un hub
          y te entrega todo en un único pedido.
        </desc>
        <defs>
          <marker id="fd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10Z" fill="var(--text-soft)" />
          </marker>
        </defs>

        {/* Vendedores */}
        {VENDORS.map(([name, what], i) => {
          const y = 30 + i * 90;
          return (
            <g key={name}>
              <rect x="10" y={y} width="220" height="64" rx="6" fill="var(--surface)" stroke="var(--border)" />
              <circle cx="42" cy={y + 32} r="12" fill={['var(--tomato)', 'var(--saffron)', 'var(--olive)'][i]} />
              <text x="66" y={y + 28} className="fd-strong">{name}</text>
              <text x="66" y={y + 48} className="fd-soft">{what}</text>
              <path d={`M232 ${y + 32} C 300 ${y + 32}, 320 150, 388 150`} fill="none" stroke="var(--text-soft)" strokeWidth="1.5" markerEnd="url(#fd-arrow)" />
            </g>
          );
        })}
        <text x="300" y="22" className="fd-label">recogida en origen</text>

        {/* Hub */}
        <rect x="392" y="80" width="300" height="140" rx="8" fill="var(--forest)" />
        <text x="542" y="122" textAnchor="middle" className="fd-hub-title">Hub FOOD4ALL</text>
        <text x="542" y="152" textAnchor="middle" className="fd-hub">consolida · verifica · empaqueta</text>
        <text x="542" y="196" textAnchor="middle" className="fd-hub-small">ubicación por definir</text>

        {/* Entrega */}
        <path d="M694 150 H 800" fill="none" stroke="var(--text-soft)" strokeWidth="1.5" markerEnd="url(#fd-arrow)" />
        <text x="747" y="138" textAnchor="middle" className="fd-label">una entrega</text>
        <rect x="806" y="104" width="264" height="92" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="938" y="142" textAnchor="middle" className="fd-strong">Tu pedido</text>
        <text x="938" y="166" textAnchor="middle" className="fd-soft">un pago · un paquete</text>
      </svg>
      <figcaption className="muted small">
        Los vendedores no gestionan envíos: FOOD4ALL coordina toda la logística. Esquema conceptual.
      </figcaption>
    </figure>
  );
}
