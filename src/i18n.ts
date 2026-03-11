import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "services": "Services",
      "projects": "Featured Work",
      "clients": "Reviews",
      "contact": "Start Building",
      "hero_title": "SPRDLX",
      "about_title": "Driven by Curiosity. Proven by Data.",
      "about_desc": "We don't just build brands; we build new futures. By fusing data-driven strategy with world-class design, we launch the next generation of consumer startups.",
      "ventures_launched": "Ventures Launched",
      "ai_models": "AI Models Deployed"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
