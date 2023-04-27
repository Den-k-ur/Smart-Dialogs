import styled from 'styled-components';

import { Theme } from 'theme/index';

export const StyledNav = styled.nav`
  display: flex;
  gap: 60px;
  align-items: center;
  @media screen and (max-width: ${Theme.sizes.md}) {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  @media screen and (max-width: ${Theme.sizes.xl}) {
    gap: 30px;
  }
`;
