'use strict';

const express = require('express'),
      config = require('./back/conf/config');
const app = express();


app.get('/',function(req,res){
    res.send('test');
});

app.listen(config.PORT,config.HOST,function(){
    console.log('connnect on ' + config.HOST + ':' + config.PORT);
});
