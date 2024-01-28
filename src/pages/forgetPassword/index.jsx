import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../utils/firebase'; // Ensure this path is correct
import { toast } from 'react-hot-toast';

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
