"use client";

import { useCallback, useState } from "react";
import { FRASES_PROMPT, PERFIL } from "@/content/site";
import Typewriter from "@/components/ui/Typewriter";
import Viewport, { type ViewportStats } from "@/components/ui/Viewport";
import styles from "./Hero.module.css";

const INICIAL: ViewportStats = { nodos: 0, enlaces: 0, fps: 60, rot: "0° 0°" };

export default function Hero() {
  const [stats, setStats] = useState<ViewportStats>(INICIAL);

  const onStats = useCallback((s: ViewportStats) => setStats(s), []);

  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <Viewport onStats={onStats} />

      <div className={`${styles.hud} ${styles.hudTl}`}>
        <span className={styles.k}>topología</span>
        <span className={styles.v}>geodésico · f2</span>
      </div>

      <div className={`${styles.hud} ${styles.hudTr}`}>
        <span className={styles.k}>nodos</span>
        <span className={styles.v}>{stats.nodos}</span>
        <span className={styles.sep}>/</span>
        <span className={styles.k}>enlaces</span>
        <span className={styles.v}>{stats.enlaces}</span>
      </div>

      <div className={`${styles.hud} ${styles.hudBr}`}>
        <span className={styles.k}>rot</span>
        <span className={styles.v}>{stats.rot}</span>
        <span className={styles.sep}>/</span>
        <span className={styles.k}>fps</span>
        <span className={styles.v}>{stats.fps}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.eyebrow}>
          {PERFIL.rol} · {PERFIL.ciudad}
        </p>

        <h1 className={styles.title}>
          Escribo software
          <span className={styles.line}>
            que otros pueden <em>mantener</em>.
          </span>
        </h1>

        <p className={styles.sub}>
          Backend en .NET, frontend en Angular e infraestructura en contenedores.
          <br />
          En camino a arquitecto de software.
        </p>

        <div className={styles.prompt}>
          <span className={styles.sign}>›</span>
          <Typewriter frases={FRASES_PROMPT} />
        </div>

        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={() => goTo("trabajo")}>
            Ver el trabajo
          </button>
          <button className="btn btn-ghost" onClick={() => goTo("contacto")}>
            Hablemos
          </button>
        </div>
      </div>
    </section>
  );
}