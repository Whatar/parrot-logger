import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'], // Compile all files in the `test` folder
  format: ['esm'], // Only compile as ES modules for tests
  outDir: 'dist-test', // Output the test build in `dist-test`
  dts: false, // You probably don't need TypeScript declarations for tests
  sourcemap: true, // Sourcemaps are helpful when debugging tests
  clean: true // Clean the `dist-test` directory before building
});
