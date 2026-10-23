---
titulo: Sesión 2: revisión de la web, buscador con IA y revisor gratis
fecha: 2026-10-11
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
origen: Mensajes enviados a Claude Code en la sesión, en orden y sin corregir
---

Mensajes enviados a Claude Code durante la sesión (hora no registrada). Los que empiezan por "1a", "2a"… responden a preguntas numeradas del asistente:
1 buscador del panel (a: buscador sin IA + preguntas con un modelo gratuito; b: Hermes Agent sin herramientas; c: solo buscador),
2 revisor de prompts (a: pasarlo a un modelo gratuito; b: quitarlo y ponerlo en descartado),
3 modelo gratuito (a: Gemini; b: OpenRouter; c: Ollama),
4 arreglos de la revisión (a: saltar al contenido, alineación del teléfono y avisos de error; b: + límite de intentos del login; c: + fuentes sin Google Fonts; d: nada). El segundo "3a" del último mensaje es la respuesta a la 4.

### 1

haz una pasada de browser-qa a la landing

### 2

No estoy interesadi en la version de movil. Ponlo como pendiente pero sin prioridad(dentro del proyecto, no es el SO)Te acuerdas de hermes, creo que es perfecta para esta landing, sobretodo el apartado del buscador(Lo de optimizar los pronts quitalo, no exiten opciones gratuitas que yo sepa, ponlo en el apartado descartado y el porque, al menos que encuetres alternanivas)

### 3

1a(No quiero un agente, quiero un buscador para tipo:  ¿De que va el proyecto? y que te envie al apartado correcto o reponda preguntas simples. 2a(Busca antes de nada) 3a(Quiero que sea util. pero tampoco vamos a poner 100 pronts al dia, yo te digo que mas de 5-10 lo dudo) 3a

---

## Revisión crítica del equipo

*Respuestas de Sebastián a preguntas guiadas del asistente (23/10/2026), comunes a las tres primeras sesiones de la landing (08-03, 10-01 y 11-01); aquí van solo las que corresponden a este archivo. Las opciones las propuso el asistente; la elección es de Sebastián.*

- **Revisado por:** Sebastián
- **Fecha:** 23/10/2026
- **Qué aceptamos de lo que propuso la IA y por qué:**
  - Usar Gemini en su nivel gratuito, solo en el panel privado, en vez de una API de pago.
- **Qué corregimos, rechazamos o comprobamos aparte:**
  - Descarté el agente pesado (Hermes) porque había que instalarlo en cada ordenador y bastaba con un buscador sencillo.
- **Por qué estaba justificado usar IA aquí:**
  - Construir una web completa (frontend, backend y panel) en pocos días, sin ser yo todavía experto en React ni Express.
  - El contenido y el diseño salían de nuestros documentos (el prompt de la landing y el maestro); la IA los implementaba.
