import { useNavigate } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { DollarSign } from "lucide-react";

function Cards({
  image,
  img,
  title,
  titulo,
  category,
  desc,
  link,
  tipo,
  price, // 👈 NOVO
  variant = "detail",
}) {
  const navigate = useNavigate();

  const finalImage = image || img;
  const finalTitle = title || titulo;
  const finalCategory = category || desc;

  const finalLink = link || (tipo && `/packages/${tipo}`);

  const isMainCard = variant === "main";

  const handleWhatsApp = () => {
    const PHONE = "5587999782324";

    const nomePacote = finalTitle;
    const categoria = tipo || "";

    const mensagem = `Olá! Tenho interesse no pacote ${nomePacote}${
      categoria ? ` (${categoria})` : ""
    }. Poderia me passar mais informações?`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center">
      {/* TÍTULO */}
      <SectionTitle size="subtitle" align="center" className="mb-4 mt-0">
        {finalTitle}
      </SectionTitle>

      {/* CARD */}
      <div
        className="card cursor-pointer w-72 h-96"
        onClick={() => finalLink && navigate(finalLink)}
      >
        <div className="content">
          {/* BACK */}
          <div className="back bg-black text-white">
            <div className="back-content flex flex-col h-full p-6">
              {isMainCard ? (
                <p className="text-base text-center opacity-90 mt-6">
                  Clique aqui para conhecer os pacotes dessa categoria
                </p>
              ) : (
                <div className="flex flex-col h-full justify-between">
                  {/* VANTAGENS */}
                  <div className="text-sm space-y-3 w-full flex flex-col">
                    {Array.isArray(finalCategory) ? (
                      finalCategory.map((item, i) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={i}
                            className="desc-item flex items-center gap-2"
                          >
                            {Icon && <Icon size={16} />}
                            <span>{item.text}</span>
                          </div>
                        );
                      })
                    ) : (
                      <p>{finalCategory}</p>
                    )}
                  </div>

                  {/* 💰 PREÇO (AGORA NO FINAL DO CARD) */}
                  {price && (
                    <div className="flex justify-end mt-4 text-lg font-bold">
                      <span>{price}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* FRONT */}
          <div className="front">
            <div
              className="img bg-cover bg-center h-40"
              style={{ backgroundImage: `url(${finalImage})` }}
            />

            <div className="front-content flex flex-col justify-between h-[calc(100%-10rem)] p-4">
              <div />

              <span className="text-sm text-gray-500 ver-mais text-center">
                Ver mais
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTÃO */}
      {!isMainCard && (
        <Button
          onClick={(e) => {
            e.stopPropagation(); // impede abrir o card junto
            handleWhatsApp();
          }}
          className="w-full mt-3 flex items-center justify-center btn-reserve"
        >
          <span>Reservar este pacote</span>
        </Button>
      )}
    </div>
  );
}

export default Cards;
