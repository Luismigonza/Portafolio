import { CERTIFICACIONES } from "@/content/certificaciones";
import SectionHeader from "@/components/ui/SectionHeader";
import CertificacionesGrid from "./CertificacionesGrid";

export default function Certificaciones() {
  return (
    <section id="certificaciones" className="section">
      <SectionHeader
        etiqueta="Certificaciones"
        titulo="Lo que he validado"
        nota="Formación formal y cursos puntuales — cada uno con su respaldo."
      />

      <CertificacionesGrid certificaciones={CERTIFICACIONES} />
    </section>
  );
}
