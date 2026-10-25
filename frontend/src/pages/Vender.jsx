import { useState } from 'react';
import { Link } from 'react-router-dom';
import Status from '../components/Status.jsx';
import ZoneTabs, { SELLER_TABS } from '../components/ZoneTabs.jsx';
import Blob from '../components/Blob.jsx';
import Icon from '../components/Icon.jsx';

// Recorrido del vendedor (sección 3.3).
const STEPS = [
  ['Solicita el alta', 'Rellena el formulario con tu negocio, zona, registro sanitario y horarios de recogida.'],
  ['Verificación', 'Revisamos que cumples los estándares mínimos. Verás el estado: recibida, en revisión, verificada o rechazada.'],
  ['Sube tu catálogo', 'Cada producto necesita ficha completa: origen, precio, unidad, ingredientes, alérgenos, tipo de fecha y conservación.'],
  ['Recibe tu parte del pedido', 'Solo ves tus productos, cantidades y franja de recogida. Confirmas o avisas de una falta.'],
  ['Prepara y lo recogemos', 'Lo dejas listo con número de pedido y lote. FOOD4ALL lo recoge en origen; tú no gestionas envíos.'],
  ['Verificación en el hub', 'Comprobamos el producto contra el pedido. Si algo no cumple, se retira y se avisa.'],
  ['Liquidación', 'Ves tus ventas y la comisión de FOOD4ALL.'],
];

const BENEFITS = [
  ['users', 'tomato', -5, 'Nuevos clientes', 'Llegas a personas que planifican su compra y buscan producto local.'],
  ['eye', 'saffron', 4, 'Más visibilidad', 'Tu negocio aparece junto a otros vendedores de tu zona, con ficha propia.'],
  ['store', 'olive', -3, 'Un canal adicional', 'Sigues vendiendo como siempre; FOOD4ALL suma pedidos, no los sustituye.'],
  ['truck', 'peach', 5, 'Logística centralizada', 'Recogemos en origen y entregamos nosotros. Tú solo preparas tu parte.'],
];

const ROLES = [
  ['El cliente', ['Decide qué necesita: presupuesto, días y preferencias', 'Revisa y ajusta la cesta', 'Paga una sola vez', 'Recibe un único pedido']],
  ['El vendedor', ['Mantiene su catálogo y disponibilidad', 'Prepara su parte de cada pedido', 'La deja lista para la recogida', 'No gestiona envíos ni cobra al consumidor']],
  ['FOOD4ALL', ['Pone la plataforma y la IA', 'Reúne los pedidos de varios vendedores', 'Recoge, consolida y verifica en el hub', 'Empaqueta y entrega']],
];

const TYPES = [
  ['agricultor', 'Agricultor'], ['granja', 'Granja'], ['fruteria', 'Frutería'], ['panaderia', 'Panadería'],
  ['obrador', 'Obrador'], ['despensa', 'Despensa'], ['cocina', 'Cocina local'],
];
const ZONES = [['malaga', 'Málaga'], ['sevilla', 'Sevilla'], ['granada', 'Granada']];
// Longitud máxima de cada campo: los mismos límites que MAX_LEN de backend/server.js.
const MAX_LEN = { businessName: 120, email: 120, phone: 120, sanitaryRegistry: 120, offer: 1000, pickupHours: 120 };
const EMPTY = { businessName: '', type: '', zone: '', email: '', phone: '', sanitaryRegistry: '', offer: '', pickupHours: '', privacy: false };

function SellerForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | done
  const [formError, setFormError] = useState(''); // error general: sin conexión o demasiados envíos

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setState('sending');
    setFormError('');
    try {
      const res = await fetch('/api/sellers/apply', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setErrors(data.errors ?? {}); setFormError(data.error ?? ''); setState('idle'); return; }
      setErrors({}); setForm(EMPTY); setState('done');
    } catch {
      setFormError('No se pudo enviar. Comprueba que el servidor está en marcha.'); setState('idle');
    }
  }

  if (state === 'done') {
    return (
      <div className="panel" role="status">
        <h3>Solicitud recibida</h3>
        <p className="muted">Estado: <strong>recibida</strong>. El equipo la revisará y te escribirá al correo indicado.</p>
        <button className="btn btn-ghost" onClick={() => setState('idle')}>Enviar otra solicitud</button>
      </div>
    );
  }

  const field = (k, label, input, hint) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {input}
      {hint && <span className="hint">{hint}</span>}
      {errors[k] && <span className="error" id={`${k}-err`} role="alert">{errors[k]}</span>}
    </div>
  );
  const inv = (k) => ({ id: k, maxLength: MAX_LEN[k], 'aria-invalid': Boolean(errors[k]), 'aria-describedby': errors[k] ? `${k}-err` : undefined });

  return (
    <form className="panel" onSubmit={submit} noValidate>
      <p className="muted small">Todos los campos son obligatorios salvo los marcados como opcionales.</p>
      {field('businessName', 'Nombre del negocio', <input {...inv('businessName')} value={form.businessName} onChange={set('businessName')} required />)}
      <div className="form-row">
        {field('type', 'Tipo', (
          <select {...inv('type')} value={form.type} onChange={set('type')} required>
            <option value="">Elige…</option>
            {TYPES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        ))}
        {field('zone', 'Zona', (
          <select {...inv('zone')} value={form.zone} onChange={set('zone')} required>
            <option value="">Elige…</option>
            {ZONES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        ))}
      </div>
      <div className="form-row">
        {field('email', 'Correo de contacto', <input {...inv('email')} type="email" value={form.email} onChange={set('email')} required />)}
        {field('phone', 'Teléfono (opcional)', <input {...inv('phone')} type="tel" value={form.phone} onChange={set('phone')} />)}
      </div>
      {field('sanitaryRegistry', 'Número de registro sanitario', <input {...inv('sanitaryRegistry')} value={form.sanitaryRegistry} onChange={set('sanitaryRegistry')} required />)}
      {field('offer', '¿Qué ofreces?', <textarea {...inv('offer')} value={form.offer} onChange={set('offer')} required />, 'Tipo de productos, temporada, volumen aproximado.')}
      {field('pickupHours', 'Horarios de recogida posibles (opcional)', <input {...inv('pickupHours')} value={form.pickupHours} onChange={set('pickupHours')} placeholder="Ej.: lunes a viernes, 8:00–11:00" />)}
      {/* Consentimiento (RGPD): el servidor también lo comprueba; no se guarda aparte porque toda alta guardada lo ha aceptado */}
      <div className="field-check">
        <input type="checkbox" id="privacy" checked={form.privacy} onChange={(e) => { setForm({ ...form, privacy: e.target.checked }); setErrors({ ...errors, privacy: undefined }); }}
          aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? 'privacy-err' : undefined} required />
        <label htmlFor="privacy">Acepto que se guarden estos datos solo para valorar el alta en esta demostración universitaria. No se comparten con nadie.</label>
        {errors.privacy && <span className="error" id="privacy-err" role="alert">{errors.privacy}</span>}
      </div>
      {formError && <p className="error" role="alert" style={{ color: 'var(--danger)' }}>{formError}</p>}
      <button className="btn btn-cta" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
      </button>
    </form>
  );
}

export default function Vender() {
  return (
    <>
      <ZoneTabs tabs={SELLER_TABS} label="Zona de vendedores" />
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container split">
          <div>
            <p className="eyebrow">Zona de vendedores</p>
            <h1>Solo somos un intermediario, no siete</h1>
            <p className="lead">Nuevos clientes, más alcance y un canal de venta adicional, con la logística centralizada por FOOD4ALL.</p>
            <p className="muted">Estamos buscando a los primeros vendedores. El proyecto aún no está pilotado.</p>
            <Link to="/vender#alta" className="btn btn-cta" style={{ marginTop: 8 }}>Solicitar el alta <Icon name="arrow" size={18} /></Link>
          </div>
          <ol className="steps">
            {STEPS.map(([t, d]) => (
              <li key={t}><div><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Qué ganas</p>
          <h2>Un canal más, sin ocuparte del reparto</h2>
          <div className="benefits">
            {BENEFITS.map(([icon, tone, tilt, t, d]) => (
              <div key={t}>
                <span className="benefits__icon"><Blob icon={icon} tone={tone} size={52} tilt={tilt} /></span>
                <h3>{t}</h3>
                <p className="muted">{d}</p>
              </div>
            ))}
          </div>
          <p className="muted small">Que el vendedor obtenga mejores condiciones que en canales con más intermediarios es una <Status kind="hipotesis" /> que todavía hay que validar.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Reparto de papeles</p>
          <h2>Quién hace qué</h2>
          <div className="roles">
            {ROLES.map(([who, items]) => (
              <div key={who}>
                <h3>{who}</h3>
                <ul className="divided">{items.map((x) => <li key={x} className="muted">{x}</li>)}</ul>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: 32 }}>Requisitos mínimos</h3>
          <ul className="divided">
            <li>Sin producto en mal estado ni obtenido de forma fraudulenta.</li>
            <li>Sin información oculta: fichas completas con ingredientes y alérgenos.</li>
            <li>Registro sanitario en vigor.</li>
            <li className="muted">Proceso detallado de homologación <Status kind="pendiente" /></li>
          </ul>
          <p className="muted small" style={{ marginTop: 12 }}>
            Comisión por venta: porcentaje, quién la asume y periodicidad de pagos <Status kind="pendiente" /> ·
            Visibilidad patrocinada opcional, siempre marcada y separada de las recomendaciones de la IA.
          </p>
        </div>
      </section>

      <section className="section" id="alta">
        <div className="container split">
          <div>
            <p className="eyebrow">Alta de vendedor</p>
            <h2>Solicita tu alta</h2>
            <p className="muted">Revisaremos tu solicitud. Los datos se usan solo para valorar el alta en esta demostración universitaria.</p>
          </div>
          <SellerForm />
        </div>
      </section>

      <section className="section" id="panel-ejemplo">
        <div className="container">
          <p className="eyebrow">Panel del vendedor</p>
          <h2>Así verías tu catálogo y tus pedidos</h2>
          <p className="muted">Catálogo con fichas completas, tu parte de cada pedido y la liquidación, con un vendedor de ejemplo.</p>
          <Link to="/vender/panel" className="btn btn-primary">Ver el panel de ejemplo</Link>
        </div>
      </section>
    </>
  );
}
