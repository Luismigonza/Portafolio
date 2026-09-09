# Guía de actualización — Portafolio

Esta guía es para ti (Luis), no para la IA. Explica **qué archivo tocar** cada vez que
tengas contenido nuevo: un proyecto terminado, un certificado nuevo, un dato de perfil
que cambió. Si además quieres entender por qué el sitio está armado como está, esa parte
vive en [`CLAUDE.md`](CLAUDE.md).

Regla de oro: **todo el contenido vive en `src/content/*.ts`**. Son archivos de datos
puros (arrays de objetos), sin JSX. Casi nunca vas a necesitar tocar un componente.

---

## Antes de publicar cualquier cambio

Desde la raíz del proyecto:

```bash
npx tsc --noEmit && npm run build
```

Si los dos comandos terminan sin errores, el cambio es seguro. `tsc` revisa que no te
falte o sobre un campo en algún objeto; `build` genera el export estático completo.

Para verlo en vivo antes de subir:

```bash
npm run dev
```

y abre **`http://localhost:3000/Portafolio/`** — ojo con la barra final y el
`/Portafolio`, el sitio usa `basePath` y sin eso da 404.

---

## 1. Terminar uno de los proyectos "Próximamente"

Archivo: [`src/content/work.ts`](src/content/work.ts), array `PROYECTOS`.

Busca el objeto con `nombre: "Próximamente"` y reemplaza los campos:

| Campo | Qué va ahí |
|---|---|
| `nombre` | Nombre real del proyecto |
| `anio` | Año |
| `rol` | Tu rol corto, ej. `"Backend"` o `"Frontend · nombre del módulo"` |
| `resumen` | 2-4 líneas: el problema que resolvía y la decisión técnica que más pesó (no la lista de features) |
| `stack` | Array de strings, ej. `["Angular", "TypeScript"]`. Si lo dejas vacío `[]`, la tarjeta simplemente no muestra esa fila (no pongas tecnologías que no usaste) |
| `eje` | `"X"` (backend), `"Y"` (frontend) o `"Z"` (infraestructura) — define el color de la tarjeta |
| `enlace` | URL del sitio en vivo, o `null` si no hay demo pública |
| `repo` | URL del repo de GitHub, o `null` si no lo puedes mostrar |
| `imagenes` | Array de rutas a capturas, ej. `["/proyectos/nombre/1.jpg"]`, o `[]` si no hay |
| `video` | Ruta a un `.mp4`, o `null` si no hay |
| `estado` | Texto del badge, normalmente `"Completado"` |

### Si el proyecto tiene imágenes o video
1. Crea la carpeta `public/proyectos/<nombre-del-proyecto>/` (usa un nombre corto, sin
   espacios, ej. `public/proyectos/mi-app/`).
2. Copia ahí las imágenes (`.jpg`/`.png`) y el video (`.mp4`) si hay.
3. En `work.ts`, referencia esas rutas empezando con `/proyectos/...` (sin el
   `basePath`, eso lo agrega el sitio solo).

### Si el video pesa mucho
GitHub **rechaza cualquier archivo de más de 100MB** en un push normal — no es
opcional, hay que comprimir antes. Si `ffmpeg` ya está instalado (lo instalamos con
`winget install ffmpeg` la primera vez), el comando que usamos para el video de
CERBERUS fue:

```bash
ffmpeg -i original.mp4 -vcodec libx264 -crf 26 -preset slow -vf "scale=1280:-2" -acodec aac -b:a 128k -movflags +faststart demo.mp4
```

