import styled from 'styled-components';

import { Typography } from 'base/Typography';

import { Theme } from 'theme/index';

export const PlatformPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  margin-bottom: 94px;
  gap: 90px;
`;

export const DignityTextBlock = styled.div`
  max-width: 558px;
`;

export const FirstDescriptionBlock = styled.div`
  max-width: 533px;
  @media screen and (max-width: ${Theme.sizes.xxl}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const PlatformPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SecondeDescriptionBlock = styled.div`
  max-width: 532px;
  margin-left: auto;
  @media screen and (max-width: ${Theme.sizes.xxl}) {
    display: none;
  }
`;

export const DescriptionsBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const StyledChartsBlock = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1320px;
  @media screen and (max-width: ${Theme.sizes.xxl}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileSecondDescription = styled.div`
  display: none;
  @media screen and (max-width: ${Theme.sizes.xxl}) {
    display: flex;
  }
`;

export const StyledDescription = styled(Typography)`
  color: ${Theme.colors.darkGray};
`;
