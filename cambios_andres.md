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
