var express = require('express'),
  home = express.Router();

var Pile = require('../models/Pile');

module.exports = function (app) {
  app.use('/', home);
};

home.get('/', function (req, res) {
    res.render('index', {
      title: 'Poko-Lan',
    });
});

home.post('/', function (req, res) {
    console.log(req.body);
	var pile = new Pile();
	console.log("Pile vide");
	console.log(pile.pileFixe);
	console.log(pile.pile);
	console.log("Initialise la pile");
	pile.nouvellePile();
	console.log(pile.pile);
	console.log("Pioche les 3 premiers cartes");
	console.log(pile.piocher());
	console.log(pile.piocher());
	console.log(pile.piocher());
	res.render('index', {
      title: 'Poko-Lan',
    });
});
