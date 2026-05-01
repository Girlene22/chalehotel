import Hero from "../components/Hero";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import Map from "../components/Map";
import { servicos, pacotes } from "../data/homeData";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Hero />

      {/* PACOTES */}
      <Section title="Pacotes">
        <CardGrid items={pacotes} />
      </Section>

      {/* SERVIÇOS */}
      <Services items={servicos} />

      {/* LOCALIZAÇÃO */}
      <Section title="Localização">
        <Map location="Olinda" />
      </Section>
    </>
  );
}

export default Home;
