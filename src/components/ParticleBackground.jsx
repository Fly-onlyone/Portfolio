import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        backgroundColor: 'background.default',
        pointerEvents: 'none',
        transition: 'background-color 0.35s ease',
      }}
    >
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '30vw',
          height: '30vw',
          background: 'radial-gradient(circle, #2563EB 0%, rgba(37,99,235,0) 70%)',
          borderRadius: '50%',
          opacity: isDark ? 0.25 : 0.1,
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 50, -150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, #06B6D4 0%, rgba(6,182,212,0) 70%)',
          borderRadius: '50%',
          opacity: isDark ? 0.3 : 0.12,
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 150, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '30%',
          width: '35vw',
          height: '35vw',
          background: 'radial-gradient(circle, #2563EB 0%, rgba(37,99,235,0) 70%)',
          borderRadius: '50%',
          opacity: isDark ? 0.25 : 0.1,
          filter: 'blur(80px)',
        }}
      />
    </Box>
  );
};

export default ParticleBackground;
