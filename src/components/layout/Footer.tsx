import { PERFIL } from "@/content/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} {PERFIL.nombre}</span>
      <span className={styles.sep}>·</span>
      <span>{PERFIL.ciudad}</span>
      <span className={styles.sep}>·</span>
      <span>Construido con Next.js</span>
    </footer>
  );
}