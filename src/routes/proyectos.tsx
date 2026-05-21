import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import projResidencial from "@/assets/project-residencial.jpg";
import projComercial from "@/assets/project-comercial.jpg";
import projInterior from "@/assets/project-interior.jpg";
import projRemodel from "@/assets/project-remodelacion.jpg";
import projRender from "@/assets/project-render.jpg";
import projHosp from "@/assets/project-hospitalidad.jpg";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — LIT Arquitectura" },
      { name: "description", content: "Selección de proyectos de arquitectura, interiorismo y remodelación de LIT." },
      { property: "og:title", content: "Proyectos · LIT Arquitectura" },
      { property: "og:description", content: "Arquitectura contemporánea con identidad propia." },
    ],
  }),
  component: Proyectos,
});

const CATS = ["Todos", "Residencial", "Comercial", "Interiorismo", "Remodelación", "Render"] as const;

const projects = [
  { img: projResidencial, title: "Casa Mirador", cat: "Residencial", year: "2025", loc: "Valle Norte" },
  { img: projComercial, title: "Oficinas Forge", cat: "Comercial", year: "2024", loc: "Distrito Central" },
  { img: projInterior, title: "Apartamento Vino", cat: "Interiorismo", year: "2024", loc: "Centro Histórico" },
  { img: projRemodel, title: "Recámara Olivo", cat: "Remodelación", year: "2024", loc: "Lomas del Sur" },
  { img: projRender, title: "Villa Espejo", cat: "Render", year: "2025", loc: "Costa Pacífico" },
  { img: projHosp, title: "Bistró Roble", cat: "Comercial", year: "2023", loc: "Barrio Antiguo" },
];

function Proyectos() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("Todos");
  const list = filter === "Todos" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
      <header className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Portafolio</span>
        <h1 className="mt-4 text-5xl md:text-7xl">Proyectos</h1>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Cada proyecto es una oportunidad para experimentar, innovar y crear
          lugares que inspiran.
        </p>
        <BlueprintLine className="mt-10 h-3 w-full text-foreground/30" />
      </header>

      <div className="mb-10 flex flex-wrap gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-primary hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.title} variant="module" delay={(i % 3) * 0.1}>
            <article className="group relative cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                {/* persianas reveal */}
                <div className="pointer-events-none absolute inset-0 grid grid-cols-5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="origin-top scale-y-100 bg-ink/85 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-0"
                      style={{ transitionDelay: `${idx * 70}ms` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                    {p.cat} · {p.year}
                  </div>
                  <h3 className="mt-1 text-2xl">{p.title}</h3>
                  <div className="mt-1 text-sm text-foreground/60">{p.loc}</div>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Ver →
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
