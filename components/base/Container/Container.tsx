import React, { FC, ReactElement } from 'react';

import { StyledContainer, StyledDiv } from './styles';

type ContainerTypes = {
  children: ReactElement | ReactElement[] | string;
};

export const Container: FC<ContainerTypes> = ({ children }) => {
  return (
    <StyledDiv>
      <StyledContainer>{children}</StyledContainer>
    </StyledDiv>
  );
};
