import type { Eje, GrupoStack } from "./types";

export const EJES: Eje[] = [
  {
    eje: "X",
    titulo: { es: "Backend", en: "Backend" },
    texto: {
      es: "Donde vive la lógica del negocio. APIs en ASP.NET Core con Entity Framework, separando dominio de infraestructura para que las reglas no dependan del framework.",
      en: "Where the business logic lives. APIs in ASP.NET Core with Entity Framework, separating domain from infrastructure so the rules never depend on the framework.",
    },
    detalle: [
      { es: "C# / .NET", en: "C# / .NET" },
      { es: "ASP.NET Core", en: "ASP.NET Core" },
      { es: "Entity Framework", en: "Entity Framework" },
      { es: "Node.js / Express", en: "Node.js / Express" },
      { es: "PHP / Laravel", en: "PHP / Laravel" },
    ],
  },
  {
    eje: "Y",
    titulo: { es: "Frontend", en: "Frontend" },
    texto: {
      es: "Angular como base. Componentes standalone, signals y control flow moderno, con arquitectura por features en vez de carpetas por tipo de archivo.",
      en: "Angular as the foundation. Standalone components, signals and modern control flow, organized by feature instead of by file type.",
    },
    detalle: [
      { es: "Angular · signals", en: "Angular · signals" },
      { es: "Componentes standalone", en: "Standalone components" },
      { es: "React", en: "React" },
      { es: "Next.js", en: "Next.js" },
      { es: "TypeScript", en: "TypeScript" },
    ],
  },
  {
    eje: "Z",
    titulo: { es: "Infraestructura", en: "Infrastructure" },
    texto: {
      es: "Lo que mantiene el sistema arriba. Contenedores sobre Linux y control de versiones como base; ahora sumando nube, orquestación y despliegue continuo.",
      en: "What keeps the system running. Containers on Linux and version control as the baseline; now adding cloud, orchestration and continuous deployment.",
    },
    detalle: [
      { es: "Docker", en: "Docker" },
      { es: "Linux", en: "Linux" },
      { es: "Git", en: "Git" },
      { es: "GitHub Actions", en: "GitHub Actions" },
      { es: "Nginx", en: "Nginx" },
    ],
  },
];

export const STACK: GrupoStack[] = [
  {
    grupo: { es: "Lenguajes", en: "Languages" },
    items: [
      { es: "C#", en: "C#" },
      { es: "TypeScript", en: "TypeScript" },
      { es: "JavaScript", en: "JavaScript" },
      { es: "PHP", en: "PHP" },
      { es: "SQL", en: "SQL" },
    ],
  },
  {
    grupo: { es: "Backend", en: "Backend" },
    items: [
      { es: "ASP.NET Core", en: "ASP.NET Core" },
      { es: "Entity Framework", en: "Entity Framework" },
      { es: "Node.js / Express", en: "Node.js / Express" },
      { es: "Laravel", en: "Laravel" },
    ],
  },
  {
    grupo: { es: "Frontend", en: "Frontend" },
    items: [
      { es: "Angular", en: "Angular" },
      { es: "React", en: "React" },
      { es: "Next.js", en: "Next.js" },
      { es: "SCSS", en: "SCSS" },
    ],
  },
  {
    grupo: { es: "Bases de datos", en: "Databases" },
    items: [
      { es: "SQL Server", en: "SQL Server" },
      { es: "PostgreSQL", en: "PostgreSQL" },
      { es: "MySQL", en: "MySQL" },
      { es: "MongoDB", en: "MongoDB" },
    ],
  },
  {
    grupo: { es: "Infraestructura", en: "Infrastructure" },
    items: [
      { es: "Docker", en: "Docker" },
      { es: "Linux", en: "Linux" },
      { es: "Git", en: "Git" },
      { es: "GitHub Actions", en: "GitHub Actions" },
    ],
  },
  {
    grupo: { es: "Arquitectura", en: "Architecture" },
    items: [
      { es: "Clean Architecture", en: "Clean Architecture" },
      { es: "SOLID", en: "SOLID" },
      { es: "Patrones de diseño", en: "Design patterns" },
      { es: "Microservicios", en: "Microservices" },
    ],
  },
];

export const APRENDIENDO = [
  { es: "AWS", en: "AWS" },
  { es: "Kubernetes", en: "Kubernetes" },
  { es: "Sistemas distribuidos", en: "Distributed systems" },
  { es: "CI/CD avanzado", en: "Advanced CI/CD" },
];
