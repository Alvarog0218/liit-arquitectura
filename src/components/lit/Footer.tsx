import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { BlueprintLine } from "./BlueprintLine";
import logo from "@/assets/Logo-liit-negro.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-wine text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="LIIT"
                width={250}
                height={250}
                className="h-[50.4px] w-[50.4px] object-contain invert"
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-paper/70">
                Arquitectura
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
              Transformamos ideas en espacios que se viven, se sienten y se recuerdan. Diseño con
              intención, funcionalidad y carácter.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-paper/60">Navega</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/quienes-somos" className="hover:text-primary">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="hover:text-primary">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/simulador" className="hover:text-primary">
                  Simulador
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-paper/60">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              <li>hola@liitarquitectura.com</li>
              <li className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/liitarquitectura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" strokeWidth={1.2} />
                </a>
                <a
                  href="https://wa.me/573015930601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.6c.9 0 1.7.1 2.5.4" />
                    <path d="M17 18c.3.5.3 1 .3 1.5 0 1.5-1.1 2.6-2.6 2.6s-2.6-1.1-2.6-2.6c0-.5 0-1 .3-1.5" />
                    <path d="M3 21l1.6-4.9C3.6 14.5 3 12.8 3 11c0-5 4-9 9-9s9 4 9 9-4 9-9 9c-1.8 0-3.5-.6-4.9-1.6L3 21z" />
                    <path d="M9 8c-.5 0-1 .5-1 1 0 .6.2 1.3.6 1.8 1.4 1.8 3.2 3.2 5 4.6.5.4 1.2.6 1.8.6 1.2 0 1.6-1.2 1.6-1.2s-1.4-1.4-1.4-1.4-.6-.4-1-.2c-.4.2-.8.8-.8.8s-1.4-1-2.4-2-2-2.4-2-2.4.6-.4.8-.8c.2-.4-.2-1-.2-1s-1.4-1.4-1.4-1.4z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-paper/15 pt-6 text-xs text-paper/50 md:flex-row">
          <span>
            © {new Date().getFullYear()} LIIT Arquitectura. Todos los derechos reservados.
          </span>
          <span>Diseño que se siente, se habita y se vive</span>
        </div>
      </div>
    </footer>
  );
}
