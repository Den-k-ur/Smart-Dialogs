import React, { ChangeEvent, FC } from 'react';

import { StyledPasswordInput } from './styles';

type PasswordInputTypes = {
  isHide: boolean;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput: FC<PasswordInputTypes> = ({ isHide, placeholder, onChange }) => {
  return (
    <StyledPasswordInput
      placeholder={placeholder}
      type={isHide ? 'password' : 'text'}
      onChange={onChange}
      required
    />
  );
};
