import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: 'React ile Modern Web Uygulamaları',
      excerpt: 'React kullanarak modern web uygulamaları geliştirme sürecini ve en iyi pratikleri keşfedin.',
      category: 'Frontend',
      date: '15 Mart 2024',
      readTime: '5 dk'
    },
    {
      id: 2,
      title: 'TypeScript ile Tip Güvenliği',
      excerpt: 'TypeScript kullanarak kodunuzu daha güvenli hale getirin ve hataları önceden yakalayın.',
      category: 'TypeScript',
      date: '10 Mart 2024',
      readTime: '4 dk'
    },
    {
      id: 3,
      title: 'Node.js ile Backend Geliştirme',
      excerpt: 'Node.js kullanarak güçlü ve ölçeklenebilir backend uygulamaları geliştirme rehberi.',
      category: 'Backend',
      date: '5 Mart 2024',
      readTime: '6 dk'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Container maxWidth="lg" className="blog-container">
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '120px',
        mt: -4,
        mb: 8
      }}>
        <Typography variant="h6" className="vision-text" sx={{ maxWidth: '800px' }}>
          "Yazılım dünyasında başarı, en iyi fikirleri alıp onları mükemmel şekilde uygulayabilen
          ve kullanıcıların hayatına değer katan çözümlere dönüştürebilen kişilere aittir."
          <Box component="span" sx={{ display: 'block', mt: 2, textAlign: 'right', fontSize: '0.9em', opacity: 0.8 }}>
            - Bill Gates
          </Box>
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ pr: { md: 4 } }}>
            <Typography variant="h2" className="blog-title" sx={{ textAlign: 'left', mb: 4 }}>
              Blog
            </Typography>
            <Grid container spacing={3}>
              {blogPosts.map((post) => (
                <Grid item xs={12} key={post.id}>
                  <Card className="blog-card">
                    <CardContent>
                      <Box className="blog-meta">
                        <Chip
                          label={post.category}
                          size="small"
                          className="blog-category"
                        />
                        <Typography variant="caption" className="blog-date">
                          {post.date} • {post.readTime}
                        </Typography>
                      </Box>
                      <Typography variant="h5" className="blog-post-title">
                        {post.title}
                      </Typography>
                      <Typography variant="body1" className="blog-excerpt">
                        {post.excerpt}
                      </Typography>
                      <Button
                        variant="outlined"
                        className="read-more-button"
                        onClick={() => navigate(`/blog/${post.id}`)}
                      >
                        Devamını Oku
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box 
            sx={{ 
              position: 'sticky', 
              top: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Box
              sx={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid #2196f3',
                backgroundColor: '#1e1e1e',
                boxShadow: '0 8px 32px rgba(33, 150, 243, 0.2)',
              }}
            >
              <img
                src="/human.png"
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Typography variant="h4" sx={{ color: '#2196f3', fontWeight: 600, mt: 2 }}>
              Back-End Developer
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mt: 1 }}>
              4 yıllık tecrübeye sahip Full Stack Developer
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog; 