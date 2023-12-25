import useStat from '@hooks/useStat';
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IStat } from '@type/stat';
import { faker } from '@faker-js/faker';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const PokemonStat = () => {
  const { stats, getDataColumns } = useStat();

  return (
    <>
      {stats &&
        stats.map((stat: IStat, index: number) => (
          <div key={index} style={{ width: '600px', height: '400px' }}>
            <Line
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                    display: false,
                  },
                  title: {
                    display: true,
                    text: stat.nickname,
                  },
                },
              }}
              data={{
                labels: getDataColumns(),
                datasets: [
                  {
                    label: 'none',
                    data: getDataColumns().map(
                      (column: string) => stat.data[column],
                    ),
                    borderColor: faker.color.rgb({
                      format: 'css',
                    }),
                    backgroundColor: faker.color.rgb({
                      format: 'css',
                    }),
                  },
                ],
              }}
            />
          </div>
        ))}
    </>
  );
};

export default PokemonStat;
