import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Fab } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box 
      component={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        py: 4,
        px: 2,
        mt: 8,
        borderTop: '1px solid',
        borderImage: 'linear-gradient(to right, transparent, rgba(59,130,246,0.5), rgba(6,182,212,0.5), transparent) 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        position: 'relative'
      }}
    >
      <Box display="flex" gap={2}>
        <IconButton 
          href={personalInfo?.github || 'https://github.com'} 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary', bgcolor: 'action.hover' } }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2026 Nguyễn Gia Huy. All rights reserved.
      </Typography>

      <AnimatePresence>
        {showTopBtn && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000 }}
          >
            <Fab 
              color="primary" 
              size="medium" 
              onClick={goToTop} 
              aria-label="scroll back to top"
              sx={{ boxShadow: '0 4px 20px rgba(59,130,246,0.5)' }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Footer;
