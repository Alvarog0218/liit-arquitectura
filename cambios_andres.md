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
