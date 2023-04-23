import React, { FC } from 'react';

import { StyledPasswordInput } from './styles';

type PasswordInputTypes = {
  isHide: boolean;
  placeholder: string;
};

export const PasswordInput: FC<PasswordInputTypes> = ({ isHide, placeholder }) => {
  return <StyledPasswordInput placeholder={placeholder} type={isHide ? 'password' : 'text'} />;
};
