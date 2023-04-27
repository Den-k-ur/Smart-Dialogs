import React, { FC } from 'react';

import { Typography } from 'base/Typography';

import { ChartsBlock } from './ChartsBlock';
import {
  DescriptionsBlock,
  DignityTextBlock,
  FirstDescriptionBlock,
  MobileSecondDescription,
  PlatformPageBlock,
  PlatformPageContainer,
  SecondeDescriptionBlock,
  StyledChartsBlock,
  StyledDescription,
} from './styles';

export const PlatformPage: FC = () => {
  return (
    <PlatformPageContainer>
      <PlatformPageBlock>
        <DescriptionsBlock>
          <DignityTextBlock>
            <Typography variant="style1">Вся аналитика в&nbsp;одном кабинете</Typography>
          </DignityTextBlock>
          <SecondeDescriptionBlock>
            <StyledDescription variant="style6">
              Отслеживайте работу голосового ассистента в&nbsp;личном кабинете
            </StyledDescription>
          </SecondeDescriptionBlock>
        </DescriptionsBlock>
        <FirstDescriptionBlock>
          <MobileSecondDescription>
            <StyledDescription variant="style6">
              Отслеживайте работу голосового ассистента в личном кабинете
            </StyledDescription>
          </MobileSecondDescription>
          <StyledDescription variant="style6">
            Уникальные виджеты позволяют настроить <br />
            дашборд под задачи различных подразделений вашей компании
          </StyledDescription>
        </FirstDescriptionBlock>
        <StyledChartsBlock>
          <ChartsBlock />
        </StyledChartsBlock>
      </PlatformPageBlock>
    </PlatformPageContainer>
  );
};
