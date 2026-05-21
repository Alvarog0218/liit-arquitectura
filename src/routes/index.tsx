import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Compass, Layers, Ruler } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import projResidencial from "@/assets/project-residencial.jpg";
import projComercial from "@/assets/project-comercial.jpg";
import projInterior from "@/assets/project-interior.jpg";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import { Reveal } from "@/components/lit/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIT Arquitectura — Diseñamos atmósferas" },
      { name: "description", content: "Estudio de arquitectura contemporánea. Diseño que se siente, se habita y se vive." },
      { property: "og:title", content: "LIT Arquitectura" },
      { property: "og:description", content: "Diseño que se siente, se habita y se vive." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedProjects />
      <ServicesPreview />
      <Amboss />
      <CtaBand />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPlan = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yElev = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <div className="relative mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-12 pb-24 md:grid-cols-12">
        <motion.div style={{ opacity }} className="md:col-span-6 z-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" /> Estudio de arquitectura
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Diseñamos <em className="not-italic text-primary">atmósferas</em>,
            sensaciones y formas de habitar.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
            Más que arquitectura — diseño que se siente, se habita y se vive.
            Creamos espacios contemporáneos que dialogan con la luz, los
            materiales y las personas.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/proyectos"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-wine"
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contacto"
              className="text-sm uppercase tracking-[0.2em] text-foreground/80 underline-offset-8 hover:text-primary hover:underline"
            >
              Hablemos
            </Link>
          </div>
        </motion.div>

        <div className="relative md:col-span-6 md:h-[600px]">
          {/* Layer 1: plan */}
          <motion.div style={{ y: yPlan }} className="absolute -left-8 top-4 hidden w-72 md:block">
            <BlueprintLine variant="plan" className="h-44 w-full text-olive" />
          </motion.div>
          {/* Layer 2: elevation */}
          <motion.div style={{ y: yElev }} className="absolute -bottom-4 -right-4 hidden w-80 md:block">
            <BlueprintLine variant="elevation" className="h-36 w-full text-ink/60" />
          </motion.div>
          {/* Layer 3: photo */}
          <motion.div style={{ y: yPhoto }} className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full">
            <div className="curtain-reveal in-view h-full w-full">
              <img
                src={heroImg}
                alt="Interior arquitectónico contemporáneo"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-wine/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
              Proyecto 001 / Residencia Luz
            </div>
          </motion.div>
        </div>
      </div>
      <BlueprintLine className="h-3 w-full text-foreground/30" />
    </section>
  );
}

function Manifesto() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32 text-center">
      <Reveal>
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Manifiesto</span>
        <p className="mt-8 text-2xl leading-relaxed text-foreground md:text-4xl md:leading-snug">
          Creemos en los espacios que cuentan historias, que despiertan
          sensaciones y que se adaptan a nuevas formas de
          <em className="not-italic text-primary"> vivir, trabajar y crear</em>.
        </p>
      </Reveal>
    </section>
  );
}

const featured = [
  { img: projResidencial, title: "Casa Mirador", tag: "Residencial", year: "2025" },
  { img: projComercial, title: "Oficinas Forge", tag: "Comercial", year: "2024" },
  { img: projInterior, title: "Apartamento Vino", tag: "Interiorismo", year: "2024" },
];

function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Selección</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Proyectos recientes</h2>
        </div>
        <Link to="/proyectos" className="hidden text-sm uppercase tracking-[0.2em] hover:text-primary md:inline">
          Ver todo →
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.title} variant="module" delay={i * 0.1}>
            <Link to="/proyectos" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <div className="absolute inset-0 origin-center scale-100 transition-transform duration-[1200ms] group-hover:scale-105">
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
                </div>
                {/* curtain blinds overlay on hover */}
                <div className="pointer-events-none absolute inset-0 grid grid-cols-6">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="origin-top scale-y-100 bg-wine/85 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-0"
                      style={{ transitionDelay: `${idx * 60}ms` }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-paper">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-paper/70">{p.tag} · {p.year}</div>
                    <div className="mt-1 text-2xl">{p.title}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const services = [
  { icon: Compass, title: "Diseño arquitectónico", desc: "Proyectos desde cero, conceptualizados con tu visión." },
  { icon: Layers, title: "Interiorismo", desc: "Espacios interiores con identidad y atmósfera propia." },
  { icon: Ruler, title: "Dirección de obra", desc: "Acompañamiento técnico desde la idea hasta la entrega." },
];

function ServicesPreview() {
  return (
    <section className="bg-ink py-28 text-paper">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Servicios</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Bloques que se ensamblan en tu espacio.</h2>
        </div>
        <div className="grid gap-px bg-paper/10 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="module" delay={i * 0.12} className="bg-ink">
              <div className="group flex h-full flex-col justify-between p-10 transition-colors hover:bg-wine">
                <s.icon className="h-8 w-8 text-primary" strokeWidth={1.2} />
                <div className="mt-16">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-right">
          <Link to="/servicios" className="text-sm uppercase tracking-[0.2em] text-primary hover:text-paper">
            Todos los servicios →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Amboss() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="grid items-center gap-10 border border-border bg-card p-10 md:grid-cols-2 md:p-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Alianza</span>
            <h2 className="mt-3 text-3xl md:text-4xl">
              En sinergia con <span className="text-primary">AMBOSS</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/70">
              LIT Arquitectura es empresa hermana de AMBOSS. Juntos
              complementamos visión arquitectónica y ejecución integral
              para llevar cada proyecto al siguiente nivel.
            </p>
          </div>
          <div className="flex items-center justify-center border border-dashed border-border bg-muted/30 p-12">
            <div className="text-center">
              <div className="text-4xl tracking-[0.2em] text-foreground/80">AMBOSS</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                Logo placeholder
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
        <h2 className="max-w-2xl text-4xl md:text-5xl">
          ¿Tienes un espacio que quiere convertirse en experiencia?
        </h2>
        <Link
          to="/contacto"
          className="inline-flex items-center gap-3 border border-paper/40 px-8 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-paper hover:text-primary"
        >
          Empecemos <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
