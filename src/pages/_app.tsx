import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'style/global';
import theme from 'style/theme';

import {LocalizationProvider} from "@mui/lab";
import ruLocale from 'date-fns/locale/ru';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp
