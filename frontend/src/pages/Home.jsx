import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Blob from '../components/Blob.jsx';
import Photo, { PhotoNote } from '../components/Photo.jsx';

// Portada mínima: se entiende en menos de 30 segundos y lleva a una de tres acciones.
const HERO_IMG = '/hero.svg';

const STEPS = [
  ['chat', 'tomato', -6, 'Dinos qué necesitas', 'Presupuesto y días.'],
  ['spark', 'saffron', 5, 'La IA te propone', 'Una cesta de vendedores locales.'],
  ['card', 'olive', -4, 'Pagas una sola vez', 'Un carrito, un total.'],
  ['truck', 'peach', 6, 'Lo recibes todo junto', 'En una única entrega.'],
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero__img" src={HERO_IMG} alt="Ilustración de un campo con olivos y una caja de fruta y verdura fresca" />
        <div className="container hero__content">
          <p className="eyebrow hero__eyebrow">Marketplace de alimentación local</p>
          <h1 id="hero-title">Planifica tu comida. Ahorra. <span className="hero__accent">Come como en casa.</span></h1>
          <p className="lead">Productos de varios vendedores locales en una sola compra y una sola entrega.</p>
          <div className="hero__actions">
            <Link to="/comprar" className="btn btn-cta btn-lg">Quiero comprar <Icon name="arrow" size={18} /></Link>
            <Link to="/vender" className="btn btn-light btn-lg">Quiero vender</Link>
            <a href="#como" className="btn btn-link-light btn-lg">Cómo funciona</a>
          </div>
        </div>
      </section>

      <section className="section band-plain" id="como" aria-labelledby="como-title">
        <div className="container">
          <h2 id="como-title" className="center">Así de fácil</h2>
          <ol className="steps-visual">
            {STEPS.map(([icon, tone, tilt, t, d], i) => (
              <li key={t}>
                <Blob icon={icon} tone={tone} size={84} tilt={tilt} />
                <h3><span className={`step-n step-n--${tone}`}>{i + 1}</span> {t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section band-sage" aria-labelledby="local">
        <div className="container">
          <h2 id="local" className="center">Producto de cerca</h2>
          <p className="center lead lead--center">De agricultores, panaderías, granjas y fruterías de Málaga, Sevilla y Granada.</p>
          <div className="mosaic">
            <figure className="mosaic__big">
              <Photo id="market" alt="Puesto de mercado con fruta y verdura" />
              <figcaption>Fruta y verdura de temporada</figcaption>
            </figure>
            <figure>
              <Photo id="bakery" alt="Estanterías de una panadería con pan" />
              <figcaption>Pan del día</figcaption>
            </figure>
            <figure>
              <Photo id="farm" alt="Agricultores recogiendo verdura en el campo" />
              <figcaption>Directo del campo</figcaption>
            </figure>
          </div>
          <PhotoNote />
        </div>
      </section>

      <section className="section band-forest" aria-labelledby="zonas">
        <div className="container">
          <h2 id="zonas" className="center">¿Qué quieres hacer?</h2>
          <div className="zones">
            <Link to="/comprar" className="zone zone--buy">
              <Blob icon="basket" tone="tomato" size={72} tilt={-5} />
              <h3>Quiero comprar</h3>
              <p>Dinos tu presupuesto y tus días. Te proponemos la cesta.</p>
              <span className="zone__go">Empezar <Icon name="arrow" size={18} /></span>
            </Link>
            <Link to="/vender" className="zone zone--sell">
              <Blob icon="store" tone="olive" size={72} tilt={5} />
              <h3>Quiero vender</h3>
              <p>Llega a nuevos clientes. Nosotros recogemos y entregamos.</p>
              <span className="zone__go">Solicitar el alta <Icon name="arrow" size={18} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
