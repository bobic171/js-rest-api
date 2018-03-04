'use strict';

let express = require('express');
let app = express();
let port = 3000;
let mongoose = require('mongoose');
let morgan = require('morgan');
let Note = require('./api/models/noteModel');
let bodyParser = require('body-parser');
let config = require('config');

let options = {
    server: {
        socketOptions: {
            keepAlive: 1,
            connectionTimeoutMS: 30000
        }
    },
    resplset: {
        socketOptions: {
            keepAlive: 1,
            connectionTimeoutMS: 30000
        }
    }
}


mongoose.connect(config.Management_Database, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

if (config.util.getEnv('NODE_ENV') != 'test') {
    app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/json'
}));

app.get("/", (req, res) => res.json({
    mesage: "--Noter--"
}));

let routes = require('./api/routes/noteRoutes');
app.get(routes.noteRouting)

routes.noteRouting(app);

app.listen(port);

console.log("Port : " + port);

app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + 'Oops'
    });
});

module.exprts = app;