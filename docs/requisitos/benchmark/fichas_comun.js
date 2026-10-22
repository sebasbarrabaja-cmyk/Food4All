// Piezas de diseño que se repiten en las fichas. Valores de frontend/src/styles/tokens.css y docs/DISENO.md.
// Cada ficha las cita por su nombre para no repetir el mismo párrafo cien veces.
const D = {
  boton: 'Botón principal: píldora (--radius-pill), 48 px de alto, fondo --accent #D9822B, texto --on-accent #23301F en Figtree 600. Ratón encima: sube 2 px en 200 ms. Foco: anillo de 2 px --green #2F5233 separado 2 px. Desactivado: opacidad 50 % y cursor «no permitido». Cargando: texto en gerundio («Guardando…») y desactivado',
  botonSec: 'Botón secundario: píldora, 44 px, fondo --surface #FFFFFF, borde 1 px --border #DDD0B0, texto --green; mismos estados de foco y desactivado que el principal',
  enlace: 'Enlace de texto en --green con subrayado; foco con anillo de 2 px --green',
  campo: 'Campo: 48 px de alto, borde 1 px --border #DDD0B0, radio 10 px, etiqueta visible encima en Figtree 600; foco: borde de 2 px --green; error: borde --danger #C0392B y mensaje debajo en --danger con icono',
  tarjeta: 'Tarjeta: fondo --surface #FFFFFF, borde 1 px --border #DDD0B0, radio --radius 10 px, sin sombra, 24 px de relleno; nunca tarjetas dentro de tarjetas',
  avisoError: 'Aviso de error: fondo --tint-tomato #F6DCD3, texto --text #23301F, icono de alerta en --danger',
  avisoOk: 'Aviso de éxito: fondo --success #2F7D4B al 12 %, texto --text, icono de check en --success; desaparece a los 4 s',
  avisoInfo: 'Aviso informativo: fondo --tint-mustard #F8ECC8, texto --text',
  badge: 'Badge: píldora pequeña, fondo del color de estado al 12 %, texto del color de estado, 0.78rem',
  titulo: 'Título en Fraunces 600, color --green #2F5233 (h1 clamp(2.2rem, 6vw, 3.6rem); h2 clamp(1.6rem, 3.5vw, 2.2rem); h3 1.2rem)',
  texto: 'Texto en Figtree 17 px, interlineado 1,6, color --text #23301F; texto de ayuda en --text-soft #4A5340',
  tabla: 'Tabla: cabecera en --tint-sage #E4ECD9 con Figtree 600, filas de 48 px separadas por borde 1 px --border; en menos de 768 px cada fila pasa a tarjeta',
  panel: 'Panel interno (vendedor, operador o admin): fondo --bg #F6F1E6, contenido en tarjetas; pestañas o barra lateral con la sección activa marcada',
};
const A = {
  base: 'Orden de tabulación igual al orden visual; foco siempre visible; zonas pulsables de 44 × 44 px como mínimo; contraste ≥ 4,5:1 (RNF-05)',
  form: 'Cada campo con <label> visible asociado; errores anunciados con aria-live="polite" y enlazados al campo con aria-describedby; al fallar el envío, el foco va al primer campo con error (RNF-05)',
  estado: 'Los cambios de estado se anuncian con aria-live; el estado nunca se indica solo con color: siempre lleva texto (RNF-05)',
};
module.exports = { D, A };
