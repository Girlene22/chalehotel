import logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
import Container from "./Container";

function Header() {
  const links = [
    { name: "Início", path: "/" },
    { name: "História", path: "/historia" },
    { name: "Gastronomia", path: "/gastronomia" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className="w-full bg-foam shadow-sm">
      <Container className="flex items-center justify-between h-[70px] sm:h-[80px] md:h-[100px]">
        {/* LOGO */}
        <img
          src={logo}
          alt="Chalé Hotel"
          className="w-12 sm:w-16 md:w-24 lg:w-28"
        />

        {/* MENU */}
        <nav>
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-ocean-dark hover:text-[var(--color-accent)] transition font-semibold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
