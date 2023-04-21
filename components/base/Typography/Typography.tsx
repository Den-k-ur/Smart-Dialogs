import React, { FC, ReactNode } from 'react';

import { StyledParagraph } from './styles';

type TypographyTypes = {
  variant: 'style1' | 'style2' | 'style3' | 'style4' | 'style5' | 'style6' | 'style7';
  children: ReactNode | ReactNode[] | string;
};

export const Typography: FC<TypographyTypes> = ({ children, variant }) => {
  return <StyledParagraph variant={variant}>{children}</StyledParagraph>;
};
