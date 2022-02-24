import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider  } from "@mui/material/styles";
import muiTheme from "style/mui-theme";

import GlobalStyle from 'style/global';
import theme from 'style/theme';

import {LocalizationProvider} from "@mui/lab";
import ruLocale from 'date-fns/locale/ru';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp
