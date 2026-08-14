import React from 'react';
import { Box, Card, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import SectionWrapper from './SectionWrapper';
import { personalInfo, education } from '../data/portfolioData';

const glassStyle = (theme) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(59, 130, 246, 0.1)'
    : '1px solid rgba(30, 64, 175, 0.1)',
  p: 2,
  mb: 2
});

const infoItems = [
  { icon: <CalendarMonthIcon color="primary" />, label: 'Ngày sinh', getValue: () => personalInfo?.dob || '' },
  { icon: <LocationOnIcon color="primary" />, label: 'Địa điểm', getValue: () => personalInfo?.location || '' },
  { icon: <SchoolIcon color="primary" />, label: 'GPA', getValue: () => education?.gpa || '' },
  { icon: <LanguageIcon color="primary" />, label: 'Chứng chỉ', getValue: () => education?.cert || '' },
];

const About = () => {
  return (
    <SectionWrapper id="about" title="Giới thiệu" subtitle="Học vấn & thông tin cá nhân">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Thông tin cá nhân
            </Typography>
            <Card sx={(theme) => glassStyle(theme)}>
              <List>
                {infoItems.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * (index + 1) }}>
                    <ListItem>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} secondary={item.getValue()} secondaryTypographyProps={{ color: 'text.secondary' }} />
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
              Học vấn
            </Typography>
            <Timeline position="right" sx={{ p: 0, m: 0 }}>
              <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Card sx={(theme) => ({ ...glassStyle(theme), mb: 0 })}>
                    <Typography variant="h6" component="span" color="primary.light">
                      {education?.school}
                    </Typography>
                    <Typography>{education?.degree}</Typography>
                    <Typography variant="body2" color="text.secondary">{education?.period}</Typography>
                    <Typography variant="body2" color="secondary.main">GPA: {education?.gpa}</Typography>
                    <Typography variant="body2" color="text.secondary">Xếp loại: {education?.honors}</Typography>
                    <Typography variant="body2" color="secondary.main">Chứng chỉ: {education?.cert}</Typography>
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
