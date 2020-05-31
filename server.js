const express = require('express');
cost path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/multikart-admin'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'dist/multikart-admin/index.html'))
})