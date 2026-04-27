export type MockupVariant =
  | "operations-overview"
  | "comanda"
  | "optica-focus"
  | "turnos-online"
  | "cumpliros";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
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
  status: string;
  description: string;
  problem: string;
  solution: string;
  modules: string[];
  stackLabel: string;
  stack: string[];
  notes: string[];
  repoUrl?: string;
  repoLabel?: string;
  visibility: "public" | "private";
  caseLabel: string;
  mockup: MockupVariant;
  homeVisual?: {
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

export type TrustCard = {
  title: string;
  description: string;
};

export type ClientType = {
  title: string;
  description: string;
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

export const seo = {
  title: "Joaquín Sánchez Foschiatti — Webs y sistemas de gestión para negocios",
  description:
    "Desarrollo páginas web, sistemas POS, stock, turnos, reportes y automatizaciones para comercios, profesionales y pymes.",
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
    "Desarrollo páginas y sistemas de gestión para negocios que quieren operar mejor.",
  heroSubtitle:
    "Construyo webs comerciales, sistemas de turnos, POS, stock, reportes y automatizaciones para comercios, profesionales y pymes.",
  heroMicrocopy:
    "Del diseño a producción, con foco en sistemas simples de usar y mantenibles.",
  heroProof:
    "Sistemas usados para stock, turnos, caja, pedidos y operación diaria.",
  heroBadges: [
    "Webs",
    "POS",
    "Stock",
    "Turnos",
    "Pagos",
    "WhatsApp",
    "Vercel",
    "AWS",
  ],
  navigation: [
    { label: "Servicios", href: "/#servicios" },
    { label: "Proceso", href: "/#proceso" },
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Sistema a medida", href: "/sistemas-a-medida" },
    { label: "Contacto", href: "/#contacto" },
  ] satisfies NavigationItem[],
  briefQuestions: [
    "¿Qué problema querés resolver?",
    "¿Quiénes usarían el sistema?",
    "¿Necesitás web, turnos, POS, stock o automatización?",
  ],
  footerSummary:
    "Desarrollo web, sistemas de gestión y automatización para negocios.",
} as const;

export const contactLinks = {
  email: profile.email,
  github: "https://github.com/JoaFoschiatti",
  instagram: "https://www.instagram.com/joasanchez02/",
  whatsappMessage:
    "Hola Joaquín, vi tu portfolio y quiero consultar por una web o sistema para mi negocio.",
} as const;

export const valueStrip = [
  "Sistemas en producción",
  "Deploy en Vercel / AWS",
  "Integraciones con pagos y APIs",
  "Código mantenible",
  "Pensado para operación diaria",
] as const;

export const services = [
  {
    title: "Página web comercial",
    description:
      "Landing o sitio institucional claro, rápido y preparado para captar consultas por WhatsApp, formulario o redes.",
    tags: ["SEO básico", "Responsive", "WhatsApp", "Vercel"],
  },
  {
    title: "Sistema de turnos",
    description:
      "Agenda online, clientes, servicios, horarios, recordatorios, pagos y reportes para profesionales o pequeños negocios.",
    tags: ["Turnos", "Clientes", "Recordatorios", "Pagos"],
  },
  {
    title: "POS / sistema de gestión",
    description:
      "Caja, pedidos, stock, cuentas corrientes, reportes, usuarios, backups y operación diaria en una herramienta a medida.",
    tags: ["Caja", "Stock", "Reportes", "Usuarios"],
  },
  {
    title: "Automatizaciones",
    description:
      "Chatbots, integraciones con WhatsApp, APIs, paneles internos y tareas repetitivas automatizadas.",
    tags: ["APIs", "WhatsApp", "Bots", "Dashboards"],
  },
] satisfies Service[];

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
      "Automatizaciones con APIs o WhatsApp",
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
    { label: "Turnos", value: "turnos" },
    { label: "Stock", value: "stock" },
    { label: "Caja", value: "caja" },
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
    question: "¿Podés integrar WhatsApp, pagos, APIs o planillas?",
    answer:
      "Sí. Se puede conectar WhatsApp, Mercado Pago, formularios, APIs, reportes o importar datos desde planillas cuando tenga sentido.",
  },
  {
    question: "¿Qué pasa después del deploy?",
    answer:
      "La idea es dejar el sistema en producción y poder acompañar con ajustes, mantenimiento o nuevas funcionalidades.",
  },
  {
    question: "¿Cómo se define el alcance?",
    answer:
      "Primero se entiende el proceso y después se decide qué entra en la primera versión para que sea útil sin volverse pesada.",
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
    description: "WhatsApp, pagos, formularios, reportes, APIs y automatizaciones donde aporten valor real.",
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
    category: "Sistema POS para restaurantes",
    status: "Próximo a producción",
    description:
      "Sistema integral para operar salón, cocina, caja, delivery/retiro, menú público con QR, pagos y configuración del negocio.",
    problem:
      "Centralizar la operación diaria de un restaurante sin depender de planillas, mensajes sueltos o procesos manuales.",
    solution:
      "La propuesta reúne front de salón, cocina, caja, pedidos remotos y configuración del negocio en una sola base operativa, con foco en tiempos de atención, cobro y visibilidad del estado de cada pedido.",
    modules: ["Dashboard", "Mesas", "Cocina", "Caja", "Menú", "Pagos"],
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
    repoUrl: "https://github.com/JoaFoschiatti/C0MANDA",
    repoLabel: "Ver repo",
    visibility: "public",
    caseLabel: "Ver caso",
    mockup: "comanda",
    homeVisual: {
      src: "/project-comanda-visual-v2.png",
      alt: "Comanda unifica mesas, cocina, caja y pedidos QR o retiro para lograr pedidos claros, cocina visible y caja clara.",
      width: 1536,
      height: 1024,
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
    status: "En producción",
    description:
      "Sistema de escritorio para óptica con gestión de stock, precios, cuenta corriente y backups, utilizado por un cliente real.",
    problem:
      "Ordenar productos, precios y cuentas corrientes en una herramienta simple para la operación diaria.",
    solution:
      "Se trabaja como una aplicación de escritorio orientada a caja y administración interna, con una interfaz directa para revisar stock, actualizar precios, gestionar clientes y mantener respaldos.",
    modules: ["Stock", "Precios", "Clientes", "Cuenta corriente", "Backups"],
    stackLabel: "Stack visible",
    stack: ["Electron", "SQLite", "Tailwind"],
    notes: [
      "Caso privado. No se publica repositorio ni capturas reales del cliente.",
      "La preview del portfolio es una representación neutra del tipo de sistema, no una pantalla productiva del cliente.",
    ],
    visibility: "private",
    caseLabel: "Ver caso",
    mockup: "optica-focus",
    homeVisual: {
      src: "/project-optica-focus-visual-v2.png",
      alt: "Optica Focus unifica stock, precios y cuenta corriente en un sistema de escritorio con productos, clientes, backups y cuentas claras.",
      width: 1536,
      height: 1024,
    },
    evidenceBadges: ["Caso privado", "Pantallas reales"],
  },
  {
    slug: "turnos-online",
    featured: true,
    security: false,
    name: "Turnos online para profesionales",
    category: "Sistema SaaS de turnos",
    status: "En producción",
    description:
      "Agenda digital para organizar citas, clientes, servicios, horarios, recordatorios, pagos y reportes desde la web.",
    problem:
      "Evitar turnos perdidos, mensajes desordenados y gestión manual de horarios.",
    solution:
      "El caso apunta a que un profesional o pequeño negocio pueda administrar agenda, clientes y cobros desde la web, con recordatorios y reportes útiles para seguir el trabajo sin depender de chats sueltos.",
    modules: [
      "Turnos",
      "Clientes",
      "Servicios",
      "Reportes",
      "WhatsApp",
      "Pagos",
    ],
    stackLabel: "Capacidades verificadas",
    stack: ["Turnos", "Clientes", "Servicios", "Reportes", "WhatsApp", "Pagos"],
    notes: [
      "Para la evidencia pública se enlaza el repositorio AgendaFlow.",
      "El portfolio evita sobre-especificar stack por coexistencia de versiones y prioriza el caso de negocio.",
    ],
    repoUrl: "https://github.com/JoaFoschiatti/AgendaFlow",
    repoLabel: "Ver repo",
    visibility: "public",
    caseLabel: "Ver caso",
    mockup: "turnos-online",
    homeVisual: {
      src: "/project-turnos-online-visual-v2.png",
      alt: "Turnos online unifica mensajes, horarios manuales y pagos sueltos en una agenda web con clientes, servicios, pagos y recordatorios claros.",
      width: 1536,
      height: 1024,
    },
    evidenceBadges: ["En producción"],
  },
  {
    slug: "cumpliros",
    featured: true,
    security: false,
    name: "CumpliRos",
    category: "Gestión de vencimientos y documentación",
    status: "MVP / Producto en desarrollo",
    description:
      "PWA para ordenar habilitaciones, DDJJ, tributos, documentación, tareas, evidencias y colaboración entre dueño, contador y gestor.",
    problem:
      "Reducir olvidos, vencimientos dispersos y documentación desordenada en comercios y pymes.",
    solution:
      "Se plantea como una capa operativa para registrar obligaciones, documentos y seguimiento, con tablero, semáforo de riesgo y coordinación entre las personas que intervienen en la gestión.",
    modules: [
      "Vencimientos",
      "Documentación",
      "Tareas",
      "Evidencias",
      "Auditoría",
      "Notificaciones",
    ],
    stackLabel: "Stack visible",
    stack: ["TypeScript", "PWA", "SaaS"],
    notes: [
      "Proyecto orientado a comercios y pymes con operación física en Rosario y Santa Fe.",
      "Se presenta como MVP en evolución, con foco en cumplimiento operativo y colaboración.",
    ],
    repoUrl: "https://github.com/JoaFoschiatti/CumpliRos",
    repoLabel: "Ver repo",
    visibility: "public",
    caseLabel: "Ver caso",
    mockup: "cumpliros",
    homeVisual: {
      src: "/project-cumpliros-visual-v2.png",
      alt: "CumpliRos unifica vencimientos, documentos sueltos y tareas dispersas en un panel operativo con documentos, evidencias y equipo alineado.",
      width: 1536,
      height: 1024,
    },
    evidenceBadges: ["MVP"],
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
    repoLabel: "Ver repo",
    visibility: "public",
    caseLabel: "Ver caso",
    mockup: "operations-overview",
  },
] satisfies Project[];

export const processSteps = [
  {
    label: "ENTENDER",
    title: "Entiendo el negocio",
    description:
      "Relevo el flujo actual, los problemas, los usuarios y las prioridades antes de escribir código.",
    color: "#0a72ef",
    labelColor: "#0a5ec0",
  },
  {
    label: "PROBAR",
    title: "Construyo una primera versión usable",
    description:
      "Diseño, desarrollo y valido una versión concreta para ajustar con feedback real.",
    color: "#de1d8d",
    labelColor: "#b4237c",
  },
  {
    label: "PUBLICAR",
    title: "Lo pongo en producción",
    description:
      "Deploy, dominio, base de datos, backups, documentación y mejoras posteriores.",
    color: "#ff5b4f",
    labelColor: "#d92d20",
  },
] satisfies ProcessStep[];

export const trustCards = [
  {
    title: "Implementación real",
    description:
      "Deploy, dominio, base de datos, backups y documentación para que el sistema no quede solo en una demo.",
  },
  {
    title: "Integraciones útiles",
    description:
      "Mercado Pago, WhatsApp, APIs, facturación, reportes y automatización de tareas repetitivas.",
  },
  {
    title: "Código mantenible",
    description:
      "Arquitectura clara, componentes reutilizables y decisiones técnicas pensadas para poder escalar o modificar.",
  },
] satisfies TrustCard[];

export const clientTypes = [
  {
    title: "Restaurantes, bares y rotiserías",
    description: "Mesas, pedidos, cocina, caja y menú QR.",
  },
  {
    title: "Ópticas y comercios con stock",
    description: "Productos, precios, cuentas corrientes y backups.",
  },
  {
    title: "Profesionales con agenda",
    description: "Turnos, clientes, horarios y recordatorios.",
  },
  {
    title: "Pymes con procesos administrativos",
    description: "Documentación, reportes, tareas y vencimientos.",
  },
  {
    title: "Emprendedores que necesitan una web comercial",
    description: "Landing, WhatsApp, formulario y presencia online.",
  },
  {
    title: "Equipos que quieren automatizar tareas repetitivas",
    description: "APIs, bots, paneles internos y flujos automáticos.",
  },
] satisfies ClientType[];

export const featuredProjects: Project[] = projects.filter(
  (project) => project.featured,
);
export const securityProjects: Project[] = projects.filter(
  (project) => project.security,
);

export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}
