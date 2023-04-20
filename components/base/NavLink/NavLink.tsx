import React, { FC, ReactElement } from 'react';

import Link from 'next/link';

import { StyledLink } from './styles';

type NavLinkType = {
  href: string;
  children: ReactElement | ReactElement[] | string;
};

export const NavLink: FC<NavLinkType> = ({ href, children }) => {
  return (
    <Link prefetch href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
