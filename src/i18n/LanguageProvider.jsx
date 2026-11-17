import React, { useEffect, useMemo, useState } from 'react';
import { DEFAULT_LANGUAGE, LANGUAGES, LANGUAGE_STORAGE_KEY, LanguageContext } from './languageContext';

// Priority: ?lang= in the URL (shareable English link), then the saved choice.
function getInitialLanguage() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (LANGUAGES.includes(fromUrl)) return fromUrl;
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // ignore
  }
  return DEFAULT_LANGUAGE;
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    toggleLang: () => setLang((prev) => (prev === 'vi' ? 'en' : 'vi')),
  }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
