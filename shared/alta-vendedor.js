// Reglas del alta de vendedores, en un solo sitio para el backend y el frontend.
// Las usa backend/server.js (POST /api/sellers/apply); frontend/src/pages/Vender.jsx tiene aún su
// copia (encargo #7 de Juan Antonio: importarlas de aquí).
export const TIPOS_VENDEDOR = ['agricultor', 'granja', 'fruteria', 'panaderia', 'obrador', 'despensa', 'cocina'];
export const ZONAS = ['malaga', 'sevilla', 'granada'];
// Longitud máxima de cada campo (caracteres).
export const MAX_LEN = { businessName: 120, email: 120, phone: 120, sanitaryRegistry: 300, offer: 1000, pickupHours: 120 };
