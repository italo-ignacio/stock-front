import { ArcElement, Chart as ChartJS } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from 'presentation/style';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import type { Dispatch, FC, SetStateAction } from 'react';

const defaultValues = {
  circumference: 360,
  firstIndex: 0,
  fontSize: 16,
  fontSizeSelected: 17,
  hoverOffset: 20,
  minSize: 550,
  offset: 10,
  oneElementSize: 60,
  padding: 20,
  paddingSelected: 15
};

interface MandalaProps {
  dataArray: { active: boolean; label: string; subItem?: { label: string }[] }[];
  selected: number | null;
  setSelected: Dispatch<SetStateAction<number | null>>;
  rotation?: number;
  animation?: { easing: 'linear'; duration: number };
}

export const Mandala: FC<MandalaProps> = ({
  dataArray,
  selected,
  setSelected,
  rotation,
  animation
}) => {
  ChartJS.register(ArcElement, ChartDataLabels);
  const getData = (): number[] => {
    const dataValues = defaultValues.circumference / dataArray.length;

    return dataArray.map(() => dataValues);
  };

  const getLabels = (): string[] => dataArray.map((data) => data.label);

  const getOffset = (): number[] =>
    dataArray.map((data, index) =>
      index === selected ? defaultValues.hoverOffset : defaultValues.offset
    );

  const getHoverOffset = (): number[] =>
    dataArray.map((data) => (data.active ? defaultValues.hoverOffset : defaultValues.offset));

  const getSize = (): number => {
    const size = dataArray.length * defaultValues.oneElementSize;

    if (size > defaultValues.minSize) return size;
    return defaultValues.minSize;
  };

  return (
    <div id={'mandala'} style={{ height: getSize(), width: getSize() }}>
      <Doughnut
        data={{
          datasets: [
            {
              backgroundColor(ctx): string {
                if (!dataArray[ctx.dataIndex].active) return colors.gray[800];
                if (ctx.dataIndex === selected) return `${colors.primary}`;
                return colors.primary;
              },
              borderColor: 'transparent',
              data: getData(),
              datalabels: {
                color: 'white',
                font(context): { size: number; weight: number } {
                  return {
                    size:
                      context.dataIndex === selected ||
                      context.active ||
                      !dataArray[context.dataIndex].active
                        ? defaultValues.fontSizeSelected
                        : defaultValues.fontSize,
                    weight: 600
                  };
                },
                formatter(value, context): string {
                  return getLabels()[context.dataIndex].trim().replace(/ /gu, '\n');
                },
                textAlign: 'center'
              },
              hoverBackgroundColor(ctx): string {
                if (!dataArray[ctx.dataIndex].active) return colors.gray[800];
                if (ctx.dataIndex === selected) return `${colors.primary}`;
                return colors.primary;
              },
              hoverOffset: getHoverOffset(),
              offset: getOffset(),
              rotation
            }
          ],

          labels: getLabels()
        }}
        options={{
          animation,
          layout: {
            padding:
              typeof selected === 'number' ? defaultValues.paddingSelected : defaultValues.padding
          },
          onClick(event, elements): void {
            if (elements[defaultValues.firstIndex])
              if (dataArray[elements[defaultValues.firstIndex].index].active)
                setSelected(
                  elements[defaultValues.firstIndex].index === selected
                    ? null
                    : elements[defaultValues.firstIndex].index
                );
          }
        }}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};
