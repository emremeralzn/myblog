import { Container, Typography, Box, Grid, Paper, IconButton, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './ProjectStyles.css';

const Auction = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].projectDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = translations[language].auction;
  
  const project = {
    title: projectData.title,
    description: projectData.description,
    images: [
      'https://i.imgur.com/AfY8yoD.png',
      'https://i.imgur.com/OHSiAKv.png',
      'https://i.imgur.com/mXQCMiT.png',
      'https://i.imgur.com/S4Zc5Oz.png',
      'https://i.imgur.com/6A12vSN.png',
      'https://i.imgur.com/uyDhrwr.png',
      'https://i.imgur.com/drnzOQV.png',
      'https://i.imgur.com/xashY5Q.png'
    ],
    features: projectData.features,
    technologies: ['React', 'Node.js', 'MSSQL', 'ASP.NET', 'Material-UI', 'Redux', 'Identity', 'JWT', 'Stripe','Rest API','SignalR']
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container maxWidth="lg" className="project-detail-container">
      <Button
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => navigate('/#projects')}
        sx={{
          mb: 4,
          color: '#2196f3',
          '&:hover': {
            backgroundColor: 'rgba(33, 150, 243, 0.1)'
          }
        }}
      >
         {t.backButton}
      </Button>

      <Typography 
        variant="h3" 
        component="h1" 
        className="project-detail-title"
        sx={{
          mb: 4,
          textAlign: 'center',
          color: '#2196f3'
        }}
      >
        {project.title}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          {project.description}
        </Typography>
      </Paper>

      <Box sx={{ mb: 6, position: 'relative' }}>
        <Box sx={{ position: 'relative', width: '100%', height: 'auto', minHeight: '500px' }}>
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5'
            }}
          >
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - ${t.imageAlt} ${currentImageIndex + 1}`}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '800px',
                objectFit: 'contain'
              }}
            />
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(33, 150, 243, 0.9)',
                color: 'white',
                width: '48px',
                height: '48px',
                '&:hover': {
                  backgroundColor: 'rgba(33, 150, 243, 1)',
                  transform: 'translateY(-50%) scale(1.1)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(33, 150, 243, 0.9)',
                color: 'white',
                width: '48px',
                height: '48px',
                '&:hover': {
                  backgroundColor: 'rgba(33, 150, 243, 1)',
                  transform: 'translateY(-50%) scale(1.1)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Paper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1.5,
              mt: 3
            }}
          >
            {project.images.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: currentImageIndex === index ? '#2196f3' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: currentImageIndex === index ? '#2196f3' : '#bdbdbd',
                    transform: 'scale(1.2)'
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: '#2196f3' }}>
              {t.featuresTitle}
            </Typography>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {project.features.map((feature, index) => (
                <li key={index}>
                  <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: '#2196f3' }}>
              {t.technologiesTitle}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {project.technologies.map((tech, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    color: '#2196f3',
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    fontSize: '1rem'
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Auction; 