import EnConstruccion from '../components/EnConstruccion.jsx';

// Punto 6 del feedback del 27/10. Dueño: Miguel. Datos: GET /api/admin/traza (forma en docs/contratos.md).
export default function AdminTraza() {
  return <EnConstruccion punto={6} dueno="Miguel" ruta="/api/admin/traza" />;
}
