import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeModeProvider, useThemeMode } from './ThemeModeContext';
import LanguageProvider from './i18n/LanguageProvider';
import { getTheme } from './theme';
import App from './App';
import './index.css';

function ThemedApp() {
  const { resolvedMode } = useThemeMode();
  const theme = useMemo(() => getTheme(resolvedMode), [resolvedMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeModeProvider>
        <ThemedApp />
      </ThemeModeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
