import { useState, useEffect, useRef } from "react";

import lazer from "../assets/lazer.jpg";
import cama from "../assets/suite.jpg";
import cafeDaManha from "../assets/cafe-da-manha.jpg";
import piscina2 from "../assets/piscina2.jpg";
import costela from "../assets/costela.jpg";
import pizza from "../assets/pizza.jpg";
import vista from "../assets/pets.jpg";
import sinuca from "../assets/sinuca.jpg";

function Carousel() {
  const imagens = [
    lazer,
    cama,
    cafeDaManha,
    piscina2,
    costela,
    sinuca,
    pizza,
    vista,
  ].filter(Boolean);

  const [index, setIndex] = useState(0);

  const startX = useRef(0);
  const endX = useRef(0);
  const dragging = useRef(false);

  function proximo() {
    setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  }

  function anterior() {
    setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  }

  function irParaSlide(i) {
    setIndex(i);
  }

  /* autoplay */
  useEffect(() => {
    if (imagens.length === 0) return;

    const intervalo = setInterval(() => {
      setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalo);
  }, [imagens.length]);

  /* drag */
  function handleMouseDown(e) {
    dragging.current = true;
    startX.current = e.clientX;
  }

  function handleMouseMove(e) {
    if (!dragging.current) return;
    endX.current = e.clientX;
  }

  function handleMouseUp() {
    if (!dragging.current) return;

    dragging.current = false;

    const distancia = startX.current - (endX.current || startX.current);

    if (distancia > 50) proximo();
    if (distancia < -50) anterior();

    startX.current = 0;
    endX.current = 0;
  }

  if (imagens.length === 0) {
    return <p>nenhuma imagem encontrada</p>;
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* TRACK */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            draggable="false"
            alt=""
            className="w-full h-full shrink-0 object-cover object-center pointer-events-none"
          />
        ))}
      </div>

      {/* BOTÃO ESQUERDA */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          anterior();
        }}
        className="absolute top-1/2 left-3 -translate-y-1/2 
                   bg-accent/50 hover:bg-accent 
                   text-white w-10 h-10 rounded-full 
                   flex items-center justify-center text-xl font-bold transition"
      >
        ‹
      </button>

      {/* BOTÃO DIREITA */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          proximo();
        }}
        className="absolute top-1/2 right-3 -translate-y-1/2 
                   bg-accent/50 hover:bg-accent 
                   text-white w-10 h-10 rounded-full 
                   flex items-center justify-center text-xl font-bold transition"
      >
        ›
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {imagens.map((_, i) => (
          <span
            key={i}
            onClick={() => irParaSlide(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition
              ${i === index ? "bg-yellow-200 scale-110" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
