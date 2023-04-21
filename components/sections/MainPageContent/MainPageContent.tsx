import React, { FC } from 'react';

import { Container } from 'base/Container/Container';

import { ColoredHeader, HeaderBlock, MainPageBlock, NormalHeader } from './styles';

export const MainPageContent: FC = () => {
  return (
    <MainPageBlock>
      <HeaderBlock>
        <NormalHeader>Голосовые ассистенты</NormalHeader>
        <ColoredHeader>SmartDialog</ColoredHeader>
      </HeaderBlock>
    </MainPageBlock>
  );
};
