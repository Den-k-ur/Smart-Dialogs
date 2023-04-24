import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import { authorizationActions, authorizationSelectors } from 'store/authorization';

import { useAppDispatch } from 'store/hooks';

import { UserServices } from 'store/user';
import { Theme } from 'theme';

type Props = {
  children?: React.ReactNode;
  token: string | null;
};

const Application: React.FC<Props> = ({ children, token }) => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(authorizationSelectors.isAuth);

  useEffect(() => {
    dispatch(authorizationActions.setIsAuth(Boolean(token)));
  }, [token]);

  useEffect(() => {
    if (isAuth) {
      dispatch(UserServices.userName(token as string));
    }
  }, [isAuth, token]);

  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default Application;
