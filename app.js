var http = require('http');
var port = 3000;
var express = require('express');
var path = require('path');
var app = express();

app.set('port', port);
app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
    res.render('index.html');
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log('Error: Page Not Found');
    res.status(err.status || 500).send('Resource not available');
});

var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') throw error;
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`.red);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`.red);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    console.log(`Open http://localhost:${addr.port} in your browser`);
}