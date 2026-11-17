import React from 'react';
import { Box, Card, Typography, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CircleIcon from '@mui/icons-material/Circle';
import SectionWrapper from './SectionWrapper';
import { usePortfolioData } from '../i18n/usePortfolioData';
import { glassStyle } from '../styles';

const Experience = () => {
  const { experience, ui } = usePortfolioData();

  return (
    <SectionWrapper id="experience" title={ui.experience.title} subtitle={ui.experience.subtitle}>
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <Timeline position="right" sx={{ p: 0, m: 0 }}>
          {experience?.map((job, index) => (
            <TimelineItem key={index} sx={{ '&::before': { display: 'none' } }}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', pl: 2, pr: 0 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={(theme) => ({ ...glassStyle(theme), p: { xs: 2, md: 3 } })}>
                    <Typography variant="h6" component="h3" sx={(theme) => ({ color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main' })}>
                      {job.company}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, mt: 0.5 }}>{job.role}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.5, color: 'text.secondary' }}>
                      <CalendarMonthIcon sx={{ fontSize: 16 }} />
                      <Typography variant="body2">{job.period}</Typography>
                    </Box>

                    <List dense sx={{ my: 1.5 }}>
                      {job.description.map((desc, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 0.5, alignItems: 'flex-start' }}>
                          <ListItemIcon sx={{ minWidth: 24, mt: 1 }}>
                            <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={desc} slotProps={{ primary: { sx: { color: 'text.secondary' } } }} />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {job.techStack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ color: 'secondary.main', borderColor: 'secondary.main', px: 0.5 }}
                        />
                      ))}
                    </Box>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </SectionWrapper>
  );
};

export default Experience;
