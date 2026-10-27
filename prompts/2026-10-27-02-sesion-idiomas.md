---
titulo: Tareas del 27/10 y selector de idiomas (punto 3)
fecha: 2026-10-27
autor: Juan Antonio
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
origen: Revisión de lo que repartió Sebastián (issues #20 a #22) y el issue #20, web pública en español e inglés
---

Horas sacadas del historial de la sesión (hora de España).

### 14:58

Hola quiero que revises en asana y github el projecto ya que mi compañero sebastián realizo cambios y asigno nuevas tareas entonces quiero que me digas que tengo que hacer como Juan Antonio

**Resultado:** En Asana, la cuenta conectada solo ve un proyecto personal; no aparece el de Food4All ni tareas `[Food4All]`. En GitHub, Sebastián repartió el feedback del profesor del 27/10 en los issues #11 a #22; a Juan Antonio (`Jamc46`) le tocan #20 (idiomas), #21 (FAQ) y #22 (expectativa vs. realidad), con el reparto y los contratos en `docs/contratos.md`. Los PR #23 a #27 van encadenados y aún no están en `main`. Pendientes anteriores en `docs/estado.md`: revisar con sus palabras las conclusiones de E5 y E6 y la revisión cruzada del comparativo y de las personas. Orden propuesto: #20 → #21 → #22.

### 15:00

Pues vamos a ello

**Resultado:** Issue #20 en la rama `feat/idiomas`, creada desde `feat/esqueleto-feedback` porque el esqueleto aún no está en `main` (habrá que hacer `git rebase origin/main` cuando se una). Se instalan `react-i18next` e `i18next` (aprobados en el issue); sin detector de idioma para no añadir otra dependencia. Todos los textos de la web pública pasan a `frontend/src/i18n/es.json` y `en.json`, una clave por página; los datos de ejemplo siguen en `data/examples.js` y solo `en.json` los traduce. Selector «ES · EN» en la cabecera (`aria-pressed`, `lang`), idioma guardado en el navegador, `<html lang>` y títulos de pestaña según el idioma. El panel (`/admin`) sigue en español, también las etiquetas de estado. Comprobado con `npm run build` y capturas en español e inglés de la portada, `/comprar` y `/comprar/cliente`. Pendiente: los errores del formulario de alta vienen del servidor y siguen solo en español.

## Revisión crítica del equipo

*Pendiente: la escribe Juan Antonio.*
