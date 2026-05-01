function Footer() {
  return (
    <footer className="relative text-center ">
      {/* ONDAS (FICAM ACIMA DA BARRA) */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none z-10">
        {/* CAMADA 1 */}
        <svg
          className="block w-[200%] h-24 animate-wave-slow"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,67 
   C150,120 350,0 600,67 
   C850,120 1050,0 1200,67 
   L1200,100
   C1000,60 800,140 600,100
   C400,60 200,140 0,100 
   Z"
            className="fill-blue-300/45"
          />
        </svg>

        {/* CAMADA 2 */}
        <svg
          className="block w-[200%] h-24 -mt-16 animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,67 
   C150,120 350,0 600,67 
   C850,120 1050,0 1200,67 
   L1200,100
   C1000,60 800,140 600,100
   C400,60 200,140 0,100 
   Z"
            className="fill-blue-200/55"
          />
        </svg>

        {/* CAMADA 3 */}
        <svg
          className="block w-[200%] h-24 -mt-16 animate-wave-reverse"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,67 
   C150,120 350,0 600,67 
   C850,120 1050,0 1200,67 
   L1200,100
   C1000,60 800,140 600,100
   C400,60 200,140 0,100 
   Z"
            className="fill-blue-100/50"
          />
        </svg>
      </div>

      {/* BARRA FIXA (FICA POR BAIXO DAS ONDAS) */}
      <div className="relative z-0 pt-24 pb-10 bg-ocean-light/35">
        <p className="text-sm md:text-base tracking-wide text-ocean-dark">
          © 2026 Chalé Hotel
        </p>
      </div>
    </footer>
  );
}

export default Footer;
