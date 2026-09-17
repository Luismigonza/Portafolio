"use client";

import { useCallback, useState } from "react";
import { FRASES_PROMPT, PERFIL } from "@/content/site";
import Bi from "@/components/ui/Bi";
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
        <span className={styles.k}>
          <Bi value={{ es: "topología", en: "topology" }} />
        </span>
        <span className={styles.v}>
          <Bi value={{ es: "geodésico · f2", en: "geodesic · f2" }} />
        </span>
      </div>

      <div className={`${styles.hud} ${styles.hudTr}`}>
        <span className={styles.k}>
          <Bi value={{ es: "nodos", en: "nodes" }} />
        </span>
        <span className={styles.v}>{stats.nodos}</span>
        <span className={styles.sep}>/</span>
        <span className={styles.k}>
          <Bi value={{ es: "enlaces", en: "links" }} />
        </span>
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
          <Bi value={PERFIL.rol} /> · {PERFIL.ciudad}
        </p>

        <h1 className={styles.title}>
          <span lang="es">
            Escribo software
            <span className={styles.line}>
              que otros pueden <em>mantener</em>.
            </span>
          </span>
          <span lang="en">
            I write software
            <span className={styles.line}>
              that others can <em>maintain</em>.
            </span>
          </span>
        </h1>

        <p className={styles.sub}>
          <span lang="es">
            Backend en .NET, frontend en Angular e infraestructura en contenedores.
            <br />
            En camino a arquitecto de software.
          </span>
          <span lang="en">
            Backend in .NET, frontend in Angular, and infrastructure in containers.
            <br />
            On the way to becoming a software architect.
          </span>
        </p>

        <div className={styles.prompt}>
          <span className={styles.sign}>›</span>
          <Typewriter frases={FRASES_PROMPT} />
        </div>

        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={() => goTo("trabajo")}>
            <Bi value={{ es: "Ver el trabajo", en: "See the work" }} />
          </button>
          <button className="btn btn-ghost" onClick={() => goTo("contacto")}>
            <Bi value={{ es: "Hablemos", en: "Let's talk" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
