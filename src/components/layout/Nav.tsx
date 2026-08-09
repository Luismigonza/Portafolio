"use client";

import { useMemo, useState } from "react";
import { PERFIL, SECCIONES } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => SECCIONES.map((s) => s.id), []);
  const active = useActiveSection(ids);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={styles.nav}>
      <button className={styles.brand} onClick={() => goTo("inicio")}>
        <span className={styles.dot} />
        <span>{PERFIL.handle}</span>
      </button>

      <nav className={`${styles.links} ${open ? styles.open : ""}`}>
        {SECCIONES.slice(1).map((s) => (
          <button
            key={s.id}
            className={`${styles.link} ${active === s.id ? styles.active : ""}`}
            onClick={() => goTo(s.id)}
          >
            {s.nombre}
          </button>
        ))}
      </nav>

      <button
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <span />
        <span />
      </button>
    </header>
  );
}