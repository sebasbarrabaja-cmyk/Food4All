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

### ~13:20

Segun nuestro profesor, le costo montar el marketplace mundo animal 3.2M(Ahora solo estamos con ideas, nada confirmado)

**Resultado:** El asistente comparó la cifra con la estimación del documento (orden de magnitud, qué puede incluir) y propuso preguntas para el profesor. No se cambió el documento; quedó como propuesta registrarla como referencia sin nombrar la empresa (repositorio público).

### ~13:30

a. Tambien piensa que nuestro objetivo es minimo alacncar toda la peninsula iberica

**Resultado:** La cifra del profesor no entra en el documento hasta que él aclare qué incluye. El asistente explicó qué supone el objetivo de la península (fases, coste por ciudad, Portugal y RST-04) y propuso cómo registrarlo, sin cambiar todavía el documento ni la línea base.

### ~13:40

Una cosa, abreme la landin para mostrarsela al profesor, y dime que cambios tiene respeto al viernes

**Resultado:** Se arrancó la landing (`npm start`, `localhost:3001`) desde `docs/alcance-coste-tiempo` (mismo código de la landing que `main`) y se abrió en Firefox. Resumen de los 15 commits de la landing desde el viernes 23/10 a las 22:05 (`0672c3c`, último de ese día en `main`). La pregunta sobre cómo registrar el objetivo de la península quedó pendiente.

### ~13:50

No funciona la contraseña default

**Resultado:** El asistente revisó el login del panel sin leer `backend/.env`: no hay contraseña por defecto en el código, valen el usuario y la contraseña de `.env`, que se leen al arrancar, y tras 5 fallos la IP queda bloqueada 15 minutos. Le dio a Sebastián los pasos para cambiarla él y reiniciar el servidor.

### ~13:55

Usuario o contraseña incorrecto

**Resultado:** El asistente propuso causas sin leer `.env`: copia distinta del `.env` (la de `Food4All-recibido-2026-10-23`), finales de línea de Windows, espacios o comillas, o el usuario. Le dio a Sebastián cómo comprobarlo él y cómo reescribir las dos líneas.

### ~14:00

LA contraseña es la correcta, pero no entra

**Resultado:** El código del login es correcto (compara exactamente usuario y contraseña con `.env`). Se reinició el servidor para que lea el `.env` actual y se borre el bloqueo. El asistente preparó un diagnóstico que lee `.env` como el servidor y muestra solo longitudes y avisos (espacios, `\r`, comillas), sin los valores, para que lo ejecute Sebastián.

### ~14:10

Lo de promt, version pulida es innecesario, una idea descartada, quitalo

**Resultado:** El asistente localizó todo lo que depende de la «versión pulida» (botones «Pulir con IA» y «Pulir antes de guardar», ruta `/api/admin/prompts/polish`, `backend/agent.js`, el tipo «Versión pulida», estilos y documentación; ningún prompt registrado la usa) y propuso una especificación con dos preguntas antes de tocar nada.

### ~14:15

1a 2a

**Resultado:** Rama `refactor/quitar-version-pulida` (encima de `docs/alcance-coste-tiempo`). Se borró `backend/agent.js` y se quitaron la ruta `/api/admin/prompts/polish`, el tipo «Versión pulida», los botones «Pulir con IA» y «Pulir antes de guardar», el aviso del agente revisor, sus estilos y sus menciones en `README.md`, `prompts/README.md` y `docs/DISENO.md`. El buscador del panel sigue igual (ahora importa `aiReady` y `AIError` de `gemini.js`). Probado con un servidor de prueba en otro puerto: la lista de prompts carga (25), los tipos ya no incluyen «Versión pulida», la ruta de pulir da 404, un prompt con ese tipo se rechaza (400) y el buscador responde. Compila; el paquete ya no contiene «Pulir». /code-review hecho.

### ~14:25

abrela

**Resultado:** Se abrió `localhost:3001/admin#prompts` en Firefox, con el servidor ya reiniciado con la rama `refactor/quitar-version-pulida`.

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
