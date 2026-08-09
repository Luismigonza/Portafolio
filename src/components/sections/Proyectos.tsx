import { PROYECTOS } from "@/content/work";
import SectionHeader from "@/components/ui/SectionHeader";
import ProyectosGrid from "./ProyectosGrid";

export default function Proyectos() {
  return (
    <section id="trabajo" className="section">
      <SectionHeader
        etiqueta="Trabajo"
        titulo="Proyectos"
        nota="Cada uno con su rol real y la decisión técnica que más pesó. Tres buenos explicados a fondo valen más que diez enumerados."
      />

      <ProyectosGrid proyectos={PROYECTOS} />
    </section>
  );
}
