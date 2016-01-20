var express = require('express'),
    game = express.Router();

var User = require('../models/User.js');
var config = require('../../config/config.js')

var io;
game.player = [];


game.get('/', function (req, res) {
    //console.log(req.app.locals);
    io = require('socket.io').listen(req.app.listen(config.port));
    //on enregistre le nouveau joueur dans le controller
    game.player.push(req.app.locals.user);
   //on retourne la vue
   //var url = 'http://' + req.app.locals.ipLocal.address + "/socket.io/socket.io.js";
   //console.log(url);



    res.render('game', {
      title: 'Poko-Lan',
      //scriptSocket:url
    });
});
/*
io.sockets.on('connection', function (socket) {
  socket.emit('message', { message: 'welcome to the chat' });
  socket.on('send', function (data) {
    io.sockets.emit('message', data);
  });
});*/



module.exports = function (app) {
  app.use('/game', game);
};
