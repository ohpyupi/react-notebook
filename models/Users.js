const moment = require('moment');
const crypto = require('crypto');

class User {
	constructor() {
		this.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
		this.editedAt = moment().format('YYYY-MM-DD HH:mm:ss');
	}
	setPassword (password) {
		this.salt = crypto.randomBytes(16).toString('hex');
		this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
	}
	generateJWT() {
	
	}
}

module.exports = User;
