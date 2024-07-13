import Chart from 'react-apexcharts';

const data = {
  series: [
    {
      data: [
        {
          x: 'Restaurantes',
          y: 300,
        },
        {
          x: 'Esportes',
          y: 150,
        },
        {
          x: 'Joias',
          y: 100,
        },
        {
          x: 'Moda',
          y: 89,
        },
        {
          x: 'Entretenimento',
          y: 30,
        },
        {
          x: 'Cultura',
          y: 30,
        },
        {
          x: 'Outros',
          y: 20,
        },
      ],
    },
  ],
  options: {
    chart: {
      type: 'treemap',
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
    // title: {
    //   text: 'Visão Geral do Shopping',
    // },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      formatter: function (val) {
        return `${val.series[0].data[val.dataPointIndex].x}: ${
          val.series[0].data[val.dataPointIndex].y
        }`;
      },
    },
    colors: [
    //   '#FFD700',
    //   '#FFA500',
    //   '#FF6347',
    //   '#4169E1',
    //   '#32CD32',
      '#9370DB',
      '#FF69B4',

      '#D72F59',
       '#551bb3',
       '#268fbe',
       '#2cb8b2',
       '#3ddb8f',
       '#a9f04d',
       
    ], // Cores para cada categoria
  },
};

const ChartSeven = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Faturamento por Segmentação
          </h5>
        </div>
        <Chart
          options={{ ...data.options, toolbar: { show: false } }}
          series={data.series}
          type="treemap"
          height={350}
        />
      </div>
    </>
  );
};

export default ChartSeven;
