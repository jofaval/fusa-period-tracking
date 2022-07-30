// Vendors
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');
// Constants
const configConstants = require('./src/constants/config.constants').default;

const base =
  // There may be different environments: dev, qa, staging, pre-prod, prod...
  process.env.NODE_ENV in configConstants.PUBLIC_PATHS
    ? configConstants.PUBLIC_PATHS[process.env.NODE_ENV]
    : '/';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],
  base,
});
