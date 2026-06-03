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

## [2026-06-03] - Actualización de Imágenes de Portafolio

### Cambiado
- **Portadas de Proyectos**: Se actualizaron las imágenes principales de todos los proyectos en `src/data/projects.ts`. Ahora utilizan las versiones optimizadas `.webp` localizadas en la carpeta `src/proyectos/`.
- **Consistencia Visual**: Se corrigieron discrepancias en los nombres de archivos para asegurar que cada proyecto muestre su miniatura correcta.
