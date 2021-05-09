import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    series: number[],
    labels: string[]
}

function DonutChart() {

    let charData: ChartData = { labels: [], series: [] };

    axios.get(BASE_URL + "/sales/sum-by-seller")
        .then( res => {
            const data = res.data as SaleSum[];
            const myLabel = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            charData = { labels: myLabel, series: mySeries };

            console.log(data)
        });

    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}

    const options = {
        legend: {
            show: true
        }
    }



    return (
        <Chart 
            options={{...options, labels: charData.labels}}
            series={charData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
