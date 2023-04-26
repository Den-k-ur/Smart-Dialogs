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
} from './styles';

export const PlatformPage: FC = () => {
  return (
    <PlatformPageContainer>
      <PlatformPageBlock>
        <DescriptionsBlock>
          <DignityTextBlock>
            <Typography variant="style1">
              Вся аналитика <br /> в одном кабинете
            </Typography>
          </DignityTextBlock>
          <SecondeDescriptionBlock>
            <Typography variant="style6">
              Отслеживайте работу голосового ассистента в личном кабинете
            </Typography>
          </SecondeDescriptionBlock>
        </DescriptionsBlock>
        <FirstDescriptionBlock>
          <Typography variant="style6">
            Уникальные виджеты позволяют настроить <br />
            дашборд под задачи различных подразделений вашей компании
          </Typography>
        </FirstDescriptionBlock>
        <MobileSecondDescription>
          <Typography variant="style6">
            Отслеживайте работу голосового ассистента в личном кабинете
          </Typography>
        </MobileSecondDescription>
        <StyledChartsBlock>
          <ChartsBlock />
        </StyledChartsBlock>
      </PlatformPageBlock>
    </PlatformPageContainer>
  );
};
