import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

import tsconfigApp from './tsconfig.app.json';

const rawAlias: Record<string, string[]> = tsconfigApp.compilerOptions.paths;
const alias: Record<string, string> = {};

for (const x in rawAlias) {
  alias[x.replace('/*', '')] = path.resolve(
    __dirname,
    rawAlias[x][0].replace('/*', ''),
  );
}

export default defineConfig({
  resolve: { alias },
  plugins: [tailwindcss(), react()],
});
