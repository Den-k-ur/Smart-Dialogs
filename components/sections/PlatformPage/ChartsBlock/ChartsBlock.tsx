import React, { FC } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import TooltipSection from 'public/tooltipSection.svg';

import { useCharts } from './hooks';
import {
  CheapsBlock,
  StyledBarChart,
  StyledChart,
  StyledCheap,
  StyledHeading,
  StyledIcon,
  StyledTooltip,
} from './styles';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
);

export const ChartsBlock: FC = () => {
  const { lineConfig, barConfig } = useCharts();

  return (
    <>
      <StyledChart>
        <StyledTooltip id="chartjs-tooltip"></StyledTooltip>
        <StyledIcon>
          <TooltipSection />
        </StyledIcon>
        <Line data={lineConfig.data} options={lineConfig.options} plugins={lineConfig.plugins} />
        <div id="legend-container" />
      </StyledChart>
      <StyledBarChart>
        <StyledTooltip id="chartjs-tooltip"></StyledTooltip>
        <StyledIcon>
          <TooltipSection />
        </StyledIcon>
        <StyledHeading variant="titleStyle">Исходящие звонки</StyledHeading>
        <CheapsBlock>
          <StyledCheap variant="chipStyle">Отказ от подключения</StyledCheap>
          <StyledCheap variant="chipStyle">Ростов-на-Дону</StyledCheap>
        </CheapsBlock>
        <Bar data={barConfig.data} options={barConfig.options} />
      </StyledBarChart>
    </>
  );
};
