'use strict';
import bot from '../bot/bot.config';
import { botHandlers } from '../bot/bot.handlers';
botHandlers();

export const onMessage = async (req, res, next) => {
	const { body } = req;
	try {
		bot.processUpdate(body);
		res.sendStatus(200);
	} catch (err) {
		return next(err);
	}
};
