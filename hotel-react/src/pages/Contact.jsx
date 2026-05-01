import SectionTitle from "../components/SectionTitle";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-light w-full min-h-screen pt-20 pb-40">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* TÍTULO */}
        <div className="text-center mb-14">
          <SectionTitle>Contato</SectionTitle>
        </div>

        {/* TEXTO */}
        <div className="text-center mb-10">
          <p className="text-lg text-primary leading-relaxed">
            Estamos prontos para tornar sua experiência inesquecível. Entre em
            contato conosco para tirar dúvidas, consultar disponibilidade ou
            planejar sua próxima estadia.
          </p>
        </div>

        {/* DADOS */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* TELEFONE */}
          <div className="flex items-center gap-3 bg-white/70 p-4 rounded-lg shadow-sm">
            <FaPhone className="text-ocean-dark text-lg" />
            <div>
              <p className="font-medium text-ocean-dark text-sm">Telefone</p>
              <p className="text-gray-700 text-sm">(81) 99999-9999</p>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className="flex items-center gap-3 bg-white/70 p-4 rounded-lg shadow-sm">
            <FaPhone className="text-green-600 text-lg" />
            <div>
              <p className="font-medium text-ocean-dark text-sm">WhatsApp</p>
              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                className="text-gray-700 text-sm hover:text-green-600 transition"
              >
                (81) 99999-9999
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-3 bg-white/70 p-4 rounded-lg shadow-sm">
            <FaEnvelope className="text-ocean-dark text-lg" />
            <div>
              <p className="font-medium text-ocean-dark text-sm">Email</p>
              <p className="text-gray-700 text-sm">contato@chalehotel.com</p>
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="flex items-center gap-3 bg-white/70 p-4 rounded-lg shadow-sm">
            <FaInstagram className="text-pink-500 text-lg" />
            <div>
              <p className="font-medium text-ocean-dark text-sm">Instagram</p>
              <a
                href="#"
                className="text-gray-700 text-sm hover:text-pink-500 transition"
              >
                @chalehotel
              </a>
            </div>
          </div>

          {/* LOCALIZAÇÃO (linha inteira) */}
          <div className="flex items-center gap-3 bg-white/70 p-4 rounded-lg shadow-sm md:col-span-2">
            <FaMapMarkerAlt className="text-ocean-dark text-lg" />
            <div>
              <p className="font-medium text-ocean-dark text-sm">Localização</p>
              <p className="text-gray-700 text-sm">
                Litoral de Pernambuco, Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
