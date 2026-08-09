import { MARQUEE } from "@/content/site";
import styles from "./Marquee.module.css";

export default function Marquee() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {[0, 1].map((copia) => (
          <div className={styles.group} key={copia}>
            {MARQUEE.map((tech) => (
              <span className={styles.item} key={`${tech}-${copia}`}>
                {tech}
                <i className={styles.dot} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}