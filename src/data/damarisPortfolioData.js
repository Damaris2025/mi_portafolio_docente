/**
 * ============================================================
 *  BASE DE DATOS DEL PORTAFOLIO DOCENTE DIGITAL
 *  Todo el contenido del sitio vive aquí. Edita textos, rutas
 *  de imágenes y enlaces sin tocar los componentes.
 *
 *  Los íconos se referencian por nombre (string) y se resuelven
 *  en  src/components/ui/iconMap.js
 * ============================================================
 */

/* ---------------------------------------------------------------
 *  NAVEGACIÓN (14 apartados)
 * ------------------------------------------------------------- */
export const sections = [
  { id: 'portada', number: 1, label: 'Portada', icon: 'Home' },
  { id: 'presentacion', number: 2, label: 'Presentación personal', icon: 'UserRound' },
  { id: 'objetivos', number: 3, label: 'Objetivos de la práctica', icon: 'Target' },
  { id: 'contexto', number: 4, label: 'Contexto educativo', icon: 'School' },
  { id: 'planeacion', number: 5, label: 'Planeación y organización', icon: 'CalendarRange' },
  { id: 'diagnostico', number: 6, label: 'Diagnóstico educativo', icon: 'ChartColumn' },
  { id: 'planificaciones', number: 7, label: 'Planificaciones de clases', icon: 'NotebookPen' },
  { id: 'evidencias', number: 8, label: 'Evidencias de la práctica', icon: 'Images' },
  { id: 'diario', number: 9, label: 'Diario reflexivo semanal', icon: 'BookOpen' },
  { id: 'evaluacion', number: 10, label: 'Evaluación y retroalimentación', icon: 'ClipboardCheck' },
  { id: 'propuesta', number: 11, label: 'Propuesta de mejora', icon: 'Lightbulb' },
  { id: 'recursos', number: 12, label: 'Recursos tecnológicos', icon: 'MonitorSmartphone' },
  { id: 'experiencias', number: 13, label: 'Experiencias significativas', icon: 'Sparkles' },
  { id: 'anexos', number: 14, label: 'Anexos', icon: 'FolderOpen' },
]

/* ---------------------------------------------------------------
 *  APARTADO 1 · PORTADA
 * ------------------------------------------------------------- */
export const portada = {
  universidad: 'Universidad de El Salvador',
  facultad: 'Facultad de Ciencias Naturales y Matemática',
  escuela: 'Escuela de Matemática',
  carrera: 'Licenciatura en Informática Educativa',
  titulo: 'Portafolio Docente Digital',
  asignatura: 'Práctica Docente (DDP1109)',
  ciclo: 'Ciclo II/2026',
  estudiante: 'Damaris Elizabeth Ordoñez Murcia',
  tutorUES: 'Licda. Silza Sarai Canizales de Marroquín',
  coordinador: 'Ing. Misael Enrique Juárez Blanco',
  institucion: 'Centro Escolar Rodrigo J. Leiva',
  lema: 'No enseñamos asignaturas, enseñamos a personas.',
  /**
   * FOTOGRAFÍA PROFESIONAL (public/FOTO_PRINCIPAL.png)
   * Mientras el archivo no exista se muestra un avatar elegante.
   */
  foto: '/FOTO_PRINCIPAL.png',
  stats: [
    { value: '30', label: 'Estudiantes encuestados', icon: 'Users' },
    { value: '5', label: 'Semanas por módulo', icon: 'CalendarDays' },
    { value: 'A · B · C', label: '1.° Bachillerato', icon: 'GraduationCap' },
  ],
}

/* ---------------------------------------------------------------
 *  APARTADO 2 · PRESENTACIÓN PERSONAL Y PROFESIONAL
 * ------------------------------------------------------------- */
export const presentacion = {
  tabs: [
    {
      id: 'biografia',
      label: 'Biografía académica',
      icon: 'GraduationCap',
      text: 'Damaris Elizabeth Ordoñez Murcia es estudiante de la Universidad de El Salvador, cursando actualmente la Licenciatura en Informática Educativa. Durante su formación académica ha adquirido conocimientos relacionados con la educación y la tecnología, trabajando con jóvenes de tercer ciclo en el área de Informática Educativa. A través de estas experiencias ha fortalecido sus conocimientos y desarrollado habilidades para trabajar con estudiantes, planificar actividades educativas y utilizar diferentes recursos tecnológicos como apoyo al aprendizaje de una manera creativa, responsable y adecuada a las necesidades estudiantiles.',
    },
    {
      id: 'intereses',
      label: 'Intereses en informática educativa',
      icon: 'Cpu',
      text: 'Sus principales intereses están relacionados con el uso de recursos digitales que permitan hacer las clases más dinámicas, participativas y fáciles de comprender. Le interesa aprender y utilizar herramientas tecnológicas, plataformas educativas, recursos multimedia y actividades interactivas que ayuden a los estudiantes a desarrollar sus conocimientos y habilidades. También tiene especial interés en la gamificación y en el uso de plataformas como Moodle, Google Classroom y otras herramientas digitales que complementen las clases con objetivos educativos claros.',
    },
    {
      id: 'expectativas',
      label: 'Expectativas de la práctica docente',
      icon: 'Compass',
      text: 'Durante su práctica docente en el Centro Escolar Rodrigo J. Leiva espera fortalecer sus habilidades como futura profesional de la Informática Educativa, especialmente en la planificación y desarrollo de actividades con estudiantes, aprender de los docentes y conocer de cerca las situaciones del aula. Busca aportar sus conocimientos en tecnología y utilizar recursos digitales que hagan más atractivas las clases y motiven la participación, además de desarrollar mayor confianza frente al grupo y mejorar sus estrategias de enseñanza.',
    },
  ],
}

