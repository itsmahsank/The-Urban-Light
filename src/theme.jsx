import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue shade for light mode
      contrastText: '#000', // Black text for buttons
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#000', // Black text for light mode
      secondary: '#555',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue shade for dark mode
      contrastText: '#fff', // White text for buttons
    },
    background: {
      default: '#121212',
      paper: '#1c1c1c',
    },
    text: {
      primary: '#fff', // White text for dark mode
      secondary: '#aaa',
    },
  },
});
