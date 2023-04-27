import { Chart, ScriptableTooltipContext } from 'chart.js';

import { Theme } from 'theme/theme';

export const getOrCreateLegendList = (chart: Chart, id: string) => {
  if (id) {
    const legendContainer = document.getElementById(id) as HTMLElement;
    let listContainer = legendContainer.querySelector('ul');

    if (!listContainer) {
      listContainer = document.createElement('ul');
      listContainer.style.display = 'flex';
      listContainer.style.flexDirection = 'row';
      // listContainer.style.height = '100%';
      listContainer.style.paddingLeft = '24px';
      listContainer.style.paddingTop = '25px';
      listContainer.style.gap = '40px';

      legendContainer.appendChild(listContainer);
    }

    return listContainer;
  } else {
    return;
  }
};

export const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart: Chart, args: Record<string, string>, options: Record<string, string>) {
    const ul = getOrCreateLegendList(chart, options.containerID);
    if (ul) {
      // Remove old legend items
      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      if (
        chart.options &&
        chart.options.plugins &&
        chart.options.plugins.legend &&
        chart.options.plugins.legend.labels &&
        chart.options.plugins.legend.labels.generateLabels
      ) {
        const items = chart.options.plugins.legend.labels.generateLabels(chart);

        items.forEach((item) => {
          const li = document.createElement('li');
          li.style.alignItems = 'center';
          li.style.cursor = 'pointer';
          li.style.display = 'flex';
          li.style.flexDirection = 'row';
          li.style.marginLeft = '10px';

          li.onclick = () => {
            chart.setDatasetVisibility(
              item.datasetIndex as number,
              !chart.isDatasetVisible(item.datasetIndex as number),
            );

            chart.update();
          };

          // Color box
          const boxSpan = document.createElement('span');
          boxSpan.style.background = item.strokeStyle as string;
          boxSpan.style.borderColor = item.fillStyle as string;
          boxSpan.style.borderRadius = '10px';
          boxSpan.style.borderWidth = `${item.lineWidth}px`;
          boxSpan.style.display = 'flex';
          boxSpan.style.height = '8px';
          boxSpan.style.marginRight = '10px';
          boxSpan.style.width = '8px';

          // Text
          const textContainer = document.createElement('p');
          textContainer.style.color = `${Theme.colors.blackRussian}`;
          textContainer.style.margin = '0';
          textContainer.style.padding = '0';
          textContainer.style.fontWeight = '400';
          textContainer.style.fontSize = '12px';
          textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

          const text = document.createTextNode(item.text);
          textContainer.appendChild(text);

          li.appendChild(boxSpan);
          li.appendChild(textContainer);
          ul.appendChild(li);
        });
      }
    }
  },
};

//TOOLTIP

const getOrCreateTooltip = (chart: Chart) => {
  if (chart && chart.canvas && chart.canvas.parentNode) {
    const tooltipEl = chart.canvas.parentNode.querySelector('div');

    return tooltipEl;
  } else {
    return;
  }
};

export const externalTooltipHandler = (context: ScriptableTooltipContext<'line' | 'bar'>) => {
  // Tooltip Element
  const { tooltip, chart } = context;
  let tooltipEl = getOrCreateTooltip(chart);
  if (tooltipEl) {
    tooltipEl.style.opacity = '0';
    const table = document.createElement('table');
    table.style.margin = '0px';
    tooltipEl.appendChild(table);
    if (chart.canvas.parentNode && !chart.canvas.parentNode.contains(tooltipEl)) {
      chart.canvas.parentNode.appendChild(tooltipEl);
    }
  }

  // Hide if no tooltip
  if (tooltip?.opacity === 0) {
    if (tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
      tooltipEl.style.borderRadius = '3px';
      tooltipEl.style.color = 'white';
      tooltipEl.style.opacity = '1';
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.transform = 'translate(-50%, 0)';
      tooltipEl.style.transition = 'all .1s ease';
    }
  }

  // Set Text
  if (tooltip?.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((b) => b.lines);

    const tableHead = document.createElement('thead');

    titleLines.forEach((title: string) => {
      const tr = document.createElement('tr');
      tr.style.borderWidth = '0';

      const th = document.createElement('th');
      th.style.borderWidth = '0';
      const text = document.createTextNode(title);

      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body, i) => {
      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = '0';

      const td = document.createElement('td');
      td.style.borderWidth = '0';
      td.style.position = 'relative';
      td.style.zIndex = '2';

      const spaceIndex = body[i].indexOf(': ');

      const text = document.createTextNode(body[i].slice(spaceIndex + 1).toString());
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    if (tooltipEl) {
      const tableRoot = tooltipEl.querySelector('table');
      while (tableRoot && tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }

      // Add new children
      if (tableRoot) {
        tableRoot.appendChild(tableBody);
      }
    }
  }

  if (chart.canvas) {
    if (tooltip && tooltipEl) {
      // Display, position, and set styles for font
      tooltipEl.style.opacity = '1';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.border = `1px solid ${Theme.colors.gray}`;
      tooltipEl.style.backgroundColor = `${Theme.colors.white}`;
      tooltipEl.style.borderRadius = '6px';

      tooltipEl.style.left = `${chart.canvas.offsetLeft + tooltip.caretX - 30}px`;
      tooltipEl.style.top = `${chart.canvas.offsetTop + tooltip.caretY - 50}px`;
      tooltipEl.style.padding = `4px 8px`;
      tooltipEl.style.display = 'block';

      tooltipEl.style.pointerEvents = 'none';
    }
  }
};
