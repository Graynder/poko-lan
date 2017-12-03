'use strict';

const express = require('express'),
    User = require('../models/user');

let connection = express.Router();

//Return the status authentification of the user 
connection.get('/', function (req, res) {
    res.json("Status");
});

connection.post('/', function (req, res) {
    console.log(req.ip)
    let newUser = new User("test", req.ip);

    if(req.app.locals.users == undefined){
        req.app.locals.users = [];
    }

    let userExist=false; 

    req.app.locals.users.forEach(users => {
        if(users.name == newUser.name){
            userExist = true;
        }
        if(users.ip == newUser.ip){
            userExist = true;
        }
    });

    if(userExist == false){
        req.app.locals.users.push(newUser);
    }

    console.log(req.app.locals.users);
});

module.exports = connection;
