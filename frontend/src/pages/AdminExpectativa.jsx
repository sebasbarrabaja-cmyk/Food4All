import EnConstruccion from '../components/EnConstruccion.jsx';

// Punto 11 del feedback del 27/10. Dueño: Juan Antonio. Datos: GET /api/admin/expectativa (forma en docs/contratos.md).
export default function AdminExpectativa() {
  return <EnConstruccion punto={11} dueno="Juan Antonio" ruta="/api/admin/expectativa" />;
}
