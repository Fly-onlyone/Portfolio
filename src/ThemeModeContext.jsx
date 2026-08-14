import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ThemeModeContext = createContext();

const STORAGE_KEY = 'portfolio-theme-mode';

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'system';
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
      localStorage.setItem(STORAGE_KEY, mode);
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

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
}
