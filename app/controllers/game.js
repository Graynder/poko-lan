var express = require('express'),
    game = express.Router();

game.get('/', function (req, res) {
    console.log(req.app.locals);
    res.render('game', {
      title: 'Poko-Lan',
    });
});

game.post('/', function (req, res) {
    console.log("not emplemented");

});

module.exports = function (app) {
  app.use('/game', game);
};
