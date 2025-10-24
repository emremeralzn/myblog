import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Box, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { motion } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const projects = [
    {
      id: 'isealim-portal',
      title: 'İşe Alım Portalı Backend',
      description: 'Turkuvaz Medya’nın işe alım portalının backend altyapısını ASP.NET Core ile sıfırdan geliştirdim. Katmanlı mimari, JWT tabanlı kimlik doğrulama ve FluentValidation ile güvenli ve sürdürülebilir bir yapı kurdum. Veritabanı yönetimini Database-First yaklaşımıyla Entity Framework Core üzerinden gerçekleştirdim. Proje kapsamında, EBA sistemine otomatik veri aktarımını sağlayan REST tabanlı bir entegrasyon API’si geliştirdim.',
      image: 'https://res.cloudinary.com/dx9s65lk3/image/upload/v1761291617/Screenshot_131_xrskvb.png',
      tags: [
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
        'Identity',
        'Postman',
        'Swagger',
        'Unit Test',
        'Cypress',
        'TypeScript',
        'Angular',
        'JSON',
        'Git',
        'Trello'
      ],
      detailPath: '/isealim-portal'
    },
    {
      id: 'transportation-management-system',
      title: 'Nakliyat Web Sitesi',
      description: 'Bu proje, modern web geliştirme teknolojileri kullanılarak inşa edilmiş bir nakliyat web sitesidir. Next.js ve Tailwind CSS ile tasarlanmış olan bu site, kullanıcı dostu bir deneyim sunmak amacıyla TypeScript ile güçlendirilmiştir. Aynı zamanda site, Git ile versiyon kontrolü yapılırken, Cloudinary ve Netlify gibi servisler ile medya yönetimi ve dağıtım kolaylaştırılmıştır. SEO dostu yapısı sayesinde arama motorlarında daha görünür bir hale gelir. JSON verileriyle entegre çalışarak verimli ve hızlı veri yönetimi sağlar.',
      image: 'https://res.cloudinary.com/dtgayqxdr/image/upload/v1761289933/transportation-website_flduow.png',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Git', 'Cloudinary', 'Netlify','SEO','JSON'],
      link: 'https://github.com/emremeralzn/guven-transportation',
       website: 'https://guven-nakliyat.netlify.app/'
    },
    {
      id: 'acik-arttirma',
      title: 'Açık Arttırma Web Sitesi',
      description: 'Bu proje, ASP.NET Core ve React kullanılarak geliştirilmiş tam kapsamlı bir e-ticaret uygulamasıdır. Clean Architecture ve CQRS desenleri kullanılmıştır. SignalR ile gerçek zamanlı bildirim, JWT ile kimlik doğrulama sağlanmıştır. Veritabanı olarak MSSQL tercih edilmiştir.',
      image: 'https://i.imgur.com/AfY8yoD.png',
      tags: ['ASP.NET Core', 'React', 'JavaScript', 'SQL Server', 'SignalR', 'Redux Toolkit', 'JWT'],
      link: 'https://github.com/emremeralzn/front-end',
      detailPath: '/auction'
    },
   
    {
      id: 'siber-guvenlik',
      title: 'Siber Güvenlik Simülasyonu',
      description: 'Bu proje, ASP.NET Core (backend) ve React (frontend) teknolojileri kullanılarak geliştirilmiş bir siber güvenlik simülasyonudur. Backend tarafında katmanlı ve sürdürülebilir bir yapı için Onion Architecture tercih edilmiştir. Uygulama, kullanıcıların belirli güvenlik senaryoları üzerinden etkileşimli bir şekilde test yapmasını ve sonuçları analiz etmesini sağlamaktadır.',
      image: 'https://i.imgur.com/5I3R3zP.png',
      tags: ['ASP.NET Core', 'React', 'JWT', 'SQLite', 'Onion Architecture'],
      link: 'https://github.com/emremeralzn/siberguvenlikprojesi',
      detailPath: '/cybersecurity'
    },
    {
      id: 'yapay-zeka',
      title: 'Yapay Zeka Destekli Görüntü Sınıflandırıcı',
      description: 'Bu projede, kullanıcıların yüklediği görselleri analiz ederek belirli bir kategoriye (örneğin meyve, hayvan, nesne) sınıflandıran bir görüntü sınıflandırma modeli geliştirilmiştir. Görsel veriler, ön işleme adımlarından (yeniden boyutlandırma, normalize etme vb.) geçirildikten sonra, eğitimli bir yapay zeka modeli tarafından analiz edilir ve sınıf tahmini yapılır.',
      image: 'https://i.imgur.com/ndB65k4.png',
      tags: ['Artificial intelligence', 'PyTorch', 'Gradio', 'Python'],
      link: 'https://github.com/emremeralzn/artificial-intelligence',
      detailPath: '/artificial-intelligence'
    },
    {
      id: 'kumar-bagimliligi',
      title: 'Kumar Bağımlılığı Web Sitesi',
      description: 'Bu proje, kumar bağımlılığı hakkında farkındalık oluşturmak ve bilgilendirme sağlamak amacıyla hazırlanmıştır. Uygulama React ile geliştirilmiş olup, modern ve sade bir yapıda sunulmuştur. Kullanıcıların bağımlılıkla ilgili içeriklere kolayca erişebilmesi hedeflenmiştir. Proje, Netlify altyapısı kullanılarak hızlı ve kolay bir şekilde yayınlanmıştır.',
      image: 'https://i.imgur.com/mkksj0e.png',
      tags: ['React', 'Material UI', 'JavaScript', 'Bootstrap'],
      link: 'https://github.com/emremeralzn/client-app-react',
      website: 'https://emreodemir.netlify.app'
    }
  ];

  return (
    <Container maxWidth="lg" className="projects-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Typography 
          variant={isMobile ? "h3" : "h2"}
          component="h1" 
          className="projects-title"
          sx={{
            lineHeight: 1.2,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            paddingBottom: '0.5em',
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(45deg, #2196f3, #64b5f6)',
              borderRadius: '2px'
            }
          }}
        >
          Projelerim
        </Typography>
      </motion.div>

      <Grid container spacing={4} className="projects-grid">
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={project.id}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            >
              <Card 
                className="project-card"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(33, 150, 243, 0.15)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: isMobile ? 200 : 300,
                    objectFit: 'contain',
                    padding: '10px'
                  }}
                  image={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <CardContent className="project-content" sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant={isMobile ? "h6" : "h5"}
                    className="project-title"
                    sx={{
                      lineHeight: 1.2,
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                      color: '#2196f3',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    className="project-description"
                    sx={{
                      lineHeight: 1.6,
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                      mb: 3,
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box className="project-tags" sx={{ mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        className="project-tag"
                        size="small"
                        sx={{
                          m: 0.5,
                          backgroundColor: 'rgba(33, 150, 243, 0.1)',
                          color: '#2196f3',
                          '&:hover': {
                            backgroundColor: 'rgba(33, 150, 243, 0.2)'
                          }
                        }}
                      />
                    ))}
                  </Box>
                  <CardActions>
                    {project.detailPath && (
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => navigate(project.detailPath)}
                        sx={{
                          backgroundColor: 'rgba(33, 150, 243, 0.1)',
                          color: '#2196f3',
                          '&:hover': {
                            backgroundColor: 'rgba(33, 150, 243, 0.2)'
                          }
                        }}
                      >
                        Detayları Gör
                      </Button>
                    )}
                    {project.website && (
                      <Button
                        size="small"
                        color="primary"
                        href={project.website}
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
                        Siteye Git
                      </Button>
                    )}
                    {project.link && (
                    <Button
                      size="small"
                      color="primary"
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
                    )}
                  </CardActions>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 