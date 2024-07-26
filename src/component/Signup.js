import React, { useState } from 'react';
import './Signup.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Signup = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      setIsLoggedIn(true); // Update login status on successful login
      navigate('/welcome');
    },
    onError: error => console.log(error),
  });

  const handleLogout = () => {
    // Perform logout actions if needed
    setIsLoggedIn(false); // Update login status to false
    // Redirect or handle post-logout actions
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      className="signup-container" // Apply signup-container class here
    >
      <Card sx={{ maxWidth: 400, p: 3 }} className="signup-card"> {/* Apply signup-card class here */}
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {isLoggedIn ? 'Sign Out' : 'Sign Up'}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {isLoggedIn
              ? 'You are signed in. Click below to sign out.'
              : 'Sign up with your Google account to get started.'}
          </Typography>
          {isLoggedIn ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
              className="signup-button-secondary" // Apply signup-button-secondary class here
            >
              Sign Out
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<GoogleIcon />}
              onClick={() => login()}
              className="signup-button-primary" // Apply signup-button-primary class here
            >
              Sign Up with Google
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Signup;
