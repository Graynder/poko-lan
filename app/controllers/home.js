var express = require('express'),
//creation du router home
home = express.Router();

var User = require('../models/User.js');

home.player=[];

home.get('/', function (req, res) {
    res.render('index', {
        title: 'Poko-Lan',
    });
});

home.post('/', function (req, res) {
    //test si le jouer s'est deja inscrit a la partie en cours
    for (var i = 0; i < home.player.length; i++) {
        if (home.player[i].user== req.body.username) {
            res.render('index', {
                title: 'Poko-Lan',
                error:'Un joueur a déjà ce nom'
            });
        }
    }
    //si pas inscrit, go en game
    if(!res.headersSent && home.player.length <5)
    {
        //ajout du new utilisateur
        var user = new User(req.body.username,req.ip)
        home.player.push(user);
        //console.log(home.player);
        req.app.locals.user = user;
        res.redirect('/game');
    }
});

module.exports = function (app) {
    app.use('/', home);
};
