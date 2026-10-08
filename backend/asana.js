// Proxy de Asana: el token vive solo aquí (variable de entorno).
//
// El proyecto de Asana es el de la asignatura y lo comparten varios grupos. Solo se leen
// las tareas del grupo, que empiezan por [Food4All] (también se acepta la errata [Foof4All]).
// Cada una es un hito del curso; sus subtareas y sub-subtareas se leen en dos niveles.
import { PROJECT } from './project.js';

const BASE = 'https://app.asana.com/api/1.0';
const FIELDS = 'name,completed,assignee.name,due_on,num_subtasks,memberships.section.name';
const GROUP_TAG = /^\s*\[foo[df]4all\]\s*/i;

async function call(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Authorization: `Bearer ${process.env.ASANA_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Asana respondió ${res.status}`);
  return (await res.json()).data;
}

const normalize = (t) => ({
  gid: t.gid,
  name: t.name.trim(),
  completed: t.completed,
  // Algunos usuarios de Asana solo tienen el correo como nombre: se muestra la parte local.
  assignee: t.assignee?.name ? t.assignee.name.replace(/@.*$/, '') : null,
  due_on: t.due_on ?? null,
  numSubtasks: t.num_subtasks ?? 0,
  section: t.memberships?.[0]?.section?.name ?? null,
});

export async function getTasks() {
  const { ASANA_TOKEN, ASANA_PROJECT_GID } = process.env;
  if (!ASANA_TOKEN || !ASANA_PROJECT_GID) throw new Error('Asana no está configurado (.env)');
  const tasks = await call(`/projects/${ASANA_PROJECT_GID}/tasks?opt_fields=${FIELDS}&limit=100`);
  return tasks.map(normalize);
}

export async function getSubtasks(taskGid) {
  const subs = await call(`/tasks/${encodeURIComponent(taskGid)}/subtasks?opt_fields=${FIELDS}`);
  return subs.map(normalize);
}

// ---------- Emparejar con el plan (para el responsable previsto) ----------
const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const words = (s) => new Set(fold(s).split(/[^a-z0-9/]+/).filter((w) => w.length > 3));

// Parecido por palabras compartidas: tolera "el porqué" frente a "el por qué".
function similar(a, b) {
  const A = words(a), B = words(b);
  if (!A.size || !B.size) return fold(a).trim() === fold(b).trim();
  let shared = 0;
  A.forEach((w) => B.has(w) && shared++);
  return shared / Math.min(A.size, B.size) >= 0.6;
}

const findPlan = (list, name) => list.find((p) => similar(p.name ?? p[0], name));
const hitoNumber = (name) => Number(/hito\s*(\d+)/i.exec(name)?.[1]) || null;
// "[Food4All] Hito 1 – Contexto, actores y alcance · Marketplace Local" → "Contexto, actores y alcance"
const hitoTitle = (name) =>
  name.replace(GROUP_TAG, '').replace(/^hito\s*\d+\s*[–-]\s*/i, '').replace(/\s*·\s*Marketplace Local\s*$/i, '')
    .replace(/\s+,.*$/, '').replace(/\s*\(Sem[^)]*\)/gi, '').trim();

const progress = (items) => ({ done: items.filter((i) => i.completed).length, total: items.length });

// ---------- Hitos ----------
function planOnly() {
  return PROJECT.milestones.map((m) => ({
    n: m.n, title: m.title, completed: false, due_on: null, assignee: null, inAsana: false,
    children: m.children.map((c) => ({
      name: c.name, completed: false, assignee: null, planned: null, inAsana: false,
      children: c.children.map(([name, owner]) => ({ name, completed: false, assignee: null, planned: owner, inAsana: false })),
    })),
  }));
}

export async function getMilestones() {
  let tasks;
  try { tasks = await getTasks(); }
  catch (e) { return { source: 'plan', error: e.message, milestones: planOnly() }; }

  const ours = tasks.filter((t) => GROUP_TAG.test(t.name));
  const milestones = await Promise.all(ours.map(async (t) => {
    const n = hitoNumber(t.name);
    const plan = PROJECT.milestones.find((m) => m.n === n);
    const subs = t.numSubtasks ? await getSubtasks(t.gid) : [];

    const children = await Promise.all(subs.map(async (s) => {
      const planSub = plan && findPlan(plan.children, s.name);
      const leaves = s.numSubtasks ? await getSubtasks(s.gid) : [];
      return {
        name: s.name, completed: s.completed, assignee: s.assignee, due_on: s.due_on, inAsana: true,
        progress: leaves.length ? progress(leaves) : null,
        children: leaves.map((l) => ({
          name: l.name, completed: l.completed, assignee: l.assignee, due_on: l.due_on, inAsana: true,
          planned: planSub ? findPlan(planSub.children, l.name)?.[1] ?? null : null,
        })),
        // Pasos del plan que aún no existen en Asana (solo si la subtarea no tiene desglose propio).
        planOnly: !leaves.length && planSub ? planSub.children.map(([name, owner]) => ({ name, planned: owner })) : [],
      };
    }));

    return {
      n, title: hitoTitle(t.name), section: t.section, completed: t.completed,
      assignee: t.assignee, due_on: t.due_on, inAsana: true,
      progress: progress(children), children,
    };
  }));

  milestones.sort((a, b) => (a.n ?? 99) - (b.n ?? 99));
  return { source: 'asana', milestones };
}
