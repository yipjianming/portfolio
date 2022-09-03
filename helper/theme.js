import { createTheme, css } from '@mui/material/styles';

export const theme = {
  light: createTheme({
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
  }),
  dark: createTheme({
    palette: {
      "mode": "dark",
      primary: {
        main: 'rgb(20, 20, 20)',
      },
      background: {
        default: 'rgb(20, 20, 20)',
        paper: 'rgb(20, 20, 20)',
      },

    }

  })
}



export const darkTheme = createTheme({
  palette: {
    "mode": "dark",
    primary: {
      main: 'rgb(20, 20, 20)',
    },
    background: {
      default: 'rgb(20, 20, 20)',
      paper: 'rgb(20, 20, 20)',
    },

  }

})


export const lightTheme = createTheme({
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

export const globalStyles = css`
  :root {
    body {
      background-color: #FFF;
      color: #121212;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: rgb(20, 20, 20);
      color: #fff;
    }
  }
`;
