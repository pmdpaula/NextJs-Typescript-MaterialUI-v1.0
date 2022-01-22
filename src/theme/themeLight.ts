// import { createMuiTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

// Create a theme instance.
const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#42929D',
    },
    secondary: {
      main: '#007b5f',
      contrastText: '#ddd',
    },
    tertiary: {
      main: '#01426A',
      contrastText: '#ddd',
    },
    error: {
      main: red.A100,
    },
    warning: {
      main: '#FECC17',
    },
    // background: {
    //   default: '#fff',
    //   paper: '#f5f5f5',
    // },
  },
});

export default themeLight;

export type ThemeProps = typeof themeLight;
