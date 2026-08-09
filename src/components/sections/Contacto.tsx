import { PERFIL } from "@/content/site";
import Reveal from "@/components/ui/Reveal";
import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <Reveal>
        <span className="eyebrow">Contacto</span>
        <h2 className="h2 h2-lg">
          Busco dónde
          <br />
          seguir creciendo.
        </h2>
        <p className="section-note">
          Si tu equipo trabaja con .NET, Angular o ambos y necesita a alguien que pregunte
          por qué antes de escribir el primer archivo, hablemos.
        </p>

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