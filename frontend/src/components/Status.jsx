// Marca el estado de una decisión (sección 3.5) o un dato de ejemplo.
const LABELS = {
  decidido: 'Decidido',
  hipotesis: 'Hipótesis',
  pendiente: 'Por definir',
  descartado: 'Descartado',
  ejemplo: 'Datos de ejemplo',
};

export default function Status({ kind, children }) {
  return <span className={`badge badge-${kind}`}>{children ?? LABELS[kind]}</span>;
}