Apunta a dejarlo por debajo de ~20MB. El video original sin comprimir de CERBERUS
quedó guardado fuera del repo en:
`C:\Users\User\Documents\portafolio-videos-originales\` — por si algún día necesitas
volver a comprimirlo distinto. Guarda ahí también los originales de los próximos
videos antes de comprimirlos, para no perderlos.

---

## 2. Agregar un certificado nuevo

Archivo: [`src/content/certificaciones.ts`](src/content/certificaciones.ts), array
`CERTIFICACIONES`.

1. Copia el PDF o imagen a `public/certificaciones/`.
2. Agrega un objeto nuevo al array:

```ts
{
  nombre: "Nombre del curso o título",
  institucion: "Udemy" /* o SENA, Platzi, etc. */,
  anio: "2026",
  archivo: "/certificaciones/nombre-del-archivo.pdf",
},
```

No necesitas configurar nada más: si `archivo` termina en `.pdf`, la tarjeta abre el
PDF en pestaña nueva; si es `.jpg`/`.png`, abre una vista ampliada (lightbox) dentro
del sitio. Esa lógica vive en `src/lib/paths.ts` (`isPdf()`) y no hay que tocarla.

Si algún día quieres que un certificado quede sin archivo todavía (como pasó con estos
dos al inicio), usa `archivo: null` — la tarjeta se muestra pero no queda clicable.

---

## 3. Cambiar datos de perfil o contacto

Archivo: [`src/content/site.ts`](src/content/site.ts), objeto `PERFIL`:
`nombre`, `rol`, `ciudad`, `email`, `github` (y `linkedin` si algún día lo agregas).

El email se usa tal cual en el link `mailto:` de la sección de Contacto — no hay
formulario, así que ese campo es el único lugar donde vive tu correo de contacto.

---

## 4. Cambiar el stack, los tres ejes o las frases del Hero

- `src/content/skills.ts` → `EJES` (Backend/Frontend/Infraestructura), `STACK`
  (inventario por grupo), `APRENDIENDO` (lo que estás estudiando ahora).
- `src/content/site.ts` → `MARQUEE` (cinta de tecnologías que se mueve) y
  `FRASES_PROMPT` (las frases que rotan en el Hero).

Son arrays de strings simples, editar es directo.

---

## 5. Agregar una sección nueva al menú (poco frecuente)

Si algún día agregas una sección completa (no solo contenido a una existente), hay que
tocar dos cosas además del contenido:
1. `SECCIONES` en `src/content/site.ts` — agrega `{ id: "mi-seccion", nombre: "..." }`.
2. El `id` de la sección en su componente (`<section id="mi-seccion" ...>`) tiene que
   coincidir exactamente con ese `id`, si no el menú no la va a poder scrollear hasta ahí.

Esto ya lo hicimos una vez para agregar "Certificaciones" — puedes usar
`src/components/sections/Certificaciones.tsx` +
`src/components/sections/CertificacionesGrid.tsx` como plantilla si vuelve a pasar.

---

## 6. Publicar

```bash
git add .
git commit -m "mensaje describiendo el cambio"
git push
```

GitHub Actions ya está configurado para buildear y desplegar a GitHub Pages solo con
el push — no hay que hacer nada manual después. El sitio queda actualizado en
`https://luismigonza.github.io/Portafolio/` unos minutos después.

---

## 7. Cosas que NO hay que tocar sin pensarlo dos veces

- `basePath: "/Portafolio"` en `next.config.ts` — es fijo, cambiar la mayúscula o
  quitarlo rompe todas las rutas del sitio en producción.
- `public/.nojekyll` — tiene que existir siempre, o GitHub Pages ignora la carpeta
  `_next/` y el sitio se ve roto.
- Un `@keyframes` de una animación CSS tiene que estar **dentro del mismo
  `.module.css`** que lo usa, no en `globals.css` — si algún día una animación deja de
  correr silenciosamente, ese es el primer sospechoso (ya nos pasó una vez).
- **Toda imagen o video de `public/` necesita pasar por `assetUrl()`** (de
  `src/lib/paths.ts`) para que le agregue el `basePath`. `next/image` con
  `unoptimized: true` **no lo hace solo** — nos pasó con las imágenes de Snapshot,
  se veían rotas hasta que se corrigió. Si algún día agregas una sección nueva con
  imágenes o video propio, usa `assetUrl(ruta)` en el `src`, tal como ya está hecho en
  `ProyectosGrid.tsx` y `CertificacionesGrid.tsx`.

---

## 8. Pendientes actuales

- [ ] Imagen Open Graph (la que se ve al compartir el link en redes o WhatsApp)

Los cuatro ejes ya tienen proyecto real: CERBERUS y ProviderHub (X), Snapshot (Y),
Infraestructura AWS (Z).
