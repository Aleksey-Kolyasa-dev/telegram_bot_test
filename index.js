"use strict";
const express = require('express');
import CONFIG from './config';

const { BotInit } = require('./bot/');
const port = new CONFIG().getPort();


const app = express();
app.listen(port, function () {
	console.log(`app is running at port ${port}`);
	BotInit();
});



