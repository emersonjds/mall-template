import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ChartOne from '../components/Charts/ChartOne';
import ChartThree from '../components/Charts/ChartThree';
import ChartTwo from '../components/Charts/ChartTwo';
import ChartSeven from '../components/Charts/ChartSeven';
import ChartEight from '../components/Charts/ChartEight';
import ChartNine from '../components/Charts/ChartNine';
import ChartSix from '../components/Charts/ChartSix';

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Analises Feitas com Chat GPT-4" />
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
      </div>

      <br />
      <br />
      <div className="col-span-12 xl:col-span-12">
        <ChartSeven />
      </div>

      <br />
      <br />
      <div className="col-span-12 xl:col-span-12">
        <ChartEight />
      </div>

      <br />
      <br />
      <div className="col-span-12 xl:col-span-12">
        <ChartNine/>
      </div>

      <br />
      <br />
      <div className="col-span-12 xl:col-span-12">
          <ChartSix />
        </div>
    </>
  );
};

export default Chart;