/* ---------------------------------------------------------------
 *  APARTADO 3 · OBJETIVOS
 * ------------------------------------------------------------- */
export const objetivos = {
  general:
    'Diagnosticar el contexto educativo de Primer Año de Bachillerato (secciones A, B y C) del Centro Escolar Rodrigo J. Leiva, para planificar una práctica docente pertinente en la Modalidad Alterna.',
  especificos: [
    { icon: 'Eye', text: 'Observar las condiciones del aula, la dinámica de clase y el clima de aprendizaje.' },
    { icon: 'UsersRound', text: 'Identificar participación, autonomía, intereses, dificultades y necesidades de apoyo del estudiantado.' },
    { icon: 'Laptop', text: 'Recopilar información sobre acceso y uso de recursos tecnológicos.' },
    { icon: 'Scale', text: 'Analizar condiciones pedagógicas y tecnológicas que favorecen o limitan el aprendizaje en Lenguaje y Literatura.' },
    { icon: 'ListChecks', text: 'Priorizar necesidades para una propuesta de intervención adaptada a la modalidad.' },
  ],
}

/* ---------------------------------------------------------------
 *  APARTADO 4 · CONTEXTO EDUCATIVO (Bento de 4 bloques)
 * ------------------------------------------------------------- */
export const contexto = [
  {
    id: 'institucion',
    title: 'Institución',
    icon: 'Building2',
    tone: 'violet',
    text: 'El Centro Escolar Rodrigo J. Leiva ofrece Modalidad Alterna (flexible) los sábados de 7:30 a. m. a 3:30 p. m., desde Tercer Ciclo hasta Segundo Año de Bachillerato. Cada módulo dura 5 semanas (una lección por sábado) y cierra con actividades integradoras y examen de fin de módulo, contando con un receso matutino de 30 minutos.',
    chips: ['Sábados 7:30 a. m. – 3:30 p. m.', 'Módulos de 5 semanas', 'Receso de 30 min'],
  },
  {
    id: 'grupo',
    title: 'Grupo asignado',
    icon: 'Users',
    tone: 'rose',
    text: 'Primer Año de Bachillerato, secciones A, B y C, asignatura Lenguaje y Literatura. Se encuestó a 30 estudiantes; el 93.3 % tiene 18 años o más.',
    chips: ['Tutor: Licdo. Francisco Alexander Sanabria Ramírez', 'Coordinador: Licdo. Félix De Jesús Calderón Umaña'],
    bigNumber: '93.3 %',
    bigLabel: 'tiene 18 años o más',
  },
  {
    id: 'tecnologia',
    title: 'Recursos tecnológicos',
    icon: 'Smartphone',
    tone: 'indigo',
    text: 'La mayoría del estudiantado tiene computadora o teléfono. La institución cuenta con paquetes escolares y recursos tecnológicos como laptops y celulares.',
    chips: ['Computadora / teléfono', 'Paquetes escolares', 'Laptops y celulares'],
  },
  {
    id: 'barrera',
    title: 'Barrera contextual',
    icon: 'Route',
    tone: 'amber',
    text: 'Algunos estudiantes viajan desde zonas distantes, lo que afecta la puntualidad y exige flexibilidad pedagógica.',
    chips: ['Distancia', 'Puntualidad', 'Flexibilidad pedagógica'],
  },
]

/* ---------------------------------------------------------------
 *  APARTADO 5 · PLANEACIÓN Y ORGANIZACIÓN
 * ------------------------------------------------------------- */
