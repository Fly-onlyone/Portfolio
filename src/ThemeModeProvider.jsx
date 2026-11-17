import React, { useState, useEffect, useMemo } from 'react';
import { THEME_STORAGE_KEY, ThemeModeContext } from './themeMode';

export default function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) || 'system';
    } catch {
      return 'system';
    }
  });

  // Resolve 'system' to actual 'light' or 'dark'
  const [systemPreference, setSystemPreference] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setSystemPreference(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // ignore
    }
  }, [mode]);

  const resolvedMode = mode === 'system' ? systemPreference : mode;

  const contextValue = useMemo(() => ({
    mode,        // 'light' | 'dark' | 'system'
    setMode,     // setter
    resolvedMode // actual 'light' | 'dark' applied
  }), [mode, resolvedMode]);

  return (
    <ThemeModeContext.Provider value={contextValue}>
      {children}
    </ThemeModeContext.Provider>
  );
}
