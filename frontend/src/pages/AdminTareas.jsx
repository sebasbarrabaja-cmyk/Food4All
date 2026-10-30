import EnConstruccion from '../components/EnConstruccion.jsx';

// Punto 2 del feedback del 27/10. Dueño: Miguel. Datos: GET /api/admin/tareas (forma en docs/contratos.md).
export default function AdminTareas() {
  return <EnConstruccion punto={2} dueno="Miguel" ruta="/api/admin/tareas" />;
}
