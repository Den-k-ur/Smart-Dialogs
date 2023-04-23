import React, { useEffect, useState } from 'react';

import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import { wrapper } from 'store';

import { tokenServices } from 'store/authorization';

import type { AppProps } from 'next/app';

import { Theme } from '../theme';
import { GlobalStyles } from '../theme/globalStyles';

function AppWrapper({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const stored = tokenServices.getLocalAccessToken();
    setToken(stored || '');
  }, [token]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...rest} />
      </ThemeProvider>
    </Provider>
  );
}

export default AppWrapper;
