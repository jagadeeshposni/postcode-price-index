import React, { useState } from 'react';
import LineChart from './components/LineChart';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// App component
const App = () => {
  const [postcode, setPostcode] = useState('');
  const [loadPostcode, setLoadPostcode] = useState(null);

  const handleInputChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleGo = () => {
    setLoadPostcode(postcode);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Postcode Price Index
          </Typography>
        </Toolbar>
      </AppBar>
      
      <div className="content">
        {!loadPostcode && (
          <>
            <Typography variant="h5" className="description">
              Enter a postcode to see the price index trends over the years.
            </Typography>
            <div className="input-container">
              <TextField
                value={postcode}
                onChange={handleInputChange}
                placeholder="Enter postcode"
                variant="outlined"
                className="input-field large-input"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleGo}
                className="go-button large-button"
              >
                Go
              </Button>
            </div>
          </>
        )}
        
        {loadPostcode && (
          <div className="chart-container">
            <div className="input-side">
              <TextField
                value={postcode}
                onChange={handleInputChange}
                placeholder="Enter postcode"
                variant="outlined"
                className="input-field"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleGo}
                className="go-button"
              >
                Go
              </Button>
            </div>
            <div className="chart-side">
              <LineChart postcode={loadPostcode} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;