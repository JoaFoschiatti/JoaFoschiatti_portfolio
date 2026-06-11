export type NavigationItem = {
  label: string;
  href: string;
};

export type OfferCard = {
  title: string;
  description: string;
};

export type ProjectScreenshot = {
  src: string;
  title: string;
  description: string;
  alt: string;
};

export type ProjectModuleScreenshot = ProjectScreenshot & {
  module: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  featured: boolean;
  security: boolean;
  name: string;
  category: string;
  projectType?: string;
  idealFor?: string;
  status: string;
  description: string;
  problem: string;
  businessGain?: string;
  solution: string;
  homeProblem?: string;
  homeSolution?: string;
  homeResult?: string;
  modules: string[];
  stackLabel: string;
  stack: string[];
  notes: string[];
  repoUrl?: string;
  repoLabel?: string;
  visibility: "public" | "private";
  caseLabel: string;
  problemEyebrow?: string;
  homeVisual?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  caseHeroVisual?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  evidenceBadges?: string[];
  screenshots?: ProjectScreenshot[];
  moduleScreenshots?: ProjectModuleScreenshot[];
};

export type ProcessStep = {
  label: string;
  title: string;
  description: string;
  color: string;
  labelColor?: string;
};

export type StartOption = {
  label: string;
  title: string;
  description: string;
  items: string[];
};

export type BriefOption = {
  label: string;
  value: string;
};

