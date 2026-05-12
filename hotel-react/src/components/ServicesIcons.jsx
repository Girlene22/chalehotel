function ServicesSection({ items }) {
  return (
    <section
      className="
        min-h-screen
        flex flex-col justify-center
        py-16 px-6
      "
    >
      <div className="space-y-8 text-center max-w-5xl mx-auto">
        <p className="text-sm md:text-base text-gray-600">
          Além de estar localizado de frente para o mar, nosso hotel oferece
          diversas opções de lazer e conforto para você aproveitar ao máximo sua
          estadia, sem precisar sair do local.
        </p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:flex-nowrap md:justify-between">
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

                <span className="text-xs md:text-sm">{item.nome}</span>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-gray-500 italic">
          *Estes serviços possuem custo adicional. Consulte valores.
        </p>
      </div>
    </section>
  );
}

export default ServicesSection;
