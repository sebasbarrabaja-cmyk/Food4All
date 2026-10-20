# Requisitos de FOOD4ALL (Hito 2)

Requisitos del **marketplace** FOOD4ALL, no de la landing. Están en tres sitios con el mismo contenido: este documento, el Excel y Asana.

| Fichero | Qué es |
| --- | --- |
| [`FOOD4ALL_especificacion_requisitos.md`](FOOD4ALL_especificacion_requisitos.md) | La especificación: necesidades, personas, procesos en cascada, historias, RF-01 a RF-19, RNF-01 a RNF-11, trazabilidad, backlog y el ejemplo del login (Anexo A) |
| `FOOD4ALL_requisitos_benchmark.xlsx` | Los 556 requisitos atómicos, cada uno con su criterio de aceptación y comparado con Mercadona, Glovo, Too Good To Go, Wetaca, Market Wagon y Open Food Network. Se filtra por proceso, prioridad o posición |
| [`FOOD4ALL_asana_vista_previa.md`](FOOD4ALL_asana_vista_previa.md) | Todas las tareas de Asana con su descripción, para leerlas sin abrir Asana |
| [`FOOD4ALL_propuesta_asana.md`](FOOD4ALL_propuesta_asana.md) | Cómo se decidió organizarlo en Asana y el reparto propuesto |
| `benchmark/` | Scripts que generan el Excel y las tareas de Asana |

## Dónde está en Asana

Proyecto de la asignatura → **[Food4All] Hito 2 – Requisitos y Criterios de Aceptación**:

- **[B4] Catálogo de requisitos → Requisitos funcionales**: un proceso por subtarea (RF-01 a RF-19), en orden de construcción. Dentro de cada proceso hay un subrequisito por pantalla o método (RF-01.1, RF-01.2…), y cada uno lleva su ficha.
- **[B4] → Requisitos no funcionales**: RNF-01 a RNF-11.
- **[B5] User stories → Product Backlog**: US-01 a US-13, con prioridad, puntos y entrega.

Todavía no tienen responsable ni fecha: se reparten en equipo. El reparto propuesto está en el apartado 4 de la propuesta.

## Cómo trabajar tu requisito

1. Abre en Asana la subtarea de tu subrequisito (por ejemplo, `RF-05.2 · Vista del carrito agrupada`).
2. Completa los apartados marcados «Por completar por el responsable». Como base tienes los requisitos atómicos de la lista de abajo; para el diseño, [`docs/DISENO.md`](../DISENO.md).
3. Usa como modelo el login (RF-01.1 a RF-01.7), que ya está completo. Un programador tiene que poder construirlo sin preguntar nada: dónde va, qué se ve, textos exactos, colores, errores y criterios en Gherkin.
4. Si cambias un requisito, cámbialo también en el Excel, en `benchmark/` (ver abajo).
5. Pide revisión en un comentario de la subtarea. El revisor aprueba con otro comentario y se cierra.

Identificadores: `RF-05` es un proceso, `RF-05.2` un subrequisito y `RF-05.2-03` un requisito atómico. Los criterios de aceptación se nombran `RF-05.2.CA1`.

## Regenerar el Excel y la vista previa

Requiere Node 22 o superior.

```bash
cd docs/requisitos/benchmark
npm install
npm run build    # FOOD4ALL_requisitos_benchmark.xlsx desde los .js de requisitos
npm run asana    # FOOD4ALL_asana_vista_previa.md y asana_tareas.json desde el Excel y la especificación
```

Los requisitos se escriben en `rf01.js`, `rf02_04.js`… con `R(texto, criterio, prioridad, entrega, funciones, necesidad)`. Los datos de la competencia están en `bench.js`: si comprobáis a mano una función en una app, se corrige allí.

## Subida a Asana (solo quien la coordine)

`subir_asana.js` escribe en el proyecto de clase, que comparten los tres grupos. No lo ejecutéis sin acordarlo antes. Usa el token de `backend/.env`.

| Fichero | Para qué |
| --- | --- |
| `asana_creadas.json` | Las 173 tareas creadas el 20/10/2026, con su ID de Asana. `node subir_asana.js --deshacer --si` las borra; no borra nada más |
| `asana_borradas.json` | Las 22 tareas antiguas que se quitaron: 14 fichas de B4 (RF-CUE-01…) y las subtareas vacías de B3 y B5 |
| `asana_copia_hito2_antes.json` | Copia completa del Hito 2 antes del cambio (nombres, descripciones, comentarios), por si hay que recuperar algo |
