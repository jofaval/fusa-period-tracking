// Vendors
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Constants
const configConstants = require('./src/constants/config.constants').default;

const base =
  // There may be different environments: dev, qa, staging, pre-prod, prod...
  process.env.NODE_ENV in configConstants.PUBLIC_PATHS
    ? configConstants.PUBLIC_PATHS[process.env.NODE_ENV]
    : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base,
});
