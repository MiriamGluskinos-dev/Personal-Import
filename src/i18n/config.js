import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
  lng: 'he',
  resources: {
    en: {
      translations: require('./locales/en/translation.json')
    },
    he: {
      translations: require('./locales/he/translation.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'he'];

export default i18n;