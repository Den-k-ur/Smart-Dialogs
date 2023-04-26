import { useCallback, useState } from 'react';

import { AuthorizationServices } from 'store/authorization';

import { useAppDispatch } from 'store/hooks';

type LoginTypes = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const useAuthorization = () => {
  const dispatch = useAppDispatch();

  const [isHide, setHide] = useState(false);

  const handleLogin = useCallback(({ email, password, rememberMe }: LoginTypes) => {
    dispatch(
      AuthorizationServices.login({ email: email, password: password, rememberMe: rememberMe }),
    );
  }, []);

  const TogglePassword = useCallback(() => {
    setHide(!isHide);
  }, [isHide]);

  return { handleLogin, TogglePassword, isHide };
};
