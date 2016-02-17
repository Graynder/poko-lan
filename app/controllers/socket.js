var express = require('express'),
socket = require('socket.io');


module.exports  = function (io, app) {

    //console.log(app);

    io.on('connection', function (socket) {

        //console.log(app.locals.game.userOnConnect);

        //assigne l'idSocket au joueur qui initialise la connection socket
        app.locals.game.users.forEach(function (user) {
            if (user.name === app.locals.game.userOnConnect.name) {
                user.sessionSocket = socket;
            }

            //console.log(socket);
        });

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


    // Every 1 second, many actions:
    setInterval(function() {
        var randomUser;
        if (app !== undefined && app.locals.game.users.length > 0) {
            startGame();
        }
    }, 1000);

    function startGame() {
        console.log("test startGame");
        console.log(io.eio.clientsCount);

        if (io.eio.clientsCount <= 2) {
            console.log("on lance la main");
            io.sockets.emit("lancement de la game")
        }
    }


}
