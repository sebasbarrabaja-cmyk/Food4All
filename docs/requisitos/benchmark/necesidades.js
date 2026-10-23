// Catálogo único de necesidades (v0.4, 22/10/2026). Es la única fuente de verdad de los N-ID.
// Sustituye a los dos catálogos anteriores, que usaban los mismos números con significados distintos:
//   - «v0.3»: N-01 a N-08 de la especificación (19-20/10/2026), usados en las fichas de B4;
//   - «B2 v1»: N-01 a N-20 del documento de personas de B2 (20/10/2026).
// Los IDs nuevos siguen la convención de B1 (N-<MÓDULO>-NN) y no se reutilizan nunca.
//
// estado:
//   Hipótesis          → solo hay apoyo documental o de competidores; falta contrastarla con entrevistas.
//   Obligación legal   → la impone una norma (F-03); no necesita entrevistas, sí revisión profesional (D-01).
//   Indicio            → la mencionan 1 o 2 entrevistas (o todas, si la muestra es menor de 3).
//   Confirmada         → regla de evidencia de FOOD4ALL_necesidades.md (≥ 3 entrevistas independientes…).
//   No confirmada      → las entrevistas la contradicen.
// F-07 (23/10/2026): E1–E4 de Sebastián, en apuntes y sin citas literales (FOOD4ALL_entrevistas_estudiantes.md), y
// E5–E6 de Juan Antonio, literales (FOOD4ALL_entrevistas_E5_E6_juan_antonio.md). Las 12 de Miguel se descartaron (C-22).
// Perfil objetivo (comparten piso): E3, E4, E5 y E6. E1 y E2 viven con su familia y cuentan como comparativos.
// Ninguna llega a Confirmada: E3 y E4 no tienen cita literal, y E5 y E6 viven juntas (no son del todo independientes).
// F-08 (vendedores) sigue sin ninguna entrevista.

