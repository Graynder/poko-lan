var express = require('express'),
  game = express.Router();

module.exports = function (app) {
  app.use('/game', game);
};

game.get('/', function (req, res) {
    res.render('game', {
      title: 'Poko-Lan',
    });
});

game.post('/', function (req, res) {
    console.log("not emplemented");

});
