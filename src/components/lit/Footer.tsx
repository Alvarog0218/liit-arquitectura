import { Link } from "@tanstack/react-router";
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
              <li>
                <a
                  href="https://www.instagram.com/liitarquitectura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-paper/15 pt-6 text-xs text-paper/50 md:flex-row">
          <span>
            © {new Date().getFullYear()} LIIT Arquitectura. Todos los derechos reservados.
          </span>
          <span>Diseño que se siente, se habita y se vive.</span>
        </div>
      </div>
    </footer>
  );
}
