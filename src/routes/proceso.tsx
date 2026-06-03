import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import { Reveal } from "@/components/lit/Reveal";

export const Route = createFileRoute("/proceso")({
  head: () => ({
    meta: [
      { title: "Proceso — LIIT Arquitectura" },
      { name: "description", content: "Escuchamos, entendemos y diseñamos con criterio." },
      { property: "og:title", content: "Proceso · LIIT Arquitectura" },
      { property: "og:description", content: "Cada proyecto se piensa desde cero." },
    ],
  }),
  component: Proceso,
});

const STEPS = [
  {
    n: "01",
    title: "Escuchamos",
    desc: "Partimos de tus ideas, necesidades, expectativas y la forma en la que quieres vivir, trabajar o recibir a tus clientes.",
    variant: "horizontal" as const,
  },
  {
    n: "02",
    title: "Entendemos",
    desc: "Analizamos el potencial del espacio, sus recorridos, condiciones, oportunidades y decisiones críticas.",
    variant: "plan" as const,
  },
  {
    n: "03",
    title: "Diseñamos",
    desc: "Creamos una propuesta con intención, criterio y detalle para integrar estética, funcionalidad y experiencia.",
    variant: "elevation" as const,
  },
  {
    n: "04",
    title: "Visualizamos",
    desc: "Usamos planos, modelos y renders para tomar decisiones con claridad antes de construir o remodelar.",
    variant: "plan" as const,
  },
  {
    n: "05",
    title: "Materializamos",
    desc: "Acompañamos la planeación, el presupuesto, los trámites y la ejecución para convertir la idea en realidad.",
    variant: "horizontal" as const,
  },
];

function Proceso() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-8 pb-24">
      <header className="mb-16 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Metodología</span>
        <h1 className="mt-4 text-5xl md:text-7xl">Proceso</h1>
        <p className="mt-4 text-foreground/70">
          No trabajamos con ideas genéricas. Cada proyecto se piensa desde cero para aprovechar
          mejor cada metro cuadrado y avanzar con mayor seguridad.
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
                    s.variant === "horizontal" ? "h-6 w-full text-olive" : "h-40 w-full text-ink/70"
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
