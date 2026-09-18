export type EjeId = "X" | "Y" | "Z";

export interface Bilingue {
  es: string;
  en: string;
}

export interface Perfil {
  nombre: string;
  handle: string;
  rol: Bilingue;
  ciudad: string;
  email: string;
  github: string;
  linkedin?: string;
}

export interface Seccion {
  id: string;
  nombre: Bilingue;
}

export interface Eje {
  eje: EjeId;
  titulo: Bilingue;
  texto: Bilingue;
  detalle: Bilingue[];
}

export interface GrupoStack {
  grupo: Bilingue;
  items: Bilingue[];
}

export interface Proyecto {
  nombre: Bilingue;
  anio: string;
  rol: Bilingue;
  resumen: Bilingue;
  stack: string[];
  eje: EjeId;
  enlace: string | null;
  repo: string | null;
  imagenes: string[];
  video: string | null;
  estado: Bilingue;
}

export interface Hito {
  periodo: Bilingue;
  titulo: Bilingue;
  lugar: Bilingue;
  texto: Bilingue;
}

export interface Certificacion {
  nombre: string;
  institucion: string;
  anio: string;
  archivo: string | null;
}

export interface SobreMi {
  foto: string;
  parrafos: Bilingue[];
}
