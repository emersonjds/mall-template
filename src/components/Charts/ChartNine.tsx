import Chart from 'react-apexcharts';

const data = {
    series: [{
      name: 'Alimentação',
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * (2000 - 100 + 1)) + 100)
    }, {
      name: 'Moda',
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * (2000 - 100 + 1)) + 100)
    }, {
      name: 'Entretenimento',
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * (2000 - 100 + 1)) + 100)
    }, {
      name: 'Eletrônicos',
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * (2000 - 100 + 1)) + 100)
    }, {
      name: 'Serviços',
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * (2000 - 100 + 1)) + 100)
    }],
    options: {
      chart: {
        type: 'line',
        height: 350,
        background: 'transparent'
      },
      xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], // Meses
        title: {
          text: 'Mês'
        }
      },
      yaxis: {
        title: {
          text: 'Faturamento'
        }
      },
      colors: ['#9370DB', '#FF69B4', '#D72F59', '#551bb3', '#268fbe'], // Cores para cada segmento de shopping
      legend: {
        position: 'top'
      },
      title: {
        text: 'Faturamento Mensal por Segmento de Shopping',
        align: 'center'
      }
    }
  };

const ChartNine = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Projeção Estimada pra os próximos 6 anos
          </h5>
        </div>
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default ChartNine;
