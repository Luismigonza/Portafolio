import { CERTIFICACIONES } from "@/content/certificaciones";
import SectionHeader from "@/components/ui/SectionHeader";
import CertificacionesGrid from "./CertificacionesGrid";

export default function Certificaciones() {
  return (
    <section id="certificaciones" className="section">
      <SectionHeader
        etiqueta={{ es: "Certificaciones", en: "Certifications" }}
        titulo={{ es: "Lo que he validado", en: "What I've validated" }}
        nota={{
          es: "Formación formal y cursos puntuales — cada uno con su respaldo.",
          en: "Formal education and specific courses — each one with its own proof.",
        }}
      />

      <CertificacionesGrid certificaciones={CERTIFICACIONES} />
    </section>
  );
}
