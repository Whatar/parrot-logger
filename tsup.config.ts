import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Entry point of your application
  format: ['cjs', 'esm'], // Bundle both CommonJS and ESModules
  dts: true, // Generate TypeScript declaration files
  sourcemap: true, // Generate source maps
  clean: true, // Clean the output folder before each build
  minify: true
});