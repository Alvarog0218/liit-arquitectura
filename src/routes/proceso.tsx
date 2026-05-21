import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import { Reveal } from "@/components/lit/Reveal";

export const Route = createFileRoute("/proceso")({
  head: () => ({
    meta: [
      { title: "Proceso — LIT Arquitectura" },
      { name: "description", content: "Cinco etapas para llevar tu idea desde el briefing hasta la entrega final." },
      { property: "og:title", content: "Proceso · LIT Arquitectura" },
      { property: "og:description", content: "Del briefing a la entrega: nuestro método." },
    ],
  }),
  component: Proceso,
});

const STEPS = [
  { n: "01", title: "Briefing", desc: "Escuchamos. Mapeamos tu visión, necesidades, presupuesto y ritmo de vida.", variant: "horizontal" as const },
  { n: "02", title: "Concepto", desc: "Traducimos la conversación en una idea rectora: forma, luz, materia, emoción.", variant: "plan" as const },
  { n: "03", title: "Anteproyecto", desc: "Definimos plantas, alzados y atmósferas. Validamos cada decisión contigo.", variant: "elevation" as const },
  { n: "04", title: "Proyecto ejecutivo", desc: "Resolvemos cada detalle constructivo y técnico para construir sin sorpresas.", variant: "plan" as const },
  { n: "05", title: "Obra y entrega", desc: "Dirigimos la obra junto a AMBOSS asegurando que lo construido iguale a lo diseñado.", variant: "horizontal" as const },
];

function Proceso() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
      <header className="mb-16 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Metodología</span>
        <h1 className="mt-4 text-5xl md:text-7xl">Proceso</h1>
        <p className="mt-4 text-foreground/70">
          Cinco etapas que se dibujan paso a paso. Cada fase es una capa que
          construye el proyecto final.
        </p>
      </header>

      <div className="relative">
        <div className="pointer-events-none absolute left-8 top-0 bottom-0 hidden w-px bg-border md:block" />
        <ol className="space-y-24">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-2">
                <div className="relative inline-flex h-16 w-16 items-center justify-center border border-primary bg-background text-primary">
                  <span className="text-lg">{s.n}</span>
                </div>
              </div>
              <Reveal className="md:col-span-5">
                <h2 className="text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-foreground/70">{s.desc}</p>
              </Reveal>
              <div className="md:col-span-5">
                <BlueprintLine
                  variant={s.variant}
                  className={
                    s.variant === "horizontal"
                      ? "h-6 w-full text-olive"
                      : "h-40 w-full text-ink/70"
                  }
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
