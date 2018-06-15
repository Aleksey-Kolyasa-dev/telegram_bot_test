"use strict";
const express = require('express');
const { config } = require('./config');
const { BotInit } = require('./bot/');


const app = express();
app.listen(config.port, function () {
	console.log(`app is running at port ${config.port}`);
	BotInit();
});



