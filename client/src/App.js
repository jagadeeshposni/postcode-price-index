import React, { useState } from 'react';
import LineChart from './components/LineChart'; // adjust the path as necessary

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
        <LineChart postcode={postcode}/>
      </header>
    </div>
  );
};

export default App;