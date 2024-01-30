// components/Footer.js

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333', // Change to your desired background color
        color: '#fff', // Change to your desired text color
        py: 3, // Padding on the y-axis
        mt: 'auto', // Pushes the footer to the bottom of the page
        textAlign: 'center', // Centers the content
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} ARCOV. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Email Contacts:
        {' '}
        <Link href="mailto:support@arcov.com" color="inherit">
          support@arcov.com
        </Link>
        {' '}
        /
        {' '}
        <Link href="mailto:sales@arcov.com" color="inherit">
          sales@arcov.com
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link href="/privacy-policy" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        {' | '}
        <Link href="/terms-of-service" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
