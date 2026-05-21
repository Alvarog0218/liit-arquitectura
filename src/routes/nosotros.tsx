import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import { heroProject } from "@/data/projects";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — LIIT Arquitectura" },
      {
        name: "description",
        content:
          "En LIIT transformamos ideas en espacios residenciales y comerciales con intención, carácter y valor.",
      },
      { property: "og:title", content: "Nosotros · LIIT Arquitectura" },
      { property: "og:description", content: "Espacios con intención. Diseño con carácter." },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
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

      {/* AMBOSS */}
      <section className="mt-24">
        <Reveal>
          <div className="grid gap-10 border border-border bg-card p-10 md:grid-cols-12 md:p-16">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Empresa hermana
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl">
                LIIT × <span className="text-primary">AMBOSS</span>
              </h2>
              <p className="mt-6 max-w-xl text-foreground/70 leading-relaxed">
                LIIT Arquitectura trabaja de la mano con AMBOSS, su empresa hermana. Esta alianza
                nos permite ofrecer un servicio integral, combinando diseño arquitectónico de autor
                con ejecución y desarrollo de obra a la altura de cada proyecto.
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
