import React, { FC, ReactElement } from 'react';

import { StyledButton } from './styles';

type ButtonTypes = {
  children: ReactElement | ReactElement[] | string;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

export const Button: FC<ButtonTypes> = ({ children, variant, size, onClick }) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
