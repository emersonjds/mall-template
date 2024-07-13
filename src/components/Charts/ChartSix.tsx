import Chart from 'react-apexcharts';

const data = {
    series: [{
      name: 'Alimentos',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }, {
      name: 'Varejo',
      data: [10, 20, 30, 40, 50, 60, 70, 80]
    }, {
      name: 'Eletronicos',
      data: [20, 25, 30, 35, 40, 45, 50, 55]
    }],
    options: {
      chart: {
        type: 'line',
        background: 'transparent',
        stacked: false,
        zoom: {
          enabled: false
        }
      },
      stroke: {
        width: [3, 3, 3], // Espessura da linha para cada série
        curve: 'smooth' // Curva suave nas linhas
      },
      xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago']
      },
      yaxis: {
        title: {
          text: 'Analise em milhoes de reais'
        }
      },
      markers: {
        size: 5, // Tamanho dos marcadores
        colors: ['#6366F1', '#10B981', '#F59E0B'], // Cores dos marcadores para cada série
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          sizeOffset: 4
        }
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0, 1, 2], // Exibir rótulos em todas as séries
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
          return value.toFixed(0); // Formata para número inteiro
        },
        style: {
          fontSize: '12px',
          colors: ['#000']
        }
      },
      colors: ['#6366F1', '#10B981', '#F59E0B'] // Cores das linhas
    }
  };

const ChartSix = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Vendas por Segmento - 2021 x 2022 x 2023
          </h5>
        </div>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};

export default ChartSix;