export const gantt = {
  periodo: '13/08/2026 – 20/09/2026',
  responsable: 'Damaris Ordoñez',
  /** `month` se usa para el filtro Agosto / Septiembre */
  columns: [
    { id: 0, label: '13-16', month: 'Agosto' },
    { id: 1, label: '17-18', month: 'Agosto' },
    { id: 2, label: '19-22', month: 'Agosto' },
    { id: 3, label: '23-27', month: 'Agosto' },
    { id: 4, label: '28-01', month: 'Agosto' },
    { id: 5, label: '02-04', month: 'Septiembre' },
    { id: 6, label: '05-07', month: 'Septiembre' },
    { id: 7, label: '08-09', month: 'Septiembre' },
    { id: 8, label: '10-12', month: 'Septiembre' },
    { id: 9, label: '13-16', month: 'Septiembre' },
    { id: 10, label: '17-19', month: 'Septiembre' },
    { id: 11, label: '20', month: 'Septiembre' },
  ],
  fases: {
    preparacion: { label: 'Preparación', bar: 'bg-violet-600' },
    campo: { label: 'Trabajo de campo', bar: 'bg-rose-600' },
    analisis: { label: 'Análisis', bar: 'bg-indigo-700' },
    informe: { label: 'Informe', bar: 'bg-amber-500' },
  },
  /** start / end = índices (inclusivos) de las columnas ocupadas */
  actividades: [
    { n: 1, name: 'Revisión de propósito y objetivos', start: 0, end: 0, fase: 'preparacion', when: 'Ago 13-16' },
    { n: 2, name: 'Objetivos del diagnóstico', start: 0, end: 1, fase: 'preparacion', when: 'Ago 13-16, 17-18' },
    { n: 3, name: 'Diseño de guía y cuestionario', start: 1, end: 2, fase: 'preparacion', when: 'Ago 17-18, 19-22' },
    { n: 4, name: 'Ajuste de instrumentos', start: 2, end: 2, fase: 'preparacion', when: 'Ago 19-22' },
    { n: 5, name: 'Planificación de visitas', start: 2, end: 3, fase: 'campo', when: 'Ago 19-22, 23-27' },
    { n: 6, name: 'Observación del aula', start: 3, end: 3, fase: 'campo', when: 'Ago 23-27' },
    { n: 7, name: 'Aplicación del cuestionario', start: 4, end: 5, fase: 'campo', when: 'Ago 28-01, Sep 02-04' },
    { n: 8, name: 'Organización de información', start: 5, end: 6, fase: 'analisis', when: 'Sep 02-04, 05-07' },
    { n: 9, name: 'Tabulación', start: 6, end: 7, fase: 'analisis', when: 'Sep 05-07, 08-09' },
    { n: 10, name: 'Análisis e interpretación', start: 7, end: 8, fase: 'analisis', when: 'Sep 08-09, 10-12' },
    { n: 11, name: 'Triangulación', start: 8, end: 9, fase: 'analisis', when: 'Sep 10-12, 13-16' },
    { n: 12, name: 'Matriz FODA', start: 9, end: 9, fase: 'analisis', when: 'Sep 13-16' },
    { n: 13, name: 'Conclusiones y recomendaciones', start: 9, end: 10, fase: 'informe', when: 'Sep 13-16, 17-19' },
    { n: 14, name: 'Redacción del informe', start: 9, end: 10, fase: 'informe', when: 'Sep 13-16, 17-19' },
    { n: 15, name: 'Revisión y formato final', start: 10, end: 11, fase: 'informe', when: 'Sep 17-19, 20' },
    { n: 16, name: 'Entrega del informe', start: 11, end: 11, fase: 'informe', when: 'Sep 20' },
  ],
}

export const planSemanal = [
  { week: 1, action: 'Observación del aula y presentación con el tutor', product: 'Guía de observación', icon: 'Eye' },
  { week: 2, action: 'Aplicación del cuestionario y entrevistas', product: 'Datos tabulados', icon: 'ClipboardList' },
  { week: 3, action: 'Planificación de la primera clase con recursos digitales', product: 'Plan de clase 1', icon: 'NotebookPen' },
  { week: 4, action: 'Desarrollo de clases y guía de trabajo semanal', product: 'Guía y evidencias', icon: 'Presentation' },
  { week: 5, action: 'Retroalimentación, evaluación del módulo y reflexión', product: 'Diario y autoevaluación', icon: 'MessagesSquare' },
]

/* ---------------------------------------------------------------
 *  APARTADO 6 · DIAGNÓSTICO EDUCATIVO
 * ------------------------------------------------------------- */
