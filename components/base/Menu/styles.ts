import styled from 'styled-components';

import { Theme } from 'theme/theme';

type MenuTypes = {
  open: boolean;
};

export const StyledMenu = styled.nav<MenuTypes>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Theme.colors.white};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3 ease-in-out;
  @media (max-width: ${Theme.sizes.md}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3 linear;
    @media (max-width: ${Theme.sizes.md}) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
