import Image from "next/image";
import { SOBRE_MI } from "@/content/site";
import { assetUrl } from "@/lib/paths";
import Bi from "@/components/ui/Bi";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./SobreMi.module.css";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="section">
      <SectionHeader
        etiqueta={{ es: "Sobre mí", en: "About" }}
        titulo={{ es: "Quién escribe esto", en: "Who's writing this" }}
      />

      <div className={styles.grid}>
        <Reveal className={styles.fotoFrame}>
          <Image
            src={assetUrl(SOBRE_MI.foto)}
            alt="Luis Miguel González Berrio"
            fill
            sizes="(max-width: 780px) 100vw, 320px"
            className={styles.foto}
          />
          <div className={styles.duotone} aria-hidden="true" />
          <div className={styles.edge} aria-hidden="true" />
        </Reveal>

        <div className={styles.texto}>
          {SOBRE_MI.parrafos.map((p) => (
            <Bi key={p.es.slice(0, 20)} value={p} as="p" className={styles.parrafo} />
          ))}
        </div>
      </div>
    </section>
  );
}
