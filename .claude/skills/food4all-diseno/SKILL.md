---
name: food4all-diseno
description: Reglas de diseño de la landing de FOOD4ALL — principios, tokens de color, tipografía, espacios, movimiento, componentes y errores que no hay que repetir. Úsala antes de mirar, revisar o cambiar cualquier parte visual (páginas, panel, estilos, imágenes) y para decidir qué componente o token usar.
---

# FOOD4ALL · Diseño

La guía completa es `docs/DISENO.md`. Aquí está lo que no se puede saltar y dónde mirar cada cosa.

## Siempre

- **«Tres botones y ya»:** Quiero comprar, Quiero vender y Cómo funciona. Si una pantalla obliga a pensar más, sobra contenido.
- **Honestidad:** datos y precios de ejemplo marcados como tal (aviso «meramente representativos»), sin prueba social y separando decidido, hipótesis y por definir.
- **Colores solo con tokens** de `frontend/src/styles/tokens.css`; transparencias con `color-mix(in srgb, var(--token) N%, transparent)`. Ni azules, ni morados, ni degradados decorativos. El naranja `--accent` solo para lo que se pulsa.
- **Fondo oscuro = `--forest`, nunca `--green`.** Texto sobre azafrán en `--on-saffron`. Contraste: texto ≥ 4,5 y filetes ≥ 3.
- **Modo claro siempre**; pensada para ordenador (el móvil, sin prioridad).
- Tipografía: Fraunces en los títulos y Figtree a 17 px en el texto. Nada de Inter, Roboto ni Arial.
- Movimiento suave, y nada con `prefers-reduced-motion`.
- **Prohibido:** efecto cristal, tarjetas anidadas, emojis como iconos y bordes de color a la izquierda.

## Dónde mirar en `docs/DISENO.md`

| Necesitas… | Apartado |
| --- | --- |
| Tabla de tokens de color y sus usos | 2 |
| Tamaños de letra y rótulos | 3 |
| Radios, espacios, zonas táctiles y animaciones | 4 |
| Qué componente usar (cabecera, bandas, `Blob`, `Status`, `Icon`…) | 5 |
| Fotos (Commons, créditos, `tools/fotos/`) | 6 |
| Lo que ya se probó y no funcionó | 8 |

## Al terminar un cambio visual

- Accesibilidad: skill `frontend-a11y`. En el navegador: skill `browser-qa`.
- Si cambia una regla, un token o un componente, actualiza `docs/DISENO.md` en el mismo commit.
- Todo cambio en la landing va con su registro en `prompts/` (skill `food4all-prompts`).
