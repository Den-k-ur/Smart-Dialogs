import React, { ChangeEvent, FC, useState } from 'react';

import { Button } from 'base/Button';
import { Checkbox } from 'base/Checkbox';
import { Container } from 'base/Container';

import Logo from '/public/logo.svg';

import { PasswordInput } from 'base/Input';
import { Input } from 'base/Input/Input';
import { Typography } from 'base/Typography';
import HidePasswordIcon from 'public/hidePasswordIcon.svg';
import ShowPasswordIcon from 'public/showPasswordIcon.svg';

import { useAuthorization } from './hooks';
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
  StyledButton,
  StyledIcon,
  StyledLink,
  TextBlock,
  UnderInputsBlock,
  UnderInputsBlockAndButton,
} from './styles';

export const AuthorizationPage: FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { handleLogin, TogglePassword, isHide } = useAuthorization();

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
                      <Input
                        placeholder="email"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      />
                      <div>
                        <StyledIcon onClick={TogglePassword}>
                          {isHide ? <ShowPasswordIcon /> : <HidePasswordIcon />}
                        </StyledIcon>
                        <PasswordInput
                          placeholder="Пароль"
                          isHide={isHide}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                          }
                        />
                      </div>
                    </InputsBlock>
                    <UnderInputsBlockAndButton>
                      <UnderInputsBlock>
                        <Checkbox label="Запомнить меня" />
                        <StyledLink prefetch href="#">
                          Забыли пароль?
                        </StyledLink>
                      </UnderInputsBlock>
                      <StyledButton
                        size="large"
                        variant="primary"
                        onClick={() => handleLogin({ email: email, password: password })}
                      >
                        Войти
                      </StyledButton>
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
