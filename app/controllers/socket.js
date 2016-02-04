var express = require('express'),
    socket = require('socket.io');


module.exports  = function (io, app) {

    io.on('connection', function (socket) {
        socket.emit('news', app.locals.game);

        socket.on('fold',function () {
            console.log("fold");
        });
        socket.on('check',function () {
            console.log("check");
        });
        socket.on('call',function () {
            console.log("call");
        });
        socket.on('rise',function () {
            console.log("rise");
        });
    });
}
