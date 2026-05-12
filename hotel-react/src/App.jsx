import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Packages from "./pages/Packages";
import History from "./pages/History";
import Rooms from "./components/Rooms";
import Contact from "./pages/Contact";

// IMPORTA OS DADOS
import { cardsCasal, cardsFamilia, cardsAmigos } from "./data/homeData";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/packages/casal"
          element={<Packages data={cardsCasal} titulo="Casal" />}
        />

        <Route
          path="/packages/familia"
          element={<Packages data={cardsFamilia} titulo="Família" />}
        />

        <Route
          path="/packages/amigos"
          element={<Packages data={cardsAmigos} titulo="Amigos" />}
        />

        <Route path="/historia" element={<History />} />

        <Route path="/quartos" element={<Rooms />} />

        <Route path="/contato" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
