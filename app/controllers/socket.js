var express = require('express'),
    socket = require('socket.io');


module.exports  = function (io, app) {

    io.on('connection', function (socket) {
      socket.emit('news', app.locals.game);
    });
}
