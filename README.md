# Nguyễn Gia Huy – Portfolio

Personal portfolio of a fresher **Data Analyst / Data Scientist**.

Live site: https://fly-onlyone.github.io/Portfolio/ (English version: https://fly-onlyone.github.io/Portfolio/?lang=en)

## Features

- Vietnamese / English switch in the navbar; the choice is remembered, and `?lang=en` opens the English version directly
- Data Analyst and Data Scientist CVs (PDF) in both languages, matching the active language
- Light, dark and system themes; text meets WCAG AA contrast in both themes
- Sections: Hero, About, Experience, Skills, Projects, Contact
- Responsive from 375px phones to desktop
- Respects `prefers-reduced-motion` (reduced animations, no animated background)

## Tech stack

React 19, Vite 8, MUI 9 (+ `@mui/lab` Timeline), framer-motion 13, oxlint.

## Getting started

```bash
npm ci
npm run dev       # http://localhost:5173/Portfolio/
npm run lint      # oxlint, expected to report 0 warnings
npm run build     # outputs dist/
npm run preview   # serves dist/ under /Portfolio/
```

## Project structure

```
public/cv/                  CV PDFs (VI/EN × Data Analyst/Data Scientist)
src/
  data/portfolioData.js     All portfolio content (profile, experience, skills, projects, nav)
  i18n/
    languageContext.js      Language context, useLanguage(), l10n() and localize()
    LanguageProvider.jsx    Language state, localStorage + ?lang= handling, <html lang>
    ui.js                   Interface strings (section titles, labels, tooltips)
    usePortfolioData.js     Returns content + UI strings for the active language
  components/               One component per section, plus Navbar, Footer, SectionWrapper
  themeMode.js              Theme-mode context and useThemeMode()
  ThemeModeProvider.jsx     Light / dark / system state
  ThemedApp.jsx             MUI ThemeProvider + CssBaseline
  theme.js                  MUI theme (palette per mode, typography, component overrides)
  styles.js                 Shared sx helpers (glassStyle)
```

## Editing content

- Edit `src/data/portfolioData.js`. Wrap any text that differs between languages in `l10n('Tiếng Việt', 'English')`; shared values (dates, tech stacks, URLs) stay plain.
- Interface strings live in `src/i18n/ui.js`.
- Components read everything through `usePortfolioData()`; do not import `portfolioData.js` directly in components.
- Files in `public/` must be linked with `import.meta.env.BASE_URL + path` so they work under `/Portfolio/`.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. `base: '/Portfolio/'` in `vite.config.js` must match the repository name.
