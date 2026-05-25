import { jsx as _jsx } from "react/jsx-runtime";
import logoImage from "../../imports/logo_princ.png";
export function FilaZeroLogo({ variant = "icon", className = "", style }) {
    if (variant === "icon") {
        return (_jsx("img", { src: logoImage, alt: "FilaZero", className: className, style: {
                width: "auto",
                height: "150px",
                objectFit: "contain",
                objectPosition: "left center",
                clipPath: "inset(5% 70% 5% 5%)",
                transform: "scale(2.5)",
                transformOrigin: "left center",
                ...style,
            } }));
    }
    if (variant === "text") {
        return (_jsx("img", { src: logoImage, alt: "FilaZero", className: className, style: {
                width: "auto",
                height: "auto",
                objectFit: "contain",
                objectPosition: "left top",
                clipPath: "inset(10% 0% 35% 0%)",
                transform: "scale(2.5)",
                ...style,
            } }));
    }
    return (_jsx("img", { src: logoImage, alt: "FilaZero", className: className, style: {
            width: "auto",
            height: "80px",
            objectFit: "contain",
            objectPosition: "left top",
            clipPath: "inset(5% 0% 50% 0%)",
            ...style,
        } }));
}
//# sourceMappingURL=FilaZeroLogo.js.map