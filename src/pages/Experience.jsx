import { Container, Typography, Box, Paper, Grid, Chip, Divider, useTheme, useMediaQuery } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GradeIcon from '@mui/icons-material/Grade';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
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

  const education = [
    {
      degree: 'Bilgisayar Mühendisliği',
      school: 'Erzurum Teknik Üniversitesi',
      period: '2021 - 2025',
      description: 'Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği bölümünde eğitimime devam ediyorum.',
      gpa: '2.80',
      achievements: [
        'Bölüm 3.sü',
        'Yüksek Onur Öğrencisi'
      ],
      courses: [
        'Veri Yapıları ve Algoritmalar',
        'Nesne Yönelimli Programlama',
        'Veritabanı Yönetim Sistemleri',
        'Web Programlama',
        'Yapay Zeka'
      ],
      image: 'https://i.imgur.com/zaQaKDA.png'
    }
  ];

  return (
    <Container maxWidth="lg" className="experience-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Typography 
          variant={isMobile ? "h3" : "h2"}
          component="h1" 
          className="experience-title"
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
          Eğitim
        </Typography>
      </motion.div>

      <Box className="experience-section">
        <Grid container spacing={3}>
          {education.map((edu, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
              >
                <Paper 
                  elevation={3} 
                  className="education-card"
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
                      {edu.image ? (
                        <img 
                          src={edu.image} 
                          alt={edu.school} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <SchoolIcon sx={{ fontSize: isMobile ? 40 : 50, color: '#2196f3' }} />
                      )}
                    </Box>
                    
                    <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                      <Typography 
                        variant={isMobile ? "h6" : "h5"}
                        className="card-title"
                        sx={{
                          lineHeight: 1.2,
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                          color: '#2196f3',
                          fontWeight: 600
                        }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography 
                        variant={isMobile ? "subtitle1" : "h6"}
                        className="card-company"
                        sx={{
                          lineHeight: 1.2,
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                          color: 'text.primary',
                          mt: 1
                        }}
                      >
                        {edu.school}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        className="card-period"
                        sx={{
                          lineHeight: 1.2,
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                          color: 'text.secondary',
                          mt: 1
                        }}
                      >
                        {edu.period}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />
                  
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 3, 
                    mb: 3,
                    justifyContent: isMobile ? 'center' : 'flex-start'
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      backgroundColor: 'rgba(33, 150, 243, 0.1)',
                      padding: '8px 16px',
                      borderRadius: '20px'
                    }}>
                      <GradeIcon sx={{ color: '#2196f3' }} />
                      <Typography sx={{ color: '#2196f3', fontWeight: 500 }}>
                        GPA: {edu.gpa}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography 
                    variant="body1" 
                    className="card-description"
                    sx={{
                      lineHeight: 1.6,
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                      mb: 3,
                      textAlign: isMobile ? 'center' : 'left',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}
                  >
                    {edu.description}
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
                      Öne Çıkan Dersler
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                      {edu.courses.map((course, idx) => (
                        <Chip
                          key={idx}
                          label={course}
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

export default Experience; 