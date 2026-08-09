import type { Hito, Proyecto } from "./types";

export const PROYECTOS: Proyecto[] = [
  {
    nombre: "Nombre del proyecto",
    anio: "2026",
    rol: "Backend",
    resumen:
      "Describe el problema que resolvía y la decisión técnica que más pesó. Un reclutador lee esto en diez segundos: cuenta el porqué, no la lista de features.",
    stack: ["ASP.NET Core", "SQL Server", "Docker"],
    eje: "X",
    enlace: null,
    estado: "Por completar",
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