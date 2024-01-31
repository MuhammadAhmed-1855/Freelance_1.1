// components/Works.js

import React from 'react';
import { Container, Typography, Grid, Paper, CardMedia } from '@mui/material';
import Image from 'next/image';
import SignIn from '../images/signin.jpg';
import WalletGen from '../images/walletgen.jpg';
import BuyImg from '../images/buy.jpg';
import SellImg from '../images/sell.jpg';

const Works = () => {
  const steps = [
    {
      title: 'Sign In',
      description: 'Securely access our platform by providing your email and creating a password.',
      image: SignIn, // Replace with your image URL
    },
    {
      title: 'Wallet Generation',
      description: 'A unique wallet generated for each user, ensuring the security of their digital assets.',
      image: WalletGen, // Replace with your image URL
    },
    {
      title: 'Buy',
      description: 'A seamless and secure transaction experience buying USDT or Ruble from local sellers.',
      image: BuyImg, // Replace with your image URL
    },
    {
      title: 'Sell',
      description: 'List your USDT or Ruble for sale on our platform for hassle-free transactions in local community.',
      image: SellImg, // Replace with your image URL
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
              <Image
                src={step.image}
                alt={`Step ${index + 1}`}
                width={250} // Adjust width and height based on your preference
                height={250}
                style={{ borderRadius: '8px', marginBottom: '1rem' }}
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
