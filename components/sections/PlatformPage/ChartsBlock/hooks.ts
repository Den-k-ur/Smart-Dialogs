import { faker } from '@faker-js/faker';

import { Theme } from 'theme/theme';

import { externalTooltipHandler, htmlLegendPlugin } from './plugin';

export const useCharts = () => {
  const labels = ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'];

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Исходящие звонки',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 20000 })),
        borderColor: `${Theme.colors.darkBlue}`,
        backgroundColor: `${Theme.colors.white}`,
        lineTension: 0.3,
      },
      {
        label: 'Входящие звонки',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 20000 })),
        borderColor: `${Theme.colors.yellow}`,
        backgroundColor: `${Theme.colors.white}`,
        lineTension: 0.3,
      },
    ],
  };

  const barData = {
    labels,
    datasets: [
      {
        label: 'Исходящие звонки',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 20000 })),
        backgroundColor: `${Theme.colors.barChart}`,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
        lineTension: 0.3,
      },
    ],
  };

  const barConfig = {
    type: 'bar',
    data: barData,

    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
          position: 'nearest' as const,
          external: externalTooltipHandler,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            stepSize: 4000,
          },
          border: { dash: [4, 4] },
        },
      },
    },
  };

  const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
      pointRadius: 0,
      bezierCurve: false,
      pointHoverBorderWidth: 2,
      pointHoverBackgroundColor: `${Theme.colors.white}`,
      hover: {
        intersect: false,
      },
      pointHoverRadius: 7,

      plugins: {
        htmlLegend: {
          containerID: 'legend-container',
        },
        tooltip: {
          enabled: false,
          position: 'nearest' as const,
          external: externalTooltipHandler,
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom' as const,
          display: false,
          labels: {
            usePointStyle: true,
          },
        },

        title: {
          display: true,
          text: 'Звонки',
          align: 'start' as const,
          color: `${Theme.colors.blackRussian}`,
          padding: {
            bottom: 23,
          },
          font: {
            weight: '400',
            size: 18,
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            stepSize: 4000,
          },
          border: { dash: [4, 4] },
        },
      },
    },
    plugins: [htmlLegendPlugin],
  };

  return {
    lineConfig,
    barConfig,
  };
};
