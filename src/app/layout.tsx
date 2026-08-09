import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { PERFIL } from "@/content/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERFIL.nombre} — ${PERFIL.rol}`,
  description:
    "Desarrollador de software. Backend en .NET, frontend en Angular e infraestructura en contenedores. En camino a arquitecto de software.",
  keywords: [".NET", "C#", "Angular", "ASP.NET Core", "Clean Architecture", "Colombia"],
  authors: [{ name: PERFIL.nombre }],
  openGraph: {
    title: `${PERFIL.nombre} — ${PERFIL.rol}`,
    description: "Backend en .NET, frontend en Angular, infraestructura en contenedores.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}