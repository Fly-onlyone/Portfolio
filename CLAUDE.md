# Portfolio – project notes

Personal portfolio (React 19 + Vite 8 + MUI 9 + framer-motion 13), deployed to GitHub Pages at https://fly-onlyone.github.io/Portfolio/ with Vite `base: '/Portfolio/'`.

## Commands

- `npm run dev` – dev server at http://localhost:5173/Portfolio/
- `npm run lint` – oxlint; keep it at 0 warnings
- `npm run build` / `npm run preview` – production build served under `/Portfolio/`
- No formatter is configured.

## Hard rules

- Do not edit `.github/workflows/deploy.yml` or `base` in `vite.config.js`.
- Content must match the CVs in `public/cv/`. Never add skills, numbers or experience that are not in the CVs; ask the owner instead.
- Work on a feature branch; do not push until the owner has reviewed the local build.

## Architecture

- Providers (`src/main.jsx`): `LanguageProvider` → `ThemeModeProvider` → `ThemedApp` (MUI theme) → `App`.
- Content: `src/data/portfolioData.js`. Translatable values use `l10n(vi, en)`; `usePortfolioData()` (`src/i18n/usePortfolioData.js`) resolves them plus the UI strings from `src/i18n/ui.js`. Components must read data through this hook, never by importing `portfolioData.js`.
- Every user-visible string needs both languages: put interface text in `src/i18n/ui.js`, content in `portfolioData.js`.
- Shared card surface: `glassStyle` in `src/styles.js`.
- Contexts and hooks live in plain `.js` files (`themeMode.js`, `i18n/languageContext.js`), separate from provider components, to satisfy oxlint `only-export-components`.

## MUI v9 gotchas

- System props on `Box`, `Grid` and `Typography` (`display`, `mb`, `gap`, `alignItems`, `fontWeight`, ...) are removed. Use `sx`.
- `Typography color` only accepts palette keys (`primary`, `secondary`, `textSecondary`, ...). Dotted paths such as `text.secondary` are silently ignored; use `sx={{ color: 'text.secondary' }}`.
- `ListItemText` has no `primaryTypographyProps`/`secondaryTypographyProps`; use `slotProps={{ primary: { sx: {...} } }}`.
- `ListItem button` is gone; use `ListItemButton`.

## Styling and assets

- Light mode uses a darker `secondary` palette (`theme.js`) so cyan text keeps WCAG AA contrast; check both themes after color changes.
- Link files from `public/` with `import.meta.env.BASE_URL + path`.
- Wrap motion in the existing `MotionConfig reducedMotion="user"` (`App.jsx`); avoid new infinite animations.
