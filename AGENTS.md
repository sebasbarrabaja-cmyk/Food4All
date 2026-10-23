# FOOD4ALL · Guía para los agentes del equipo

Lee este archivo entero antes de hacer nada en el repositorio. Está escrito para el asistente de IA de cada miembro del equipo (Claude Code, Codex, Cursor u otro). Última actualización: 23/10/2026, 20:34.

## 1. El proyecto en cinco líneas

- Proyecto de grupo de **Introducción a la Ingeniería del Software** (Universidad Europea, grupo B; profesor: Gerardo Casas).
- **FOOD4ALL:** marketplace local para estudiantes que viven fuera de casa. Compran a varios vendedores locales en **un solo carrito**, pagan una vez y lo reciben todo **en una sola entrega**. Empieza en Málaga, Sevilla y Granada.
- **Equipo:** Sebastián (backend y Product Owner), Juan Antonio (frontend), Miguel (IA y datos).
- **En este repositorio:** una landing documental (`frontend/` y `backend/`, con `npm start` → `localhost:3001`), los requisitos del Hito 2 (`docs/requisitos/`) y el registro de prompts (`prompts/`).
- **Ahora mismo:** el **Hito 2 (necesidades, requisitos y criterios de aceptación) se entrega el 23/10/2026 a las 23:59**. El Sprint 3 (análisis y diseño estructurado) empieza el 26/10.
- **23/10, desde las 20:52 (en curso):** el agente de Sebastián hace la página «Hito 2 · Requisitos» del panel `/admin`, la pestaña «Asistente IA» de la cabecera y el texto del asistente en `/comprar`. **No toquéis** `frontend/src/pages/Admin.jsx`, `frontend/src/components/PublicLayout.jsx`, `frontend/src/pages/Comprar.jsx`, `backend/server.js` ni los estilos hasta que se suba. Juan Antonio puede seguir con la criba (bloques E y F), su columna de RST y la revisión de E5 y E6, en `docs/requisitos/`.
- **23/10, desde las 20:32:** Sebastián y Juan Antonio están en llamada terminando el Hito 2 juntos (criba, RST, entrevistas y Asana). Si eres el agente de Juan Antonio, coordina con lo que decidan en la llamada antes de tocar `FOOD4ALL_criba_argumentos.md`.

## 2. Reglas para el agente (obligatorias)

1. **Registra cada prompt de tu usuario** en `prompts/`, tal cual (con erratas), con fecha, hora, autor y resultado. El formato está en `prompts/README.md`: un `.md` por sesión, con nombre `AAAA-MM-DD-NN-titulo.md`, donde `NN` es el siguiente número libre de ese día. El profesor exige todos los prompts del desarrollo: **no omitas ninguno**.
2. **Nunca publiques comentarios en Asana.** El 23/10 el profesor vio un comentario escrito con IA y respondió «Esto lo ha hecho la IA». Los comentarios, las revisiones y los argumentos los escribe la persona. Si te pide ayuda, propón y explica tus razones; si el texto final lo redactas tú, márcalo como «redactado con ayuda del asistente» y deja el prompt registrado.
3. **Asana es solo de lectura.** Se escribe solo con el visto bueno de Sebastián y solo en tareas que empiecen por `[Food4All]`. El proyecto lo comparten los tres grupos de clase: no toques nada de IndiConnect ni de LearnCode.
4. **No inventes evidencia.** Ni entrevistas, ni citas, ni datos de competidores. Lo que no esté comprobado se marca como Hipótesis o «No verificado».
5. **Sin datos personales.** En las entrevistas no van nombres, teléfonos ni nada que identifique a la persona (RGPD).
6. **Git:** nunca trabajes ni hagas `push` en `main`. Crea tu rama desde `docs/hito2-entrega` (por ejemplo `docs/juanantonio-hito2`) y pide a Sebastián que la una. Mensajes en español (`tipo: qué`), **sin firmas de IA ni `Co-Authored-By`**.
7. **No regeneres los requisitos por tu cuenta.** `npm run todo` (en `docs/requisitos/benchmark/`) reescribe el Excel, la matriz y la vista previa. Lo ejecuta Sebastián, para que no haya choques.
8. **Nunca leas ni envíes `backend/.env`** a ningún servicio: tiene claves.

