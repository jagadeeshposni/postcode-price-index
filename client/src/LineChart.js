import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ postcode }) => {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`http://localhost:3001/data`)/*?postcode=${postcode}*/
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setChartData({
          labels: data.map(item => item.year),
          datasets: [
            {
              label: 'Price',
              data: data.map(item => item.price),
              fill: false,
              backgroundColor: 'rgb(75, 192, 192)',
              borderColor: 'rgba(75, 192, 192, 0.2)',
            },
          ],
        });
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [postcode]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Line Chart for {postcode}</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;