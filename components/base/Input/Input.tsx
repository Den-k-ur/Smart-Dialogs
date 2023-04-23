import React, { ChangeEvent, FC } from 'react';

import { StyledInput } from './styles';

type InputTypes = {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputTypes> = ({ placeholder, onChange }) => {
  return <StyledInput placeholder={placeholder} onChange={onChange} />;
};
