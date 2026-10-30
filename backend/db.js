// Base de datos común (punto «Base de datos» del feedback del 27/10). Dueño: Miguel, que elige el motor.
// Contrato (docs/contratos.md, apartado 3): mientras no haya DATABASE_URL, dbReady() es false y cada
// módulo responde con sus datos de prueba (backend/datos-prueba/), así nadie se bloquea sin Docker.
export const dbReady = () => Boolean(process.env.DATABASE_URL);

// query(sql, params) → filas. Miguel la implementa con el motor que elija.
export async function query() {
  throw new Error('Base de datos aún sin implementar (docs/contratos.md, apartado 3).');
}
