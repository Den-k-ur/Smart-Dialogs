import styled from 'styled-components';

import { Theme } from 'theme/index';

export const PlatformPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

export const DignityTextBlock = styled.div`
  padding-top: 140px;
  max-width: 758px;
`;

export const FirstDescriptionBlock = styled.div`
  max-width: 533px;
`;

export const PlatformPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SecondeDescriptionBlock = styled.div`
  padding-top: 196px;
  max-width: 532px;
  @media screen and (max-width: ${Theme.sizes.md}) {
    display: none;
  }
`;

export const DescriptionsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledChartsBlock = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1320px;
  @media screen and (max-width: ${Theme.sizes.xl}) {
    flex-direction: column;
  }
`;

export const MobileSecondDescription = styled.div`
  display: none;
  @media screen and (max-width: ${Theme.sizes.md}) {
    display: flex;
  }
`;
