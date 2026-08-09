import Chrome from "@/components/layout/Chrome";
import Footer from "@/components/layout/Footer";
import Contacto from "@/components/sections/Contacto";
import Ejes from "@/components/sections/Ejes";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Proyectos from "@/components/sections/Proyectos";
import Stack from "@/components/sections/Stack";
import Trayectoria from "@/components/sections/Trayectoria";

export default function Home() {
  return (
    <>
      <Chrome />
      <main>
        <Hero />
        <Marquee />
        <Ejes />
        <Stack />
        <Proyectos />
        <Trayectoria />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}