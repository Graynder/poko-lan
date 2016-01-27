var express = require('express'),
game = express.Router();

game.get('/', function (req, res, next) {

    var player = {};
    var otherPlayers = [];

    if (req.app.locals.users == undefined) {
        res.redirect('/');
    }else {
        req.app.locals.users.forEach(function(user){
            if (req.ip === user.ip) {
                player = user;
            } else {
                otherPlayers.push(user);
            }
        });
      //console.log("##### player ### ");
      //console.log(player);
      //console.log(player.ip);

        if (!Object.keys(player).length) {
            console.log("joueur non trouvé ["+player+"]");
            res.redirect('/');
        }else {
           //console.log(otherPlayers);
            res.render('game', {
                title: 'Poko-Lan',
                ipServ: req.app.locals.ipLocal.address,
                user: player,
                otherUsers: otherPlayers
            });
            next();
        }
    }
},function(req, res){
    console.log("Connexion des Sockets");
});

game.get('/reset', function (req, res) {
    player = {}; // moi
    otherPlayers = []; // tous sauf moi
    req.app.locals.users = []; // memoire serveur
    res.redirect('/');
});


module.exports = function (app) {
    app.use('/game', game);
};

