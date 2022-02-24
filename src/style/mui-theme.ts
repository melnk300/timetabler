import { createTheme,ThemeOptions } from "@mui/material/styles/";


export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ef6c00',
    },
  },
  typography: {
    fontFamily: '"Cuprum", "Helvetica", "Arial", sans-serif',
  },
};


const theme = createTheme(themeOptions);

export default theme;