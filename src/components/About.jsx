import React from 'react';
import { Card, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import SectionWrapper from './SectionWrapper';
import { usePortfolioData } from '../i18n/usePortfolioData';
import { glassStyle } from '../styles';

const About = () => {
  const { personalInfo, education, ui } = usePortfolioData();
  const t = ui.about;

  const infoItems = [
    { icon: <CalendarMonthIcon color="primary" />, label: t.dob, value: personalInfo?.dob || '' },
    { icon: <LocationOnIcon color="primary" />, label: t.location, value: personalInfo?.location || '' },
    { icon: <SchoolIcon color="primary" />, label: t.gpa, value: education?.gpa || '' },
    { icon: <LanguageIcon color="primary" />, label: t.cert, value: education?.cert || '' },
  ];

  return (
    <SectionWrapper id="about" title={t.title} subtitle={t.subtitle}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              {t.personalInfo}
            </Typography>
            <Card sx={(theme) => ({ ...glassStyle(theme), p: 2, mb: 2 })}>
              <List>
                {infoItems.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * (index + 1) }}>
                    <ListItem>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} secondary={item.value} slotProps={{ secondary: { sx: { color: 'text.secondary' } } }} />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Card>
          </motion.div>
        </Grid>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" color="primary" gutterBottom sx={{ ml: 2 }}>
              {t.education}
            </Typography>
            <Timeline position="right" sx={{ p: 0, m: 0 }}>
              <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Card sx={(theme) => ({ ...glassStyle(theme), p: 2 })}>
                    <Typography variant="h6" component="span" sx={{ color: 'primary.light' }}>
                      {education?.school}
                    </Typography>
                    <Typography>{education?.degree}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{education?.period}</Typography>
                    <Typography variant="body2" sx={{ color: 'secondary.main' }}>GPA: {education?.gpa}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{t.honors}: {education?.honors}</Typography>
                    <Typography variant="body2" sx={{ color: 'secondary.main' }}>{t.cert}: {education?.cert}</Typography>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </motion.div>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default About;
