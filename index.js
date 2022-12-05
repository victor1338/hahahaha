// run `node index.js` in the terminal
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('your actual server URL');
// handle ALL requests
app.all('/*', (req, res) => {
  // send this to client
  res.send('Hello World!');
});
// listen to port 3000
const server = app.listen(3000);
