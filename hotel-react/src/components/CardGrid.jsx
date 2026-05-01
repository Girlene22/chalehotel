import Cards from "./Cards";

function CardGrid({ items }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <Cards
            key={index}
            image={item.img}
            title={item.titulo}
            category={item.desc}
            tipo={item.tipo}
            variant="main"
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