## 3. Dónde está cada cosa

| Necesitas… | Archivo (en `docs/requisitos/`) |
| --- | --- |
| Lo que tiene que hacer cada uno hoy | `FOOD4ALL_tareas_entrega.md` y el apartado 6 de este archivo |
| Las preguntas de la criba y las RST que hay que validar | `FOOD4ALL_criba_argumentos.md` |
| La foto del Hito 2 y el registro de cambios | `FOOD4ALL_linea_base_h2.md` |
| Necesidades, regla de evidencia y **cómo registrar una entrevista** (apartado 6) | `FOOD4ALL_necesidades.md` |
| Entrevistas ya hechas | E1–E4 (Sebastián): `FOOD4ALL_entrevistas_estudiantes.md`; E5–E6 (Juan Antonio): `FOOD4ALL_entrevistas_E5_E6_juan_antonio.md` |
| Lo que pide el profesor para el Hito 2 (Asana, landing y prompts) | `FOOD4ALL_hito2_enunciado.md` |
| Requisitos completos (RF-01 a RF-19, RNF-01 a RNF-11, historias, backlog) | `FOOD4ALL_especificacion_requisitos.md`; el detalle de cada requisito en `FOOD4ALL_asana_vista_previa.md` |
| Estados del pedido y reembolso de prueba | `FOOD4ALL_estados_pedido.md` |
| Qué se corrigió tras la valoración del profesor | `FOOD4ALL_correcciones_hito2.md` |
| Preparar la defensa | `FOOD4ALL_defensa_hito2.md` |
| Competencia | `FOOD4ALL_comparativo_revisado.md` y `../competencia/` |
| Personas y mapa de empatía | `FOOD4ALL_personas_empatia_v2.md` |

## 4. Lo que pide el profesor (conclusiones del temario y de su valoración)

**Del temario (clases 1–11):**
- Separa siempre **hecho** (con fuente), **inferencia** e **hipótesis**, y **decisión**. Una noticia o un competidor inspiran, pero no prueban nada.
- **Necesidad ≠ requisito ≠ solución.** «El sistema tendrá IA» no es un requisito. Un requisito dice qué debe poder hacer el sistema, no cómo.
- Hay tres tipos de requisito: **RF** (capacidad observable), **RNF** (cualidad medible, con umbral y cómo se comprueba) y **RST** (límite de alcance, política, integración o contexto).
- **Ficha mínima de un requisito:** ID y tipo, actor y valor, «El sistema deberá…», fuente y estado, criterio de aceptación y trazabilidad (necesidad → requisito → tarea, responsable y fecha).
- **Puerta de calidad:** completo, consistente, viable, verificable, dentro de alcance y trazable. Si falla algo, queda «por validar», no «terminado».
- **Criterio de aceptación:** Dado… cuando… entonces…, con un resultado que otra persona pueda comprobar sin preguntar.
- **MoSCoW** es una decisión provisional que hay que justificar: actor, valor, evidencia, riesgo, esfuerzo y qué queda fuera. Won't no significa que la idea sea mala.
- **Verificar** (¿está bien escrito?) no es **validar** (¿resuelve algo necesario?). Un benchmark no valida una necesidad; las entrevistas sí aportan evidencia.
- **Línea base:** una foto fechada que puede cambiar. Cada cambio registra origen, elemento afectado, impacto, alternativa, decisión, responsable, fecha y versión.
- **La IA solo entra si aporta valor demostrable** y se pueden explicar sus datos, límites, riesgos y la alternativa sin IA. La IA propone; el equipo decide y responde.
- **Asana:** una tarea es una acción observable, con un único responsable, fecha, evidencia y criterio de cierre. Una tarea completada no sustituye a la evidencia.
- **Lo que la Clase 11 pide a Food4All para cerrar el Hito 2:** necesidades de comprador y vendedor sin mezclar; RF, RNF y **restricciones de operación**; una historia con aceptación sobre disponibilidad o cancelación; una matriz actor/necesidad → requisito; el documento de requisitos y el mapa de empatía.

