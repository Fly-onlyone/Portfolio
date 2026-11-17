import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeModeProvider from './ThemeModeProvider';
import LanguageProvider from './i18n/LanguageProvider';
import ThemedApp from './ThemedApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeModeProvider>
        <ThemedApp />
      </ThemeModeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
