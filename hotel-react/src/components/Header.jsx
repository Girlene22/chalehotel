import { useState } from "react";
import logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
import Container from "./Container";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Início", path: "/" },
    { name: "História", path: "/historia" },
    { name: "Quartos", path: "/quartos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className="w-full bg-foam shadow-sm">
      <Container className="flex items-center justify-between h-17.5 sm:h-20 md:h-25">
        {/* LOGO */}
        <img
          src={logo}
          alt="Chalé Hotel"
          className="w-12 sm:w-16 md:w-24 lg:w-28"
        />

        {/* MENU DESKTOP */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-ocean-dark hover:text-accent transition font-semibold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* BOTÃO HAMBURGUER (mobile) */}
        <button
          className="md:hidden text-ocean-dark"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav className="md:hidden bg-foam border-t border-ocean-dark/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-ocean-dark hover:text-accent transition font-semibold text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
