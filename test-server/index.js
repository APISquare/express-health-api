
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const config = require('./healthApi.config.json');
const expressHealth = require("express-health-api");

app.use(expressHealth(config));

app.get('/hello', (req, res) =>
  res.send("Hello, Welcome to Express health test server"),
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express health test server listening on http://0.0.0.0:${port}`);
});
