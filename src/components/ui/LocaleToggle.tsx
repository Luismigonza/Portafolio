"use client";

import styles from "./LocaleToggle.module.css";

export default function LocaleToggle() {
  const toggle = () => {
    const next = document.documentElement.lang === "en" ? "es" : "en";
    document.documentElement.lang = next;
    try {
      localStorage.setItem("locale", next);
    } catch {
      // localStorage puede fallar en modo privado; el toggle sigue funcionando en la sesión
    }
    window.dispatchEvent(new Event("localechange"));
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Cambiar idioma / Switch language"
    >
      <span lang="es">EN</span>
      <span lang="en">ES</span>
    </button>
  );
}
