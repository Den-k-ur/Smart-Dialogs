import React, { FC, ReactElement } from 'react';

import { StyledDiv } from './styles';

type ContainerType = {
  children: ReactElement | ReactElement[] | string;
};

export const Container: FC<ContainerType> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
