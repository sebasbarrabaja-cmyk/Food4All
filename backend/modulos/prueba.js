// Ayudas comunes de los módulos: leer sus datos de prueba y servirlos tal cual.
import { Router } from 'express';
import { readFileSync } from 'node:fs';

// Datos de prueba de un módulo: la forma exacta que tiene que devolver la versión real.
export const prueba = (nombre) => JSON.parse(readFileSync(new URL(`../datos-prueba/${nombre}.json`, import.meta.url), 'utf8'));

// Router que solo devuelve los datos de prueba: punto de partida de cada módulo.
export function soloPrueba(nombre) {
  const r = Router();
  r.get('/', (_req, res) => res.json(prueba(nombre)));
  return r;
}
