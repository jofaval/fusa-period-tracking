// Vendors
import { createI18n } from 'vue-i18n';
// Locales
import messages from './langs';

const i18n = createI18n({
  locale: 'es',
  messages,
  fallbackLocale: 'en',
});

export default i18n;
