---
titulo: Sesión de investigación del pequeño comercio local y detalles de la landing
fecha: 2026-10-26
autor: Sebastián
herramienta: Claude Code
tipo: Sesión de trabajo
tema: Landing (web y panel)
origen: Sesión en WSL sobre la rama fix/analisis-landing; rama feat/comercio-local. Horas aproximadas (~), reconstruidas por el asistente a partir de la hora de los commits y archivos
---

### ~00:18

Abre otra ver a ver como se vería

**Resultado:** Se abrió `localhost:3001` en Firefox con la versión de `fix/analisis-landing`.

### ~00:30

Quiero que ahora hagas otro analisis pero solo en pequeños detalles. Busca informacion de pequeños comercios locales que puedan usar nuestros servicios y usa la informacion de estos para mejorar la landing y aportar al proyecto

**Resultado:** El asistente propuso una especificación: investigación de escritorio con fuentes, separando hecho, inferencia e hipótesis; sin presentarla como validación; solo detalles de la landing, cada uno ligado a un hallazgo.

### ~00:35

1ab 2ab 3b

**Resultado:** Fuentes generales y ejemplos concretos (los nombres de comercios, solo en el chat porque el repositorio es público); detalles y pequeños bloques si se justifican; se sigue usando prompt-master en las próximas tareas. Hallazgos en `docs/competencia/comercio-local.md` (CL-01 a CL-10).

#### Cambio 1 · Tabla «¿En qué se diferencia?»

**Resultado:** Nueva columna «Plataformas de mercados municipales» en `/comprar` (CL-01, CL-02). Málaga y Sevilla ya tienen plataformas municipales con reparto. En Sevilla, «en cada compra solo se permiten pedidos de un único mercado o agrupación», y esa es la diferencia con Food4All. La nota al pie dice de dónde salen los datos y la fecha de consulta.

#### Cambio 2 · Registro sanitario o exención

**Resultado:** El campo del alta pasa a «Registro sanitario o exención», con la ayuda «Tu número de registro sanitario (RGSEAA). Si no lo necesitas, escribe el motivo: lo revisamos antes del alta». Los requisitos mínimos, el mensaje de error del servidor y la columna del panel dicen lo mismo. Así el formulario cumple la RST-05 ya validada («o una exención justificada»). Motivo: un productor en venta directa (Decreto 163/2016, CL-05) no tiene por qué tener registro RGSEAA. Queda como pregunta legal para el equipo si ese productor puede vender a través de un intermediario (CL-06).

#### Revisión (/code-review)

**Resultado:** De 9 hallazgos se arreglaron 6:
- La columna de mercados municipales ya no afirma lo que no se comprobó: dice «mercado o comercios», y la fila «Después de comprar» pasa a «No comprobado».
- Vuelve el aviso de «comparación conceptual» para las columnas de supermercado y delivery.
- Las ayudas de los campos del alta quedan enlazadas al campo (`aria-describedby`) para los lectores de pantalla (comprobado en el código, sin probar con lector).
- Una exención justificada admite hasta 300 caracteres (probado con `curl`: 250 pasan y 301 no).
- En los registros de prompts, los apartados que no son mensajes pasan a `####`.

Se descartaron 3:
- «El repositorio es público» es correcto: comprobado en GitHub.
- Distinguir en el panel un número de registro de una exención pediría un campo nuevo en los datos.
- Registrar mensajes que no tocan la landing: pendiente de que Sebastián decida qué regla manda.

### ~00:44

a

**Resultado:** En Food4All se registran **todos** los prompts del desarrollo, como pide `AGENTS.md` (el profesor exige todos), aunque no toquen la landing. La regla privada de Sebastián que decía «lo que no toca la landing no entra» queda pendiente de que él la cambie.
