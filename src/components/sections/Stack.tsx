import { APRENDIENDO, STACK } from "@/content/skills";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <section id="stack" className="section">
      <SectionHeader
        etiqueta="Stack"
        titulo="Con qué trabajo"
        nota="Herramientas que uso, no una lista de todo lo que abrí una vez. Lo que estoy aprendiendo va aparte, porque decirlo es más honesto que fingir que ya lo domino."
      />

      <div className={styles.grid}>
        {STACK.map((grupo, i) => (
          <Reveal key={grupo.grupo} delay={i * 60}>
            <h3 className="group-title">{grupo.grupo}</h3>
            <div className="chips">
              {grupo.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.learning}>
        <h3 className="group-title">Aprendiendo ahora</h3>
        <div className="chips">
          {APRENDIENDO.map((item) => (
            <span className={`chip ${styles.wip}`} key={item}>
              <i aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}