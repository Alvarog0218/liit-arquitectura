# Registro de Cambios - Andrés

## [2026-06-03] - Inicialización del Proyecto y Ajustes de Ejecución

### Agregado
- Script `"start": "npm run dev"` en `package.json` para facilitar la ejecución estándar.
- Este archivo `cambios_andres.md` para el seguimiento de cambios futuros.

### Cambiado
- Se cambió el flujo de ejecución de **Bun** a **NPM** debido a la falta de Bun en el entorno local.
- Se instalaron todas las dependencias mediante `npm install` (usando `package-lock.json`).

### Verificado
- **Build**: `npm run build` ejecutado exitosamente (salida en `.vercel/output`).
- **Dev**: Servidor de desarrollo funcional en `http://localhost:8080/`.
- **Preview**: Vista previa de producción funcional en `http://localhost:3000/`.
- **Tipado**: Verificación de TypeScript (`tsc`) sin errores.

## [2026-06-03] - Actualización de Tema: Fondo Global Vinotinto

### Cambiado
- **Tema Global**: Se invirtió el esquema de colores en `src/styles.css`. Ahora el fondo principal es vinotinto (`--wine`) y el texto es claro (`--paper`).
- **Componente Logo**: Se actualizó `src/components/lit/Logo.tsx` para que use la versión invertida (clara) por defecto.
- **Secciones de Home**: Se ajustaron las secciones `ServicesPreview` y `Amboss` en `src/routes/index.tsx` para armonizar con el nuevo fondo oscuro y mantener el contraste.
- **Variables UI**: Se actualizaron las variables de `card`, `muted`, `border` e `input` para mejorar la legibilidad sobre el fondo oscuro.

## [2026-06-03] - Nueva Página: Simulador de Proyectos

### Agregado
- **Ruta `/simulador`**: Se creó una nueva página interactiva para la estimación de costos de proyectos.
- **Componente Simulador**: Integración de lógica de cálculo (COP) y diseño multi-paso en `src/routes/simulador.tsx`.
- **Estilos del Simulador**: Se integraron y optimizaron los estilos en `src/simulator.css`.
- **Navegación**: Se añadieron enlaces al Simulador en el `Header` y `Footer`.

### Cambiado
- Se eliminaron los archivos estáticos temporales (`simulator.html`, `simulator.js`) tras su integración exitosa en el flujo de React/TanStack.

## [2026-06-03] - Integración Visual: Simulador de Proyectos

### Cambiado
- **Integración con Layout**: Se eliminó la estructura independiente de la página de simulador para integrarla con el `Header` y `Footer` globales del sitio.
- **Consistencia Visual**: Se rediseñó la interfaz del simulador en `src/routes/simulador.tsx` para usar las mismas variables de color, tipografía (Anta) y estilos de secciones que el resto de la aplicación.
- **Refinamiento de UI**: Se optimizaron los controles (inputs, radio buttons, sliders) para que armonicen con el tema vinotinto/claro, incluyendo animaciones de transición entre pasos.
- **Limpieza de CSS**: Se simplificó `src/simulator.css` eliminando redundancias y enfocándolo exclusivamente en los componentes interactivos del simulador.

## [2026-06-03] - Ajuste de Espaciado: Header y Hero

### Cambiado
- **Layout Global**: Se añadió un padding superior (`pt-20`) al contenedor `main` en `src/routes/__root.tsx`. Esto asegura que el Hero de la página de inicio y el contenido de todas las subpáginas comiencen debajo de la barra de navegación fija, evitando solapamientos no deseados.
- **Optimización de Subpáginas**: Se redujo el padding superior interno en `proyectos.tsx`, `servicios.tsx`, `contacto.tsx`, `nosotros.tsx` y `proceso.tsx` para mantener un equilibrio visual consistente con el nuevo ajuste global.

## [2026-06-03] - Optimización Responsiva: Hero Image

### Cambiado
- **Adaptabilidad de Imagen**: Se rediseñó el componente `Hero` en la página de inicio para garantizar que las imágenes de fondo se adapten perfectamente a cualquier tamaño de pantalla. 
- **Enfoque Visual**: Se ajustó el `object-position` para centrar los elementos clave de la arquitectura tanto en versiones móviles (vertical) como de escritorio.
- **Efecto Parallax**: Se optimizó la animación de desplazamiento para evitar espacios en blanco, expandiendo el contenedor de la imagen al 120% del viewport.
- **Legibilidad**: Se añadieron capas de contraste sutiles (`overlay`) sobre las imágenes del Hero para asegurar que el texto sea siempre legible independientemente de la luminosidad de la foto.

## [2026-06-03] - Hero Full-Screen y Refinamiento de Layout

### Cambiado
- **Experiencia Full-Screen**: Se rediseñó el Hero de la página de inicio para que sea verdaderamente a pantalla completa (`min-h-screen`), eliminando cualquier espacio en los bordes superiores e inferiores. Ahora la imagen fluye por detrás del Navbar (que es traslúcido).
- **Ajuste de Layout Global**: Se eliminó el padding global forzado en el contenedor `main` para permitir secciones inmersivas. En su lugar, se aplicó un espaciado superior (`pt-32`) específico a todas las subpáginas (Proyectos, Servicios, Contacto, etc.) para que sus encabezados no queden ocultos tras la barra de navegación fija.
- **Consistencia en Navegación**: Se verificó que todas las rutas mantengan un equilibrio visual óptimo entre el menú fijo y el inicio del contenido.
