// Única forma de pedir datos a la API desde el panel. Envía y recibe JSON.
// Si la respuesta no es 2xx, lanza un Error con el mensaje del servidor y, además:
//   - status: el código HTTP (0 si no hubo conexión), para que cada pantalla decida qué hacer con
//     un 401 (ir al login, avisar…): no se redirige aquí para no cambiar el comportamiento de nadie;
//   - errors: los errores por campo que devuelve el servidor en las validaciones (400).
export const SIN_CONEXION = 'No se pudo contactar con el servidor.';

export async function api(ruta, { metodo, cuerpo } = {}) {
  const opciones = cuerpo === undefined
    ? { method: metodo ?? 'GET' }
    : { method: metodo ?? 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cuerpo) };
  let r;
  try {
    r = await fetch(ruta, opciones);
  } catch {
    throw Object.assign(new Error(SIN_CONEXION), { status: 0 });
  }
  const datos = await r.json().catch(() => null);
  if (!r.ok) {
    throw Object.assign(new Error(datos?.error ?? 'Error inesperado'), { status: r.status, errors: datos?.errors });
  }
  if (datos === null) throw Object.assign(new Error('La respuesta no es JSON.'), { status: r.status });
  return datos;
}
