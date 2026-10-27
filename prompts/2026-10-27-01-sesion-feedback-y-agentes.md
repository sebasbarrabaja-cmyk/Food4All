---
titulo: Feedback del profesor (27/10) y organización de los agentes
fecha: 2026-10-27
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Organización del equipo
origen: Feedback del profesor sobre la landing y reorganización de AGENTS.md, skills y tokens
---

Horas aproximadas: la sesión no guardó la hora de cada mensaje; se estiman a partir de la primera hora medida (11:28, justo después del cuarto mensaje).

### ~11:05

Feedback del proferor sobre Food4All buscador con IA dentro del apartado de administrador, integrar la información de asana a la landing(Quiere en cierto punto cerrar asana) Selector de idiomas(enfocado en extrangeros) FAQ, un idicador de uso de tokens(total y por acción) Trazabilidad. Sistemas de avisos(de tareas que hay que hacer, ordenado por nombre, que cada uno tenga su sesión) Chronograma. Un apartado de espectativa vs realidad. Base de datos para guardas los promts, con sql postgress. Mejor ordenamiento de promst, Persona, uso, resultado y etiquetado(principalmente, por si el profesor quiere ver los promst que se usaron para la landin, para resolver un requisito, para buscar información, etc). Quiero que primero analices lo que te dicho y luego lo pongas en pendiente. Luego de esto quiero organizar varios aspectos internor de agentes. Para ahorrar tokens. Crear skills, gestionar que lee de manera automatica claude, que recursos tiene que usar en cada momento, y establecer una reglas que si te conectas al github todos tengan lo mismo y lo necesario

**Resultado:** Análisis de los 11 puntos: qué hay hoy, qué falta y su tamaño. Ya existe el buscador con IA del panel (`/api/admin/ask`) y la lectura de Asana; no hay idiomas, FAQ, consumo de tokens, usuarios propios ni base de datos (los prompts son `.md` y las altas, JSON). Orden propuesto por dependencias: FAQ → tokens → orden de prompts → Postgres → usuarios y avisos → Asana en la landing → cronograma → trazabilidad → expectativa vs. realidad → buscador; idiomas en paralelo. Con Postgres, los `.md` seguirían siendo la copia oficial. Cuatro preguntas: dónde guardar los pendientes, rama, tokens y trazabilidad.

### ~11:12

#5: No  de gemini, sino de todo, incluido esta conversación. 1b(Si luego repartiremos las tareas de las mejoras) 2a 3b(Puedes apuntarlos tu) 4a. No hagas nada, solo estamos en analisis y pulir la carpeta agents

**Resultado:** Decisiones apuntadas: los pendientes irán a issues de GitHub (más adelante, para repartirlos); rama nueva; tokens de todo el desarrollo, apuntados por el asistente; trazabilidad necesidad → requisito → tarea → prompt. No se cambió nada. Se midió lo que lee el agente: `AGENTS.md` (17.789 caracteres, unos 5.000 tokens) se carga entero en cada sesión.

### ~11:15

No tiene skills, hay que crearlas. Una para cuando quiera mirar el diseño, otra con la arquitetura, otra con el contexto(Esto es un ejmplo, no tiene por quer ser la mejor organización)

**Resultado:** Propuesta: `AGENTS.md` corto, con las reglas y un mapa de skills, y cinco skills (contexto, arquitectura, diseño, prompts y requisitos), además de `docs/estado.md` y un `.claude/settings.json` compartido. Cinco preguntas.

### ~11:22

1a 2b(usan todos claude) 3a 4a 5a Sobre los tonkesn solo actualizalo al final de la sesión, exige a las personas que cuando salgan se guarden, no se si se puede tocar el "/extit"

**Resultado:** `/exit` no hace falta tocarlo: el hook `SessionEnd` de Claude Code se ejecuta solo al cerrar y puede sumar los tokens del historial. Especificación (prompt-master) con dos preguntas: dónde guardar los tokens y si se suben al repositorio.

#### Especificación

Rama `refactor/organizar-agentes`. `AGENTS.md` ≤ 3.500 caracteres, con las reglas obligatorias sin cambiar su sentido y una tabla «situación → skill». Skills `food4all-contexto`, `food4all-arquitectura`, `food4all-diseno`, `food4all-prompts` y `food4all-requisitos`. Traspasos a `docs/estado.md`. `.claude/settings.json` con permisos de solo lectura y un hook `SessionEnd` → `tools/tokens-sesion.mjs`. No se tocan el código de la landing, `browser-qa`, `frontend-a11y`, `.env`, Asana, ni se hace push.

### ~11:27

