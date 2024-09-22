import { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import EN from './EN.json';
import UK from './UK.json';

const i18n = use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: EN,
      },
      uk: {
        translation: UK,
      },
    },
    ns: ['translation'],
    defaultNS: 'translation',
  });

export default i18n;
