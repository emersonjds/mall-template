import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const dataChartObj = {
  series: [
    {
      name: 'Métodos de Pagamento',
      data: [57, 35, 15, 30,20],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%', 
        distributed: true, 
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Cashback', 'Cartão de Crédito', 'Cartão de Débito', 'Pix', 'Dinheiro'],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
    colors: ['#551bb3', '#268fbe', '#2cb8b2', '#CF5068', '#FFB946'],
  },
};

const ChartFour: React.FC = () => {
  const [dataChart, setDataChart] = useState(dataChartObj);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://qrcodeapi-d36o.onrender.com/paymentMethod',
      );
      const data = response.data[0];

      console.log({ dataChart });

      const _dataChart = _.cloneDeep(dataChart);
      _dataChart.series.data = data.values;
      _dataChart.options.xaxis.categories = data.labels;

      setDataChart(_dataChart);

    } catch (error) {
      console.error(
        'Ocorreu um erro ao buscar os dados para o gráfico de métodos de pagamento',
        error,
      );
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {dataChart && (
          <>
            <div>
              <h5 className="text-xl font-semibold text-black dark:text-white">
                Metodos de Pagamento
              </h5>
            </div>
            <Chart
              type="bar"
              options={dataChart.options}
              series={dataChart.series}
              height={350}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ChartFour;
