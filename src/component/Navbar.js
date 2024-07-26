import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: isMobile ? 1 : 0 }}>
          Silveroak
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/story">
            Story
          </Button>
        </Box>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
