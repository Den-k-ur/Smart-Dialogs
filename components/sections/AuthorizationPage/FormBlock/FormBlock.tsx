import React, { ChangeEvent, FC, useState } from 'react';

import { Checkbox } from 'base/Checkbox';
import { Input, PasswordInput } from 'base/Input';
import { Typography } from 'base/Typography';

import HidePasswordIcon from 'public/hidePasswordIcon.svg';
import ShowPasswordIcon from 'public/showPasswordIcon.svg';

import { useAuthorization } from '../hooks';

import { useFormValidation } from './hooks';
import {
  HeadAndInputs,
  InputsAndUnderInputs,
  InputsBlock,
  StyledButton,
  StyledError,
  StyledIcon,
  StyledLink,
  UnderInputsBlock,
  UnderInputsBlockAndButton,
} from './styles';

export const FormBlock: FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isRememberMe, setRememberMe] = useState(false);

  const { handleLogin, TogglePassword, isHide } = useAuthorization();
  const { formik } = useFormValidation({ email });

  console.log(formik);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <HeadAndInputs>
        <Typography variant="style4">Вход</Typography>
        <InputsAndUnderInputs>
          <InputsBlock>
            <Input
              name="email"
              id="email"
              placeholder="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                formik.handleChange(email);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <StyledError>{formik.errors.email}</StyledError>
            )}
            <div>
              <StyledIcon onClick={TogglePassword}>
                {isHide ? <ShowPasswordIcon /> : <HidePasswordIcon />}
              </StyledIcon>
              <PasswordInput
                placeholder="Пароль"
                isHide={isHide}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </div>
          </InputsBlock>
          <UnderInputsBlockAndButton>
            <UnderInputsBlock>
              <Checkbox onChange={() => setRememberMe(!isRememberMe)} label="Запомнить меня" />
              <StyledLink prefetch href="#">
                Забыли пароль?
              </StyledLink>
            </UnderInputsBlock>
            <StyledButton
              size="large"
              variant="primary"
              onClick={() =>
                handleLogin({
                  email: email,
                  password: password,
                  rememberMe: isRememberMe,
                })
              }
              disabled={!password || formik.errors.email !== ''}
            >
              Войти
            </StyledButton>
          </UnderInputsBlockAndButton>
        </InputsAndUnderInputs>
      </HeadAndInputs>
    </form>
  );
};
