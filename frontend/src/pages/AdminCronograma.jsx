import EnConstruccion from '../components/EnConstruccion.jsx';

// Punto 8 del feedback del 27/10. Dueño: Miguel. Datos: GET /api/admin/cronograma (forma en docs/contratos.md).
export default function AdminCronograma() {
  return <EnConstruccion punto={8} dueno="Miguel" ruta="/api/admin/cronograma" />;
}
