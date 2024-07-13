import React from 'react';

import Chart from 'react-apexcharts';

const lastSixYearsData = {
  series: [
    {
      name: 'Atual',
      data: [350, 400, 450, 500, 550, 600], // Valores atuais para os últimos 6 anos
    },
    {
      name: 'Esperado',
      data: [300, 350, 400, 450, 500, 550], // Valores esperados para os últimos 6 anos
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: ['2019', '2020', '2021', '2022', '2023', '2024'], // Anos para os últimos 6 anos
      title: {
        text: 'Ano',
      },
    },
    yaxis: {
      title: {
        text: 'Valor',
      },
    },
    colors: ['#6366F1', '#10B981'], // Cores para atual e esperado
    legend: {
      position: 'top',
    },
    title: {
      text: 'Valor Atual vs Esperado nos Últimos 6 Anos',
      align: 'center',
    },
  },
};

// Dados para os próximos 6 anos (projeção)
const nextSixYearsData = {
  series: [
    {
      name: 'Atual',
      data: [650, 700, 750, 800, 850, 900], // Valores atuais para os próximos 6 anos
    },
    {
      name: 'Esperado',
      data: [600, 650, 700, 750, 800, 850], // Valores esperados para os próximos 6 anos
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: ['2025', '2026', '2027', '2028', '2029', '2030'], // Anos para os próximos 6 anos
      title: {
        text: 'Ano',
      },
    },
    yaxis: {
      title: {
        text: 'Valor',
      },
    },
    colors: ['#6366F1', '#10B981'], // Cores para atual e esperado
    legend: {
      position: 'top',
    },
    title: {
      text: 'Projeção de Valor Atual vs Esperado para os Próximos 6 Anos',
      align: 'center',
    },
  },
};

const ChartEight = () => {
  return (
    <>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <h5 className="text-xl font-semibold text-black dark:text-white">
          Projeção Estimada - Acurácia 91%
        </h5>
      </div>

      <h1 className="text-2xl font-bold mb-2">Últimos 6 Anos</h1>
      <Chart
        options={lastSixYearsData.options}
        series={lastSixYearsData.series}
        type="bar"
        height={350}
      />

      <br />

      <h1 className="text-2xl font-bold mb-2">Próximos 6 Anos (Projeção)</h1>
      <Chart
        options={nextSixYearsData.options}
        series={nextSixYearsData.series}
        type="bar"
        height={350}
      />
    </div>
    
  </>
  )
}
 


export default ChartEight;
