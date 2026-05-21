import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-baseline gap-2 ${className}`}>
      <span className="text-3xl font-normal tracking-tight text-primary">
        LIT
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/70">
        Arquitectura
      </span>
    </Link>
  );
}
