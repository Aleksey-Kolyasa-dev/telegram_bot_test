'use strict';
const express = require('express');
const { config } = require('./config');
const { BotInit } = require('./bot/');
const api = require('./routes/api');
let NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// Routes
app.use('/api', api);

app.listen(config.port, function () {
	console.log(`app is running at port ${config.port}`);
	BotInit();
});

// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send(err.message || 'Server Error');
});
