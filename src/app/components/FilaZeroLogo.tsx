import logoImage from "../../imports/logo_princ.png";

interface FilaZeroLogoProps {
  variant?: "full" | "icon" | "text";
  className?: string;
  style?: React.CSSProperties;
}

export function FilaZeroLogo({ variant = "icon", className = "", style }: FilaZeroLogoProps) {
  if (variant === "icon") {
    return (
      <img
        src={logoImage}
        alt="FilaZero"
        className={className}
        style={{
          width: "auto",
          height: "150px",
          objectFit: "contain",
          objectPosition: "left center",
          clipPath: "inset(5% 70% 5% 5%)",
          transform: "scale(2.5)",
          transformOrigin: "left center",
          ...style,
        }}
      />
    );
  }

  if (variant === "text") {
    return (
      <img
        src={logoImage}
        alt="FilaZero"
        className={className}
        style={{
          width: "auto",
          height: "auto",
          objectFit: "contain",
          objectPosition: "left top",
          clipPath: "inset(10% 0% 35% 0%)",
          transform: "scale(2.5)",
          ...style,
        }}
      />
    );
  }

  return (
    <img
      src={logoImage}
      alt="FilaZero"
      className={className}
      style={{
        width: "auto",
        height: "80px",
        objectFit: "contain",
        objectPosition: "left top",
        clipPath: "inset(5% 0% 50% 0%)",
        ...style,
      }}
    />
  );
}
