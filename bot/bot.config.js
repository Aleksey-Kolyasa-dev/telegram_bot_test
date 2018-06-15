import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config';

const bot = new TelegramBot(config.bot.token);
bot.setWebHook(config.bot.baseURL);

module.exports = bot;
