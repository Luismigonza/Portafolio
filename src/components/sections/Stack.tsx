import { APRENDIENDO, STACK } from "@/content/skills";
import Bi from "@/components/ui/Bi";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <section id="stack" className="section">
      <SectionHeader
        etiqueta={{ es: "Stack", en: "Stack" }}
        titulo={{ es: "Con qué trabajo", en: "What I work with" }}
        nota={{
          es: "Herramientas que uso, no una lista de todo lo que abrí una vez. Lo que estoy aprendiendo va aparte, porque decirlo es más honesto que fingir que ya lo domino.",
          en: "Tools I actually use, not a list of everything I've ever opened once. What I'm learning goes separately, because saying so is more honest than pretending I already master it.",
        }}
      />

      <div className={styles.grid}>
        {STACK.map((grupo, i) => (
          <Reveal key={grupo.grupo.es} delay={i * 60}>
            <Bi value={grupo.grupo} as="h3" className="group-title" />
            <div className="chips">
              {grupo.items.map((item) => (
                <span className="chip" key={item.es}>
                  <Bi value={item} />
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.learning}>
        <Bi value={{ es: "Aprendiendo ahora", en: "Learning now" }} as="h3" className="group-title" />
        <div className="chips">
          {APRENDIENDO.map((item) => (
            <span className={`chip ${styles.wip}`} key={item.es}>
              <i aria-hidden="true" />
              <Bi value={item} />
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
