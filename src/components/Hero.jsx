// components/Hero.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import backgroundImg from '../images/background.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div style={{ position: 'relative', height: '40rem', overflow: 'hidden' }}>
      <Image
        src={backgroundImg}
        alt="Background"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          maskImage: `radial-gradient(circle at top center, rgba(255, 255, 255, 0.8), transparent)`,
        }}
      />
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          position: 'relative',
          zIndex: 1,
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.9) 100%)`,
        }}
      >
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Explore amazing content and discover new experiences.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
