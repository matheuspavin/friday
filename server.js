var express = require('express'),
  app = express(),
	port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

const addressRoute = require('./routes/addressRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use('/address', addressRoute);

const errorHandler = function (err, req, res, next) {
	console.error('Error:', err);
	res.status(500).send({ message: "server error" });
};

app.use(errorHandler);
app.listen(port);

console.log('API started on: ' + port);
