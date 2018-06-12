export default class CONFIG {
	constructor() {
		this.port = process.env.PORT || 4000;
		this.bot = {
			token: `616800225:AAEN6fFczxKmg0WYtSfPl1KiA55KH0_ZUJg`,
		}
	}

	getPort() {
		return this.port;
	}

	getToken() {
		return this.bot.token;
	}
}

