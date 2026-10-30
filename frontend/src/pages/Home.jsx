import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../components/Icon.jsx';
import Blob from '../components/Blob.jsx';
import Photo, { PhotoNote } from '../components/Photo.jsx';
import SocialLinks from '../components/SocialLinks.jsx';

// Portada mínima: se entiende en menos de 30 segundos y lleva a una de tres acciones.
// Textos en i18n (home.*); aquí solo el icono, el color y la inclinación de cada paso.
const HERO_IMG = '/hero.svg';

const STEPS = [['chat', 'tomato', -6], ['spark', 'saffron', 5], ['card', 'olive', -4], ['truck', 'peach', 6]];

// Cinta de producto bajo el hero: da movimiento sin tapar nada (se pausa al pasar el ratón).
// Colores en el mismo orden que home.cinta.
const RIBBON = ['tomato', 'saffron', 'olive', 'peach', 'saffron', 'olive', 'tomato', 'olive', 'peach', 'tomato'];

export default function Home() {
  const { t } = useTranslation();
  const pasos = t('home.pasos', { returnObjects: true });
  const cinta = t('home.cinta', { returnObjects: true });
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero__img" src={HERO_IMG} alt={t('home.imagen')} />
        <div className="container hero__content">
          <p className="eyebrow hero__eyebrow">{t('home.antetitulo')}</p>
          <h1 id="hero-title">{t('home.titulo')} <span className="hero__accent">{t('home.tituloAcento')}</span></h1>
          <p className="lead">{t('home.entradilla')}</p>
          <div className="hero__actions">
            <Link to="/comprar" className="btn btn-cta btn-lg">{t('comun.quieroComprar')} <Icon name="arrow" size={18} /></Link>
            <Link to="/vender" className="btn btn-light btn-lg">{t('comun.quieroVender')}</Link>
            <a href="#como" className="btn btn-link-light btn-lg">{t('comun.comoFunciona')}</a>
          </div>
        </div>
      </section>

      <div className="ribbon" aria-hidden="true">
        <div className="ribbon__track">
          {[0, 1].map((copy) => (
            <span key={copy} className="ribbon__set">
              {cinta.map((item, i) => <span key={item} className="ribbon__item"><i className={`dot dot--${RIBBON[i]}`} />{item}</span>)}
            </span>
          ))}
        </div>
      </div>

      <section className="section band-plain" id="como" aria-labelledby="como-title">
        <div className="container">
          <h2 id="como-title" className="center"><span className="underline-doodle">{t('home.asiDeFacil')}</span></h2>
          <ol className="steps-visual">
            {STEPS.map(([icon, tone, tilt], i) => (
              <li key={icon}>
                <Blob icon={icon} tone={tone} size={84} tilt={tilt} />
                <h3><span className={`step-n step-n--${tone}`}>{i + 1}</span> {pasos[i].t}</h3>
                <p>{pasos[i].d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section band-sage" aria-labelledby="local">
        <div className="container">
          <h2 id="local" className="center"><span className="underline-doodle">{t('home.local.titulo')}</span></h2>
          <p className="center lead lead--center">{t('home.local.texto')}</p>
          <div className="mosaic">
            <figure className="mosaic__big">
              <Photo id="market" alt={t('home.local.mercadoAlt')} />
              <figcaption>{t('home.local.mercado')}</figcaption>
            </figure>
            <figure>
              <Photo id="bakery" alt={t('home.local.panAlt')} />
              <figcaption>{t('home.local.pan')}</figcaption>
            </figure>
            <figure>
              <Photo id="farm" alt={t('home.local.campoAlt')} />
              <figcaption>{t('home.local.campo')}</figcaption>
            </figure>
          </div>
          <PhotoNote />
        </div>
      </section>

      <section className="section band-mustard" aria-labelledby="comunidad">
        <div className="container community-teaser">
          <div>
            <p className="eyebrow">{t('home.comunidad.antetitulo')}</p>
            <h2 id="comunidad">{t('home.comunidad.titulo')}</h2>
            <p className="muted">{t('home.comunidad.texto')}</p>
            <div className="community-teaser__actions">
              <Link to="/comunidad" className="btn btn-primary">{t('home.comunidad.boton')} <Icon name="arrow" size={18} /></Link>
              <SocialLinks className="social-links--big" />
            </div>
          </div>
          <div className="community-teaser__art" aria-hidden="true">
            <Blob icon="pot" tone="tomato" size={96} tilt={-8} />
            <Blob icon="heart" tone="saffron" size={72} tilt={6} />
            <Blob icon="users" tone="olive" size={84} tilt={-4} />
            <Blob icon="leaf" tone="peach" size={64} tilt={10} />
          </div>
        </div>
      </section>

      <section className="section band-forest" aria-labelledby="zonas">
        <div className="container">
          <h2 id="zonas" className="center">{t('home.zonas.titulo')}</h2>
          <div className="zones">
            <Link to="/comprar" className="zone zone--buy">
              <Blob icon="basket" tone="tomato" size={72} tilt={-5} />
              <h3>{t('comun.quieroComprar')}</h3>
              <p>{t('home.zonas.comprar')}</p>
              <span className="zone__go">{t('home.zonas.empezar')} <Icon name="arrow" size={18} /></span>
            </Link>
            <Link to="/vender" className="zone zone--sell">
              <Blob icon="store" tone="olive" size={72} tilt={5} />
              <h3>{t('comun.quieroVender')}</h3>
              <p>{t('home.zonas.vender')}</p>
              <span className="zone__go">{t('home.zonas.solicitarAlta')} <Icon name="arrow" size={18} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
