import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/simulador", label: "Simulador" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proceso", label: "Proceso" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-white/15 bg-white/[0.04] shadow-[0_12px_32px_rgba(54,40,40,0.08)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.08)_42%,rgba(255,255,255,0.02))]" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo invert />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-sm uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          className="text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="relative flex flex-col gap-4 border-t border-white/15 bg-white/[0.04] px-6 py-6 text-white backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em] text-white/80"
              activeProps={{ className: "text-white" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
