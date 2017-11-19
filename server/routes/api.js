'use strict';

const express = require('express');

let api = express.Router();

//entry point of the api 
api.get('/', function (req, res){
    res.send('api');
});

module.exports = api;