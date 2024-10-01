import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*'], // Main source files
  format: ['esm', 'cjs'], // Compile to both ESM and CommonJS
  outDir: 'dist', // Output production code to `dist`
  dts: true, // Generate TypeScript declarations for production code
  sourcemap: true, // Enable sourcemaps
  clean: true // Clean the `dist` directory before building
});