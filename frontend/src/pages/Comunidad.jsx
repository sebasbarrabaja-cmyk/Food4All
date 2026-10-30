import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../components/Icon.jsx';
import Blob from '../components/Blob.jsx';
import Status from '../components/Status.jsx';
import Photo, { PhotoNote } from '../components/Photo.jsx';
import { NETWORKS } from '../data/social.js';

// Comunidad: por qué la cuidamos (parte documental) y dónde encontrarnos (redes).
// Textos en i18n (comunidad.*); aquí solo fotos, iconos, colores e inclinaciones, en el mismo orden.
const WHY = [['users', 'tomato', -5], ['store', 'saffron', 4], ['recycle', 'olive', -3], ['chat', 'peach', 5]];
const POSTS = ['p11', 'p5', 'bakery'];
const PILLARS = ['pot', 'leaf', 'store', 'recycle'];

export default function Comunidad() {
  const { t } = useTranslation();
  const lista = (k) => t(`comunidad.${k}`, { returnObjects: true });
  const posts = lista('publicaciones');
  const razones = lista('porQue.razones');
  const pilares = lista('pilares.lista');
  return (
    <>
      <section className="section community-hero" style={{ borderTop: 0 }} aria-labelledby="com-title">
        <div className="container split">
          <div>
            <p className="eyebrow">{t('comunidad.antetitulo')}</p>
            <h1 id="com-title">{t('comunidad.titulo')} <span className="underline-doodle">{t('comunidad.tituloAcento')}</span></h1>
            <p className="lead">{t('comunidad.entradilla')}</p>
            <div className="hero__actions">
              <a href="#redes" className="btn btn-cta btn-lg">{t('comunidad.verRedes')} <Icon name="arrow" size={18} /></a>
              <a href="#por-que" className="btn btn-ghost btn-lg">{t('comunidad.porQueBoton')}</a>
            </div>
          </div>
          <div className="post-stack" aria-label={t('comunidad.ejemplos')}>
            {POSTS.map((img, i) => (
              <article key={img} className={`post post--${i + 1}`}>
                <Photo id={img} alt="" className="post__img" />
                <div className="post__body">
                  <span className="post__tag">{posts[i].tag}</span>
                  <h3>{posts[i].t}</h3>
                </div>
              </article>
            ))}
            <p className="post-stack__note"><Status kind="ejemplo">{t('comunidad.publicacionesEjemplo')}</Status></p>
          </div>
        </div>
      </section>

      <section className="section band-sage" id="por-que" aria-labelledby="why-title">
        <div className="container">
          <p className="eyebrow center">{t('comunidad.porQue.antetitulo')}</p>
          <h2 id="why-title" className="center">{t('comunidad.porQue.titulo')}</h2>
          <p className="center lead lead--center">{t('comunidad.porQue.texto')}</p>
          <div className="why-grid">
            {WHY.map(([icon, tone, tilt], i) => (
              <div key={icon} className="why">
                <Blob icon={icon} tone={tone} size={64} tilt={tilt} />
                <h3>{razones[i].t}</h3>
                <p>{razones[i].d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-plain" aria-labelledby="pillars-title">
        <div className="container split">
          <div>
            <p className="eyebrow">{t('comunidad.pilares.antetitulo')}</p>
            <h2 id="pillars-title">{t('comunidad.pilares.titulo')}</h2>
            <p className="muted">{t('comunidad.pilares.texto')}</p>
            <p><Status kind="pendiente">{t('comunidad.pilares.calendario')}</Status></p>
          </div>
          <ul className="pillars">
            {PILLARS.map((icon, i) => (
              <li key={icon}>
                <span className="pillars__icon"><Icon name={icon} size={24} /></span>
                <div><h3>{pilares[i].t}</h3><p>{pilares[i].d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band-peach" id="redes" aria-labelledby="redes-title">
        <div className="container">
          <p className="eyebrow center">{t('comunidad.redes.antetitulo')}</p>
          <h2 id="redes-title" className="center">{t('comunidad.redes.titulo')}</h2>
          <p className="center lead lead--center">{t('comunidad.redes.texto')}</p>
          <ul className="network-grid">
            {NETWORKS.map((n) => {
              const inner = (
                <>
                  <span className={`network__icon network__icon--${n.tone}`}><Icon name={n.id} size={30} /></span>
                  <h3>{n.name}</h3>
                  <p className="network__handle">{n.handle ?? t('comunidad.redes.porCrear')}</p>
                  <p>{t(`comunidad.redes.que.${n.id}`, { defaultValue: n.what })}</p>
                  <span className="network__go">
                    {n.url ? <>{t('comunidad.redes.seguir')} <Icon name="arrow" size={16} /></> : t('comunidad.redes.proximamente')}
                  </span>
                </>
              );
              return (
                <li key={n.id}>
                  {n.url
                    ? <a className="network" href={n.url} target="_blank" rel="noreferrer">{inner}</a>
                    : <div className="network network--soon">{inner}</div>}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section band-plain" aria-labelledby="join-title">
        <div className="container cols-2 join">
          <div>
            <p className="eyebrow">{t('comunidad.participar.antetitulo')}</p>
            <h2 id="join-title">{t('comunidad.participar.titulo')}</h2>
            <ol className="steps">
              {lista('participar.formas').map(({ t: titulo, d }) => <li key={titulo}><div><h3>{titulo}</h3><p>{d}</p></div></li>)}
            </ol>
          </div>
          <div className="yesno yesno--yes rules">
            <h3><Icon name="heart" size={20} /> {t('comunidad.participar.normas')}</h3>
            <ul className="checklist">
              {lista('participar.listaNormas').map((r) => <li key={r}><Icon name="check" size={18} /><span>{r}</span></li>)}
            </ul>
          </div>
        </div>
        <div className="container"><PhotoNote /></div>
      </section>

      <section className="section band-forest" aria-labelledby="com-cta">
        <div className="container center">
          <h2 id="com-cta">{t('comunidad.cta.titulo')}</h2>
          <p className="lead lead--center" style={{ color: 'var(--forest-text)' }}>{t('comunidad.cta.texto')}</p>
          <div className="hero__actions" style={{ justifyContent: 'center' }}>
            <Link to="/comprar" className="btn btn-cta btn-lg">{t('comun.quieroComprar')} <Icon name="arrow" size={18} /></Link>
            <Link to="/vender" className="btn btn-light btn-lg">{t('comun.quieroVender')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
