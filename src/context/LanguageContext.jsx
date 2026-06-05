import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n.js';

const LanguageContext = createContext({ lang: 'fr', setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fr';
    return localStorage.getItem('lang') || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const dict = translations[lang] || translations.fr;
    const t = (key) => {
      const parts = key.split('.');
      let cur = dict;
      for (const p of parts) {
        if (cur && typeof cur === 'object' && p in cur) cur = cur[p];
        else return key;
      }
      return cur;
    };
    return { lang, setLang, t };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
