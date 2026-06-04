import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import { heroProject } from "@/data/projects";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes Somos — LIIT Arquitectura" },
      {
        name: "description",
        content:
          "En LIIT transformamos ideas en espacios con intención, carácter y valor. Conoce nuestro equipo y nuestro proceso.",
      },
      { property: "og:title", content: "Quiénes Somos · LIIT Arquitectura" },
      { property: "og:description", content: "Espacios con intención. Diseño con carácter." },
    ],
  }),
  component: QuienesSomos,
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

function QuienesSomos() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24">
      {/* Header / Introducción */}
      <header className="mb-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Sobre LIIT</span>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            Transformamos ideas en espacios que se viven, se sienten y se recuerdan.
          </h1>
        </div>
        <div className="md:col-span-5 md:pt-8">
          <p className="text-foreground/70">
            Diseñamos proyectos residenciales y comerciales donde estética, funcionalidad y
            experiencia se integran para crear lugares con identidad.
          </p>
        </div>
      </header>

      <Reveal>
        <div className="aspect-[16/7] overflow-hidden">
          <img
            src={heroProject.image}
            alt="Proyecto residencial de LIIT"
            loading="lazy"
            width={1600}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>

      {/* Propósito */}
      <section className="mt-24 grid gap-16 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl">Para hogares</h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Diseñamos hogares que se sienten propios: espacios cálidos, funcionales y pensados para
            mejorar la forma en la que habitas tu día a día. Una casa no debería ser solo bonita;
            debería hablar de ti, adaptarse a tu ritmo y hacerte sentir en el lugar correcto.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl">Para negocios</h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Diseñamos espacios comerciales que comunican confianza, presencia y valor. La
            distribución, la iluminación, los materiales, los recorridos y la atmósfera influyen en
            cómo tus clientes perciben tu marca y se relacionan con ella.
          </p>
        </Reveal>
      </section>

      <section className="mt-20 border-l-2 border-primary pl-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Nuestra diferencia
          </span>
          <p className="mt-5 max-w-4xl text-2xl leading-relaxed md:text-3xl">
            Cada espacio tiene un potencial único. En LIIT lo descubrimos, lo diseñamos y lo
            convertimos en realidad con intención, criterio y detalle.
          </p>
        </Reveal>
      </section>

      <BlueprintLine className="mt-24 h-3 w-full text-foreground/30" />

      {/* Metodología / Proceso */}
      <section className="mt-24">
        <header className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Metodología</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Nuestro Proceso</h2>
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
                  <h3 className="text-3xl md:text-4xl">{s.title}</h3>
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
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">¿Construimos juntos?</h2>
          <Link
            to="/contacto"
            className="mt-8 inline-flex bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-wine"
          >
            Iniciar conversación
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
