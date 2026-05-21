import { Link } from "@tanstack/react-router";
import { BlueprintLine } from "./BlueprintLine";
import logo from "@/assets/Logo-liit-negro.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-wine text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <BlueprintLine className="mb-12 h-4 w-full text-paper/40" />
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="LIIT"
                width={250}
                height={250}
                className="h-12 w-12 object-contain invert"
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-paper/70">
                Arquitectura
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
              Transformamos ideas en espacios que se viven, se sienten y se recuerdan. Diseño con
              intención, funcionalidad y carácter.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-sm border border-paper/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-paper/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Empresa hermana de <span className="text-paper">AMBOSS</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-paper/60">Navega</h4>
            <ul className="mt-4 space-y-2 text-sm">
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
                <Link to="/proceso" className="hover:text-primary">
                  Proceso
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-primary">
                  Nosotros
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
              <li>+00 000 000 000</li>
              <li>Instagram · Behance · LinkedIn</li>
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
