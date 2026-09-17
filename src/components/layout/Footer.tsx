import { PERFIL } from "@/content/site";
import Bi from "@/components/ui/Bi";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} {PERFIL.nombre}</span>
      <span className={styles.sep}>·</span>
      <span>{PERFIL.ciudad}</span>
      <span className={styles.sep}>·</span>
      <Bi value={{ es: "Construido con Next.js", en: "Built with Next.js" }} />
    </footer>
  );
}