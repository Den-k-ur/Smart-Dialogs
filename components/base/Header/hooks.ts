import { useCallback, useState } from 'react';

import { useDispatch } from 'react-redux';

import { useRouter } from 'next/router';

import { authorizationActions, tokenServices } from 'store/authorization';

export const useHeadersRedirect = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = useCallback(() => {
    router.push('/authorization');
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(authorizationActions.setIsAuth(false));
    tokenServices.removeTokens();
  }, []);

  const handleOpenAccMenu = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const handleLogoClick = useCallback(() => {
    router.push('/');
  }, []);

  return { handleLogin, handleLogout, handleOpenAccMenu, handleLogoClick, isOpen };
};
