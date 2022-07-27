// vue.config.js
const { defineConfig } = require('@vue/cli-service');
const constants = require('./src/constants/config.constants').default;

const publicPath =
  // There may be different environments: dev, qa, staging, pre-prod, prod...
  process.env.NODE_ENV in constants.PUBLIC_PATHS
    ? constants.PUBLIC_PATHS[process.env.NODE_ENV]
    : '/';

module.exports = defineConfig({
  publicPath,
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
  },
});
