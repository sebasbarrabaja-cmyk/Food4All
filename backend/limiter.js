// Límite de peticiones por IP, en memoria: N golpes por ventana de tiempo. Se pierde al reiniciar
// el servidor, que para una landing de clase basta. Ojo: con el proxy de Vite (npm run dev) todas
// las peticiones llegan desde 127.0.0.1 y comparten contador.
export function limiter({ max, windowMs }) {
  const hits = new Map(); // ip → { count, reset }

  // Limpia las IP caducadas para que el Map no crezca sin fin. unref: no impide cerrar el proceso.
  setInterval(() => {
    const now = Date.now();
    for (const [ip, h] of hits) if (h.reset <= now) hits.delete(ip);
  }, windowMs).unref();

  return {
    // Segundos que faltan para poder volver a intentarlo, o 0 si aún no se ha llegado al límite.
    // Solo lee: consultar una IP no la guarda.
    blocked(ip) {
      const h = hits.get(ip), now = Date.now();
      return h && h.reset > now && h.count >= max ? Math.ceil((h.reset - now) / 1000) : 0;
    },
    hit(ip) {
      const now = Date.now();
      let h = hits.get(ip);
      if (!h || h.reset <= now) hits.set(ip, (h = { count: 0, reset: now + windowMs }));
      h.count += 1;
    },
    clear(ip) { hits.delete(ip); },
  };
}
