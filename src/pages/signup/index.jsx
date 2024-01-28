import React, { useState } from 'react';
import { TextField, Button, Card } from '@mui/material';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { auth } from '../../../utils/firebase'; // Ensure this path is correct
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();
  const borderRadiusStyle = { borderRadius: '20px' };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(userCredential.user);
      toast.success('Sign up successful!');
      router.push('/signin');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email already in use.');
        return;
      }
      else if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email.');
        return;
      }
      else if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak.');
        return;
      } 
      else if (error.code === 'auth/operation-not-allowed') {
        toast.error('Operation not allowed.');
        return;
      }
      else {
        toast.error('Something went wrong.');
        return;
      }

    }
  };

  const handleSignInClick = () => {
    router.push('/signin');
  };


  return (
    <>
      {/* Google Font Link - Poppins */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />

      <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: '12px', backgroundColor: '#f0f0f0', fontFamily: 'Poppins, sans-serif' }}>
        <Card style={{ maxWidth: '960px', width: '80%', height: '530px' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            {/* Login Form Section */}
            <div style={{ flexGrow: 0.65, padding: '24px' }}>
              {/* Sign In Header with Google Icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '30px', paddingLeft: '68px', paddingTop: '30px', marginLeft: '100px' }}>Sign Up</h1>
                {/* <GoogleIcon   /> */}
              </div>

              <form onSubmit={handleSignUp}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <TextField
                    style={{ ...borderRadiusStyle, width: '70%' }}
                    label="Email"
                    name="email"
                    type="email"
                    margin="normal"
                    required
                    variant="outlined"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <TextField
                    style={{ ...borderRadiusStyle, width: '70%' }}
                    label="Password"
                    name="password"
                    type="password"
                    margin="normal"
                    required
                    variant="outlined"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <TextField
                    style={{ ...borderRadiusStyle, width: '70%' }}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    margin="normal"
                    required
                    variant="outlined"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ ...borderRadiusStyle, margin: '16px 0', width: '25%' }}
                  >
                    Sign Up
                  </Button>
                </div>
                {/* Other Links */}
              </form>
            </div>
            {/* Gradient Background Section */}
            <div style={{ flexGrow: 1, background: 'linear-gradient(45deg, #6DD5FA, #FF758C)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#333' }}>
              <h1>Welcome to Signup</h1>
              <p>Already have an account?</p>
              <br />
              {/* Sign Up Button */}
              <Button
                variant="outlined"
                color="primary"
                style={{ textTransform: 'none', borderRadius: '20px' }}
                onClick={handleSignInClick} // Add onClick handler


              >
                Sign In
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
