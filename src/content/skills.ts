import type { Eje, GrupoStack } from "./types";

export const EJES: Eje[] = [
  {
    eje: "X",
    titulo: "Backend",
    texto:
      "Donde vive la lógica del negocio. APIs en ASP.NET Core con Entity Framework, separando dominio de infraestructura para que las reglas no dependan del framework.",
    detalle: ["C# / .NET", "ASP.NET Core", "Entity Framework", "Node.js / Express", "PHP / Laravel"],
  },
  {
    eje: "Y",
    titulo: "Frontend",
    texto:
      "Angular como base. Componentes standalone, signals y control flow moderno, con arquitectura por features en vez de carpetas por tipo de archivo.",
    detalle: ["Angular · signals", "Componentes standalone", "React", "Next.js", "TypeScript"],
  },
  {
    eje: "Z",
    titulo: "Infraestructura",
    texto:
      "Lo que mantiene el sistema arriba. Contenedores sobre Linux y control de versiones como base; ahora sumando nube, orquestación y despliegue continuo.",
    detalle: ["Docker", "Linux", "Git", "GitHub Actions", "Nginx"],
  },
];

export const STACK: GrupoStack[] = [
  { grupo: "Lenguajes", items: ["C#", "TypeScript", "JavaScript", "PHP", "SQL"] },
  { grupo: "Backend", items: ["ASP.NET Core", "Entity Framework", "Node.js / Express", "Laravel"] },
  { grupo: "Frontend", items: ["Angular", "React", "Next.js", "SCSS"] },
  { grupo: "Bases de datos", items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"] },
  { grupo: "Infraestructura", items: ["Docker", "Linux", "Git", "GitHub Actions"] },
  { grupo: "Arquitectura", items: ["Clean Architecture", "SOLID", "Patrones de diseño", "Microservicios"] },
];

export const APRENDIENDO = ["AWS", "Kubernetes", "Sistemas distribuidos", "CI/CD avanzado"];