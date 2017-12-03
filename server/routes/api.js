'use strict';

const express = require('express'),
    connectionRouter = require('./connection');

let api = express.Router();

//entry point of the api 
api.get('/', function (req, res){
    res.send('api');
});

api.use("/connection", connectionRouter)

module.exports = api;
