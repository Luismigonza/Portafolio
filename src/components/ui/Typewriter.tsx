"use client";

import { useEffect, useState } from "react";
import type { Bilingue } from "@/content/types";
import styles from "./Typewriter.module.css";

function currentLocale(): "es" | "en" {
  if (typeof document === "undefined") return "es";
  return document.documentElement.lang === "en" ? "en" : "es";
}

export default function Typewriter({ frases }: { frases: Bilingue[] }) {
  const [locale, setLocale] = useState<"es" | "en">("es");
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setLocale(currentLocale());

    const onLocaleChange = () => {
      setLocale(currentLocale());
      setIndex(0);
      setText("");
      setDeleting(false);
    };

    window.addEventListener("localechange", onLocaleChange);
    return () => window.removeEventListener("localechange", onLocaleChange);
  }, []);

  useEffect(() => {
    const lista = frases.map((f) => f[locale]);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(lista[0]);
      return;
    }

    const current = lista[index % lista.length];
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
  }, [text, deleting, index, locale, frases]);

  return (
    <span className={styles.typed}>
      {text}
      <span className={styles.caret} />
    </span>
  );
}
