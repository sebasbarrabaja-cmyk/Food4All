# FOOD4ALL · Propuesta para volcar los requisitos en Asana

> **Estado:** propuesta, pendiente de tu feedback. **Todavía no se ha escrito nada en Asana**; la estructura actual se ha leído solo con GET el 20/10/2026.
> **Fuente:** `FOOD4ALL_especificacion_requisitos.md` (v0.2) y `FOOD4ALL_requisitos_benchmark.xlsx` (556 requisitos).
> **Prompt de origen:** `prompts/2026-10-20-01-requisitos-en-asana.md`.

## 1. Qué se toca y qué no

| | |
| --- | --- |
| **Se toca** | Solo la tarea **[Food4All] Hito 2 – Requisitos y Criterios de Aceptación · Marketplace Local**, y dentro de ella el bloque **[B4] Catálogo de requisitos**, más la subtarea del Product Backlog |
| **No se toca** | Las tareas de INDICONNECT, LearnCode y [TODOS], las secciones, los campos personalizados, la descripción del Hito 2, los bloques B1, B2, B3, B5 y B6, los comentarios y los adjuntos que ya existen |
| **No se borra nada** | Las 14 fichas antiguas de B4 (RF-CUE-01, RF-CAT-01…) se conservan; ver la decisión D2 |
| **Volumen** | 1 tarea agrupadora por tipo + 30 procesos + 127 subrequisitos + 13 historias ≈ **175 subtareas nuevas** |

## 2. Cómo quedaría (vista de Asana)

Sigue el enfoque de INDICONNECT que eligió el profesor: al pulsar un requisito se ven dentro sus procesos, cada uno con su ID y su descripción propia, y cada persona trabaja el suyo sin esperar a nadie.

```text
[Food4All] Hito 2 – Requisitos y Criterios de Aceptación · Marketplace Local
├─ Investigación sobre la entrega…, Requisitos temporales…, etc.        (sin cambios)
├─ [B1] Conocer a los usuarios: entrevistas y necesidades               (sin cambios)
├─ [B2] Personas y mapas de empatía                                     (sin cambios)
├─ [B3] Requisitos legales…                                             (sin cambios)
├─ [B4] Catálogo de requisitos: fichas RF / RNF                         (se añade dentro ↓)
│   ├─ (14 fichas antiguas: según D2)
│   ├─ Requisitos funcionales (RF-01 a RF-19)
│   │   ├─ RF-01 · Registro, inicio de sesión y roles            @Miguel · 22 oct
│   │   │   ├─ RF-01.1 · Punto de entrada y pantalla de acceso
│   │   │   ├─ RF-01.2 · Inicio de sesión con correo y contraseña
│   │   │   ├─ RF-01.3 · Inicio de sesión con Google
│   │   │   ├─ … hasta RF-01.10 · Privacidad y baja de la cuenta
│   │   ├─ RF-02 · Alta y verificación de vendedor               @Juan Antonio
│   │   │   ├─ RF-02.1 · Página «Quiero vender»
│   │   │   └─ … (7 subrequisitos)
│   │   ├─ …
│   │   └─ RF-19 · Soporte y contacto                            @Sebastián
│   └─ Requisitos no funcionales (RNF-01 a RNF-11)
│       ├─ RNF-01 · Seguridad                                    @Sebastián
│       │   ├─ RNF-01.1 · Autenticación y sesiones
│       │   └─ RNF-01.2 · …
│       └─ … RNF-11 · Sostenibilidad
├─ [B5] User stories y revisión INVEST                                  (sin cambios)
│   └─ Product Backlog (13 historias)                                   (nuevo ↓)
│       ├─ #1 US-01 · Registrarse y elegir zona · Must · 3 pts · MVP · → RF-01
│       └─ … #13 US-13 · Valorar productos y vendedores · Should · 2 pts · V2
└─ [B6] Trazabilidad y entrega del hito                                 (sin cambios)
```

**Niveles:** Hito 2 → B4 → RF/RNF → proceso → subrequisito. Son 4 niveles de subtareas; Asana admite hasta 5.

**Requisitos atómicos (RF-01.2-01, RF-01.2-02…):** van como lista dentro de la descripción del subrequisito, no como subtareas. Con 556 subtareas más, el Hito 2 sería imposible de navegar y nadie las cerraría una a una. El Excel sigue siendo la tabla maestra (ver D3).

**Nombres:** `ID · nombre`, igual que en el documento, para que se puedan buscar en Asana por ID.

## 3. Qué hay dentro de cada tarea

### 3.1 Tarea de proceso (ejemplo: RF-01)

```text
RF-01 · Registro, inicio de sesión y roles
Responsable: Miguel · Revisor: Sebastián · Fecha: 22/10/2026

Proceso
Permite a clientes, vendedores y administración crear su cuenta, entrar y salir,
y ver solo lo que su rol permite. Es el primer proceso de la cascada: el resto supone
que existe un usuario con sesión y rol.

Actores: cliente, vendedor, administración
Necesidades: N-02 · Historias: US-01 · Prioridad: Must · Entrega: MVP
Supone que existe: nada (es el primero) · Entrega a: RF-02, RF-05, RF-06, RF-13

Subrequisitos (uno por pantalla o método; cada uno es una subtarea)
RF-01.1  Punto de entrada y pantalla de acceso
RF-01.2  Inicio de sesión con correo y contraseña
…
RF-01.10 Privacidad y baja de la cuenta

Competencia: 83 requisitos atómicos · Paridad 38 · Poco extendido 40 · Sin evidencia 5
(detalle en FOOD4ALL_requisitos_benchmark.xlsx, hoja Requisitos, filtro RF-01)

Hecho cuando: todos los subrequisitos están cerrados y revisados.
```

