import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface Palette {
    tertiary: {
      main: string;
      contrastText: string;
    };
    backgroundDrawer: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions {
    tertiary?: {
      main?: string;
      contrastText?: string;
    };
    backgroundDrawer?: {
      main: string;
    };
  }
}

// interface SimplePaletteColorOptions {
//   backgroundDrawer?: {
//     main: string;
//   };
// }

// export const overridesTheme = createTheme({
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         html: {
//           // WebkitFontSmoothing: 'auto',
//           height: '100%',
//           fontFamily: "'Roboto', sans-serif",
//         },
//         body: {
//           overflowY: 'scroll',
//         },
//       },
//     },
//   },
// });

export const overridesTheme = createTheme({
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
});

// Create a theme instance.
// const theme = createTheme({
//   ...overridesTheme,
//   palette: {
//     primary: {
//       main: '#55dd11',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

// export default theme;
