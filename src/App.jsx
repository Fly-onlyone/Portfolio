import { Box } from '@mui/material';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <ParticleBackground />
      <Navbar />
      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
