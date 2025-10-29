import React from 'react';
import {
  Grid,
  Button,
  Container,
  Typography,
  Box,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import './Home.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { language } = useLanguage();
  const t = translations[language].home;

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="home-page">
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Box className="hero-section" sx={{ py: { xs: 4, md: 6 } }}>
          <Box
            className="content-wrapper"
            sx={{
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 4 : 0,
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              style={{ flex: 1, marginTop: isMobile ? 32 : 0 }}
            >
              <Box className="text-content">
                <Typography
                  variant={isMobile ? 'h2' : 'h1'}
                  className="main-title"
                  sx={{
                    lineHeight: 1.2,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: isMobile ? 'center' : 'left',
                    '& .highlight': {
                      lineHeight: 'inherit',
                      display: 'inline-block',
                      whiteSpace: 'nowrap'
                    },
                    mt: isMobile ? 2 : 0
                  }}
                >
                  {t.greeting}{' '}
                  <span className="highlight">{t.title}</span>
                </Typography>
                {isMobile && <Box sx={{ height: 32 }} />}
                <Typography
                  variant="body1"
                  className="description"
                  sx={{
                    lineHeight: 1.6,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: isMobile ? 'center' : 'left',
                    mt: 2
                  }}
                >
                  {t.description}
                </Typography>
                <Box
                  className="button-group"
                  sx={{
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    mt: 3
                  }}
                >
                  <Button
                    variant="contained"
                    className="contact-button"
                    href="#contact"
                  >
                    {t.contactButton}
                  </Button>
                  <Button
                    variant="outlined"
                    className="cv-button"
                    href={t.cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.cvButton}
                  </Button>
                </Box>
              </Box>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              style={{ flex: 1 }}
            >
              <Box
                className="image-container"
                sx={{
                  ml: isMobile ? 0 : 4 // Resmi sağa kaydırır
                }}
              >
                <img
                  src="https://i.imgur.com/F2bC5pg.png"
                  alt="Developer"
                  className="hero-image"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    paddingTop: '32px'
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
      {/* Mobilde About ile Home arasında boşluk */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, height: 32 }} />
    </div>
  );
};

export default Home;
