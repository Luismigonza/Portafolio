"use client";

import { usePointerTrail } from "@/hooks/usePointerTrail";
import styles from "./Crosshair.module.css";

export default function Crosshair() {
  usePointerTrail();

  return (
    <div className={styles.wrap} aria-hidden="true">
      <span className={styles.v} />
      <span className={styles.h} />
    </div>
  );
}