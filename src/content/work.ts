import type { Hito, Proyecto } from "./types";

export const PROYECTOS: Proyecto[] = [
  {
    nombre: "CERBERUS",
    anio: "2026",
    rol: "Backend · VulnerabilityService",
    resumen:
      "Plataforma DevSecOps construida por un equipo de 6 en 15 días: escanea repos en busca de secretos expuestos, CVEs y vulnerabilidades web, y bloquea despliegues inseguros. Construí VulnerabilityService, el microservicio que normaliza los formatos completamente distintos de Gitleaks, Trivy y ZAP a un contrato único — con idempotencia real vía constraint de PostgreSQL para sobrevivir a los reintentos automáticos de n8n.",
    stack: [".NET 8", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes"],
    eje: "X",
    enlace: null,
    repo: "https://github.com/Cerberus-Riwi/cerberus-vulnerability",
    imagenes: [],
    video: "/proyectos/cerberus/demo.mp4",
    estado: "Completado",
  },
  {
    nombre: "Nombre del proyecto",
    anio: "2026",
    rol: "Frontend",
    resumen:
      "Ideal para mostrar Angular a fondo: cómo estructuraste las features, por qué elegiste signals, qué hiciste con el estado compartido.",
    stack: ["Angular", "TypeScript", "SCSS"],
    eje: "Y",
    enlace: null,
    repo: null,
    imagenes: [],
    video: null,
    estado: "Por completar",
  },
  {
    nombre: "Nombre del proyecto",
    anio: "2025",
    rol: "Full-stack",
    resumen:
      "Aquí va algo del SENA o de RIWI. Aunque sea académico, si explicas la arquitectura que elegiste vale más que un proyecto grande sin criterio.",
    stack: ["Node.js", "PostgreSQL", "Docker"],
    eje: "Z",
    enlace: null,
    repo: null,
    imagenes: [],
    video: null,
    estado: "Por completar",
  },
];

export const TRAYECTORIA: Hito[] = [
  {
    periodo: "2025 — hoy",
    titulo: "Desarrollador en formación",
    lugar: "RIWI",
    texto:
      "Seis meses trabajando en retos de equipo con roles reales de la industria: backend, frontend y despliegue.",
  },
  {
    periodo: "2023 — 2025",
    titulo: "Tecnólogo en Análisis y Desarrollo de Software",
    lugar: "SENA",
    texto:
      "Fundamentos de programación, bases de datos, ciclo de vida del software y desarrollo de aplicaciones.",
  },
  {
    periodo: "En curso",
    titulo: "Camino a Arquitecto de Software",
    lugar: "Ecosistema .NET",
    texto:
      "Clean Architecture, sistemas distribuidos, cloud y microservicios. El objetivo no es saber más herramientas, es saber cuándo no usarlas.",
  },
];