import styled from 'styled-components';

import { Theme } from 'theme';

export const AuthPageContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
`;

export const AuthBlock = styled.div`
  display: flex;
  padding-top: 259px;
  padding-left: 237px;
  flex-direction: column;
  gap: 72px;
  max-width: 100%;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    padding-left: 0;
  }
`;

export const StyledAuthPage = styled.div`
  display: flex;
  gap: 232px;
  background-color: ${Theme.colors.whiteSmoke};
  @media screen and (max-width: ${Theme.sizes.lg}) {
    gap: 0;
    height: 100vh;
  }
`;

export const AuthContainer = styled.div`
  width: 100%;
`;
