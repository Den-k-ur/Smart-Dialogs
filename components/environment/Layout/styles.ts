import styled from 'styled-components';

import Background from 'public/background.svg';
import { Theme } from 'theme/index';

export const StyledBackground = styled(Background)`
  position: absolute;
  max-width: 100%;
  z-index: -1;
  right: 0;
  top: 0;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    height: 1052px;
  }
`;
