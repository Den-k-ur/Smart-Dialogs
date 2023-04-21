import React, { FC, ReactElement } from 'react';

import { Container } from 'base/Container';
import { Header } from 'base/Header';

import { StyledBackground } from './styles';

type LayoutTypes = {
  children: ReactElement | ReactElement[] | string;
};

export const Layout: FC<LayoutTypes> = ({ children }) => {
  return (
    <Container>
      <StyledBackground />
      <Header />
      <div>{children}</div>
    </Container>
  );
};
