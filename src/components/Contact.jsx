import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import ContactUs from '../images/contactus.jpg';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async () => {
    const templateParams = {
      from_name: form.email,
      to_name: 'ARCOV Support',
      message: form.message,
    };

    try {
        // Initialize emailjs
        emailjs.init(process.env.NEXT_EMAIL_JS_USER);

        // Send email using emailjs
        const response = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
          templateParams,
          process.env.NEXT_PUBLIC_EMAIL_JS_USER
        );
    
        toast.success('Email sent successfully:', response);
      } catch (error) {
        toast.error('Error sending email:', error);
        console.error('Error sending email:');
      }
  };

  return (
    <Container sx={{ py: 6, px: 8 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          {/* Image component at the top */}
          <Image
            src={ContactUs}
            alt="Contact"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Form at the bottom */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                label="Your Email"
                name='email'
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                onChange={handleInputChange}
              />
              <TextField
                {...register('message', { required: 'Message is required' })}
                label="Your Message"
                name='message'
                multiline
                rows={4}
                fullWidth
                margin="normal"
                error={!!errors.message}
                helperText={errors.message && errors.message.message}
                onChange={handleInputChange}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
