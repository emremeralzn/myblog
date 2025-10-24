import { Container, Typography, Box, Grid, Paper, IconButton, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectStyles.css';

const RecruitmentPortal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: 'İşe Alım Portalı (Backend)',
    description: `Turkuvaz Medya’nın işe alım süreçlerini dijitalleştirmek amacıyla geliştirilmiş kurumsal backend servisidir. 
    Proje ASP.NET Core 8 ile sıfırdan geliştirilmiş olup, katmanlı mimari yapısı, Repository Pattern, 
    AutoMapper, FluentValidation ve JWT tabanlı kimlik doğrulama özellikleriyle sürdürülebilir ve ölçeklenebilir bir yapı sunmaktadır. 
    EBA sistemine otomatik veri aktarımı için REST tabanlı bir entegrasyon API’si de proje kapsamına dahil edilmiştir.`,
    images: [
      'https://res.cloudinary.com/dx9s65lk3/image/upload/v1761291617/Screenshot_131_xrskvb.png',
      'https://res.cloudinary.com/dx9s65lk3/image/upload/v1761293815/diagram_drr0vq.png',
      'https://res.cloudinary.com/dx9s65lk3/image/upload/v1761294917/Screenshot_134_cksekx.png',
      'https://res.cloudinary.com/dx9s65lk3/image/upload/v1761294733/Screenshot_133_dthidk.png',
      'https://res.cloudinary.com/dx9s65lk3/image/upload/v1761293809/Unit-of-Work-with-Repository-Pattern-in-ASP.NET-Core-Web-API_ys8ofp.png'
    ],
    features: [
      'ASP.NET Core 8 tabanlı RESTful API geliştirme',
      'Clean Architecture prensiplerine uygun katmanlı mimari',
      'Repository Pattern ve Unit of Work yaklaşımı',
      'Entity Framework Core (Database-First) ile veritabanı yönetimi',
      'Dependency Injection ile bağımlılıkların yönetimi',
      'AutoMapper ile Entity–DTO dönüşümleri',
      'FluentValidation ile model bazlı doğrulama',
      'Swagger ile API dokümantasyonu ve test desteği',
      'EBA sistemine REST API aracılığıyla veri aktarımı',
      'Postman ile API test senaryoları ve doğrulama',
      'JWT tabanlı kimlik doğrulama mekanizması',
      'Git ve Trello ile proje yönetimi ve versiyon kontrolü'
    ],
    technologies: [
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'SQL Server',
      'LINQ',
      'Db-First',
      'EBA API Integration',
      'Repository Pattern',
      'Dependency Injection',
      'AutoMapper',
      'Fluent-Validation',
      'JWT',
      'Clean Architecture',
      'REST API',
      'Postman',
      'Swagger',
      'Unit Test',
      'Git',
      'Trello'
    ]
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

      {/* Görsel Alanı */}
      <Box sx={{ mb: 6, position: 'relative' }}>
        <Box sx={{ position: 'relative', width: '100%', minHeight: '500px' }}>
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              height: '600px',
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
                height: '600px',
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
                width: 48,
                height: 48,
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
                width: 48,
                height: 48,
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

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 3 }}>
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

      {/* Özellikler ve Teknolojiler */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: '#2196f3' }}>
              Öne Çıkan Özellikler
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
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

export default RecruitmentPortal;
