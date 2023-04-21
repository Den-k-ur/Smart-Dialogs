import styled from 'styled-components';

import { Theme } from 'theme/theme';

export const MainPageBlock = styled.main`
  display: flex;
  padding-top: 135px;
`;

export const HeaderBlock = styled.div`
  max-width: 788px;
`;

export const NormalHeader = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
`;

export const ColoredHeader = styled(NormalHeader)`
  color: ${Theme.colors.darkBlue};
`;
