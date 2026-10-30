// Punto 5, tokens total y por acción. Dueño: Sebastián. Contrato: docs/contratos.md.
// Se calcula en cada petición, sin base de datos todavía, con estas fuentes:
// - docs/tokens/<persona>/*.csv: sesiones de Claude Code, un archivo por sesión (las escribe
//   tools/tokens-sesion.mjs; en git).
// - docs/tokens.csv: formato antiguo (hasta el 30/10, una fila por sesión e ignorado por git). Se sigue
//   leyendo para no perder esas sesiones; su `persona` era el nombre de git y se traduce al ID.
// - docs/tokens-ia.csv: llamadas a la IA del panel (las apunta registrarIA; ignorado por git).
// Además de los campos del contrato, la respuesta lleva `fuentes` (qué archivos se han leído).
import { Router } from 'express';
import { readFileSync, readdirSync, existsSync, appendFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { personaDe, parseCsv, lineaCsv } from '../../tools/tokens-comun.mjs';

const RAIZ = fileURLToPath(new URL('../../', import.meta.url));
const SESIONES = 'docs/tokens';
const ANTIGUO = 'docs/tokens.csv';
const IA = 'docs/tokens-ia.csv';
const COLUMNAS_IA = ['fecha', 'persona', 'accion', 'modelos', 'entrada', 'salida', 'cache_lectura', 'total'];
const NUMEROS = ['mensajes', 'entrada', 'salida', 'cache_escritura', 'cache_lectura'];

const leer = (ruta) => (existsSync(RAIZ + ruta) ? parseCsv(readFileSync(RAIZ + ruta, 'utf8')) : []);

// Misma forma para todas las fuentes: la fila de backend/datos-prueba/tokens.json. El total es
// siempre la suma de las columnas, para que las cifras del panel cuadren.
function fila(f, accion) {
  const n = Object.fromEntries(NUMEROS.map((k) => [k, Number(f[k]) || 0]));
  return {
    fecha: f.fecha ?? '', persona: personaDe(f.persona) === 'desconocido' ? f.persona || 'desconocido' : personaDe(f.persona),
    accion: f.accion || accion, rama: f.rama ?? '', sesion: f.sesion ?? '', prompt: null, modelos: f.modelos ?? '',
    ...n, total: n.entrada + n.salida + n.cache_escritura + n.cache_lectura,
  };
}

const sumar = (filas, clave) => Object.entries(Object.groupBy(filas, (f) => f[clave]))
  .map(([valor, grupo]) => ({ [clave]: valor, total: grupo.reduce((s, f) => s + f.total, 0) }))
  .sort((a, b) => b.total - a.total);

export function resumen() {
  const sesiones = existsSync(RAIZ + SESIONES)
    ? readdirSync(RAIZ + SESIONES, { recursive: true }).filter((n) => n.endsWith('.csv')).sort().map((n) => `${SESIONES}/${n}`)
    : [];
  const fuentes = [...sesiones, ...[ANTIGUO, IA].filter((r) => existsSync(RAIZ + r))];
  const filas = fuentes
    .flatMap((r) => leer(r).map((f) => fila(f, r === IA ? 'otra' : 'sesion-claude')))
    .sort((a, b) => b.fecha.localeCompare(a.fecha));

  const total = Object.fromEntries(['entrada', 'salida', 'cache_escritura', 'cache_lectura', 'total']
    .map((k) => [k, filas.reduce((s, f) => s + f[k], 0)]));
  return { total, por_persona: sumar(filas, 'persona'), por_accion: sumar(filas, 'accion'), filas, fuentes };
}

// Apunta una llamada a la IA del panel. `uso` = { entrada, salida, cache_lectura }: cada proveedor
// traduce lo suyo a esta forma (ver ia.js). Nunca lanza: si no se puede escribir, la llamada
// sigue y solo se pierde el apunte.
export function registrarIA({ accion, persona, modelo, uso = {} }) {
  try {
    const f = {
      fecha: new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Madrid' }).slice(0, 16),
      persona: persona || 'panel', accion, modelos: modelo,
      entrada: uso.entrada ?? 0, salida: uso.salida ?? 0, cache_lectura: uso.cache_lectura ?? 0,
    };
    f.total = f.entrada + f.salida + f.cache_lectura;
    mkdirSync(`${RAIZ}docs/`, { recursive: true });
    if (!existsSync(RAIZ + IA)) appendFileSync(RAIZ + IA, `${COLUMNAS_IA.join(',')}\n`);
    appendFileSync(RAIZ + IA, lineaCsv(COLUMNAS_IA, f));
  } catch {
    // Silencio a propósito: ver arriba.
  }
}

const r = Router();
r.get('/', (_req, res) => res.json(resumen()));
export default r;
