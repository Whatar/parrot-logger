import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/logger.ts'],
  splitting: false,
  sourcemap: true,
  clean: true
});
