import styled from 'styled-components';

import { Typography } from 'base/Typography';

import { Theme } from 'theme/theme';

export const StyledChart = styled.div`
  background-color: ${Theme.colors.white};
  border-radius: 10px;
  position: relative;
  border: 1px solid ${Theme.colors.gray};
  padding: 24px;
  max-width: 645px;
  width: 100%;
`;

export const StyledIcon = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  right: 30px;
  :hover {
    border-radius: 15px;
    background-color: ${Theme.colors.whiteSmoke};
  }
`;

export const StyledTooltip = styled.div`
  ::after {
    transform: rotate(180deg);
    top: 28px;
    left: 50%;
    border: 1px solid ${Theme.colors.gray};
    content: ' ';
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: ${Theme.colors.gray};
    border-width: 12px;
    margin-left: -15px;
  }
`;

export const StyledBarChart = styled.div`
  background-color: ${Theme.colors.white};
  border-radius: 10px;
  position: relative;
  border: 1px solid ${Theme.colors.gray};
  padding: 24px;
  max-width: 645px;
  width: 100%;
`;

export const StyledHeading = styled(Typography)`
  padding-bottom: 15px;
`;

export const StyledCheap = styled(Typography)`
  background-color: ${Theme.colors.cheapBackground};
  border-radius: 33px;
  color: ${Theme.colors.darkBlue};
  padding: 4px 8px;
`;

export const CheapsBlock = styled.div`
  display: flex;
  padding-bottom: 24px;
  gap: 8px;
`;
