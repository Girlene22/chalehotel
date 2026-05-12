import Carousel from "./Carousel";
import Button from "../components/Button";

function Hero() {
  const handleReserva = () => {
    const PHONE = "5587999782324";

    const mensagem = `Olá! Gostaria de reservar um quarto individual. Poderia me informar disponibilidade, valores e datas?`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[65vh] max-h-175 overflow-hidden">
      <Carousel />

      {/* BOTÃO EM CIMA DO BANNER */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Button variant="animated" onClick={handleReserva}>
            Fazer reserva
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
