import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../i18n/usePortfolioData';
import heroImage from '../assets/hero.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// On phones the CV buttons take a full row each and GitHub / Contact share
// the last row; from `sm` up every button keeps its natural width.
const cvButtonFlex = { xs: '1 1 100%', sm: '0 0 auto' };
const secondaryButtonFlex = { xs: '1 1 0', sm: '0 0 auto' };

const Hero = () => {
  const { personalInfo, objective, ui } = usePortfolioData();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, md: 0 },
        pb: { xs: 6, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }} direction={{ xs: 'column-reverse', md: 'row' }} sx={{ alignItems: 'center' }}>
          {/* LEFT Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography variant="h6" color="secondary" sx={{ mb: 1, fontWeight: 500 }}>
                  {ui.hero.greeting}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.75rem' },
                  }}
                >
                  {personalInfo?.name || 'Nguyễn Gia Huy'}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  component="p"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', md: '1.75rem' },
                    lineHeight: 1.4,
                    color: 'secondary.main',
                  }}
                >
                  {/* nowrap keeps each role on one line; phones break at the dot */}
                  <Box component="span" sx={{ whiteSpace: 'nowrap' }}>Fresher Data Analyst ·</Box>{' '}
                  <Box component="span" sx={{ whiteSpace: 'nowrap' }}>Data Scientist</Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, maxWidth: '560px', lineHeight: 1.8, color: 'text.secondary' }}
                >
                  {objective}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  {personalInfo?.cv?.map((cv) => (
                    <Button
                      key={cv.file}
                      variant="contained"
                      color="primary"
                      href={import.meta.env.BASE_URL + cv.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<PictureAsPdfIcon />}
                      sx={{
                        flex: cvButtonFlex,
                        borderRadius: '8px',
                        px: 2.5,
                        background: 'linear-gradient(45deg, #2563EB 30%, #06B6D4 90%)',
                      }}
                    >
                      {cv.label}
                    </Button>
                  ))}
                  <Button
                    variant="outlined"
                    color="secondary"
                    href={personalInfo?.github || 'https://github.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    sx={{ flex: secondaryButtonFlex, borderRadius: '8px', px: 2.5 }}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={scrollToContact}
                    startIcon={<EmailIcon />}
                    sx={{ flex: secondaryButtonFlex, borderRadius: '8px', px: 2.5 }}
                  >
                    {ui.hero.contact}
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* RIGHT Column */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={heroImage}
              alt="Nguyễn Gia Huy"
              sx={{
                width: { xs: '180px', sm: '240px', md: '100%' },
                maxWidth: { md: '400px' },
                aspectRatio: '3 / 4',
                borderRadius: { xs: '20px', md: '24px' },
                objectFit: 'cover',
                objectPosition: 'center 30%',
                filter: 'drop-shadow(0px 10px 20px rgba(59, 130, 246, 0.2))',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
