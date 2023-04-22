import React, { FC, ReactElement } from 'react';

import Link from 'next/link';

import { StyledLink } from './styles';

type NavLinkTypes = {
  href: string;
  children: ReactElement | ReactElement[] | string;
};

export const NavLink: FC<NavLinkTypes> = ({ href, children }) => {
  return (
    <Link prefetch href={href} passHref legacyBehavior>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
