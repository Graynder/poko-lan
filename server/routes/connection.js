'use strict';

const express = require('express');

let connection = express.Router();

//Return the status authentification of the user 
connection.get('/', function (req, res) {
    res.send("Status ");
});

connection.post('/', function (req, res) {

});

module.exports = connection;