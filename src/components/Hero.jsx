// // components/Hero.js

// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';

// const Hero = () => {
//   return (
//     <div style={{ backgroundImage: 'url("/path/to/your-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px' }}>
//       <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
//         <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
//           Welcome to My Website
//         </Typography>
//         <Typography variant="h5" align="center" color="textSecondary" paragraph>
//           Explore amazing content and discover new experiences.
//         </Typography>
//         <Button variant="contained" color="primary">
//           Get Started
//         </Button>
//       </Container>
//     </div>
//   );
// };

// export default Hero;

// components/Hero.js

import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Hero = () => {
  return (
    <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
      <img
        src="/path/to/your-image.jpg"
        alt="Background"
        style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      />
      <Box
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'space-between',
          bottom: '10px',
          left: '10px',
          right: '10px',
        }}
      >
        <img src="/path/to/bottom-left-image.jpg" alt="Bottom Left" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
        <img src="/path/to/bottom-right-image.jpg" alt="Bottom Right" style={{ width: '50px', height: '50px', borderRadius: '50%', marginLeft: '10px' }} />
      </Box>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          position: 'relative',
          zIndex: 1,
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
