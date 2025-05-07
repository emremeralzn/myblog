import { Container, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    '.NET Core', 'C#', 'Rest API', 'EF Core', 'Clean Architecture',
    'SOLID', 'Identity', 'CQRS and Mediator pattern', 
    'Dependency Injection', 'SignalR', 'OOP', 'Data Structures', 'React.js', 'CSS', 'Bootstrap', 'TypeScript',
    'JavaScript', 'Material UI', 'AutoMapper', 'JSON',
    'Visual Studio',  'Java', 'Firebase',
    'SQL', 'Git', 'GitHub', 'Postman', 'Python', 'Django', 'Data Science', 'Cyber Security', 'Web Pentesting',
    'Database Management', 'Ethical Hacking', 'Linux', 'Prompt Injection', 'Machine Learning',
  ];

  return (
    <Container maxWidth="lg" className="about-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Typography variant={isMobile ? "h3" : "h2"} component="h1" className="about-title" sx={{ textAlign: isMobile ? 'center' : 'center' }}>
          Hakkımda
        </Typography>
      </motion.div>
        
      <Box sx={{ 
        display: 'flex', 
        gap: '40px',
        alignItems: 'flex-start',
        mt: 2,
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          style={{ flex: 1 }}
        >
          <Box sx={{ 
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <img
              src="https://i.imgur.com/WVKtRn0.png"
              alt="Profil Görseli"
              style={{
                width: isMobile ? '100%' : '90%',
                height: 'auto',
                display: 'block',
                borderRadius: '10px'
              }}
            />
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          style={{ flex: 1 }}
        >
          <Box>
            <Typography variant="body1" className="about-description" sx={{ textAlign: isMobile ? 'center' : 'left' }}>
              Bilgisayar Mühendisiyim ve Full Stack geliştirme yapıyorum. Backend tarafında ASP.NET Core ile RESTful API'ler geliştiriyor, SQL veritabanları üzerinde çalışıyor ve TypeScript, JavaScript gibi teknolojilerle verimli çözümler üretiyorum. Frontend tarafında ise React ile modern, kullanıcı dostu arayüzler geliştiriyor, TypeScript ile güçlü ve ölçeklenebilir yapılar kuruyorum. Git ve GitHub gibi araçlarla sürüm kontrolü yapıyor ve geliştirdiğim bileşenler için test yazma konusunda özen gösteriyorum. Yazılım geliştirme süreçlerinde analitik düşünme yeteneğim ve problem çözme becerimle projeleri başarıyla tamamlıyorum. Yeni teknolojileri öğrenmeye ve kendimi sürekli geliştirmeye büyük önem veriyorum.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, textAlign: isMobile ? 'center' : 'left' }}>
            Yetenekler
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 2,
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            {skills.map((skill) => (
              <Button
                key={skill}
                variant="contained"
                sx={{
                  backgroundColor: 'rgba(33, 150, 243, 0.1)',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: 'rgba(33, 150, 243, 0.2)'
                  },
                  textTransform: 'none',
                  borderRadius: '20px',
                  padding: '8px 16px'
                }}
              >
                {skill}
              </Button>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About; 