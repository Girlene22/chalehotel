function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "lg",
  className = "",
}) {
  const base =
    "group relative inline-flex items-center justify-center rounded-xl font-medium overflow-hidden transition-all duration-300 ease-out w-fit";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base",
  };

  const variants = {
    primary: "bg-ocean-dark text-white hover:bg-ocean",

    outline:
      "border border-accent text-accent hover:bg-ocean-dark hover:text-white",

    animated: "btn-animated bg-ocean-dark text-white hover:bg-ocean",

    animatedOutline: "btn-animated text-ocean-dark hover:text-white",
  };

  const style = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  if (href) {
    return (
      <a href={href} className={style}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={style}>
      {content}
    </button>
  );
}

export default Button;
