import React, { FC, ReactElement } from 'react';

import { StyledButton } from './styles';

type ButtonTypes = {
  children: ReactElement | ReactElement[] | string;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
};

export const Button: FC<ButtonTypes> = ({ children, variant, size }) => {
  return (
    <StyledButton variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};
