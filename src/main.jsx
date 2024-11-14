import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme.jsx';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Theme Function
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <StrictMode>
        <App darkMode={darkMode} handleToggleTheme={handleToggleTheme} />
      </StrictMode>
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
