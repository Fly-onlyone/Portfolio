import { useMemo } from 'react';
import { localize, useLanguage } from './languageContext';
import * as portfolioData from '../data/portfolioData';
import { ui } from './ui';

// Portfolio content and UI strings resolved to the active language.
export function usePortfolioData() {
  const { lang } = useLanguage();
  return useMemo(() => localize({ ...portfolioData, ui }, lang), [lang]);
}
