import styled from 'styled-components';

import { Theme } from 'theme/theme';

export const AuthPageContainer = styled.div`
  display: flex;
  max-width: 872px;
  justify-content: center;
  flex: 1.5;
  align-items: center;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    gap: 0;
    height: 100vh;
    justify-content: none;
  }
`;

export const AuthBlock = styled.div`
  display: flex;

  flex-direction: column;
  gap: 72px;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    padding-left: 0;
  }
`;
