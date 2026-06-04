import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/lit/Reveal";
import { BlueprintLine } from "@/components/lit/BlueprintLine";
import "@/simulator.css";

export const Route = createFileRoute("/simulador")({
  head: () => ({
    meta: [
      { title: "Simulador — LIIT Arquitectura" },
      {
        name: "description",
        content: "Calcula el costo estimado de tu próximo proyecto de arquitectura o diseño con nuestra herramienta interactiva.",
      },
    ],
  }),
  component: Simulator,
});

const SIMULATOR_RATES = {
  baseCostPerSqm: {
    residencial: 2500000,
    comercial: 2200000,
    industrial: 1800000,
  },
  finishMultipliers: {
    standard: 1.0,
    premium: 1.35,
    luxury: 1.8,
  },
  addons: {
    smart: 15000000,
    eco: 25000000,
    landscape: 12000000,
    interior: 35000000,
  },
};

function Simulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [projectType, setProjectType] = useState<keyof typeof SIMULATOR_RATES.baseCostPerSqm>("residencial");
  const [area, setArea] = useState(150);
  const [finishQuality, setFinishQuality] = useState<keyof typeof SIMULATOR_RATES.finishMultipliers>("standard");
  const [addons, setAddons] = useState({
    smart: false,
    eco: false,
    landscape: false,
    interior: false,
  });

  const totalSteps = 4;

  const formatCOP = (number: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const calculateEstimate = () => {
    const rateSqm = SIMULATOR_RATES.baseCostPerSqm[projectType];
    const finishMultiplier = SIMULATOR_RATES.finishMultipliers[finishQuality];
    const baseConstructionCost = area * rateSqm * finishMultiplier;

    let addonsCost = 0;
    if (addons.smart) addonsCost += SIMULATOR_RATES.addons.smart;
    if (addons.eco) addonsCost += SIMULATOR_RATES.addons.eco;
    if (addons.landscape) addonsCost += SIMULATOR_RATES.addons.landscape;
    if (addons.interior) addonsCost += SIMULATOR_RATES.addons.interior;

    return {
      base: baseConstructionCost,
      addons: addonsCost,
      total: baseConstructionCost + addonsCost,
    };
  };

  const estimate = calculateEstimate();

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 simulator-page-integrated">
      <header className="mb-12 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Herramienta Interactiva</span>
        <h1 className="mt-4 text-5xl md:text-7xl">Simulador</h1>
        <p className="mt-4 text-foreground/70">
          Obtén una referencia inicial del costo de tu proyecto. Nuestra herramienta combina 
          parámetros de construcción técnica con niveles de diseño arquitectónico.
        </p>
        <BlueprintLine className="mt-10 h-3 w-full text-foreground/30" />
      </header>

      <main className="simulator-layout-integrated grid gap-12 lg:grid-cols-12">
        {/* Left Column: Controls */}
        <section className="control-panel-integrated lg:col-span-8">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
              Paso {currentStep + 1} de {totalSteps}
            </span>
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 w-8 transition-colors ${i <= currentStep ? "bg-primary" : "bg-white/10"}`}
                />
              ))}
            </div>
          </div>

          <Reveal key={currentStep} variant="fade">
            <div className="min-h-[400px]">
              {/* STEP 1: Type of Project */}
              {currentStep === 0 && (
                <div className="sim-group">
                  <h3 className="mb-8 text-2xl uppercase tracking-tight">1. ¿Qué tipo de proyecto tienes en mente?</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {Object.keys(SIMULATOR_RATES.baseCostPerSqm).map((type) => (
                      <label key={type} className={`cursor-pointer border p-6 transition-all ${projectType === type ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30"}`}>
                        <input
                          type="radio"
                          name="projectType"
                          className="hidden"
                          value={type}
                          checked={projectType === type}
                          onChange={(e) => setProjectType(e.target.value as any)}
                        />
                        <h4 className="text-lg uppercase tracking-wider">{type}</h4>
                        <p className="mt-2 text-sm text-foreground/60">
                          {type === "residencial" ? "Casas, Apartamentos" : type === "comercial" ? "Locales, Oficinas" : "Bodegas, Plantas"}
                        </p>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Square Footage Area */}
              {currentStep === 1 && (
                <div className="sim-group">
                  <h3 className="mb-8 text-2xl uppercase tracking-tight">2. ¿Cuál es el área aproximada?</h3>
                  <div className="py-12">
                    <input
                      type="range"
                      min="50"
                      max="2000"
                      value={area}
                      step="10"
                      className="w-full accent-primary"
                      onChange={(e) => setArea(parseInt(e.target.value))}
                    />
                    <div className="mt-6 text-center">
                      <span className="text-6xl font-display text-primary">{area}</span>
                      <span className="ml-2 text-xl font-display uppercase tracking-widest text-foreground/40">m²</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Materials & Finishes */}
              {currentStep === 2 && (
                <div className="sim-group">
                  <h3 className="mb-8 text-2xl uppercase tracking-tight">3. Nivel de acabado y complejidad</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      { id: "standard", label: "Estándar", desc: "Materiales funcionales y duraderos." },
                      { id: "premium", label: "Premium", desc: "Equilibrio entre diseño e ingeniería." },
                      { id: "luxury", label: "Vanguardista", desc: "Acabados disruptivos y experimentales." },
                    ].map((f) => (
                      <label key={f.id} className={`cursor-pointer border p-6 transition-all ${finishQuality === f.id ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30"}`}>
                        <input
                          type="radio"
                          name="finishQuality"
                          className="hidden"
                          value={f.id}
                          checked={finishQuality === f.id}
                          onChange={(e) => setFinishQuality(e.target.value as any)}
                        />
                        <h4 className="text-lg uppercase tracking-wider">{f.label}</h4>
                        <p className="mt-2 text-sm text-foreground/60">{f.desc}</p>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Special Add-ons */}
              {currentStep === 3 && (
                <div className="sim-group">
                  <h3 className="mb-8 text-2xl uppercase tracking-tight">4. Componentes adicionales</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      { id: "smart", label: "Domótica Smart Home", desc: "Integración tecnológica integral." },
                      { id: "eco", label: "Sostenibilidad", desc: "Paneles solares y eficiencia." },
                      { id: "landscape", label: "Paisajismo", desc: "Diseño de exteriores conceptual." },
                      { id: "interior", label: "Interiorismo", desc: "Diseño de mobiliario a medida." },
                    ].map((addon) => (
                      <label key={addon.id} className={`flex cursor-pointer items-start gap-4 border p-6 transition-all ${addons[addon.id as keyof typeof addons] ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30"}`}>
                        <input
                          type="checkbox"
                          className="mt-1 accent-primary"
                          checked={addons[addon.id as keyof typeof addons]}
                          onChange={(e) => setAddons({ ...addons, [addon.id]: e.target.checked })}
                        />
                        <div>
                          <h4 className="text-lg uppercase tracking-wider">{addon.label}</h4>
                          <p className="mt-1 text-sm text-foreground/60">{addon.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Navigation Controls */}
          <div className="mt-12 flex justify-between border-t border-white/10 pt-8">
            <button 
              type="button" 
              className={`px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all ${currentStep === 0 ? "opacity-0 pointer-events-none" : "border border-white/20 hover:border-white"}`}
              onClick={handlePrev}
            >
              Anterior
            </button>
            <button 
              type="button" 
              className={`bg-primary px-10 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-white hover:text-black ${currentStep === totalSteps - 1 ? "hidden" : ""}`}
              onClick={handleNext}
            >
              Siguiente
            </button>
          </div>
        </section>

        {/* Right Column: Summary Panel */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 border border-white/10 bg-card/30 p-8 backdrop-blur-md">
            <h2 className="text-xs uppercase tracking-[0.3em] text-foreground/40">Inversión Estimada</h2>
            <div className="mt-4 text-4xl font-display text-primary">{formatCOP(estimate.total)}</div>
            <p className="mt-2 text-[10px] uppercase tracking-wider text-foreground/30">* Valores de referencia en COP</p>

            <div className="mt-10 space-y-4">
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-foreground/50">Proyecto:</span>
                <span className="font-display capitalize">{projectType}</span>
              </div>
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-foreground/50">Área:</span>
                <span className="font-display">{area} m²</span>
              </div>
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-foreground/50">Acabados:</span>
                <span className="font-display capitalize">{finishQuality}</span>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-foreground/50">Construcción:</span>
                <span className="font-display">{formatCOP(estimate.base)}</span>
              </div>
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-foreground/50">Adicionales:</span>
                <span className="font-display">{formatCOP(estimate.addons)}</span>
              </div>
            </div>

            <a
              href="https://wa.me/573157060211"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block w-full bg-white py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-primary hover:text-white"
            >
              Cotizar Proyecto
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
}
