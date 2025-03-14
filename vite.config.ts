import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dotenv from 'dotenv';

function pathResolve(dir: string) {
  return resolve(__dirname, dir);
}

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [react()],
    server: {
      host: true,
      port: parseInt(process.env.VITE_PORT || '3000'),
    },
    resolve: {
      alias: [
        { 
          find: '@', 
          replacement: pathResolve('src') 
        },
        {
          find: '@assets',
          replacement: pathResolve('src/assets'),
        },
        { 
          find: '@core', 
          replacement: pathResolve('src/core') 
        },
        { 
          find: '@data', 
          replacement: pathResolve('src/data') },
        { 
          find: '@presentation', 
          replacement: pathResolve('src/presentation') },
        {
          find: '@components',
          replacement: pathResolve('src/presentation/components'),
        },
        {
          find: '@pages',
          replacement: pathResolve('src/presentation/pages'),
        },
        {
          find: '@css',
          replacement: pathResolve('src/presentation/css'),
        },
      ],
    },
    define: {
      'process.env': process.env,
    },
  };
});
