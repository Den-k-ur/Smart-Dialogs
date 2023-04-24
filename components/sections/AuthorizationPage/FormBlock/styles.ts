import Link from 'next/link';
import styled from 'styled-components';

import { Button } from 'base/Button';

import { Theme } from 'theme/index';

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

export const StyledButton = styled(Button)`
  @media screen and (max-width: ${Theme.sizes.xsm}) {
    padding: 12px 0;
    width: 100%;
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
