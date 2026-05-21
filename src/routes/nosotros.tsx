import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import heroImg from "@/assets/hero-interior.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — LIT Arquitectura" },
      { name: "description", content: "Estudio de arquitectura contemporánea. Empresa hermana de AMBOSS." },
      { property: "og:title", content: "Nosotros · LIT Arquitectura" },
      { property: "og:description", content: "Diseño que se siente, se habita y se vive." },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
      <header className="mb-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Sobre LIT</span>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            Diseñamos atmósferas, no solo edificios.
          </h1>
        </div>
        <div className="md:col-span-5 md:pt-8">
          <p className="text-foreground/70">
            La nueva identidad de LIT Arquitectura nace desde la energía
            de la creatividad, la libertad y la pasión por transformar
            espacios en experiencias vivas.
          </p>
        </div>
      </header>

      <Reveal>
        <div className="curtain-reveal in-view aspect-[16/7] overflow-hidden">
          <img
            src={heroImg}
            alt="Estudio LIT"
            loading="lazy"
            width={1600}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>

      <section className="mt-24 grid gap-16 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl">Filosofía</h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Más que arquitectura, somos diseño que se siente, se habita y
            se vive. Nuestra esencia conecta con una visión fresca,
            dinámica y en constante evolución, donde cada proyecto es una
            oportunidad para experimentar, innovar y crear lugares que
            inspiran.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl">Aproximación</h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Creemos en los espacios que cuentan historias, que despiertan
            sensaciones y que se adaptan a nuevas formas de vivir,
            trabajar y crear. Trabajamos con una paleta amplia, materiales
            honestos y una mirada contemporánea.
          </p>
        </Reveal>
      </section>

      <BlueprintLine className="mt-24 h-3 w-full text-foreground/30" />

      {/* AMBOSS */}
      <section className="mt-24">
        <Reveal>
          <div className="grid gap-10 border border-border bg-card p-10 md:grid-cols-12 md:p-16">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Empresa hermana</span>
              <h2 className="mt-4 text-4xl md:text-5xl">
                LIT × <span className="text-primary">AMBOSS</span>
              </h2>
              <p className="mt-6 max-w-xl text-foreground/70 leading-relaxed">
                LIT Arquitectura trabaja de la mano con AMBOSS, su empresa
                hermana. Esta alianza nos permite ofrecer un servicio
                integral, combinando diseño arquitectónico de autor con
                ejecución y desarrollo de obra a la altura de cada
                proyecto.
              </p>
              <p className="mt-4 text-sm text-foreground/50">
                Una visión, dos estudios, un mismo estándar.
              </p>
            </div>
            <div className="flex items-center justify-center border border-dashed border-border bg-muted/30 p-12 md:col-span-5">
              <div className="text-center">
                <div className="text-5xl tracking-[0.2em] text-foreground/80">AMBOSS</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                  Logo placeholder
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

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