export const diagnostico = {
  descripcion:
    'La Modalidad Alterna combina mediación presencial los sábados con guías y tareas autónomas durante la semana. Los estudiantes de Primer Año de Bachillerato muestran una actitud participativa y receptiva; ante dudas recurren primero al docente tutor o al trabajo entre pares.',
  n: 30,
  formsUrl: 'https://forms.gle/dyRw8z6zroAFDVet5',
  instrumentos: [
    {
      id: 'observacion',
      icon: 'Eye',
      title: 'Guía de observación',
      meta: '22/08/2026',
      text: '16 indicadores en 4 dimensiones (entorno y clima, dinámica e interacción, participación y aprendizaje, materiales y tecnología). Todos se registraron como «Siempre»: aula iluminada y ventilada, normas de convivencia, orientaciones claras, apoyos del docente y uso de recursos tecnológicos con fin pedagógico.',
      highlights: ['16 indicadores', '4 dimensiones', 'Todos «Siempre»'],
    },
    {
      id: 'cuestionario',
      icon: 'FileQuestion',
      title: 'Cuestionario al estudiantado (Google Forms)',
      meta: 'Anónimo · 7 secciones · 18 preguntas',
      text: 'Anónimo, en 7 secciones y 18 preguntas, con código QR y enlace (https://forms.gle/dyRw8z6zroAFDVet5). Respondieron 30 estudiantes (A: 12, B: 8, C: 10).',
      highlights: ['A: 12', 'B: 8', 'C: 10'],
      link: 'https://forms.gle/dyRw8z6zroAFDVet5',
    },
    {
      id: 'tutor',
      icon: 'UserRoundCheck',
      title: 'Entrevista al docente tutor',
      meta: 'Licdo. Francisco Alexander Sanabria Ramírez',
      text: 'Describe al grupo como disciplinado y con objetivos claros. Fortaleza: entrega y dedicación. Dificultad mayor: la lectura. Usa lectura diagnóstica, guías de trabajo, atención personalizada, materiales impresos y recursos tecnológicos. Recomienda preparar con anticipación textos informativos.',
      highlights: ['Grupo disciplinado', 'Dificultad: lectura'],
    },
    {
      id: 'coordinador',
      icon: 'Briefcase',
      title: 'Entrevista al coordinador de Modalidades Alternas',
      meta: 'Licdo. Félix De Jesús Calderón Umaña',
      text: 'Señala necesidades en uso de plataformas, inglés y lectoescritura. La institución ofrece paquetes escolares, Classroom, tutorías, escuelas abiertas y acompañamiento en Lenguaje y Matemáticas. Recomienda formación docente, manejo de plataformas y certificación de docentes tutores.',
      highlights: ['Plataformas', 'Inglés', 'Lectoescritura'],
    },
  ],
  note: 'Los porcentajes se calculan sobre n = 30. En las preguntas de respuesta múltiple pueden sumar más de 100 %.',
  /** `dominant: true` pinta la barra en rose-600 */
  charts: [
    {
      id: 1,
      title: 'Dificultad para comprender contenidos',
      items: [
        { label: 'Nunca', value: 6, pct: 20.0 },
        { label: 'Algunas veces', value: 19, pct: 63.3, dominant: true },
        { label: 'Frecuentemente', value: 2, pct: 6.7 },
        { label: 'Siempre', value: 3, pct: 10.0 },
      ],
      interpretation: '63.3 % tiene dificultades a veces: necesitan acompañamiento y práctica de refuerzo.',
    },
    {
      id: 2,
      title: 'Actividades que ayudan a comprender',
      items: [
        { label: 'Lecturas', value: 9, pct: 30.0 },
        { label: 'Explicaciones', value: 11, pct: 36.7, dominant: true },
        { label: 'Trabajo en equipo', value: 4, pct: 13.3 },
        { label: 'Ejercicios', value: 1, pct: 3.3 },
        { label: 'Recursos digitales', value: 6, pct: 20.0 },
      ],
      interpretation: 'Las explicaciones del docente encabezan, seguidas de lecturas y recursos digitales: conviene variar la metodología.',
    },
    {
      id: 3,
      title: 'Forma de aprendizaje preferida',
      items: [
        { label: 'Individual', value: 11, pct: 36.7 },
        { label: 'Equipo', value: 13, pct: 43.3, dominant: true },
        { label: 'Explicaciones', value: 2, pct: 6.7 },
        { label: 'Prácticas', value: 4, pct: 13.3 },
        { label: 'Recursos digitales', value: 0, pct: 0.0 },
      ],
      interpretation: '43.3 % prefiere el equipo; combinar trabajo colaborativo e individual.',
    },
    {
      id: 4,
      title: 'Qué hace primero ante una dificultad',
      items: [
        { label: 'Lo resuelvo yo', value: 5, pct: 16.7 },
        { label: 'Pregunto al docente', value: 15, pct: 50.0, dominant: true },
        { label: 'Pregunto a un compañero', value: 1, pct: 3.3 },
        { label: 'Busco información', value: 10, pct: 33.3 },
      ],
      interpretation: 'La mitad acude al docente: oportunidad para fortalecer la búsqueda autónoma.',
    },
    {
      id: 5,
      title: 'Frecuencia de retroalimentación',
      items: [
        { label: 'Nunca', value: 2, pct: 6.7 },
        { label: 'Algunas veces', value: 12, pct: 40.0, dominant: true },
        { label: 'Frecuentemente', value: 11, pct: 36.7 },
        { label: 'Siempre', value: 5, pct: 16.7 },
      ],
      interpretation: 'Casi la mitad la percibe ocasional o inexistente: necesidad prioritaria.',
    },
    {
      id: 6,
      title: 'Principal dificultad para aprender',
      items: [
        { label: 'Comprensión', value: 4, pct: 13.3 },
        { label: 'Tiempo', value: 17, pct: 56.7, dominant: true },
        { label: 'Recursos', value: 4, pct: 13.3 },
        { label: 'Concentración', value: 7, pct: 23.3 },
      ],
      interpretation: 'El tiempo pesa más (56.7 %): las actividades deben ser realistas.',
    },
    {
      id: 7,
      title: 'Dispositivos disponibles',
      items: [
        { label: 'Teléfono', value: 16, pct: 53.3 },
        { label: 'Computadora', value: 17, pct: 56.7, dominant: true },
        { label: 'Tablet', value: 0, pct: 0.0 },
        { label: 'Todos', value: 4, pct: 13.3 },
        { label: 'Ninguno', value: 1, pct: 3.3 },
      ],
      interpretation: 'Acceso alto a computadora y teléfono; nadie reporta tablet.',
    },
    {
      id: 8,
      title: 'Dificultades con la tecnología',
      items: [
        { label: 'Sin dispositivo', value: 0, pct: 0.0 },
        { label: 'Conexión inestable', value: 6, pct: 20.0 },
        { label: 'Poco internet', value: 8, pct: 26.7 },
        { label: 'Dificultad con apps', value: 5, pct: 16.7 },
        { label: 'Ninguna', value: 12, pct: 40.0, dominant: true },
      ],
      interpretation: '40 % no tiene dificultades, pero hay problemas de conexión: usar actividades de bajo consumo.',
    },
    {
      id: 9,
      title: 'Apoyo que favorecería el aprendizaje',
      items: [
        { label: 'Ejemplos', value: 12, pct: 40.0, dominant: true },
        { label: 'Material', value: 3, pct: 10.0 },
        { label: 'Prácticas', value: 11, pct: 36.7 },
        { label: 'Recursos digitales', value: 6, pct: 20.0 },
        { label: 'Acompañamiento', value: 0, pct: 0.0 },
      ],
      interpretation: 'Ejemplos y prácticas son lo más pedido.',
    },
  ],
  foda: [
    {
      id: 'fortalezas',
      letter: 'F',
      title: 'Fortalezas',
      tone: 'emerald',
      icon: 'ShieldCheck',
      items: [
        'Buena participación en clases presenciales',
        'Alto acceso a celular, computadora e internet',
        'Estructura modular clara',
        'Docente tutor comprometido',
      ],
    },
    {
      id: 'debilidades',
      letter: 'D',
      title: 'Debilidades',
      tone: 'amber',
      icon: 'TriangleAlert',
      items: [
        'Poco tiempo presencial (solo sábados)',
        'Dificultad en comprensión autónoma',
        'Ritmos y hábitos de estudio desiguales',
      ],
    },
    {
      id: 'oportunidades',
      letter: 'O',
      title: 'Oportunidades',
      tone: 'sky',
      icon: 'Rocket',
      items: [
        'Recursos digitales educativos',
        'Metodologías activas con TIC',
        'Guías interactivas y formularios',
      ],
    },
    {
      id: 'amenazas',
      letter: 'A',
      title: 'Amenazas',
      tone: 'rose',
      icon: 'CloudLightning',
      items: [
        'Dificultades de transporte',
        'Conexión inestable en hogares',
        'Tiempo limitado por trabajo o familia',
      ],
    },
  ],
}

