---
titulo: Página «Hito 2 · Requisitos» en el panel y pestaña «Asistente IA» en la cabecera
fecha: 2026-10-23
autor: Sebastián
herramienta: Claude Code
tipo: Prompt base
tema: Landing (web y panel)
origen: Especificación preparada por el asistente a partir de la petición de Sebastián y del enunciado del Hito 2; Sebastián la aprobó con «Ok» a las 20:49 (sesión `2026-10-23-05`)
---

### Petición de Sebastián (20:39, bloque C de la criba)

a(Pero matices, quiero que salga como una pesataña arriba a la derecha en la cabezera de la web que ponga asistente ia, y que se vea bien, no remarcado pero casi)

### Especificación aprobada (20:49: «Ok, pero primero, antes de todo, actualiza el git con lo que haces para qeu juan antonio pueda trabajar tambien»)

## Contexto
- Repo: ~/proyectos/Food4All-recibido-2026-10-23/food4all · rama docs/hito2-entrega.
- La «landing documental» es el panel /admin (con contraseña): ya tiene Resumen, Mercado,
  Legal, Equipo, Hitos (Asana en vivo) y Prompts. El profesor pide ahí el Hito 2.
- Decisiones de hoy: criba A–D (C-13…C-27), asistente con opciones guiadas (C-26).

