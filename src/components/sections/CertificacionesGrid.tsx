"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Certificacion } from "@/content/types";
import { assetUrl, isPdf } from "@/lib/paths";
import Reveal from "@/components/ui/Reveal";
import styles from "./Certificaciones.module.css";

interface Props {
  certificaciones: Certificacion[];
}

export default function CertificacionesGrid({ certificaciones }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const cert = selected !== null ? certificaciones[selected] : null;

  const abrir = (i: number) => {
    triggerRef.current = document.activeElement as HTMLElement;
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
      <div className={styles.grid}>
        {certificaciones.map((c, i) => {
          const esPdfFile = c.archivo ? isPdf(c.archivo) : false;

          const thumb = (
            <div className={styles.thumb}>
              {!c.archivo && <span className={styles.thumbEmpty}>Pendiente</span>}
              {c.archivo && esPdfFile && <span className={styles.thumbPdf}>PDF</span>}
              {c.archivo && !esPdfFile && (
                <Image
                  src={c.archivo}
                  alt={c.nombre}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          );

          const body = (
            <div className={styles.body}>
              <span className={styles.institucion}>{c.institucion}</span>
              <h3 className={styles.nombre}>{c.nombre}</h3>
              <span className={styles.anio}>{c.anio}</span>
              {c.archivo && (
                <span className={styles.cta}>
                  {esPdfFile ? "Ver PDF" : "Ver certificado"}{" "}
                  <span aria-hidden="true">{esPdfFile ? "↗" : "→"}</span>
                </span>
              )}
            </div>
          );

          return (
            <Reveal key={`${c.nombre}-${i}`} as="article" delay={i * 60} className={styles.card}>
              {c.archivo && esPdfFile && (
                <a
                  className={styles.trigger}
                  href={assetUrl(c.archivo)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {thumb}
                  {body}
                </a>
              )}
              {c.archivo && !esPdfFile && (
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => abrir(i)}
                  aria-haspopup="dialog"
                >
                  {thumb}
                  {body}
                </button>
              )}
              {!c.archivo && (
                <div className={styles.trigger}>
                  {thumb}
                  {body}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      {cert && cert.archivo && !isPdf(cert.archivo) && (
        <div className={styles.overlay} onClick={cerrar}>
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={styles.close} onClick={cerrar} aria-label="Cerrar">
              <span aria-hidden="true">✕</span>
            </button>

            <div className={styles.imageFrame}>
              <Image
                src={cert.archivo}
                alt={cert.nombre}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.dialogBody}>
              <span className={styles.institucion}>{cert.institucion}</span>
              <h3 id="cert-modal-title" className={styles.nombre}>
                {cert.nombre}
              </h3>
              <span className={styles.anio}>{cert.anio}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
