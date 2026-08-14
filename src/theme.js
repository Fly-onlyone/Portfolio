import { createTheme } from '@mui/material/styles';

const sharedTypography = {
  fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
  h1: { fontFamily: '"Space Grotesk", "DM Sans", sans-serif', fontWeight: 700 },
  h2: { fontFamily: '"Space Grotesk", "DM Sans", sans-serif', fontWeight: 700 },
  h3: { fontFamily: '"Space Grotesk", "DM Sans", sans-serif', fontWeight: 600 },
  h4: { fontFamily: '"Space Grotesk", "DM Sans", sans-serif', fontWeight: 600 },
  h5: { fontFamily: '"Space Grotesk", "DM Sans", sans-serif', fontWeight: 500 },
  h6: { fontFamily: '"Space Grotesk", "DM Sans", sans-serif', fontWeight: 500 },
};

const sharedComponents = (mode) => ({
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: mode === 'dark'
          ? 'rgba(15, 23, 42, 0.7)'
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        border: mode === 'dark'
          ? '1px solid rgba(59, 130, 246, 0.12)'
          : '1px solid rgba(30, 64, 175, 0.1)',
        borderRadius: 16,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        backgroundColor: mode === 'dark'
          ? 'rgba(59, 130, 246, 0.15)'
          : 'rgba(30, 64, 175, 0.08)',
        borderRadius: '16px',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        textTransform: 'none',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
      },
    },
  },
});

const makeShadows = (mode) => {
  const alpha = mode === 'dark' ? 0.2 : 0.1;
  const base = `rgba(59,130,246,${alpha})`;
  return [
    'none',
    `0px 2px 4px -1px ${base}, 0px 4px 5px 0px ${base}, 0px 1px 10px 0px ${base}`,
    `0px 3px 5px -1px ${base}, 0px 5px 8px 0px ${base}, 0px 1px 14px 0px ${base}`,
    `0px 3px 5px -1px ${base}, 0px 6px 10px 0px ${base}, 0px 1px 18px 0px ${base}`,
    `0px 4px 5px -2px ${base}, 0px 7px 10px 1px ${base}, 0px 2px 16px 1px ${base}`,
    ...Array(20).fill(`0px 4px 20px 0px ${base}`),
  ];
};

export function getTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#3B82F6' : '#1E40AF',
        light: mode === 'dark' ? '#60A5FA' : '#3B82F6',
        dark: mode === 'dark' ? '#2563EB' : '#1E3A8A',
      },
      secondary: {
        main: '#06B6D4',
        light: '#22D3EE',
        dark: '#0891B2',
      },
      background: mode === 'dark'
        ? { default: '#091D42', paper: '#0E2A58' }
        : { default: '#BFDBFE', paper: '#DBEAFE' },
      text: mode === 'dark'
        ? { primary: '#E2E8F0', secondary: '#94A3B8' }
        : { primary: '#0F172A', secondary: '#475569' },
    },
    typography: sharedTypography,
    components: sharedComponents(mode),
    shadows: makeShadows(mode),
  });
}
