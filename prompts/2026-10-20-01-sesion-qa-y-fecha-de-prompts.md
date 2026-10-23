---
titulo: Sesión 4: QA en el navegador y fecha de los prompts en hora de España
fecha: 2026-10-20
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
origen: Mensajes enviados a Claude Code en la sesión, en orden y sin corregir, y la especificación aprobada
---

Continuación de la revisión del 2026-10-19. Tras el mensaje 1 se pasó browser-qa a la rama `fix/contraste-y-tokens` (veredicto: lista) y el asistente propuso los siguientes pasos. Hora de los mensajes no registrada.

### Mensaje 1

Continua con la revision de food4Al

### Mensaje 2

1a,b 2a y muetrame como queda al final, ambos casos

### Mensaje 3 (respuesta a la especificación)

1a 2(Por ahora estoy en fase desarrollo, que entre directamente o algo muy sencillo) 3a. Importante de este traajo, mejor pocas cosas pero muy refinadas a trescientras decentes pero sin saberlo

### Especificación aprobada

```
## Contexto
- Food4All (~/proyectos/Food4All): Express 4 + express-session (backend), React + Vite (frontend).
- Ramas apiladas: main → feat/panel-prompts-ia → fix/nombre-prompts → fix/contraste-y-tokens.
  Las ramas nuevas salen de fix/contraste-y-tokens.
- Todo cambio se registra en prompts/ (formato prompts/README.md) en el mismo commit.

## Tareas
2a. /code-review de fix/contraste-y-tokens frente a fix/nombre-prompts. Primero, antes de tocar nada.
1a-1. Rama fix/fecha-prompts: backend/prompts.js:36 calcula la fecha en Europe/Madrid
      (Intl, sin dependencias), no en UTC.
1a-2. Rama fix/buscador-reserva: backend/search.js:53. Si Gemini devuelve un JSON que no es un
      objeto (null, número, lista), se usa la respuesta de reserva en vez de dar un 500.
1b.   Rama fix/seguridad-formularios (backend/server.js):
      - /api/sellers/apply: longitud máxima por campo (400 con mensaje) y límite de envíos por IP.
      - /api/admin/login: límite de intentos fallidos por IP (429 durante un tiempo).
      - SESSION_SECRET: sin el valor por defecto 'dev-only-secret' (ver pregunta 2).
      - frontend/src/pages/Vender.jsx: maxLength en los campos, con los mismos límites.

## Qué no se toca
El resto de la landing, el esquema de datos, las dependencias (salvo que digas que sí), main, push y PR.

## Hecho cuando
- [ ] code-review de la rama de contraste hecho y sus fallos reales corregidos
- [ ] fecha: prueba con la hora simulada a las 00:30 de Madrid → sale el día de Madrid
- [ ] buscador: prueba con null, 3 y [] → respuesta de reserva, sin 500
- [ ] seguridad: con curl, un campo demasiado largo → 400; el envío N+1 → 429;
      el intento fallido N+1 → 429; el servidor no arranca sin SESSION_SECRET (o avisa)
- [ ] npm start compila; browser-qa rápido de /vender y /admin/login
- [ ] /code-review de las tres ramas y /security-review de fix/seguridad-formularios
- [ ] un commit por rama, cada uno con su entrada en prompts/
- [ ] nota en ~/muro-negro/wiki/proyectos/Food4All.md
- [ ] al final, te enseño cada caso: el diff y la salida de las pruebas (antes y después)

## Cuándo paro y pregunto
Si hace falta una dependencia, borrar archivos, cambiar el formato de db.json, o si el code-review
encuentra algo que cambia el diseño.

Preguntas: 1) limitador propio en memoria (a) o express-rate-limit (b); 2) si falta SESSION_SECRET,
no arrancar (a) o generar una clave en desarrollo (b); 3) límites: 5 envíos y 5 fallos de login
cada 15 min por IP, textos de hasta 1000 y 120 caracteres (a).
```

Esta entrada acompaña el arreglo de la fecha (rama `fix/fecha-prompts`). El buscador y la seguridad van en sus propias ramas, con su entrada.

---

## Revisión crítica del equipo

*La escribe la persona autora (o quien revise), con sus palabras. No la redacta el asistente. Mientras ponga «pendiente», el panel marca este prompt como «Revisión pendiente».*

- **Revisado por:** _pendiente_
- **Fecha:** _pendiente_
- **Qué aceptamos de lo que propuso la IA y por qué:** _pendiente_
- **Qué corregimos, rechazamos o comprobamos aparte:** _pendiente_
- **Por qué estaba justificado usar IA aquí:** _pendiente_
