"use client";

import { useEffect, useMemo, useState } from "react";
import { PERFIL, SECCIONES } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import styles from "./StatusBar.module.css";

export default function StatusBar() {
  const ids = useMemo(() => SECCIONES.map((s) => s.id), []);
  const active = useActiveSection(ids);
  const progress = useScrollProgress();
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("es-CO", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.bar}>
      <span className={`${styles.item} ${styles.live}`}>
        <i /> {active}
      </span>
      <span className={`${styles.item} ${styles.hideSm}`}>{PERFIL.rol.toLowerCase()}</span>
      <span className={styles.fill} />
      <span className={`${styles.item} ${styles.hideSm}`}>scroll {progress}%</span>
      <span className={styles.item}>{clock}</span>
      <span className={styles.progress} style={{ width: `${progress}%` }} aria-hidden="true" />
    </div>
  );
}