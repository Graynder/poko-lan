'use strict';

const app = require('./conf/express');
const config = require('./conf/config');
const path = require('path');


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});


app.listen(config.PORT, config.HOST, function(){
    console.log('connnect on ' + config.HOST + ':' + config.PORT);
});
