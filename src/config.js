const config = {};

config.port = process.env.PORT || 9000;
config.host = process.env.HOST || 'http://localhost';
config.debug = process.env.debug || false;
config.backendUrl = [config.host, config.port].join(':');

module.exports = config;
