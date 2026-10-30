# FOOD4ALL · Guía para los agentes del equipo

Se carga en cada sesión: aquí solo va lo obligatorio. El resto está en las skills (`.claude/skills/`), que se cargan cuando hacen falta. Lo que está pasando ahora: `docs/estado.md`.

## El proyecto

- Proyecto de grupo de **Introducción a la Ingeniería del Software** (Universidad Europea, grupo B; profesor: Gerardo Casas).
- **FOOD4ALL:** marketplace local para estudiantes que viven fuera de casa: varios vendedores locales, **un solo carrito**, un pago y **una sola entrega**. Empieza en Málaga, Sevilla y Granada.
- **Equipo:** Sebastián (backend y Product Owner), Juan Antonio (frontend), Miguel (IA y datos).
- **Repositorio:** landing documental (`frontend/` y `backend/`, `npm start` → `localhost:3001`), requisitos (`docs/requisitos/`) y registro de prompts (`prompts/`).

## Reglas (obligatorias)

1. **Registra cada mensaje de tu usuario** en `prompts/`, tal cual (con erratas), con fecha, hora, autor y resultado: **todos**, también «abrela» o «1a 2b». Va en el mismo commit que el cambio. Formato: skill `food4all-prompts`.
2. **Nunca publiques comentarios en Asana.** Los comentarios, revisiones y argumentos los escribe la persona (el profesor detectó uno hecho con IA el 23/10). Si el texto lo redactas tú, márcalo «redactado con ayuda del asistente».
3. **Asana es solo de lectura.** Se escribe solo con el visto bueno de Sebastián y solo en tareas `[Food4All]`; nada de IndiConnect ni LearnCode.
4. **No inventes evidencia** (entrevistas, citas, datos de competidores). Lo no comprobado es Hipótesis o «No verificado».
5. **Sin datos personales** (RGPD): ni nombres, ni teléfonos, ni nada que identifique a un entrevistado.
6. **Git:** nunca trabajes ni hagas `push` en `main`; rama propia y Sebastián la une. **El repositorio es público:** ni comercios reales, ni datos personales, ni credenciales. Commits en español (`tipo: qué`), **sin firmas de IA ni `Co-Authored-By`**.
7. **No regeneres los requisitos** (`npm run todo` en `docs/requisitos/benchmark/`): lo ejecuta Sebastián.
8. **Nunca leas ni envíes `backend/.env`**: tiene claves.
9. **Cierra la sesión con `/exit`:** así el hook guarda tus tokens en `docs/tokens/<persona>/`, que se sube con tus cambios (skill `food4all-prompts`).
10. **Al abrir la sesión**, otro hook lista tus issues abiertos (necesita `gh auth login`). Díselos a la persona en una o dos líneas antes de empezar.

## Qué skill usar

| Si vas a… | Skill |
| --- | --- |
| Registrar un mensaje o los tokens | `food4all-prompts` |
| Hablar del proyecto, del profesor, del temario o de lo decidido | `food4all-contexto` |
| Tocar el código (backend, frontend, API, datos) | `food4all-arquitectura` |
| Mirar o cambiar la interfaz | `food4all-diseno` (y `frontend-a11y`) |
| Probar la web en el navegador | `browser-qa` |
| Requisitos, criba, entrevistas, competencia, Asana | `food4all-requisitos` |

En WSL o Linux, antes de arrancar: `npm run install:all` (los `node_modules` de Windows no sirven).
