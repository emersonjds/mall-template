import React from 'react';
import Chart from 'react-apexcharts';

const data = {
    series: [{
      name: 'Pagamentos',
      data: [30, 20, 10] // Quantidades fictícias para Cashback, Cartão de Crédito e PIX
    }],
    options: {
      chart: {
        type: 'bar',
        background: 'transparent',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%', // Ajustar a altura da barra para torná-la mais estreita
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Cashback', 'Cartão de Crédito', 'PIX'],
      },
      fill: {
        opacity: 2,
        
      },
      tooltip: {
        y: {
          formatter: (val) => `${val}`
        }
      },
      colors: ['#6366F1'] // Adiciona cores personalizadas para cada barra
    }
  };


const ChartFour: React.FC = () => {
//   const data = {
//     series: [
//       {
//         name: 'Pagamentos',
//         data: [10, 20, 30], // Quantidades fictícias para PIX, Cartão de Crédito e Cashback
//       },
//     ],
//     options: {
//       chart: {
//         type: 'bar',
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: '55%',
//           endingShape: 'rounded',
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent'],
//       },
//       xaxis: {
//         categories: ['PIX', 'Cartão de Crédito', 'Cashback'],
//       },
//       yaxis: {
//         title: {
//           text: 'Quantidade',
//         },
//       },
//       fill: {
//         opacity: 1,
//       },
//       tooltip: {
//         y: {
//           formatter: (val) => `${val}`,
//         },
//       },
//     },
//   };



  return (
    <>
    <div className='bg-white p-6 rounded-lg shadow-md'>
    <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Metodos de Pagamento
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

export default ChartFour;
