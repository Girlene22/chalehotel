import Cards from "../components/Cards";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";

function Packages({ data = [], titulo }) {
  const navigate = useNavigate();

  return (
    <div className="py-20 text-center">
      <SectionTitle>{titulo}</SectionTitle>

      {/* CARDS */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-10">
          {data.map((card, index) => (
            <Cards key={index} {...card} />
          ))}
        </div>
      </div>

      {/* BOTÃO CENTRALIZADO EMBAIXO */}
      <div className="flex justify-center mt-10">
        <Button
          onClick={() => navigate(-1)}
          variant="animatedOutline"
          className="flex items-center gap-2"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition"
          />
          Voltar
        </Button>
      </div>
    </div>
  );
}

export default Packages;
