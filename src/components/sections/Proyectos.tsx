import { PROYECTOS } from "@/content/work";
import SectionHeader from "@/components/ui/SectionHeader";
import ProyectosGrid from "./ProyectosGrid";

export default function Proyectos() {
  return (
    <section id="trabajo" className="section">
      <SectionHeader
        etiqueta={{ es: "Trabajo", en: "Work" }}
        titulo={{ es: "Proyectos", en: "Projects" }}
        nota={{
          es: "Cada uno con su rol real y la decisión técnica que más pesó. Tres buenos explicados a fondo valen más que diez enumerados.",
          en: "Each one with my real role and the technical decision that mattered most. Three good ones explained in depth are worth more than ten listed out.",
        }}
      />

      <ProyectosGrid proyectos={PROYECTOS} />
    </section>
  );
}
