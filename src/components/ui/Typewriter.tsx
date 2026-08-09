"use client";

import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

export default function Typewriter({ frases }: { frases: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(frases[0]);
      return;
    }

    const current = frases[index % frases.length];
    const speed = deleting ? 28 : 55;

    if (!deleting && text === current) {
      const id = setTimeout(() => setDeleting(true), 1900);
      return () => clearTimeout(id);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }

    const id = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(id);
  }, [text, deleting, index, frases]);

  return (
    <span className={styles.typed}>
      {text}
      <span className={styles.caret} />
    </span>
  );
}