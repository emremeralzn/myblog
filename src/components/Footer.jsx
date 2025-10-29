import React, { memo } from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Footer = memo(() => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <Paper
      component="footer"
      elevation={0}
      sx={{
        background: '#121212', // Navbar ile aynı arka plan
        borderTop: '1.5px solid #222b3a',
        py: { xs: 3, sm: 4 },
        px: { xs: 1.5, sm: 3 },
        boxShadow: 'none',
        mt: 6
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: { xs: 2, sm: 2.5 }
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
            fontWeight: 400
          }}
        >
          © 2025 <Box component="span" sx={{ color: '#2196f3', fontWeight: 700 }}>Emre MERAL</Box> | {t.copyright}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 3 },
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/emremeralzn"
            target="_blank"
            sx={{
              transition: 'color 0.2s',
              '&:hover': { color: '#2196f3', background: 'rgba(33,150,243,0.08)' },
              fontSize: { xs: 22, sm: 24 }
            }}
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/emre-meralsm/"
            target="_blank"
            sx={{
              transition: 'color 0.2s',
              '&:hover': { color: '#2196f3', background: 'rgba(33,150,243,0.08)' },
              fontSize: { xs: 22, sm: 24 }
            }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://instagram.com/emremzn"
            target="_blank"
            sx={{
              transition: 'color 0.2s',
              '&:hover': { color: '#2196f3', background: 'rgba(33,150,243,0.08)' },
              fontSize: { xs: 22, sm: 24 }
            }}
            aria-label="Instagram"
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
});

Footer.displayName = 'Footer';

export default Footer;
