import type { Perfil, Seccion } from "./types";

export const PERFIL: Perfil = {
  nombre: "Luis Miguel González Berrio",
  handle: "luismigonza",
  rol: "Desarrollador .NET & Angular",
  ciudad: "Itagüí, Antioquia",
  email: "luismigonzalez38@gmail.com",
  github: "https://github.com/luismigonza",
};

export const SECCIONES: Seccion[] = [
  { id: "inicio", nombre: "inicio" },
  { id: "enfoque", nombre: "enfoque" },
  { id: "stack", nombre: "stack" },
  { id: "trabajo", nombre: "trabajo" },
  { id: "trayectoria", nombre: "trayectoria" },
  { id: "certificaciones", nombre: "certificaciones" },
  { id: "contacto", nombre: "contacto" },
];

export const FRASES_PROMPT = [
  "separando dominio de infraestructura en .NET",
  "componentes Angular con signals y standalone",
  "modelando datos en SQL Server y PostgreSQL",
  "levantando servicios con Docker sobre Linux",
  "estudiando Kubernetes y AWS",
];

export const MARQUEE = [
  "C#", ".NET", "ASP.NET Core", "Angular", "TypeScript", "React",
  "Next.js", "SQL Server", "PostgreSQL", "MongoDB", "Docker",
  "Linux", "Clean Architecture", "Git",
];