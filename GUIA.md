# Guía de actualización — Portafolio

Esta guía es para ti (Luis), no para la IA. Explica **qué archivo tocar** cada vez que
tengas contenido nuevo: un proyecto terminado, un certificado nuevo, un dato de perfil
que cambió. Si además quieres entender por qué el sitio está armado como está, esa parte
vive en [`CLAUDE.md`](CLAUDE.md).

Regla de oro: **todo el contenido vive en `src/content/*.ts`**. Son archivos de datos
puros (arrays de objetos), sin JSX. Casi nunca vas a necesitar tocar un componente.

---

## 0. El sitio es bilingüe (ES/EN) — cómo funciona

Desde que agregamos el botón **ES/EN** de la barra de navegación, casi todo el texto del
sitio tiene esta forma en los archivos de contenido:

```ts
{ es: "Texto en español", en: "Text in English" }
```

Ese tipo se llama `Bilingue` (definido en `src/content/types.ts`). **Casi cualquier campo
de texto que edites de aquí en adelante lo vas a necesitar en los dos idiomas** — el
`tsc --noEmit` te va a avisar con un error si se te olvida alguno (te va a decir que falta
`en` o `es` en el objeto), así que es difícil publicar algo a medio traducir sin darte cuenta.

**Cómo funciona por dentro (no necesitas tocar esto, solo para que lo entiendas):** el
sitio renderiza los dos idiomas a la vez en el HTML — un componente llamado `Bi`
(`src/components/ui/Bi.tsx`) pinta `<span lang="es">` y `<span lang="en">` uno al lado del
otro, y una regla en `globals.css` esconde el que no corresponde según el idioma activo en
`<html lang="...">`. El botón del Nav solo cambia ese atributo y lo guarda en
`localStorage`. No hay rutas separadas (`/en/`) ni nada que se reconstruya: todo sigue
siendo estático, prerenderizado en build.

**Qué se tradujo y qué no, a propósito:**
- Los nombres oficiales de los certificados (`Certificacion.nombre`, `institucion`) **se
  dejaron solo en español** — son títulos de credenciales reales, traducirlos podría sonar
  a que inventaste un título distinto. Si algún día quieres un certificado nuevo con
  nombre en inglés real (por ejemplo un curso que tomaste en inglés), ese sí puede ir en
  inglés tal cual, sin necesidad de bilingüe.
- `Proyecto.stack` (las tecnologías) se quedó como lista simple de strings — son nombres
  propios (`.NET`, `Docker`, `Angular`) que no se traducen.
- Los `aria-label` de botones solo-ícono (cerrar el modal, flechas de la galería) se
  quedaron en español — son para lectores de pantalla, no texto visible, y localizarlos de
  verdad habría obligado a convertir varios componentes de servidor a cliente sin
  necesidad real.

---

## Antes de publicar cualquier cambio

Desde la raíz del proyecto:

```bash
npx tsc --noEmit && npm run build
```

Si los dos comandos terminan sin errores, el cambio es seguro. `tsc` revisa que no te
falte o sobre un campo en algún objeto (incluido un idioma faltante en un `Bilingue`);
`build` genera el export estático completo.

Para verlo en vivo antes de subir:

```bash
npm run dev
```

y abre **`http://localhost:3000/Portafolio/`** — ojo con la barra final y el
`/Portafolio`, el sitio usa `basePath` y sin eso da 404. Prueba el botón **EN** del Nav
para revisar que tu texto nuevo se vea bien en los dos idiomas.

---

## 1. Agregar o terminar un proyecto

Archivo: [`src/content/work.ts`](src/content/work.ts), array `PROYECTOS`.

| Campo | Qué va ahí |
|---|---|
| `nombre` | `{ es, en }` — el nombre del proyecto. Si es un nombre propio (CERBERUS, Snapshot) va igual en los dos; si es descriptivo (como "Infraestructura AWS" → "AWS Infrastructure") tradúcelo |
| `anio` | Año, string simple (no bilingüe, los números no cambian) |
| `rol` | `{ es, en }` — tu rol corto, ej. `{ es: "Backend · en solitario", en: "Backend · solo project" }` |
| `resumen` | `{ es, en }` — 2-4 líneas: el problema que resolvía y la decisión técnica que más pesó (no la lista de features). Esta es la parte que más vale la pena traducir con cuidado — es lo que un reclutador angloparlante realmente lee |
| `stack` | Array de strings simple, ej. `["Angular", "TypeScript"]` — no bilingüe, son nombres de tecnologías |
| `eje` | `"X"` (backend), `"Y"` (frontend) o `"Z"` (infraestructura) — define el color de la tarjeta |
| `enlace` | URL del sitio en vivo, o `null` si no hay demo pública |
| `repo` | URL del repo de GitHub, o `null` si no lo puedes mostrar |
| `imagenes` | Array de rutas a capturas, ej. `["/proyectos/nombre/1.jpg"]`, o `[]` si no hay |
| `video` | Ruta a un `.mp4`, o `null` si no hay |
| `estado` | `{ es, en }` — texto del badge, normalmente `{ es: "Completado", en: "Completed" }` |