/* ---------------------------------------------------------------
 *  APARTADO 7 · PLANIFICACIONES DE CLASES
 *  Cada pestaña muestra un PDF (`embedUrl`) en un visor incrustado.
 *  Los archivos están en la raíz de  public/
 * ------------------------------------------------------------- */
export const planificaciones = {
  asignatura: 'Informática · Planificaciones de clase en PDF',
  tabs: [
    {
      id: 'plan1',
      label: 'Plan de Clase 1',
      icon: 'NotebookPen',
      title: 'Paquetería de Office con énfasis en Microsoft Word',
      asignatura: 'Informática',
      jornada: 'Jornada de 90 min',
      fecha: '10/10/2026',
      tutor: 'Lic. Francisco Alexander Sanabria Ramírez',
      embedUrl: '/Planificacion-Office-Word.pdf',
    },
    {
      id: 'plan2',
      label: 'Plan de Clase 2',
      icon: 'NotebookPen',
      title: 'Paquetería de Office con énfasis en Microsoft Excel',
      asignatura: 'Informática',
      jornada: 'Jornada de 90 min',
      fecha: '24/10/2026',
      tutor: 'Lic. Francisco Alexander Sanabria Ramírez',
      embedUrl: '/Planificacion_Office_Excel.pdf',
    },
  ],
}

/* ---------------------------------------------------------------
 *  APARTADO 8 · EVIDENCIAS
 *  PDFs e imágenes en la raíz de  public/
 *  Si una imagen no existe se muestra un marcador visual.
 * ------------------------------------------------------------- */
export const evidenciasFotos = [
  '/ACTIVIDADES-JORNADA_1.png',
  '/ACTIVIDAD-JORNADA_2.png',
  '/ACTIVIDADES-JORNADA_3.png',
  '/ACTIVIDADES-JORNADA_4.png',
  '/ACTIVIDADES-JORNADA_5.png',
  '/ACTIVIDADES-JORNADA_6.png',
  '/ANEXO.png',
  '/ANEXO_1.png',
  '/ANEXO_2.png',
  '/ANEXO_3.png',
  '/ANEXO_4.png',
]

export const evidencias = {
  materiales: [
    {
      id: 'modulo5',
      icon: 'Presentation',
      title: 'Descodificando la Literatura: El Doble Cifrado (Módulo 5, Lección 1)',
      text: 'Presentación didáctica sobre el código lingüístico y el código literario en Lenguaje y Literatura.',
      embedUrl: '/MODULO 5, LECCIÓN 1.pdf',
    },
    {
      id: 'word',
      icon: 'FileText',
      title: 'Paquetería de Office: Microsoft Word',
      text: 'Presentación interactiva para la jornada didáctica sobre entorno, formato y creación de documentos en Word.',
      embedUrl: '/Paquetería-WORD.pdf',
    },
    {
      id: 'excel',
      icon: 'FileSpreadsheet',
      title: 'Paquetería de Office: Microsoft Excel',
      text: 'Presentación didáctica sobre hojas de cálculo, tipos de datos, tablas de gastos, fórmulas y gráficos en Excel.',
      embedUrl: '/Paquetería-EXCEL.pdf',
    },
  ],
  recursos: [
    { icon: 'Presentation', title: 'Presentaciones', text: 'Apoyo visual para explicar contenidos.' },
    { icon: 'PenLine', title: 'Plumones', text: 'Trabajo en pizarra y organización de ideas.' },
    { icon: 'Projector', title: 'Cañón proyector', text: 'Proyección de material y ejemplos.' },
    { icon: 'Laptop', title: 'Computadoras', text: 'Consulta y práctica con recursos digitales.' },
    { icon: 'Printer', title: 'Actividades impresas / digitales', text: 'Respaldo para quienes tienen baja conectividad.' },
  ],
}

/* ---------------------------------------------------------------
 *  APARTADO 9 · DIARIO REFLEXIVO SEMANAL
 *  Fotografías de las jornadas en la raíz de  public/
 * ------------------------------------------------------------- */
export const diarioBloques = [
  { key: 'actividades', label: 'Actividades realizadas', icon: 'ListChecks' },
  { key: 'retos', label: 'Retos enfrentados y soluciones', icon: 'Mountain' },
  { key: 'aprendizajes', label: 'Aprendizajes obtenidos', icon: 'GraduationCap' },
  { key: 'reflexion', label: 'Reflexión personal de la semana', icon: 'MessageCircleHeart' },
]

