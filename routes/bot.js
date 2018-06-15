'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/bot.controller');


Router.post('/bot', ctrl.onMessage);

module.exports = Router;
