import { useEffect, useState } from 'react';

// Sección del feedback del 27/10 aún por hacer: muestra quién la hace y que su ruta ya responde con
// los datos de prueba del contrato (docs/contratos.md). El dueño la sustituye por la vista real.
export default function EnConstruccion({ punto, dueno, ruta }) {
  // Texto sobre la ruta: cuántos elementos devuelve o, si falla, que no responde (y con qué error).
  const [estado, setEstado] = useState(null);
  useEffect(() => {
    fetch(ruta).then(async (r) => {
      if (r.status === 401) return setEstado('La sesión ha caducado: vuelve a entrar para ver sus datos.');
      if (!r.ok) {
        const { error } = await r.json().catch(() => ({}));
        return setEstado(`La ruta ${ruta} da un error (${r.status}${error ? `: ${error}` : ''}).`);
      }
      const lista = Object.values(await r.json()).find(Array.isArray);
      setEstado(lista ? `La ruta ${ruta} ya responde con ${lista.length} elementos de prueba.`
        : `La ruta ${ruta} responde, pero sin ninguna lista.`);
    }).catch(() => setEstado(`La ruta ${ruta} no responde (sin conexión o con una respuesta que no es JSON).`));
  }, [ruta]);
  return (
    <p className="muted small">
      En construcción · punto {punto} del feedback del profesor (27/10) · responsable: {dueno}.
      {estado && ` ${estado}`}
    </p>
  );
}
