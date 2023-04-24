import styled from 'styled-components';

import { Theme } from 'theme/theme';

export const StyledSecondHalfBlock = styled.div`
  background-color: ${Theme.colors.GhostWhite};
  flex: 1 0 auto;
  min-height: 100vh;
  max-width: 100%;

  @media screen and (max-width: ${Theme.sizes.lg}) {
    display: none;
  }
`;

export const FirstImage = styled.div`
  margin-top: 184px;
  margin-left: 76px;
`;

export const SecondImage = styled.div`
  position: relative;
  bottom: 200px;
  margin-left: 343px;
`;

export const TextBlock = styled.div`
  max-width: 496px;
  text-align: center;
`;
