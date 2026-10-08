import express from 'express';
import session from 'express-session';
import { randomUUID, timingSafeEqual } from 'node:crypto';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as store from './store.js';
import { getSubtasks, getMilestones } from './asana.js';
import { PROJECT } from './project.js';

const app = express();
app.use(express.json({ limit: '50kb' }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-only-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', maxAge: 1000 * 60 * 60 * 8 },
}));

// ---------- Público ----------
const SELLER_TYPES = ['agricultor', 'granja', 'fruteria', 'panaderia', 'obrador', 'despensa', 'cocina'];
const ZONES = ['malaga', 'sevilla', 'granada'];
const str = (v) => (typeof v === 'string' ? v.trim() : '');

app.post('/api/sellers/apply', (req, res) => {
  const b = req.body ?? {};
  const errors = {};
  if (str(b.businessName).length < 2) errors.businessName = 'Indica el nombre del negocio.';
  if (!SELLER_TYPES.includes(b.type)) errors.type = 'Elige un tipo de negocio.';
  if (!ZONES.includes(b.zone)) errors.zone = 'Elige una zona.';
  if (!/^\S+@\S+\.\S+$/.test(str(b.email))) errors.email = 'Introduce un correo válido.';
  if (str(b.sanitaryRegistry).length < 3) errors.sanitaryRegistry = 'El registro sanitario es obligatorio.';
  if (str(b.offer).length < 10) errors.offer = 'Cuéntanos brevemente qué ofreces (mín. 10 caracteres).';
  if (Object.keys(errors).length) return res.status(400).json({ errors });

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

app.post('/api/admin/login', (req, res) => {
  const { user, password } = req.body ?? {};
  const { ADMIN_USER, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_USER || !ADMIN_PASSWORD) return res.status(503).json({ error: 'Administración no configurada (.env).' });
  if (!safeEq(user, ADMIN_USER) || !safeEq(password, ADMIN_PASSWORD)) {
    return res.status(401).json({ error: 'Usuario o contraseña incorrectos.' });
  }
  req.session.regenerate(() => { req.session.admin = true; res.json({ ok: true }); });
});

app.post('/api/admin/logout', (req, res) => req.session.destroy(() => res.json({ ok: true })));
app.get('/api/admin/me', (req, res) => res.json({ admin: Boolean(req.session.admin) }));

// El resto de /api/admin exige sesión: la protección está aquí, no en el frontend.
const requireAdmin = (req, res, next) => (req.session.admin ? next() : res.status(401).json({ error: 'No autorizado' }));

app.get('/api/admin/project', requireAdmin, (_req, res) => res.json(PROJECT));

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
