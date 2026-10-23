---
titulo: Sesión 4 (cont.): límites del formulario de alta y del login, y clave de sesión
fecha: 2026-10-20
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
origen: Mensajes enviados a Claude Code en la sesión, en orden y sin corregir, y la parte de la especificación aprobada que toca a este cambio
---

Misma sesión que `2026-10-20-01-sesion-qa-y-fecha-de-prompts.md` (ahí está la especificación completa). Este cambio va en la rama `fix/seguridad-formularios`. Hora de los mensajes no registrada.

### Mensaje 2

1a,b 2a y muetrame como queda al final, ambos casos

### Mensaje 3 (respuesta a la especificación)

1a 2(Por ahora estoy en fase desarrollo, que entre directamente o algo muy sencillo) 3a. Importante de este traajo, mejor pocas cosas pero muy refinadas a trescientras decentes pero sin saberlo

### Especificación aprobada (parte de este cambio)

```
1b.   Rama fix/seguridad-formularios (backend/server.js):
      - /api/sellers/apply: longitud máxima por campo (400 con mensaje) y límite de envíos por IP.
      - /api/admin/login: límite de intentos fallidos por IP (429 durante un tiempo).
      - SESSION_SECRET: sin el valor por defecto 'dev-only-secret' (ver pregunta 2).
      - frontend/src/pages/Vender.jsx: maxLength en los campos, con los mismos límites.

- [ ] seguridad: con curl, un campo demasiado largo → 400; el envío N+1 → 429;
      el intento fallido N+1 → 429; el servidor no arranca sin SESSION_SECRET (o avisa)

Preguntas: 1) limitador propio en memoria (a) o express-rate-limit (b); 2) si falta SESSION_SECRET,
no arrancar (a) o generar una clave en desarrollo (b); 3) límites: 5 envíos y 5 fallos de login
cada 15 min por IP, textos de hasta 1000 y 120 caracteres (a).
```

Respuestas: 1a (limitador propio, sin dependencias), 2 "que entre directamente o algo muy sencillo" (si falta la clave se genera una al arrancar y se avisa por consola) y 3a.