**De la valoración provisional (21/10) y del comentario del 23/10:**
- Buena estructura, pero falta **evidencia de usuarios**: sin entrevistas, todo es hipótesis. No se presentan personas documentales ni benchmark como validación.
- La **revisión humana** tiene que verse: un miembro distinto del autor deja un comentario con elemento, discrepancia, decisión, cambio y fecha.
- La **criba** tiene que argumentarse: por qué esos requisitos y no otros.
- El profesor quiere ver los **prompts** en la landing documental (`/admin#prompts`).

## 5. Lo decidido hasta hoy (23/10)

- **Requisitos v0.4** (22/10): catálogo único de 22 necesidades, 19 procesos, 564 requisitos (MVP 403, de ellos 36 simulados; cifras del 23/10 con C-26), 19 historias y matriz generada. Cada uno de los cambios está en el registro de cambios de la línea base.
- **Orden de lo imprescindible** (Product Owner, C-13, pendiente del visto bueno del equipo): **1) el carrito simplificado** (varios vendedores, un pedido, un pago) y **2) los productos** (precio claro, local y poco procesado), que van ligados; **3) el asistente de IA**, importante pero detrás. En las entrevistas, la confianza en la IA es baja (N-IA-01 «No confirmada»).
- **Regla de prioridad:** Must solo en el MVP; el MVP solo lleva Must o Should; V2 lleva Should o Could; V3 solo Could. Un requisito es Must si, al quitarlo, la demo deja de responder al problema o se incumple algo obligatorio.
- **Una entrevista en contra no cambia un requisito:** se registra como riesgo. Si 3 o más lo contradicen, se reabre con un registro de cambio.
- **Pago y reembolso son de prueba:** nunca hay dinero real.
- **Entrevistas E1–E6** (E1–E4 de Sebastián y E5–E6 de Juan Antonio; las de Miguel, descartadas en C-22): 6 necesidades en «Indicio» y ninguna confirmada (C-25). No hay entrevistas a vendedores.

## 6. Trabajo de cada uno (hoy)

**Juan Antonio**
1. **Entrevistas E5 y E6: hechas** (23/10), en `FOOD4ALL_entrevistas_E5_E6_juan_antonio.md`. Las conclusiones las redactó el asistente a petición de Sebastián: **revísalas y corrígelas con tus palabras**. Pendiente: en E5, P7, aclarar «mi compañero»; y no se hizo la pregunta de «si no pudieras estar en casa cuando llega el pedido» ni la del punto de recogida. Si puedes, házsela a las dos. Lo más importante para ti: E2, E5 y E6 miran reseñas o fiabilidad antes de usar una app, y todo RF-11 (valoraciones) está fuera del MVP; es tu bloque E.
2. **Criba, bloques E y F** de `FOOD4ALL_criba_argumentos.md` (procesos fuera del MVP; usabilidad y accesibilidad frente a sostenibilidad).
3. **RST:** sí, no o cambiar en la tabla de `FOOD4ALL_criba_argumentos.md`.
4. **Revisión cruzada:** `FOOD4ALL_comparativo_revisado.md` y `FOOD4ALL_personas_empatia_v2.md` (apartados 6.2 y 10). Comentario en Asana, escrito por él: elemento revisado, discrepancias, decisión (reformular / investigar / descartar / correcto), cambio, fecha y revisor.

