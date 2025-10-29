import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Box, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { language } = useLanguage();
  const t = translations[language].projects;

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

  const projectsData = t.projectsList;
  
  const projects = [
    {
      id: 'isealim-portal',
      title: projectsData[0].title,
      description: projectsData[0].description,
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
      title: projectsData[1].title,
      description: projectsData[1].description,
      image: 'https://res.cloudinary.com/dtgayqxdr/image/upload/v1761289933/transportation-website_flduow.png',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Git', 'Cloudinary', 'Netlify','SEO','JSON'],
      link: 'https://github.com/emremeralzn/guven-transportation',
       website: 'https://guven-nakliyat.netlify.app/'
    },
    {
      id: 'acik-arttirma',
      title: projectsData[2].title,
      description: projectsData[2].description,
      image: 'https://i.imgur.com/AfY8yoD.png',
      tags: ['ASP.NET Core', 'React', 'JavaScript', 'SQL Server', 'SignalR', 'Redux Toolkit', 'JWT'],
      link: 'https://github.com/emremeralzn/front-end',
      detailPath: '/auction'
    },
   
    {
      id: 'siber-guvenlik',
      title: projectsData[3].title,
      description: projectsData[3].description,
      image: 'https://i.imgur.com/5I3R3zP.png',
      tags: ['ASP.NET Core', 'React', 'JWT', 'SQLite', 'Onion Architecture'],
      link: 'https://github.com/emremeralzn/siberguvenlikprojesi',
      detailPath: '/cybersecurity'
    },
    {
      id: 'yapay-zeka',
      title: projectsData[4].title,
      description: projectsData[4].description,
      image: 'https://i.imgur.com/ndB65k4.png',
      tags: ['Artificial intelligence', 'PyTorch', 'Gradio', 'Python'],
      link: 'https://github.com/emremeralzn/artificial-intelligence',
      detailPath: '/artificial-intelligence'
    },
    {
      id: 'kumar-bagimliligi',
      title: projectsData[5].title,
      description: projectsData[5].description,
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
          {t.title}
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
                  image={project.image}
                  alt={`${project.title} - ${language === 'tr' ? 'Proje Görseli' : 'Project Image'}`}
                  loading="lazy"
                  className="project-image"
                  sx={{
                    height: '300px',
                    objectFit: 'contain',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)'
                  }}
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
                        {t.viewDetails}
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
                        {t.visitWebsite}
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