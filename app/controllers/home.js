var express = require('express'),
  home = express.Router();

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

});
