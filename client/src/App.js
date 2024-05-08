import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

// LineChart component
const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/data')
      .then(response => response.json())
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
      })
      .catch(error => console.error('Error:', error));
  }, []);

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

// App component
const App = () => {
  const [postcode, setPostcode] = useState('');

  const handleInputChange = (event) => {
    setPostcode(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={postcode}
          onChange={handleInputChange}
          placeholder="Enter postcode"
        />
        <button>Go</button>
        <LineChart />
      </header>
    </div>
  );
};

export default App;