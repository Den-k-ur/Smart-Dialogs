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
  DropDownContent,
  ExitButton,
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
  const [isOpen, setOpen] = useState(false);

  const isAuth = useSelector(authorizationSelectors.isAuth);

  const FullName = useSelector(userSelectors.FullName);

  const handleSetToggle = useCallback(() => {
    setToggle(!isToggle);
  }, [isToggle]);

  const { handleLogin, handleLogout } = useHeadersRedirect();

  console.log(isAuth);

  return (
    <HeaderContainer>
      <StyledHeader>
        <HeaderStyles>
          <StyledLogo />
          <StyledMobileLogo />
          <NavAndSignIn>
            <NavMenu isOpen={isToggle} />
            {isAuth ? (
              <>
                <UserMenuButton size="small" variant="primary" onClick={() => setOpen(!isOpen)}>
                  <Typography variant="styleLink">{FullName}</Typography>
                  <UserIcon />
                  <DropDownContent onClick={(e) => e.stopPropagation()} isOpen={isOpen}>
                    <ExitButton size="small" variant="primary" onClick={handleLogout}>
                      Выход
                    </ExitButton>
                  </DropDownContent>
                </UserMenuButton>
              </>
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
