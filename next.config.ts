import type { NextConfig } from "next";

/**
 * GitHub Pages sirve archivos estáticos, no ejecuta Node.
 * Por eso exportamos el sitio completo en build time.
 */
const nextConfig: NextConfig = {
  output: "export",

  // Sin optimización en servidor: no hay servidor.
  images: { unoptimized: true },

  // Genera /ruta/index.html en vez de /ruta.html.
  // Evita 404 al recargar en hosting estático.
  trailingSlash: true,

  // Descomenta SOLO si el repo NO se llama <usuario>.github.io
  // basePath: "/portafolio",
  // assetPrefix: "/portafolio/",
};

export default nextConfig;