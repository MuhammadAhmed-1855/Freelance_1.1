// components/Works.js

import React from 'react';
import { Container, Typography, Grid, Paper, CardMedia } from '@mui/material';

const Works = () => {
  const steps = [
    {
      title: 'Step 1',
      description: 'Sign up for our service by providing your email and creating a password.',
      image: 'https://via.placeholder.com/200', // Replace with your image URL
    },
    {
      title: 'Step 2',
      description: 'Explore the features and functionalities of our platform to understand how it can benefit you.',
      image: 'https://via.placeholder.com/200', // Replace with your image URL
    },
    {
      title: 'Step 3',
      description: 'Customize your profile settings to personalize your experience according to your preferences.',
      image: 'https://via.placeholder.com/200', // Replace with your image URL
    },
    {
      title: 'Step 4',
      description: 'Connect with other users, share your experiences, and collaborate on projects.',
      image: 'https://via.placeholder.com/200', // Replace with your image URL
    },
  ];

  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h3" color="textPrimary" gutterBottom>
        How It Works
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Paper sx={{ p: 1, m: 5, display: 'flex', alignItems: 'center', height: '80%', width: '80%', marginBottom: index === 1 ? 4 : 0 }}>
              <CardMedia
                component="img"
                alt={`Step ${index + 1}`}
                height="auto" // Increase image height
                width="auto"
                image={step.image}
                sx={{ marginRight: 3, borderRadius: '8px' }}
              />
              <div>
                <Typography variant="h5" color="primary" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body1">{step.description}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Works;
