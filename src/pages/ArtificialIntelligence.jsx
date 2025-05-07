import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './ProjectStyles.css';

const ArtificialIntelligence = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: 'Yapay Zeka Destekli Görüntü Sınıflandırıcı',
    description: 'Bu projede, kullanıcıların yüklediği görselleri analiz ederek belirli bir kategoriye (örneğin meyve, hayvan, nesne) sınıflandıran bir görüntü sınıflandırma modeli geliştirilmiştir. Görsel veriler, ön işleme adımlarından (yeniden boyutlandırma, normalize etme vb.) geçirildikten sonra, eğitimli bir yapay zeka modeli tarafından analiz edilir ve sınıf tahmini yapılır.',
    images: [
      'https://i.imgur.com/ndB65k4.png'
    ],
    features: [
      'Derin öğrenme tabanlı görüntü sınıflandırma modeli',
      'Kullanıcı dostu web arayüzü',
      'Gerçek zamanlı görüntü analizi',
      'Çoklu sınıf tahmin desteği',
      'Yüksek doğruluk oranı',
      'Detaylı sınıflandırma sonuçları',
      'Görsel ön işleme ve normalizasyon',
      'Model performans metrikleri',
      'Kolay entegrasyon API',
      'Detaylı dokümantasyon'
    ],
    technologies: ['Python', 'PyTorch', 'Gradio', 'NumPy', 'Pillow', 'scikit-learn', 'Flask', 'OpenCV']
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
              src={project.images[0]}
              alt="Proje görseli"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '800px',
                objectFit: 'contain'
              }}
            />
          </Paper>
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

export default ArtificialIntelligence; 