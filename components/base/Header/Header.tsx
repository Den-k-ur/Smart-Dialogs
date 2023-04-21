import React, { FC } from 'react';

import { Button } from 'base/Button';

import { NavLink } from '../NavLink';

import { NAV_ITEMS } from './constants';

import Logo from './images/logo.svg';
import { HeaderContainer, HeaderStyles, NavAndSignIn, StyledHeader, StyledNav } from './styles';

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
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
          <div>
            <Button size="small" variant="secondary">
              Вход
            </Button>
          </div>
        </HeaderStyles>
      </StyledHeader>
    </HeaderContainer>
  );
};