const NECESIDADES = [
  // Estudiante (P1 · Lucía)
  { id: 'N-PLA-01', texto: 'Saber qué comprar y qué comer los próximos días, planificando en vez de improvisar', quien: 'Estudiante', persona: 'P1', tipo: 'Usuario', fuentes: 'F-01, F-02, F-07 (E3, E4, E6)', estado: 'Indicio', v03: 'N-01', b2: 'N-03, N-04, N-05' },
  { id: 'N-PLA-02', texto: 'Controlar cuánto gasta en comida y ajustarse a un presupuesto', quien: 'Estudiante', persona: 'P1', tipo: 'Usuario', fuentes: 'F-01, F-07 (E4, E5, E6; E1 comparativo)', estado: 'Indicio', v03: 'N-01', b2: 'N-01' },
  { id: 'N-CAR-01', texto: 'Comprar producto local de varios vendedores en un solo pedido y un solo pago, sin ir de tienda en tienda', quien: 'Estudiante', persona: 'P1', tipo: 'Usuario', fuentes: 'F-04, F-10, F-07 (E4; E3 en contra del producto, no de la necesidad)', estado: 'Indicio', v03: 'N-02', b2: 'N-02, N-08' },
  { id: 'N-ENT-01', texto: 'Recibir todo en una sola entrega, en una franja conocida', quien: 'Estudiante', persona: 'P1', tipo: 'Usuario', fuentes: 'F-04, F-07 (solo E1, comparativo: entrega en 1–4 días)', estado: 'Hipótesis', v03: 'N-02', b2: 'N-10' },
  { id: 'N-CAD-01', texto: 'Gestionar cantidades, conservación y caducidades para no tirar comida', quien: 'Estudiante', persona: 'P1', tipo: 'Usuario', fuentes: 'F-01, F-03, F-07 (E3; en contra: E4)', estado: 'Indicio', v03: 'N-08', b2: 'N-06, N-07' },
  { id: 'N-IA-01', texto: 'Que el asistente simplifique la decisión sin obligarle a explicar demasiado', quien: 'Estudiante', persona: 'P1', tipo: 'Usuario', fuentes: 'F-02, F-07 (en contra: E3, E4)', estado: 'No confirmada', v03: 'N-01 (parte)', b2: 'N-11' },
  { id: 'N-IA-02', texto: 'Saber cuándo habla con una IA y distinguir una recomendación de la publicidad', quien: 'Estudiante', persona: 'P1', tipo: 'Obligación legal', fuentes: 'F-03 (Reglamento de IA 2024/1689; DSA 2022/2065)', estado: 'Obligación legal', v03: 'N-07 (parte)', b2: '—' },
  { id: 'N-CAT-01', texto: 'Confiar en el origen, la calidad y la trazabilidad de lo que compra', quien: 'Estudiante', persona: 'P1', tipo: 'Usuario', fuentes: 'F-03 (Reglamento 178/2002), F-04, F-07 (E4; E5 y E6 comprueban la fiabilidad de una app antes de usarla; en contra del origen: E6; E1 y E2 comparativos)', estado: 'Indicio', v03: 'N-04 y N-05 (parte)', b2: 'N-09' },
  { id: 'N-CAT-02', texto: 'Conocer ingredientes y alérgenos antes de pagar', quien: 'Estudiante', persona: 'P1', tipo: 'Obligación legal', fuentes: 'F-03 (Reglamento 1169/2011, art. 14)', estado: 'Obligación legal', v03: 'N-04', b2: '—' },
  { id: 'N-CAT-03', texto: 'Recibir información veraz: precio final, costes, condiciones y avisos, sin sorpresas', quien: 'Estudiante', persona: 'P1', tipo: 'Obligación legal', fuentes: 'F-03 (RDL 1/2007; LSSI; P2B 2019/1150)', estado: 'Obligación legal', v03: 'N-07 (parte)', b2: '—' },
  { id: 'N-CUE-01', texto: 'Que sus datos personales y de salud estén protegidos y solo se usen para lo que aceptó', quien: 'Estudiante, vendedor', persona: 'P1, P2', tipo: 'Obligación legal', fuentes: 'F-03 (RGPD; LOPDGDD)', estado: 'Obligación legal', v03: 'N-07 (parte)', b2: '—' },
  { id: 'N-INC-01', texto: 'Tener una solución rápida, atendida por personas, si algo llega mal', quien: 'Estudiante', persona: 'P1', tipo: 'Usuario', fuentes: 'F-04 (fiabilidad baja: no cita fuentes), F-07 (E5)', estado: 'Indicio', v03: 'N-06', b2: '—' },
  // Vendedor (P2 · Antonio)
  { id: 'N-VEN-01', texto: 'Llegar a clientes nuevos y ganar visibilidad', quien: 'Vendedor', persona: 'P2', tipo: 'Usuario', fuentes: 'F-01 (comercio tradicional 10,6 %)', estado: 'Hipótesis', v03: 'N-03', b2: 'N-12' },
  { id: 'N-VEN-02', texto: 'Vender online sin montar una web propia ni gestionar envíos', quien: 'Vendedor', persona: 'P2', tipo: 'Usuario', fuentes: 'F-01, F-04', estado: 'Hipótesis', v03: 'N-03', b2: 'N-13' },
  { id: 'N-VEN-03', texto: 'Reducir la merma del género que no vende a tiempo', quien: 'Vendedor', persona: 'P2', tipo: 'Usuario', fuentes: 'F-03 (Ley 1/2025)', estado: 'Hipótesis', v03: '—', b2: 'N-14' },
  { id: 'N-VEN-04', texto: 'Saber qué preparar y para cuándo: pedido claro y franja de recogida', quien: 'Vendedor', persona: 'P2', tipo: 'Usuario', fuentes: 'F-06, F-12', estado: 'Hipótesis', v03: 'N-03 (parte)', b2: 'N-15' },
  { id: 'N-VEN-05', texto: 'Cobrar con transparencia: comisión y liquidación claras', quien: 'Vendedor', persona: 'P2', tipo: 'Usuario', fuentes: 'F-12 (críticas a la tarifa de Market Wagon)', estado: 'Hipótesis', v03: 'N-03 (parte)', b2: 'N-16' },
  { id: 'N-VEN-06', texto: 'Conocer con claridad los requisitos y los pasos del alta', quien: 'Vendedor', persona: 'P2', tipo: 'Usuario', fuentes: 'F-03', estado: 'Hipótesis', v03: 'N-03 (parte)', b2: 'N-17' },
  { id: 'N-VEN-07', texto: 'Admitir solo vendedores con registro sanitario o con una exención justificada', quien: 'Administrador', persona: 'P3', tipo: 'Obligación legal', fuentes: 'F-03 (RD 191/2011; RD 1086/2020)', estado: 'Obligación legal', v03: 'N-05', b2: '—' },
  // Operador del hub y repartidor (P3 · Rafa)
  { id: 'N-HUB-01', texto: 'Tener rutas y franjas de recogida fiables, con aviso de «pedido listo»', quien: 'Operador', persona: 'P3', tipo: 'Usuario', fuentes: 'F-06, F-12', estado: 'Hipótesis', v03: '—', b2: 'N-18' },
  { id: 'N-HUB-02', texto: 'Mantener la cadena de frío y separar frío y seco', quien: 'Operador', persona: 'P3', tipo: 'Obligación legal', fuentes: 'F-03 (Reglamento 852/2004), F-12', estado: 'Obligación legal', v03: '—', b2: 'N-19' },
  { id: 'N-HUB-03', texto: 'Verificar cada pedido y resolver las faltas antes de entregar', quien: 'Operador', persona: 'P3', tipo: 'Usuario', fuentes: 'F-06, F-12', estado: 'Hipótesis', v03: 'N-02 (parte)', b2: 'N-20' },
];

