import React from "react";
import Chart from 'react-apexcharts';

const data = {
    series: [{
      name: 'Faixa Etária',
      data: [15, 20, 25, 30, 20, 10, 5, 2] // Quantidades fictícias para cada faixa etária
    }],
    options: {
      chart: {
        type: 'bar',
        background: 'transparent',
        toolbar: {
          show: false // Desativar o ícone de menu (hambúrguer)
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%', // Ajustar a altura da barra para torná-la mais estreita
          distributed: true, // Distribuir as cores entre as barras
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
        categories: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80'],
      },
      yaxis: {
        title: {
          text: 'Faixa Etária (Anos)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: (val) => `${val}`
        }
      },
      colors: ['#FF6361', '#FF8C42', '#FFA600', '#BC5090', '#58508D', '#003F5C', '#2F4B7C', '#8ECAE6'] // Adiciona cores personalizadas para cada faixa etária
    }
  };



const ChartFive: React.FC = () => {
    return (
        <>

<div className='bg-white p-6 rounded-lg shadow-md'>
    <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Gasto por Faixa Etária 
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
    )
}

export default ChartFive;