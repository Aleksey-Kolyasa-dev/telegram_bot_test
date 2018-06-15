'use strict';
import TelegramBot from 'node-telegram-bot-api';

const { config } = require('../config');


exports.BotInit = () => {
	const bot = new TelegramBot(config.bot.token, { polling: true });

	// bot.onText(/привет (.+)/i, (msg, [source, match]) => {
	// 	const { chat: { id } } = msg;
	// 	bot.sendMessage(id, `Привет, дорогой ${msg.from.first_name} :-) !`);
	// });

	bot.on('message', (msg) => {
		const { chat: { id }, text } = msg;
		switch (true) {
			case new RegExp('привет|здравствуй|hi|hello|hey', 'i').test(text) === true:
				bot.sendMessage(id, `Привет, дорогой ${msg.from.first_name} :-) !`);
				break;

			case new RegExp('кто', 'i').test(text) === true:
				bot.sendMessage(id, `
				Я - Теле-Теле-Бот, живу на https://www.heroku.com/ сервере. 
				Меня создал и посадил сюда Алексей, ты наверное знаешь его. 
				Сейчас я работаю в демо-режиме.
				`);
				break;

			case new RegExp('зовут|имя', 'i').test(text) === true:
				bot.sendMessage(id, `меня зовут - Теле-Теле-Бот.`);
				break;

			case new RegExp('пока|досвидания', 'i').test(text) === true:
				bot.sendMessage(id, `До новых встреч, дорогой ${msg.from.first_name}!`);
				break;

			case new RegExp('дела', 'i').test(text) === true:
				bot.sendMessage(id, `У меня все хорошо, мне нравиться жизнь на heroku!`);
				break;

			case new RegExp('хуй', 'i').test(text) === true:
				bot.sendMessage(id, `сам иди на @@@!`);
				break;

			case new RegExp('час|время|времени', 'i').test(text) === true:
				bot.sendMessage(id, `без пяти как стрелки упали...`);
				break;

			case new RegExp('погода', 'i').test(text) === true:
				bot.sendMessage(id, `да разве я знаю, на heroku всегда солнечно и тело!`);
				break;

			default:
				bot.sendMessage(id, `${msg.from.first_name}: вот, что ты мне написал: "${text}"`);
				break;
		}
	});
};
