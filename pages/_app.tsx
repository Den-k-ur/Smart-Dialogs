import React from 'react';

import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';

import { theme } from '../theme';
import { GlobalStyles } from '../theme/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
