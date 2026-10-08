// Almacenamiento sencillo en un fichero JSON (suficiente para la demo).
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';

const DIR = new URL('./data/', import.meta.url);
const FILE = new URL('./data/db.json', import.meta.url);
const EMPTY = { sellerApplications: [] };

function load() {
  if (!existsSync(FILE)) return structuredClone(EMPTY);
  try { return { ...EMPTY, ...JSON.parse(readFileSync(FILE, 'utf8')) }; }
  catch { return structuredClone(EMPTY); }
}

function save(db) {
  mkdirSync(DIR, { recursive: true });
  writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export function read(key) { return load()[key]; }

export function append(key, item) {
  const db = load();
  db[key].push(item);
  save(db);
  return item;
}

export function update(key, id, patch) {
  const db = load();
  const item = db[key].find((x) => x.id === id);
  if (!item) return null;
  Object.assign(item, patch);
  save(db);
  return item;
}
