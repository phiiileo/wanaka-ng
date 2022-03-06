const path = require('path');
const express = require('express');
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/', (req, res) =>{
  res.send("Welcome to the  test server")
})
// start express server on port 5000
var port = process.env.PORT || 5300;
app.listen(port, () => {
  console.log('server started on port '+ port);
});
