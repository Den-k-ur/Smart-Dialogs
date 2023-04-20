import React, { FC, ReactElement } from 'react';

import { StyledButton } from './styles';

type ButtonTypes = {
  children: ReactElement | ReactElement[] | string;
  variant: 'primary' | 'secondary';
};

export const Button: FC<ButtonTypes> = ({ children, variant }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};
