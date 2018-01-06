'use strict';

const app = require('./conf/express'),
    config = require('./conf/config'),
    path = require('path'),
    apiRouter = require('./routes/api'),
    connectionRouter = require('./routes/connection');


app.use('/api', apiRouter);
app.use('/api/connection', apiRouter);


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    console.log('accueil')
    res.redirect("/");
});


app.listen(config.PORT, config.HOST, function () {
    console.log('connnect on ' + config.HOST + ':' + config.PORT);
});
