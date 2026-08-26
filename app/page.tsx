import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Accommodations from "@/components/Accommodations";
import BuildStay from "@/components/BuildStay";
import Gastronomy from "@/components/Gastronomy";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Experience />
        <Accommodations />
        <BuildStay />
        <Gastronomy />
        <Experiences />
        <Gallery />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
