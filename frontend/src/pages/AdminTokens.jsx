import EnConstruccion from '../components/EnConstruccion.jsx';

// Punto 5 del feedback del 27/10. Dueño: Sebastián. Datos: GET /api/admin/tokens (forma en docs/contratos.md).
export default function AdminTokens() {
  return <EnConstruccion punto={5} dueno="Sebastián" ruta="/api/admin/tokens" />;
}
