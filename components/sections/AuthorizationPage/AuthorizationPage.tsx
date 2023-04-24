import React, { FC } from 'react';

import { Container } from 'base/Container';

import Logo from '/public/logo.svg';

import { FormBlock } from './FormBlock';
import { SecondHalfBlock } from './SecondHalfBlock';
import { AuthBlock, AuthContainer, AuthPageContainer, StyledAuthPage } from './styles';

export const AuthorizationPage: FC = () => {
  return (
    <AuthContainer>
      <StyledAuthPage>
        <Container>
          <AuthPageContainer>
            <AuthBlock>
              <Logo />
              <FormBlock />
            </AuthBlock>
          </AuthPageContainer>
        </Container>
        <SecondHalfBlock />
      </StyledAuthPage>
    </AuthContainer>
  );
};
