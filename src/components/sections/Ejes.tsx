import { EJES } from "@/content/skills";
import { AXIS_COLOR } from "@/lib/axis";
import Bi from "@/components/ui/Bi";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Ejes.module.css";

export default function Ejes() {
  return (
    <section id="enfoque" className="section">
      <SectionHeader
        etiqueta={{ es: "Enfoque", en: "Focus" }}
        titulo={{ es: "Tres ejes, un mismo sistema", en: "Three axes, one system" }}
        nota={{
          es: "No organizo el trabajo por stack de moda, sino por el eje del problema: lo que el usuario ve, la lógica que lo mueve y lo que lo mantiene arriba. Entender cómo encajan es lo que separa a un desarrollador de un arquitecto.",
          en: "I don't organize work by whatever stack is trendy, but by the axis of the problem: what the user sees, the logic that drives it, and what keeps it running. Understanding how they fit together is what separates a developer from an architect.",
        }}
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
              <Bi value={eje.titulo} as="h3" className={styles.title} />
            </div>
            <Bi value={eje.texto} as="p" className={styles.text} />
            <ul className={styles.list}>
              {eje.detalle.map((d) => (
                <li key={d.es}>
                  <Bi value={d} />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
