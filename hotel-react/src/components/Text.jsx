function Text({ children, className = "", align = "left" }) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <p
      className={`text-primary text-base md:text-lg mb-10 leading-relaxed ${
        alignment[align]
      } ${className}`}
    >
      {children}
    </p>
  );
}

export default Text;
