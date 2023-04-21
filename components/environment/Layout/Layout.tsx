import React, { FC, ReactElement } from 'react';

import { Container } from 'base/Container/Container';
import { Header } from 'base/Header';

import { StyledDiv } from './styles';

type LayoutTypes = {
  children: ReactElement | ReactElement[] | string;
};

export const Layout: FC<LayoutTypes> = ({ children }) => {
  return (
    <StyledDiv>
      <Container>
        <Header />
        <div>{children}</div>
      </Container>
    </StyledDiv>
  );
};
