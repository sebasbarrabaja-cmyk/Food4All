---
titulo: Contexto del proyecto y regla de registrar prompts
fecha: 2026-10-22
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Contexto y método
origen: Mensajes enviados a Claude Code en la sesión, en orden y sin corregir
---

Mensajes enviados a Claude Code para generar el contexto completo del proyecto y dejar fijada la regla de guardar los prompts.

### 15:35

Actualiza y dame en un .md todo el contexto del proyecto. Y dame 2 .md en esta carpeta, uno con todo el contexto que se llame así, y otro que sea un resumen de este muchisimo mas breve. 1 con el que un agente puede trabajar, que es largo y minucioso mientras que el otro es para que una persona la lea, recuerda guardar este promt

**Resultado:** el usuario interrumpió la primera lectura de ficheros para precisar la regla de los prompts (mensaje siguiente). Después se crearon `FOOD4ALL_contexto.md` (para agentes) y `FOOD4ALL_resumen.md` (para personas) en `C:\Universidad\Software`.

### 15:38

Mejor dicho, ponte en la reglas para no recordartelo que siempre lo guardes, con fecha, persona y resultado

**Resultado:** regla guardada en la memoria de Claude Code y en `C:\Universidad\Software\CLAUDE.md`. Se añadió la línea **Resultado** al formato de `prompts/README.md`, y se registró esta sesión.

### 15:47

Por que el contexto antiguo es mas largo?

**Resultado:** se explicó que el documento maestro (`FOOD4ALL_master_prompt.md`, 2.431 líneas) es la fuente completa del negocio y `FOOD4ALL_contexto.md` (326 líneas) es un mapa del estado del proyecto que remite a él sin copiarlo. Se ofreció leer el maestro entero y añadir sus puntos clave.

### 15:50

Queiro que el contexto tenga todo

**Resultado:** se leyó entero el documento maestro, el prompt de la landing, el comparativo, el borrador de requisitos y la especificación. Se aprobó un plan y se reescribió `FOOD4ALL_contexto.md` integrando todo su contenido.

### 16:10

Cuando lo tengas ajustado, elimina todo lo repetido e innecesario. Sin que se pierda nada de info ni este repatido entre 10 ficheros

**Resultado:** contexto reescrito (1.319 líneas) sin repeticiones internas. Se preguntó qué hacer con los ficheros de origen; el usuario respondió con el mensaje siguiente.

### 16:20

(Respuesta a la pregunta del asistente) Borra los 4, y que no tengan contenido redundante. Y revisa que no haya fallos graves como por ejmeplo FOOF4ALL en vez de FOOD4ALL. Dentro del repo: no tocarlos.

**Resultado:** se pasó al contexto la lista entera de los 211 requisitos del borrador. Se borraron de `C:\Universidad\Software` los ficheros `FOOD4ALL_master_prompt.md`, `FOOD4ALL_prompt_landing.md`, `FOOD4ALL_requisitos.md` y `esquema_comparativo_de_empresas_de_alimentaci_n.md`; los dos primeros siguen enteros en `prompts/`. Erratas revisadas: no queda ningún «FOOF4ALL» por error; los que aparecen son citas de la errata o el filtro de Asana que la acepta. El repo no se tocó.

---

## Revisión crítica del equipo

*La escribe la persona autora (o quien revise), con sus palabras. No la redacta el asistente. Mientras ponga «pendiente», el panel marca este prompt como «Revisión pendiente».*

- **Revisado por:** _pendiente_
- **Fecha:** _pendiente_
- **Qué aceptamos de lo que propuso la IA y por qué:** _pendiente_
- **Qué corregimos, rechazamos o comprobamos aparte:** _pendiente_
- **Por qué estaba justificado usar IA aquí:** _pendiente_
