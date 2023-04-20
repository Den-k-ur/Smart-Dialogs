import React from 'react';

import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';

import { Theme } from '../theme';
import { GlobalStyles } from '../theme/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
