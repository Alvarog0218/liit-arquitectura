import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import "@/simulator.css";

export const Route = createFileRoute("/simulador")({
  component: Simulator,
});

const SIMULATOR_RATES = {
  baseCostPerSqm: {
    residencial: 2500000, // COP por m2
    comercial: 2200000,
    industrial: 1800000,
  },
  finishMultipliers: {
    standard: 1.0, // Base AMBOSS
    premium: 1.35, // Mezcla
    luxury: 1.8, // High-end LIIT
  },
  addons: {
    smart: 15000000, // Costo fijo base estimado
    eco: 25000000, // Paneles solares
    landscape: 12000000, // Paisajismo
    interior: 35000000, // Diseño Interior completo
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
    <div className="simulator-page min-h-screen">
      {/* Neutral Header */}
      <header className="simulator-header">
        <Link to="/" className="back-link">
          ← Volver al Inicio
        </Link>
        <div className="combined-logo">
          LIIT <span>x</span> AMBOSS
        </div>
        <div className="header-subtitle">Simulador de Construcción y Diseño</div>
      </header>

      <main className="simulator-layout">
        {/* Left Column: Controls */}
        <section className="control-panel">
          <div className="step-indicator">
            Paso {currentStep + 1} de {totalSteps}
          </div>

          {/* STEP 1: Type of Project */}
          {currentStep === 0 && (
            <div className="step-container active-step">
              <div className="sim-group">
                <h3 className="sim-title">1. Tipo de Proyecto</h3>
                <div className="options-grid project-types">
                  {Object.keys(SIMULATOR_RATES.baseCostPerSqm).map((type) => (
                    <label key={type} className="sim-card">
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        checked={projectType === type}
                        onChange={(e) => setProjectType(e.target.value as any)}
                      />
                      <div className="card-content">
                        <h4 className="capitalize">{type}</h4>
                        <p>{type === "residencial" ? "Casas, Apartamentos" : type === "comercial" ? "Locales, Oficinas" : "Bodegas, Plantas"}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Square Footage Area */}
          {currentStep === 1 && (
            <div className="step-container active-step">
              <div className="sim-group">
                <h3 className="sim-title">2. Área Total (m²)</h3>
                <div className="range-container">
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    value={area}
                    step="10"
                    onChange={(e) => setArea(parseInt(e.target.value))}
                  />
                  <div className="range-value">
                    <span>{area}</span> m²
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Materials & Finishes */}
          {currentStep === 2 && (
            <div className="step-container active-step">
              <div className="sim-group">
                <h3 className="sim-title">3. Calidad de Acabados & Materiales</h3>
                <div className="options-grid finish-types">
                  <label className="sim-card">
                    <input
                      type="radio"
                      name="finishQuality"
                      value="standard"
                      checked={finishQuality === "standard"}
                      onChange={(e) => setFinishQuality(e.target.value as any)}
                    />
                    <div className="card-content">
                      <h4>Estándar</h4>
                      <p>Materiales funcionales y duraderos (AMBOSS Core)</p>
                    </div>
                  </label>
                  <label className="sim-card">
                    <input
                      type="radio"
                      name="finishQuality"
                      value="premium"
                      checked={finishQuality === "premium"}
                      onChange={(e) => setFinishQuality(e.target.value as any)}
                    />
                    <div className="card-content">
                      <h4>Premium</h4>
                      <p>Equilibrio entre diseño e ingeniería</p>
                    </div>
                  </label>
                  <label className="sim-card">
                    <input
                      type="radio"
                      name="finishQuality"
                      value="luxury"
                      checked={finishQuality === "luxury"}
                      onChange={(e) => setFinishQuality(e.target.value as any)}
                    />
                    <div className="card-content">
                      <h4>Vanguardista</h4>
                      <p>Acabados disruptivos y experimentales (LIIT Core)</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Special Add-ons */}
          {currentStep === 3 && (
            <div className="step-container active-step">
              <div className="sim-group">
                <h3 className="sim-title">4. Especialidades & Diseño Adicional</h3>
                <div className="toggle-list">
                  <label className="toggle-item">
                    <div className="toggle-info">
                      <h4>Domótica Smart Home</h4>
                      <p>Integración tecnológica integral.</p>
                    </div>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={addons.smart}
                        onChange={(e) => setAddons({ ...addons, smart: e.target.checked })}
                      />
                      <span className="slider round"></span>
                    </div>
                  </label>
                  <label className="toggle-item">
                    <div className="toggle-info">
                      <h4>Sostenibilidad (Paneles Solares)</h4>
                      <p>Energía verde y certificación LEED.</p>
                    </div>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={addons.eco}
                        onChange={(e) => setAddons({ ...addons, eco: e.target.checked })}
                      />
                      <span className="slider round"></span>
                    </div>
                  </label>
                  <label className="toggle-item">
                    <div className="toggle-info">
                      <h4>Paisajismo Premium</h4>
                      <p>Diseño de exteriores y jardines conceptuales.</p>
                    </div>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={addons.landscape}
                        onChange={(e) => setAddons({ ...addons, landscape: e.target.checked })}
                      />
                      <span className="slider round"></span>
                    </div>
                  </label>
                  <label className="toggle-item">
                    <div className="toggle-info">
                      <h4>Interiorismo a la Medida</h4>
                      <p>Diseño de mobiliario e iluminación (LIIT Studio).</p>
                    </div>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={addons.interior}
                        onChange={(e) => setAddons({ ...addons, interior: e.target.checked })}
                      />
                      <span className="slider round"></span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="step-navigation">
            {currentStep > 0 && (
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                Anterior
              </button>
            )}
            {currentStep < totalSteps - 1 && (
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Siguiente
              </button>
            )}
          </div>
        </section>

        {/* Right Column: Summary Panel */}
        <aside className="summary-panel-wrapper">
          <div className="summary-panel">
            <h2>Costo Estimado</h2>
            <div className="price-display">{formatCOP(estimate.total)}</div>
            <div className="currency-note">* Valores de referencia aproximados en COP</div>

            <div className="summary-breakdown">
              <div className="breakdown-row">
                <span>Proyecto:</span>
                <span className="capitalize">{projectType}</span>
              </div>
              <div className="breakdown-row">
                <span>Área:</span>
                <span>{area} m²</span>
              </div>
              <div className="breakdown-row">
                <span>Acabados:</span>
                <span>
                  {finishQuality === "standard"
                    ? "Estándar"
                    : finishQuality === "premium"
                    ? "Premium"
                    : "Vanguardista"}
                </span>
              </div>
              <div className="breakdown-row divider"></div>
              <div className="breakdown-row">
                <span>Costo Construcción Básica:</span>
                <span>{formatCOP(estimate.base)}</span>
              </div>
              <div className="breakdown-row">
                <span>Adicionales (Diseño/Tech):</span>
                <span>{formatCOP(estimate.addons)}</span>
              </div>
            </div>

            <a
              href="https://wa.me/573157060211"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quote"
            >
              Solicitar Cotización por WhatsApp
            </a>
          </div>
        </aside>
      </main>

      <footer className="global-footer neutral-footer">
        <p>
          &copy; {new Date().getFullYear()} LIIT / AMBOSS. Cálculos basados en tarifas estimadas del
          mercado de construcción colombiano.
        </p>
      </footer>
    </div>
  );
}