// Fuentes de las necesidades. F-11 no es evidencia independiente: resume documentación del propio equipo.
const FUENTES_N = [
  ['F-01', 'Mercado (Hito 1): MAPA 2025, EUROSTUDENT 8, cifras de US, UGR y UMA', 'Referencia externa'],
  ['F-02', 'Alcance (Hito 1)', 'Decisión del equipo'],
  ['F-03', 'Marco legal (Hito 1)', 'Norma (análisis orientativo, sin revisión profesional)'],
  ['F-04', 'Comparativo de 10 empresas (adjunto de Juan Antonio, 09/10/2026)', 'Benchmark exploratorio: fiabilidad baja, no cita fuentes'],
  ['F-05', 'Investigación de entrega a clientes (Miguel)', 'En curso'],
  ['F-06', 'Investigación de recogida a vendedores (Juan Antonio)', 'En curso'],
  ['F-07', 'Entrevistas a estudiantes (23/10/2026): E1–E4 de Sebastián y E5–E6 de Juan Antonio; perfil objetivo E3–E6, comparativos E1 y E2. Las 12 de Miguel se descartaron (C-22)', 'E1–E4: apuntes sin citas literales; E5–E6: literales, compañeras de piso entre sí'],
  ['F-08', 'Entrevistas a vendedores (mínimo 2-3)', 'Pendiente: se suben el 23/10/2026'],
  ['F-09', 'Borrador de 211 requisitos (09/10/2026)', 'Histórico: lista de ideas, no evidencia'],
  ['F-10', 'Benchmark de 6 competidores, consultado el 19/10/2026', 'Referencia externa (páginas públicas)'],
  ['F-11', 'Personas y mapas de empatía (B2, 20/10/2026)', 'Síntesis documental del equipo: no es evidencia independiente'],
  ['F-12', 'Estudios de food hubs citados en B2: Santa González et al. 2025 (Wisconsin), Universidad de Manchester 2025, Red Tomato, Local Line, prensa sobre Market Wagon', 'Referencia externa'],
];

module.exports = { NECESIDADES, FUENTES_N };
