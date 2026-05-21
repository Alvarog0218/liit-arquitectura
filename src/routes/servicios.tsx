import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Layers, Ruler, Hammer, Eye, Building2 } from "lucide-react";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — LIT Arquitectura" },
      { name: "description", content: "Diseño arquitectónico, interiorismo, remodelación, render y dirección de obra." },
      { property: "og:title", content: "Servicios · LIT Arquitectura" },
      { property: "og:description", content: "Bloques que se ensamblan en tu espacio." },
    ],
  }),
  component: Servicios,
});

const SERVICES = [
  { icon: Compass, title: "Diseño arquitectónico", desc: "Proyectos integrales desde el concepto hasta la licencia, pensando cada metro como una experiencia." },
  { icon: Layers, title: "Interiorismo", desc: "Atmósferas interiores con identidad, materialidad y luz cuidadosamente calibradas." },
  { icon: Hammer, title: "Remodelación", desc: "Transformamos espacios existentes respetando su esencia y elevando su carácter." },
  { icon: Eye, title: "Consultoría", desc: "Asesoría arquitectónica para decisiones críticas: viabilidad, programa, anteproyecto." },
  { icon: Building2, title: "Renderización 3D", desc: "Visualizaciones fotorrealistas que comunican el proyecto antes de construirlo." },
  { icon: Ruler, title: "Dirección de obra", desc: "Acompañamiento técnico para que la obra construida iguale al proyecto diseñado." },
];

function Servicios() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
      <header className="mb-12 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Qué hacemos</span>
        <h1 className="mt-4 text-5xl md:text-7xl">Servicios</h1>
        <p className="mt-4 text-foreground/70">
          Seis módulos que se ensamblan en tu proyecto. Tomamos los que
          necesitas y los integramos en una sola visión.
        </p>
        <BlueprintLine className="mt-10 h-3 w-full text-foreground/30" />
      </header>

      <div className="grid gap-px bg-border">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} variant="module" delay={(i % 3) * 0.1} className="bg-background">
              <div className="group flex h-full flex-col justify-between p-10 transition-colors hover:bg-primary hover:text-primary-foreground">
                <div className="flex items-center justify-between">
                  <s.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" strokeWidth={1.2} />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 group-hover:text-primary-foreground/70">
                    0{i + 1}
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
              Agenda una consulta inicial sin compromiso. Te ayudamos a
              traducir tu idea en un plan claro.
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
