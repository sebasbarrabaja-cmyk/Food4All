---
titulo: Comentario del profesor sobre la criba y regla de no comentar en Asana
fecha: 2026-10-23
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Requisitos del Hito 2
resultado: Análisis o decisión
etiquetas: requisito, Asana
requisitos: N-CAD-01, N-CAR-01, N-CAT-01, N-IA-01, N-PLA-01, N-PLA-02
origen: Mensajes enviados a Claude Code en la sesión, en orden y sin corregir
---

Mensajes enviados a Claude Code el día de la entrega del Hito 2, después del comentario del profesor en «Criba de requisitos».

### 14:03

Que queda por hacer, el profesor subio un comentario. No subas nunca comentarios, apuntalo como regla

**Resultado:** se leyeron, solo con GET, los comentarios de las 272 tareas [Food4All]. El comentario nuevo es del profesor (23/10, 09:23) en «Criba de requisitos»: «Esto lo ha hecho la IA. Necesito los prompts en la landing documental y que me expliquéis porque habéis cribado esos en concreto. Argumentos.»

Se añadió la regla 6 a `CLAUDE.md` («Nunca publiques comentarios en Asana») y se guardó también en la memoria del asistente. Se quitó de `actualizar_asana.js` la opción `--comentar-criba` y se corrigió el README de requisitos. Se le dio al usuario la lista de lo que queda para la entrega. No se escribió nada en Asana.

### 14:26

2: he suvido mis entrevistas

**Resultado:** primero se buscaron en Asana, solo leyendo, y no estaban. Se iba a buscar en el repositorio y en Descargas, pero el usuario lo paró.

### 14:27 (aprox.)

Esta en la carpeta que esta abierta esta terminal

**Resultado:** se leyó `FOOD4ALL_historias_usuario_entrevistas.md`, con 4 entrevistas a estudiantes (E1–E4): E3 y E4 comparten piso, y E1 y E2 viven con su familia. Se copió a `docs/requisitos/FOOD4ALL_entrevistas_estudiantes.md` y se aplicó la regla de evidencia.
- **Pasan a «Indicio»:** N-PLA-01, N-PLA-02, N-CAR-01, N-CAD-01 y N-CAT-01.
- **«No confirmada»:** N-IA-01, porque E3 y E4 no confían en la IA.
- **Ninguna confirmada:** solo hay 2 del perfil objetivo y no hay citas literales.

Se añadió el apartado 5.1 a `FOOD4ALL_necesidades.md`, con el recuento, las propuestas para la criba y las necesidades candidatas. Se actualizaron la especificación, el README y el documento final (anexo C2), y se regeneró todo con `npm run todo`. No se cambió ningún requisito.

### 14:29 (aprox.)

Aun queda que mis compañeros suban las suyas, por eso hay 4-5

**Resultado:** el texto ahora dice que E1–E4 son las entrevistas de Sebastián, que faltan las del resto del equipo y que los estados son provisionales. Se regeneró. El ensayo en seco de Asana muestra 99 descripciones por actualizar; no se escribió nada.

### 14:33

Haz el 2, no el 1

**Resultado:** se hizo commit y push a `main` de los cambios de hoy y del registro de prompts, sin coautoría de Claude. Asana no se actualizó: se hará cuando el usuario lo pida.

*Entrada recuperada de `main` al fusionar el 23/10/2026 a las 21:36: estaba solo en esa rama.*

---

## Revisión crítica del equipo

*Respuestas de Sebastián a preguntas guiadas del asistente (23/10/2026). Las opciones las propuso el asistente; la elección es de Sebastián.*

- **Revisado por:** Sebastián
- **Fecha:** 23/10/2026
- **Qué aceptamos de lo que propuso la IA y por qué:**
  - Aplicar la regla de evidencia sin forzarla: con 2 entrevistas del perfil objetivo y sin citas literales, nada pasa a «Confirmada».
  - Marcar N-IA-01 como «No confirmada» porque E3 y E4 no confían en la IA, aunque la IA fuera parte de nuestra idea inicial.
  - Quitar del script la opción de comentar en Asana, para que no se repitiera.
- **Qué corregimos, rechazamos o comprobamos aparte:**
  - Puse yo la regla de no comentar en Asana, después de la respuesta del profesor.
  - Corregí el texto para que dijera que E1–E4 eran solo mías y que faltaban las del resto del equipo, porque los estados eran provisionales.
  - Paré la búsqueda de las entrevistas por el ordenador y le dije dónde estaban.
  - Elegí qué se subía (commit y push) y dejé Asana para cuando yo lo pidiera.
- **Por qué estaba justificado usar IA aquí:**
  - Cruzar 4 entrevistas con 22 necesidades y su regla de evidencia es repetitivo y fácil de equivocarse a mano.
  - Leer los comentarios de 272 tareas de Asana para encontrar el del profesor.
  - Las conclusiones sobre el producto las saqué yo; la IA aplicaba la regla que habíamos fijado.
