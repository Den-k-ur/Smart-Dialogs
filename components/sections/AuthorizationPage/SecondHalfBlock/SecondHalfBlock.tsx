import React, { FC } from 'react';

import { Typography } from 'base/Typography';

import { FirstImage, SecondImage, StyledSecondHalfBlock, TextBlock } from './styles';

export const SecondHalfBlock: FC = () => {
  return (
    <StyledSecondHalfBlock>
      <div>
        <FirstImage>
          <img src="Calls.png" />
          <SecondImage>
            <img src="Dashboard.png" />
            <TextBlock>
              <Typography variant="style2">Вся аналитика в одном кабинете</Typography>
              <Typography variant="style7">
                Теперь просматривать аналитику и создавать отчёты можно без нашей помощи
              </Typography>
            </TextBlock>
          </SecondImage>
        </FirstImage>
      </div>
    </StyledSecondHalfBlock>
  );
};
