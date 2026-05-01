import SectionTitle from "./SectionTitle";
import Text from "./Text";

function Services({ items }) {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6"
      style={{ backgroundColor: "var(--color-light)" }}
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto text-center px-4 md:px-8">
        <SectionTitle>Nossos Serviços</SectionTitle>

        <Text align="center">
          Além de estar localizado de frente para o mar, nosso hotel oferece
          diversas opções de lazer e conforto para você aproveitar ao máximo sua
          estadia, sem precisar sair do local.
        </Text>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:flex-nowrap md:justify-between mb-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2 w-1/4 md:w-auto"
              >
                <div className="flex items-center gap-1">
                  <Icon size={26} className="text-accent" />
                  {item.adicional && (
                    <span className="text-xs text-gray-500">*</span>
                  )}
                </div>

                <span className="text-xs md:text-sm text-center">
                  {item.nome}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-gray-500 italic mt-12">
          *Estes serviços possuem custo adicional. Consulte valores.
        </p>
      </div>
    </section>
  );
}

export default Services;
