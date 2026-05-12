function Container({ children, className = "", size = "default" }) {
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-5xl",
    lg: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        ${sizes[size]}
        mx-auto 
        px-6 sm:px-8 lg:px-12   
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;
