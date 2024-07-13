import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

import BrandSix from '../../images/brand/imaginarium.png';
import BrandSeven from '../../images/brand/Mac.png';
import BrandEight from '../../images/brand/mania.png';
import BrandNine from '../../images/brand/suaroviski.png';
import BrandTen from '../../images/brand/nike.jpg';



const brandData: BRAND[] = [
  {
    logo: BrandSix,
    name: 'Imaginarium',
    visitors: 8.800,
    revenues: '67',
    sales: 1890,
    cashback: 8.500,
  },
  {
    logo: BrandSeven,
    name: 'Macdonals',
    visitors: 47370,
    revenues: '47',
    sales: 83456,
    cashback: 7.500,
  },
  {
    logo: BrandEight,
    name: 'Mania de Churrasco',
    visitors: 28974,
    revenues: '53',
    sales: 34564,
    cashback: 3.7,
  },
  {
    logo: BrandNine,
    name: 'Swarovski',
    visitors: 930,
    revenues: '190',
    sales: 598,
    cashback: 35.9,
  },
  {
    logo: BrandTen,
    name: 'Nike',
    visitors: 1395,
    revenues: '234',
    sales: 476,
    cashback: 41.7,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Variação Semanal
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Loja
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitantes
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Ticket Médio
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Vendas Realizadas
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Cashback
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand"
                className='h-15 w-15 rounded-full border'
                />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">R$ {brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-store-bluestore">{brand.cashback}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
