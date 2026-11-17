// Shared sx helpers used across sections.

// Frosted-glass card surface. Spread it into an `sx` callback and add
// layout props (padding, height, ...) per component.
export const glassStyle = (theme) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(59, 130, 246, 0.1)'
    : '1px solid rgba(30, 64, 175, 0.1)',
});
