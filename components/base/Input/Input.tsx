import React, { FC } from 'react';

import { StyledInput } from './styles';

type InputTypes = {
  placeholder: string;
};

export const Input: FC<InputTypes> = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};
