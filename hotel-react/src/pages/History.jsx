import SectionTitle from "../components/SectionTitle";
import chaleInicio from "../assets/chale-inicio.png";
import hotelAtual from "../assets/hotel-atual.png";
import Text from "../components/Text";

function History() {
  return (
    <div className="bg-light w-full min-h-screen pt-20 pb-40">
      {/* CONTAINER CENTRAL */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12">
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <SectionTitle>Nossa História</SectionTitle>
        </div>

        {/* BLOCO 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <Text>
              O Chalé Hotel nasceu de forma simples, como um refúgio à
              beira-mar, pensado para oferecer tranquilidade e conforto em meio
              à natureza. No início, era apenas um espaço acolhedor, onde cada
              detalhe era cuidadosamente preparado para proporcionar uma
              experiência única.
            </Text>

            <Text>
              Com o passar do tempo, o lugar começou a encantar cada vez mais
              visitantes. O ambiente, somado ao cuidado com cada hóspede,
              transformou aquele pequeno começo em algo muito maior.
            </Text>
          </div>

          <div>
            <img
              src={chaleInicio}
              alt="Chalé à beira-mar no início"
              className="w-full h-[320px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* BLOCO 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          <div className="order-2 md:order-1">
            <img
              src={hotelAtual}
              alt="Estrutura atual do hotel"
              className="w-full h-[320px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6 text-left order-1 md:order-2">
            <Text align="right">
              À medida que crescia, o Chalé Hotel manteve sua essência, mas
              passou a oferecer uma estrutura cada vez mais completa. Novos
              espaços foram sendo criados para atender diferentes perfis de
              visitantes, sempre com foco no conforto e na experiência.
            </Text>

            <Text align="right">
              Hoje, o hotel conta com ambientes amplos, áreas de lazer,
              restaurante próprio e espaços pensados para momentos de descanso e
              convivência. Tudo foi planejado para receber desde casais até
              grupos maiores com total comodidade.
            </Text>
          </div>
        </div>

        {/* FRASE FINAL */}
        <div className="mt-28 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-ocean-dark italic max-w-3xl mx-auto">
            “Do simples ao inesquecível, sem perder a essência.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
