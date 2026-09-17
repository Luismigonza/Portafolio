import type { Perfil, Seccion } from "./types";

export const PERFIL: Perfil = {
  nombre: "Luis Miguel González Berrio",
  handle: "luismigonza",
  rol: { es: "Desarrollador Full Stack · .NET & Angular", en: "Full Stack Developer · .NET & Angular" },
  ciudad: "Itagüí, Antioquia",
  email: "luismigonzalez38@gmail.com",
  github: "https://github.com/luismigonza",
};

export const SECCIONES: Seccion[] = [
  { id: "inicio", nombre: { es: "inicio", en: "home" } },
  { id: "enfoque", nombre: { es: "enfoque", en: "focus" } },
  { id: "stack", nombre: { es: "stack", en: "stack" } },
  { id: "trabajo", nombre: { es: "trabajo", en: "work" } },
  { id: "trayectoria", nombre: { es: "trayectoria", en: "journey" } },
  { id: "certificaciones", nombre: { es: "certificaciones", en: "certifications" } },
  { id: "contacto", nombre: { es: "contacto", en: "contact" } },
];

export const FRASES_PROMPT = [
  { es: "separando dominio de infraestructura en .NET", en: "separating domain from infrastructure in .NET" },
  { es: "componentes Angular con signals y standalone", en: "Angular components with signals and standalone" },
  { es: "modelando datos en SQL Server y PostgreSQL", en: "modeling data in SQL Server and PostgreSQL" },
  { es: "levantando servicios con Docker sobre Linux", en: "running services with Docker on Linux" },
  { es: "estudiando Kubernetes y AWS", en: "studying Kubernetes and AWS" },
];

export const MARQUEE = [
  "C#", ".NET", "ASP.NET Core", "Angular", "TypeScript", "React",
  "Next.js", "SQL Server", "PostgreSQL", "MongoDB", "Docker",
  "Linux", "Clean Architecture", "Git",
];
