const express = require('express');
cost path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/multikart-admin'));
app.get('/', function (req, res) => {
    res.status(200).sendFile(path.join(__dirname + 'dist/multikart-admin/index.html'));
});

app.listen(process.env.PORT || 8080)