import { PROYECTOS } from "@/content/work";
import { AXIS_COLOR } from "@/lib/axis";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Proyectos.module.css";

export default function Proyectos() {
  return (
    <section id="trabajo" className="section">
      <SectionHeader
        etiqueta="Trabajo"
        titulo="Proyectos"
        nota="Cada uno con su rol real y la decisión técnica que más pesó. Tres buenos explicados a fondo valen más que diez enumerados."
      />

      <div className={styles.grid}>
        {PROYECTOS.map((p, i) => (
          <Reveal
            key={`${p.nombre}-${i}`}
            as="article"
            delay={i * 70}
            className={styles.card}
            style={{ "--c": AXIS_COLOR[p.eje] } as React.CSSProperties}
          >
            <div className={styles.meta}>
              <span>{p.anio}</span>
              <span className={styles.state}>{p.estado}</span>
            </div>

            <h3 className={styles.name}>{p.nombre}</h3>
            <p className={styles.role}>{p.rol}</p>
            <p className={styles.summary}>{p.resumen}</p>

            <div className={styles.stack}>
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            {p.enlace && (
              <a className={styles.link} href={p.enlace} target="_blank" rel="noreferrer">
                Abrir sitio <span aria-hidden="true">↗</span>
              </a>
            )}

            <div className={styles.edge} aria-hidden="true" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}