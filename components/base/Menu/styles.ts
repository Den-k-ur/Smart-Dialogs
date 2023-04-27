import styled from 'styled-components';

import { Theme } from 'theme/theme';

type MenuTypes = {
  open: boolean;
};

export const StyledMenu = styled.nav<MenuTypes>`
  display: none;
  @media screen and (max-width: ${Theme.sizes.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${Theme.colors.white};
    text-align: left;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    @media (max-width: ${Theme.sizes.md}) {
      width: 100%;
    }

    a {
      text-transform: uppercase;
      padding: 30px 0;
      font-weight: bold;
      color: ${Theme.colors.black};
      text-decoration: none;
      @media (max-width: ${Theme.sizes.md}) {
        font-size: 40px;
        text-align: center;
      }
    }
  }
`;
