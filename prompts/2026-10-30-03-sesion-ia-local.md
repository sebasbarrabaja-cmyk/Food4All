---
titulo: IA local con Ollama para el buscador del panel, en vez de Gemini
fecha: 2026-10-30
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
resultado: Código
etiquetas: landing
landing: mejora, interno
origen: Continuación de 2026-10-30-02 (misma sesión): propuesta de Sebastián tras hablar con el profesor
---

Horas aproximadas: la sesión no guardó la hora de cada mensaje. Hora medida: 13:42, al terminar las pruebas.

### ~13:30

Tengo una propuesta con lo que el profesor me ha explicado, puedo usar mi IA local para la landing. Es cierto que mis compañeros no podrian usarla, pero no es un problema a resolver, valora más que funcione a que funcione en todos, y entiende que poner una clave o un pago no es una ocpion. Valora tú esta ocpión y luego continuamos con lo pendiente de Hoy

**Resultado:** Valoración: sí. En el ordenador de Sebastián ya están Ollama 0.34.4 y el modelo `qwen3.5:4b` (3,4 GB), con una RTX 5060 de 8 GB. A favor: sin clave ni pago, los datos no salen del ordenador, desaparece la pega del nivel gratuito de Gemini en la UE y el contador de tokens sigue funcionando. En contra: solo funciona con Ollama encendido (el panel avisa y el buscador sigue buscando secciones), el contexto por defecto de Ollama se queda corto y un modelo de 4B se equivoca más. Dos preguntas: qué hacer con Gemini y cuándo medir.

### ~13:32

1b 2b

**Resultado:** Gemini se quita y se mide ya, con batería. Hecho en `feat/ia-local` (encima de `feat/etiquetas-prompts`):
- `backend/ia.js` sustituye a `backend/gemini.js`: llama a Ollama (`/api/chat`) con respuesta en JSON de forma fija, sin razonamiento, temperatura 0 y 16.384 tokens de contexto; traduce su consumo a la forma común del contador de tokens; `aiReady()` comprueba que Ollama responde y tiene el modelo. Configurable con `IA_MODELO`, `OLLAMA_URL` e `IA_CONTEXTO`, sin clave.
- `search.js`, `server.js` y el aviso del panel («IA local apagada (ollama serve)») al día; README, `docs/DISENO.md`, `docs/contratos.md`, el coste en `docs/FOOD4ALL_alcance_coste_tiempo.md` y las skills también.
- Decisiones del panel (`backend/project.js`): el buscador pasa a «IA local (Ollama)»; el revisor de prompts sale de lo decidido y pasa a descartado (quitado el 26/10), y Gemini, también a descartado. Cerrado ese pendiente de `docs/estado.md`.
- Medido con 10 preguntas reales (en una copia del proyecto): la primera tarda 16,2 s (carga el modelo), las demás 1,1–2,1 s; acierta el apartado en 7 de 10; 46.922 tokens de entrada y 377 de salida; 4,3 GB de memoria de la gráfica. Los fallos son de contexto (el buscador no recibe el Hito 2, las altas ni los tokens) y en una respuesta inventó una cifra de tokens: es lo que pide mejorar el #16. Ollama descarga el modelo tras 5 min sin uso, y la siguiente pregunta vuelve a tardar unos 15 s.
- Probado también: el panel detecta la IA, una pregunta por la API responde bien y se apunta en `/admin#tokens`, y con Ollama apagado o sin el modelo el error dice qué hacer.
- `backend/.env.example` no se ha tocado (el asistente no puede abrirlo): si nombra `GEMINI_API_KEY`, se puede quitar a mano.

#### Revisión de código (/code-review)

Diez posibles fallos. Arreglados: (1) un modelo sin etiqueta (`IA_MODELO=llama3`) no se reconocía → cuenta como `:latest`; (2) cada carga del panel esperaba a Ollama → la comprobación se guarda 30 s; (3) si Ollama se encendía con el panel abierto, preguntar no hacía nada → ahora se pregunta igual y el error dice qué hacer; (4) aviso en el servidor si la pregunta llena el contexto; (5 y 10) los errores de red guardan la causa real; (7) la decisión del agente Hermes ya no habla de «IA gratuita»; (8) una decisión por línea en `project.js`. Sin cambiar: (6) Ollama reutiliza lo calculado de la pregunta anterior y no dice cuánto: la entrada apuntada puede quedarse corta (anotado en `ia.js`; los 46.922 tokens medidos pueden ser menos de los reales); (9) las horas con `~` son la regla de la skill cuando no hay hora exacta.

### ~13:50

Cual es el siguiente paso

**Resultado:** Siguiente: arreglar lo de la revisión y hacer el commit de `feat/ia-local`; después, el mensaje completo para Juan Antonio. Lo que depende de Sebastián: el push y los PR, `backend/.env.example` y cambiar `ADMIN_PASSWORD`. De sus issues, el siguiente con más efecto es el #16 (que el buscador reciba el Hito 2, las altas y los tokens).

## Revisión crítica del equipo

*Pendiente: la escribe Sebastián.*
