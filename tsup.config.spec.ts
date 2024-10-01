import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/**/*.ts', 'test/**/*.ts'], // Entry point for your project
    format: 'cjs', // Output format: CommonJS
    outDir: 'dist/test/cjs', // Output directory for CommonJS files
    dts: false, // Generate TypeScript declaration files
    sourcemap: false, // Generate sourcemaps for debugging
    clean: true // Clean the output directory before each build
  },
  {
    entry: ['src/**/*.ts', 'test/**/*.ts'], // Entry point for your project
    format: 'esm', // Output format: ES Modules
    outDir: 'dist/test/esm', // Output directory for ES Module files
    dts: false, // Generate TypeScript declaration files
    sourcemap: false, // Generate sourcemaps for debugging
    clean: true // Clean the output directory before each build
  }
]);
