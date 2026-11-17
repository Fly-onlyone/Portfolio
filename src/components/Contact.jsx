import React from 'react';
import { Box, Card, Typography, Link, IconButton, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionWrapper from './SectionWrapper';
import { usePortfolioData } from '../i18n/usePortfolioData';

const getContactItems = (personalInfo, t) => [
  {
    icon: <EmailIcon />,
    label: t.email,
    value: personalInfo?.email || '',
    link: `mailto:${personalInfo?.email}`,
    copyable: true,
    color: '#3B82F6',
  },
  {
    icon: <PhoneIcon />,
    label: t.phone,
    value: personalInfo?.phone || '',
    // Strip spaces from the display format ("+84 822 066 908") for the tel: URI.
    link: `tel:${(personalInfo?.phone || '').replace(/[^\d+]/g, '')}`,
    copyable: true,
    color: '#06B6D4',
  },
  {
    icon: <GitHubIcon />,
    label: t.github,
    value: 'Fly-onlyone',
    link: personalInfo?.github || '',
    external: true,
    color: '#60A5FA',
  },
  {
    icon: <LocationOnIcon />,
    label: t.location,
    value: personalInfo?.location || '',
    color: '#22D3EE',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const Contact = () => {
  const { personalInfo, ui } = usePortfolioData();
  const t = ui.contact;
  const contactItems = getContactItems(personalInfo, t);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <SectionWrapper id="contact" title={t.title} subtitle={t.subtitle}>
      <Box sx={{ maxWidth: 720, mx: 'auto' }}>
        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <motion.div variants={itemVariants} whileHover={{ y: -4 }} style={{ height: '100%' }}>
                <Card
                  sx={(theme) => ({
                    height: '100%',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    cursor: item.link ? 'pointer' : 'default',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.04)'
                      : 'rgba(255, 255, 255, 0.65)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '20px',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(59, 130, 246, 0.1)'
                      : '1px solid rgba(30, 64, 175, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(59, 130, 246, 0.08)'
                        : 'rgba(59, 130, 246, 0.06)',
                      borderColor: item.color,
                      boxShadow: `0 8px 32px ${item.color}22`,
                    },
                  })}
                >
                  {/* Icon + Actions row */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `${item.color}18`,
                        color: item.color,
                        fontSize: 24,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      {item.copyable && (
                        <Tooltip title={t.copy} arrow>
                          <IconButton
                            size="small"
                            onClick={(e) => { e.stopPropagation(); handleCopy(item.value); }}
                            sx={{
                              color: 'text.secondary',
                              '&:hover': { color: item.color, bgcolor: `${item.color}15` },
                            }}
                          >
                            <ContentCopyIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      )}
                      {item.external && (
                        <Tooltip title={t.openLink} arrow>
                          <IconButton
                            size="small"
                            component="a"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              color: 'text.secondary',
                              '&:hover': { color: item.color, bgcolor: `${item.color}15` },
                            }}
                          >
                            <OpenInNewIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </Box>

                  {/* Label */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: item.color,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '0.7rem',
                    }}
                  >
                    {item.label}
                  </Typography>

                  {/* Value */}
                  {item.link ? (
                    <Link
                      href={item.link}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      color="inherit"
                      underline="none"
                      sx={{ '&:hover': { color: item.color } }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontSize: '1.05rem',
                          wordBreak: 'break-all',
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        fontSize: '1.05rem',
                      }}
                    >
                      {item.value}
                    </Typography>
                  )}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default Contact;
