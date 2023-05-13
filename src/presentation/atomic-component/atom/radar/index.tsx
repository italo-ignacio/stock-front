import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  RadialLinearScale
} from 'chart.js';
import { Radar as RadarChart } from 'react-chartjs-2';
import type { FC } from 'react';

interface RadarProps {
  values: {
    data: number[];
    color: string;
  }[];
}
const defaultValues = {
  firstIndex: 0
};

export const Radar: FC<RadarProps> = ({ values }) => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    LinearScale,
    BarElement,
    CategoryScale
  );

  return (
    <RadarChart
      data={{
        datasets: values.map((value) => ({
          backgroundColor: 'transparent',
          borderColor: value.color,
          borderWidth: 2,
          data: value.data,
          datalabels: {
            color: 'transparent'
          },
          label: 'Nota',
          pointBorderColor: 'transparent'
        })),
        labels: values[defaultValues.firstIndex].data.map(() => '')
      }}
      options={{
        scales: {
          // eslint-disable-next-line id-length
          r: {
            max: 5,
            pointLabels: {
              display: false
            },
            ticks: {
              display: false,
              stepSize: 1
            }
          }
        }
      }}
    />
  );
};
