const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/multikart-admin'));

app.get('/*', function (req, res) {
   res.setFile(path.join(__dirname + '/dist/multikart-admin/index.html'))
});

app.listen(process.env.PORT || 8080);
