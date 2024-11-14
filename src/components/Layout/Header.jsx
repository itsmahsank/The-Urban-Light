import React, { useState } from 'react';
import { Switch, AppBar, Box, Drawer, IconButton, Toolbar, Typography, Button, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export const Header = ({ darkMode, handleToggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme(); // Use the current theme
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? theme.palette.primary.main : theme.palette.text.primary, // Active link color
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '8px 16px', // Padding for clickable area
    borderRadius: '4px', // Border radius for better UI
    display: 'inline-block',
    backgroundColor: isActive ? theme.palette.action.hover : 'transparent', // Highlight active link
  });

  const drawerLinks = (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
      }}
      onClick={handleDrawerToggle}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 2 }}>
        The Urban Light
      </Typography>
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/menu" style={navLinkStyles}>
        Menu
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/contact" style={navLinkStyles}>
        Contact
      </NavLink>
    </Box>
  );

  return (
    <>
      <Box sx={{ margin: 0 }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }}
        >
          <Toolbar>
            <IconButton
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={handleDrawerToggle}
              color="inherit"
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
              The Urban Light
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                <li>
                  <NavLink to="/" style={navLinkStyles}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu" style={navLinkStyles}>
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" style={navLinkStyles}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" style={navLinkStyles}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Box>

            {/* Removed Action button */}
            <Switch
              checked={darkMode}
              onChange={handleToggleTheme}
              inputProps={{ 'aria-label': 'toggle dark mode' }}
            />
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: theme.palette.background.paper },
        }}
      >
        {drawerLinks}
      </Drawer>
    </>
  );
};
