import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, BadgeDollarSign, Compass, Eye } from "lucide-react";
import { Reveal } from "@/components/lit/Reveal";
import { Gallery } from "@/components/lit/Gallery";
import { featuredProjects, type Project } from "@/data/projects";
import { projectGalleryImages } from "@/data/projectImages";
import ambossLogo from "@/assets/A.png";
import heroLiit from "@/assets/hero-liit.webp";
import heroLiitVertical from "@/assets/hero-liit-vertical.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIIT Arquitectura — Espacios con intención" },
      {
        name: "description",
        content:
          "Transformamos ideas en espacios residenciales y comerciales con identidad, funcionalidad y valor.",
      },
      { property: "og:title", content: "LIIT Arquitectura" },
      { property: "og:description", content: "Espacios con intención. Diseño con carácter." },
    ],
  }),
  component: Home,
});

function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedProjects onProjectSelect={setSelectedProject} />
      <ServicesPreview />
      <Amboss />

      <Gallery
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        images={selectedProject ? projectGalleryImages[selectedProject.title] || [selectedProject.image] : []}
      />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-screen w-full overflow-hidden">
      {/* Mobile Image */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 -z-20 h-[120%] w-full md:hidden"
      >
        <img
          src={heroLiitVertical}
          alt="Interior arquitectónico contemporáneo de LIIT"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Desktop Image */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 -z-20 hidden h-[120%] w-full md:block"
      >
        <img
          src={heroLiit}
          alt="Interior arquitectónico contemporáneo de LIIT"
          className="h-full w-full object-cover object-[center_30%]"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <motion.div style={{ opacity }} className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" /> Arquitectura que transforma
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Espacios con <em className="not-italic text-primary">intención</em>. Diseño con
            carácter.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
            En LIIT transformamos ideas en espacios que se viven, se sienten y se recuerdan.
            Diseñamos proyectos residenciales y comerciales donde estética, funcionalidad y
            experiencia se integran para crear lugares con identidad.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/proyectos"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-wine hover:text-white"
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contacto"
              className="group relative text-sm uppercase tracking-[0.2em] text-foreground/80 transition-all hover:text-white"
            >
              Hablemos
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32 text-center">
      <Reveal>
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Nuestra diferencia</span>
        <p className="mt-8 text-2xl font-light leading-relaxed text-foreground md:text-4xl md:leading-snug">
          No diseñamos solo para que un espacio se vea bien. Diseñamos para que funcione mejor,
          comunique valor y refleje la esencia de quien lo
          <em className="not-italic text-primary"> habita, usa o representa</em>.
        </p>
      </Reveal>
    </section>
  );
}

function FeaturedProjects({ onProjectSelect }: { onProjectSelect: (p: Project) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Selección</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Proyectos recientes</h2>
        </div>
        <Link
          to="/proyectos"
          className="hidden text-sm uppercase tracking-[0.2em] hover:text-primary md:inline"
        >
          Ver todo →
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.title} variant="module" delay={i * 0.1}>
            <div 
              className="group block cursor-pointer"
              onClick={() => onProjectSelect(p)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <div className="absolute inset-0 origin-center scale-100 transition-transform duration-[1200ms] group-hover:scale-105">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-paper">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-paper/70">
                      {p.category} · {p.scope}
                    </div>
                    <h3 className="mt-1 text-2xl">{p.title}</h3>
                  </div>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    icon: Compass,
    title: "Diseño con identidad",
    desc: "Propuestas arquitectónicas e interiores pensadas para reflejar tu estilo, tus necesidades y la experiencia que quieres transmitir.",
  },
  {
    icon: Eye,
    title: "Visualización 3D",
    desc: "Modelos, renders e imágenes arquitectónicas para ver tu espacio antes de hacerlo realidad.",
  },
  {
    icon: BadgeDollarSign,
    title: "Asesoría clara",
    desc: "Consultorías, presupuestos, trámites y decisiones técnicas para avanzar con mayor seguridad.",
  },
];

function ServicesPreview() {
  return (
    <section className="bg-card/30 py-28 text-paper">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Servicios</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Lo que hacemos por tu espacio.</h2>
        </div>
        <div className="grid gap-px bg-paper/10 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="module" delay={i * 0.12} className="bg-background">
              <div className="group flex h-full flex-col justify-between p-10 transition-colors hover:bg-beige hover:text-primary-foreground">
                <s.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" strokeWidth={1.2} />
                <div className="mt-16">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70 group-hover:text-primary-foreground/85">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-right">
          <Link
            to="/servicios"
            className="text-sm uppercase tracking-[0.2em] text-primary hover:text-paper"
          >
            Todos los servicios →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Amboss() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-24 pb-0">
      <Reveal>
        <a
          href="https://amboss-arquitectura.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block overflow-hidden border border-white/10 bg-[#1a1c1b] cursor-pointer"
        >
          {/* Imagen de fondo expansiva */}
          <div className="absolute inset-0">
            <img
              src="https://amboss-arquitectura.vercel.app/assets/hero-C089cPV6.jpg"
              alt="Hero de AMBOSS Arquitectos"
              className="h-full w-full object-cover object-[center_30%] opacity-40 transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1b] via-[#1a1c1b]/60 to-transparent" />
          </div>

          <div className="relative z-10 grid gap-10 p-10 md:grid-cols-2 md:p-20">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">Alianza</span>
                <ArrowRight className="h-3 w-3 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h2 className="mt-3 text-3xl text-white md:text-5xl">
                LIIT × <span className="text-[#49b07a]">AMBOSS</span>
              </h2>
              <p className="mt-6 text-xl font-medium leading-tight text-white md:text-2xl">
                Diseño y obra integral.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Somos una compañía de arquitectos enfocada en diseño, construcción y arquitectura
                para proyectos comerciales, residenciales e inmobiliarios.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <img
                src={ambossLogo}
                alt="Logo AMBOSS"
                className="h-20 w-auto object-contain brightness-0 invert opacity-80 transition-opacity group-hover:opacity-100 md:h-28"
              />
            </div>
          </div>
        </a>
      </Reveal>
    </section>
  );
}


