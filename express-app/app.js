const express = require('express');

const promBundle = require('express-prom-bundle');
const metricsMiddleware = promBundle({ includeMethod: true });

const port = process.env.PORT || 3000;

const app = express();

const fruits = ['banana', 'orange', 'lemon', 'apple'];

const delayed = (delay, response) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(delay);
    // reject(delay);
  }, delay);
});

app.use(metricsMiddleware);
app.get('/api/fruits', async (_, res, next) => {
  try {
    await delayed(500, fruits);
    res.send(fruits);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: 'Something failed!' });
});

app.listen(port, () => {
  console.log(`App listenning on: ${port}`);
})

