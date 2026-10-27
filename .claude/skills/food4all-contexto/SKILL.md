---
name: food4all-contexto
description: Contexto de FOOD4ALL para el agente del equipo — qué pide el profesor (temario de las clases 1–11 y su valoración del Hito 2), lo decidido hasta ahora (requisitos v0.4, orden de lo imprescindible, reglas de prioridad MoSCoW, entrevistas) y cómo ayudar a cada miembro. Úsala cuando haya que explicar, argumentar o decidir algo del proyecto, preparar una entrega o una defensa, o responder qué espera el profesor.
---

# FOOD4ALL · Contexto

El resumen del proyecto y las reglas están en `AGENTS.md`; lo que está pasando ahora, en `docs/estado.md`.

## Lo que pide el profesor

**Del temario (clases 1–11):**
- Separa siempre **hecho** (con fuente), **inferencia**, **hipótesis** y **decisión**. Una noticia o un competidor inspiran, pero no prueban nada.
- **Necesidad ≠ requisito ≠ solución.** «El sistema tendrá IA» no es un requisito: un requisito dice qué debe poder hacer el sistema, no cómo.
- Tipos: **RF** (capacidad observable), **RNF** (cualidad medible, con umbral y cómo se comprueba) y **RST** (límite de alcance, política, integración o contexto).
- **Ficha mínima de un requisito:** ID y tipo, actor y valor, «El sistema deberá…», fuente y estado, criterio de aceptación y trazabilidad (necesidad → requisito → tarea, responsable y fecha).
- **Puerta de calidad:** completo, consistente, viable, verificable, dentro de alcance y trazable. Si falla algo, queda «por validar», no «terminado».
- **Criterio de aceptación:** Dado… cuando… entonces…, con un resultado que otra persona pueda comprobar sin preguntar.
- **MoSCoW** es una decisión provisional que se justifica: actor, valor, evidencia, riesgo, esfuerzo y qué queda fuera. Won't no significa que la idea sea mala.
- **Verificar** (¿está bien escrito?) no es **validar** (¿resuelve algo necesario?). Un benchmark no valida una necesidad; las entrevistas sí aportan evidencia.
- **Línea base:** una foto fechada que puede cambiar. Cada cambio registra origen, elemento afectado, impacto, alternativa, decisión, responsable, fecha y versión.
- **La IA solo entra si aporta valor demostrable** y se pueden explicar sus datos, límites, riesgos y la alternativa sin IA. La IA propone; el equipo decide y responde.
- **Asana:** una tarea es una acción observable, con un único responsable, fecha, evidencia y criterio de cierre. Una tarea completada no sustituye a la evidencia.

**De su valoración (21/10 y 23/10):**
- Falta **evidencia de usuarios**: sin entrevistas, todo es hipótesis. Personas documentales y benchmark no validan.
- La **revisión humana** tiene que verse: un miembro distinto del autor comenta elemento, discrepancia, decisión, cambio y fecha.
- La **criba** se argumenta: por qué esos requisitos y no otros.
- Quiere ver los **prompts** en la landing (`/admin#prompts`).

## Lo decidido

- **Requisitos v0.4** (22/10): 22 necesidades, 19 procesos, 564 requisitos (MVP 403, de ellos 36 simulados; Must 307), 19 historias y matriz generada. Criba aprobada el 23/10 (C-28) y RST validadas (C-27). Cada cambio está en el registro de la línea base.
- **Orden de lo imprescindible** (C-13): 1) el carrito simplificado (varios vendedores, un pedido, un pago) y 2) los productos (precio claro, local y poco procesado), que van ligados; 3) el asistente de IA, detrás. La confianza en la IA es baja en las entrevistas (N-IA-01 «No confirmada»).
- **Prioridad:** Must solo en el MVP; el MVP lleva Must o Should; V2, Should o Could; V3, solo Could. Es Must si, al quitarlo, la demo deja de responder al problema o se incumple algo obligatorio.
- **Una entrevista en contra no cambia un requisito:** se registra como riesgo. Con 3 o más en contra, se reabre con un registro de cambio.
- **Pago y reembolso son de prueba:** nunca hay dinero real.
- **Entrevistas:** E1–E4 (Sebastián) y E5–E6 (Juan Antonio); las de Miguel se descartaron porque eran de IA (C-22). 6 necesidades en «Indicio», ninguna confirmada (C-25). No hay entrevistas a vendedores.

## Cómo ayudar a cada miembro

Explica las preguntas con los datos de los documentos y propone opciones con sus razones. La persona decide y escribe su respuesta. Si la redactas tú, se marca «redactada con ayuda del asistente» y el prompt se registra.
