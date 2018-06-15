'use strict';
const env = process.env.NODE_ENV || 'development';

export const config = {
	port: process.env.PORT || 4000,
	bot: {
		token: `616800225:AAEN6fFczxKmg0WYtSfPl1KiA55KH0_ZUJg`,
		get baseURL() {
			return env === 'development'
				? `https://c5165410.ngrok.io/api/bot`
				: `https://tele-tele-test.herokuapp.com/api/bot`;
		},
	},
};
