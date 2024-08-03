import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#232C24' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          component={Link}
          to="/characters"
        >
          <img 
            src="/klipartz.com.png" 
            alt="Rick And Morty"
            style={{ height: 60 }}
          />
        </IconButton>
        <Button
          color="inherit"
          component={Link}
          to="/characters"
          sx={{ marginLeft: 'auto' }}
        >
          Characters
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
