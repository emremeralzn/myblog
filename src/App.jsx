import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import './styles/global.css';
import './App.css';

// Eagerly loaded components (critical for initial render)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

// Lazy loaded components (loaded on demand)
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));
const Work = lazy(() => import('./pages/Work'));
const Auction = lazy(() => import('./pages/Auction'));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const ArtificialIntelligence = lazy(() => import('./pages/ArtificialIntelligence'));
const Gambling = lazy(() => import('./pages/Gambling'));
const RecruitmentPortal = lazy(() => import('./pages/RecruitmentPortal'));

// Loading fallback component
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#121212',
    }}
  >
    <CircularProgress />
  </Box>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty('--text-primary', darkMode ? '#ffffff' : '#212121');
    document.documentElement.style.setProperty('--background-paper', darkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)');
    document.documentElement.style.setProperty('--background-default', darkMode ? '#121212' : '#ffffff');
  }, [darkMode]);

  // Memoized theme to prevent unnecessary re-renders
  const theme = useMemo(() => createTheme({
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
  }), [darkMode]);

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
        <Suspense fallback={<LoadingFallback />}>
          <section id="projects">
            <Projects />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <section id="experience">
            <Experience />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <section id="work">
            <Work/>
          </section>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <section id="contact">
            <Contact/>
          </section>
        </Suspense>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/auction" element={<Auction />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/gambling" element={<Gambling />} />
          <Route path="/isealim-portal" element={<RecruitmentPortal />} />
          <Route path="*" element={<MainContent />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
