import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import { personalInfo, objective } from '../data/portfolioData';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  const roles = ['AI Engineer', 'Python Developer', 'Data Enthusiast'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const role = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === role) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

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
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
          {/* LEFT Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography variant="h6" color="secondary" sx={{ mb: 1, fontWeight: 500 }}>
                  Xin chào, tôi là
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
                  component="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'text.secondary',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Tôi là một{' '}
                  <Box
                    component="span"
                    sx={{
                      ml: 1,
                      color: '#06B6D4',
                      borderRight: '2px solid #06B6D4',
                      paddingRight: '4px',
                      animation: 'blink 1s step-end infinite',
                      '@keyframes blink': {
                        '0%, 100%': { borderColor: 'transparent' },
                        '50%': { borderColor: '#06B6D4' },
                      },
                    }}
                  >
                    {currentText}
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, maxWidth: '500px', lineHeight: 1.8 }}
                >
                  {objective || 'Tôi là một kỹ sư phần mềm với niềm đam mê xây dựng các ứng dụng web và AI sáng tạo.'}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={scrollToContact}
                    sx={{
                      borderRadius: '8px',
                      px: 4,
                      background: 'linear-gradient(45deg, #2563EB 30%, #06B6D4 90%)',
                    }}
                  >
                    Liên hệ
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    href={personalInfo?.github || 'https://github.com'}
                    target="_blank"
                    startIcon={<GitHubIcon />}
                    sx={{ borderRadius: '8px', px: 4 }}
                  >
                    GitHub
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* RIGHT Column */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Nguyễn Gia Huy"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '300px', md: '400px' },
                  aspectRatio: '3 / 4',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  objectPosition: 'center 30%',
                  filter: 'drop-shadow(0px 10px 20px rgba(59, 130, 246, 0.2))',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
