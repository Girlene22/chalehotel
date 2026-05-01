import Carousel from "./Carousel";
import Button from "../components/Button";

function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[65vh] max-h-175 overflow-hidden">
      <Carousel />

      {/* BOTÃO EM CIMA DO BANNER */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Button variant="animated">Fazer reserva</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
