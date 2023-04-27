import styled from 'styled-components';

import { Typography } from 'base/Typography';

import { Theme } from 'theme/index';

export const StyledTypography = styled(Typography)`
  @media (max-width: ${Theme.sizes.md}) {
    font-size: 20px;
  }
`;

export const MainPageContentBlock = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 135px;
`;

export const DescriptionAndPhoto = styled.div`
  display: flex;
  gap: 82px;
  @media screen and (max-width: ${Theme.sizes.xl}) {
    flex-direction: column;
  }
`;

export const HeaderBlock = styled.div`
  max-width: 788px;
`;

export const NormalHeader = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  @media screen and (max-width: ${Theme.sizes.md}) {
    font-size: 45px;
  }
`;

export const ColoredHeader = styled.span`
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  color: ${Theme.colors.darkBlue};
  @media screen and (max-width: ${Theme.sizes.md}) {
    font-size: 45px;
  }
`;

export const DescriptionAndApplication = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const DescriptionBlock = styled.div`
  max-width: 675px;
  @media (max-width: ${Theme.sizes.md}) {
    font-size: 20px;
  }
`;

export const ApplicationButton = styled.div`
  max-width: 291px;
`;

export const PhotoBlock = styled.div`
  max-width: 450px;
  width: 100%;
  max-height: 532px;
  background-color: rgba(79, 70, 229, 0.2);
  height: 100%;
  border-radius: 10px;
  @media screen and (max-width: 1400px) {
    height: 492px;
    width: 417px;
  }
  @media screen and (max-width: ${Theme.sizes.xxl}) {
    height: 313px;
    width: 267px;
  }
  @media screen and (max-width: ${Theme.sizes.xl}) {
    display: none;
  }
`;

export const Photo = styled.img`
  border-radius: 10px;
  width: 100%;
  margin-top: 40px;
  margin-left: 40px;
`;

export const DignityCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Theme.colors.gray};
  padding: 25px;
  max-width: 308px;
  width: 308px;
  gap: 16px;
  border-radius: 10px;
  background-color: ${Theme.colors.white};
`;

export const DignityCardBlock = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 120px;
  margin-bottom: 76px;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    max-width: 646px;
    flex-wrap: wrap;
  }
`;
