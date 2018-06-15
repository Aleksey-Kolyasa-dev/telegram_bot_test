'use strict';
import TelegramBot from 'node-telegram-bot-api';
const { config } = require('../config');

let flag = false;

exports.BotInit = () => {
	const bot = new TelegramBot(config.bot.token, { polling: true });

	// bot.onText(/привет (.+)/i, (msg, [source, match]) => {
	// 	const { chat: { id } } = msg;
	// 	bot.sendMessage(id, `Привет, дорогой ${msg.from.first_name} :-) !`);
	// });

	bot.onText(/привет/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `Привет, дорогой ${msg.from.first_name} :-) !`);
		flag = true;
	});

	bot.onText(/кто/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `Я - Теле-Теле-Бот, живу на https://www.heroku.com/ сервере, меня создал и посадил сюда Алексей, ты наверное знаешь его. Сейчас я работаю в демо-режиме`);
		flag = true;
	});

	bot.onText(/зовут/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `меня зовут - Теле-Теле-Бот.`);
		flag = true;
	});

	bot.onText(/имя/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `мое имя - Теле-Теле-Бот.`);
		flag = true;
	});

	bot.onText(/пока/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `До новых встреч, дорогой ${msg.from.first_name}!`);
		flag = true;
	});

	bot.onText(/дела/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `У меня все хорошо, жизнь на heroku мне пока нравиться)`);
		flag = true;
	});

	bot.onText(/хуй/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `сам иди на @@@!`);
		flag = true;
	});

	bot.onText(/час/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `без пяти как стрелки упали...`);
		flag = true;
	});

	bot.onText(/погода/i, (msg, [source, match]) => {
		const { chat: { id } } = msg;
		if (flag) return;
		bot.sendMessage(id, `да разве я знаю, на heroku всегда солнечно и тело!`);
		flag = true;
	});

	bot.on('message', msg => {
		const { chat: { id } } = msg;
		if (flag) {
			flag = !flag;
			return;
		}
		bot.sendMessage(id, `${msg.from.first_name}: вот, что ты мне написал: "${msg.text}"`);
	});
};


