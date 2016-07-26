const config = {};

config.port = process.env.port || 9000;
config.host = process.env.host || 'http://localhost';
config.debug = process.env.debug || false;
config.backendUrl = [config.host, '3000'].join(':'); //force mock api port for now.

module.exports = config;
