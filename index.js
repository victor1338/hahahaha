// run `node index.js` in the terminal
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://stu074:p495717W@cluster0.qsanyuv.mongodb.net/stu074'
);
// handle ALL requests
const db = mongoose.connection;
// Upon connection failure
db.on('error', console.error.bind(console,
'Connection error:'));
// Upon opening the database successfully
db.once('open', function () {
console.log("Connection is open...");
/* ... Lab 7 work on app.get() and app.post() */
app.get('/event/:eventId/loc/:locId', (req, res) => {
  // Send the file 'index.html' in the folder of the current script
  res.sendFile(__dirname + '/index.html');
  // __dirname holds absolute path of the folder of the current script
});

// handle POST request
app.post('/event/:eventId/loc/:locId', (req, res) => {
  // Parameters are made available as properties of req.body
  var buf =
    'Event ID: ' +
    req.params['eventId'] +
    '<br>' +
    'Loc ID: ' +
    req.params['locId'] +
    '<br>' +
    'Login ID: ' +
    req.body['loginId'];
  res.send(buf);
});

// handle ALL requests
app.all('/*', (req, res) => {
  // send this to client
  res.send('Hello World!');
});
...
})
const server = app.listen(3000);
// listen to port 3000
const server = app.listen(3000);
