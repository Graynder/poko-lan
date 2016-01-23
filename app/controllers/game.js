var express = require('express'),
game = express.Router();

game.get('/', function (req, res, next) {

    var player = {};
    var otherPlayers = [];

    console.log(req.app.locals.users);

    if (req.app.locals.users == undefined) {
        res.redirect('/');
    }else {
        req.app.locals.users.forEach(function(user){
            //console.log(user);
            if (req.ip === user.ip) {
                player = user;
            } else {
                otherPlayers.push(user);
            }
        });

        if (player == {}) {
            console.log("joueur non trouvé");
            res.redirect('/');
        }else {
            console.log(otherPlayers);
            res.render('game', {
                title: 'Poko-Lan',
                ipServ: req.app.locals.ipLocal.address,
                user: player,
                otherUsers: otherPlayers
            });
            next();
        }
    }
},function(req, res, next){
    console.log("Connection des Sockets");
});


module.exports = function (app) {
    app.use('/game', game);
};
