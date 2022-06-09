import { createTheme } from '@material-ui/core/styles';
import { Shadows } from "@material-ui/core/styles/shadows"

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    }
  },
  palette: {
    text: {
      primary: '#212529',
    },
    primary: {
      main: '#0D80D8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#36B065',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: Array(25).fill("none") as Shadows,
});

export default theme;