var express = require('express');
var app = express();
app.get('/home', function cb(req, res) {
  res.end('Hello World!');
});
app.listen(process.argv[2]);
