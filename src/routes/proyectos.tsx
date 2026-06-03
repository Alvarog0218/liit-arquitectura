import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import { Gallery } from "@/components/lit/Gallery";
import { PROJECT_CATEGORIES, projects, type Project } from "@/data/projects";
import { projectGalleryImages } from "@/data/projectImages";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — LIIT Arquitectura" },
      {
        name: "description",
        content:
          "Proyectos residenciales y comerciales donde estética, funcionalidad y experiencia se integran para crear lugares con identidad.",
      },
      { property: "og:title", content: "Proyectos · LIIT Arquitectura" },
      { property: "og:description", content: "Arquitectura contemporánea con identidad propia." },
    ],
  }),
  component: Proyectos,
});

function Proyectos() {
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const list = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);
  const imageTotal = projects.reduce((sum, project) => sum + project.images, 0);
  const planTotal = projects.reduce((sum, project) => sum + project.plans, 0);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24">
      <header className="mb-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Portafolio LIIT</span>
          <h1 className="mt-4 text-5xl md:text-7xl">Proyectos</h1>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Una selección de trabajos reales para hogares y negocios: espacios pensados desde cero,
            con intención, criterio y detalle.
          </p>
          <BlueprintLine className="mt-10 h-3 w-full text-foreground/30" />
        </div>
        <div className="grid grid-cols-3 border border-border md:col-span-4 md:self-end">
          <Metric value={projects.length} label="proyectos" />
          <Metric value={imageTotal} label="imágenes" />
          <Metric value={planTotal} label="planos" />
        </div>
      </header>

      <div className="mb-10 flex flex-wrap gap-2">
        {PROJECT_CATEGORIES.map((c) => (
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
            <article 
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(p)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                    {p.category} · {p.scope}
                  </div>
                  <h3 className="mt-1 text-2xl">{p.title}</h3>
                  <div className="mt-1 max-w-sm text-sm text-foreground/60">{p.summary}</div>
                </div>
                <div className="shrink-0 text-right text-[10px] uppercase tracking-[0.2em] text-primary">
                  <div>{p.images} img</div>
                  {p.plans > 0 && <div>{p.plans} planos</div>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Gallery
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        images={selectedProject ? projectGalleryImages[selectedProject.title] || [selectedProject.image] : []}
      />
    </div>
  );
}

function Metric({ value, label }: { value: number; label: string }) {
  return (
    <div className="border-r border-border p-4 last:border-r-0">
      <div className="font-display text-3xl text-primary">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-foreground/50">{label}</div>
    </div>
  );
}
