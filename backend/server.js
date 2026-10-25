import express from 'express';
import session from 'express-session';
import { randomBytes, randomUUID, timingSafeEqual } from 'node:crypto';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as store from './store.js';
import { getSubtasks, getMilestones } from './asana.js';
import { PROJECT } from './project.js';
import { hito2 } from './hito2.js';
import * as prompts from './prompts.js';
import { polishPrompt, agentReady, AgentError } from './agent.js';
import { ask } from './search.js';
import { limiter } from './limiter.js';

const app = express();
// 300 kB: los prompts del equipo (el documento maestro ocupa ~80 kB) viajan en JSON.
app.use(express.json({ limit: '300kb' }));

// Sin SESSION_SECRET (fase de desarrollo) se genera una clave al arrancar: funciona igual, pero las
// sesiones se pierden al reiniciar. Una clave fija y pública permitiría falsificar la cookie de admin.
let sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  sessionSecret = randomBytes(32).toString('hex');
  console.warn('Aviso: falta SESSION_SECRET en backend/.env; uso una clave temporal (la sesión de admin se pierde al reiniciar).');
}
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', maxAge: 1000 * 60 * 60 * 8 },
}));

// ---------- Público ----------
const SELLER_TYPES = ['agricultor', 'granja', 'fruteria', 'panaderia', 'obrador', 'despensa', 'cocina'];
const ZONES = ['malaga', 'sevilla', 'granada'];
const str = (v) => (typeof v === 'string' ? v.trim() : '');

// Longitud máxima de cada campo del alta. Mantener al día con MAX_LEN de frontend/src/pages/Vender.jsx.
const MAX_LEN = { businessName: 120, email: 120, phone: 120, sanitaryRegistry: 120, offer: 1000, pickupHours: 120 };
const QUINCE_MIN = 15 * 60 * 1000;
const tooMany = (res, wait) => res.set('Retry-After', String(wait)).status(429)
  .json({ error: `Demasiados intentos. Prueba otra vez dentro de ${Math.ceil(wait / 60)} min.` });

// Solo cuentan las altas que se guardan: las que no pasan la validación no escriben nada.
const applyLimit = limiter({ max: 5, windowMs: QUINCE_MIN });

app.post('/api/sellers/apply', (req, res) => {
  const wait = applyLimit.blocked(req.ip);
  if (wait) return tooMany(res, wait);
  const b = req.body ?? {};
  const errors = {};
  for (const [k, max] of Object.entries(MAX_LEN)) {
    if (str(b[k]).length > max) errors[k] = `Como máximo ${max} caracteres.`;
  }
  if (str(b.businessName).length < 2) errors.businessName = 'Indica el nombre del negocio.';
  if (!SELLER_TYPES.includes(b.type)) errors.type = 'Elige un tipo de negocio.';
  if (!ZONES.includes(b.zone)) errors.zone = 'Elige una zona.';
  if (!/^\S+@\S+\.\S+$/.test(str(b.email))) errors.email = 'Introduce un correo válido.';
  if (str(b.sanitaryRegistry).length < 3) errors.sanitaryRegistry = 'El registro sanitario es obligatorio.';
  if (str(b.offer).length < 10) errors.offer = 'Cuéntanos brevemente qué ofreces (mín. 10 caracteres).';
  if (b.privacy !== true) errors.privacy = 'Para enviar la solicitud tienes que aceptar el uso de los datos.';
  if (Object.keys(errors).length) return res.status(400).json({ errors });
  applyLimit.hit(req.ip);

  const item = store.append('sellerApplications', {
    id: randomUUID(),
    businessName: str(b.businessName),
    type: b.type,
    zone: b.zone,
    email: str(b.email),
    phone: str(b.phone),
    sanitaryRegistry: str(b.sanitaryRegistry),
    offer: str(b.offer),
    pickupHours: str(b.pickupHours),
    status: 'recibida',
    createdAt: new Date().toISOString(),
  });
  res.status(201).json({ id: item.id, status: item.status });
});

// ---------- Autenticación de administrador ----------
const safeEq = (a, b) => {
  const A = Buffer.from(String(a ?? '')), B = Buffer.from(String(b));
  return A.length === B.length && timingSafeEqual(A, B);
};

// Cuentan los intentos fallidos; entrar bien pone el contador a cero.
const loginLimit = limiter({ max: 5, windowMs: QUINCE_MIN });

app.post('/api/admin/login', (req, res) => {
  const { user, password } = req.body ?? {};
  const { ADMIN_USER, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_USER || !ADMIN_PASSWORD) return res.status(503).json({ error: 'Administración no configurada (.env).' });
  const wait = loginLimit.blocked(req.ip);
  if (wait) return tooMany(res, wait);
  if (!safeEq(user, ADMIN_USER) || !safeEq(password, ADMIN_PASSWORD)) {
    loginLimit.hit(req.ip);
    return res.status(401).json({ error: 'Usuario o contraseña incorrectos.' });
  }
  loginLimit.clear(req.ip);
  req.session.regenerate(() => { req.session.admin = true; res.json({ ok: true }); });
});

