import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeDollarSign,
  Building2,
  ClipboardCheck,
  Compass,
  Eye,
  FileCheck2,
  Hammer,
  Layers,
} from "lucide-react";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — LIIT Arquitectura" },
      {
        name: "description",
        content:
          "Arquitectura, diseño, construcción, remodelación, visualización 3D, consultorías, curadurías y presupuestos de obra.",
      },
      { property: "og:title", content: "Servicios · LIIT Arquitectura" },
      { property: "og:description", content: "Lo que hacemos por tu espacio." },
    ],
  }),
  component: Servicios,
});

const SERVICES = [
  {
    icon: Compass,
    title: "Arquitectura",
    desc: "Diseñamos propuestas arquitectónicas pensadas para transformar ideas en espacios funcionales, memorables y con identidad.",
  },
  {
    icon: Layers,
    title: "Diseño",
    desc: "Creamos interiores y ambientes que reflejan tu estilo, tus necesidades y la experiencia que quieres transmitir.",
  },
  {
    icon: Building2,
    title: "Construcción",
    desc: "Acompañamos la materialización del proyecto cuidando el proceso, las decisiones técnicas y cada detalle de ejecución.",
  },
  {
    icon: Hammer,
    title: "Remodelación",
    desc: "Renovamos hogares, locales y espacios comerciales para hacerlos más funcionales, atractivos y memorables.",
  },
  {
    icon: Eye,
    title: "Visualización en 3D",
    desc: "Desarrollamos modelos, renders e imágenes arquitectónicas para ver el espacio antes de hacerlo realidad.",
  },
  {
    icon: ClipboardCheck,
    title: "Consultorías",
    desc: "Te orientamos con claridad para tomar decisiones sobre viabilidad, distribución, materiales, alcance y ejecución.",
  },
  {
    icon: FileCheck2,
    title: "Trámite ante Curadurías",
    desc: "Gestionamos documentación y criterios técnicos para que el proyecto avance con mayor orden y seguridad.",
  },
  {
    icon: BadgeDollarSign,
    title: "Presupuestos de obra",
    desc: "Estructuramos presupuestos claros para entender costos, prioridades y decisiones antes de iniciar la ejecución.",
  },
];

function Servicios() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-8 pb-24">
      <header className="mb-12 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Lo que hacemos</span>
        <h1 className="mt-4 text-5xl md:text-7xl">Servicios</h1>
        <p className="mt-4 text-foreground/70">
          Un buen diseño puede cambiar la forma en la que vives, trabajas o recibes a tus clientes.
          Por eso cada proyecto inicia con escucha, análisis y una mirada profunda sobre cómo
          aprovechar mejor cada metro cuadrado.
        </p>
        <BlueprintLine className="mt-10 h-3 w-full text-foreground/30" />
      </header>

      <div className="grid gap-px bg-border">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} variant="module" delay={(i % 4) * 0.1} className="bg-background">
              <div className="group flex h-full flex-col justify-between p-10 transition-colors hover:bg-primary hover:text-primary-foreground">
                <div className="flex items-center justify-between">
                  <s.icon
                    className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground"
                    strokeWidth={1.2}
                  />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 group-hover:text-primary-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 group-hover:text-primary-foreground/85">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-24 border border-border bg-card p-10 md:p-16">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl">¿No sabes por dónde empezar?</h2>
            <p className="mt-3 text-foreground/70">
              Tu espacio tiene más potencial del que imaginas. Te ayudamos a convertirlo en diseño,
              experiencia y valor.
            </p>
          </div>
          <Link
            to="/contacto"
            className="inline-flex justify-center bg-primary px-6 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-wine"
          >
            Hablemos →
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
