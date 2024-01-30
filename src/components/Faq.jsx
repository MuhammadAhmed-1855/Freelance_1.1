// components/FAQ.js

import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const faqData = [
    {
      question: 'What is your product?',
      answer: 'Our product is designed to...',
    },
    {
      question: 'How can I get started?',
      answer: 'To get started, follow these steps:...',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a free trial period for our product...',
    },
    // Add more FAQ entries as needed
  ];

  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h3" color="textPrimary" gutterBottom>
        About ARCOV
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              width: '70%',
              maxWidth: '600px',
              // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden', // Ensure rounded corners display properly
              boxSizing: 'border-box',
              borderRadius: 8,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}-content`}
              id={`faq-panel-${index}-header`}
              sx={{ 
                borderRadius: 8,
                // backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="h5" color="primary">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 12px 12px' }}>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default Faq;
