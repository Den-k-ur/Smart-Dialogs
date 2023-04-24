import React, { FC, useCallback, useState } from 'react';

import { useSelector } from 'react-redux';

import { Burger } from 'base/Burger';

import { Typography } from 'base/Typography';
import UserIcon from 'public/userIcon.svg';
import { authorizationSelectors } from 'store/authorization';

import { userSelectors } from 'store/user';

import { NavMenu } from './components/NavMenu';

import { useHeadersRedirect } from './hooks';

import {
  HeaderContainer,
  HeaderStyles,
  NavAndSignIn,
  StyledButton,
  StyledHeader,
  StyledLogo,
  StyledMobileLogo,
  UserMenuButton,
} from './styles';

export const Header: FC = () => {
  const [isToggle, setToggle] = useState(false);

  const isAuth = useSelector(authorizationSelectors.isAuth);

  const FullName = useSelector(userSelectors.FullName);

  const handleSetToggle = useCallback(() => {
    setToggle(!isToggle);
  }, [isToggle]);

  const { handleLogin } = useHeadersRedirect();

  return (
    <HeaderContainer>
      <StyledHeader>
        <HeaderStyles>
          <StyledLogo />
          <StyledMobileLogo />
          <NavAndSignIn>
            <NavMenu isOpen={isToggle} />
            {isAuth ? (
              <UserMenuButton size="small" variant="primary">
                <Typography variant="styleLink">{FullName}</Typography>
                <UserIcon />
              </UserMenuButton>
            ) : (
              <StyledButton onClick={handleLogin} size="small" variant="secondary">
                Вход
              </StyledButton>
            )}
            <Burger setOpen={handleSetToggle} open={isToggle} />
          </NavAndSignIn>
        </HeaderStyles>
      </StyledHeader>
    </HeaderContainer>
  );
};
