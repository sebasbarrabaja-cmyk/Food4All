import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Blob from '../components/Blob.jsx';
import Status from '../components/Status.jsx';
import Photo, { PhotoNote } from '../components/Photo.jsx';
import { NETWORKS } from '../data/social.js';

// Comunidad: por qué la cuidamos (parte documental) y dónde encontrarnos (redes).
const WHY = [
  ['users', 'tomato', -5, 'Aprendemos unos de otros', 'Quien empieza a cocinar fuera de casa aprende más de una receta real, con presupuesto real, que de cualquier guía.'],
  ['store', 'saffron', 4, 'Los productores tienen cara', 'Conocer a quien cultiva o amasa lo que compras es la base de la confianza en lo local.'],
  ['recycle', 'olive', -3, 'Menos comida a la basura', 'Ideas para aprovechar lo que sobra y qué consumir primero: el desperdicio se reduce entre todos.'],
  ['chat', 'peach', 5, 'Decidimos con vosotros', 'Lo que la comunidad pida y opine guía lo que construimos después. Muchas decisiones siguen abiertas.'],
];

const POSTS = [
  ['p11', 'Receta de la semana', 'Pisto con verdura de la vega en 20 minutos'],
  ['p5', 'Cocina para varios días', 'Una olla de lentejas, cuatro comidas resueltas'],
  ['bakery', 'Conoce al productor', 'Un día en un horno de barrio'],
];

const PILLARS = [
  ['pot', 'Receta de la semana', 'Con productos de temporada de los vendedores locales y pensada para cocinar poco.'],
  ['leaf', 'Temporada', 'Qué está en su mejor momento cada mes en Málaga, Sevilla y Granada.'],
  ['store', 'Conoce al productor', 'Historias cortas de huertas, granjas, obradores y fruterías.'],
  ['recycle', 'Aprovecha lo que sobra', 'Trucos para conservar, congelar y reutilizar sin tirar comida.'],
];

const JOIN = [
  ['Síguenos', 'En la red que más uses. Publicaremos lo mismo adaptado a cada una.'],
  ['Comparte tu plato', 'Etiquétanos cuando cocines con producto local. Las mejores recetas se publican con tu nombre.'],
  ['Propón productores', 'Si conoces una huerta o un obrador que debería estar en FOOD4ALL, cuéntanoslo.'],
  ['Opina', 'Encuestas y preguntas abiertas sobre lo que todavía está por decidir.'],
];

const RULES = [
  'Respeto en los comentarios: aquí se aprende a cocinar, no se juzga.',
  'Sin publicidad encubierta: el contenido patrocinado siempre se marca como tal.',
  'Las alergias se toman en serio: cada receta indica sus alérgenos.',
  'Nada de promesas de salud ni dietas milagro.',
];

export default function Comunidad() {
  return (
    <>
      <section className="section community-hero" style={{ borderTop: 0 }} aria-labelledby="com-title">
        <div className="container split">
          <div>
            <p className="eyebrow">Comunidad FOOD4ALL</p>
            <h1 id="com-title">Comer como en casa <span className="underline-doodle">se aprende juntos</span></h1>
            <p className="lead">
              FOOD4ALL no es solo una tienda: queremos reunir a quienes cocinan, a quienes producen y a quienes
              están aprendiendo a organizar su comida. Recetas, temporada y trucos, en nuestras redes.
            </p>
            <div className="hero__actions">
              <a href="#redes" className="btn btn-cta btn-lg">Ver nuestras redes <Icon name="arrow" size={18} /></a>
              <a href="#por-que" className="btn btn-ghost btn-lg">Por qué nos importa</a>
            </div>
          </div>
          <div className="post-stack" aria-label="Ejemplos de publicaciones">
            {POSTS.map(([img, tag, title], i) => (
              <article key={title} className={`post post--${i + 1}`}>
                <Photo id={img} alt="" className="post__img" />
                <div className="post__body">
                  <span className="post__tag">{tag}</span>
                  <h3>{title}</h3>
                </div>
              </article>
            ))}
            <p className="post-stack__note"><Status kind="ejemplo">Publicaciones de ejemplo</Status></p>
          </div>
        </div>
      </section>

      <section className="section band-sage" id="por-que" aria-labelledby="why-title">
        <div className="container">
          <p className="eyebrow center">Por qué es importante para nosotros</p>
          <h2 id="why-title" className="center">Sin comunidad, lo local no funciona</h2>
          <p className="center lead lead--center">
            Un marketplace de producto local depende de la confianza y del boca a boca más que de la publicidad.
            Por eso la comunidad es parte del proyecto desde el primer día, no un añadido.
          </p>
          <div className="why-grid">
            {WHY.map(([icon, tone, tilt, t, d]) => (
              <div key={t} className="why">
                <Blob icon={icon} tone={tone} size={64} tilt={tilt} />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-plain" aria-labelledby="pillars-title">
        <div className="container split">
          <div>
            <p className="eyebrow">Qué vamos a publicar</p>
            <h2 id="pillars-title">Cocina fácil, de temporada y de cerca</h2>
            <p className="muted">Contenido útil para comer mejor con poco tiempo y poco presupuesto. La frecuencia de publicación está por definir.</p>
            <p><Status kind="pendiente">Calendario de publicaciones por definir</Status></p>
          </div>
          <ul className="pillars">
            {PILLARS.map(([icon, t, d]) => (
              <li key={t}>
                <span className="pillars__icon"><Icon name={icon} size={24} /></span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band-peach" id="redes" aria-labelledby="redes-title">
        <div className="container">
          <p className="eyebrow center">Nuestras redes</p>
          <h2 id="redes-title" className="center">Encuéntranos donde ya estás</h2>
          <p className="center lead lead--center">Las cuentas todavía no están abiertas. En cuanto lo estén, aparecerán aquí enlazadas.</p>
          <ul className="network-grid">
            {NETWORKS.map((n) => {
              const inner = (
                <>
                  <span className={`network__icon network__icon--${n.tone}`}><Icon name={n.id} size={30} /></span>
                  <h3>{n.name}</h3>
                  <p className="network__handle">{n.handle ?? 'Cuenta por crear'}</p>
                  <p>{n.what}</p>
                  <span className="network__go">
                    {n.url ? <>Seguir <Icon name="arrow" size={16} /></> : 'Próximamente'}
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
            <p className="eyebrow">Cómo participar</p>
            <h2 id="join-title">Cuatro formas de unirte</h2>
            <ol className="steps">
              {JOIN.map(([t, d]) => <li key={t}><div><h3>{t}</h3><p>{d}</p></div></li>)}
            </ol>
          </div>
          <div className="yesno yesno--yes rules">
            <h3><Icon name="heart" size={20} /> Normas de la comunidad</h3>
            <ul className="checklist">
              {RULES.map((r) => <li key={r}><Icon name="check" size={18} /><span>{r}</span></li>)}
            </ul>
          </div>
        </div>
        <div className="container"><PhotoNote /></div>
      </section>

      <section className="section band-forest" aria-labelledby="com-cta">
        <div className="container center">
          <h2 id="com-cta">Empieza por tu próxima compra</h2>
          <p className="lead lead--center" style={{ color: 'var(--forest-text)' }}>La comunidad crece con cada cesta de producto local.</p>
          <div className="hero__actions" style={{ justifyContent: 'center' }}>
            <Link to="/comprar" className="btn btn-cta btn-lg">Quiero comprar <Icon name="arrow" size={18} /></Link>
            <Link to="/vender" className="btn btn-light btn-lg">Quiero vender</Link>
          </div>
        </div>
      </section>
    </>
  );
}
