import { Box } from '@mui/material';
import { MotionConfig, useReducedMotion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        {!prefersReducedMotion && <ParticleBackground />}
        <Navbar />
        <Box component="main">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </MotionConfig>
  );
}

export default App;
