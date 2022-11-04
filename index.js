const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

app.post('/confirm', (req, res) => {
  console.info(req.body);
  res
    .status(200)
    .send('Confirmed!')
    .end();
});

// Start the server
const PORT = process.env.PORT || 8700;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.\n');
});
