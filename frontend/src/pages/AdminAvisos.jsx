import EnConstruccion from '../components/EnConstruccion.jsx';

// Punto 7 del feedback del 27/10. Dueño: Miguel. Datos: GET /api/admin/avisos (forma en docs/contratos.md).
export default function AdminAvisos() {
  return <EnConstruccion punto={7} dueno="Miguel" ruta="/api/admin/avisos" />;
}
