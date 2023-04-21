import styled from 'styled-components';

import { Theme } from 'theme/theme';

export const MainPageContentBlock = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 135px;
`;

export const DescriptionAndPhoto = styled.div`
  display: flex;
  gap: 82px;
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

export const DescriptionAndApplication = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const DescriptionBlock = styled.div`
  max-width: 675px;
  white-space: wrap;
`;

export const ApplicationButton = styled.div`
  max-width: 291px;
`;

export const PhotoBlock = styled.div`
  max-width: 450px;
  width: 100%;
  max-height: 532px;
  height: 100vh;
  background-color: rgba(79, 70, 229, 0.2);
  border-radius: 10px;
`;

export const Photo = styled.div`
  position: absolute;
  max-width: 450px;
  max-height: 532px;
  width: 100%;
  height: 100vh;
  background-image: url('/Photo.jpg');
  border-radius: 10px;
  margin-left: 40px;
  margin-top: 40px;
`;

export const DignityCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Theme.colors.gray};
  padding: 25px;
  max-width: 308px;
  gap: 16px;
  border-radius: 10px;
  background-color: ${Theme.colors.white};
`;

export const DignityCardBlock = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 120px;
  margin-bottom: 76px;
`;