export const diarioResumen = {
  actividades:
    'Durante esta semana desarrollé actividades educativas con los estudiantes, explicando los contenidos planificados y orientando la realización de ejercicios prácticos. Utilicé diferentes recursos didácticos y tecnológicos para facilitar el aprendizaje, promoviendo la participación, el trabajo en equipo y la práctica de los conocimientos adquiridos.',
  retos:
    'Uno de los retos enfrentados fue atender los diferentes ritmos de aprendizaje de los estudiantes, ya que algunos comprendían las indicaciones con facilidad, mientras que otros necesitaban más apoyo. Para solucionarlo, expliqué nuevamente las instrucciones, brindé atención individual y utilicé ejemplos prácticos que facilitaran la comprensión de los contenidos.',
  aprendizajes:
    'Aprendí que cada estudiante tiene su propia forma y ritmo de aprender. Comprendí que, como futura docente, debo ser paciente, creativa y flexible al desarrollar las clases. También reconocí la importancia de preparar actividades prácticas y brindar acompañamiento a los estudiantes para que puedan alcanzar los objetivos de aprendizaje.',
  reflexion:
    'Esta semana fue una experiencia importante para mi formación docente, porque me permitió conocer mejor las necesidades de los estudiantes y comprender la responsabilidad que implica enseñar. Me sentí motivada al participar en las actividades educativas y observar el esfuerzo de los alumnos. Reconozco que todavía tengo aspectos que mejorar, especialmente en la organización del tiempo y en la aplicación de estrategias didácticas. Me comprometo a seguir aprendiendo y preparándome para brindar una enseñanza más dinámica, inclusiva y significativa.',
}

export const diarioFotos = [
  '/JORNADA_1.png',
  '/JORNADA_2.png',
  '/JORNADA_3.png',
  '/JORNADA_4.png',
  '/JORNADA_5.png',
]

// Se conserva por compatibilidad si otro componente calcula progreso con `diario`
export const diario = [
  { week: 1, title: 'Registro general de jornadas', ...diarioResumen },
]

/* ---------------------------------------------------------------
 *  APARTADO 10 · EVALUACIÓN Y RETROALIMENTACIÓN
 * ------------------------------------------------------------- */
export const evaluacion = {
  autoevaluacion:
    'Considero que mi desempeño docente durante las jornadas de práctica ha sido una experiencia de mucho aprendizaje. He procurado desarrollar las actividades de manera responsable, explicar los contenidos con claridad y brindar apoyo a los estudiantes cuando presentan dificultades. Reconozco que tengo fortalezas como la paciencia, la disposición para enseñar y el compromiso con mi formación profesional. Sin embargo, también debo mejorar en la administración del tiempo, la organización de algunas actividades y el uso de estrategias que motiven una mayor participación de todos los estudiantes. Me comprometo a continuar aprendiendo y mejorando mi práctica docente para ofrecer una enseñanza más dinámica y significativa.',
  estado: 'En recolección al cierre del módulo',
  comentarios: [
    {
      id: 'tutor',
      rol: 'Docente Tutor',
      nombre: 'Licdo. Francisco Alexander Sanabria Ramírez',
      icon: 'UserRoundCheck',
      tone: 'violet',
      texto: 'que si tenia la capacidad para estar frente a un grupo de estudiantes el cual pues nunca había estado, y que había logrado el que los estudiantes me respetaran',
    },
    { id: 'ues', rol: 'Docente Tutora UES', nombre: 'Licda. Silza Sarai Canizales de Marroquín', icon: 'GraduationCap', tone: 'rose', texto: '' },
    {
      id: 'estudiantes',
      rol: 'Estudiantado',
      nombre: '1.° de Bachillerato',
      icon: 'Users',
      tone: 'indigo',
      texto: 'que seguirá enseñando de esa manera',
    },
  ],
  reflexionComentarios: 'el recibir ese tipo de comentarios se siente una gran felicidad.',
}

/* ---------------------------------------------------------------
 *  APARTADO 11 · PROPUESTA DE MEJORA
 * ------------------------------------------------------------- */
