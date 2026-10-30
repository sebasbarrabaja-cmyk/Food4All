---
name: food4all-requisitos
description: Mapa de los documentos de requisitos de FOOD4ALL (Hito 2 y siguientes) — necesidades, criba, RST, línea base y registro de cambios, entrevistas, especificación RF/RNF, matriz de trazabilidad, estados del pedido, competencia y Asana. Úsala cuando haya que buscar, citar, revisar o cambiar un requisito, una entrevista, la criba, la competencia o la propuesta de Asana.
---

# FOOD4ALL · Requisitos

Todo está en `docs/requisitos/` salvo que se diga otra cosa. Lo que pide el profesor y lo decidido: skill `food4all-contexto`.

| Necesitas… | Archivo |
| --- | --- |
| Foto del Hito 2, registro de cambios (C-xx) y abiertos (apartado 5) | `FOOD4ALL_linea_base_h2.md` |
| Necesidades, regla de evidencia y **cómo registrar una entrevista** (apartado 6) | `FOOD4ALL_necesidades.md` |
| Criba y RST | `FOOD4ALL_criba_argumentos.md` |
| Entrevistas | E1–E4: `FOOD4ALL_entrevistas_estudiantes.md` (preguntas en `FOOD4ALL_entrevistas_E1_E4_preguntas.md`); E5–E6: `FOOD4ALL_entrevistas_E5_E6_juan_antonio.md`; guion: `FOOD4ALL_guion_entrevista_estudiantes.md` |
| Requisitos completos (RF-01 a RF-19, RNF-01 a RNF-11, historias, backlog) | `FOOD4ALL_especificacion_requisitos.md`; el detalle de cada uno en `FOOD4ALL_asana_vista_previa.md` |
| Documento entregado del Hito 2 | `FOOD4ALL_documento_requisitos_hito2.md` |
| Matriz necesidad → requisito | `FOOD4ALL_matriz_trazabilidad.md` |
| Estados del pedido y reembolso de prueba | `FOOD4ALL_estados_pedido.md` |
| Lo que pide el enunciado del Hito 2 (Asana, landing y prompts) | `FOOD4ALL_hito2_enunciado.md` |
| Correcciones tras la valoración y defensa | `FOOD4ALL_correcciones_hito2.md`, `FOOD4ALL_defensa_hito2.md` |
| Personas y mapa de empatía | `FOOD4ALL_personas_empatia_v2.md` |
| Competencia | `FOOD4ALL_comparativo_revisado.md`; recorridos (M-01 a M-08) en `docs/competencia/FOOD4ALL_recorridos_competencia.md`; pequeño comercio (CL-01 a CL-10) en `docs/competencia/comercio-local.md` |
| Propuesta de tareas para Asana | `FOOD4ALL_propuesta_asana.md` |
| Alcance, coste y tiempo | `docs/FOOD4ALL_alcance_coste_tiempo.md` |

## Reglas

- El Excel, la matriz y la vista previa los genera `npm run todo` en `docs/requisitos/benchmark/`. **Solo lo ejecuta Sebastián.** No los edites a mano.
- Cualquier cambio de un requisito decidido va con su entrada en el registro de cambios de la línea base (origen, elemento, impacto, alternativa, decisión, responsable, fecha y versión).
- La landing lee `docs/requisitos` en cada petición (`backend/hito2.js`): si cambias el formato de un archivo, comprueba `/admin#hito2`.
