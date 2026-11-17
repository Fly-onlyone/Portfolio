import React from 'react';
import { Box, Card, Typography, Chip, List, ListItem, ListItemIcon, ListItemText, Button, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleIcon from '@mui/icons-material/Circle';
import InsightsIcon from '@mui/icons-material/Insights';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolioData';
import { glassStyle } from '../styles';

// Accent bar is a pseudo-element (not border-image) so the card keeps its
// 16px rounded corners; Card's overflow: hidden clips the bar to the radius.
const projectCardStyle = (theme) => ({
  ...glassStyle(theme),
  position: 'relative',
  p: { xs: 2.5, md: 4 },
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '4px',
    background: 'linear-gradient(to bottom, #2563eb, #06b6d4)',
  },
});

const highlightStyle = (theme) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 1,
  px: 1.5,
  py: 1,
  mb: 2,
  borderRadius: '10px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(6, 182, 212, 0.12)'
    : 'rgba(8, 145, 178, 0.08)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(6, 182, 212, 0.35)'
    : '1px solid rgba(8, 145, 178, 0.3)',
});

const Projects = () => {
  return (
    <SectionWrapper id="projects" title="Dự án" subtitle="Những dự án tôi đã thực hiện">
      <Grid container spacing={4}>
        {projects?.map((project, index) => (
          <Grid size={{ xs: 12 }} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ height: '100%' }}
            >
              <Card sx={(theme) => projectCardStyle(theme)}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', columnGap: 2, rowGap: 1, mb: 1 }}>
                  <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip icon={<CalendarMonthIcon fontSize="small" />} label={project.period} size="small" sx={(theme) => ({ color: 'text.primary', bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(30,64,175,0.06)' })} />
                    <Chip icon={<GroupIcon fontSize="small" />} label={`${project.members} thành viên`} size="small" sx={(theme) => ({ color: 'text.primary', bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(30,64,175,0.06)' })} />
                  </Box>
                </Box>
                <Typography variant="subtitle1" sx={{ color: 'secondary.main', mb: 2 }}>
                  {project.subtitle}
                </Typography>

                {project.highlight && (
                  <Box sx={highlightStyle}>
                    <InsightsIcon
                      fontSize="small"
                      sx={(theme) => ({
                        mt: '2px',
                        color: theme.palette.mode === 'dark' ? 'secondary.light' : 'secondary.dark',
                      })}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {project.highlight}
                    </Typography>
                  </Box>
                )}

                <List dense sx={{ mb: 2, flexGrow: 1 }}>
                  {project.description.map((desc, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5, alignItems: 'flex-start' }}>
                      <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                        <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText primary={desc} slotProps={{ primary: { sx: { color: 'text.secondary' } } }} />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.techStack.map((tech, idx) => (
                    <Chip key={idx} label={tech} size="small" color="secondary" variant="outlined" sx={{ color: 'secondary.main', borderColor: 'secondary.main', px: 1 }} />
                  ))}
                </Box>

                <Divider sx={{ my: 3, borderColor: 'rgba(59,130,246,0.2)' }} />

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {project.repos?.map((repo, idx) => (
                    <Button 
                      key={idx}
                      variant="outlined" 
                      startIcon={<GitHubIcon />}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={(theme) => ({
                        color: 'text.primary',
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.3)'
                          : 'rgba(30,64,175,0.25)',
                      })}
                    >
                      {repo.label || 'GitHub'}
                    </Button>
                  ))}
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Projects;
