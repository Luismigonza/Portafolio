import { TRAYECTORIA } from "@/content/work";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Trayectoria.module.css";

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="section">
      <SectionHeader etiqueta="Trayectoria" titulo="Cómo llegué acá" />

      <ol className={styles.line}>
        {TRAYECTORIA.map((hito, i) => (
          <Reveal key={hito.titulo} as="li" delay={i * 80} className={styles.item}>
            <span className={styles.node} aria-hidden="true" />
            <div className={styles.period}>{hito.periodo}</div>
            <h3 className={styles.title}>{hito.titulo}</h3>
            <p className={styles.place}>{hito.lugar}</p>
            <p className={styles.text}>{hito.texto}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}