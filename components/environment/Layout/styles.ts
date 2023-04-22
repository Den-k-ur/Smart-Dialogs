import styled from 'styled-components';

import Background from 'public/background.svg';

export const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  right: 0;
  top: 0;
`;

export const StyledImage = styled(Background)`
  height: 100%;
  width: 100%;
`;
