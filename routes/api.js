'use strict';
const Router = require('express').Router();
const bot = require('./bot');

Router.use('/bot', bot);


module.exports = Router;
