'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      staticServer = require("serve-static");

let server = express();


// Parsers
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
server.use(staticServer('/usr/src/app/dist'));


module.exports = server;
