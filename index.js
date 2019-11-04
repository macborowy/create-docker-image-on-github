const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));

app.get('*', (req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`)
  res.send(`Hello World from ${process.env.APP_NAME || 'no name app'}! (${req.url})`);
});

app.listen(8080, () => {
  console.log(`Application is listening on port 8080...`);
});
