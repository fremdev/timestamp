const path = require('path');
const express = require('express');

const {getTimestampObj} = require('./utils/timestamp');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));

app.get('/:data', (req, res) => {
  const data = req.params.data;
  res.send(getTimestampObj(data));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = {app};
