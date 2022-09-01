import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (isDarkTheme) => (
  isDarkTheme ?
    darkTheme
    : lightTheme
);

const darkTheme = createTheme({
  palette: {
    "mode": "dark",
    primary: {
      main: 'rgb(230, 230, 230)',
    },

    background: {
      paper: 'rgb(20, 20, 20)',
    },

  }

})
createTheme({
  palette: {
        mode: 'light',
 
  },
 });

const lightTheme = createTheme({
  palette: {
    "mode": "light",
    primary: {
      main: '#FEFBF5',
    },

    background: {
      default: '#FFF',
      paper: '#FEFBF5'
    },
  },

})

