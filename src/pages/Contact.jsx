import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid, Typography, TextField, Button, IconButton, Paper, Box, useTheme, useMediaQuery, Alert
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram'; // <-- Instagram ikonu eklendi
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://sonhali-env.eba-qqnxckpz.us-east-1.elasticbeanstalk.com/api/email', {
        to: form.email,
        subject: form.subject,
        body: form.message
      });

      if (response.status === 200) {
        setSent(true);
        setForm({ email: '', subject: '', message: '' });
        toast.success('Mesajınız başarıyla gönderildi!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.';
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="contact-container" style={{ width: '100vw', maxWidth: '1100px', margin: '0 auto', padding: '4rem 0' }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h1"
          className="contact-title"
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
          İletişim
        </Typography>
      </motion.div>

      <Grid container spacing={4} className="contact-grid" alignItems="center" justifyContent="center" style={{ width: '100%' }}>
        <Grid item xs={12} md={3} style={{ width: '100%' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <Paper elevation={0} className="contact-info-card">
              <Typography
                variant="body1"
                className="contact-desc"
                sx={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  textAlign: isMobile ? 'center' : 'left'
                }}
              >
                Herhangi bir sorunuz, öneriniz veya paylaşmak istediğiniz bir konu varsa, sizinle iletişimde olmaktan mutluluk duyarım. En kısa sürede size dönüş yapabilmek için elimden gelen tüm özeni göstereceğim.
              </Typography>
              <Box className="contact-socials" sx={{ justifyContent: isMobile ? 'center' : 'flex-start' }}>
                <IconButton href="https://github.com/emremeralzn" target="_blank" className="contact-social-icon" aria-label="GitHub">
                  <GitHubIcon fontSize={isMobile ? "medium" : "large"} />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/emre-meralsm/" target="_blank" className="contact-social-icon" aria-label="LinkedIn">
                  <LinkedInIcon fontSize={isMobile ? "medium" : "large"} />
                </IconButton>
                <IconButton href="https://instagram.com/emremzn" target="_blank" className="contact-social-icon" aria-label="Instagram">
                  <InstagramIcon fontSize={isMobile ? "medium" : "large"} />
                </IconButton>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={9} style={{ width: '100%' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <Paper elevation={0} className="contact-form-card contact-form-fullwidth" style={{ width: '100%' }}>
              <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
                {error && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                  </Alert>
                )}
                <TextField
                  label="E-posta Adresiniz"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  margin="normal"
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                />
                <TextField
                  label="Konu"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  margin="normal"
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                />
                <TextField
                  label="Mesaj"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  rows={isMobile ? 5 : 7}
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  margin="normal"
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="contact-btn"
                  fullWidth
                  disabled={loading}
                  sx={{
                    mt: 2,
                    py: isMobile ? 1.5 : 2.2,
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.25rem'
                  }}
                >
                  {loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
                {sent && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    Mesajınız başarıyla gönderildi!
                  </Alert>
                )}
              </form>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
