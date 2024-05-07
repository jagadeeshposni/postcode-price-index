import React, { useState } from 'react';
import './App.css';
import LineChart from './LineChart'; // Import your LineChart component

function App() {
  const [postcode, setPostcode] = useState('');
  const [showChart, setShowChart] = useState(false);

  const handleInputChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleGoClick = () => {
    // Add your logic here for what should happen when the "Go" button is clicked
    setShowChart(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Postcode Price Index</h1>
        <p>Please enter your postcode to get started:</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input
            type="text"
            value={postcode}
            onChange={handleInputChange}
            placeholder="Enter postcode"
            style={{
              fontSize: '1em',
              padding: '5px',
              borderWidth: '1px',
              borderColor: '#000',
              boxShadow: '0 0 5px rgba(0,0,0,0.5)',
              width: '50%',
              marginRight: '10px',
              height: '35px'
            }}
          />
          <button 
            onClick={handleGoClick} 
            style={{ 
              padding: '0 10px', 
              height: '35px', 
              backgroundColor: 'blue', 
              color: 'white', 
              border: 'none',
              cursor: 'pointer',
              fontSize: '1em'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'darkblue'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'}
            onMouseDown={(e) => e.currentTarget.style.color = 'red'}
            onMouseUp={(e) => e.currentTarget.style.color = 'white'}
          >
            Go
          </button>
        </div>
        {showChart && <LineChart postcode={postcode} />}
      </header>
    </div>
  );
}

export default App;