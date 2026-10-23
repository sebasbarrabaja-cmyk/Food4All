---
titulo: Comentario del profesor sobre la criba y regla de no comentar en Asana
fecha: 2026-10-23
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Requisitos del Hito 2
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

---

## Revisión crítica del equipo

*La escribe la persona autora (o quien revise), con sus palabras. No la redacta el asistente. Mientras ponga «pendiente», el panel marca este prompt como «Revisión pendiente».*

- **Revisado por:** _pendiente_
- **Fecha:** _pendiente_
- **Qué aceptamos de lo que propuso la IA y por qué:** _pendiente_
- **Qué corregimos, rechazamos o comprobamos aparte:** _pendiente_
- **Por qué estaba justificado usar IA aquí:** _pendiente_
