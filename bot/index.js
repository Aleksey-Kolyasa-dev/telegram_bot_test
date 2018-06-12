'use strict';
import TelegramBot from 'node-telegram-bot-api';
import CONFIG from '../config';

const TOKEN = new CONFIG().getToken();

exports.BotInit = () => {
	const bot = new TelegramBot(TOKEN, { polling: true });

	bot.on('message', msg => {
		const { chat: { id } } = msg;
		bot.sendMessage(id, 'Pong');
	});

	bot.onText(/\/help (.+)/, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		bot.sendMessage(id, `You asked me about ${match} ???`);
	});
};


