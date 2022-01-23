import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ tab }) => {
  const userState = useSelector((state) => state.quiz.userState);
  const results = userState.results[tab].items;

  const resultHandler = () => {
    const nums = [];
    const colors = [];
    results.forEach((ctx) => {
      nums.push(ctx.result);
      colors.push(ctx.color);
    });
    return { nums, colors };
  };

  console.log(results);
  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      hover: { mode: null },
      events: [],
    },
  };
  const data = {
    datasets: [
      {
        data: resultHandler().nums,
        backgroundColor: resultHandler().colors,
        borderWidth: 10,
        borderRadius: '1000',
        cutout: 112,
        rotation: -90,
        radius: '100%',
        showTooltips: false,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default Chart;
