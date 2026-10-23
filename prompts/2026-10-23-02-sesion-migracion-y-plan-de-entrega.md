---
titulo: Migración a WSL, temario y plan de entrega del Hito 2 por persona
fecha: 2026-10-23
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Organización del equipo
origen: Mensajes enviados a Claude Code (WSL) en la sesión, en orden y sin corregir. Horas aproximadas
---

Mensajes enviados a Claude Code en WSL el día de la entrega del Hito 2, después de traer desde Windows la carpeta del proyecto.

### 14:35 (aprox.)

Vamos con Food4all, has de tener una nota

**Resultado:** se leyó la nota técnica del proyecto y se resumió el estado de las ramas de WSL y lo pendiente.

### 14:40 (aprox.)

He añadido una carpeta con todo lo que tengo del proyecto en windows, para migrarlo a este entorno. Echale un vistazo antes de nada

**Resultado:** se analizó la carpeta sin cambiar nada: 4 commits de `main` que no estaban en WSL (solo documentación y prompts), 14 archivos sin commit, un choque de nombres en `prompts/` (`2026-10-19-01`) y reglas nuevas (no comentar en Asana). Se propuso entregar primero y migrar después.

### 14:45 (aprox.)

1a 2a(Quiero que estructures que tengo que hacer yo, mis compañeros y hacerlo paso por paso)

**Resultado:** se preparó una especificación con los pasos por persona y cuatro preguntas.

### 14:50 (aprox.)

1b(Le doy la contraseña y una explicacion) 2a 3a(Pero con preguntas de cada uno, tu me guiaras, pero sabre por que se toman dichas decisiones) 4a Todavia no es ok

**Resultado:** la landing no se toca: el profesor verá los prompts en `/admin#prompts` con una explicación, y la contraseña la da Sebastián. La criba se argumenta con preguntas para cada uno. Se pidió qué faltaba para el ok.

### 14:57 (aprox.)

No tenemos un servidor para pagar la web, para esta semana le entregare una copia si no quiere abrir la landing desde su casa.Quiero que mires el asana, tienes acceso? Y lo segundo quiero que compares con los demas para mirar los puntos fuertes y debiles. Tambien tenemos que probar como funciona la competencia y adjuntar capturas, no hace falta llegar a pagar. Te he pasado el temario que ha presentado el profesor en clase de software en .md para que ayude de guia. Leetelos todos

**Resultado:** se leyeron las 9 clases del temario. El conector de Asana solo ve el espacio personal, no el proyecto de la clase. Contraste con la Clase 11: falta la categoría de restricciones (RST), que la clase pide expresamente a Food4All. Se propusieron opciones para Asana y para los recorridos de la competencia.

### 15:00 (aprox.)

1b 2(Creas el guion, pero no para usarlo yo, sino christina que si tiene acceso) Yo lo ejecuto y le digo que tiene instrucciones nuevas que las leas y que te de los resultados) 3a

**Resultado:** se escribió un script de solo lectura para Asana. El sistema de permisos impidió que lo lanzara el asistente, así que lo ejecuta Sebastián. Se escribió el guion `PARA-CHRISTINA-competencia.md` (recorridos sin pagar, con fecha, URL y código postal). Las RST entran en la entrega de hoy.

### 15:04 (aprox.)

No hubo clase hoy, es todo . OK

**Resultado:** especificación aprobada. Rama `docs/hito2-entrega` con el trabajo pendiente de Windows y hoja `docs/requisitos/FOOD4ALL_tareas_entrega.md` con calendario, tareas por persona, formato del comentario de revisión y mensaje para el grupo.

---

## Revisión crítica del equipo

*Respuestas de Sebastián a preguntas guiadas del asistente (23/10/2026), comunes a 22-01, 23-02 y 23-04; aquí van solo las que corresponden a este archivo. Las opciones las propuso el asistente; la elección es de Sebastián.*

- **Revisado por:** Sebastián
- **Fecha:** 23/10/2026
- **Qué aceptamos de lo que propuso la IA y por qué:**
  - El plan de entrega por persona, con tareas y horas, para repartir el trabajo del último día.
- **Qué corregimos, rechazamos o comprobamos aparte:**
  - Antes de unir nada, pedí analizar la copia de Windows sin cambiar nada.
- **Por qué estaba justificado usar IA aquí:**
  - Mantener la documentación al día para que el equipo pudiera seguir sin mí.
  - Las reglas y las decisiones las puse yo; la IA las aplicaba y documentaba.
