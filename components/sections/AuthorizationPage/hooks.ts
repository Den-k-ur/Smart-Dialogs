import { FormEvent, useCallback, useState } from 'react';

import { AuthorizationServices } from 'store/authorization';

import { useAppDispatch } from 'store/hooks';

type LoginTypes = {
  email: string;
  password: string;
};

export const useAuthorization = () => {
  const dispatch = useAppDispatch();

  const [isHide, setHide] = useState(false);

  const handleLogin = useCallback(({ email, password }: LoginTypes) => {
    dispatch(AuthorizationServices.login({ email: email, password: password }));
  }, []);

  const TogglePassword = useCallback(() => {
    setHide(!isHide);
  }, [isHide]);

  return { handleLogin, TogglePassword, isHide };
};
