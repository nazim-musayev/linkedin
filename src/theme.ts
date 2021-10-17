import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a66c2',
    },
    info: {
      main: "#4d4d4d"
    }
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          fontSize: "14px"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "sans-serif"
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200,
    }
  }
});

export default theme;