1b(Con el nombre de los gastos, como una tabla de excel de cada persona, aunque visualmente se vea de otra manera, incluso lo puedes guardar en la base de datos, junto al promt o la sesión) 2b .Y antes de nada haz limieza de todo texto innecesario, luego OK

**Resultado:**
- **Limpieza:** `AGENTS.md` pasa de 17.789 a 2.846 bytes. Fuera lo caducado (la entrega del 23/10, la llamada, «esta rama `docs/hito2-entrega`», lo ya hecho: criba aprobada, RST validadas, revisión crítica, ramas unidas). Lo que sigue vivo va a `docs/estado.md`, junto con el feedback de hoy.
- **Textos caducados corregidos:** el «revisor de prompts» en `backend/gemini.js` y `backend/search.js` (se quitó el 26/10), «se pulen con IA» en `prompts/README.md` y «Precio todavía no disponible» en `README.md`. Quedan apuntados en `docs/estado.md`, sin tocar, el «Revisor de prompts» que `backend/project.js` da por decidido y `MODELS.smart`, que no usa nadie.
- **Skills:** las cinco, en `.claude/skills/`. Claude Code las detecta.
- **Tokens:** una sola tabla, `docs/tokens.csv`, con una columna por concepto (`fecha, persona, rama, sesion, motivo, modelos, mensajes, entrada, salida, cache_escritura, cache_lectura, total`), en `.gitignore`. Probado con un historial falso: cuenta una vez cada mensaje repetido, salta las líneas rotas y no escribe nada si falta el historial o la entrada no es JSON. **Sin probar** con una sesión real.
- Más adelante se puede pasar a la base de datos, junto al prompt o la sesión (punto 9 del feedback).
- **Bloqueo encontrado:** `.git/info/exclude` (local) ignoraba `.claude/`, así que nunca se había subido ninguna skill ni ningún ajuste: los compañeros no tenían `browser-qa` ni `frontend-a11y`. Esta sesión no apunta sus tokens: se abrió en `~/proyectos` y no en `food4all`.

### ~11:38

1a 2a

**Resultado:** Se quitó `.claude/` de `.git/info/exclude` y se añadió `.claude/settings.local.json` a `.gitignore` (ajustes personales). `git config user.name` pasa a «Sebastián» solo en este repositorio, para la columna `persona` de los tokens. La revisión automática (/code-review) miró el diff de la rama anterior y sus tres avisos no se sostienen al comprobarlos (`words()` se usa, las clases `.polish*` ya no están en el CSS, «Versión pulida» solo aparece en el texto de un mensaje). Los cambios de esta rama se revisaron a mano. Tres commits: reglas y skills, tokens, y textos caducados.

### ~11:40

Reparte la tarea entre los 3, como miguel no trabajó mucho, ponle más tareas hoy. Solo un punto, yo me encargo de los promts y la IA. Y organizalo de tal manera que podamos hacer cada uno nuestra parte aunque dependa de otro, que todo coincida cuando se una

**Resultado:** Propuesta de reparto. Sebastián: 1, 5, 9 y 10 (prompts e IA). Miguel, con más carga: base de datos común, 7, 2, 8 y 6, y para hoy base de datos, login por persona y avisos. Juan Antonio: 3, 4 y 11 (páginas públicas que no toca nadie más). Para que encaje al unirlo: un esqueleto con todo lo compartido ya preparado, contratos de cada ruta con datos de prueba, datos de prueba si no hay base de datos, migraciones numeradas por dueño, claves comunes y un orden de unión. Cinco preguntas.

### ~11:42

1b 2a 3(que lo decida Miguel) 4(los colaboradors del git) 5a ok

**Resultado:**
- **Decisiones:** `react-i18next` para los idiomas; contraseñas con `scrypt`; el motor de base de datos lo elige Miguel; issues asignados a los colaboradores del repositorio (`sebasbarrabaja-cmyk`, `MiguelJMN` y `Jamc46`, que se toma por Juan Antonio por descarte); español e inglés.
- **Rama `feat/esqueleto-feedback`:**
  - `docs/contratos.md`: reparto, archivos de cada uno, rutas, base de datos, claves comunes, sesión, idiomas y orden de unión.
  - `backend/db.js` (interfaz vacía para Miguel) y `backend/modulos/` (seis módulos montados con una línea en `server.js`), cada uno con su archivo en `backend/datos-prueba/`.
  - Seis secciones en el panel, con su componente vacío y sus entradas en `SECTIONS`, `KEYWORDS` y `DESTINOS`.
  - Página `/faq`, con su enlace en el pie.
- **Probado:** compila; las seis rutas dan 401 sin sesión y 200 con la forma del contrato; `/faq` responde 200. **Sin probar** en el navegador con sesión: la contraseña del panel está en `.env`.

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
