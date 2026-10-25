// DATOS DE EJEMPLO. Vendedores, productos y pedidos inventados para ilustrar la landing.
// No corresponden a negocios reales.

// Precios de ejemplo, basados en precios de supermercado de octubre de 2026:
// de dónde sale cada uno, en docs/precios-de-ejemplo.md.
export const PRICE_NOTE = 'Precios de ejemplo, meramente representativos: no son precios reales de FOOD4ALL.';
export const eur = (n) => n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });

export const ZONES = ['Málaga', 'Sevilla', 'Granada'];

export const VENDORS = [
  // Málaga
  { id: 'm1', name: 'Horno de la Plaza', type: 'Panadería', zone: 'Málaga' },
  { id: 'm2', name: 'Huerta del Guadalhorce', type: 'Agricultor', zone: 'Málaga' },
  { id: 'm3', name: 'Despensa del Sur', type: 'Despensa', zone: 'Málaga' },
  // Sevilla
  { id: 's1', name: 'Granja La Vereda', type: 'Granja', zone: 'Sevilla' },
  { id: 's2', name: 'Obrador Tres Esquinas', type: 'Obrador', zone: 'Sevilla' },
  // Granada
  { id: 'g1', name: 'Huerta Los Almendros', type: 'Agricultor', zone: 'Granada' },
  { id: 'g2', name: 'Frutería El Albaicín', type: 'Frutería', zone: 'Granada' },
  { id: 'g3', name: 'Cocina de Puerta Real', type: 'Cocina local', zone: 'Granada' },
];

const P = (id, vendor, name, category, unit, origin, allergens, dateType, storage, price) =>
  ({ id, vendor, name, category, unit, origin, allergens, dateType, storage, price });

export const PRODUCTS = [
  P('p1', 'm1', 'Pan de masa madre', 'Panadería', '1 pieza', 'Málaga', 'Gluten', 'Consumo preferente', 'Ambiente', 4.5),
  P('p2', 'm1', 'Molletes', 'Panadería', '4 uds.', 'Málaga', 'Gluten', 'Consumo preferente', 'Ambiente', 2.4),
  P('p3', 'm2', 'Naranjas', 'Fruta', '2 kg', 'Valle del Guadalhorce', 'Ninguno', 'Consumo preferente', 'Ambiente', 3.6),
  P('p4', 'm2', 'Aguacates', 'Fruta', '3 uds.', 'Axarquía', 'Ninguno', 'Consumo preferente', 'Ambiente', 3.9),
  P('p5', 'm3', 'Lentejas', 'Despensa', '1 kg', 'Andalucía', 'Ninguno', 'Consumo preferente', 'Ambiente', 2.2),
  P('p6', 'm3', 'Aceite de oliva virgen extra', 'Despensa', '1 l', 'Andalucía', 'Ninguno', 'Consumo preferente', 'Ambiente', 4.9),
  P('p7', 's1', 'Huevos camperos', 'Huevos', '12 uds.', 'Sierra Norte de Sevilla', 'Huevo', 'Consumo preferente', 'Frío', 4.2),
  P('p8', 's1', 'Queso fresco de cabra', 'Lácteos', '250 g', 'Sierra Norte de Sevilla', 'Leche', 'Caducidad', 'Frío', 3.9),
  P('p9', 's2', 'Picos de aceite', 'Panadería', '250 g', 'Sevilla', 'Gluten', 'Consumo preferente', 'Ambiente', 2.2),
  P('p10', 's2', 'Torta de aceite', 'Dulces', '6 uds.', 'Sevilla', 'Gluten, frutos de cáscara', 'Consumo preferente', 'Ambiente', 2.4),
  P('p11', 'g1', 'Tomate de huerta', 'Verdura', '1 kg', 'Vega de Granada', 'Ninguno', 'Consumo preferente', 'Ambiente', 3.2),
  P('p12', 'g1', 'Calabacín', 'Verdura', '1 kg', 'Vega de Granada', 'Ninguno', 'Consumo preferente', 'Ambiente', 1.9),
  P('p13', 'g2', 'Manzanas', 'Fruta', '1 kg', 'Granada', 'Ninguno', 'Consumo preferente', 'Ambiente', 2.6),
  P('p14', 'g3', 'Potaje de garbanzos (2 raciones)', 'Comida preparada', '700 g', 'Granada', 'Apio', 'Caducidad', 'Frío', 6.5),
];

export const vendorOf = (p) => VENDORS.find((v) => v.id === p.vendor);

// Color de cada categoría (tokens de la paleta de mercado).
export const CATEGORY_COLOR = {
  Fruta: 'var(--tomato)',
  Verdura: 'var(--olive)',
  Panadería: 'var(--saffron)',
  Dulces: 'var(--peach)',
  Despensa: 'var(--earth)',
  Huevos: 'var(--peach)',
  Lácteos: 'var(--saffron)',
  'Comida preparada': 'var(--green)',
};

// Ejemplo de propuesta del asistente: producto + motivo.
export const AI_EXAMPLE = {
  request: 'Tengo 25 € y necesito comida para cuatro días. Tengo poco tiempo para cocinar.',
  zone: 'Granada',
  basket: [
    ['p11', 1, 'Ensaladas y salsa para pasta sin apenas preparación.'],
    ['p12', 1, 'Salteado en 10 minutos o como acompañamiento del potaje.'],
    ['p13', 1, 'Fruta de temporada que aguanta bien varios días.'],
    ['p14', 1, 'Dos comidas resueltas sin cocinar, para los días con menos tiempo.'],
  ],
};

export const ORDER_STATES = ['Recibido', 'Recogida en origen', 'En el hub', 'Empaquetado', 'En reparto', 'Entregado'];

export const EXAMPLE_ORDER = {
  number: 'F4A-EJEMPLO-0001',
  zone: 'Málaga',
  slot: 'Franja de entrega por definir',
  currentState: 2, // índice en ORDER_STATES
  items: [['p1', 1], ['p3', 1], ['p4', 1], ['p5', 1], ['p6', 1]],
};

export const REMINDERS = [
  ['Aguacates', 'Consúmelos primero: maduran rápido a temperatura ambiente.'],
  ['Pan de masa madre', 'Si sobra, córtalo y congélalo para tostadas.'],
  ['Lentejas', 'Idea: cocina una olla para dos o tres comidas.'],
];

// Pedidos que vería un vendedor (solo su parte del pedido consolidado).
export const VENDOR_ORDERS = [
  { number: 'F4A-EJEMPLO-0004', items: [['p7', 1], ['p8', 1]], pickup: 'Franja de recogida por definir', state: 'Por confirmar' },
  { number: 'F4A-EJEMPLO-0005', items: [['p7', 2]], pickup: 'Franja de recogida por definir', state: 'Confirmado' },
  { number: 'F4A-EJEMPLO-0006', items: [['p8', 1]], pickup: 'Franja de recogida por definir', state: 'Falta: propuesto sustituto' },
];

export const productById = (id) => PRODUCTS.find((p) => p.id === id);
// Suma de líneas [id, cantidad] a precio de ejemplo.
export const linesTotal = (items) => items.reduce((sum, [id, qty]) => sum + productById(id).price * qty, 0);

// Agrupa líneas [productId, qty] por vendedor.
export function groupByVendor(lines) {
  const groups = new Map();
  for (const [id, qty, note] of lines) {
    const p = productById(id);
    const v = vendorOf(p);
    if (!groups.has(v.id)) groups.set(v.id, { vendor: v, lines: [] });
    groups.get(v.id).lines.push({ product: p, qty, note });
  }
  return [...groups.values()];
}
