import type { Bilingue } from "@/content/types";
import Bi from "./Bi";
import Reveal from "./Reveal";

interface Props {
  etiqueta: Bilingue;
  titulo: Bilingue;
  nota?: Bilingue;
  grande?: boolean;
}

export default function SectionHeader({ etiqueta, titulo, nota, grande }: Props) {
  return (
    <Reveal className="section-head">
      <Bi value={etiqueta} as="span" className="eyebrow" />
      <Bi value={titulo} as="h2" className={`h2 ${grande ? "h2-lg" : ""}`} />
      {nota && <Bi value={nota} as="p" className="section-note" />}
    </Reveal>
  );
}
