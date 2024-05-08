const express = require('express')
const path = require('path')
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5001

const data = [
    { year: '2016', price: 100 },
    { year: '2017', price: 120 },
    { year: '2018', price: 150 },
    { year: '2019', price: 170 },
    { year: '2020', price: 200 },
    { year: '2021', price: 22 },
    { year: '2022', price: 56 },
    { year: '2023', price: 99 },
  ];
app.use(cors())
app.use(express.static(path.join(__dirname + "/public")))


app.get('/data', (req, res) => {
    const { postcode } = req.query;
  
    // In a real application, you would fetch the data from a database
    // based on the postcode. For this example, we'll just return the
    // mock data for any postcode.
  
    res.json(data);
  });


app.listen(PORT)