### Si el proyecto tiene imágenes o video
1. Crea la carpeta `public/proyectos/<nombre-del-proyecto>/` (usa un nombre corto, sin
   espacios, ej. `public/proyectos/mi-app/`).
2. Copia ahí las imágenes (`.jpg`/`.png`) y el video (`.mp4`) si hay.
3. En `work.ts`, referencia esas rutas empezando con `/proyectos/...` (sin el
   `basePath`, eso lo agrega el sitio solo).

### Si el video pesa mucho
GitHub **rechaza cualquier archivo de más de 100MB** en un push normal — no es
opcional, hay que comprimir antes. Si `ffmpeg` ya está instalado (lo instalamos con
`winget install ffmpeg` la primera vez), el comando que hemos usado siempre es:

```bash
ffmpeg -i original.mp4 -vcodec libx264 -crf 26 -preset slow -vf "scale=1280:-2" -acodec aac -b:a 128k -movflags +faststart demo.mp4
```

Apunta a dejarlo por debajo de ~20MB. Los videos originales sin comprimir quedan
guardados fuera del repo en:
`C:\Users\User\Documents\portafolio-videos-originales\` — por si algún día necesitas
volver a comprimir alguno distinto. Guarda ahí también los originales de los próximos
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

Este es de los pocos objetos que **no** es bilingüe a propósito — `nombre` e
`institucion` son títulos de credenciales reales, se muestran igual en los dos idiomas
(ver sección 0 más arriba).

No necesitas configurar nada más: si `archivo` termina en `.pdf`, la tarjeta abre el
PDF en pestaña nueva; si es `.jpg`/`.png`, abre una vista ampliada (lightbox) dentro
del sitio. Esa lógica vive en `src/lib/paths.ts` (`isPdf()`) y no hay que tocarla.

Si algún día quieres que un certificado quede sin archivo todavía, usa `archivo: null`
— la tarjeta se muestra pero no queda clicable.

---

## 3. Cambiar datos de perfil o contacto

Archivo: [`src/content/site.ts`](src/content/site.ts), objeto `PERFIL`:
`nombre`, `ciudad`, `email`, `github` son texto simple (no cambian entre idiomas).
`rol` es bilingüe: `{ es: "...", en: "..." }`.

El email se usa tal cual en el link `mailto:` de la sección de Contacto — no hay
formulario, así que ese campo es el único lugar donde vive tu correo de contacto.

---

## 4. Cambiar el stack, los tres ejes o las frases del Hero

- `src/content/skills.ts` → `EJES` (Backend/Frontend/Infraestructura — `titulo`,
  `texto` y cada item de `detalle` son bilingües), `STACK` (`grupo` y cada item de
  `items` son bilingües), `APRENDIENDO` (array de objetos bilingües).
- `src/content/site.ts` → `MARQUEE` (cinta de tecnologías — strings simples, no
  bilingüe) y `FRASES_PROMPT` (las frases que rotan en el Hero — array de objetos
  bilingües).

---

## 5. Agregar una sección nueva al menú (poco frecuente)

Si algún día agregas una sección completa (no solo contenido a una existente), hay que
tocar esto además del contenido:
1. `SECCIONES` en `src/content/site.ts` — agrega
   `{ id: "mi-seccion", nombre: { es: "...", en: "..." } }`.
2. El `id` de la sección en su componente (`<section id="mi-seccion" ...>`) tiene que
   coincidir exactamente con ese `id`, si no el menú no la va a poder scrollear hasta ahí.
3. `SectionHeader` (el título + nota que encabeza casi todas las secciones) recibe
   `etiqueta`, `titulo` y `nota` como objetos bilingües directamente — no strings sueltos.
4. Cualquier texto visible nuevo dentro de tu sección va envuelto en el componente
   `<Bi value={{ es: "...", en: "..." }} />` (de `src/components/ui/Bi.tsx`) en vez de
   texto plano.

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
- **Las reglas `html[lang="es"] [lang="en"] { display: none }` en `globals.css`** son
  las que hacen funcionar el botón de idioma — no las borres ni las muevas a un
  `.module.css` (ahí quedarían scopeadas y dejarían de aplicar al resto del sitio).
- El script de `layout.tsx` (`LOCALE_INIT_SCRIPT`, con `strategy="beforeInteractive"`)
  es el que evita que se vea un parpadeo del idioma equivocado al cargar la página. Si
  algún día el toggle "parpadea" en español antes de mostrar inglés, ese script es el
  primer sospechoso.

---

## 8. Pendientes actuales

- [ ] Imagen Open Graph (la que se ve al compartir el link en redes o WhatsApp)

Los cuatro ejes ya tienen proyecto real: CERBERUS, ProviderHub y PQRS.ai (X), Snapshot
(Y), Infraestructura AWS (Z). El sitio es bilingüe ES/EN desde septiembre de 2026.
