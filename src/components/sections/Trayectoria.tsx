import { TRAYECTORIA } from "@/content/work";
import Bi from "@/components/ui/Bi";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Trayectoria.module.css";

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="section">
      <SectionHeader
        etiqueta={{ es: "Trayectoria", en: "Journey" }}
        titulo={{ es: "Cómo llegué acá", en: "How I got here" }}
      />

      <ol className={styles.line}>
        {TRAYECTORIA.map((hito, i) => (
          <Reveal key={hito.titulo.es} as="li" delay={i * 80} className={styles.item}>
            <span className={styles.node} aria-hidden="true" />
            <Bi value={hito.periodo} as="div" className={styles.period} />
            <Bi value={hito.titulo} as="h3" className={styles.title} />
            <Bi value={hito.lugar} as="p" className={styles.place} />
            <Bi value={hito.texto} as="p" className={styles.text} />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
