import React, { FC } from 'react';

import Logo from '/public/logo.svg';

import { FormBlock } from '../FormBlock';

import { AuthBlock, AuthPageContainer } from './styles';

export const FirstHalfBlock: FC = () => {
  return (
    <AuthPageContainer>
      <AuthBlock>
        <Logo />
        <FormBlock />
      </AuthBlock>
    </AuthPageContainer>
  );
};
