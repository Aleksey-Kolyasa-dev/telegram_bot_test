'use strict';
const Router = require('express').Router();
import bot from './bot';

Router.use('/bot', bot);

module.exports = Router;
