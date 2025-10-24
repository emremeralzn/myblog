import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Auction from './pages/Auction';
import Cybersecurity from './pages/Cybersecurity';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import Gambling from './pages/Gambling';
import './styles/global.css';
import './App.css';
import Work from './pages/Work';
import RecruitmentPortal from './pages/RecruitmentPortal';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log(formData);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--text-primary', darkMode ? '#ffffff' : '#212121');
    document.documentElement.style.setProperty('--background-paper', darkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)');
    document.documentElement.style.setProperty('--background-default', darkMode ? '#121212' : '#ffffff');
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
        light: '#e3f2fd',
        dark: '#1976d2',
      },
      secondary: {
        main: '#757575',
      },
      background: {
        default: darkMode ? '#121212' : '#ffffff',
        paper: darkMode ? '#1e1e1e' : '#f5f5f5',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#212121',
        secondary: darkMode ? '#b0bec5' : '#757575',
      },
    },
    typography: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      allVariants: {
        color: darkMode ? '#ffffff' : '#212121',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            color: darkMode ? '#ffffff' : '#212121',
            boxShadow: 'none',
            backdropFilter: 'blur(10px)',
            borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            minHeight: '48px',
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: '48px !important',
            padding: '0 16px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '8px',
            padding: '4px 12px',
            fontSize: '0.9rem',
            minHeight: '32px',
            color: darkMode ? '#ffffff' : '#212121',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: '4px',
            fontSize: '1.2rem',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: darkMode ? '#ffffff' : '#212121',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
            color: darkMode ? '#ffffff' : '#212121',
          },
        },
      },
    },
  });

  const MainContent = () => (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
         <section id="work">
          <Work/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
        
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/auction" element={<Auction />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/gambling" element={<Gambling />} />
        <Route path="/isealim-portal" element={<RecruitmentPortal />} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
