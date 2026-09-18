import type { Perfil, Seccion, SobreMi } from "./types";

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
  { id: "sobre-mi", nombre: { es: "sobre mí", en: "about" } },
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

export const SOBRE_MI: SobreMi = {
  foto: "/perfil/luis.jpg",
  parrafos: [
    {
      es: "Empecé en el SENA aprendiendo los fundamentos, y desde entonces la pregunta que más repito es «¿por qué esto y no lo otro?» — no por llevar la contraria, sino porque entender el porqué de una decisión es lo que separa copiar un patrón de saber cuándo usarlo.",
      en: "I started at SENA learning the fundamentals, and ever since, the question I ask most is “why this and not that?” — not to be difficult, but because understanding the why behind a decision is what separates copying a pattern from knowing when to use it.",
    },
    {
      es: "Fuera del código sigo siendo de Itagüí, Antioquia: me importa que las cosas funcionen de verdad, no que parezcan que funcionan. Por eso cada proyecto de este portafolio corre de verdad, se puede levantar desde cero, y tiene sus decisiones documentadas — si no puedo explicar algo, todavía no lo entiendo lo suficiente.",
      en: "Outside of code, I'm still from Itagüí, Antioquia: I care about things actually working, not just looking like they work. That's why every project in this portfolio actually runs, can be spun up from scratch, and has its decisions written down — if I can't explain something, I don't understand it well enough yet.",
    },
  ],
};

export const MARQUEE = [
  "C#", ".NET", "ASP.NET Core", "Angular", "TypeScript", "React",
  "Next.js", "SQL Server", "PostgreSQL", "MongoDB", "Docker",
  "Linux", "Clean Architecture", "Git",
];
