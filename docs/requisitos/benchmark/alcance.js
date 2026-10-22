// Alcance de cada requisito y de qué depende. Se calcula por prefijo de ID (RF-08 abarca RF-08.1-01, RF-08.2-03…).
// Alcance: «MVP simulado» (entra en la demo, pero con un servicio simulado: pago, reembolso o IA), «MVP», «V2», «V3», «Excluido».
// Depende de: decisiones pendientes (D-), hipótesis (H-) o servicios externos que pueden cambiar el requisito.

const SIMULADO = ['RF-06.4', 'RF-06.6-02', 'RF-07.3-05', 'RF-07.5-03', 'RF-07.6', 'RF-08.2-03', 'RF-10.1-06', 'RF-10.2-02', 'RF-12'];

const DEPENDE = [
  ['D-01 rol jurídico', ['RF-08.2-03', 'RF-08.2-04', 'RF-08.3-02', 'RF-08.5', 'RNF-08.1-06', 'RNF-09.1-03', 'RNF-09.1-04']],
  ['D-02 comisión', ['RF-02.1-04', 'RF-17', 'RF-04.5-05', 'RF-10.2-04', 'RF-07.5-04']],
  ['D-03 hub y zonas', ['RF-08', 'RF-06.2-02', 'RF-06.2-03', 'RF-13.6', 'RF-01.8-06', 'RF-02.2-03']],
  ['H-01 compra mínima', ['RF-05.4-02', 'RF-05.4-03', 'RF-05.8-04', 'RF-07.6-01', 'RF-13.6-01']],
  ['H-02 espera de la entrega', ['RF-06.2-02', 'RF-09.2-03']],
  ['H-04 plazos de incidencias', ['RF-10.1-02', 'RF-10.2-01', 'RF-13.3-03']],
  ['Servicio externo: Google', ['RF-01.3']],
  ['Servicio externo: correo', ['RF-01.5-01', 'RF-01.6-03', 'RF-02.2-09', 'RF-02.4-02', 'RF-06.5-02', 'RF-07.2-01', 'RF-09.3', 'RF-09.5']],
  ['Servicio externo: motor de IA', ['RF-12']],
];

const encaja = (id, pre) => id === pre || id.startsWith(pre + '-') || id.startsWith(pre + '.');

function alcance(r) {
  if (r.entrega === 'Excluido') return 'Excluido';
  if (r.entrega !== 'MVP') return r.entrega;
  return SIMULADO.some((p) => encaja(r.id, p)) ? 'MVP simulado' : 'MVP';
}
const dependeDe = (r) => DEPENDE.filter(([, ps]) => ps.some((p) => encaja(r.id, p))).map(([d]) => d).join('; ');

module.exports = { alcance, dependeDe };