export const propuesta = {
  justificacion:
    'La propuesta de mejora surge a partir de las necesidades identificadas en el diagnóstico realizado en el Centro Escolar Rodrigo J. Leiva, específicamente con los estudiantes de Primer Año de Bachillerato de la Modalidad Flexible, en la asignatura de Lenguaje y Literatura. Se identificó la necesidad de fortalecer la retroalimentación y el acompañamiento que reciben los estudiantes durante las actividades que realizan de manera autónoma en la semana. Debido a que las clases presenciales se desarrollan los sábados, es importante que los estudiantes cuenten con orientaciones claras que les permitan comprender sus errores y mejorar sus trabajos. Por esta razón, se propone utilizar una guía digital llamada “Retroalimentar para aprender”, que facilite al docente brindar recomendaciones concretas y ayude a los estudiantes a mejorar su comprensión lectora y producción escrita. También se consideran alternativas impresas para quienes tengan dificultades de conectividad.',
  datosClave: [
    { value: '56.7 %', label: 'El tiempo es la principal dificultad' },
    { value: '46.7 %', label: 'Retroalimentación solo a veces o nunca' },
    { value: 'Lectura', label: 'Mayor dificultad según el docente' },
    { value: '50 %', label: 'Acude primero al docente' },
  ],
  objetivo:
    'Fortalecer la retroalimentación y el acompañamiento del aprendizaje autónomo semanal mediante una guía práctica que facilite la comprensión lectora y la producción escrita de los estudiantes.',
  acciones: [
    { icon: 'FileText', text: 'Elaborar y utilizar guías de trabajo semanales con instrucciones claras, objetivos y ejemplos.' },
    { icon: 'MessagesSquare', text: 'Proporcionar retroalimentación a los estudiantes, destacando sus logros y señalando aspectos específicos que pueden mejorar.' },
    { icon: 'ClipboardCheck', text: 'Incorporar listas de autoevaluación para que los estudiantes revisen sus trabajos antes de entregarlos.' },
    { icon: 'UsersRound', text: 'Promover la coevaluación mediante actividades en parejas, donde puedan compartir opiniones y sugerencias respetuosas.' },
    { icon: 'CalendarDays', text: 'Establecer un horario de consulta durante la semana para resolver dudas por un medio autorizado por la institución.' },
    { icon: 'BookOpenCheck', text: 'Realizar actividades prácticas al inicio de cada jornada sabatina para reforzar las dificultades más frecuentes.' },
  ],
  accionesNota:
    'Estas acciones se plantean como orientaciones para una posible aplicación y deberán adaptarse a las necesidades del grupo y a las indicaciones del docente tutor.',
  /** Recursos agrupados por tipo: [{ tipo, icon, items: [] }] */
  recursos: [
    { tipo: 'Recursos humanos', icon: 'Users', items: ['Docente tutor', 'Docente practicante', 'Estudiantes'] },
    {
      tipo: 'Recursos didácticos',
      icon: 'NotebookPen',
      items: ['Guías de trabajo', 'Rúbricas de evaluación', 'Listas de cotejo', 'Fichas de autoevaluación', 'Materiales de lectura'],
    },
    {
      tipo: 'Recursos tecnológicos',
      icon: 'Laptop',
      items: ['Computadora o teléfono celular', 'Guía digital en formato PDF'],
    },
    {
      tipo: 'Recursos de apoyo',
      icon: 'Printer',
      items: ['Cuadernos', 'Lápices', 'Hojas impresas', 'Medio de comunicación autorizado para realizar consultas'],
    },
  ],
  recursosNota:
    'Se dará prioridad a los recursos disponibles en la institución, procurando que las actividades sean sencillas, accesibles y de bajo costo. Además, se contará con materiales impresos como alternativa para los estudiantes que no tengan acceso estable a internet.',
  impacto:
    'Con la posible implementación de esta propuesta se espera que los estudiantes comprendan mejor las indicaciones de las actividades, identifiquen sus errores y desarrollen mayor seguridad para realizar sus trabajos de manera autónoma. También se busca fortalecer sus habilidades de comprensión lectora y producción escrita mediante ejemplos, ejercicios prácticos y orientaciones oportunas. Para el docente tutor, se espera que la guía facilite la organización de la retroalimentación y permita identificar las dificultades más frecuentes del grupo. Asimismo, se pretende fomentar la responsabilidad, la participación y la colaboración entre los estudiantes. Aunque estos beneficios son esperados, será necesario aplicar la propuesta y evaluar sus resultados para determinar si realmente contribuye a mejorar el proceso de aprendizaje.',
  reflexion:
    'Diseñar esta propuesta me permitió comprender la importancia de observar las necesidades reales de los estudiantes antes de plantear soluciones educativas. Aprendí que no basta con impartir una clase y asignar actividades, sino que también es necesario acompañar a los estudiantes, orientarlos y brindarles oportunidades para reconocer sus errores y mejorar.',
}

/* ---------------------------------------------------------------
 *  APARTADO 12 · RECURSOS TECNOLÓGICOS APLICADOS
 * ------------------------------------------------------------- */
export const recursosTecnologicos = [
  {
    id: 'forms',
    name: 'Google Forms',
    icon: 'ClipboardList',
    tone: 'violet',
    text: 'Cuestionario diagnóstico con QR y enlace; tabulación automática de gráficos y mini-cuestionarios de refuerzo.',
    tags: ['Diagnóstico', 'QR y enlace', 'Tabulación automática', 'Refuerzo'],
  },
  {
    id: 'moodle',
    name: 'Moodle',
    icon: 'GraduationCap',
    tone: 'amber',
    text: 'Entrega del portafolio y gestión de materiales de la asignatura.',
    tags: ['Entrega del portafolio', 'Materiales'],
  },
  {
    id: 'word',
    name: 'Microsoft Word',
    icon: 'FileText',
    tone: 'indigo',
    text: 'Se utilizó para elaborar documentos, materiales educativos para apoyar el proceso de enseñanza y aprendizaje.',
    tags: ['Documentos', 'Materiales educativos'],
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    icon: 'FileSpreadsheet',
    tone: 'emerald',
    text: 'Se utilizó para el cálculo de notas y presupuestos, la organización de datos en tablas y la elaboración de gráficos.',
    tags: ['Notas', 'Presupuestos', 'Tablas', 'Gráficos'],
  },
  {
    id: 'canva',
    name: 'Canva',
    icon: 'Palette',
    tone: 'sky',
    text: 'Se utilizó para diseñar materiales visuales y presentaciones creativas que facilitaran la comprensión de los contenidos.',
    tags: ['Materiales visuales', 'Presentaciones', 'Infografías'],
  },
  {
    id: 'classroom',
    name: 'Google Classroom',
    icon: 'School',
    tone: 'rose',
    text: 'Se utilizó como herramienta de apoyo para organizar actividades educativas, compartir materiales y facilitar la comunicación con los estudiantes.',
    tags: ['Actividades', 'Materiales', 'Comunicación'],
  },
]

