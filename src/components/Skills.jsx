import React from 'react';
import { Box, Card, Typography, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import TableChartIcon from '@mui/icons-material/TableChart';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolioData';
import { glassStyle } from '../styles';

const iconMap = {
  Code: <CodeIcon />,
  TableChart: <TableChartIcon />,
  ModelTraining: <ModelTrainingIcon />,
  BarChart: <BarChartIcon />,
  Storage: <StorageIcon />,
  Build: <BuildIcon />
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Kỹ năng" subtitle="Công nghệ và công cụ tôi sử dụng">
      <Box component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Grid container spacing={3}>
          {skills?.map((skillGroup, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} style={{ height: '100%' }}>
                <Card sx={(theme) => ({ ...glassStyle(theme), p: 3, height: '100%', display: 'flex', flexDirection: 'column' })}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 1, display: 'flex' }}>
                      {iconMap[skillGroup.icon] || <CodeIcon />}
                    </Box>
                    <Typography variant="h6">{skillGroup.category}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillGroup.items.map((skill, idx) => (
                      <motion.div key={idx} whileHover={{ y: -2, boxShadow: '0 0 15px rgba(59,130,246,0.4)' }}>
                        <Chip 
                          label={skill} 
                          variant="outlined" 
                          color="primary"
                          sx={(theme) => ({ 
                            color: 'text.primary', 
                            borderColor: theme.palette.mode === 'dark'
                              ? 'rgba(255,255,255,0.3)'
                              : 'rgba(30,64,175,0.3)',
                            '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(59,130,246,0.1)' }
                          })} 
                        />
                      </motion.div>
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default Skills;
