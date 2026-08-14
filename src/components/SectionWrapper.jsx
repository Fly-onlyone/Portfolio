import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, title, subtitle }) => {
  return (
    <motion.section
      id={id}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          {(title || subtitle) && (
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              {title && (
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    mb: subtitle ? 2 : 0,
                    background: 'linear-gradient(45deg, #2563EB 30%, #06B6D4 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography variant="h6" color="text.secondary">
                  {subtitle}
                </Typography>
              )}
            </Box>
          )}
          {children}
        </Container>
      </Box>
    </motion.section>
  );
};

export default SectionWrapper;
