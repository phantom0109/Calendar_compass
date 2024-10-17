import {defineConfig} from 'vite';
import api from './api-plugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), api()],
});
