function Rooms() {
  return (
    <>
      <h1>Nossos Serviços</h1>

      <div className="container-cards">
        <div className="card">
          <img src="/imagens/apartamento.jpg" />

          <h2>Quartos</h2>

          <p>Conheça nossas suítes</p>
        </div>

        <div className="card">
          <img src="/imagens/restaurante.jpg" />

          <h2>Gastronomia</h2>

          <p>Experiência completa</p>
        </div>

        <div className="card">
          <img src="/imagens/piscina.jpg" />

          <h2>Lazer</h2>

          <p>Momentos de descanso</p>
        </div>
      </div>
    </>
  );
}

export default Rooms;