/* ---------------------------------------------------------------
 *  APARTADO 13 · EXPERIENCIAS SIGNIFICATIVAS
 * ------------------------------------------------------------- */
export const experiencias = {
  relato:
    'Esta experiencia ayudó a comprender que como docente no solamente se deben transmitir conocimientos, sino también buscar diferentes maneras de motivar a los estudiantes y hacer que sean parte activa de su propio aprendizaje. Además, un desafío importante fue el manejo del tiempo durante las jornadas de trabajo en la modalidad modular, siendo necesario ajustar las actividades o la forma de explicarlas para cumplir con lo planificado.',
  logros: [
    'Logré desarrollar actividades de aprendizaje relacionadas con el área de Informática Educativa.',
    'Fortalecí mi capacidad para planificar y organizar actividades para los estudiantes.',
    'Puse en práctica el uso de recursos tecnológicos como apoyo al proceso educativo.',
    'Logré establecer una comunicación positiva con los estudiantes y fomentar su participación.',
  ],
  mejoras: [
    'Mejorar la distribución del tiempo durante las clases.',
    'Fortalecer las estrategias para atender diferentes ritmos de aprendizaje.',
    'Continuar aprendiendo sobre nuevas herramientas y recursos digitales educativos.',
  ],
  valoracion:
    'Valoro mi práctica docente como una experiencia positiva y significativa para mi formación profesional. Me permitió conocer de manera más cercana la realidad del trabajo docente y comprender que enseñar Informática Educativa implica mucho más que conocer y utilizar la tecnología.',
  proyeccion:
    'En cinco años me visualizo como una profesional de la Informática Educativa con mayor experiencia y preparación, capaz de integrar la tecnología de manera significativa en los procesos de enseñanza y aprendizaje.',
}

/* ---------------------------------------------------------------
 *  APARTADO 14 · ANEXOS
 *  Coloca los PDF en  public/anexos/ (los PDF de planificaciones y presentaciones están en la raíz de public/).
 * ------------------------------------------------------------- */
export const anexos = [
  {
    id: 'informe',
    icon: 'FileText',
    title: 'Informe diagnóstico completo',
    subtitle: 'PDF',
    text: 'Documento íntegro del diagnóstico educativo de 1.° de Bachillerato.',
    file: '/anexos/informe-diagnostico.pdf',
    type: 'pdf',
  },
  {
    id: 'observacion',
    icon: 'Eye',
    title: 'Guía de observación sistemática',
    subtitle: 'Anexo 2',
    text: 'Instrumento de 16 indicadores aplicado el 22/08/2026.',
    file: '/anexos/anexo-2-guia-observacion.pdf',
    type: 'pdf',
  },
  {
    id: 'cuestionario',
    icon: 'FileQuestion',
    title: 'Cuestionario al estudiantado',
    subtitle: 'Google Forms',
    text: 'Enlace directo al formulario y código QR generado dinámicamente.',
    url: 'https://forms.gle/dyRw8z6zroAFDVet5',
    type: 'forms',
  },
  {
    id: 'entrevistas',
    icon: 'MessagesSquare',
    title: 'Entrevistas al docente tutor y al coordinador',
    subtitle: 'Anexos 4 y 5',
    text: 'Transcripción y síntesis de ambas entrevistas.',
    file: '/anexos/anexo-4-5-entrevistas.pdf',
    type: 'pdf',
  },
  {
    id: 'plan-word',
    icon: 'NotebookPen',
    title: 'Planificación: Office con énfasis en Word',
    subtitle: 'Plan de Clase 1',
    text: 'Jornada de 90 min (10/10/2026) · Informática.',
    embedUrl: '/Planificacion-Office-Word.pdf',
    type: 'pdf',
  },
  {
    id: 'plan-excel',
    icon: 'NotebookPen',
    title: 'Planificación: Office con énfasis en Excel',
    subtitle: 'Plan de Clase 2',
    text: 'Jornada de 90 min (24/10/2026) · Informática.',
    embedUrl: '/Planificacion_Office_Excel.pdf',
    type: 'pdf',
  },
  {
    id: 'modulo5',
    icon: 'Presentation',
    title: 'Descodificando la Literatura: El Doble Cifrado',
    subtitle: 'Módulo 5, Lección 1',
    text: 'Presentación didáctica sobre el código lingüístico y el código literario.',
    embedUrl: '/MODULO 5, LECCIÓN 1.pdf',
    type: 'pdf',
  },
  {
    id: 'pres-word',
    icon: 'FileText',
    title: 'Presentación: Paquetería de Office, Microsoft Word',
    subtitle: 'Material didáctico',
    text: 'Entorno, formato y creación de documentos en Word.',
    embedUrl: '/Paquetería-WORD.pdf',
    type: 'pdf',
  },
  {
    id: 'pres-excel',
    icon: 'FileSpreadsheet',
    title: 'Presentación: Paquetería de Office, Microsoft Excel',
    subtitle: 'Material didáctico',
    text: 'Hojas de cálculo, tipos de datos, tablas de gastos, fórmulas y gráficos.',
    embedUrl: '/Paquetería-EXCEL.pdf',
    type: 'pdf',
  },
]
