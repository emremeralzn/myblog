import { Container, Typography, Box, Paper, Grid, Chip, Divider, useTheme, useMediaQuery } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import './Work.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Work = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { language } = useLanguage();
  const t = translations[language].work;

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

  const workData = t.workExperience[0];
  
  const workExperience = [
    {
      position: workData.position,
      company: workData.company,
      period: workData.period,
      location: workData.location,
      description: workData.description,
      skills: [
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
      image: 'https://i.imgur.com/bYsiBq0.jpeg'
    }
  ];
  

  return (
    <Container maxWidth="lg" className="work-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Typography 
          variant={isMobile ? "h3" : "h2"}
          component="h1" 
          className="work-title"
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

      <Box className="work-section">
        <Grid container spacing={3}>
          {workExperience.map((work, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
              >
                <Paper 
                  elevation={3} 
                  className="work-card"
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(33, 150, 243, 0.15)'
                    }
                  }}
                >
                  <Box className="card-header" sx={{ 
                    display: 'flex', 
                    gap: 3, 
                    alignItems: 'flex-start',
                    flexDirection: isMobile ? 'column' : 'row'
                  }}>
                    <Box sx={{ 
                      width: isMobile ? '80px' : '100px', 
                      height: isMobile ? '80px' : '100px', 
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid #2196f3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(33, 150, 243, 0.1)',
                      margin: isMobile ? '0 auto' : '0'
                    }}>
                      {work.image ? (
                        <img 
                          src={work.image} 
                          alt={`${work.company} - ${language === 'tr' ? 'Şirket Logosu' : 'Company Logo'}`}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <WorkIcon sx={{ fontSize: isMobile ? 40 : 50, color: '#2196f3' }} />
                      )}
                    </Box>
                    
                    <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                      <Typography 
                        variant={isMobile ? "h6" : "h5"}
                        className="card-title"
                      >
                        {work.position}
                      </Typography>
                      <Typography 
                        variant={isMobile ? "subtitle1" : "h6"}
                        className="card-company"
                        sx={{ mt: 1 }}
                      >
                        <BusinessIcon sx={{ fontSize: 18, mr: 1, verticalAlign: 'middle', color: '#2196f3' }} />
                        {work.company}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        className="card-period"
                      >
                        <CalendarMonthIcon sx={{ fontSize: 18, mr: 1, verticalAlign: 'middle', color: '#2196f3' }} />
                        {work.period}
                      </Typography>
                      <Typography 
                        variant="subtitle2"
                        sx={{ color: 'text.secondary', mt: 0.5 }}
                      >
                        <LocationOnIcon sx={{ fontSize: 18, mr: 1, verticalAlign: 'middle', color: '#2196f3' }} />
                        {work.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Typography 
                    variant="body1" 
                    className="card-description"
                    sx={{
                      lineHeight: 1.6,
                      mb: 3,
                      textAlign: isMobile ? 'center' : 'left',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}
                  >
                    {work.description}
                  </Typography>

                  <Box>
                    <Typography 
                      variant={isMobile ? "subtitle1" : "h6"}
                      sx={{ 
                        mb: 2,
                        color: '#2196f3',
                        textAlign: isMobile ? 'center' : 'left'
                      }}
                    >
                      {t.technologiesUsed}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                      {work.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          variant="outlined"
                          sx={{
                            borderColor: 'rgba(33, 150, 243, 0.3)',
                            color: '#2196f3',
                            '&:hover': {
                              backgroundColor: 'rgba(33, 150, 243, 0.1)'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Work;
