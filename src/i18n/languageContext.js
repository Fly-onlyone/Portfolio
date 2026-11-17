import { createContext, useContext } from 'react';

export const LANGUAGES = ['vi', 'en'];
export const DEFAULT_LANGUAGE = 'vi';
export const LANGUAGE_STORAGE_KEY = 'portfolio-lang';

export const LanguageContext = createContext(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Marks a value as translatable. `localize` swaps it for the active language.
export const l10n = (vi, en) => ({ __l10n: true, vi, en });

export function localize(value, lang) {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang));
  if (value && typeof value === 'object') {
    if (value.__l10n) return value[lang];
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, lang)])
    );
  }
  return value;
}
