import Link from 'next/link';
import styled from 'styled-components';

import { Button } from 'base/Button';

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

export const StyledIcon = styled.div`
  position: absolute;
  top: 523px;
  left: 615px;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    left: 377px;
  }
  @media screen and (max-width: ${Theme.sizes.xsm}) {
    left: 282px;
  }
`;

export const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UnderInputsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: ${Theme.colors.darkBlue};
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

export const HeadAndInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InputsAndUnderInputs = styled(HeadAndInputs)`
  gap: 16px;
`;

export const UnderInputsBlockAndButton = styled(HeadAndInputs)`
  gap: 32px;
`;

export const SecondHalfBlock = styled.div`
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

export const StyledButton = styled(Button)`
  @media screen and (max-width: ${Theme.sizes.xsm}) {
    padding: 12px 0;
    width: 100%;
  }
`;

export const AuthContainer = styled.div`
  width: 100%;
`;
