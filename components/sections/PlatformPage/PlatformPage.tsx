import React, { FC } from 'react';

import { Typography } from 'base/Typography';

import {
  DignityTextBlock,
  FirstDescriptionBlock,
  PlatformPageBlock,
  PlatformPageContainer,
  SecondeDescriptionBlock,
} from './styles';

export const PlatformPage: FC = () => {
  return (
    <PlatformPageContainer>
      <PlatformPageBlock>
        <DignityTextBlock>
          <Typography variant="style1">
            Вся аналитика <br /> в одном кабинете
          </Typography>
        </DignityTextBlock>
        <FirstDescriptionBlock>
          <Typography variant="style6">
            Уникальные виджеты позволяют настроить <br />
            дашборд под задачи различных подразделений вашей компании
          </Typography>
        </FirstDescriptionBlock>
      </PlatformPageBlock>
      <SecondeDescriptionBlock>
        <Typography variant="style6">
          Отслеживайте работу голосового ассистента в личном кабинете
        </Typography>
      </SecondeDescriptionBlock>
    </PlatformPageContainer>
  );
};
