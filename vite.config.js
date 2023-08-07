import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { compilerOptions } from './alias.json';

const { paths: alias } = compilerOptions;

const getAlias = () => {
  const aliasKeys = Object.keys(alias).map(key => key.replace('/*', ''));
  const aliasPath = Object.values(alias).map(value => value[0].replace('/*', ''));
  const aliasMapped = Object.fromEntries(
    aliasKeys.map((key, index) => [key, path.resolve(__dirname, aliasPath[index])]),
  );

  return aliasMapped;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: getAlias(),
  },
});
