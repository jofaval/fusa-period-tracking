// Vendors
import Vue, { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import ElementUI from 'element-plus';
// Components
import App from './App.vue';
// Routing
import router from './routes/router';
// Styles
import './index.css';
import 'element-plus/dist/index.css';
// import 'element-plus/lib/theme-chalk/index.css';
// Locales
import messages from './langs/langs';

const i18n = createI18n({
  locale: 'es',
  messages,
  fallbackLocale: 'en',
});

createApp(App).use(i18n).use(ElementUI).use(router).mount('#app');
