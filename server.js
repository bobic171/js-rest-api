let express = require('express'),
    app = express(),
    port = process.env.port || 3000;

app.listen(port);

console.log('RESTful API server started on: '+ port);