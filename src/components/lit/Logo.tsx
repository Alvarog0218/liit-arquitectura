import { Link } from "@tanstack/react-router";
import logo from "@/assets/Logo-liit-negro.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <img src={logo} alt="LIIT" width={250} height={250} className="h-10 w-10 object-contain" />
      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/70">
        Arquitectura
      </span>
    </Link>
  );
}
