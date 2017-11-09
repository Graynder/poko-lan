'use strict';

const express = require('express');
const bodyParser = require('body-parser')

let server = express();

server.use(bodyParser.urlencoded({ extended: false }));



module.exports = server;