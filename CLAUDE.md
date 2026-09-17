# Portafolio — Luis Miguel González Berrio

Portafolio personal. No es una landing page: se trata como producto de
software. Objetivos: demostrar criterio arquitectónico ante reclutadores
técnicos y servir de banco de pruebas para buenas prácticas.

## Stack y restricciones

- Next.js 16 (App Router) + TypeScript + CSS Modules. Sin Tailwind.
- Deploy: GitHub Pages vía GitHub Actions, repo `Luismigonza/Portafolio`.
- `output: "export"` → export estático. NO hay servidor en runtime:
  sin API Routes, sin Middleware, sin Server Actions, sin ISR.
- `basePath: "/Portafolio"` (mayúscula exacta). El sitio vive en
  https://luismigonza.github.io/Portafolio/

## Arquitectura

    src/content/     Datos puros (sin JSX). Actualizar el sitio = tocar solo esto.
    src/lib/         Lógica sin React (geodesic.ts, axis.ts). Testeable aislada.
    src/hooks/       Efectos de navegador aislados.
    src/components/  layout/ · sections/ · ui/

Las dependencias apuntan hacia adentro: `lib` no conoce React,
`content` no conoce componentes. Contenido nuevo va en `content/`;
sección nueva es un par `.tsx` + `.module.css` en `sections/`.

## Decisiones tomadas (y por qué)

- **Server Components por defecto.** Solo son cliente los que necesitan
  estado o APIs del navegador: Hero, Nav, StatusBar, Crosshair, Reveal,
  Typewriter, Viewport. El resto se prerenderiza en build → SEO real.
- **Motor 3D propio en canvas 2D**, no Three.js. Cero dependencias al
  exportar, control total del wireframe, ~60fps sin 600KB de librería.
  El icosaedro geodésico se lee como grafo de nodos (sistema distribuido),
  no como pieza de arte 3D. El autor NO trabaja en 3D.
- **Sistema de ejes X/Y/Z** = backend / frontend / infraestructura.
  El color codifica categoría, no decora. Mapeo único en `lib/axis.ts`.
- **CSS Modules sin Tailwind.** Tokens propios en `globals.css`;
  primitivas compartidas (`.btn`, `.chip`, `.section`) son globales.
- **Contacto por `mailto:`**, no formulario. Consecuencia consciente del
  export estático.
- **Bilingüe ES/EN sin rutas separadas.** Cada texto vive como
  `{ es, en }` (tipo `Bilingue` en `content/types.ts`) y se renderiza
  DOS VECES en el HTML estático vía el componente `<Bi>`
  (`<span lang="es">` / `<span lang="en">`); `globals.css` esconde el
  que no corresponde según `<html lang>`. El botón del Nav solo cambia
  ese atributo + `localStorage`, sin JS de re-render. Se eligió sobre
  `/en/` con `[locale]` porque el sitio es una sola página con anclas
  (no rutas), y porque el caso real es legibilidad para reclutadores que
  ya llegan al link, no descubrimiento por SEO en inglés — con esa meta,
  duplicar rutas era complejidad sin beneficio real. Costo aceptado: sin
  URL propia en inglés, SEO en inglés no es óptimo. Excepción: los
  nombres de certificados (`Certificacion.nombre`) no son bilingües a
  propósito — son títulos de credenciales reales.

## Gotchas conocidos

- `@keyframes` deben definirse DENTRO del `.module.css` que los usa.
  CSS Modules scopea los nombres de animación; uno global no resuelve.
- El reloj de StatusBar arranca vacío a propósito: evita hydration
  mismatch, que en export estático sería permanente.
- `public/.nojekyll` es obligatorio. Sin él, Jekyll ignora `_next/`.
- Verificar antes de publicar: `npx tsc --noEmit && npm run build`.
- Toda imagen o video en `public/` necesita `assetUrl()` (`lib/paths.ts`)
  para el `basePath` — `next/image` con `unoptimized: true` no lo agrega
  solo.
- Las reglas `html[lang="es"] [lang="en"] { display: none }` en
  `globals.css` son las que hacen funcionar el toggle de idioma — deben
  quedar globales, no en un `.module.css` (quedarían scopeadas).

## Cómo quiero que trabajes conmigo

Actúa como arquitecto senior y mentor, no como generador de código.
Cuestiona mis decisiones y explica trade-offs antes de implementar.
Pregunta antes de decisiones arquitectónicas importantes.
Evita overengineering, optimización prematura y abstracciones que no
resuelven un problema presente. Prefiero entender el porqué a recibir
código que funcione sin saber por qué.

## Pendientes

- [ ] Imagen Open Graph