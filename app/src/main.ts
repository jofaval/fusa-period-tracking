// Vendors
import Vue, { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import ElementUI from 'element-plus';
// Components
import App from './App.vue';
// Routing
import router from './router';
// Styles
import './index.css';
import 'element-plus/dist/index.css';
// Locales
import i18n from 'langs';

const app = createApp(App);
app.use(i18n).use(ElementUI).use(router).mount('#app');

window.onerror = function (message, source, lineno, colno, error) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  console.error('Window error detected:', { message, source, lineno, colno, error });
};

app.config.errorHandler = function (err, vm, info) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  console.error('Vue.js error detected:', { err });
};
