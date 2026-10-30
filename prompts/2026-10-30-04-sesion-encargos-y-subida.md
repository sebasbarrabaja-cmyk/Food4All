---
titulo: Encargos entre personas leídos por el agente al abrir la sesión, quitar Gemini y subir las ramas
fecha: 2026-10-30
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Organización del equipo
resultado: Código
etiquetas: organización, landing
landing: interno
origen: Continuación de 2026-10-30-03 (misma sesión)
---

Horas aproximadas: la sesión no guardó la hora de cada mensaje.

### ~13:55

Subelo al git para que cuando lo abra sepa ya su agente su tarea, ponlo como regla, cada vez que alguien tenga que hacer un cambio, que lo ponga en un archivo que se lo indique para evitar decir todo el rato que le envie un mensaje a alguien. ya esta lo del git. Luego necesito que quites todo lo que tenga que ver con gemini, por que voy a ir por la ia local. Lo de la contraseña por ahora es innecesario

**Resultado:** Gemini: fuera de las decisiones del panel (`backend/project.js`) y del coste del proyecto de clase; ya no queda en el código. Los registros de `prompts/` lo siguen nombrando porque se guardan tal cual. Quedan dos sitios que decide Sebastián: `backend/.env.example` (el asistente no puede abrirlo) y la partida «IA real» del coste del negocio real (`docs/FOOD4ALL_alcance_coste_tiempo.md`, apartado del negocio), que usa precios de Gemini como referencia. Cambiar `ADMIN_PASSWORD` deja de estar pendiente.

**Resultado (encargos):** en `feat/encargos`: carpeta `docs/encargos/` con un archivo por persona (`sebastian.md`, `juan-antonio.md`, `miguel.md`) y su formato en `docs/encargos/README.md`; regla 11 en `AGENTS.md` (apuntar ahí lo que otra persona tiene que hacer, en el mismo commit, en vez de pedir que se le mande un mensaje); el hook de inicio (`tools/pendientes-sesion.mjs`) enseña los encargos abiertos de quien abre la sesión, de su copia y de `main` en GitHub, además de sus issues. Encargos apuntados: 5 para Juan Antonio (los del mensaje de hoy) y 3 para Sebastián (`.env.example`, la partida «IA real» del negocio y unir los PR en `main`). Probado el hook como Sebastián y como Juan Antonio. La detección de la persona pasa a `tools/tokens-comun.mjs` (la usan los dos hooks).

#### Revisión de código (/code-review)

Diez posibles fallos. Arreglados: (1 y 2) un encargo se reconocía por su texto, así que uno retocado o con el mismo principio que otro hecho se perdía o salía dos veces → cada encargo lleva un número fijo (`#1`, `#2`…); (3) el hook forzaba su propio `ssh` y en Windows no vería la clave → usa el `core.sshCommand` de cada uno; (4) `git fetch` y `gh` iban uno detrás de otro (hasta 16 s) → a la vez; (5) un `food4all.persona` mal escrito («juan») mandaba todo a un archivo que nadie lee → solo vale un ID del equipo; (6) desde una subcarpeta no encontraba los encargos → usa la raíz del repositorio; (8) código repetido; (9) las ayudas de git pasan a `tools/git-comun.mjs`, solo para los hooks; (10) el hook salta también al reanudar la sesión y tras `/clear`. Sin cambiar: (7) `git fetch` solo actualiza la copia de `origin/main`, no los archivos de nadie. Probado en un repositorio de prueba: un encargo hecho con el texto retocado ya no sale, la línea vacía se ignora y «juan» se descarta.

### ~14:05

a

**Resultado:** Se abren los PR, apilados, además de subir las ramas.

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
