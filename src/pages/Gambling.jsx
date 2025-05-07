import { Container, Typography, Box, Grid, Paper, IconButton, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectStyles.css';

const Gambling = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const project = {
    title: 'Kumar Oyunu Simülasyonu',
    description: 'Bu proje, kullanıcıların sanal para birimi ile çeşitli kumar oyunlarını deneyimleyebilecekleri bir simülasyon platformudur. Kullanıcılar, slot makineleri, rulet, blackjack gibi popüler kumar oyunlarını oynayabilir ve sanal para kazanabilirler. Platform, gerçekçi oyun deneyimi sunarken, sorumlu kumar alışkanlıklarını teşvik eden özellikler de içermektedir.',
    images: [
      'https://i.imgur.com/ndB65k4.png'
    ],
    features: [
      'Çeşitli kumar oyunları (Slot, Rulet, Blackjack)',
      'Sanal para sistemi',
      'Gerçekçi oyun mekanikleri',
      'Kullanıcı hesap yönetimi',
      'Oyun istatistikleri ve geçmiş',
      'Güvenli ödeme sistemi',
      'Sorumlu kumar özellikleri',
      'Canlı oyuncu desteği',
      'Mobil uyumlu tasarım',
      'Detaylı oyun kuralları ve yardım'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Material-UI', 'Redux', 'Express.js', 'JWT']
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
         Geri Dön
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
              alt={`Proje görseli ${currentImageIndex + 1}`}
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
              Öne Çıkan Özellikler
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
              Kullanılan Teknolojiler
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

export default Gambling; 