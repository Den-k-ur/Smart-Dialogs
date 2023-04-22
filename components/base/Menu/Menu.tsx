import React, { FC, ReactNode } from 'react';

import { StyledMenu } from './styles';

type MenuTypes = {
  open: boolean;
  children: ReactNode | ReactNode[] | string;
};

export const Menu: FC<MenuTypes> = ({ open, children }) => {
  return <StyledMenu open={open}>{children}</StyledMenu>;
};
