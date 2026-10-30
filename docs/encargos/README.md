# Encargos entre personas

Si un cambio necesita que **otra persona** haga algo, no se le pide a nadie que le mande un mensaje: se apunta aquí y su agente se lo dice al abrir la sesión.

- Un archivo por persona, con su ID: `sebastian.md`, `juan-antonio.md`, `miguel.md`.
- Un encargo por línea, siempre con esta forma:

  ```
  - [ ] #N · AAAA-MM-DD · de <persona> · qué hay que hacer, con el archivo, la rama o el PR
  ```

- `#N` es el siguiente número libre de ese archivo y no cambia nunca: el hook reconoce el encargo por él, aunque se retoque el texto.
- Al terminarlo, se marca sin borrar nada ni cambiar el número, y se añade al final la fecha y el commit:

  ```
  - [x] #N · AAAA-MM-DD · de <persona> · qué hay que hacer… · hecho AAAA-MM-DD (abc1234)
  ```

- Al abrir, reanudar o limpiar (`/clear`) una sesión de Claude Code, el hook `tools/pendientes-sesion.mjs` enseña los encargos abiertos de esa persona: los de su copia y los de `main` en GitHub (así llegan aunque su rama sea antigua). La persona se reconoce por `git config food4all.persona` (solo si es un ID del equipo) o, si no, por su nombre y correo de git.
- Para dudas o decisiones que haya que hablar, igual: se apuntan como encargo («decidir…», «confirmar…»).
- Lo grande sigue yendo a un issue de GitHub; esto es para lo pequeño entre ramas.
