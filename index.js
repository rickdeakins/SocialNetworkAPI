const express = require('express');
const db = require('./config/connections');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.then(() => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});