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
              <li className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/liitarquitectura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <defs>
                      <radialGradient
                        id="insta_grad"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(5.82021 21.3533) rotate(-45) scale(26.6917)"
                      >
                        <stop stopColor="#FED373" />
                        <stop offset="0.25" stopColor="#F15245" />
                        <stop offset="0.5" stopColor="#D92E7F" />
                        <stop offset="0.75" stopColor="#9B36B7" />
                        <stop offset="1" stopColor="#515BD4" />
                      </radialGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.362-2.622-6.78-6.983-6.98C15.667.014 15.259 0 12 0zm0 2.16c3.203 0 3.584.012 4.85.07 3.252.148 4.706 1.614 4.854 4.853.058 1.265.07 1.646.07 4.85 0 3.203-.012 3.583-.07 4.849-.149 3.243-1.602 4.701-4.853 4.853-1.266.058-1.647.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.256-.149-4.707-1.614-4.854-4.853-.058-1.266-.07-1.647-.07-4.85 0-3.203.012-3.583.07-4.849.149-3.242 1.603-4.701 4.853-4.853 1.266-.058 1.647-.07 4.85-.07z"
                      fill="url(#insta_grad)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"
                      fill="white"
                    />
                    <circle cx="18.406" cy="5.594" r="1.44" fill="white" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/573015930601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path
                      fill="#25D366"
                      d="M12.031 0C5.391 0 .011 5.38.011 12.02c0 2.12.553 4.19 1.603 6.01L0 24l6.136-1.61c1.765 1.01 3.778 1.54 5.836 1.54 6.64 0 12.02-5.38 12.02-12.02 0-3.21-1.25-6.23-3.518-8.5A11.95 11.95 0 0 0 12.03 0z"
                    />
                    <path
                      fill="#FFF"
                      d="M12.03 21.84c-1.84 0-3.64-.49-5.21-1.42l-.37-.22-3.87 1.01 1.03-3.77-.24-.39a9.82 9.82 0 0 1-1.51-5.22c0-5.41 4.41-9.82 9.83-9.82 2.62 0 5.09 1.02 6.95 2.87a9.75 9.75 0 0 1 2.88 6.95c0 5.41-4.42 9.82-9.83 9.82zm5.75-7.85c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-.99 1.24-.18.21-.36.24-.68.08-.32-.16-1.34-.49-2.55-1.58-.94-.84-1.57-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.33-.26-.62-.52-.54-.71-.55-.18-.01-.39-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.75.33 1.34.52 1.8.67.76.24 1.45.21 1.99.13.6-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37z"
                    />
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
