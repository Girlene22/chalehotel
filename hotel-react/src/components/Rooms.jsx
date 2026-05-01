import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";
import Button from "../components/Button";

import economico from "../assets/quarto-comum.jpg";
import conforto from "../assets/suite.jpg";
import luxo from "../assets/quarto.jpg";

function Rooms() {
  const handleReserva = (tipoQuarto) => {
    const PHONE = "5587999782324";

    const mensagem = `Olá! Gostaria de reservar o ${tipoQuarto}. Poderia me informar disponibilidade, valores e datas?`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="bg-light w-full min-h-screen pt-20 pb-40">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12">
        {/* TÍTULO */}
        <div className="text-center mb-20">
          <SectionTitle>Quartos</SectionTitle>
        </div>

        {/* ECONÔMICO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Text>
              O quarto econômico é ideal para quem busca conforto e praticidade
              com excelente custo-benefício.
            </Text>

            <p className="mt-4 text-lg font-bold text-accent">
              A partir de R$ 120 / noite
            </p>
          </div>

          <div className="relative">
            <img
              src={economico}
              alt="Quarto econômico"
              className="w-full h-[280px] object-cover rounded-2xl shadow-xl"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <Button
                variant="secondary"
                onClick={() => handleReserva("quarto econômico")}
                className="shadow-lg"
              >
                Reservar este quarto
              </Button>
            </div>
          </div>
        </div>

        {/* CONFORTO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 md:order-1 relative">
            <img
              src={conforto}
              alt="Quarto conforto"
              className="w-full h-[280px] object-cover rounded-2xl shadow-xl"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <Button
                variant="secondary"
                onClick={() => handleReserva("quarto conforto")}
                className="shadow-lg"
              >
                Reservar este quarto
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Text>
              O quarto conforto oferece mais espaço e comodidade para uma
              experiência mais relaxante.
            </Text>

            <p className="mt-4 text-lg font-bold text-accent">
              A partir de R$ 180 / noite
            </p>
          </div>
        </div>

        {/* LUXO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div>
            <Text>
              O quarto luxo oferece sofisticação e máximo conforto para uma
              estadia inesquecível.
            </Text>

            <p className="mt-4 text-lg font-bold text-accent">
              A partir de R$ 280 / noite
            </p>
          </div>

          <div className="relative">
            <img
              src={luxo}
              alt="Quarto luxo"
              className="w-full h-[280px] object-cover rounded-2xl shadow-xl"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <Button
                variant="secondary"
                onClick={() => handleReserva("quarto luxo")}
                className="shadow-lg"
              >
                Reservar este quarto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
