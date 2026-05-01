function Map({ location = "Olinda" }) {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={`https://www.google.com/maps?q=${location}&output=embed`}
        className="w-full h-112.5"
        loading="lazy"
        title="Mapa de localização"
      />
    </div>
  );
}

export default Map;
