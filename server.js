var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/main.min.js.map', function(req, res) {
		res.sendFile(__dirname + '/dist/scripts/main.min.js.map');
});


var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
