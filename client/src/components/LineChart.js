import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const serverUrl = process.env.SERVER_HOST || 'http://localhost:5001';

// LineChart component
const LineChart = ({ postcode }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch(serverUrl + '/data/' + postcode)
            .then(response => response.json())
            .then(data => {
                setChartData({
                    labels: data.map(item => item.month),
                    datasets: [
                        {
                            label: 'Price',
                            data: data.map(item => item.average_price),
                            fill: false,
                            backgroundColor: 'rgb(75, 192, 192)',
                            borderColor: 'rgba(75, 192, 192, 0.2)',
                        },
                    ],
                });
            })
            .catch(error => console.error('Error:', error));
        
    }, [postcode]);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Line
                data={chartData}
                options={{
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'year'
                            }
                        },
                        y: {
                            type: 'linear'
                        }
                    }
                }}
            />
        </div>
    );
};

export default LineChart;