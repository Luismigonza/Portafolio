"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { EJES } from "@/content/skills";
import type { EjeId, Proyecto } from "@/content/types";
import { AXIS_COLOR } from "@/lib/axis";
import { assetUrl } from "@/lib/paths";
import Reveal from "@/components/ui/Reveal";
import styles from "./Proyectos.module.css";

const EJE_TITULO = Object.fromEntries(EJES.map((e) => [e.eje, e.titulo])) as Record<EjeId, string>;

const EJES_ORDEN: EjeId[] = ["X", "Y", "Z"];

interface Props {
  proyectos: Proyecto[];
}

function TarjetaProyecto({
  p,
  i,
  onAbrir,
}: {
  p: Proyecto;
  i: number;
  onAbrir: (i: number) => void;
}) {
  return (
    <Reveal
      as="article"
      delay={(i % 6) * 70}
      className={styles.card}
      style={{ "--c": AXIS_COLOR[p.eje] } as CSSProperties}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() => onAbrir(i)}
        aria-haspopup="dialog"
      >
        <div className={styles.meta}>
          <span>{p.anio}</span>
          <span className={styles.state}>{p.estado}</span>
        </div>

        <h3 className={styles.name}>{p.nombre}</h3>
        <p className={styles.role}>{p.rol}</p>
        <p className={styles.summary}>{p.resumen}</p>

        {p.stack.length > 0 && (
          <div className={styles.stack}>
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        )}

        <span className={styles.cta}>
          Ver detalles <span aria-hidden="true">→</span>
        </span>
      </button>

      <div className={styles.edge} aria-hidden="true" />
    </Reveal>
  );
}

export default function ProyectosGrid({ proyectos }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [filtro, setFiltro] = useState<"todos" | EjeId>("todos");
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const proyecto = selected !== null ? proyectos[selected] : null;

  const grupos = EJES_ORDEN.map((eje) => ({
    eje,
    items: proyectos
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => p.eje === eje),
  })).filter((g) => g.items.length > 0);

  const grupoActivo = filtro === "todos" ? null : grupos.find((g) => g.eje === filtro) ?? null;

  const abrir = (i: number) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setImgIndex(0);
    setSelected(i);
  };

  const cerrar = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (selected === null) return;

    const dialog = dialogRef.current;
    document.body.style.overflow = "hidden";
    dialog?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
        triggerRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && dialog) {
        const focusables = dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className={styles.filtros} role="group" aria-label="Filtrar proyectos por eje">
        <button
          type="button"
          className={`${styles.filtroChip} ${filtro === "todos" ? styles.activo : ""}`}
          aria-pressed={filtro === "todos"}
          onClick={() => setFiltro("todos")}
        >
          Todos
        </button>
        {EJES_ORDEN.map((eje) => (
          <button
            key={eje}
            type="button"
            className={`${styles.filtroChip} ${filtro === eje ? styles.activo : ""}`}
            style={{ "--c": AXIS_COLOR[eje] } as CSSProperties}
            aria-pressed={filtro === eje}
            onClick={() => setFiltro(eje)}
          >
            {EJE_TITULO[eje]}
          </button>
        ))}
      </div>

      {filtro === "todos" &&
        grupos.map((g) => (
          <div key={g.eje} className={styles.grupo}>
            <div className={styles.grupoTitulo}>
              <span className={styles.grupoDot} style={{ "--c": AXIS_COLOR[g.eje] } as CSSProperties} />
              {EJE_TITULO[g.eje]}
            </div>
            <div className={styles.grid}>
              {g.items.map(({ p, i }) => (
                <TarjetaProyecto key={`${p.nombre}-${i}`} p={p} i={i} onAbrir={abrir} />
              ))}
            </div>
          </div>
        ))}

      {filtro !== "todos" &&
        (grupoActivo ? (
          <div className={styles.grid}>
            {grupoActivo.items.map(({ p, i }) => (
              <TarjetaProyecto key={`${p.nombre}-${i}`} p={p} i={i} onAbrir={abrir} />
            ))}
          </div>
        ) : (
          <p className={styles.sinResultados}>Todavía no hay proyectos en este eje.</p>
        ))}

      {proyecto && (
        <div className={styles.overlay} onClick={cerrar}>
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="proyecto-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            style={{ "--c": AXIS_COLOR[proyecto.eje] } as CSSProperties}
          >
            <button
              type="button"
              className={styles.close}
              onClick={cerrar}
              aria-label="Cerrar"
            >
              <span aria-hidden="true">✕</span>
            </button>

            {proyecto.video && (
              <video
                className={styles.video}
                src={assetUrl(proyecto.video)}
                controls
                playsInline
              />
            )}

            {proyecto.imagenes.length > 0 && (
              <div className={styles.gallery}>
                <div className={styles.mediaFrame}>
                  <Image
                    key={imgIndex}
                    src={assetUrl(proyecto.imagenes[imgIndex])}
                    alt={`${proyecto.nombre} — captura ${imgIndex + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 640px"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {proyecto.imagenes.length > 1 && (
                  <div className={styles.mediaNav}>
                    <button
                      type="button"
                      onClick={() =>
                        setImgIndex(
                          (v) => (v - 1 + proyecto.imagenes.length) % proyecto.imagenes.length
                        )
                      }
                      aria-label="Imagen anterior"
                    >
                      ‹
                    </button>
                    <span>
                      {imgIndex + 1} / {proyecto.imagenes.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => setImgIndex((v) => (v + 1) % proyecto.imagenes.length)}
                      aria-label="Imagen siguiente"
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className={styles.dialogBody}>
              <div className={styles.meta}>
                <span>{proyecto.anio}</span>
                <span className={styles.state}>{proyecto.estado}</span>
              </div>

              <h3 id="proyecto-modal-title" className={styles.name}>
                {proyecto.nombre}
              </h3>
              <p className={styles.role}>{proyecto.rol}</p>
              <p className={styles.summary}>{proyecto.resumen}</p>

              {proyecto.stack.length > 0 && (
                <div className={styles.stack}>
                  {proyecto.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              )}

              {(proyecto.enlace || proyecto.repo) && (
                <div className={styles.links}>
                  {proyecto.enlace && (
                    <a
                      className={styles.link}
                      href={proyecto.enlace}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Abrir sitio <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {proyecto.repo && (
                    <a
                      className={styles.link}
                      href={proyecto.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver repositorio <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
