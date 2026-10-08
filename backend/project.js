// Información interna del proyecto (solo vista de administrador, servida tras sesión).
// Fuente: prompt de landing (secciones 3.5, 5.4, 7 y 8) y documento maestro (secciones 64–66).

export const PROJECT = {
  name: 'FOOD4ALL',
  summary: 'Plataforma de alimentación local que permite planificar, comprar y gestionar la comida desde un único lugar, combinando productos de varios vendedores y usando IA para adaptar la compra.',

  team: [
    { name: 'Sebastián', role: 'Backend: API, base de datos, lógica del carrito multi-vendedor y pedidos' },
    { name: 'Juan Antonio', role: 'Frontend: landing y experiencia de compra' },
    { name: 'Miguel', role: 'IA y datos: asistente de cesta y catálogo de productos y vendedores' },
  ],
  shared: 'Pruebas y documentación: compartidas por los tres.',

  scope: {
    includes: [
      'Marketplace abierto con estándares mínimos para vendedores',
      'Carrito multi-vendedor con un único pago',
      'Entrega consolidada coordinada por FOOD4ALL (recogida, hub, verificación, empaquetado, reparto)',
      'Asistente de IA para planificar la cesta y gestión posterior de alimentos',
      'Ingredientes y comida preparada; el producto local es el elemento central',
    ],
    excludes: [
      'Delivery inmediato tipo Glovo',
      'Supermercado propio',
      'Empresa centrada en platos preparados',
      'Acuerdos con universidades (no existen todavía)',
    ],
  },

  decisions: {
    decidido: ['Marketplace abierto con estándares mínimos', 'Carrito multi-vendedor', 'Entrega consolidada coordinada por FOOD4ALL', 'IA visible y funcional', 'Producto local como elemento central', 'Comisión como ingreso principal', 'Suscripción por beneficios'],
    hipotesis: ['Compra mínima de unos 10–15 €', 'Primer pedido con ventaja de entrega', 'Algunos productos más baratos que en el supermercado'],
    pendiente: ['Porcentaje de comisión', 'Precios de suscripción', 'Ubicación del hub', 'Puntos de recogida', 'Horarios de entrega', 'Quién paga cada parte de la logística', 'Definición exacta de "local"', 'Proceso detallado de alta de vendedores', 'Rol jurídico de FOOD4ALL'],
  },

  market: [
    { label: 'Gasto en alimentación dentro del hogar en España (2025) — TAM', value: '87.831 M€', kind: 'fuente', source: 'MAPA, Informe de Consumo Alimentario 2025 (30/07/2026)', url: 'https://www.mapa.gob.es/es/alimentacion/temas/consumo-tendencias/panel-de-consumo-alimentario/ultimos-datos' },
    { label: 'Cuota por canal', value: 'Supermercado 68,2 % · Comercio tradicional 10,6 % · Online 2 %', kind: 'fuente', source: 'MAPA, Informe de Consumo Alimentario 2025' },
    { label: 'Ticket medio y frecuencia', value: '19,4 € · 233 compras/año por persona', kind: 'fuente', source: 'MAPA, Informe de Consumo Alimentario 2025' },
    { label: 'Estudiantes de grado y máster en US, UGR y UMA', value: '≈ 141.900', kind: 'fuente', source: 'U-Ranking (US 24/25), Memoria UGR 24/25, El Español (UMA 23/24); suma propia' },
    { label: 'Comparten piso o viven solos', value: '27,1 % → ≈ 38.500 estudiantes', kind: 'hipotesis', source: 'EUROSTUDENT 8 (dato nacional) · estimación propia' },
    { label: 'Gasto potencial del segmento — SAM', value: '≈ 72 M€/año', kind: 'hipotesis', source: 'Estimación propia: 38.500 × 1.875 €' },
    { label: 'Cuota alcanzable — SOM', value: 'Por validar', kind: 'pendiente', source: '—' },
  ],

  legal: {
    note: 'Análisis orientativo, no asesoramiento jurídico.',
    // Enlaces a las versiones oficiales (BOE y EUR-Lex), sección 66.3 del documento maestro.
    areas: [
      ['Seguridad alimentaria', [
        ['Reg. (CE) 178/2002', 'https://eur-lex.europa.eu/eli/reg/2002/178/oj'],
        ['Reg. (CE) 852/2004', 'https://eur-lex.europa.eu/eli/reg/2004/852/oj'],
        ['RD 191/2011 (RGSEAA)', 'https://www.boe.es/eli/es/rd/2011/02/18/191'],
      ]],
      ['Información al consumidor', [['Reg. (UE) 1169/2011, art. 14', 'https://eur-lex.europa.eu/eli/reg/2011/1169/oj']]],
      ['Consumidores y comercio electrónico', [
        ['RDL 1/2007', 'https://www.boe.es/eli/es/rdlg/2007/11/16/1'],
        ['Ley 34/2002 (LSSI)', 'https://www.boe.es/eli/es/l/2002/07/11/34'],
      ]],
      ['Plataformas', [
        ['Reg. (UE) 2022/2065 (DSA)', 'https://eur-lex.europa.eu/eli/reg/2022/2065/oj'],
        ['Reg. (UE) 2019/1150 (P2B)', 'https://eur-lex.europa.eu/eli/reg/2019/1150/oj'],
      ]],
      ['Datos e IA', [
        ['RGPD', 'https://eur-lex.europa.eu/eli/reg/2016/679/oj'],
        ['LOPDGDD', 'https://www.boe.es/eli/es/lo/2018/12/05/3'],
        ['Reg. (UE) 2024/1689 (IA)', 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj'],
      ]],
      ['Desperdicio', [['Ley 1/2025', 'https://www.boe.es/eli/es/l/2025/04/01/1']]],
      ['Reparto', [['Ley 12/2021 (Ley Rider)', 'https://www.boe.es/eli/es/l/2021/09/28/12']]],
    ],
    tasks: [
      'Decidir el rol jurídico de FOOD4ALL (intermediario, operador alimentario o mixto)',
      'Definir los requisitos legales mínimos de alta de vendedores',
      'Redactar borradores de términos y condiciones para consumidores y vendedores',
      'Definir la política de privacidad y qué datos recoge la IA',
      'Diseñar el sistema de trazabilidad e incidencias',
      'Decidir el modelo laboral de la última milla',
      'Validar el análisis con un profesional o con la asignatura',
    ],
    pending: 'Decidir el rol jurídico de FOOD4ALL: intermediario, operador alimentario o mixto.',
  },

  // Plan de hitos. La fuente de verdad es Asana (proyecto de la asignatura, tareas [Food4All]);
  // esto se usa como respaldo sin conexión y para mostrar el responsable previsto.
  // Los 6 bloques del prompt (sección 7) son las subtareas del Hito 1 del curso.
  milestones: [
    {
      n: 1, title: 'Contexto, actores y alcance',
      children: [
        { name: 'Elegir el nombre de la empresa y el porqué', children: [['Proponer alternativas', 'Miguel'], ['Comprobar dominio y marca', 'Sebastián'], ['Redactar la justificación', 'Juan Antonio']] },
        { name: 'Integrantes y roles del grupo', children: [['Definir el reparto de roles', 'Sebastián'], ['Redactar la descripción', 'Miguel'], ['Configurar el tablero de Asana', 'Juan Antonio']] },
        { name: 'Mercado', children: [['Calcular TAM/SAM/SOM', 'Miguel'], ['Recopilar datos de consumo del MAPA', 'Juan Antonio'], ['Reunir datos de estudiantes', 'Sebastián'], ['Analizar la competencia', 'Juan Antonio'], ['Describir actores y revisar fuentes', 'Miguel']] },
        { name: 'Alcance', children: [['Listar qué incluye y qué no', 'Sebastián'], ['Recoger decisiones tomadas y pendientes', 'Juan Antonio'], ['Definir las hipótesis a validar', 'Miguel'], ['Redactar la versión final', 'Sebastián']] },
        { name: 'Marco legal', children: [['Seguridad alimentaria, información al consumidor y comercio electrónico', 'Miguel'], ['Plataforma y vendedores (DSA y P2B), desperdicio y reparto', 'Juan Antonio'], ['Protección de datos e IA y tareas legales pendientes', 'Sebastián']] },
        { name: 'Landing documental', children: [['Definir estructura y estilo visual', 'Juan Antonio'], ['Maquetar y pasar el contenido de los hitos 1 a 5', 'Sebastián'], ['Revisar y publicar', 'Miguel']] },
      ],
    },
    { n: 2, title: 'Requisitos y criterios de aceptación', children: [] },
    { n: 3, title: 'Análisis y diseño estructurado', children: [] },
    { n: 4, title: 'Modelo de dominio y diseño OO', children: [] },
    { n: 5, title: 'Integración, calidad y dossier final', children: [] },
  ],
};
