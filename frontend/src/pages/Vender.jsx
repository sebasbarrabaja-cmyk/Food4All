import { useState, cloneElement } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Status from '../components/Status.jsx';
import ZoneTabs, { SELLER_TABS } from '../components/ZoneTabs.jsx';
import Blob from '../components/Blob.jsx';
import Icon from '../components/Icon.jsx';
import { dato } from '../i18n/index.js';

// Recorrido del vendedor (sección 3.3), beneficios y papeles: textos en i18n (vender.*).
// Aquí solo el icono, el color y la inclinación de cada beneficio.
const BENEFITS = [['users', 'tomato', -5], ['eye', 'saffron', 4], ['store', 'olive', -3], ['truck', 'peach', 5]];

// Valores que espera el servidor; el texto de cada uno, en vender.form.tipos.
const TYPES = ['agricultor', 'granja', 'fruteria', 'panaderia', 'obrador', 'despensa', 'cocina'];
const ZONES = [['malaga', 'Málaga'], ['sevilla', 'Sevilla'], ['granada', 'Granada']];
// Longitud máxima de cada campo: los mismos límites que MAX_LEN de backend/server.js.
const MAX_LEN = { businessName: 120, email: 120, phone: 120, sanitaryRegistry: 300, offer: 1000, pickupHours: 120 };
const EMPTY = { businessName: '', type: '', zone: '', email: '', phone: '', sanitaryRegistry: '', offer: '', pickupHours: '', privacy: false };

function SellerForm() {
  const { t } = useTranslation();
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
      // Los errores de validación vienen del servidor y, de momento, solo en español.
      if (!res.ok) { setErrors(data.errors ?? {}); setFormError(data.error ?? ''); setState('idle'); return; }
      setErrors({}); setForm(EMPTY); setState('done');
    } catch {
      setFormError(t('vender.form.sinConexion')); setState('idle');
    }
  }

  if (state === 'done') {
    return (
      <div className="panel" role="status">
        <h3>{t('vender.form.recibida')}</h3>
        <p className="muted">{t('vender.form.estado')} <strong>{t('vender.form.estadoRecibida')}</strong>{t('vender.form.revisara')}</p>
        <button className="btn btn-ghost" onClick={() => setState('idle')}>{t('vender.form.otra')}</button>
      </div>
    );
  }

  // La ayuda y el error se enlazan al campo (aria-describedby) para que el lector de pantalla los lea.
  const field = (k, label, input, hint) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {cloneElement(input, { 'aria-describedby': [hint && `${k}-hint`, errors[k] && `${k}-err`].filter(Boolean).join(' ') || undefined })}
      {hint && <span className="hint" id={`${k}-hint`}>{hint}</span>}
      {errors[k] && <span className="error" id={`${k}-err`} role="alert">{errors[k]}</span>}
    </div>
  );
  const inv = (k) => ({ id: k, maxLength: MAX_LEN[k], 'aria-invalid': Boolean(errors[k]) });

  return (
    <form className="panel" onSubmit={submit} noValidate>
      <p className="muted small">{t('vender.form.obligatorios')}</p>
      {field('businessName', t('vender.form.nombre'), <input {...inv('businessName')} value={form.businessName} onChange={set('businessName')} required />)}
      <div className="form-row">
        {field('type', t('vender.form.tipo'), (
          <select {...inv('type')} value={form.type} onChange={set('type')} required>
            <option value="">{t('vender.form.elige')}</option>
            {TYPES.map((v) => <option key={v} value={v}>{t(`vender.form.tipos.${v}`)}</option>)}
          </select>
        ))}
        {field('zone', t('vender.form.zona'), (
          <select {...inv('zone')} value={form.zone} onChange={set('zone')} required>
            <option value="">{t('vender.form.elige')}</option>
            {ZONES.map(([v, l]) => <option key={v} value={v}>{dato(t, 'zonas', l)}</option>)}
          </select>
        ))}
      </div>
      <div className="form-row">
        {field('email', t('vender.form.correo'), <input {...inv('email')} type="email" value={form.email} onChange={set('email')} required />)}
        {field('phone', t('vender.form.telefono'), <input {...inv('phone')} type="tel" value={form.phone} onChange={set('phone')} />)}
      </div>
      {field('sanitaryRegistry', t('vender.form.registro'), <input {...inv('sanitaryRegistry')} value={form.sanitaryRegistry} onChange={set('sanitaryRegistry')} required />,
        t('vender.form.registroAyuda'))}
      {field('offer', t('vender.form.oferta'), <textarea {...inv('offer')} value={form.offer} onChange={set('offer')} required />, t('vender.form.ofertaAyuda'))}
      {field('pickupHours', t('vender.form.horarios'), <input {...inv('pickupHours')} value={form.pickupHours} onChange={set('pickupHours')} placeholder={t('vender.form.horariosEjemplo')} />)}
      {/* Consentimiento (RGPD): el servidor también lo comprueba y guarda cuándo se aceptó (privacyAcceptedAt) */}
      <div className="field-check">
        <input type="checkbox" id="privacy" checked={form.privacy} onChange={(e) => { setForm({ ...form, privacy: e.target.checked }); setErrors({ ...errors, privacy: undefined }); }}
          aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? 'privacy-err' : undefined} required />
        <label htmlFor="privacy">{t('vender.form.privacidad')}</label>
        {errors.privacy && <span className="error" id="privacy-err" role="alert">{errors.privacy}</span>}
      </div>
      {formError && <p className="error" role="alert" style={{ color: 'var(--danger)' }}>{formError}</p>}
      <button className="btn btn-cta" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? t('vender.form.enviando') : t('vender.form.enviar')}
      </button>
    </form>
  );
}

