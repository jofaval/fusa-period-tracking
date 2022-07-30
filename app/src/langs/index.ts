// Vendors
import { createI18n } from 'vue-i18n';
// Locales
import messages from './langs';

const i18n = createI18n({
  globalInjection: true,
  locale: 'es',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
