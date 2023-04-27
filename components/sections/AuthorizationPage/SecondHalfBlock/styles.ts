import styled from 'styled-components';

import { Theme } from 'theme/theme';

export const StyledSecondHalfBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1048px;
  width: 100%;
  justify-content: center;
  background-color: ${Theme.colors.GhostWhite};
  flex: 1.5;
  padding: 0 76px;
  gap: 72px;

  @media screen and (max-width: ${Theme.sizes.xl}) {
    display: none;
  }
`;

export const SecondImage = styled.div`
  max-width: 629px;
  width: 75%;
  margin-left: auto;
  margin-top: -128px;
  filter: drop-shadow(0px 4px 32px #e8e7ff);
`;

export const TextBlock = styled.div`
  max-width: 496px;
  text-align: center;
  align-self: center;
`;

export const ImageBlock = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;

export const FirstImage = styled(SecondImage)`
  box-shadow: 0px 4px 32px 2px #e8e7ff;
  margin: 0;
  filter: none;
`;
