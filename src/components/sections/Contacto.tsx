import { PERFIL } from "@/content/site";
import Bi from "@/components/ui/Bi";
import Reveal from "@/components/ui/Reveal";
import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <Reveal>
        <Bi value={{ es: "Contacto", en: "Contact" }} as="span" className="eyebrow" />
        <h2 className="h2 h2-lg">
          <span lang="es">
            Busco dónde
            <br />
            seguir creciendo.
          </span>
          <span lang="en">
            Looking for where
            <br />
            to keep growing.
          </span>
        </h2>
        <Bi
          value={{
            es: "Si tu equipo trabaja con .NET, Angular o ambos y necesita a alguien que pregunte por qué antes de escribir el primer archivo, hablemos.",
            en: "If your team works with .NET, Angular, or both, and needs someone who asks why before writing the first file, let's talk.",
          }}
          as="p"
          className="section-note"
        />

        <div className={styles.actions}>
          <a className="btn btn-primary" href={`mailto:${PERFIL.email}`}>
            {PERFIL.email}
          </a>
          <a className="btn btn-ghost" href={PERFIL.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
