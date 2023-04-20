import React, { FC } from 'react';

import { Button } from 'base/Button';

import { Container } from '../Container/Container';

import { NavLink } from '../NavLink';

import { NAV_ITEMS } from './constants';

import Logo from './images/logo.svg';
import { HeaderContainer, HeaderStyles, NavAndSignIn, StyledHeader, StyledNav } from './styles';

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <Container>
          <HeaderStyles>
            <NavAndSignIn>
              <Logo />
              <StyledNav>
                {NAV_ITEMS.map((item) => (
                  <NavLink href={item.href} key={item.key}>
                    {item.label}
                  </NavLink>
                ))}
              </StyledNav>
            </NavAndSignIn>
            <Button size="small" variant="secondary">
              Вход
            </Button>
          </HeaderStyles>
        </Container>
      </StyledHeader>
    </HeaderContainer>
  );
};
