function SectionTitle({ children, size = "title", className = "" }) {
  const sizes = {
    title: "text-2xl md:text-3xl",
    subtitle: "text-lg md:text-xl",
  };

  return (
    <h2
      className={`
        ${sizes[size]}
        text-center
        text-primary
        font-semibold
        mb-10
        mt-10
        ${className}
      `}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
