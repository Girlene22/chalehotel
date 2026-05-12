import SectionTitle from "../components/SectionTitle";
import restaurante from "../assets/comida-vegana.jpg";
import cafe from "../assets/cafe-da-manha.jpg";
import churrasco from "../assets/carne.jpg";
import Text from "../components/Text";

function Gastronomy() {
  return (
    <div className="bg-light w-full min-h-screen pt-20 pb-40">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12">
        {/* TÍTULO */}
        <div className="text-center mb-20">
          <SectionTitle>Gastronomia</SectionTitle>
        </div>

        {/* BLOCO 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Text>
              O Chalé Hotel oferece uma experiência gastronômica completa, com
              pratos preparados na hora por um chef dedicado. Cada refeição é
              pensada para unir qualidade, sabor e apresentação em cada detalhe.
              O cardápio inclui opções vegetarianas, veganas e também pratos
              completos, feitos com variedade e aquele toque especial que
              transforma a refeição em um momento único.
            </Text>
          </div>

          <div>
            <img
              src={restaurante}
              alt="Restaurante do hotel"
              className="w-full h-[280px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* BLOCO 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 md:order-1">
            <img
              src={cafe}
              alt="Café da manhã"
              className="w-full h-[280px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="order-1 md:order-2">
            <Text>
              O café da manhã incluso é preparado com todo cuidado para começar
              o dia da melhor forma. Com uma seleção variada de frutas frescas,
              pães, bolos e bebidas quentes, cada detalhe é pensado para
              oferecer uma experiência leve, saborosa e acolhedora, perfeita
              para aproveitar a manhã com tranquilidade.
            </Text>
          </div>
        </div>

        {/* BLOCO 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div>
            <Text>
              Para os amantes de uma boa carne, o rodízio na brasa é um dos
              grandes destaques do Chalé Hotel. Com cortes selecionados,
              preparados no ponto ideal e servidos com todo cuidado, a
              experiência combina sabor marcante, aroma irresistível e momentos
              perfeitos para aproveitar sem pressa.
            </Text>
          </div>

          <div>
            <img
              src={churrasco}
              alt="Churrasco na brasa"
              className="w-full h-[280px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gastronomy;
