/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
 // eslint-disable-next-line arrow-body-style
 const PredictPrices = () => {
  /* // eslint-disable-next-line prefer-arrow-callback
   d3.csv('result.csv', function (loadedData) {
   const Date = [];
  const Prices = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < loadedData.length; i++) {
    console.log(loadedData[i].Date);
    console.log(loadedData[i].Prices);
    const year = loadedData[i].Date;
   Date.push(year);
    const prices = loadedData[i].Prices;
   Prices.push(prices);
  }
   });
   */
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Our Predictions',
      },
    },
  };
const labels = [
'2022-06-10',
'2022-06-11',
'2022-06-12',
'2022-06-13',
'2022-06-14',
'2022-06-15',
'2022-06-16',
'2022-06-17',
'2022-06-18',
'2022-06-19',
'2022-06-20',
'2022-06-21',
'2022-06-22',
'2022-06-23',
'2022-06-24',
'2022-06-25',
'2022-06-26',
'2022-06-27',
'2022-06-28',
'2022-06-29',
'2022-06-30',
'2022-07-01',
'2022-07-02',
'2022-07-03',
'2022-07-04',
'2022-07-05',
'2022-07-06',
'2022-07-07',
'2022-07-08',
'2022-07-09',
'2022-07-10',
'2022-07-11',
'2022-07-12',
'2022-07-13',
'2022-07-14'];
 const data = {
    labels,
    datasets: [
      {
        label: 'Predicted Prices',
        data: [
          28360.810547,
          26762.648438,
          22487.388672,
          22206.792969,
          20693.550781,
          22989.256025927900,
          21471.186799874500,
          20649.537993970600,
          20290.78591126970,
          20176.04499230530,
          20162.403965420100,
          20173.435490570500,
          20175.95200778560,
          20160.057590092200,
          20125.805654129500,
          20076.44867969420,
          20015.78914012550,
          19947.429690964800,
          19874.567416975800,
          19800.165952426000,
          19726.953502692500,
          19657.18543697740,
          19592.567130940600,
          19534.277707428300,
          19483.011582747300,
          19439.025948122500,
          19402.253538156600,
          19372.37780980370,
          19348.89625097850,
          19331.21138668170,
          19318.69408760950,
          19310.7013757,
          19306.63973274200,
          19305.976970739600,
          19308.232339941800],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

     return (
       <><div><h2>Our Future prediction for Bitcoin Value till 14-07-2022</h2></div>
         <Line
           data={data}
           options={options}
         />
       </>
     );
};

export default PredictPrices;
