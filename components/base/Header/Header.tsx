import React, { FC, useCallback, useState } from 'react';

import { Button } from 'base/Button';

import { NavLink } from '../NavLink';

import { NAV_ITEMS } from './constants';

import Logo from './images/logo.svg';

import {
  ButtonWrapper,
  HeaderContainer,
  HeaderStyles,
  NavAndSignIn,
  StyledHeader,
  StyledNav,
} from './styles';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <StyledHeader>
        <HeaderStyles>
          <NavAndSignIn>
            <Logo onClick={toggleMenu} />

            <StyledNav isOpen={isMenuOpen}>
              {NAV_ITEMS.map((item) => (
                <NavLink href={item.href} key={item.key}>
                  {item.label}
                </NavLink>
              ))}
            </StyledNav>
            <ButtonWrapper>
              <Button size="small" variant="secondary">
                Вход
              </Button>
            </ButtonWrapper>
          </NavAndSignIn>
        </HeaderStyles>
      </StyledHeader>
    </HeaderContainer>
  );
};
