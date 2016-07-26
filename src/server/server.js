const http = require('http'),
    express = require('express'),
    path = require('path'),
    app = express(),
    server = http.createServer(app);

app.use(express.static(path.join(__dirname + '/../../build')));
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../index.html'));
});

app.set('port', (process.env.PORT || 9000));

server.listen(app.get('port'), () => {
    console.log( ['Server started; listening on port', app.get('port')].join(': ') );
});
