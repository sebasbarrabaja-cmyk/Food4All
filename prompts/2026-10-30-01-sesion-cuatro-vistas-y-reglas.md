---
titulo: Clase 14: requisitos y cuatro vistas de RF-05 (y parte de RF-06), documento del Hito 3 y reglas del repositorio en cada sesión
fecha: 2026-10-30
autor: Juan Antonio
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Otro
origen: Clase 14 (30/10/2026), «Del requisito a las cuatro vistas: diseño estructurado aplicado» (Hito 3); requisitos v0.4 del Hito 2
---

Horas sacadas del historial de la sesión (hora de España). Los mensajes enviados mientras el asistente trabajaba llevan la hora en que se enviaron.

### ~13:25

[Adjuntos: Entrevistas_JuanAntonio_Food4All.md, esquema_comparativo_de_empresas_de_alimentaci_n.md, FOOD4ALL_resumen.md]
y accede al repositorio en github para ver el proyecto

**Resultado:** Resumen del repositorio: landing (React + Vite y Express), requisitos del Hito 2 en `docs/requisitos/`, Sprint 3 e issues #11 a #22 del feedback del 27/10. `main` sigue en el PR #10 y los PR #23 a #31 están abiertos y encadenados. El archivo local de entrevistas está desactualizado frente a `FOOD4ALL_entrevistas_E5_E6_juan_antonio.md`.

### 13:26

[Adjunto: Clase_14_·_Del_requisito_a_las_cuatro_vistas-_diseño_estructurado_aplicado.pdf]
Necesito que me des los requisitos para nuestra empresa

**Resultado:** Lista de los 19 procesos (13 Must, 5 Should y 1 Could) y de los 11 RNF de la línea base v0.4, sin requisitos nuevos. Propuesta para el taller de la Clase 14: US-05 / RF-06 (pago único), con sus tres criterios de aceptación y lo que pide cada vista.

### 13:28

Sí, RF-06

**Resultado:** Documento «Food4All · cuatro vistas» (Claude Docs) con el requisito de origen, el DFD y el modelo de datos de RF-06. Se dejó a medias (faltan arquitectura, wireframe y trazabilidad) por el mensaje siguiente.

### 13:32

Dame una lista de requisitos importantes para hacer un diagrama como pone en la presentación hazmelo del carrito msimo

**Resultado:** Lista de los requisitos de US-04 / RF-05 (carrito multivendedor) ordenados por vista (proceso, datos, arquitectura e interfaz), con la dependencia crítica (el catálogo) y las dudas abiertas (H-01, D-03, logística).

### 13:33

Sí, del carrito

**Resultado:** Pestaña «RF-05 Carrito» con las cuatro vistas: DFD (5 procesos), modelo de datos, arquitectura en tres capas y wireframe de `/carrito` con 10 llamadas numeradas, más la trazabilidad y el registro de la Clase 14.

### 13:36

revisa el github

**Resultado:** Sin cambios en GitHub desde el 27/10 y nada sobre las cuatro vistas en ninguna rama.

### 13:38

Especifica más que sea algo mas generico no como estudiante sino algo como cliente

**Resultado:** El actor pasa a «cliente» en las dos pestañas (textos y diagramas), como en las fichas de RF-05 y RF-06. En la trazabilidad se anota que US-04 dice «estudiante».

### 13:43

Tienes acceso al git

**Resultado:** Sí: lectura del repositorio y de la API pública de GitHub; `gh` sin sesión iniciada, así que no se pueden abrir PR desde aquí. No se subió nada.

### 13:43

No al repositorio en el git que es este https://github.com/sebasbarrabaja-cmyk/Food4All.git

**Resultado:** Consulta directa a GitHub: repositorio público, último push el 27/10, 21 issues y PR abiertos, `main` en `dbc7a03`.

### 13:45

Cada vez que cree una nueva sesion mira el github

**Resultado:** Hook `SessionStart` en la configuración de Claude Code del usuario (`~/.claude/settings.json` y `~/.claude/hooks/food4all-github.sh`) que resume GitHub al abrir cada sesión.

### 13:45

https://github.com/sebasbarrabaja-cmyk/Food4All.git

**Resultado:** El hook usa ese repositorio.

### 13:47

No no quiero que veas un local ve el github siempre . y aplica todas las reglas del github a este proyecto como por ejemplo las de diseño . Aplicalas todas

**Resultado:** El hook ya no mira ninguna copia local: lee de GitHub el estado (commits de `main`, PR abiertos, novedades de 48 h) y carga las reglas (`AGENTS.md` y las skills `food4all-diseno` y `food4all-prompts`, de la rama del PR abierto más reciente que las tenga). Reglas aplicadas al documento: colores y letra de `docs/DISENO.md` (sin azules, naranja solo en lo que se pulsa), aviso «Precios de ejemplo, meramente representativos» y este registro de prompts.

### 13:50

y vuelve a hacer el dibujo

**Resultado:** Wireframe de `/carrito` rehecho con la paleta de Food4All (cabecera `--forest`, fondo crema, botón «Pagar» en `--accent`). En el resto de diagramas, el resaltado pasa de azul a verde de apoyo y la dependencia crítica a tomate.

### 13:53

Ahora no

**Resultado:** El registro de prompts queda preparado sin subir.

### 13:54

Pero crea un documento que no sea solo eso

**Resultado:** Pregunta al usuario qué documento quiere. Respuesta elegida: «Word o PDF para entregar».

### 13:55

Y que el diseño de los dibujos sea como el del pdf de la clase

**Resultado:** Dibujos rehechos con la notación y el estilo de la Clase 14: procesos en círculo con borde rojo y fondo rosa, actores y almacenes en rectángulo, flechas rojas con el nombre del dato, títulos en mayúsculas y wireframe en grises con marcadores de imagen tachados.

### 13:56

Y un modelo logico aplicado

**Resultado:** Modelo lógico de RF-05: tablas `carrito` y `linea_carrito`, vista `v_resumen_carrito`, tipos, claves primarias y foráneas, restricciones y DDL de referencia. Propuesta v0: el gestor de base de datos está por decidir (issue #11).

### 13:56

todo lo de la presentación

**Resultado:** El documento cubre todo lo de la Clase 14: objetivo, requisito de origen, cuatro vistas, los cuatro errores habituales con su pregunta de control, el radar (dependencias críticas, degradación, recuperación y supuestos), la trazabilidad mínima y el registro obligatorio.

### 13:56

Soy un desarrollador de backend

**Resultado:** Más peso en lo de backend: modelo lógico con DDL y propuesta de contrato de la API del carrito (rutas, entradas, respuestas y errores). Resultado: `docs/hito3/Food4All_RF-05_cuatro_vistas.docx` y su PDF (14 páginas).

### 14:12

Sube el documento al github

**Resultado:** Rama `docs/hito3-cuatro-vistas-rf05` creada desde `main` con el documento (Word y PDF) en `docs/hito3/` y este registro, en el mismo commit. Se sube la rama; el PR lo une Sebastián.

## Revisión crítica del equipo

*Pendiente: la escribe Juan Antonio.*
