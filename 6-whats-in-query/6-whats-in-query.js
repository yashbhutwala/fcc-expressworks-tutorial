var express = require('express');
var app = express();

app.get('/search', function cb(req, res){
    var query = req.query;
    res.send(query);
});

app.listen(process.argv[2]);