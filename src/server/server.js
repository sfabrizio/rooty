const http = require('http'),
    express = require('express'),
    path = require('path'),
    config = require('../config'),
    app = express(),
    server = http.createServer(app);

app.use(express.static(path.join(__dirname + '/../../build')));
app.use('/', (req, res) => {
    if (!req.get('port')) { //force redirect to mockup server
        res.redirect(['http://localhost:3000',req.originalUrl].join(''));
    } else {
        res.sendFile(path.join(__dirname + '/../../build/index.html'));
    }
});

app.set('port', config.port );

server.listen(app.get('port'), () => {
    console.log( 'Server start at: ', [config.host, config.port].join(':'));
});
