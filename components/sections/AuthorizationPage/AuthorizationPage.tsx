import React, { FC } from 'react';

import Link from 'next/link';

import { Button } from 'base/Button';
import { Checkbox } from 'base/Checkbox';
import { Container } from 'base/Container';

import Logo from '/public/logo.svg';

import { PasswordInput } from 'base/Input';
import { Input } from 'base/Input/Input';
import { Typography } from 'base/Typography';
import HidePasswordIcon from 'public/hidePasswordIcon.svg';

import {
  AuthBlock,
  AuthPageContainer,
  FirstImage,
  HeadAndInputs,
  InputsAndUnderInputs,
  InputsBlock,
  SecondHalfBlock,
  SecondImage,
  StyledAuthPage,
  StyledIcon,
  StyledLink,
  TextBlock,
  UnderInputsBlock,
  UnderInputsBlockAndButton,
} from './styles';

export const AuthorizationPage: FC = () => {
  return (
    <StyledAuthPage>
      <Container>
        <AuthPageContainer>
          <AuthBlock>
            <Logo />
            <form>
              <HeadAndInputs>
                <Typography variant="style4">Вход</Typography>
                <div>
                  <InputsAndUnderInputs>
                    <InputsBlock>
                      <Input placeholder="email" />
                      <div>
                        <StyledIcon>
                          <HidePasswordIcon />
                        </StyledIcon>
                        <PasswordInput placeholder="Пароль" isHide={true} />
                      </div>
                    </InputsBlock>
                    <UnderInputsBlockAndButton>
                      <UnderInputsBlock>
                        <Checkbox label="Запомнить меня" />
                        <StyledLink prefetch href="#">
                          Забыли пароль?
                        </StyledLink>
                      </UnderInputsBlock>
                      <Button size="large" variant="primary">
                        Войти
                      </Button>
                    </UnderInputsBlockAndButton>
                  </InputsAndUnderInputs>
                </div>
              </HeadAndInputs>
            </form>
          </AuthBlock>
        </AuthPageContainer>
      </Container>
      <SecondHalfBlock>
        <div>
          <FirstImage>
            <img src="Calls.png" />
            <SecondImage>
              <img src="Dashboard.png" />
              <TextBlock>
                <Typography variant="style2">Вся аналитика в одном кабинете</Typography>
                <Typography variant="style7">
                  Теперь просматривать аналитику и создавать отчёты можно без нашей помощи
                </Typography>
              </TextBlock>
            </SecondImage>
          </FirstImage>
        </div>
      </SecondHalfBlock>
    </StyledAuthPage>
  );
};
