import { useEffect, useState } from 'react';

// Sección del feedback del 27/10 aún por hacer: muestra quién la hace y que su ruta ya responde con
// los datos de prueba del contrato (docs/contratos.md). El dueño la sustituye por la vista real.
export default function EnConstruccion({ punto, dueno, ruta }) {
  const [n, setN] = useState(null);
  useEffect(() => {
    fetch(ruta).then((r) => (r.ok ? r.json() : null)).then((d) => {
      const lista = d && Object.values(d).find(Array.isArray);
      setN(lista ? lista.length : 0);
    }).catch(() => setN(0));
  }, [ruta]);
  return (
    <p className="muted small">
      En construcción · punto {punto} del feedback del profesor (27/10) · responsable: {dueno}.
      {n !== null && ` La ruta ${ruta} ya responde con ${n} elementos de prueba.`}
    </p>
  );
}
