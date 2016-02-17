var express = require('express'),
game = express.Router();

game.get('/', function (req, res, next) {

    var player = {};
    var otherPlayers = [];

    if (req.app.locals.game.users == undefined) {
        res.redirect('/');
    }else {
        req.app.locals.game.users.forEach(function(user){
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
            req.app.locals.game.userOnConnect = player;
            res.render('game', {
                title: 'Poko-Lan',
                ipServ: req.app.locals.game.ipServ.address,
                user: player,
                otherUsers: otherPlayers

            });
            next();
        }
    }
},function(req, res){
    console.log("Connexion d'un joueur");
});

module.exports = function (app) {
    app.use('/game', game);
};
