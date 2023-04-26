import React, { FC, ReactElement } from 'react';

import Link from 'next/link';

import { StyledLink } from './styles';

type NavLinkTypes = {
  href: string;
  children: ReactElement | ReactElement[] | string;
  page: string;
};

export const NavLink: FC<NavLinkTypes> = ({ href, children, page }) => {
  return (
    <Link prefetch href={href} passHref legacyBehavior>
      <StyledLink page={page} path={href}>
        {children}
      </StyledLink>
    </Link>
  );
};
