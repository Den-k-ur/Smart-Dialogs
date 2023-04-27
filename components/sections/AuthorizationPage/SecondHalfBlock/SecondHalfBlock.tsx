import React, { FC } from 'react';

import { Typography } from 'base/Typography';

import { FirstImage, ImageBlock, SecondImage, StyledSecondHalfBlock, TextBlock } from './styles';

export const SecondHalfBlock: FC = () => {
  return (
    <StyledSecondHalfBlock>
      <ImageBlock>
        <FirstImage>
          <img src="Calls.png" alt="" />
        </FirstImage>
        <SecondImage>
          <img src="Dashboard.png" width={629} alt="" />
        </SecondImage>
      </ImageBlock>
      <TextBlock>
        <Typography variant="style2">Вся аналитика в одном кабинете</Typography>
        <Typography variant="style7">
          Теперь просматривать аналитику и создавать отчёты можно без нашей помощи
        </Typography>
      </TextBlock>
    </StyledSecondHalfBlock>
  );
};
