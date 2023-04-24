import React, { FC, useCallback, useState } from 'react';

import { Burger } from 'base/Burger';

import { Button } from 'base/Button';

import { NavMenu } from './components/NavMenu';

import {
  HeaderContainer,
  HeaderStyles,
  NavAndSignIn,
  StyledButton,
  StyledHeader,
  StyledLogo,
  StyledMobileLogo,
} from './styles';

export const Header: FC = () => {
  const [isToggle, setToggle] = useState(false);

  const handleSetToggle = useCallback(() => {
    setToggle(!isToggle);
  }, [isToggle]);

  return (
    <HeaderContainer>
      <StyledHeader>
        <HeaderStyles>
          <StyledLogo />
          <StyledMobileLogo />
          <NavAndSignIn>
            <NavMenu isOpen={isToggle} />
            <StyledButton size="small" variant="secondary">
              Вход
            </StyledButton>
            <Burger setOpen={handleSetToggle} open={isToggle} />
          </NavAndSignIn>
        </HeaderStyles>
      </StyledHeader>
    </HeaderContainer>
  );
};