**Miguel**
1. ~~Entrevistas antes de las 19:00~~. Las 12 historias que aportó se generaron con IA y no proceden de personas entrevistadas: **descartadas** (C-22 de la línea base). No se usan como evidencia ni se suben a Asana.
2. **Sus tareas del Hito 2 las asume Sebastián** (decisión del 23/10, 20:31): el bloque C de la criba, su parte de las RST y adjuntar el documento al Hito 2 y cambiar «Estado entrega». La revisión cruzada del núcleo de compra (RF-05 a RF-07) tiene que hacerla alguien distinto del autor: está pendiente de reasignar.

**Sebastián:** criba, bloques A, B y D (hechos), C (de Miguel) y aprobarla como Product Owner; RST; reparto de responsables en Asana; adjuntar el documento al Hito 2; explicar al profesor cómo ver los prompts; unir las ramas.

**Cómo ayuda tu agente:** te explica las preguntas con los datos de los documentos y te propone opciones con sus razones. Tú decides y escribes tu respuesta. Si la redacta el agente, se marca como «redactada con ayuda del asistente» y el prompt se registra. No escribe en Asana.

## 7. Estado técnico y pendientes

- **Esta rama (`docs/hito2-entrega`)** tiene todo el Hito 2, con las mejoras de la landing de WSL ya unidas (ver apartado 8). Falta la página del Hito 2 en la landing que pide el enunciado (`FOOD4ALL_hito2_enunciado.md`).
- **Pendiente de Sebastián:** comparar con los otros grupos leyendo Asana (`docs/requisitos/benchmark/leer_otros_grupos.js`, solo lectura; el resultado se guarda fuera del repositorio) y los recorridos por la competencia con capturas (en curso).
- **Logística:** retrasos del reparto y del vendedor, cubiertos el 23/10 (C-15: RF-08.2-05, RF-08.2-06 y RF-08.4-06). Queda la compensación por retraso. Las mejoras de los recorridos por la competencia (M-01 a M-08) se revisan una a una: `docs/competencia/FOOD4ALL_recorridos_competencia.md`.
- **Abierto en el Hito 2:** aprobar la criba, validar las RST, entrevistas a vendedores, las revisiones cruzadas, los responsables en Asana y la regla de cancelación (comité de cambio de la Clase 11). La lista está en `FOOD4ALL_linea_base_h2.md`, apartado 5.

## 8. Traspaso (23/10, 17:40): lo que queda para terminar sin Sebastián

- **Rama:** todo está en `docs/hito2-entrega`, ya con las mejoras de la landing de WSL unidas y probadas: compila, las rutas responden, el login bloquea tras 5 fallos y el panel lista los 19 prompts. Los `node_modules` que vinieron de Windows no sirven en Linux: reinstalad con `npm run install:all`.
- **Criba (actualizado a las 20:34):** bloques A, B y D hechos por Sebastián. D-03 (el hub) se decide en el Hito 3 con el profesor. RF-08.5-01 (retirada de un lote) sube a Must · MVP (C-23). Quedan el C (Sebastián, en lugar de Miguel) y el E y el F (Juan Antonio).
- **Mejoras de los recorridos por la competencia:** M-01 a M-08 revisadas una a una (C-14 a C-21 en la línea base). M-06 (punto de recogida) y pagar como invitado esperan a nuevas entrevistas y a un debate del equipo.
- **Asana (pendiente, lo sube Sebastián al final, cuando todo esté verificado):** subir E1–E4 (Sebastián) y E5–E6 (Juan Antonio) como subtareas de «Historias de usuario», asignar responsables y reducir el número de subtareas a las imprescindibles. Solo en tareas `[Food4All]`, nunca con comentarios del asistente.
- **Antes de entregar:** RST validadas; criba aprobada; documento adjunto al Hito 2 y «Estado entrega» cambiado (Sebastián, en lugar de Miguel); explicación al profesor de cómo ver los prompts (`/admin#prompts`). La contraseña la da Sebastián en persona.
