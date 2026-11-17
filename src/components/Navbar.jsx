import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon as MuiListItemIcon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import CheckIcon from '@mui/icons-material/Check';
import TranslateIcon from '@mui/icons-material/Translate';
import { motion } from 'framer-motion';
import { useThemeMode } from '../ThemeModeContext';
import { useLanguage } from '../i18n/languageContext';
import { usePortfolioData } from '../i18n/usePortfolioData';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [themeAnchor, setThemeAnchor] = useState(null);
  const { mode, setMode, resolvedMode } = useThemeMode();
  const { toggleLang } = useLanguage();
  const { navLinks, ui } = usePortfolioData();
  const t = ui.navbar;

  const themeOptions = [
    { value: 'light', label: t.light, icon: <LightModeIcon fontSize="small" /> },
    { value: 'dark', label: t.dark, icon: <DarkModeIcon fontSize="small" /> },
    { value: 'system', label: t.system, icon: <SettingsBrightnessIcon fontSize="small" /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    if (navLinks) {
      navLinks.forEach((link) => {
        if (link.href && link.href.startsWith('#')) {
          const id = link.href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(element);
            observers.push(observer);
          }
        }
      });
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [navLinks]);

  const currentIcon = mode === 'light'
    ? <LightModeIcon />
    : mode === 'dark'
      ? <DarkModeIcon />
      : <SettingsBrightnessIcon />;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          backgroundColor: resolvedMode === 'dark'
            ? 'rgba(9, 29, 66, 0.85)'
            : 'rgba(191, 219, 254, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: (theme) => `1px solid ${
            theme.palette.mode === 'dark'
              ? 'rgba(59, 130, 246, 0.15)'
              : 'rgba(30, 64, 175, 0.1)'
          }`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%', maxWidth: 'lg', mx: 'auto' }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 700, 
              background: 'linear-gradient(45deg, #2563EB 30%, #06B6D4 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => handleScrollToSection('#hero')}
          >
            Nguyễn Gia Huy
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navLinks && navLinks.map((item) => (
                <Button 
                  key={item.id || item.href} 
                  onClick={() => handleScrollToSection(item.href)}
                  sx={{ 
                    color: activeSection === item.href ? 'primary.main' : 'text.primary',
                    fontWeight: activeSection === item.href ? 700 : 500,
                    mx: 0.5
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Language Toggle */}
            <Tooltip title={t.switchLanguage}>
              <Button
                onClick={toggleLang}
                startIcon={<TranslateIcon fontSize="small" />}
                aria-label={t.switchLanguage}
                sx={{ color: 'text.primary', minWidth: 0, px: 1, fontWeight: 600 }}
              >
                {t.otherLanguage}
              </Button>
            </Tooltip>

            {/* Theme Toggle */}
            <Tooltip title={t.theme}>
              <IconButton
                onClick={(e) => setThemeAnchor(e.currentTarget)}
                sx={{
                  color: 'text.primary',
                  ml: 0.5,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(30deg)',
                  },
                }}
                aria-label="toggle theme"
              >
                {currentIcon}
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={themeAnchor}
              open={Boolean(themeAnchor)}
              onClose={() => setThemeAnchor(null)}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1,
                    minWidth: 160,
                    borderRadius: 2,
                    backdropFilter: 'blur(20px)',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(15, 32, 64, 0.95)'
                        : 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid',
                    borderColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(59, 130, 246, 0.15)'
                        : 'rgba(30, 64, 175, 0.1)',
                  },
                },
              }}
            >
              {themeOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  onClick={() => { setMode(option.value); setThemeAnchor(null); }}
                  selected={mode === option.value}
                  sx={{
                    borderRadius: 1,
                    mx: 0.5,
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    },
                  }}
                >
                  <MuiListItemIcon sx={{ minWidth: 36, color: mode === option.value ? 'primary.main' : 'text.secondary' }}>
                    {option.icon}
                  </MuiListItemIcon>
                  <ListItemText primary={option.label} />
                  {mode === option.value && (
                    <CheckIcon fontSize="small" sx={{ ml: 1, color: 'primary.main' }} />
                  )}
                </MenuItem>
              ))}
            </Menu>

            {/* Mobile Nav */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            {navLinks && navLinks.map((item) => (
              <ListItem key={item.id || item.href} disablePadding>
                <ListItemButton
                  onClick={() => handleScrollToSection(item.href)}
                  sx={{
                    borderRadius: 1,
                    color: activeSection === item.href ? 'primary.main' : 'text.primary',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: { sx: { fontWeight: activeSection === item.href ? 700 : 500 } },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
