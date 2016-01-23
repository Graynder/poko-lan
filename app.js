

var express = require('express'),
  config = require('./config/config');

var app = express();

require('./config/express')(app, config);


var io = require('socket.io') (app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
}));

require('./config/socket')(io,app);
