import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, FormControlLabel, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { auth, signInWithGooglePopup } from '../../../utils/firebase'; // Adjust the path as needed
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';

function ForgotPasswordDialog({ open, onClose }) {
    const [emailForReset, setEmailForReset] = useState('');

    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, emailForReset);
            toast.success('Password reset link sent! Check your email.');
            onClose();
        } catch (error) {
            toast.error('Failed to send password reset email.');
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={emailForReset}
                    onChange={(e) => setEmailForReset(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleResetPassword}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default function SignIn() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [openDialog, setOpenDialog] = useState(false);

    const router = useRouter();
    const borderRadiusStyle = { borderRadius: '20px' };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            router.push('/home'); // Redirect to home page or any other page
          }
        });
    
        return () => unsubscribe();
      }, [router]);

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            toast.success('Sign In successful!');
            // You might want to redirect the user to the home page or dashboard here
        } catch (error) {
            toast.error('Failed to sign in. Please check your credentials.');
        }
    };

    const handleForgotPasswordClick = () => {
        setOpenDialog(true);
    };

    const handleSignUpClick = () => {
        router.push('/signup');
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
            <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: '12px', backgroundColor: '#f0f0f0', fontFamily: 'Poppins, sans-serif' }}>
                <Card style={{ maxWidth: '960px', width: '80%', height: '530px' }}>
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div style={{ flexGrow: 0.65, padding: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h1 style={{ fontSize: '30px', paddingLeft: '68px', paddingTop: '30px', marginLeft: '110px' }}>Sign In</h1>
                            </div>
                            <form onSubmit={handleSignIn}>
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
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', marginTop: '8px' }}>
                                        <FormControlLabel
                                            control={<Checkbox color="primary" />}
                                            label="Remember Me"
                                        />
                                        <Button
                                            variant="text"
                                            color="primary"
                                            style={{ textTransform: 'none', borderRadius: '10px' }}
                                            onClick={handleForgotPasswordClick}
                                        >
                                            Forgot password?
                                        </Button>
                                    </div>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        style={{ ...borderRadiusStyle, margin: '16px 0', width: '25%' }}
                                    >
                                        Sign in
                                    </Button>
                                    <br />
                                    <Button
                                        variant="contained"
                                        style={{
                                            borderRadius: '20px',
                                            backgroundImage: 'linear-gradient(45deg, #6DD5FA, #FF758C)',
                                            color: 'CA67E7',
                                        }}
                                        onClick={signInWithGooglePopup}
                                    >
                                        <GoogleIcon /> &nbsp; &nbsp;Login with Google
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div style={{ flexGrow: 1, background: 'linear-gradient(45deg, #6DD5FA, #FF758C)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#333' }}>
                            <h1>Welcome to Login</h1>
                            <p>Don't have an account?</p>
                            <br />
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ textTransform: 'none', borderRadius: '20px' }}
                                onClick={handleSignUpClick}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </Card>
                <ForgotPasswordDialog open={openDialog} onClose={() => setOpenDialog(false)} />
            </div>
        </>
    );
}
