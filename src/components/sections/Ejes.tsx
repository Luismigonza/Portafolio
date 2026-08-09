import { EJES } from "@/content/skills";
import { AXIS_COLOR } from "@/lib/axis";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Ejes.module.css";

export default function Ejes() {
  return (
    <section id="enfoque" className="section">
      <SectionHeader
        etiqueta="Enfoque"
        titulo="Tres ejes, un mismo sistema"
        nota="No organizo el trabajo por stack de moda, sino por el eje del problema: lo que el usuario ve, la lógica que lo mueve y lo que lo mantiene arriba. Entender cómo encajan es lo que separa a un desarrollador de un arquitecto."
      />

      <div className={styles.grid}>
        {EJES.map((eje, i) => (
          <Reveal
            key={eje.eje}
            as="article"
            delay={i * 90}
            className={styles.card}
            style={{ "--c": AXIS_COLOR[eje.eje] } as React.CSSProperties}
          >
            <div className={styles.head}>
              <span className={styles.letter}>{eje.eje}</span>
              <h3 className={styles.title}>{eje.titulo}</h3>
            </div>
            <p className={styles.text}>{eje.texto}</p>
            <ul className={styles.list}>
              {eje.detalle.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}