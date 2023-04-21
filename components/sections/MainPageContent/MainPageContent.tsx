import React, { FC } from 'react';

import { Button } from 'base/Button';

import { Typography } from 'base/Typography';

import { DIGNITY } from './constants';
import {
  ApplicationButton,
  ColoredHeader,
  DescriptionAndApplication,
  DescriptionAndPhoto,
  DescriptionBlock,
  DignityCard,
  DignityCardBlock,
  HeaderBlock,
  MainPageContentBlock,
  NormalHeader,
  Photo,
  PhotoBlock,
} from './styles';

export const MainPageContent: FC = () => {
  return (
    <MainPageContentBlock>
      <DescriptionAndPhoto>
        <DescriptionAndApplication>
          <HeaderBlock>
            <NormalHeader>Голосовые ассистенты</NormalHeader>
            <ColoredHeader>SmartDialog</ColoredHeader>
          </HeaderBlock>
          <DescriptionBlock>
            <Typography variant="style5">
              В звонках бот ведёт осмысленный диалог
              <br /> и совершенно неотличим от живого оператора. Автоматизируйте телефонные звонки с
              помощью ИИ.
            </Typography>
          </DescriptionBlock>
          <ApplicationButton>
            <Button variant="primary" size="medium">
              Оставить заявку
            </Button>
          </ApplicationButton>
        </DescriptionAndApplication>
        <PhotoBlock>
          <Photo />
        </PhotoBlock>
      </DescriptionAndPhoto>
      <DignityCardBlock>
        {DIGNITY.map((item) => (
          <DignityCard key={item.key}>
            <Typography variant="style3">{item.header}</Typography>
            <Typography variant="style7">{item.description}</Typography>
          </DignityCard>
        ))}
      </DignityCardBlock>
    </MainPageContentBlock>
  );
};
