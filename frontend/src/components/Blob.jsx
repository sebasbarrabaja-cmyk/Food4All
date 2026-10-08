import Icon from './Icon.jsx';

// Icono sobre una mancha de color (patrón de Wetaca/Glovo, con nuestra paleta).
// tone: tomato | saffron | olive | peach | green
export default function Blob({ icon, tone = 'green', size = 64, tilt = 0 }) {
  return (
    <span className={`blob blob--${tone}`} style={{ width: size, height: size, transform: `rotate(${tilt}deg)` }} aria-hidden="true">
      <span style={{ transform: `rotate(${-tilt}deg)`, display: 'grid' }}>
        <Icon name={icon} size={Math.round(size * 0.48)} />
      </span>
    </span>
  );
}
