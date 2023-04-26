import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { useRouter } from 'next/router';

import { authorizationActions, tokenServices } from 'store/authorization';

export const useHeadersRedirect = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = useCallback(() => {
    router.push('/authorization');
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(authorizationActions.setIsAuth(false));
    tokenServices.removeTokens();
  }, []);

  return { handleLogin, handleLogout };
};
