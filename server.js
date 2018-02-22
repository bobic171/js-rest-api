let express = require('express'),
    app = express(),
    port = process.env.port || 3000,
    mongoose = require('mongoose'),
    Note = require('./api/models/noteModel'),
    bodyParser = require('bodyParser');

// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Notes');

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' no idea what your looking for'})
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let routes = require('./api/routes/noteRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);