import React, { FC } from 'react';

import { FirstHalfBlock } from './FirstHalfBlock';
import { SecondHalfBlock } from './SecondHalfBlock';
import { StyledAuthPage } from './styles';

export const AuthorizationPage: FC = () => {
  return (
    <StyledAuthPage>
      <FirstHalfBlock />
      <SecondHalfBlock />
    </StyledAuthPage>
  );
};
