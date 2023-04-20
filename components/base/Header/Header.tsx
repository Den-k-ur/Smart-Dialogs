import React, { FC } from 'react';

import { Container } from '../Container/Container';

import { NavLink } from '../NavLink';

import { NAV_ITEMS } from './constants';

import Logo from './images/logo.svg';
import { HeaderContainer, StyledNav } from './styles';

export const Header: FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <StyledNav>
          {NAV_ITEMS.map((item) => (
            <NavLink href={item.href} key={item.key}>
              {item.label}
            </NavLink>
          ))}
        </StyledNav>
      </HeaderContainer>
    </Container>
  );
};
