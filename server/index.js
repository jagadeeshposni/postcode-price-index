const express = require('express')
const path = require('path')
const cors = require('cors');
const { Pool } = require('pg');

const app = express()
const PORT = process.env.PORT || 5001

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

app.use(cors())
app.use(express.static(path.join(__dirname + "/public")))


app.get('/data/:outcode', async (req, res) => {
  const outcode = req.params.outcode.toUpperCase();
  console.log('getting data for: ' + outcode);

  console.log(process.env.PGUSER);
  // Query the database
  const result = await pool.query(`
      SELECT DATE_TRUNC('month', transfer_date) AS month, AVG(price) AS average_price
      FROM price_paid_complete
      WHERE postcode LIKE $1 || '%'
      AND property_type != 'O'
      GROUP BY month
      ORDER BY month
      `, [outcode]);
  res.json(result.rows);
});


app.listen(PORT)
