export type EjeId = "X" | "Y" | "Z";

export interface Perfil {
  nombre: string;
  handle: string;
  rol: string;
  ciudad: string;
  email: string;
  github: string;
  linkedin?: string;
}

export interface Seccion {
  id: string;
  nombre: string;
}

export interface Eje {
  eje: EjeId;
  titulo: string;
  texto: string;
  detalle: string[];
}

export interface GrupoStack {
  grupo: string;
  items: string[];
}

export interface Proyecto {
  nombre: string;
  anio: string;
  rol: string;
  resumen: string;
  stack: string[];
  eje: EjeId;
  enlace: string | null;
  repo: string | null;
  imagenes: string[];
  video: string | null;
  estado: string;
}

export interface Hito {
  periodo: string;
  titulo: string;
  lugar: string;
  texto: string;
}