#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

module.exports.port = port;

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

const boot = () => {
  server.listen(app.get('port'),() => {
    console.info('Express server listening on port ' + app.get('port'));
  });
}

const shutdown = () => {
  server.close();
}

module.exports.boot = boot;
module.exports.shutdown = shutdown;
