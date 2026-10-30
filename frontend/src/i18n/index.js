// Punto 3 del feedback del 27/10: web pública en español e inglés (docs/contratos.md, apartado 6).
// El panel (/admin) sigue en español. Los datos de ejemplo (data/examples.js) están en español y
// solo en.json los traduce: si falta una clave, se ve el texto original.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es.json';
import en from './en.json';

export const IDIOMAS = [['es', 'Español'], ['en', 'English']];
const GUARDADO = 'food4all-idioma';

// Sin dependencias extra para detectarlo: lo elegido antes y, si no hay, el idioma del navegador.
function idiomaInicial() {
  try {
    const g = localStorage.getItem(GUARDADO);
    if (IDIOMAS.some(([c]) => c === g)) return g;
  } catch { /* almacenamiento bloqueado: seguimos */ }
  return navigator.language?.toLowerCase().startsWith('es') === false ? 'en' : 'es';
}

i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: idiomaInicial(),
  fallbackLng: 'es',
  // Hay textos con «:» y claves con espacios (categorías): solo el punto separa claves.
  nsSeparator: false,
  interpolation: { escapeValue: false }, // React ya escapa
});

export function cambiarIdioma(lng) {
  i18n.changeLanguage(lng);
  try { localStorage.setItem(GUARDADO, lng); } catch { /* sin almacenamiento: solo esta visita */ }
}

// Texto de un dato de ejemplo: en.json lo traduce y, si no, se queda el original en español.
export const dato = (t, grupo, valor) => t(`datos.${grupo}.${valor}`, { defaultValue: valor });

// Producto de ejemplo con sus textos en el idioma actual (el resto de campos, igual).
export function productoT(t, p) {
  const c = (campo) => t(`datos.productos.${p.id}.${campo}`, { defaultValue: p[campo] });
  return { ...p, name: c('name'), unit: c('unit'), origin: c('origin'), allergens: c('allergens'), dateType: c('dateType'), storage: c('storage') };
}

// Precio en euros con el formato del idioma (4,50 € / €4.50).
export const eurT = (lng, n) => n.toLocaleString(lng === 'en' ? 'en-GB' : 'es-ES', { style: 'currency', currency: 'EUR' });

export default i18n;
