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
};

export type ProcessStep = {
  label: string;
  title: string;
  description: string;
  color: string;
};

export type TrustCard = {
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
  siteUrl: "",
  whatsappNumber: "TODO_COMPLETAR_NUMERO",
  heroTitle:
    "Desarrollo páginas y sistemas de gestión para negocios que quieren operar mejor.",
  heroSubtitle:
    "Construyo webs comerciales, sistemas de turnos, POS, stock, reportes y automatizaciones para comercios, profesionales y pymes.",
  heroMicrocopy:
    "Del diseño a producción, con foco en sistemas simples de usar y mantenibles.",
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
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Proceso", href: "/#proceso" },
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
  email: "joasanchezfoschiatti@gmail.com",
  github: "https://github.com/JoaFoschiatti",
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
    modules: [
      "Salón y mesas",
      "Cocina",
      "Caja",
      "Delivery/retiro",
      "Menú QR",
      "Pagos",
    ],
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
  },
  {
    slug: "soc-analyst-course",
    featured: false,
    security: true,
    name: "SOC Analyst Course",
    category: "Criterio técnico y seguridad",
    status: "Repositorio público",
    description:
      "Además de desarrollo web y sistemas de gestión, documento y estudio prácticas de ciberseguridad defensiva: logs, SIEM, respuesta a incidentes, threat intelligence y análisis de malware.",
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
  },
  {
    label: "PROBAR",
    title: "Construyo una primera versión usable",
    description:
      "Diseño, desarrollo y valido una versión concreta para ajustar con feedback real.",
    color: "#de1d8d",
  },
  {
    label: "PUBLICAR",
    title: "Lo pongo en producción",
    description:
      "Deploy, dominio, base de datos, backups, documentación y mejoras posteriores.",
    color: "#ff5b4f",
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
  "Restaurantes, bares y rotiserías",
  "Ópticas y comercios con stock",
  "Profesionales con agenda",
  "Pymes con procesos administrativos",
  "Emprendedores que necesitan una web comercial",
  "Equipos que quieren automatizar tareas repetitivas",
] as const;

export const featuredProjects = projects.filter((project) => project.featured);
export const securityProjects = projects.filter((project) => project.security);

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
