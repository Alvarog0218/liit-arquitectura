
# LIT Arquitectura — Sitio Web

Sitio multi-página con identidad del manual de marca (tipografía Anta, paleta vibrante #c01e4f / #4d1f2e / #3b4d63 / #465037) y animaciones que evocan procesos arquitectónicos. AMBOSS aparece como empresa hermana de forma sutil en footer y en la sección "Nosotros".

## Estructura de rutas

```
src/routes/
  __root.tsx         layout con nav + footer
  index.tsx          / — Home
  proyectos.tsx      /proyectos — Grid de proyectos
  servicios.tsx      /servicios — Servicios
  proceso.tsx        /proceso — Metodología
  nosotros.tsx       /nosotros — Sobre LIT + AMBOSS
  contacto.tsx       /contacto — Formulario + datos
```

Cada ruta con su propio `head()` (title, description, og).

## Identidad visual (design tokens en src/styles.css)

- **Colores** (oklch del manual): magenta `#c01e4f` como primario, vino `#4d1f2e`, azul pizarra `#3b4d63`, oliva `#465037`. Fondo crema/blanco roto, texto carbón.
- **Tipografía**: Anta (Google Fonts) para títulos y cuerpo, según el manual.
- **Tokens semánticos**: `--primary` (magenta), `--secondary` (vino), `--accent` (oliva), `--ink` (azul pizarra), `--paper`. Gradientes y sombras tipo blueprint.

## Animaciones arquitectónicas (las 4 elegidas)

1. **Blueprint draw on scroll** — líneas SVG (planos, plantas, ejes) que se trazan con `stroke-dasharray`/`stroke-dashoffset` activadas por IntersectionObserver. Usadas en hero, divisores de sección y fondo de "Proceso".
2. **Ensamblaje modular** — bloques que se apilan/encajan en secuencia (transform + stagger). Usado en "Servicios" (cada servicio = un bloque que cae en su sitio) y en la grilla de "Proyectos" al cargar.
3. **Parallax de capas** — hero con 3 planos superpuestos (planta → alzado → render fotográfico) que se desplazan a distinta velocidad con scroll. También en cards de proyecto al hacer hover (capas se separan).
4. **Transición cortina/persiana** — apertura de proyectos y transiciones entre secciones con paneles verticales que se abren como persianas/cortinas arquitectónicas usando `clip-path`.

Implementación con CSS + Motion for React (`motion/react`) y SVG inline. Respeto a `prefers-reduced-motion`.

## Contenido por página

### Home (`/`)
- Hero con parallax de capas + título "Diseñamos atmósferas, sensaciones y formas de habitar" + CTA.
- Banda de proyectos destacados (3) con efecto cortina al hover.
- Servicios resumidos con ensamblaje modular.
- Manifiesto corto (texto del manual: "más que arquitectura, diseño que se siente").
- Sección "En alianza con AMBOSS" — banda discreta con logo placeholder + 1 línea.
- CTA a Contacto.

### Proyectos (`/proyectos`)
- Grid masonry con filtro (Residencial, Comercial, Interiorismo) — placeholder tags.
- Cards con reveal tipo persiana al entrar en viewport.
- 6 proyectos placeholder con imágenes generadas (interiores y exteriores arquitectónicos).

### Servicios (`/servicios`)
- Bloques modulares que se ensamblan: Diseño arquitectónico, Interiorismo, Remodelación, Consultoría, Renderización, Dirección de obra.
- Cada bloque con icono SVG tipo blueprint.

### Proceso (`/proceso`)
- Timeline vertical con líneas SVG que se dibujan al scrollear.
- 5 pasos: Briefing → Concepto → Anteproyecto → Proyecto ejecutivo → Construcción/Entrega.
- Cada paso con animación de plano trazándose.

### Nosotros (`/nosotros`)
- Historia y filosofía (texto del manual).
- Equipo (placeholders).
- **Bloque "Empresa hermana — AMBOSS"**: card destacada explicando la alianza, con logo placeholder y enlace placeholder.

### Contacto (`/contacto`)
- Formulario (nombre, email, tipo de proyecto, mensaje) — solo UI, sin backend en esta iteración.
- Datos de contacto, mapa placeholder, redes sociales.

## Componentes compartidos

- `Header` (en `__root.tsx`): logo LIT + nav con `<Link>` y subrayado animado activo.
- `Footer`: navegación, datos, **mención AMBOSS** ("LIT Arquitectura es empresa hermana de AMBOSS"), copyright.
- `BlueprintLine` — componente SVG reutilizable para divisores animados.
- `ModuleStack` — wrapper de animación para ensamblaje modular.
- `CurtainReveal` — wrapper para transición cortina.
- `ParallaxLayers` — para hero y cards.

## Assets

- Logo LIT: generado como SVG simple basado en el manual (texto "LIT" + "ARQUITECTURA").
- Imágenes de proyectos: generadas con `imagegen` (interiores modernos, fachadas, render arquitectónico) guardadas en `src/assets/`.
- Logo AMBOSS: placeholder marcado como tal.

## Detalles técnicos

- Stack: TanStack Start + React + Tailwind v4 + Motion for React (`bun add motion`).
- Fuente Anta vía Google Fonts en `<head>` del root.
- SEO: head() único por ruta + JSON-LD `Organization` en home.
- Accesibilidad: contraste validado, `prefers-reduced-motion`, alt text en imágenes, H1 único por página.
- Sin backend (Lovable Cloud no se activa todavía; el formulario solo valida cliente).

## Alcance fuera de esta iteración

- Backend del formulario (se puede activar Cloud después).
- CMS de proyectos (hardcoded por ahora).
- Logo/branding real de AMBOSS (placeholder hasta recibirlo).
