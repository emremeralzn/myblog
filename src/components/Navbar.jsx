import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      let currentSection = sections[0];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'blog') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Hakkımda', section: 'about' },
    { label: 'Projeler', section: 'projects' },
    { label: 'Eğitim', section: 'experience' },
    { label: 'İletişim', section: 'contact' },
    { label: 'Blog', section: 'blog' }
  ];

  return (
    <AppBar position="fixed" className={`navbar ${isScrolled ? 'scrolled' : ''}`} sx={{ height: '70px' }}>
      <Toolbar className="navbar-container" sx={{ minHeight: '40px !important' }}>
        <div className="logo" onClick={() => scrollToSection('home')}>
          <Typography variant="h6" className="logo-text" sx={{ fontSize: '1rem' }}>
            {'</>'}
          </Typography>
        </div>

        {/* Masaüstü menü */}
        <Box className={`nav-links`} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <Button
              key={item.section}
              className="nav-link"
              onClick={() => scrollToSection(item.section)}
              sx={{
                minHeight: '32px',
                fontSize: '0.8rem',
                padding: '0 8px',
                borderBottom: activeSection === item.section ? '2px solid #2196f3' : 'none'
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobil menü butonları */}
        <div className="navbar-actions">
          <IconButton
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
            size="small"
            sx={{ padding: '4px', display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: '1.2rem' }} />
          </IconButton>
        </div>

        {/* Mobil açılır menü */}
        <Drawer
          anchor="top"
          open={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              background: 'rgba(18,18,18,0.98)',
              color: '#fff',
              boxShadow: 'none',
              paddingTop: '70px',
              width: '100%',
              maxWidth: '100vw',
              overflowX: 'hidden'
            }
          }}
        >
          <List sx={{ 
            width: '100%', 
            textAlign: 'center',
            padding: 0,
            margin: 0
          }}>
            {navItems.map((item) => (
              <ListItem key={item.section} disablePadding sx={{ width: '100%' }}>
                <ListItemButton
                  onClick={() => scrollToSection(item.section)}
                  sx={{
                    justifyContent: 'center',
                    py: 2,
                    fontSize: '1.1rem',
                    color: activeSection === item.section ? '#2196f3' : '#fff',
                    width: '100%'
                  }}
                >
                  <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 