export default function Vender() {
  const { t } = useTranslation();
  const pasos = t('vender.pasos', { returnObjects: true });
  const beneficios = t('vender.ganas.beneficios', { returnObjects: true });
  const roles = t('vender.papeles.roles', { returnObjects: true });
  const requisitos = t('vender.papeles.listaRequisitos', { returnObjects: true });
  return (
    <>
      <ZoneTabs tabs={SELLER_TABS} label="comun.pestanasVendedores" />
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container split">
          <div>
            <p className="eyebrow">{t('vender.antetitulo')}</p>
            <h1>{t('vender.titulo')}</h1>
            <p className="lead">{t('vender.entradilla')}</p>
            <p className="muted">{t('vender.buscando')}</p>
            <Link to="/vender#alta" className="btn btn-cta" style={{ marginTop: 8 }}>{t('vender.solicitarAlta')} <Icon name="arrow" size={18} /></Link>
          </div>
          <ol className="steps">
            {pasos.map(({ t: titulo, d }) => (
              <li key={titulo}><div><h3>{titulo}</h3><p>{d}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{t('vender.ganas.antetitulo')}</p>
          <h2>{t('vender.ganas.titulo')}</h2>
          <div className="benefits">
            {BENEFITS.map(([icon, tone, tilt], i) => (
              <div key={icon}>
                <span className="benefits__icon"><Blob icon={icon} tone={tone} size={52} tilt={tilt} /></span>
                <h3>{beneficios[i].t}</h3>
                <p className="muted">{beneficios[i].d}</p>
              </div>
            ))}
          </div>
          <p className="muted small">{t('vender.ganas.hipotesisA')} <Status kind="hipotesis" /> {t('vender.ganas.hipotesisB')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{t('vender.papeles.antetitulo')}</p>
          <h2>{t('vender.papeles.titulo')}</h2>
          <div className="roles">
            {roles.map(({ t: who, items }) => (
              <div key={who}>
                <h3>{who}</h3>
                <ul className="divided">{items.map((x) => <li key={x} className="muted">{x}</li>)}</ul>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: 32 }}>{t('vender.papeles.requisitos')}</h3>
          <ul className="divided">
            {requisitos.map((r) => <li key={r}>{r}</li>)}
            <li className="muted">{t('vender.papeles.homologacion')} <Status kind="pendiente" /></li>
          </ul>
          <p className="muted small" style={{ marginTop: 12 }}>
            {t('vender.papeles.comision')} <Status kind="pendiente" />
            {' '}{t('vender.papeles.patrocinio')}
          </p>
        </div>
      </section>

      <section className="section" id="alta">
        <div className="container split">
          <div>
            <p className="eyebrow">{t('vender.alta.antetitulo')}</p>
            <h2>{t('vender.alta.titulo')}</h2>
            <p className="muted">{t('vender.alta.texto')}</p>
          </div>
          <SellerForm />
        </div>
      </section>

      <section className="section" id="panel-ejemplo">
        <div className="container">
          <p className="eyebrow">{t('vender.panel.antetitulo')}</p>
          <h2>{t('vender.panel.titulo')}</h2>
          <p className="muted">{t('vender.panel.texto')}</p>
          <Link to="/vender/panel" className="btn btn-primary">{t('vender.panel.boton')}</Link>
        </div>
      </section>
    </>
  );
}
