import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — LIIT Arquitectura" },
      {
        name: "description",
        content: "Cuéntanos tu proyecto. Convertimos ideas en diseño, experiencia y valor.",
      },
      { property: "og:title", content: "Contacto · LIIT Arquitectura" },
      { property: "og:description", content: "Empecemos a diseñar tu próximo espacio." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
      <header className="mb-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Contacto</span>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            Tu espacio tiene más potencial del que imaginas.
          </h1>
        </div>
        <div className="md:col-span-5 md:pt-8">
          <p className="text-foreground/70">
            En LIIT lo convertimos en diseño, experiencia y valor. Escríbenos y empecemos con una
            mirada clara sobre lo que tu espacio puede llegar a ser.
          </p>
        </div>
      </header>

      <BlueprintLine className="mb-16 h-3 w-full text-foreground/30" />

      <div className="grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="space-y-8">
            <ContactItem icon={<Mail />} label="Email" value="hola@liitarquitectura.com" />
            <ContactItem icon={<Phone />} label="Teléfono" value="+00 000 000 000" />
            <ContactItem icon={<MapPin />} label="Estudio" value="Av. Principal 123, Ciudad" />
          </div>
          <div className="mt-12 border-l-2 border-primary pl-6 text-sm text-foreground/70">
            <p>
              También podemos orientarte en consultorías, presupuestos, trámites ante curadurías y
              decisiones técnicas para que el proyecto avance con mayor seguridad.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          {sent ? (
            <div className="border border-primary bg-primary/5 p-10 text-center">
              <h2 className="text-2xl text-primary">Mensaje enviado</h2>
              <p className="mt-2 text-foreground/70">
                Gracias por escribirnos. Te contactaremos pronto.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              <Field label="Nombre" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <SelectField
                label="Tipo de proyecto"
                name="type"
                options={["Residencial", "Comercial", "Interiorismo", "Remodelación", "Otro"]}
              />
              <TextareaField label="Cuéntanos tu idea" name="message" required />
              <button
                type="submit"
                className="bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-wine"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 text-primary">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">{label}</div>
        <div className="mt-1 text-lg">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 block w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-primary"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">{label}</span>
      <select
        name={name}
        className="mt-2 block w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-primary"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">{label}</span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="mt-2 block w-full border border-border bg-transparent p-3 outline-none focus:border-primary"
      />
    </label>
  );
}
