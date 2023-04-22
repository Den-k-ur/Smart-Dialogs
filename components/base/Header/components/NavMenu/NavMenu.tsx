import React, { FC } from 'react';

import { Menu } from 'base/Menu';
import { NavLink } from 'base/NavLink';

import { NAV_ITEMS } from './constants';
import { StyledNav } from './styles';

type NavMenuTypes = {
  isOpen: boolean;
};

export const NavMenu: FC<NavMenuTypes> = ({ isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <Menu open={isOpen}>
          {NAV_ITEMS.map((item) => (
            <NavLink href={item.href} key={item.key}>
              {item.label}
            </NavLink>
          ))}
        </Menu>
      ) : (
        <StyledNav>
          {NAV_ITEMS.map((item) => (
            <NavLink href={item.href} key={item.key}>
              {item.label}
            </NavLink>
          ))}
        </StyledNav>
      )}
    </div>
  );
};
