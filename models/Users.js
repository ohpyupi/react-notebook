const moment = require('moment');
const crypto = require('crypto');

class User {
	constructor(user) {
		this.id = user.id;
		this.username = user.username;
		this.salt = user.salt;
		this.hash = user.hash;
		this.createdAt = user.createdAt || moment().format('YYYY-MM-DD HH:mm:ss');
		this.editedAt = user.editedAt || moment().format('YYYY-MM-DD HH:mm:ss');
	}
	setPassword (password) {
		this.salt = crypto.randomBytes(16).toString('hex');
		this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
	}
	generateJWT() {
	
	}
	validPassword(password) {
		let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
		return this.hash === hash;
	}
}

module.exports = User;