export type BriefBuilderOptions = {
  industries: readonly BriefOption[];
  needs: readonly BriefOption[];
  states: readonly BriefOption[];
  urgencies: readonly BriefOption[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SystemUseCase = {
  title: string;
  description: string;
};

export type HomeProblem = {
  title: string;
  description: string;
};

export type PersonalTrust = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export const seo = {
  title: "Joaquín Sánchez Foschiatti — Webs, sistemas y automatizaciones",
  description:
    "Desarrollo webs comerciales, sistemas de gestión a medida y automatizaciones para comercios, profesionales y pymes que quieren ordenar turnos, stock, caja, pedidos, reportes o tareas manuales.",
} as const;

export const profile = {
  brandName: "JoaFoschiatti",
  fullName: "Joaquín Sánchez Foschiatti",
  location: "Rosario / Santa Fe / Argentina",
  siteUrl: "https://joafoschiatti.com",
  email: "joasanchezfoschiatti@gmail.com",
  whatsappNumber: "5493482555038",
  whatsappDisplayNumber: "+54 9 3482 555038",
  heroTitle:
    "Convertí planillas y mensajes sueltos en una herramienta que ordene tu negocio.",
  heroSubtitle:
    "Webs, sistemas y automatizaciones para comercios, profesionales y pymes que quieren trabajar con menos desorden.",
  heroBadges: [
    "Turnos",
    "Stock",
    "Caja",
    "Pedidos",
    "WhatsApp",
  ],
  navigation: [
    { label: "Qué hago", href: "/#que-hago" },
    { label: "Casos", href: "/#proyectos" },
    { label: "Proceso", href: "/#proceso" },
    { label: "Contacto", href: "/#contacto" },
  ] satisfies NavigationItem[],
  briefQuestions: [
    "¿Qué querés ordenar?",
    "¿Cómo lo manejás hoy?",
    "¿Quién usaría la herramienta?",
  ],
  footerSummary:
    "Webs, sistemas y automatizaciones para negocios.",
} as const;

export const contactLinks = {
  email: profile.email,
  github: "https://github.com/JoaFoschiatti",
  instagram: "https://www.instagram.com/joasanchez02/",
  whatsappMessage:
    "Hola Joaquín, vi tu portfolio y quiero ordenar un proceso de mi negocio. Hoy lo manejo con WhatsApp, planillas o tareas manuales y quiero ver si se puede simplificar.",
} as const;

export const valueStrip = [
  "Sistemas en producción",
  "Deploy en Vercel / AWS",
  "Integraciones con pagos y herramientas externas",
  "Código mantenible",
  "Pensado para operación diaria",
] as const;

export const offerCards = [
  {
    title: "Sistemas de gestión",
    description: "Stock, caja, pedidos, turnos, clientes y reportes.",
  },
  {
    title: "Webs comerciales",
    description:
      "Una web clara para explicar tu servicio y captar consultas.",
  },
  {
    title: "Automatizaciones",
    description:
      "Menos tareas repetidas entre planillas, formularios y herramientas.",
  },
  {
    title: "Mantenimiento y mejoras",
    description:
      "Ajustes, nuevas funciones y acompañamiento después de publicar.",
  },
] satisfies OfferCard[];

export const homeProblems = [
  {
    title: "Turnos",
    description: "Agenda y reservas.",
  },
  {
    title: "Stock",
    description: "Entradas, salidas y alertas.",
  },
  {
    title: "Caja",
    description: "Ventas, cobros y cierres.",
  },
  {
    title: "Pedidos",
    description: "Estados y seguimiento.",
  },
  {
    title: "Reportes",
    description: "Números claros.",
  },
  {
    title: "WhatsApp",
    description: "Mensajes menos dispersos.",
  },
  {
    title: "Automatizaciones",
    description: "Menos tareas repetidas.",
  },
  {
    title: "Web comercial",
    description: "Servicio y consultas.",
  },
] satisfies HomeProblem[];

export const personalTrust = {
  eyebrow: "Quién está detrás",
  title:
    "Soy Joaquín. Diseño herramientas simples para problemas reales de operación.",
  description:
    "Soy Ingeniero en Sistemas y trabajo el software desde el uso real del negocio.",
  points: [
    "Ingeniería aplicada a negocios reales.",
    "Herramientas pensadas para uso diario, no para mostrar tecnología.",
    "Acompañamiento después de publicar para ajustar y mejorar.",
  ],
} satisfies PersonalTrust;

export const systemsStartOptions = [
  {
    label: "Opción 01",
    title: "Primera versión usable",
    description:
      "Para pasar de una idea o proceso manual a una herramienta concreta que ya se pueda probar con usuarios reales.",
    items: [
      "Relevamiento del flujo principal",
      "Diseño de una primera versión simple",
      "Deploy, ajustes iniciales y próximos pasos",
    ],
  },
  {
    label: "Opción 02",
    title: "Sistema de gestión a medida",
    description:
      "Para centralizar operación diaria, usuarios, datos, permisos, reportes e integraciones en un sistema propio.",
    items: [
      "Módulos pensados para tu operación",
      "Panel interno y flujos de trabajo",
      "Base técnica para mantener y escalar",
    ],
  },
  {
    label: "Opción 03",
    title: "Mejoras o automatización",
    description:
      "Para ordenar un sistema existente, conectar herramientas o reducir tareas repetitivas sin rehacer todo desde cero.",
    items: [
      "Automatizaciones con WhatsApp o herramientas externas",
      "Reportes, formularios y paneles internos",
      "Mejoras incrementales sobre lo que ya usás",
    ],
  },
] satisfies StartOption[];

export const briefBuilderOptions = {
  industries: [
    { label: "Restaurante / bar", value: "restaurante" },
    { label: "Comercio", value: "comercio" },
    { label: "Profesional", value: "profesional" },
    { label: "Pyme", value: "pyme" },
    { label: "Otro", value: "otro" },
  ],
  needs: [
    { label: "Web comercial", value: "web-comercial" },
    { label: "Turnos", value: "turnos" },
    { label: "Stock", value: "stock" },
    { label: "Caja / punto de venta", value: "caja" },
    { label: "Pedidos", value: "pedidos" },
    { label: "Reportes", value: "reportes" },
    { label: "Documentos", value: "documentos" },
    { label: "Automatización", value: "automatizacion" },
  ],
  states: [
    { label: "Idea inicial", value: "idea-inicial" },
    { label: "Planillas", value: "planillas" },
    { label: "Mensajes sueltos", value: "mensajes-sueltos" },
    { label: "Sistema que falla", value: "sistema-que-falla" },
    { label: "Proceso manual", value: "proceso-manual" },
  ],
  urgencies: [
    { label: "Este mes", value: "este-mes" },
    { label: "Próximos meses", value: "proximos-meses" },
    { label: "Explorando", value: "explorando" },
  ],
} satisfies BriefBuilderOptions;

export const systemsFaqs = [
  {
    question: "¿Necesito tener todo definido antes de escribir?",
    answer:
      "No. Alcanza con contar qué proceso querés ordenar, quiénes lo usan y qué problema te está frenando.",
  },
  {
    question: "¿Conviene empezar por una versión chica?",
    answer:
      "Sí. Una primera versión usable permite validar el flujo real antes de invertir tiempo en módulos secundarios.",
  },
  {
    question: "¿Se puede combinar web pública y sistema interno?",
    answer:
      "Sí. Puede haber una web para captar consultas y un panel interno para turnos, stock, pedidos, clientes o reportes.",
  },
  {
    question: "¿Podés integrar WhatsApp, pagos, formularios o planillas?",
    answer:
      "Sí. Se puede conectar WhatsApp, Mercado Pago, formularios, reportes o importar datos desde planillas cuando tenga sentido.",
  },
  {
    question: "¿Qué pasa después del deploy?",
    answer:
      "Después de publicar el sistema, puedo acompañarte con mantenimiento, ajustes y nuevas mejoras si lo necesitás.",
  },
  {
    question: "¿Cómo se define el alcance?",
    answer:
      "Primero se entiende el proceso y después se decide qué entra en la primera versión para que sea útil sin volverse pesada.",
  },
] satisfies FaqItem[];

export const homeFaqs = [
  {
    question: "¿Necesito saber exactamente qué sistema quiero?",
    answer:
      "No. Podés venir con el problema, una planilla o una idea general. Primero entendemos el proceso y después definimos una primera versión.",
  },
  {
    question: "¿También hacés webs comerciales?",
    answer:
      "Sí. Desarrollo webs para explicar servicios, mostrar negocios y captar consultas por WhatsApp, email o formulario.",
  },
  {
    question: "¿Hacés sistemas desde cero o mejorás algo existente?",
    answer:
      "Puedo construir una herramienta desde cero o mejorar procesos existentes, siempre empezando por un alcance claro.",
  },
  {
    question: "¿Qué pasa después de publicar?",
    answer:
      "Puedo acompañar con mantenimiento, ajustes y nuevas funciones según lo que aparezca en el uso real.",
  },
] satisfies FaqItem[];

export const systemsUseCases = [
  {
    title: "Operación diaria",
    description: "Caja, pedidos, turnos, stock, clientes y tareas en un solo flujo.",
  },
  {
    title: "Gestión interna",
    description: "Paneles para que el equipo cargue datos, revise estados y trabaje sin planillas dispersas.",
  },
  {
    title: "Integraciones útiles",
    description: "WhatsApp, pagos, formularios, reportes y automatizaciones donde aporten valor real.",
  },
  {
    title: "Crecimiento gradual",
    description: "Primero una versión usable; después mejoras sobre datos y uso real del negocio.",
  },
] satisfies SystemUseCase[];

export const projects = [
  {
    slug: "comanda",
    featured: true,
    security: false,
    name: "Comanda",
    category: "Sistema para restaurantes",
    projectType: "Sistema de gestión a medida",
    idealFor: "Restaurantes, bares y rotiserías",
    status: "Próximo a producción",
    description:
      "Herramienta para operar salón, cocina, caja, delivery/retiro, menú QR y pagos del restaurante desde un mismo lugar.",
    problem:
      "Unificar salón, cocina y caja en una sola pantalla, sin planillas paralelas ni mensajes sueltos a la cocina.",
    businessGain:
      "Pedidos claros, cocina visible y cierre de caja al instante para reducir errores y acelerar la mesa.",
    solution:
      "Reúne front de salón, cocina, caja, pedidos remotos y menú QR en una base operativa única, con foco en tiempos, cobro y visibilidad de cada pedido.",
    homeProblem: "Pedidos, cocina y caja estaban separados.",
    homeSolution: "Un panel une salón, cocina, caja y pedidos.",
    homeResult: "Menos errores y cierre de caja más claro.",
    problemEyebrow: "Qué unifica",
    modules: ["Dashboard", "Mesas", "Pedidos", "Cocina", "Caja", "Menú", "Pagos"],
    stackLabel: "Stack visible",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Mercado Pago",
      "AWS EC2",
    ],
    notes: [
      "El portfolio no expone abonos, variables de entorno, credenciales ni guías operativas internas del repositorio.",
      "Se presenta como instalación dedicada y sistema pensado para uso diario en restaurante real.",
    ],
    visibility: "public",
    caseLabel: "Ver caso",
    homeVisual: {
      src: "/projects/comanda-home.png",
      alt: "Diagrama del sistema Comanda: mesas, cocina y caja se centralizan en una vista única con dashboard de salón, pedidos, caja del día y QR/retiro, más tres tarjetas de resultado (pedidos al instante, cocina coordinada, cobro sin fricción).",
      width: 1448,
      height: 1086,
    },
    caseHeroVisual: {
      src: "/projects/comanda.jpg",
      alt: "Vista de Comanda con mesas activas, pedido en cocina con platos identificados (milanesa, papas, bebida), totales de caja del día y pedidos QR/Web en curso.",
      width: 1122,
      height: 1402,
    },
    evidenceBadges: ["Pantallas del sistema"],
    moduleScreenshots: [
      {
        module: "Dashboard",
        src: "/cases/comanda/dashboard.png",
        title: "Dashboard operativo",
        description:
          "Prioridades, accesos rápidos e indicadores para entender qué necesita atención primero.",
        alt: "Dashboard de Comanda con prioridades, accesos operativos e indicadores del turno.",
        width: 1440,
        height: 900,
      },
      {
        module: "Mesas",
        src: "/cases/comanda/mesas.png",
        title: "Mesas y salón",
        description:
          "Estado del salón, mesas ocupadas, cuentas pendientes y acciones rápidas para la operación diaria.",
        alt: "Pantalla de mesas de Comanda con resumen del salón, estados y tarjetas de mesas.",
        width: 1440,
        height: 900,
      },
      {
        module: "Pedidos",
        src: "/cases/comanda/pedidos.png",
        title: "Gestión de pedidos",
        description:
          "Pedidos de mesa, mostrador y delivery con estado, pago, impresión y acciones operativas en una sola vista.",
        alt: "Pantalla de pedidos de Comanda con tabla de pedidos, estados, pagos, impresión y acciones operativas.",
        width: 1440,
        height: 900,
      },
      {
        module: "Cocina",
        src: "/cases/comanda/cocina.png",
        title: "Cola de cocina",
        description:
          "Pedidos pendientes y en preparación visibles por prioridad, demora y detalle de productos.",
        alt: "Pantalla de cocina de Comanda con pedidos pendientes, pedidos en preparación y alertas.",
        width: 1440,
        height: 900,
      },
      {
        module: "Caja",
        src: "/cases/comanda/caja.png",
        title: "Cierre de caja",
        description:
          "Estado actual de caja, ventas por medio de pago e historial de cierres para controlar el turno.",
        alt: "Pantalla de cierre de caja de Comanda con fondo inicial, ventas en efectivo, Mercado Pago e historial.",
        width: 1440,
        height: 900,
      },
      {
        module: "Menú",
        src: "/cases/comanda/menu.png",
        title: "Menú público",
        description:
          "Catálogo online con categorías, productos personalizables y carrito para pedidos web.",
        alt: "Menú público de Comanda con categorías, productos y carrito lateral.",
        width: 1440,
        height: 900,
      },
      {
        module: "Pagos",
        src: "/cases/comanda/pagos.png",
        title: "Pagos Mercado Pago",
        description:
          "Resumen de cobros, comisiones, neto recibido y trazabilidad de transacciones aprobadas o rechazadas.",
        alt: "Pantalla de transacciones Mercado Pago de Comanda con resumen de montos y tabla de pagos.",
        width: 1440,
        height: 900,
      },
    ],
  },
  {
    slug: "optica-focus",
    featured: true,
    security: false,
    name: "Óptica Focus",
    category: "Sistema de gestión y stock",
    projectType: "Sistema de gestión comercial",
    idealFor: "Comercios con stock, clientes y caja",
    status: "En uso real",
    description:
      "Aplicación de escritorio para óptica con control de stock, precios, cuenta corriente y respaldos, en uso real con un cliente.",
    problem:
      "Controlar stock, precios y deudas de clientes desde una sola herramienta, sin papeles sueltos ni planillas paralelas.",
    businessGain:
      "Stock al día, precios actualizados y saldos visibles para atender más rápido y dejar de buscar datos dispersos.",
    solution:
      "Aplicación de escritorio orientada a caja y administración interna: stock por marca y graduación, listas de precios por laboratorio, cuenta corriente por cliente y backups automáticos.",
    homeProblem: "Stock, precios y cuentas estaban dispersos.",
    homeSolution: "Una app centraliza productos, clientes y respaldos.",
    homeResult: "Atención más rápida y datos al día.",
    problemEyebrow: "Qué controla",
    modules: ["Inicio", "Stock", "Precios", "Cuenta corriente", "Reportes", "Backups"],
    stackLabel: "Stack visible",
    stack: ["Electron", "SQLite", "Tailwind"],
    notes: [
      "Caso privado. No se publican datos reales del cliente ni información operativa sensible.",
      "Las capturas usan datos demo neutros para mostrar el tipo de operación sin exponer la base productiva.",
    ],
    visibility: "private",
    caseLabel: "Ver caso",
    homeVisual: {
      src: "/projects/optica-focus-home.png",
      alt: "Diagrama del sistema Óptica Focus: inventario, precios y cuenta corriente se integran en un panel de productos, clientes y backups, más tres tarjetas de resultado (inventario visible, precios actualizados, cuenta corriente al día).",
      width: 1448,
      height: 1086,
    },
    caseHeroVisual: {
      src: "/projects/optica-focus.jpg",
      alt: "Vista de Óptica Focus con resumen de stock por producto, sparkline de cuenta corriente con clientes activos y estado del último backup con próximo respaldo programado.",
      width: 1122,
      height: 1402,
    },
    evidenceBadges: ["Pantallas con datos demo"],
    moduleScreenshots: [
      {
        module: "Inicio",
        src: "/cases/optica-focus/inicio.png",
        title: "Inicio operativo",
        description:
          "Resumen inicial con alertas de stock, accesos rápidos y una vista corta para decidir qué revisar primero.",
        alt: "Pantalla de inicio de Óptica Focus con alertas, accesos rápidos y variantes críticas.",
        width: 1440,
        height: 900,
      },
      {
        module: "Stock",
        src: "/cases/optica-focus/stock.png",
        title: "Stock por graduación",
        description:
          "Control de lentes de contacto por marca, modelo y graduación, con mínimos, estado y acciones rápidas de mostrador.",
        alt: "Pantalla de stock de Óptica Focus con lentes de contacto, graduaciones, mínimos y acciones de ajuste.",
        width: 1440,
        height: 900,
      },
      {
        module: "Precios",
        src: "/cases/optica-focus/precios.png",
        title: "Lista de precios",
        description:
          "Gestión de cristales por laboratorio, categoría, costo, venta, margen e historial de actualizaciones.",
        alt: "Pantalla de precios de Óptica Focus con cristales, laboratorios, costos, ventas y márgenes.",
        width: 1440,
        height: 900,
      },
      {
        module: "Cuenta corriente",
        src: "/cases/optica-focus/cuenta-corriente.png",
        title: "Cuenta corriente",
        description:
          "Seguimiento de órdenes con saldos pendientes, pagos, estado del pedido y acciones de cobro o historial.",
        alt: "Pantalla de cuenta corriente de Óptica Focus con órdenes, pagos, saldos y estados.",
        width: 1440,
        height: 900,
      },
      {
        module: "Reportes",
        src: "/cases/optica-focus/reportes.png",
        title: "Reportes mensuales",
        description:
          "Cierre mensual con órdenes creadas, cobrado, facturado, saldos pendientes y movimientos de stock exportables.",
        alt: "Pantalla de reportes de Óptica Focus con resumen mensual, métricas de órdenes y movimientos.",
        width: 1440,
        height: 900,
      },
      {
        module: "Backups",
        src: "/cases/optica-focus/backups.png",
        title: "Backups y configuración",
        description:
          "Configuración local con backups de SQLite, diagnóstico, carpeta externa sincronizada y estado de actualización.",
        alt: "Pantalla de configuración de Óptica Focus con backups locales, diagnóstico y estado de actualización.",
        width: 1440,
        height: 900,
      },
    ],
  },
  {
    slug: "turnos-online",
    featured: true,
    security: false,
    name: "Turnos online para profesionales",
    category: "Sistema online de turnos",
    projectType: "Sistema online adaptable",
    idealFor: "Profesionales con agenda",
    status: "Demo funcional",
    description:
      "Agenda web para automatizar citas, recordatorios, cobros y reportes de profesionales y pequeños negocios.",
    problem:
      "Reemplazar el ida y vuelta por WhatsApp y las planillas con una agenda y recordatorios automáticos.",
    businessGain:
      "Agenda, clientes y pagos en un solo lugar — menos ausencias, menos cancelaciones de último momento, menos tiempo respondiendo mensajes.",
    solution:
      "Plataforma SaaS para que un profesional administre agenda, clientes y cobros desde la web, con recordatorios automáticos por WhatsApp y reportes simples de actividad e ingresos.",
    homeProblem: "Los turnos dependían de mensajes y planillas.",
    homeSolution: "Agenda web con clientes, horarios y recordatorios.",
    homeResult: "Menos ida y vuelta y agenda más ordenada.",
    problemEyebrow: "Qué automatiza",
    modules: [
      "Turnos",
      "Clientes",
      "Historial",
      "Reportes",
      "Servicios",
      "Configuración",
    ],
    stackLabel: "Capacidades verificadas",
    stack: [
      "Turnos",
      "Clientes",
      "Historial",
      "Reportes",
      "Servicios",
      "Configuración",
    ],
    notes: [
      "Caso privado. No se publica repositorio ni información operativa sensible del proyecto real.",
      "Las capturas usan datos demo neutros para mostrar el flujo de turnos, clientes, reportes y configuración.",
    ],
    visibility: "private",
    caseLabel: "Ver caso",
    homeVisual: {
      src: "/projects/turnos-online-home.png",
      alt: "Diagrama de Turnos online: mensajes, horarios manuales y pagos sueltos se unifican en una agenda con clientes, servicios y cobros, más tres tarjetas de resultado (turnos claros, recordatorios listos, cobros visibles).",
      width: 1448,
      height: 1086,
    },
    caseHeroVisual: {
      src: "/projects/turnos-online.jpg",
      alt: "Vista de Turnos online con agenda del día (Consulta, Corte, Nuevo paciente con nombres y duración), historial de clientes, recordatorios por WhatsApp e integración de pagos con Mercado Pago.",
      width: 1122,
      height: 1402,
    },
    evidenceBadges: ["Pantallas con datos demo"],
    moduleScreenshots: [
      {
        module: "Turnos",
        src: "/cases/turnos-online/turnos.png",
        title: "Agenda semanal",
        description:
          "Vista de turnos por semana con estados, horarios, servicios, clientes y acciones rápidas para la operación diaria.",
        alt: "Pantalla de Turnos online con agenda semanal, turnos por día, estados y acciones rápidas.",
        width: 1440,
        height: 900,
      },
      {
        module: "Clientes",
        src: "/cases/turnos-online/clientes.png",
        title: "Gestión de clientes",
        description:
          "Listado de clientes con búsqueda, datos de contacto, historial resumido y acceso a nuevas cargas.",
        alt: "Pantalla de Turnos online con listado de clientes, búsqueda y datos de contacto.",
        width: 1440,
        height: 900,
      },
      {
        module: "Historial",
        src: "/cases/turnos-online/historial.png",
        title: "Historial de turnos",
        description:
          "Consulta histórica con filtros, estados y detalle de turnos pasados o cancelados para seguimiento.",
        alt: "Pantalla de Turnos online con historial de turnos, filtros y estados.",
        width: 1440,
        height: 900,
      },
      {
        module: "Reportes",
        src: "/cases/turnos-online/reportes.png",
        title: "Reportes del negocio",
        description:
          "Métricas de actividad, ingresos, servicios más usados y clientes frecuentes para entender el mes.",
        alt: "Pantalla de Turnos online con reportes, métricas, ingresos y gráficos de servicios.",
        width: 1440,
        height: 900,
      },
      {
        module: "Servicios",
        src: "/cases/turnos-online/servicios.png",
        title: "Servicios configurables",
        description:
          "Configuración de servicios con duración, precio, color operativo y opciones para adaptar la agenda.",
        alt: "Pantalla de Turnos online con configuración de servicios, duración, precio y color.",
        width: 1440,
        height: 900,
      },
      {
        module: "Configuración",
        src: "/cases/turnos-online/configuracion.png",
        title: "Configuración general",
        description:
          "Ajustes de negocio, horario laboral, apariencia, notificaciones, seguridad y respaldo de datos.",
        alt: "Pantalla de Turnos online con configuración del negocio, horarios, apariencia y respaldo de datos.",
        width: 1440,
        height: 900,
      },
    ],
  },
  {
    slug: "soc-analyst-course",
    featured: false,
    security: true,
    name: "SOC Analyst Course",
    category: "Criterio técnico y seguridad",
    status: "Repositorio público",
    description:
      "Además de desarrollo web y sistemas de gestión, trabajo con buenas prácticas de documentación, logs, backups y seguridad defensiva.",
    problem:
      "Ordenar una ruta de estudio práctica y utilizable para análisis defensivo.",
    solution:
      "El repositorio combina teoría, labs, casos y materiales de referencia para trabajar con criterio técnico y documentación estructurada.",
    modules: ["Blue Team", "Logs", "SIEM", "Incident Response", "Security"],
    stackLabel: "Tags",
    stack: ["Blue Team", "Logs", "SIEM", "Incident Response", "Security"],
    notes: [
      "Este proyecto refuerza criterio técnico y documentación, pero no compite con los casos de negocio del portfolio.",
    ],
    repoUrl: "https://github.com/JoaFoschiatti/SOC-Analyst-Course",
    repoLabel: "Ver código en GitHub",
    visibility: "public",
    caseLabel: "Ver caso",
  },
] satisfies Project[];

export const processSteps = [
  {
    label: "ENTENDER",
    title: "Entiendo el problema",
    description: "Vemos cómo trabaja hoy el negocio.",
    color: "#0a72ef",
    labelColor: "#0a5ec0",
  },
  {
    label: "PRIORIZAR",
    title: "Definimos una primera versión",
    description: "Elegimos qué ordenar primero.",
    color: "#0f766e",
    labelColor: "#0f766e",
  },
  {
    label: "CONSTRUIR",
    title: "Diseño y desarrollo",
    description: "Creo una herramienta simple de usar.",
    color: "#de1d8d",
    labelColor: "#b4237c",
  },
  {
    label: "PUBLICAR",
    title: "Publico y ajusto",
    description:
      "La dejamos funcionando y mejoramos con el uso real.",
    color: "#ff5b4f",
    labelColor: "#d92d20",
  },
] satisfies ProcessStep[];

export const featuredProjects: Project[] = projects.filter(
  (project) => project.featured,
);
export const securityProjects: Project[] = projects.filter(
  (project) => project.security,
);

export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}
