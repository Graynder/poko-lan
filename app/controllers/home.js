var express = require('express'),
//creation du router home
home = express.Router();

var User = require('../models/User.js');

home.player = [];

home.get('/', function (req, res) {
    res.render('index', {
        title: 'Poko-Lan',
    });
});

home.get('/reset', function (req, res) {
// nouvelle table de joueurs
    home.player = [];
    req.app.locals.users = []; // memoire serveur
    res.redirect('/');
});

home.post('/', function (req, res) {
    //test si le jouer s'est deja inscrit a la partie en cours

    //console.log(" * * * ** new ** Name [" + req.body.username+"] - IP ["+req.ip+"]")

        for (var i = 0; i < home.player.length; i++) {
            if (home.player[i].ip == req.ip){
            console.log("########## log ip");
                res.render('index', {
                    title: 'Poko-Lan',
                    error:'Un joueur utilise déjà cette ip'
                });
            }
            //console.log(" * * * * Home ** Name [" + home.player[i].name+"] - IP ["+req.ip+"]")
            else if (!res.headersSent && home.player[i].name == req.body.username){
            console.log("########## log pseudo");
                        res.render('index', {
                            title: 'Poko-Lan',
                            error:'Un joueur utilise déjà ce pseudo'
                        });
            }
        }

    //si pas inscrit et table non pleine, go en game
    if( !res.headersSent)
    {
      if(home.player.length < 5){
       //ajout du new utilisateur
              var user = new User(req.body.username,req.ip)
              home.player.push(user);
              //console.log(home.player);
              req.app.locals.users = home.player;
              res.redirect('/game');}

              else{
              console.log("########## log plein");
                      res.render('index', {
                          title: 'Poko-Lan',
                          error:'Table pleine'
                      });
              }
     }

});

module.exports = function (app) {
    app.use('/', home);
};
