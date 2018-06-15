'use strict';
import express from 'express';
import { config } from './config';
import api from './routes/api';

const app = express();
app.use(express.json());

// Routes
app.use('/api', api);

app.listen(config.port, function () {
	console.log(`app is running at port ${config.port}`);
});

// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send(err.message || 'Server Error');
});
