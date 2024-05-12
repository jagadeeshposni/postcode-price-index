import React, { useState } from 'react';
import LineChart from './components/LineChart';

// App component
const App = () => {
  const [postcode, setPostcode] = useState('');
  const [loadPostcode, setLoadPostcode] = useState(null); // New state

  const handleInputChange = (event) => {
    setPostcode(event.target.value);
  };

  const handlGo = () => {
    setLoadPostcode(postcode); // Set loadPostcode to the current postcode when Go button is clicked
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={postcode}
          onChange={handleInputChange}
          placeholder="Enter postcode"
        />
        <button onClick={handlGo}>Go</button>
        {loadPostcode && <LineChart postcode={loadPostcode}/>} {/* Only render LineChart if loadPostcode is not null */}
      </header>
    </div>
  );
};

export default App;