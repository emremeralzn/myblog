import { Container, Typography, Box, Paper, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RecruitmentPortal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: 'İşe Alım Portalı (Backend)',
    description: `Turkuvaz Medya'nın işe alım süreçlerini yönetmek için geliştirilmiş backend servisidir. 
    ASP.NET Core tabanlı RESTful API yapısı kullanılmış, JWT tabanlı kimlik doğrulama, 
    FluentValidation ile veri doğrulama ve Entity Framework Core (Database-First) yapısı uygulanmıştır.`,
    features: [
      'ASP.NET Core 8 tabanlı RESTful API mimarisi',
      'Katmanlı mimari: API, Business, DataAccess, Core',
      'JWT tabanlı kimlik doğrulama sistemi',
      'FluentValidation ile input doğrulama',
      'Veritabanı yönetimi Entity Framework (Database-First)',
      'Rol tabanlı kullanıcı yetkilendirme (Admin, HR, Aday)',
      'E-Posta gönderim modülü (MailKit üzerinden)',
      'Swagger ile API dokümantasyonu',
      'EBA sistemine veri aktarım API’si entegrasyonu'
    ],
    technologies: [ 'C#',
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
        'Identity',
        'Postman',
        'Swagger',
        'Unit Test',
        'Cypress',
        'TypeScript',
        'Angular',
        'JSON',
        'Git',
        'Trello'],
    link: 'https://github.com/emremeral/recruitment-backend'
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Button
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => navigate('/#projects')}
        sx={{
          mb: 4,
          color: '#2196f3',
          '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.1)' }
        }}
      >
        Geri Dön
      </Button>

      <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', color: '#2196f3' }}>
        {project.title}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          {project.description}
        </Typography>
      </Paper>

      {/* Backend mimarisi görseli */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <img
          src="https://res.cloudinary.com/dx9s65lk3/image/upload/v1761293815/diagram_drr0vq.png" // örnek mimari diyagram görseli
          alt="Backend mimarisi diyagramı"
          style={{
            width: '100%',
            maxWidth: '800px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        />
        <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'gray' }}>
          Katmanlı mimari yapısı (API - Business - DataAccess - Core)
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, color: '#2196f3' }}>
          Öne Çıkan Özellikler
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {project.features.map((feature, index) => (
            <li key={index}>
              <Typography variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
      </Paper>

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

      {project.link && (
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'rgba(33, 150, 243, 0.1)',
              color: '#2196f3',
              '&:hover': {
                backgroundColor: 'rgba(33, 150, 243, 0.2)'
              }
            }}
          >
            GitHub
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default RecruitmentPortal;