## Objetivo
1. Nueva sección «Hito 2 · Requisitos» en /admin (#hito2), con los datos sacados de
   docs/requisitos, nunca copiados a mano:
   a. Cifras: 564 requisitos, MVP 403 (36 simulados), Must/Should/Could/Won't (stats.json).
   b. Necesidades: ID, texto, estado (Indicio, Hipótesis…) y fuentes, E1–E6 (necesidades.js).
   c. Decisiones: C-13 (orden del PO), criba A–D, D-01…D-04 e H-01…H-04, con su estado.
   d. Restricciones (RST-01…11) y exclusiones (Won't / fuera de alcance).
   e. Trazabilidad: por necesidad → sus requisitos → un criterio de ejemplo → su tarea de
      Asana (enlace a la tarea [B4]/[B5] correspondiente).
   f. Registro de cambios C-01…C-27: qué, quién, cuándo y por qué (línea base).
   g. Enlaces a Asana: Hito 2 y sus bloques B1–B6.
   Los datos los sirve el backend en GET /api/admin/hito2 (con requireAdmin), leyendo
   esos archivos al arrancar. Parser de tablas Markdown propio, sin librerías.
2. Pestaña «Asistente IA» en la cabecera pública, arriba a la derecha, que lleva a
   /comprar#asistente. Visible, pero menos destacada que «Quiero comprar» (RF-12.1-01).
3. Coherencia con C-26: el texto de /comprar deja de sugerir texto libre
   («Tengo 25 €…») y habla de elegir presupuesto y días.

## Qué NO se toca
- Nada de main, ni Asana, ni backend/.env, ni dependencias nuevas.
- No se cambia el diseño existente: se usan los tokens y componentes de docs/DISENO.md.
- Si un documento cambia de formato y el parser falla, la sección lo dice en vez de romperse.

## Hecho cuando
- [ ] `npm run build` sin errores.
- [ ] /api/admin/hito2 responde 401 sin sesión y 200 con sesión, con los apartados a–g.
- [ ] En el navegador (PinchTab): #hito2 se ve completa, sin errores en consola, en claro
      y oscuro; la pestaña «Asistente IA» lleva a /comprar#asistente y tiene foco visible.
- [ ] Las cifras de la página coinciden con stats.json (403 / 306).
- [ ] Prompt registrado en prompts/ en el mismo commit (regla del proyecto).
- [ ] /code-review sin fallos reales; /security-review del nuevo endpoint.

## Cuándo parar y preguntar
- Si hace falta una dependencia, cambiar el login, o si a las 22:30 no está verificado
  (para dejar margen a Asana y a la entrega de las 23:59).

### 20:57

1a

**Resultado:** los `node_modules` venían de Windows y no compilaban. Sebastián eligió reinstalarlos con `npm ci`, en `frontend/` y `backend/`, con las mismas versiones del lockfile: 6 s y 54 MB.

### Resultado

- `backend/hito2.js` lee en cada petición `stats.json`, la matriz, la línea base, la especificación, la criba, el catálogo de necesidades, la vista previa de Asana y los gid de `asana_creadas.json`. `GET /api/admin/hito2` exige sesión y, si un documento no se puede leer, responde 500 con un mensaje claro.
- `frontend/src/pages/AdminHito2.jsx` muestra, en la sección `#hito2` del panel:
  - las cifras y los requisitos por proceso;
  - las 22 necesidades con su estado;
  - la criba A–F, las hipótesis y las decisiones abiertas;
  - las RST con su validación, los 4 excluidos y las fuentes F-01 a F-12;
  - la trazabilidad por necesidad, con enlaces a las tareas de Asana;
  - el registro C-01 a C-27 y los temas abiertos.
- La cabecera tiene la pestaña «Asistente IA», con filo y chispa en azafrán. `/comprar` habla de elegir con botones. `docs/DISENO.md` se ha actualizado.
- Verificación:
  - `npm run build` sin errores (16–18 s).
  - API: 401 sin sesión y 200 con sesión (80 kB, 24 ms), con MVP 403 y Must 306.
  - PinchTab a 1440 px: sin errores de consola. La pestaña recibe el foco con Tab, se ve el contorno y con Intro lleva a `/comprar#asistente`, donde queda marcada como activa.
  - Se corrigieron:
    - una cifra escrita a mano;
    - el nombre de B3 para que coincida con Asana;
    - el orden de la trazabilidad;
    - la flecha de los desplegables.
  - El login de prueba usó credenciales pasadas por variable de entorno, no las de `backend/.env`.
- **Sin probar:** el tema oscuro. `DISENO.md` dice «modo claro siempre» y el oscuro solo se activa a mano.

### 21:01

sube el git para juan antonio

**Resultado:** se subió el cambio a `docs/hito2-entrega` antes de que terminara `/code-review`. Los arreglos de la revisión irán en un commit aparte.

### 21:03 · Revisión de código (`/code-review`)

**Resultado:** se corrigieron los fallos reales:
- `stats.json` estaba en `.gitignore` y en un clon nuevo la página daba error. Se deja de ignorar y se sube.
- Las celdas vacías de las tablas desplazaban los votos de las RST.
- `#hito2` faltaba en los destinos del buscador con IA.
- «Asistente IA» y «Quiero comprar» se marcaban activos a la vez. La pestaña ya no se marca, para no destacar más que comprar.
- La selección inicial de la trazabilidad dependía de un ID escrito a mano.
- La ordenación fallaba con un ID sin números.
- El texto de `/comprar` no coincidía con el paso 1.
- El icono de la barra lateral estaba repetido.

Lo que no se cambió, y por qué:
- La cabecera con 4 botones en pantallas estrechas: el móvil no tiene prioridad (`DISENO.md`).
- La lectura de unos 0,9 MB por petición: el panel solo lo usa el equipo y responde en unos 24 ms.

### 21:04 · Revisión de seguridad (`/security-review`)

**Resultado:** sin vulnerabilidades. El endpoint exige sesión, no recibe datos del usuario y solo lee archivos fijos del repositorio. React escapa todo el texto y los enlaces a Asana se forman con un prefijo fijo.

### 21:04

Siguiente paso

**Resultado:** se quitó el aviso de `AGENTS.md` que pedía no tocar esos archivos y se pasó al bloque de Asana.

### 21:10 · Prompts por persona y por tema

1 a y b

**Resultado:** el panel `/admin#prompts` agrupa los prompts por persona (Sebastián, Juan Antonio, Miguel, Equipo) y, dentro de cada una, por tema; en cada tema van del más nuevo al más antiguo.
- Cada archivo de `prompts/` lleva un campo nuevo, `tema`, que dice para qué sirvió: Contexto y método · Landing (web y panel) · Requisitos del Hito 2 · Asana · Competencia · Organización del equipo · Otro. El asistente asignó el tema de los 22 archivos.
- El formulario de alta pide el tema.
- `prompts/README.md` y `DISENO.md` están al día.
- Se arregló, en todo el panel, la flecha de los desplegables que caía en su propia línea.
- Verificación: compila; la API devuelve el tema de los 22 prompts y en PinchTab no hay errores. No se guardó ningún prompt de prueba.

---

## Revisión crítica del equipo

*La escribe la persona autora (o quien revise), con sus palabras. No la redacta el asistente. Mientras ponga «pendiente», el panel marca este prompt como «Revisión pendiente».*

- **Revisado por:** _pendiente_
- **Fecha:** _pendiente_
- **Qué aceptamos de lo que propuso la IA y por qué:** _pendiente_
- **Qué corregimos, rechazamos o comprobamos aparte:** _pendiente_
- **Por qué estaba justificado usar IA aquí:** _pendiente_

### 21:33 · Revisión crítica de los prompts

prepara lo de la revisión crítica de los prompts

**Resultado:**
- Los 22 prompts terminan con un apartado «## Revisión crítica del equipo» con cinco campos: quién lo revisó, cuándo, qué se aceptó de la IA, qué se corrigió o rechazó y por qué estaba justificada. Todos los campos están en «_pendiente_»: el asistente no los rellena, los escribe cada persona.
- El panel marca cada prompt como «Revisado por el equipo» o «Revisión pendiente» y cuenta cuántos hay revisados.
- Los prompts que se guarden desde el panel ya llevan el apartado.
- `prompts/README.md` y `AGENTS.md` están al día.
- Verificación: compila y la API devuelve «pendiente» en los 22.
- **Sin probar en el navegador.**
