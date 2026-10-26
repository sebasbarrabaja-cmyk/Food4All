---
titulo: Sesión de alcance, coste y tiempo del proyecto
fecha: 2026-10-26
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Organización del equipo
origen: Sesión en WSL sobre la rama docs/alcance-coste-tiempo (desde main). Horas aproximadas (~), reconstruidas por el asistente
---

### ~12:20

Define el alcance, costo y tiempo de Food4All

**Resultado:** El asistente leyó la documentación (línea base, criba, contexto y análisis del mercado del Hito 3) y propuso una especificación: un documento con alcance, tiempo, coste y supuestos, con cada dato etiquetado (hecho, inferencia, hipótesis), sin tocar los requisitos, Asana ni la landing. Hizo tres preguntas: 1) ¿coste del proyecto de clase, del negocio real o de los dos?; 2) ¿formato?; 3) ¿tarifa?

### ~12:40

1c 2a 3a

**Resultado:** Se creó `docs/FOOD4ALL_alcance_coste_tiempo.md` con los dos planos: A) proyecto de clase (5 hitos, calendario inferido desde el 21/09/2026, 306 h de equipo con la hipótesis de 6 h por persona y semana, 6.521–8.456 € de horas equivalentes con tarifa junior pública y cotización de 2026); B) negocio real (piloto de un curso con 3 hubs: ≈ 118.500–199.800 € de coste frente a 28.000–225.000 € de ingresos, lo que confirma el riesgo R6). Cifras calculadas con un script; fuentes al final del documento.

### ~13:05

199 000 para todo el proyecto, no es barato?

**Resultado:** El asistente aclaró que los 199.800 € son solo el primer curso del negocio en el escenario optimista, y que es un mínimo: faltan partidas (vehículos con frío, personal del hub y de atención, gestión, marketing, seguros, gestoría, mantenimiento del software), y el MVP y el reparto están calculados a la baja. Propuso añadirlas al documento.

### ~13:10

a

**Resultado:** Versión 0.2 del apartado B.3. Se separan las partidas con fuente o calculadas (MVP, repartidores, pasarela, gestoría, seguro e IA) de las que solo tienen una hipótesis del equipo (alquiler, furgonetas con frío, personal del hub, atención al cliente, dirección, mantenimiento, marketing, asesoría y servidores). Coste del primer curso: 185.957–433.787 € frente a 28.000–225.000 € de ingresos. El modelo no cubre costes en ningún escenario, ni siquiera sin el MVP, lo que refuerza el riesgo R6. Cifras recalculadas con un script.

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