app.post('/api/admin/logout', (req, res) => req.session.destroy(() => res.json({ ok: true })));
app.get('/api/admin/me', (req, res) => res.json({ admin: Boolean(req.session.admin) }));

// El resto de /api/admin exige sesión: la protección está aquí, no en el frontend.
const requireAdmin = (req, res, next) => (req.session.admin ? next() : res.status(401).json({ error: 'No autorizado' }));

app.get('/api/admin/project', requireAdmin, (_req, res) => res.json({ ...PROJECT, ia: agentReady() }));

app.get('/api/admin/sellers', requireAdmin, (_req, res) => res.json(store.read('sellerApplications')));

app.patch('/api/admin/sellers/:id', requireAdmin, (req, res) => {
  const allowed = ['recibida', 'en revisión', 'verificada', 'rechazada'];
  if (!allowed.includes(req.body?.status)) return res.status(400).json({ error: 'Estado no válido' });
  const item = store.update('sellerApplications', req.params.id, { status: req.body.status });
  item ? res.json(item) : res.status(404).json({ error: 'No encontrada' });
});

// Hitos del plan con su estado en Asana; si Asana falla, devuelve solo el plan.
app.get('/api/admin/milestones', requireAdmin, async (_req, res) => {
  try { res.json(await getMilestones()); }
  catch (e) { res.status(502).json({ error: e.message }); }
});

app.get('/api/admin/asana/tasks/:gid/subtasks', requireAdmin, async (req, res) => {
  try { res.json({ source: 'asana', tasks: await getSubtasks(req.params.gid) }); }
  catch (e) { res.json({ source: 'fallback', error: e.message, tasks: [] }); }
});

// Hito 2 leído de docs/requisitos: necesidades, decisiones, trazabilidad y registro de cambios.
app.get('/api/admin/hito2', requireAdmin, (_req, res) => {
  try { res.json(hito2()); }
  catch (e) {
    console.error('Hito 2:', e);
    res.status(500).json({ error: 'No se pudieron leer los documentos del Hito 2 (docs/requisitos).' });
  }
});

// Registro de prompts usados en el desarrollo (ficheros en /prompts, dentro del repo).
app.get('/api/admin/prompts', requireAdmin, (_req, res) => res.json({ prompts: prompts.list(), types: prompts.TYPES, temas: prompts.TEMAS, agent: agentReady() }));

app.post('/api/admin/prompts', requireAdmin, (req, res) => {
  const b = req.body ?? {};
  const errors = {};
  if (str(b.titulo).length < 3) errors.titulo = 'Pon un título (mín. 3 caracteres).';
  if (str(b.texto).length < 10) errors.texto = 'El prompt está vacío.';
  if (!prompts.TYPES.includes(b.tipo)) errors.tipo = 'Elige un tipo.';
  if (b.tema !== undefined && !prompts.TEMAS.includes(b.tema)) errors.tema = 'Elige un tema.';
  if (Object.keys(errors).length) return res.status(400).json({ errors });
  res.status(201).json(prompts.add({
    titulo: str(b.titulo), autor: str(b.autor), herramienta: str(b.herramienta) || 'Claude Code',
    tipo: b.tipo, tema: b.tema ?? 'Otro', origen: str(b.origen), texto: str(b.texto),
  }));
});

// Segundo agente: devuelve una versión pulida del prompt (no guarda nada).
app.post('/api/admin/prompts/polish', requireAdmin, async (req, res) => {
  const texto = str(req.body?.texto);
  if (texto.length < 10) return res.status(400).json({ error: 'El prompt está vacío.' });
  try { res.json(await polishPrompt(texto, str(req.body?.objetivo))); }
  catch (e) { res.status(e instanceof AgentError ? e.status : 500).json({ error: e.message }); }
});

// Buscador del panel: pregunta simple → respuesta corta y apartado al que ir (no guarda nada).
app.post('/api/admin/ask', requireAdmin, async (req, res) => {
  const pregunta = str(req.body?.pregunta).slice(0, 300);
  if (pregunta.length < 2) return res.status(400).json({ error: 'Escribe una pregunta.' });
  try { res.json(await ask(pregunta)); }
  catch (e) { res.status(e instanceof AgentError ? e.status : 500).json({ error: e.message }); }
});

app.use('/api', (_req, res) => res.status(404).json({ error: 'No encontrado' }));

// Sirve la web compilada (frontend/dist) si existe: así todo arranca con un solo comando.
const DIST = fileURLToPath(new URL('../frontend/dist/', import.meta.url));
if (existsSync(DIST)) {
  // index.html y los SVG de /public siempre se revalidan (así un recompilado se ve al recargar);
  // los ficheros de /assets llevan un hash en el nombre y se pueden cachear.
  app.use(express.static(DIST, {
    setHeaders: (res, file) => {
      res.setHeader('Cache-Control', file.includes('assets') ? 'public, max-age=31536000, immutable' : 'no-cache');
    },
  }));
  app.get('*', (_req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.sendFile(join(DIST, 'index.html'));
  });
}

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`FOOD4ALL API en http://localhost:${port}`));
