import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

// Create a theme instance.
const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#01426A',
      contrastText: '#ddd',
    },
    secondary: {
      main: '#007b5f',
    },
    tertiary: {
      main: '#42929D',
    },
    error: {
      main: '#610404',
    },
    warning: {
      main: '#FECC17',
    },
    backgroundDrawer: {
      main: grey[900],
    },
  },
});

export default themeDark;
