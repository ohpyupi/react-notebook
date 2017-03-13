const moment = require('moment');
const crypto = require('crypto');
const connection = require('../config/mysql');
const jwt = require('jsonwebtoken');

require('dotenv').load();

class User {
	constructor(user={}) {
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
		let today = new Date();
		let exp = new Date(today);
		exp.setDate(today.getDate() + 1);
		return jwt.sign({
			id: this.id,
			username: this.username,
			exp: parseInt(exp.getTime() / 1000),
		}, process.env.AUTH_SECRET);
	
	}
	validPassword(password) {
		let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
		return this.hash === hash;
	}
	_findByUsername(username, cb) {
		connection.query(`select * from users where username = '${username}'`, (err, results, fields)=>{
			cb(err, new User(results[0]));
		});
	}
}

module.exports = User;
