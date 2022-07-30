// vue.config.js
// Constants
import configConstants from './src/constants/config.constants';
// Vendors
const { defineConfig } = require('@vue/cli-service');

const publicPath =
  // There may be different environments: dev, qa, staging, pre-prod, prod...
  process.env.NODE_ENV in configConstants.PUBLIC_PATHS
    ? configConstants.PUBLIC_PATHS[process.env.NODE_ENV]
    : '/';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath,
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
  },
});
