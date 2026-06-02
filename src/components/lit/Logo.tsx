import { Link } from "@tanstack/react-router";
import logo from "@/assets/Logo-liit-negro.png";

export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <img
        src={logo}
        alt="LIIT"
        width={250}
        height={250}
        className={`h-10 w-10 object-contain ${invert ? "brightness-0 invert" : ""}`}
      />
      <span
        className={`text-[10px] uppercase tracking-[0.3em] ${
          invert ? "text-white/85" : "text-foreground/70"
        }`}
      >
        Arquitectura
      </span>
    </Link>
  );
}
