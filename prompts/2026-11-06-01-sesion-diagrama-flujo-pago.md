---
titulo: Revisar el diagrama de flujo del pedido frente al ejemplo US-05 / RF-06 del profesor
fecha: 2026-11-06
autor: Juan Antonio
herramienta: Claude Code
tipo: Feedback
tema: Requisitos del Hito 2
resultado: Análisis o decisión
etiquetas: requisito
requisitos: RF-06
origen: Sesión nueva, con capturas del diagrama hecho en draw.io y de la diapositiva 13 de clase (Food4All · US-05 / RF-06 · evitar pedidos duplicados tras el pago)
---

Las capturas no se suben al repositorio; se describen en cada mensaje.

### 13:35

Que tal ves el diagrama mi resultado es ese estoy habalndo de Food4All

*(Adjunta dos capturas: su diagrama, con Usuario → Inicio Sesión → Selecciona Productos → Confirma el pago en el carrito → Proveedor de pago → Almacén pedidos y subpedidos ← Vendedor → Recogida del pedido → Reparto del pedido → Entregado; y la diapositiva del profesor con el flujo, el DER v0 con Intento de pago y la arquitectura «Orquestar pedido».)*

**Resultado:** El asistente señala lo que falta frente al RF-06: el intento de pago y su estado, un proceso «Orquestar / crear pedido» entre el proveedor de pago y el almacén que compruebe si el intento ya generó un pedido, y la vuelta al usuario con la confirmación o el error. En la notación: flechas sin etiquetar con el dato que viaja, el almacén dibujado como elipse (es un proceso), «Recogida» y «Entregado» como entidades externas, la flecha del vendedor al revés, falta el repartidor y erratas (Seleciona, Sesion, Almacen). Propone un esquema de la parte del pago.

### 13:35

A ver hazlo tu y muestramelo

**Resultado:** Interrumpido: el usuario canceló el dibujo antes de que se hiciera.

### 13:40

y asi

*(Adjunta una captura de la versión nueva: «productos» en un rectángulo y, tras «Confirma el pago en el carrito», dos elipses «si» → Proveedor de pago y «No» → «Fin».)*

**Resultado:** El asistente propone dibujar la decisión como rombo («¿Confirma la compra?») con Sí / No escritos en las flechas y que la rama «No» vuelva al carrito en lugar de terminar; que «productos» sea el proceso «Selecciona productos» (o el almacén «Catálogo»), y que se añadan, después del proveedor de pago, los rombos «¿Pago aprobado?» (No → mostrar error) y «¿Este intento de pago ya tiene pedido?» (Sí → mostrar el pedido existente, sin duplicar), que es lo que pide el RF-06. Siguen pendientes el almacén, la flecha del vendedor, el repartidor y las erratas.

### 13:44

Pon esta conversacion es Food4All

**Resultado:** Este registro, en la rama `docs/diagrama-flujo-pago`.

## Revisión crítica del equipo

*Pendiente: la escribe Juan Antonio.*
