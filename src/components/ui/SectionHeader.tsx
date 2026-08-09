import Reveal from "./Reveal";

interface Props {
  etiqueta: string;
  titulo: React.ReactNode;
  nota?: string;
  grande?: boolean;
}

export default function SectionHeader({ etiqueta, titulo, nota, grande }: Props) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{etiqueta}</span>
      <h2 className={`h2 ${grande ? "h2-lg" : ""}`}>{titulo}</h2>
      {nota && <p className="section-note">{nota}</p>}
    </Reveal>
  );
}