### 3.2 Subtarea de subrequisito (ejemplo: RF-01.2)

La descripción es la ficha de 16 apartados del punto 7.2 de la especificación. Lo que ya está en el Excel se rellena solo; lo que falta queda marcado **«Por completar»** para el responsable.

```text
RF-01.2 · Inicio de sesión con correo y contraseña
Responsable: Miguel · Revisor: Sebastián · Prioridad: Must · Entrega: MVP · Estado: Pendiente

1. Descripción ……………………………… (del Anexo A)
2. Origen: N-02, N-05, N-07 · US-01 · F-04
…
13. Criterios de aceptación
    RF-01.2.CA1 — Dado un cliente registrado, cuando escribe su correo y contraseña…
…
15. Competencia
    Mercadona S · Glovo S · TGTG ? · Wetaca S · Market Wagon S · OFN S → Paridad

Requisitos atómicos (18)
☐ RF-01.2-01 [Must·MVP] Pedir el correo en un campo de tipo email con etiqueta visible
             «Correo electrónico»…
             Criterio: Dado el formulario, cuando el foco entra en el campo, entonces…
☐ RF-01.2-02 [Must·MVP] Pedir la contraseña en un campo de tipo password…
…
☐ RF-01.2-13 [Must·MVP] Bloquear la cuenta 15 minutos tras 5 intentos fallidos…  (Pendiente de aprobar)
…

Hecho cuando: los 16 apartados están completos y el revisor lo aprueba en un comentario.
```

**Nivel de relleno real:** RF-01 ya tiene ficha completa en el Anexo A, así que sus subrequisitos llegan casi terminados. El resto llega con los apartados 1, 2, 3, 13, 15 y la lista de requisitos atómicos rellenos. Los apartados de diseño, campos y flujos (5 a 12) quedan «Por completar» y son el trabajo de cada responsable esta semana.

### 3.3 Historia del backlog (ejemplo: US-05)

```text
#7 US-05 · Pagar una sola vez todo el carrito
Como estudiante, quiero pagar una sola vez todo el carrito, para no repetir el pago con cada vendedor.
Proceso: RF-06 · Prioridad: Must · Puntos: 8 · Entrega: MVP · Estado: Por hacer
Criterios de aceptación: ver RF-06.4 y RF-06.5 (Gherkin)
```

## 4. Reparto propuesto

Nadie lleva dos procesos seguidos, para que la cascada avance en paralelo. El volumen está equilibrado por número de requisitos atómicos.

| Persona | Funcionales | No funcionales | Requisitos atómicos |
| --- | --- | --- | --- |
| **Miguel** | RF-01, RF-06, RF-09, RF-12, RF-14, RF-18 | RNF-03, RNF-07, RNF-08, RNF-11 | ≈ 199 |
| **Juan Antonio** | RF-02, RF-04, RF-07, RF-11, RF-15, RF-17 | RNF-04, RNF-05, RNF-06, RNF-10 | ≈ 168 |
| **Sebastián** | RF-03, RF-05, RF-08, RF-10, RF-13, RF-16, RF-19 | RNF-01, RNF-02, RNF-09 | ≈ 189 |

El revisor de cada proceso es la persona que lleva el siguiente en la cascada, porque es quien depende de él.

**Fechas** (del Sprint Backlog): fichas el 22/10/2026; backlog y matriz el 23/10/2026.

## 5. Cómo se aplicaría

1. Un script en Node genera las ~175 descripciones a partir del Excel y del `.md`, y las guarda primero en un fichero local para revisarlas.
2. Lo crea en Asana con la API, solo dentro de las tareas de Food4All del Hito 2, y guarda un registro con cada tarea creada (ID de Asana ↔ ID de requisito).
3. Si algo sale mal, ese registro permite borrar exactamente lo creado, sin tocar nada más.
4. Se comprueba leyendo el árbol de nuevo y comparando el número de tareas con el Excel.

## 6. Decisiones para tu feedback

| # | Pregunta | Propuesta |
| --- | --- | --- |
| D1 | ¿Dónde va? | Dentro de [B4], como en el esquema. Alternativa: un bloque nuevo [B7] «Especificación v0.2» |
| D2 | ¿Qué hacemos con las 14 fichas antiguas de B4? Usan otros IDs (RF-CUE-01, RF-CAR-01…) | Dejarlas y añadir al principio de su descripción «Sustituida por RF-01» (o el ID que toque), sin borrar nada. Alternativa: dejarlas tal cual |
| D3 | ¿Requisitos atómicos como lista o como subtareas? | Lista en la descripción. Alternativa: 556 subtareas de 5.º nivel |
| D4 | ¿El reparto de la tabla 4 vale? | La tabla; se puede cambiar persona a persona |
| D5 | ¿Asignamos ya responsable y fecha en Asana? Les llegará una notificación a Miguel y a Juan Antonio | Sí, con las fechas del Sprint Backlog |
| D6 | ¿Adjuntamos el `.md` y el `.xlsx` a la tarea del Hito 2? | Sí, a [B4] |
| D7 | Numeración del login: el Anexo A usa 6 subrequisitos (RF-01.5 = recuperación) y el Excel 10 (RF-01.5 = verificación de correo, RF-01.6 = recuperación, RF-01.7 = menú) | En Asana se usa la del Excel y se corrige el Anexo A del `.md` |
| D8 | ¿Marcamos «Estado entrega» del Hito 2 como «En progreso»? | No; eso lo cambiáis vosotros |
