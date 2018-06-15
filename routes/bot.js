'use strict';
const Router = require('express').Router();
import { onMessage } from '../controllers/bot.controller';

Router.post('/', onMessage);

module.exports = Router;
